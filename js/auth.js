/* ============================================================
   登录 / 注册（多部门账号）
   - 登录态存 localStorage（演示版）
   - 右上角登录入口（语言按钮右侧）
   - login.html 页面表单逻辑
   ============================================================ */
(function () {
  var AUTH_KEY = "circu-auth";
  var USERS_KEY = "circu-users";

  function lang() { return window.getLang ? window.getLang() : "zh"; }
  function t(k) { return window.t ? window.t(k) : k; }

  function getAuth() {
    try {
      var raw = localStorage.getItem(AUTH_KEY);
      var a = raw ? JSON.parse(raw) : null;
      if (!a || !a.user || !a.user.account) return null; // 无效登录态视为未登录
      return a;
    } catch (e) { return null; }
  }
  function setAuth(a) {
    try { localStorage.setItem(AUTH_KEY, JSON.stringify(a)); } catch (e) { /* ignore */ }
  }
  function clearAuth() {
    try { localStorage.removeItem(AUTH_KEY); } catch (e) { /* ignore */ }
    try { localStorage.setItem(AUTH_KEY, "null"); } catch (e) { /* ignore */ }
  }

  /* 统一退出（其他页面也调用） */
  window.logoutAuth = function () {
    clearAuth();
  };

  /* 跨标签页同步：任何标签页退出/登录，其他标签页的按钮立即刷新 */
  try {
    window.addEventListener("storage", function (e) {
      if (e.key === AUTH_KEY || e.key === null) renderBtn();
    });
  } catch (e) { /* ignore */ }
  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); } catch (e) { return []; }
  }
  function saveUser(u) {
    var list = getUsers();
    list.push(u);
    try { localStorage.setItem(USERS_KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  /* ---------- 右上角登录按钮 ---------- */
  function renderBtn() {
    // 清理旧按钮（避免重复插入）
    document.querySelectorAll(".auth-btn, .auth-out").forEach(function (n) { n.remove(); });
    if (document.body.getAttribute("data-page") === "login") return;

    var auth = getAuth();
    var topbar = document.querySelector(".topbar");
    var btn = document.createElement("a");
    btn.href = auth && auth.user ? "profile.html" : "login.html";
    btn.textContent = auth && auth.user
      ? " " + (auth.user.dept || auth.user.org || t("auth.logged"))
      : " " + t("auth.login");
    if (topbar) {
      btn.className = "auth-btn";
      topbar.appendChild(btn);
    } else {
      var group = document.querySelector(".top-fixed-group");
      btn.className = "auth-btn auth-btn-fixed";
      (group || document.body).appendChild(btn);
    }

    if (auth && auth.user) {
      var out = document.createElement("button");
      out.className = "auth-out";
      out.textContent = t("auth.logout");
      out.addEventListener("click", function () {
        clearAuth();
        location.replace("index.html");
      });
      if (topbar) topbar.appendChild(out);
      else {
        var group2 = document.querySelector(".top-fixed-group");
        out.classList.add("auth-out-fixed");
        (group2 || document.body).appendChild(out);
      }
    }
  }

  /* ---------- 登录页逻辑 ---------- */
  function initLoginPage() {
    var tabs = document.querySelectorAll(".auth-tab");
    var panels = document.querySelectorAll(".auth-panel");
    tabs.forEach(function (tb) {
      tb.addEventListener("click", function () {
        tabs.forEach(function (x) { x.classList.remove("active"); });
        tb.classList.add("active");
        panels.forEach(function (p) { p.style.display = "none"; });
        var target = document.getElementById(tb.getAttribute("data-panel"));
        if (target) target.style.display = "block";
      });
    });

    function showMsg(msg, isErr) {
      var el = document.getElementById("auth-msg");
      if (el) {
        el.textContent = msg;
        el.className = "auth-msg" + (isErr ? " err" : "");
      }
    }

    /* 登录 */
    var loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var account = document.getElementById("l-account").value.trim();
        var pass = document.getElementById("l-pass").value;
        fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ account: account, password: pass })
        }).then(function (r) { return r.json(); }).then(function (res) {
          if (res && res.ok) { setAuth({ token: res.token, user: res.user }); done(t("auth.ok.login")); }
          else { localLogin(account, pass); }
        }).catch(function () { localLogin(account, pass); });
      });
      function localLogin(account, pass) {
        var u = getUsers().filter(function (x) { return x.account === account && x.password === pass; })[0];
        if (u) { setAuth({ token: "local-" + Date.now(), user: u }); done(t("auth.ok.login")); }
        else { showMsg(t("auth.err"), true); }
      }
    }

    /* 注册 */
    var signupForm = document.getElementById("signup-form");
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var user = {
          type: document.getElementById("s-type").value,
          org: document.getElementById("s-org").value.trim(),
          code: document.getElementById("s-code").value.trim(),
          dept: document.getElementById("s-dept").value.trim(),
          contact: document.getElementById("s-contact").value.trim(),
          account: document.getElementById("s-account").value.trim(),
          password: document.getElementById("s-pass").value
        };
        // 联系方式 = 登录账号（邮箱 / 微信 / 电话均可）
        user.contactway = user.account;
        if (!user.org) { showMsg(t("auth.err.org"), true); return; }
        if (!user.account || !user.password) { showMsg(t("auth.err.signup"), true); return; }
        fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        }).then(function (r) { return r.json(); }).then(function (res) {
          if (res && res.ok) { setAuth({ token: res.token, user: res.user }); done(t("auth.ok.signup")); }
          else {
            var errKey = (res && res.error === "contactway exists") ? "auth.err.contactway.exists"
              : (res && res.error === "account exists") ? "auth.err.account.exists"
              : "auth.err.signup";
            showMsg(t(errKey), true);
          }
        }).catch(function () { localSignup(user); });
      });
      function localSignup(user) {
        var users = getUsers();
        if (users.some(function (u) { return u.account === user.account; })) {
          showMsg(t("auth.err.account.exists"), true);
          return;
        }
        if (user.contactway && users.some(function (u) { return u.contactway && u.contactway === user.contactway; })) {
          showMsg(t("auth.err.contactway.exists"), true);
          return;
        }
        saveUser(user);
        setAuth({ token: "local-" + Date.now(), user: user });
        done(t("auth.ok.signup"));
      }
    }

    function done(msg) {
      showMsg(msg, false);
      var next = "index.html";
      try {
        var q = new URLSearchParams(location.search).get("next");
        if (q) next = q;
      } catch (e) { /* 忽略 */ }
      setTimeout(function () { location.href = next; }, 900);
    }
  }

  window.renderAuth = renderBtn;
  window.getAuthUser = function () { var a = getAuth(); return a ? a.user : null; };

  function boot() {
    renderBtn();
    if (document.body.getAttribute("data-page") === "login") initLoginPage();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
