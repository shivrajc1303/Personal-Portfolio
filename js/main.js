(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function tagList(arr) { var u = el("ul", "tags"); arr.forEach(function (t) { u.appendChild(el("li", "tag", t)); }); return u; }
  var LEVEL = { c: "Comfortable", f: "Familiar", b: "Beginner" };

  if (!D) { $("#main").prepend(el("p", "wrap err", "Content could not be loaded. Please email " + "chorageshivraj@gmail.com instead.")); return; }

  /* links: single source of truth (data.js). Empty URL hides the control. */
  var hrefs = { github: D.links.github, linkedin: D.links.linkedin, certs: D.links.certs, resume: D.links.resume, email: "mailto:" + D.email };
  $$("[data-link]").forEach(function (a) {
    var u = hrefs[a.dataset.link];
    if (u) { a.href = u; a.hidden = false; } else { a.hidden = true; }
  });

  /* facts + contact */
  [["Location", "Pune, Maharashtra, India"], ["Studying", "B.Tech AI & ML, JSPM University (2027)"], ["Languages", "Python, C++, C, Java"], ["Speaks", D.spoken], ["Direction", "Software Developer / SDE"]]
    .forEach(function (f) { $("#facts").append(el("dt", "", f[0]), el("dd", "", f[1])); });
  [["Email", D.email, "mailto:" + D.email], ["Phone", D.phone, "tel:" + D.phone.replace(/\s/g, "")], ["LinkedIn", "Shivraj Chorage on LinkedIn", D.links.linkedin, 1], ["GitHub", "shivrajc1303 on GitHub", D.links.github, 1]]
    .forEach(function (c) {
      if (!c[2]) return;
      var li = el("li"), a = el("a", "lnk", c[1]); a.href = c[2];
      if (c[3]) { a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label", c[1] + " (opens in a new tab)"); }
      li.append(el("strong", "", c[0] + ": "), a); $("#contactList").append(li);
    });
  $("#yr").textContent = "© " + new Date().getFullYear() + " Shivraj Chorage";

  /* skills */
  D.skills.forEach(function (g) {
    var c = el("section", "card skillgroup"), u = el("ul"); c.setAttribute("aria-label", g.cat); c.append(el("h3", "", g.cat));
    g.items.forEach(function (i) { var li = el("li"), l = el("span", "lvl", LEVEL[i[1]]); l.dataset.l = i[1]; li.append(el("span", "", i[0]), l); u.append(li); });
    c.append(u); $("#skillGrid").append(c);
  });

  /* projects + accessible dialog */
  var dlg = $("#dlg"), opener = null;
  function block(title, v) {
    var d = el("div"); d.append(el("h4", "", title));
    if (Array.isArray(v) && v.length) { var u = el("ul", "bul"); v.forEach(function (x) { u.append(el("li", "", x)); }); d.append(u); }
    else if (typeof v === "string" && v) d.append(el("p", "", v));
    else d.append(el("p", "empty", "To be added."));
    return d;
  }
  function openProject(p, btn) {
    opener = btn; var b = $("#dlgBody"); b.replaceChildren();
    var h = el("h3", "", p.title); h.id = "dlg-t";
    b.append(h, el("span", "status", p.status), el("p", "", p.shortDescription), block("Problem", p.problem), block("Solution", p.solution), block("Key features", p.features));
    var t = el("div"); t.append(el("h4", "", "Technology"), tagList(p.technologies)); b.append(t);
    b.append(block("Architecture", p.architecture), block("Challenges", p.challenges), block("Lessons learned", p.lessonsLearned));
    var row = el("div", "row");
    [["Source code", p.githubUrl], ["Live demo", p.liveUrl]].forEach(function (l) {
      if (!l[1]) return; var a = el("a", "btn alt", l[0]); a.href = l[1]; a.target = "_blank"; a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", l[0] + " for " + p.title + " (opens in a new tab)"); row.append(a);
    });
    var close = el("button", "btn", "Close project details"); close.type = "button"; close.onclick = function () { dlg.close(); };
    row.append(close); b.append(row);
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  dlg.addEventListener("close", function () { if (opener) opener.focus(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  D.projects.forEach(function (p) {
    var c = el("article", "card proj"); c.dataset.r = "";
    var btn = el("button", "btn", "View details"); btn.type = "button"; btn.setAttribute("aria-label", "View details for " + p.title);
    btn.onclick = function () { openProject(p, btn); };
    c.append(el("span", "status", p.status), el("h3", "", p.title), el("p", "", p.shortDescription), el("p", "muted", p.category), tagList(p.technologies), btn);
    $("#projGrid").append(c);
  });

  /* experience + certs */
  var I = D.internship, ic = el("article", "card"); ic.dataset.r = "";
  var iu = el("ul", "bul"); I.points.forEach(function (x) { iu.append(el("li", "", x)); });
  ic.append(el("span", "status", "Internship"), el("h3", "", I.role), el("p", "", I.org), el("p", "muted", I.date), iu); $("#expGrid").append(ic);
  D.certs.forEach(function (x) { var c = el("article", "card"); c.dataset.r = ""; c.append(el("span", "status", "Certificate"), el("h3", "", x.title), el("p", "muted", x.meta)); $("#expGrid").append(c); });

  /* education */
  D.education.forEach(function (e) {
    var c = el("article", "card"); c.dataset.r = ""; c.append(el("h3", "", e.inst), el("p", "", e.prog), el("p", "muted", e.date), el("p", "", e.note));
    if (e.record) {
      var d = el("details"), t = el("table"), cap = el("caption", "vh", "Diploma semester percentages");
      d.append(el("summary", "", "Semester record")); t.append(cap);
      e.record.forEach(function (r) { var tr = el("tr"), th = el("th", "", r[0]); th.scope = "row"; tr.append(th, el("td", "", r[1])); t.append(tr); });
      d.append(t); c.append(d);
    }
    $("#eduGrid").append(c);
  });
  D.achievements.forEach(function (a) { var c = el("article", "card"); c.dataset.r = ""; c.append(el("span", "status", a.kind), el("h3", "", a.title), el("p", "muted", a.date)); $("#achGrid").append(c); });

  /* contact form: builds a mailto, never claims to send */
  var st = $("#status");
  $("#cform").addEventListener("submit", function (ev) {
    ev.preventDefault(); st.textContent = ""; var first = null;
    [["n", "Enter your name."], ["e", "Enter a valid email address."], ["m", "Write a message."]].forEach(function (f) {
      var i = $("#" + f[0]), v = i.value.trim(), ok = v && (f[0] !== "e" || /^\S+@\S+\.\S+$/.test(v));
      i.setAttribute("aria-invalid", ok ? "false" : "true"); $("#" + f[0] + "-e").textContent = ok ? "" : "Error: " + f[1];
      if (!ok && !first) first = i;
    });
    if (first) { first.focus(); return; }
    try {
      var body = $("#m").value + "\n\nFrom: " + $("#n").value + " (" + $("#e").value + ")";
      location.href = "mailto:" + D.email + "?subject=" + encodeURIComponent("Portfolio enquiry from " + $("#n").value) + "&body=" + encodeURIComponent(body);
      st.textContent = "Message prepared successfully. Send it from your email app.";
    } catch (x) { st.textContent = "Something went wrong. Please use email instead: " + D.email; }
  });

  /* mobile menu: Escape closes, focus stays inside while open, focus returns to trigger */
  var burger = $("#burger"), menu = $("#menu");
  function setMenu(open, refocus) {
    menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", String(open)); burger.textContent = open ? "Close" : "Menu";
    if (!open && refocus) burger.focus();
  }
  burger.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (!menu.classList.contains("open")) return;
    if (e.key === "Escape") { setMenu(false, true); return; }
    if (e.key !== "Tab") return;
    var f = [burger].concat($$("a", menu)), a = document.activeElement;
    if (e.shiftKey && a === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && a === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });
  window.addEventListener("resize", function () { if (innerWidth > 820) setMenu(false); });

  /* active section (text marker + underline, not colour alone) */
  var links = $$("a", menu);
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return;
        var id = x.target.dataset.nav || x.target.id;
        links.forEach(function (a) { if (a.hash === "#" + id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    $$("main section[id]").forEach(function (s) { so.observe(s); });
  }

  /* reveal + hero grid response (both off for reduced motion) */
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rev = $$("[data-r]");
  if (reduce || !("IntersectionObserver" in window)) { rev.forEach(function (n) { n.classList.add("in"); }); return; }
  var ro = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); ro.unobserve(x.target); } }); }, { threshold: 0.1 });
  rev.forEach(function (n) { ro.observe(n); });
  var hero = $(".hero"), tick = false;
  hero.addEventListener("pointermove", function (e) {
    if (tick || e.pointerType === "touch") return; tick = true;
    requestAnimationFrame(function () { hero.style.setProperty("--gx", e.clientX / 40 + "px"); hero.style.setProperty("--gy", e.clientY / 40 + "px"); tick = false; });
  });
})();
