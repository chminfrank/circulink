/* ============================================================
   页面渲染逻辑 Rendering logic
   ============================================================ */
(function () {
  function lang() { return window.getLang ? window.getLang() : "zh"; }

  function L(o) {
    if (o === null || o === undefined) return "";
    if (typeof o === "object") {
      if (o[lang()] !== undefined) return o[lang()];
      return o.zh || "";
    }
    return o;
  }

  /* 给页面内联脚本复用：window.L({zh,en}) 取当前语言文案 */
  window.L = L;

  function t(k) { return window.t ? window.t(k) : k; }

  /* 卡片头部真实照片（失效自动回退渐变底） */
  function photoHead(kind, id) {
    var im = (typeof imgFor === "function") ? imgFor(kind, id) : null;
    if (!im) return "";
    return (
      '<div class="card-img">' +
        '<img src="' + im.url + '" alt="" loading="lazy" onerror="this.style.display=\'none\'" />' +
        '<span class="img-caption">' + (im.cap ? L(im.cap) : "") + "</span>" +
      "</div>"
    );
  }

  function photoHero(kind, id) {
    var im = (typeof imgFor === "function") ? imgFor(kind, id) : null;
    var hero = document.querySelector(".detail-hero");
    if (!im || !hero) return;
    hero.classList.add("has-photo");
    /* 用真实 <img> 元素承载照片：比 CSS 背景更稳，且能监听加载失败 */
    var img = hero.querySelector(".detail-hero-photo");
    if (!img) {
      img = document.createElement("img");
      img.className = "detail-hero-photo";
      img.alt = "";
      hero.insertBefore(img, hero.firstChild);
    }
    img.src = im.url;
  }

  /* ---------- 院校卡片 ---------- */
  function schoolCard(s) {
    var dirs = s.directions.map(function (d) {
      return '<span class="tag">' + L(d) + "</span>";
    }).join("");
    return (
      '<a class="card card-link" href="school-detail.html?id=' + s.id + '">' +
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

  /* ---------- 企业卡片 ---------- */
  function companyCard(c) {
    var jobs = c.jobs.map(function (j) {
      return (
        '<div class="job"><span class="job-name">' + L(j.name) +
        '</span><span class="job-count">' + j.count + t("unit.people") + "</span></div>"
      );
    }).join("");
    return (
      '<a class="card card-link" href="company-detail.html?id=' + c.id + '">' +
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

  /* ---------- 设备卡片 ---------- */
  function equipmentCard(e) {
    var mentor = null;
    MENTORS.forEach(function (m) { if (m.id === e.mentorId) mentor = m; });
    var fits = e.fits.map(function (f) {
      return '<span class="tag">' + L(f) + "</span>";
    }).join("");
    return (
      '<a class="card card-link" href="equipment-detail.html?id=' + e.id + '">' +
        photoHead("equipment", e.id) +
        '<div class="card-head">' +
          '<div class="avatar equipment-avatar">' + e.icon + "</div>" +
          '<div class="card-title"><h3>' + L(e.name) + '</h3><span class="meta">' + L(e.category) + "</span></div>" +
        "</div>" +
        '<div class="price-row">' +
          '<div class="price-cell new"><span class="price-label">' + t("card.newprice") + "</span><span class='price-num'>" + L(e.newPrice) + "</span></div>" +
          '<div class="price-cell used"><span class="price-label">' + t("card.price") + "</span><span class='price-num'>" + L(e.price) + "</span></div>" +
        "</div>" +
        '<div class="tags"><span class="tag-title">' + t("card.directions.title") + "</span>" + fits + "</div>" +
        (mentor
          ? '<div class="mentor-line"><span class="mentor-line-label">' + t("card.mentor") + "</span>" +
            '<span class="mentor-line-name">' + mentor.icon + " " + L(mentor.name) + "</span></div>"
          : "") +
        '<span class="card-more">' + t("card.more") + " →</span>" +
      "</a>"
    );
  }

  /* ---------- 技师卡片 ---------- */
  function mentorCard(m) {
    var courses = m.courses.slice(0, 3).map(function (c) {
      return '<span class="tag">' + L(c) + "</span>";
    }).join("");
    return (
      '<div class="card mentor-card">' +
        photoHead("mentors", m.id) +
        '<div class="card-head">' +
          '<div class="avatar mentor-avatar">' + m.icon + "</div>" +
          '<div class="card-title"><h3>' + L(m.name) + '</h3><span class="meta">' + L(m.trade) + "</span></div>" +
        "</div>" +
        '<p class="card-desc">' + L(m.intro) + "</p>" +
        '<div class="stat-box">' +
          '<span class="stat-num">' + m.years + '</span><span class="stat-unit">' + t("unit.years") + "</span>" +
          '<span class="stat-label">' + t("detail.years") + "</span>" +
        "</div>" +
        '<div class="tags"><span class="tag-title">' + t("card.courses") + "</span>" + courses + "</div>" +
        '<div class="card-foot">' + L(m.origin) + "</div>" +
      "</div>"
    );
  }

  /* ---------- 学校详情 ---------- */
  function renderSchoolDetail() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"), 10) || 1;
    var s = null;
    SCHOOLS.forEach(function (x) { if (x.id === id) s = x; });
    if (!s) s = SCHOOLS[0];
    var D = s.details;
    photoHero("schools", s.id);

    document.getElementById("detail-avatar").textContent = s.icon;
    document.getElementById("detail-type").textContent = L(s.type);
    document.getElementById("detail-name").textContent = L(s.name);
    var en = document.getElementById("detail-en");
    en.textContent = s.name.en || "";
    en.style.display = s.name.en ? "" : "none";

    document.title = L(s.name) + " · " + t("title.schoolDetail");

    document.getElementById("quick-stats").innerHTML = [
      [L(D.founded), t("detail.founded")],
      [L(D.students), t("detail.students")],
      [s.interns + t("unit.people"), t("card.interns.label")],
      [L(D.retention), t("detail.retention")]
    ].map(function (pair) {
      return (
        '<div class="quick-stat"><span class="quick-num">' + pair[0] +
        '</span><span class="quick-label">' + pair[1] + "</span></div>"
      );
    }).join("");

    var highlights = D.highlights.map(function (h) { return "<li>" + L(h) + "</li>"; }).join("");
    var majors = D.majors.map(function (m) { return '<span class="pill">' + L(m) + "</span>"; }).join("");
    var directions = s.directions.map(function (d) { return '<span class="pill">' + L(d) + "</span>"; }).join("");

    document.getElementById("detail-grid").innerHTML =
      '<div class="detail-main">' +
        '<section class="info-card">' +
          "<h2>" + t("detail.about") + "</h2>" +
          '<p class="info-text">' + L(D.about) + "</p>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.highlights") + "</h2>" +
          '<ul class="tick-list">' + highlights + "</ul>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.majors") + "</h2>" +
          '<div class="pill-list">' + majors + "</div>" +
        "</section>" +
      "</div>" +
      '<aside class="detail-side">' +
        '<section class="info-card">' +
          "<h2>" + t("detail.directions") + "</h2>" +
          '<div class="pill-list">' + directions + "</div>" +
          '<div class="side-stat">' +
            '<span class="side-stat-num">' + s.interns + t("unit.people") + "</span>" +
            '<span class="side-stat-text">' + t("detail.interns.quota") + "</span>" +
          "</div>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.contact") + "</h2>" +
          '<ul class="contact-list">' +
            '<li><span class="contact-label">' + t("detail.address") + "</span><span>" + L(D.address) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.phone") + "</span><span>" + L(D.phone) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.email") + "</span><span>" + L(D.email) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.teachers") + "</span><span>" + L(D.teachers) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.campus") + "</span><span>" + L(D.campus) + "</span></li>" +
          "</ul>" +
        "</section>" +
      "</aside>";
  }

  /* ---------- 企业详情 ---------- */
  function renderCompanyDetail() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"), 10) || 1;
    var c = null;
    COMPANIES.forEach(function (x) { if (x.id === id) c = x; });
    if (!c) c = COMPANIES[0];
    var D = c.details;
    photoHero("companies", c.id);

    document.getElementById("detail-avatar").textContent = c.icon;
    document.getElementById("detail-type").textContent = L(c.scale);
    document.getElementById("detail-name").textContent = L(c.name);
    var en = document.getElementById("detail-en");
    en.textContent = c.name.en || "";
    en.style.display = c.name.en ? "" : "none";

    document.title = L(c.name) + " · " + t("title.companyDetail");

    document.getElementById("quick-stats").innerHTML = [
      [L(D.founded), t("detail.founded")],
      [L(D.employees), t("detail.employees")],
      [L(D.subsidy), t("detail.subsidy")],
      [L(D.conversion), t("sum.conversion")]
    ].map(function (pair) {
      return (
        '<div class="quick-stat"><span class="quick-num">' + pair[0] +
        '</span><span class="quick-label">' + pair[1] + "</span></div>"
      );
    }).join("");

    var services = D.services.map(function (s2) { return '<span class="pill">' + L(s2) + "</span>"; }).join("");
    var benefits = D.benefits.map(function (b) { return "<li>" + L(b) + "</li>"; }).join("");
    var jobs = c.jobs.map(function (j) {
      return (
        '<div class="job-card">' +
          '<div class="job-card-head">' +
            '<span class="job-card-name">' + L(j.name) + "</span>" +
            '<span class="job-count">' + j.count + t("unit.people") + "</span>" +
          "</div>" +
          '<p class="job-duty"><span class="duty-label">' + t("detail.job.duty") + "：</span>" + L(j.duty) + "</p>" +
        "</div>"
      );
    }).join("");

    document.getElementById("detail-grid").innerHTML =
      '<div class="detail-main">' +
        '<section class="info-card">' +
          "<h2>" + t("detail.about.c") + "</h2>" +
          '<p class="info-text">' + L(D.about) + "</p>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.services") + "</h2>" +
          '<div class="pill-list">' + services + "</div>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.jobs") + "</h2>" +
          jobs +
        "</section>" +
      "</div>" +
      '<aside class="detail-side">' +
        '<section class="info-card">' +
          "<h2>" + t("detail.benefits") + "</h2>" +
          '<ul class="tick-list">' + benefits + "</ul>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.contact") + "</h2>" +
          '<ul class="contact-list">' +
            '<li><span class="contact-label">' + t("detail.address") + "</span><span>" + L(D.address) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.website") + "</span><span>" + L(D.website) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.email") + "</span><span>" + L(D.email) + "</span></li>" +
          "</ul>" +
        "</section>" +
      "</aside>";
  }

  /* ---------- 设备详情 ---------- */
  function renderEquipmentDetail() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"), 10) || 1;
    var e = null;
    EQUIPMENT.forEach(function (x) { if (x.id === id) e = x; });
    if (!e) e = EQUIPMENT[0];
    var mentor = null;
    MENTORS.forEach(function (m) { if (m.id === e.mentorId) mentor = m; });
    photoHero("equipment", e.id);

    document.getElementById("detail-avatar").textContent = e.icon;
    document.getElementById("detail-type").textContent = L(e.category);
    document.getElementById("detail-name").textContent = L(e.name);
    document.getElementById("detail-en").textContent = e.name.en || "";
    document.getElementById("detail-en").style.display = e.name.en ? "" : "none";

    document.title = L(e.name) + " · " + t("title.equipmentDetail");

    document.getElementById("quick-stats").innerHTML = [
      [L(e.condition), t("detail.condition")],
      [L(e.newPrice), t("detail.newprice")],
      [L(e.price), t("detail.price")],
      [mentor ? (mentor.years + t("unit.years")) : "—", t("detail.mentor")]
    ].map(function (pair) {
      return (
        '<div class="quick-stat"><span class="quick-num">' + pair[0] +
        '</span><span class="quick-label">' + pair[1] + "</span></div>"
      );
    }).join("");

    var fits = e.fits.map(function (f) { return '<span class="pill">' + L(f) + "</span>"; }).join("");

    document.getElementById("detail-grid").innerHTML =
      '<div class="detail-main">' +
        '<section class="info-card">' +
          "<h2>" + t("detail.equipdesc") + "</h2>" +
          '<p class="info-text">' + L(e.desc) + "</p>" +
        "</section>" +
        '<section class="info-card">' +
          "<h2>" + t("detail.fits") + "</h2>" +
          '<div class="pill-list">' + fits + "</div>" +
        "</section>" +
        (mentor
          ? '<section class="info-card">' +
              "<h2>" + t("detail.mentor") + "</h2>" +
              '<div class="mentor-line">' + mentor.icon + " " + L(mentor.name) +
              " · " + L(mentor.trade) + " · " + mentor.years + t("unit.years") + "</div>" +
              '<p class="info-text" style="margin-top:10px;">' + L(mentor.intro) + "</p>" +
            "</section>"
          : "") +
      "</div>" +
      '<aside class="detail-side">' +
        '<section class="info-card">' +
          "<h2>" + t("detail.condition") + "</h2>" +
          '<ul class="contact-list">' +
            '<li><span class="contact-label">' + t("detail.condition") + "</span><span>" + L(e.condition) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.origin") + "</span><span>" + L(e.origin) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.newprice") + "</span><span>" + L(e.newPrice) + "</span></li>" +
            '<li><span class="contact-label">' + t("detail.price") + "</span><span>" + L(e.price) + "</span></li>" +
          "</ul>" +
        "</section>" +
        (mentor
          ? '<section class="info-card">' +
              "<h2>" + t("detail.mentorCourses") + "</h2>" +
              '<div class="pill-list">' + mentor.courses.map(function (c) { return '<span class="pill">' + L(c) + "</span>"; }).join("") + "</div>" +
              '<a class="mentor-link" href="mentors.html">' + t("nav.back.equipment") + "</a>" +
            "</section>"
          : "") +
      "</aside>";
  }

  /* ---------- 远端数据库合并（库 → 模板 → 页面 闭环） ---------- */
  var remoteLoaded = false;
  function loadRemote(cb) {
    if (remoteLoaded) { cb(); return; }
    try {
      fetch("/api/data").then(function (r) { return r.json(); }).then(function (db) {
        remoteLoaded = true;
        var recs = (db && db.records) || [];
        recs.forEach(function (r) {
          var zh = r.name || r.org || r.contact || "";
          if (r.type === "equipment") {
            var id = "r" + r.id;
            EQUIPMENT.push({
              id: id, icon: "",
              name: { zh: zh, en: zh },
              category: { zh: r.field || "登记设备", en: r.field || "Registered" },
              origin: { zh: "登记企业：" + (r.org || "—"), en: "From: " + (r.org || "—") },
              condition: { zh: "待检测（登记数据）", en: "To be inspected" },
              newPrice: "—", price: r.price ? ("¥" + r.price) : "面议",
              mentorId: null, fits: [], desc: { zh: r.note || "", en: r.note || "" }
            });
            if (r.photo) IMAGES.equipment[id] = { url: r.photo, cap: { zh: zh, en: zh } };
          }
          if (r.type === "mentor") {
            var id2 = "r" + r.id;
            MENTORS.push({
              id: id2, icon: "‍",
              name: { zh: zh, en: zh },
              trade: { zh: r.field || "技师", en: r.field || "Technician" },
              years: 0, origin: { zh: r.org || "", en: r.org || "" },
              courses: [], intro: { zh: r.note || "", en: r.note || "" }
            });
            if (r.photo) IMAGES.mentors[id2] = { url: r.photo, cap: { zh: zh, en: zh } };
          }
        });
        cb();
      }).catch(cb);
    } catch (e) { cb(); }
  }

  /* ---------- 页面入口 ---------- */
  function doRender(page) {
    if (page === "home") {
      var hg = document.getElementById("history-grid");
      if (hg && typeof HISTORY !== "undefined") {
        hg.innerHTML = HISTORY.map(function (h) {
          return '<div class="history-card"><h3>' + L(h.t) + "</h3><p>" + L(h.d) + "</p></div>";
        }).join("");
      }
      var pg = document.getElementById("policy-grid");
      if (pg && typeof POLICIES !== "undefined") {
        pg.innerHTML = POLICIES.map(function (p) {
          var pol = (lang() === "en" && p.en) ? p.en : p.zh;
          var no = (lang() === "en" && p.noEn) ? p.noEn : p.no;
          return '<div class="policy-card">' +
            '<span class="policy-no">' + no + "</span>" +
            "<h4>" + (pol.t || "") + "</h4>" +
            "<p>" + (pol.d || "") + "</p>" +
          "</div>";
        }).join("");
      }
    } else if (page === "enterprise") {
      var grid = document.getElementById("card-grid");
      if (grid) grid.innerHTML = SCHOOLS.map(schoolCard).join("");
    } else if (page === "school") {
      var grid2 = document.getElementById("card-grid");
      if (grid2) grid2.innerHTML = COMPANIES.map(companyCard).join("");
    } else if (page === "school-detail") {
      renderSchoolDetail();
    } else if (page === "company-detail") {
      renderCompanyDetail();
    } else if (page === "equipment") {
      var grid3 = document.getElementById("card-grid");
      if (grid3) grid3.innerHTML = EQUIPMENT.map(equipmentCard).join("");
    } else if (page === "equipment-detail") {
      renderEquipmentDetail();
    } else if (page === "mentors") {
      var grid4 = document.getElementById("card-grid");
      if (grid4) grid4.innerHTML = MENTORS.map(mentorCard).join("");
    }
  }

  window.renderPage = function () {
    var page = document.body.getAttribute("data-page");
    loadRemote(function () { doRender(page); });
  };
})();
