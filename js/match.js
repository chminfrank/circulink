/* ============================================================
   登记匹配 + 筛选引擎 Matching & Filtering
   mode = "school"   → 学校找企业（school.html）
   mode = "enterprise" → 企业找学校（enterprise.html）
   补贴规则：双方期望/提供价上下浮动 20% 均视为匹配
   ============================================================ */
(function () {
  function lang() { return window.getLang ? window.getLang() : "zh"; }
  function L(o) {
    if (o === null || o === undefined) return "";
    if (typeof o === "object") return o[lang()] !== undefined ? o[lang()] : (o.zh || "");
    return o;
  }
  function t(k) { return window.t ? window.t(k) : k; }

  var GBA = ["深圳", "广州", "佛山", "香港", "江门", "东莞", "珠海", "Shenzhen", "Guangzhou", "Foshan", "Hong Kong", "Jiangmen"];

  function inGba(city) { return city ? GBA.indexOf(city) >= 0 : false; }

  function photoHead(kind, id) {
    var im = (typeof imgFor === "function") ? imgFor(kind, id) : null;
    if (!im) return "";
    return (
      '<div class="card-img">' +
        '<img src="' + im.url + '" alt="" loading="lazy" onerror="this.style.display=\'none\'" />' +
        '<span class="img-caption">' + (im.cap || "") + "</span>" +
      "</div>"
    );
  }

  /* ---------- 卡片渲染（带匹配分） ---------- */
  function schoolCard(s, score) {
    var dirs = s.directions.map(function (d) { return '<span class="tag">' + L(d) + "</span>"; }).join("");
    return (
      '<a class="card card-link" href="school-detail.html?id=' + s.id + '">' +
        (score !== undefined
          ? '<span class="score-badge">' + t("match.score") + " " + score + "%</span>"
          : "") +
        photoHead("schools", s.id) +
        '<div class="card-head">' +
          '<div class="avatar school-avatar">' + s.icon + "</div>" +
          '<div class="card-title"><h3>' + L(s.name) + '</h3><span class="meta">' + L(s.type) + "</span></div>" +
        "</div>" +
        '<p class="card-desc">' + L(s.intro) + "</p>" +
        '<div class="stat-box">' +
          '<span class="stat-num">' + s.interns + '</span><span class="stat-unit">' + t("unit.people") + "</span>" +
          '<span class="stat-label">' + t("card.interns.label") + "</span>" +
        "</div>" +
        '<div class="tags"><span class="tag-title">' + t("card.directions.title") + "</span>" + dirs + "</div>" +
        '<span class="card-more">' + t("card.more") + " →</span>" +
      "</a>"
    );
  }

  function companyCard(c, score) {
    var jobs = c.jobs.map(function (j) {
      return '<div class="job"><span class="job-name">' + L(j.name) +
        '</span><span class="job-count">' + j.count + t("unit.people") + "</span></div>";
    }).join("");
    return (
      '<a class="card card-link" href="company-detail.html?id=' + c.id + '">' +
        (score !== undefined
          ? '<span class="score-badge">' + t("match.score") + " " + score + "%</span>"
          : "") +
        photoHead("companies", c.id) +
        '<div class="card-head">' +
          '<div class="avatar company-avatar">' + c.icon + "</div>" +
          '<div class="card-title"><h3>' + L(c.name) + '</h3><span class="meta">' + L(c.scale) + "</span></div>" +
        "</div>" +
        '<p class="card-desc">' + L(c.intro) + "</p>" +
        '<div class="jobs">' + jobs + "</div>" +
        '<div class="card-foot">' + L(c.subsidyText) + "</div>" +
        '<span class="card-more">' + t("card.more") + " →</span>" +
      "</a>"
    );
  }

  /* ---------- 需求池存取 ---------- */
  function loadDemands() {
    try {
      return JSON.parse(localStorage.getItem("circu-demands") || "[]");
    } catch (e) { return []; }
  }

  function saveDemand(demand) {
    var list = loadDemands();
    list.push(demand);
    try { localStorage.setItem("circu-demands", JSON.stringify(list)); } catch (e) { /* ignore */ }
    try {
      fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(demand)
      }).catch(function () { /* 本地预览时无后端，忽略 */ });
    } catch (e) { /* ignore */ }
  }

  /* ---------- 匹配算法 ---------- */
  function scoreCompany(input, tag) {
    var score = 0;
    // 方向标签重合
    input.fields.forEach(function (f) {
      if (tag.fields.indexOf(f) >= 0) score += 2;
    });
    // 年级
    if (input.grade && tag.grades.indexOf(input.grade) >= 0) score += 2;
    // 位置：同城 +3，同大湾区 +1
    if (input.city && tag.city === input.city) score += 3;
    else if (input.city && inGba(tag.city) && inGba(input.city)) score += 1;
    // 补贴：期望值落在 [min×0.8, max×1.2]（±20% 浮动）
    if (input.subsidy) {
      var lo = tag.subsidyMin * 0.8, hi = tag.subsidyMax * 1.2;
      if (input.subsidy >= lo && input.subsidy <= hi) score += 2;
    }
    // 体量
    if (input.size && tag.size === input.size) score += 1;
    // 自定义标签命中企业名/简介/方向
    if (input.other) {
      var kw = input.other.toLowerCase();
      if (tag.fields.join(" ").toLowerCase().indexOf(kw) >= 0) score += 2;
    }
    return score;
  }

  function scoreSchool(input, tag) {
    var score = 0;
    input.fields.forEach(function (f) {
      if (tag.fields.indexOf(f) >= 0) score += 2;
    });
    if (input.grade && tag.grades.indexOf(input.grade) >= 0) score += 2;
    if (input.city && tag.city === input.city) score += 3;
    else if (input.city && inGba(tag.city) && inGba(input.city)) score += 1;
    // 学校期望补贴与企业提供区间（±20%）的交集
    if (input.subsidy) {
      var lo = tag.expectMin * 0.8, hi = tag.expectMax * 1.2;
      if (input.subsidy >= lo && input.subsidy <= hi) score += 2;
    }
    if (input.other) {
      var kw = input.other.toLowerCase();
      if (tag.fields.join(" ").toLowerCase().indexOf(kw) >= 0) score += 2;
    }
    return score;
  }

  /* ---------- 动态下拉选项的中英对照（语言切换时重填） ---------- */
  var DYN = {
    "机械": "Mechanical", "电子": "Electronics", "食品": "Food", "纺织": "Textiles",
    "自动化": "Automation", "品质": "Quality", "智能制造": "Smart Manufacturing",
    "服装": "Apparel", "供应链": "Supply Chain", "软件": "Software", "机电": "Mechatronics",
    "数控": "CNC", "模具": "Moulding", "汽车": "Automotive", "网络通信": "Network & Comms",
    "工业设计": "Industrial Design", "电子信息": "Electronic Info", "机器人": "Robotics",
    "建造": "Construction",
    "深圳": "Shenzhen", "广州": "Guangzhou", "佛山": "Foshan", "香港": "Hong Kong",
    "江门": "Jiangmen", "东莞": "Dongguan"
  };
  function D(x) { return window.getLang && window.getLang() === "en" ? (DYN[x] || x) : x; }

  /* ---------- 匹配主流程 ---------- */
  function runMatch(mode) {
    var form = document.getElementById("match-form");
    var resultBox = document.getElementById("match-result");
    var grid = document.getElementById("card-grid");
    if (!form) return;

    /* 未登录不允许匹配：强制跳转登录/注册页，登录后带回本页 */
    var au = window.getAuthUser ? window.getAuthUser() : null;
    if (!au) {
      var here = location.pathname.split("/").pop() || "register-school.html";
      location.href = "login.html?next=" + encodeURIComponent(here);
      return;
    }

    var input = {
      grade: (form.querySelector('[name="grade"]') || {}).value || "",
      field: (form.querySelector('[name="field"]') || {}).value || "",
      city: (form.querySelector('[name="city"]') || {}).value || "",
      subsidy: parseFloat((form.querySelector('[name="subsidy"]') || {}).value) || 0,
      size: (form.querySelector('[name="size"]') || {}).value || "",
      other: ((form.querySelector('[name="other"]') || {}).value || "").trim(),
      /* 单位 / 联系人 / 联系方式全部取自登录账号，表单不再重复收集 */
      contact: au.contact || "",
      contactway: au.contactway || au.account || "",
      orgName: au.org || "",
      fields: []
    };
    if (input.field) input.fields = [input.field];
    if (input.other) input.fields.push(input.other);

    var scored = [];
    if (mode === "school") {
      COMPANIES.forEach(function (c) {
        var tag = (MATCH_TAGS.companies || {})[c.id] || {};
        var s = scoreCompany(input, tag);
        if (s > 0) scored.push({ item: c, score: Math.min(100, Math.round(s * 14)) });
      });
    } else {
      SCHOOLS.forEach(function (s) {
        var tag = (MATCH_TAGS.schools || {})[s.id] || {};
        var sc = scoreSchool(input, tag);
        if (sc > 0) scored.push({ item: s, score: Math.min(100, Math.round(sc * 14)) });
      });
    }
    scored.sort(function (a, b) { return b.score - a.score; });

    if (scored.length === 0) {
      saveDemand({ mode: mode, time: new Date().toISOString(), orgName: input.orgName, grade: input.grade, field: input.field, city: input.city, subsidy: input.subsidy, size: input.size, other: input.other, contact: input.contact, contactway: input.contactway });
      var noneKey = mode === "school" ? "match.result.none" : "match.result.none.c";
      resultBox.innerHTML = t("match.registered") + "<br>" + t(noneKey) + "：" + (input.fields.join(" / ") || "—") +
        "<br>" + t("match.result.none2");
      resultBox.classList.add("show");
      return;
    }

    var topKey = mode === "school" ? "match.result.top" : "match.result.top.c";

    // 无卡片区（独立登记页）：渲染推荐列表进结果框
    if (!grid) {
      var listHtml = scored.slice(0, 6).map(function (x) {
        var item = x.item;
        var link = mode === "school" ? ("company-detail.html?id=" + item.id) : ("school-detail.html?id=" + item.id);
        return (
          '<div class="rec-item"><a href="' + link + '">' +
            "<strong>" + L(item.name) + "</strong>" +
            '<span class="score-badge">' + t("match.score") + " " + x.score + "%</span>" +
          "</a><p>" + L(item.intro) + "</p></div>"
        );
      }).join("");
      resultBox.innerHTML = t(topKey).replace("{n}", scored.length) + listHtml;
      resultBox.classList.add("show");
      return;
    }

    resultBox.innerHTML = t(topKey).replace("{n}", scored.length);
    resultBox.classList.add("show");

    var ordered = [];
    scored.forEach(function (x) { ordered.push(x.item); });
    COMPANIES.forEach(function (c) { if (scored.every(function (x) { return x.item !== c; })) ordered.push(c); });
    SCHOOLS.forEach(function (s) { if (scored.every(function (x) { return x.item !== s; })) ordered.push(s); });

    var html = "";
    scored.forEach(function (x) {
      html += mode === "school" ? companyCard(x.item, x.score) : schoolCard(x.item, x.score);
    });
    if (mode === "school") {
      ordered.forEach(function (c) { if (scored.every(function (x) { return x.item !== c; })) html += companyCard(c); });
    } else {
      ordered.forEach(function (s) { if (scored.every(function (x) { return x.item !== s; })) html += schoolCard(s); });
    }
    grid.innerHTML = html;
  }

  /* ---------- 筛选 ---------- */
  var activeFilter = {};
  var activeSort = {};
  var keyword = {};

  /* ---------- 高级筛选：分组 / 多选 / 可收起 ---------- */
  var OPEN_ROWS = 8;
  var shownCount = {};          // 每组默认露出多少个选项，其余收进「更多」
  var expandedRows = {};      // mode:group -> true
  var collapsedPanel = {};    // mode -> true（整个面板收起）

  function uniq(arr) {
    var out = [], seen = {};
    arr.forEach(function (v) {
      if (v && !seen[v]) { seen[v] = true; out.push(v); }
    });
    return out;
  }

  var LEVEL_EN = {
    "技师学院": "Technician College",
    "高职专科": "Higher Vocational",
    "职业本科": "Vocational Degree",
    "中职": "Secondary Vocational"
  };
  function lab(v) {
    if (!(window.getLang && window.getLang() === "en")) return v;
    return DYN[v] || LEVEL_EN[v] || v;
  }

  function levelOf(s) {
    var ty = L(s.type) || "";
    return ty.split("·")[0].trim();
  }

  function poolOf(mode) { return mode === "school" ? COMPANIES : SCHOOLS; }

  function tagOf(mode, item) {
    var bag = mode === "school" ? (MATCH_TAGS.companies || {}) : (MATCH_TAGS.schools || {});
    return bag[item.id] || {};
  }

  function bucketDefs(mode) {
    if (mode === "school") {
      return [
        { val: "b1", label: "≤ 80", test: function (t) { return (t.subsidyMin || 0) <= 80; } },
        { val: "b2", label: "81–100", test: function (t) { var v = t.subsidyMin || 0; return v > 80 && v <= 100; } },
        { val: "b3", label: "101–120", test: function (t) { var v = t.subsidyMin || 0; return v > 100 && v <= 120; } },
        { val: "b4", label: "≥ 121", test: function (t) { return (t.subsidyMin || 0) > 120; } }
      ];
    }
    return [
      { val: "b1", label: "≤ 110", test: function (t) { return (t.expectMin || 0) <= 110; } },
      { val: "b2", label: "111–140", test: function (t) { var v = t.expectMin || 0; return v > 110 && v <= 140; } },
      { val: "b3", label: "141–170", test: function (t) { var v = t.expectMin || 0; return v > 140 && v <= 170; } },
      { val: "b4", label: "≥ 171", test: function (t) { return (t.expectMin || 0) > 170; } }
    ];
  }

  /* 分组定义：scan = 从数据里自动汇总选项；buckets = 固定区间 */
  function groupDefs(mode) {
    if (mode === "school") {
      return [
        { key: "city", labelKey: "filter.city", scan: "city" },
        { key: "field", labelKey: "filter.industry", scan: "field" },
        { key: "allowance", labelKey: "filter.allowance", buckets: bucketDefs(mode) },
        { key: "grade", labelKey: "filter.gradeNeed", scan: "grade" }
      ];
    }
    return [
      { key: "city", labelKey: "filter.city", scan: "city" },
      { key: "level", labelKey: "filter.level", scan: "level" },
      { key: "field", labelKey: "filter.major", scan: "field" },
      { key: "allowance", labelKey: "filter.allowanceNeed", buckets: bucketDefs(mode) }
    ];
  }

  function buildOptions(mode, def) {
    if (def.buckets) {
      return def.buckets.map(function (b) { return { val: b.val, label: b.label }; });
    }
    var vals = [];
    poolOf(mode).forEach(function (it) {
      var tag = tagOf(mode, it);
      if (def.scan === "city") { if (tag.city) vals.push(tag.city); }
      else if (def.scan === "field") { (tag.fields || []).forEach(function (f) { vals.push(f); }); }
      else if (def.scan === "grade") { (tag.grades || []).forEach(function (g) { vals.push(g); }); }
      else if (def.scan === "level") { var lv = levelOf(it); if (lv) vals.push(lv); }
    });
    return uniq(vals).map(function (v) { return { val: v, label: lab(v) }; });
  }

  function itemMatches(item, def, selected, mode) {
    if (!selected || !selected.length) return true;
    var tag = tagOf(mode, item);
    if (def.buckets) {
      return selected.some(function (v) {
        var b = def.buckets.filter(function (x) { return x.val === v; })[0];
        return b ? b.test(tag) : false;
      });
    }
    if (def.scan === "city") return selected.indexOf(tag.city) >= 0;
    if (def.scan === "field") {
      return (tag.fields || []).some(function (f) { return selected.indexOf(f) >= 0; });
    }
    if (def.scan === "grade") {
      return (tag.grades || []).some(function (g) { return selected.indexOf(g) >= 0; });
    }
    if (def.scan === "level") return selected.indexOf(levelOf(item)) >= 0;
    return true;
  }

  function renderWithFilter(mode) {
    var grid = document.getElementById("card-grid");
    if (!grid) return;
    var f = activeFilter[mode] || {};
    var kw = (keyword[mode] || "").toLowerCase();
    var defs = groupDefs(mode);
    var items = poolOf(mode).map(function (it) { return { c: it, tag: tagOf(mode, it) }; });
    items = items.filter(function (x) {
      return defs.every(function (def) { return itemMatches(x.c, def, f[def.key] || [], mode); });
    });
    if (kw) {
      items = items.filter(function (x) {
        var hay = (L(x.c.name) + " " + L(x.c.intro) + " " + (x.tag.fields || []).join(" ") + " " + (x.tag.city || "")).toLowerCase();
        return hay.indexOf(kw) >= 0;
      });
    }
    var sort = activeSort[mode] || "default";
    if (sort === "subsidyAsc") {
      items.sort(function (a, b) { return (a.tag.subsidyMin || a.tag.expectMin || 0) - (b.tag.subsidyMin || b.tag.expectMin || 0); });
    } else if (sort === "subsidyDesc") {
      items.sort(function (a, b) { return (b.tag.subsidyMin || b.tag.expectMin || 0) - (a.tag.subsidyMin || a.tag.expectMin || 0); });
    }
    grid.innerHTML = items.map(function (x) {
      return mode === "school" ? companyCard(x.c) : schoolCard(x.c);
    }).join("");
    shownCount[mode] = items.length;
    var shown = document.getElementById("adv-shown");
    if (shown) shown.textContent = items.length;
  }

  function buildSorts(mode) {
    var row = document.getElementById("sort-row");
    if (!row) return;
    var cur = activeSort[mode] || "default";
    var chips = [
      { key: "default", label: t("sort.default") },
      { key: "subsidyAsc", label: t("sort.subsidy") },
      { key: "subsidyDesc", label: t("sort.subsidyDesc") }
    ];
    row.innerHTML = chips.map(function (ch) {
      return '<button class="sort-chip' + (cur === ch.key ? " active" : "") + '" data-key="' + ch.key + '">' + ch.label + "</button>";
    }).join("");
    row.querySelectorAll(".sort-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeSort[mode] = btn.getAttribute("data-key");
        buildSorts(mode);
        renderWithFilter(mode);
      });
    });
  }

  function bindSearch(mode) {
    var input = document.getElementById("search-input");
    var btn = document.getElementById("search-btn");
    if (!input) return;
    input.addEventListener("input", function () {
      keyword[mode] = input.value;
      renderWithFilter(mode);
    });
    if (btn) btn.addEventListener("click", function () {
      keyword[mode] = input.value;
      renderWithFilter(mode);
    });
  }

  function buildFilters(mode) {
    var bar = document.getElementById("filter-bar");
    if (!bar) return;
    var f = activeFilter[mode] || (activeFilter[mode] = {});
    var defs = groupDefs(mode);
    var total = poolOf(mode).length;
    var picked = 0;
    defs.forEach(function (d) { picked += (f[d.key] || []).length; });

    bar.className = "adv-filter" + (collapsedPanel[mode] ? " collapsed" : "");

    var head = '<div class="adv-head">' +
      '<span class="adv-title">' + t("filter.title3") + "</span>" +
      '<span class="adv-shown-wrap">' + t("filter.showing") +
        ' <b id="adv-shown">' + (shownCount[mode] == null ? total : shownCount[mode]) + "</b> / " + total + " " + t("filter.unit") + "</span>" +
      (picked ? '<button class="adv-clear" data-act="clear">' + t("filter.clear") + " (" + picked + ")</button>" : "") +
      '<button class="adv-toggle" data-act="collapse">' +
        (collapsedPanel[mode] ? t("filter.expand") + " ▲" : t("filter.collapse") + " ▼") + "</button>" +
      "</div>";

    var rows = defs.map(function (def) {
      var opts = buildOptions(mode, def);
      var sel = f[def.key] || [];
      var ek = mode + ":" + def.key;
      var open = !!expandedRows[ek];
      var visible = open ? opts : opts.slice(0, OPEN_ROWS);
      var hidden = opts.length > OPEN_ROWS;

      var chips = visible.map(function (o) {
        var on = sel.indexOf(o.val) >= 0;
        return '<button class="adv-chip' + (on ? " active" : "") + '" data-key="' + def.key +
          '" data-val="' + o.val.replace(/"/g, "&quot;") + '">' + o.label + "</button>";
      }).join("");

      var more = hidden
        ? '<button class="adv-more" data-more="' + ek + '">' +
            (open ? t("filter.less") : t("filter.more") + "(" + (opts.length - OPEN_ROWS) + ")") + " ▼</button>"
        : "";

      return '<div class="adv-row" data-group="' + def.key + '">' +
        '<span class="adv-label">' + t(def.labelKey) + "：</span>" +
        '<div class="adv-opts">' + chips + more + "</div>" +
        "</div>";
    }).join("");

    bar.innerHTML = head + '<div class="adv-body">' + rows + "</div>";

    bar.querySelectorAll(".adv-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-key");
        var val = btn.getAttribute("data-val");
        var cur = (activeFilter[mode][key] || []).slice();
        var idx = cur.indexOf(val);
        if (idx >= 0) cur.splice(idx, 1); else cur.push(val);
        activeFilter[mode][key] = cur;
        buildFilters(mode);
        renderWithFilter(mode);
      });
    });
    bar.querySelectorAll("[data-more]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ek = btn.getAttribute("data-more");
        expandedRows[ek] = !expandedRows[ek];
        buildFilters(mode);
      });
    });
    var clearBtn = bar.querySelector('[data-act="clear"]');
    if (clearBtn) clearBtn.addEventListener("click", function () {
      activeFilter[mode] = {};
      buildFilters(mode);
      renderWithFilter(mode);
    });
    var tgl = bar.querySelector('[data-act="collapse"]');
    if (tgl) tgl.addEventListener("click", function () {
      collapsedPanel[mode] = !collapsedPanel[mode];
      buildFilters(mode);
    });
  }

  /* ---------- 表单下拉选项填充（语言切换时重跑，保留已选值） ---------- */
  function fillFormOptions(mode) {
    var form = document.getElementById("match-form");
    if (!form) return;

    /* 记住当前已选值，重填后恢复 */
    var saved = {};
    form.querySelectorAll("select").forEach(function (sel) {
      saved[sel.getAttribute("name")] = sel.value;
    });

    var orgSel = form.querySelector('[name="org"]');
    if (orgSel) {
      if (mode === "school") {
        orgSel.innerHTML = '<option value="">' + t("match.org") + "</option>" +
          SCHOOLS.map(function (s) { return '<option value="' + s.id + '">' + L(s.name) + "</option>"; }).join("");
      } else {
        orgSel.innerHTML = '<option value="">' + t("match.org.c") + "</option>" +
          COMPANIES.map(function (c) { return '<option value="' + c.id + '">' + L(c.name) + "</option>"; }).join("");
      }
    }
    form.querySelector('[name="field"]').innerHTML = '<option value="">' + t("match.field") + "</option>" +
      (mode === "school"
        ? ["机械", "电子", "食品", "纺织", "自动化", "品质", "智能制造", "服装", "供应链", "软件", "机电", "数控", "模具", "汽车", "网络通信", "工业设计"].map(function (f) { return '<option value="' + f + '">' + D(f) + "</option>"; }).join("")
        : ["智能制造", "电子信息", "机电", "数控", "模具", "汽车", "服装", "机器人", "软件", "工业设计", "网络通信", "建造"].map(function (f) { return '<option value="' + f + '">' + D(f) + "</option>"; }).join(""));

    form.querySelector('[name="city"]').innerHTML = '<option value="">' + t("match.city") + "</option>" +
      ["深圳", "广州", "佛山", "香港", "江门", "东莞"].map(function (c) { return '<option value="' + c + '">' + D(c) + "</option>"; }).join("");

    form.querySelector('[name="grade"]').innerHTML = '<option value="">' + t("match.grade") + "</option>" +
      [["大一", "match.g1"], ["大二", "match.g2"], ["大三", "match.g3"], ["大四", "match.g4"]].map(function (g) { return '<option value="' + g[0] + '">' + t(g[1]) + "</option>"; }).join("");

    var sizeSel = form.querySelector('[name="size"]');
    if (sizeSel) {
      sizeSel.innerHTML = '<option value="">' + (mode === "school" ? t("match.size") : t("match.size.c")) + "</option>" +
        [["大型", "match.l"], ["中型", "match.m"], ["小型", "match.s"]].map(function (g) { return '<option value="' + g[0] + '">' + t(g[1]) + "</option>"; }).join("");
    }

    form.querySelectorAll("select").forEach(function (sel) {
      var v = saved[sel.getAttribute("name")];
      if (v) sel.value = v;
    });
  }

  /* ---------- 登录状态提示（登记页顶部） ---------- */
  function refreshLoginHint() {
    var el = document.getElementById("login-hint");
    if (!el) return;
    var au = window.getAuthUser ? window.getAuthUser() : null;
    if (au) {
      el.textContent = t("reg.login.ok") + "：" + (au.org || "") + (au.contact ? " · " + au.contact : "");
      el.className = "match-sub login-hint ok";
    } else {
      el.textContent = t("reg.login.need");
      el.className = "match-sub login-hint";
    }
  }

  /* ---------- 表单初始化 ---------- */
  function initMatch(mode) {
    window.__matchMode = mode;
    fillFormOptions(mode);
    refreshLoginHint();
    var form = document.getElementById("match-form");
    if (form && !form.__bound) {
      form.__bound = true;
      form.querySelector(".btn-match").addEventListener("click", function () { runMatch(mode); });
      form.querySelector(".btn-reset").addEventListener("click", function () {
        form.querySelectorAll("select, input").forEach(function (el) { el.value = ""; });
        document.getElementById("match-result").classList.remove("show");
        activeFilter[mode] = {};
        buildFilters(mode);
        renderWithFilter(mode);
      });
    }

    buildFilters(mode);
    buildSorts(mode);
    bindSearch(mode);
    renderWithFilter(mode);
  }

  /* 语言切换：重填下拉选项、刷新登录提示 */
  window.addEventListener("circu-lang-changed", function () {
    if (window.__matchMode) { fillFormOptions(window.__matchMode); buildFilters(window.__matchMode); buildSorts(window.__matchMode); renderWithFilter(window.__matchMode); }
    refreshLoginHint();
  });

  window.initMatch = initMatch;
})();
