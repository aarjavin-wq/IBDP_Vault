/* IBDP Vault — site logic. You should not need to edit this file to add notes. */
(function () {
  "use strict";

  // ---------- data registry ----------
  var DATA = {};
  window.IBV = {
    add: function (subject) {
      // Give every topic an id (used in the URL) if the author didn't set one
      (subject.units || []).forEach(function (u) {
        (u.topics || []).forEach(function (t) {
          if (!t.id) t.id = String(t.num || t.title).toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-|-$/g, "");
        });
      });
      DATA[subject.id] = subject;
    }
  };

  var loaded = {};
  function loadSubject(id) {
    if (loaded[id]) return loaded[id];
    loaded[id] = new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "data/" + id + ".js";
      s.onload = function () { resolve(DATA[id] || null); };
      s.onerror = function () { resolve(null); };
      document.head.appendChild(s);
    });
    return loaded[id];
  }
  function loadAll() {
    return Promise.all(IBV_SUBJECTS.map(function (s) { return loadSubject(s.id); }));
  }

  // ---------- helpers ----------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function inline(s) {
    // **bold**, *italic*, `code`, [link](url) — applied after escaping
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[(.+?)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  // Tiny markdown: paragraphs, "- " bullets, "1. " lists, "### " headings, "| a | b |" tables
  function md(text) {
    if (Array.isArray(text)) text = text.join("\n");
    var lines = String(text || "").split("\n"), out = [], i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (!line.trim()) { i++; continue; }
      if (/^###\s/.test(line)) { out.push("<h3>" + inline(line.replace(/^###\s/, "")) + "</h3>"); i++; continue; }
      if (/^\s*-\s/.test(line)) {
        var items = [];
        while (i < lines.length && /^\s*-\s/.test(lines[i])) { items.push("<li>" + inline(lines[i].replace(/^\s*-\s/, "")) + "</li>"); i++; }
        out.push("<ul>" + items.join("") + "</ul>"); continue;
      }
      if (/^\s*\d+\.\s/.test(line)) {
        var oitems = [];
        while (i < lines.length && /^\s*\d+\.\s/.test(lines[i])) { oitems.push("<li>" + inline(lines[i].replace(/^\s*\d+\.\s/, "")) + "</li>"); i++; }
        out.push("<ol>" + oitems.join("") + "</ol>"); continue;
      }
      if (/^\s*\|/.test(line)) {
        var rows = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(lines[i]); i++; }
        rows = rows.filter(function (r) { return !/^\s*\|[\s:|-]+\|\s*$/.test(r); });
        var html = rows.map(function (r, idx) {
          var cells = r.trim().replace(/^\||\|$/g, "").split("|");
          var tag = idx === 0 ? "th" : "td";
          return "<tr>" + cells.map(function (c) { return "<" + tag + ">" + inline(c.trim()) + "</" + tag + ">"; }).join("") + "</tr>";
        }).join("");
        out.push("<table>" + html + "</table>"); continue;
      }
      var para = [];
      while (i < lines.length && lines[i].trim() && !/^(###\s|\s*-\s|\s*\d+\.\s|\s*\|)/.test(lines[i])) { para.push(lines[i]); i++; }
      out.push("<p>" + para.map(inline).join("<br>") + "</p>");
    }
    return out.join("");
  }
  function hasContent(t) {
    return !!(t.summary || (t.terms && t.terms.length) || (t.questions && t.questions.length) || (t.tips && t.tips.length));
  }
  function allTopics(subject) {
    var list = [];
    (subject.units || []).forEach(function (u) {
      (u.topics || []).forEach(function (t) { list.push({ unit: u, topic: t }); });
    });
    return list;
  }
  function renderMath(el) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(el, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) {}
    }
  }

  // ---------- progress (per browser) ----------
  var KEY = "ibv-done-v1";
  function getDone() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function setDone(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function isDone(sid, tid) { var d = getDone(); return !!(d[sid] && d[sid].indexOf(tid) > -1); }
  function toggleDone(sid, tid) {
    var d = getDone(); d[sid] = d[sid] || [];
    var i = d[sid].indexOf(tid);
    if (i > -1) d[sid].splice(i, 1); else d[sid].push(tid);
    setDone(d);
  }

  // ---------- theme ----------
  function initTheme() {
    var saved; try { saved = localStorage.getItem("ibv-theme"); } catch (e) {}
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    var btn = $("#theme-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("ibv-theme", next); } catch (e) {}
    });
  }

  // ---------- home page ----------
  function initHome() {
    var gridRoot = $("#subjects");
    var order = [1, 2, 3, 34, 4, 5];
    loadAll().then(function () {
      var done = getDone();
      gridRoot.innerHTML = order.map(function (g) {
        var subs = IBV_SUBJECTS.filter(function (s) { return s.group === g; });
        if (!subs.length) return "";
        return '<h2 class="section-title">' + esc(IBV_GROUPS[g]) + '</h2><div class="grid">' +
          subs.map(function (s) {
            var d = DATA[s.id], topics = d ? allTopics(d) : [];
            var ready = topics.filter(function (x) { return hasContent(x.topic); }).length;
            var mine = (done[s.id] || []).length;
            var pct = topics.length ? Math.round(100 * mine / topics.length) : 0;
            return '<a class="card" style="--c:' + s.colour + '" href="subject.html?s=' + s.id + '">' +
              '<span class="meta">' + esc(s.level) + '</span>' +
              '<h3>' + esc(s.name) + '</h3>' +
              '<span class="count">' + topics.length + ' topics · ' + ready + ' with notes</span>' +
              '<span class="count">Your progress: ' + mine + '/' + topics.length + '</span>' +
              '<div class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></div>' +
              '</a>';
          }).join("") + '</div>';
      }).join("");
    });

    // search
    var input = $("#search"), box = $("#results");
    var index = null;
    function buildIndex() {
      index = [];
      IBV_SUBJECTS.forEach(function (s) {
        var d = DATA[s.id]; if (!d) return;
        allTopics(d).forEach(function (x) {
          var t = x.topic;
          var termText = (t.terms || []).map(function (p) { return p[0] + " " + p[1]; }).join(" ");
          index.push({
            s: s, t: t,
            hay: [t.id, t.title, x.unit.title, termText, Array.isArray(t.summary) ? t.summary.join(" ") : (t.summary || "")].join(" ").toLowerCase()
          });
        });
      });
    }
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (!q) { box.hidden = true; return; }
      loadAll().then(function () {
        if (!index) buildIndex();
        var words = q.split(/\s+/);
        var hits = index.filter(function (r) { return words.every(function (w) { return r.hay.indexOf(w) > -1; }); })
          .sort(function (a, b) { return (b.t.title.toLowerCase().indexOf(q) > -1) - (a.t.title.toLowerCase().indexOf(q) > -1); })
          .slice(0, 12);
        box.hidden = false;
        box.innerHTML = hits.length ? hits.map(function (h) {
          return '<a href="subject.html?s=' + h.s.id + '#' + encodeURIComponent(h.t.id) + '">' +
            esc((h.t.id ? h.t.id + " " : "") + h.t.title) + '<small>' + esc(h.s.name + " " + h.s.level) +
            (hasContent(h.t) ? "" : " · notes coming soon") + '</small></a>';
        }).join("") : '<div class="empty">No matches. Try a key term, e.g. "elasticity" or "succession".</div>';
      });
    });
  }

  // ---------- subject page ----------
  function initSubject() {
    var params = new URLSearchParams(location.search);
    var sid = params.get("s");
    var meta = IBV_SUBJECTS.filter(function (s) { return s.id === sid; })[0];
    var root = $("#subject-root");
    if (!meta) { root.innerHTML = '<div class="wrap empty-state"><b>Subject not found.</b><a href="index.html">Back to all subjects</a></div>'; return; }
    document.documentElement.style.setProperty("--c", meta.colour);
    document.title = meta.name + " " + meta.level + " · IBDP Vault";

    loadSubject(sid).then(function (d) {
      if (!d) { root.innerHTML = '<div class="wrap empty-state"><b>No notes file yet.</b>Create data/' + esc(sid) + '.js from data/template.js.</div>'; return; }
      var flat = allTopics(d);

      root.innerHTML =
        '<header class="subject-head"><div class="wrap">' +
          '<div class="crumb"><a href="index.html">All subjects</a> / ' + esc(IBV_GROUPS[meta.group]) + '</div>' +
          '<h1>' + esc(meta.name) + ' <span class="muted">' + esc(meta.level) + '</span></h1>' +
          '<div class="chips"><span class="chip">' + flat.length + ' topics</span>' +
          '<span class="chip ok">' + flat.filter(function (x) { return hasContent(x.topic); }).length + ' with notes</span>' +
          (meta.maintainer ? '<span class="chip">Maintained by ' + esc(meta.maintainer) + '</span>' : '') +
          (d.syllabus ? '<span class="chip">' + esc(d.syllabus) + '</span>' : '') + '</div>' +
        '</div></header>' +
        '<div class="wrap layout">' +
          '<div><button class="btn sidebar-toggle" id="side-btn" aria-expanded="false">☰ Topics</button>' +
          '<aside class="sidebar" id="sidebar"></aside></div>' +
          '<main class="panel" id="panel"></main>' +
        '</div>';

      var sidebar = $("#sidebar"), panel = $("#panel");
      $("#side-btn").addEventListener("click", function () {
        var open = sidebar.classList.toggle("open");
        this.setAttribute("aria-expanded", open);
      });

      function drawSidebar(activeId) {
        var html = '<ul><li><a href="#overview" class="' + (activeId === "overview" ? "active" : "") + '"><span class="dot ready"></span>Course overview</a></li></ul>';
        html += (d.units || []).map(function (u) {
          var open = !activeId || activeId === "overview" ? (d.units.indexOf(u) === 0) : u.topics.some(function (t) { return t.id === activeId; });
          return '<details' + (open ? " open" : "") + '><summary>' + esc(u.title) + '</summary><ul>' +
            u.topics.map(function (t) {
              var cls = isDone(sid, t.id) ? "done" : (hasContent(t) ? "ready" : "");
              return '<li><a href="#' + encodeURIComponent(t.id) + '" class="' + (t.id === activeId ? "active" : "") + '">' +
                '<span class="dot ' + cls + '"></span>' +
                (t.num ? '<span class="num">' + esc(t.num) + '</span>' : '') +
                '<span>' + esc(t.title) + (t.hl ? ' <span class="chip hl">HL</span>' : '') + '</span></a></li>';
            }).join("") + '</ul></details>';
        }).join("");
        html += '<p class="muted" style="font-size:.8rem;padding:10px">' +
          '<span class="dot ready" style="display:inline-block"></span> has notes &nbsp; ' +
          '<span class="dot done" style="display:inline-block"></span> you marked revised</p>';
        sidebar.innerHTML = html;
      }

      function drawOverview() {
        var a = d.assessment || [];
        panel.innerHTML =
          '<h2>Course overview</h2>' +
          (d.intro ? '<div class="prose">' + md(d.intro) + '</div>' : '') +
          (a.length ? '<h3 style="margin-top:20px">Assessment</h3><div class="overview"><table><thead><tr><th>Component</th><th>What it is</th><th>Weight</th></tr></thead><tbody>' +
            a.map(function (r) { return '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + inline(r[1]) + '</td><td class="w">' + esc(r[2]) + '</td></tr>'; }).join("") +
            '</tbody></table></div>' : '') +
          (d.note ? '<div class="note">' + inline(d.note) + '</div>' : '') +
          (d.generalTips && d.generalTips.length ? '<h3 style="margin-top:20px">General exam tips</h3><ul class="prose tips">' +
            d.generalTips.map(function (t) { return "<li>" + inline(t) + "</li>"; }).join("") + '</ul>' : '') +
          '<p class="muted" style="margin-top:24px;font-size:.9rem">Pick a topic from the list to start revising.</p>';
        renderMath(panel);
      }

      function drawTopic(t, unit) {
        var terms = t.terms || [], qs = t.questions || [], tips = t.tips || [];
        var tabs = [
          ["summary", "Summary", t.summary ? "" : 0],
          ["terms", "Key terms", terms.length],
          ["practice", "Practice", qs.length],
          ["tips", "Exam tips", tips.length]
        ];
        var done = isDone(sid, t.id);
        panel.innerHTML =
          '<div class="topic-top"><div><div class="muted" style="font-size:.85rem">' + esc(unit.title) + '</div>' +
          '<h2>' + (t.num ? '<span class="muted">' + esc(t.num) + '</span> ' : '') + esc(t.title) + (t.hl ? ' <span class="chip hl">HL only</span>' : '') + '</h2></div>' +
          '<button class="done-toggle' + (done ? " on" : "") + '" id="done-btn">' + (done ? "✓ Revised" : "Mark as revised") + '</button></div>' +
          '<div class="tabs" role="tablist">' + tabs.map(function (tb, i) {
            return '<button role="tab" data-tab="' + tb[0] + '" aria-selected="' + (i === 0) + '">' + tb[1] +
              (typeof tb[2] === "number" && tb[2] > 0 ? '<span class="n">' + tb[2] + '</span>' : '') + '</button>';
          }).join("") + '</div><div id="tab-body"></div>' + pager(t);

        $("#done-btn").addEventListener("click", function () {
          toggleDone(sid, t.id);
          drawTopic(t, unit); drawSidebar(t.id);
        });
        panel.querySelectorAll(".tabs button").forEach(function (b) {
          b.addEventListener("click", function () {
            panel.querySelectorAll(".tabs button").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
            showTab(b.getAttribute("data-tab"));
          });
        });

        function empty(what) {
          return '<div class="empty-state"><b>No ' + what + ' yet.</b>This section is still being written. Want to help? Message ' +
            esc(meta.maintainer || "the team") + '.</div>';
        }
        function showTab(name) {
          var body = $("#tab-body");
          if (name === "summary") {
            body.innerHTML = t.summary ? '<div class="prose">' + md(t.summary) + '</div>' : empty("summary");
          } else if (name === "terms") {
            if (!terms.length) { body.innerHTML = empty("key terms"); return; }
            body.innerHTML = '<div class="term-tools"><span class="muted" style="font-size:.9rem">' + terms.length + ' terms</span>' +
              '<button class="btn primary" id="flash-btn">Flashcard mode</button></div><div id="term-area"></div>';
            var area = $("#term-area");
            function list() {
              area.innerHTML = '<div class="terms">' + terms.map(function (p) {
                return '<div class="term"><b>' + inline(p[0]) + '</b><span>' + inline(p[1]) + '</span></div>';
              }).join("") + '</div>';
              renderMath(area);
            }
            function cards() {
              var order = terms.map(function (_, i) { return i; }).sort(function () { return Math.random() - .5; });
              var k = 0, flipped = false;
              function draw() {
                var p = terms[order[k]];
                area.innerHTML = '<div class="flash" id="card" tabindex="0" aria-live="polite"><div class="face' + (flipped ? " back" : "") + '">' +
                  inline(flipped ? p[1] : p[0]) + '</div></div>' +
                  '<div class="flash-nav"><button class="btn" id="prev">← Prev</button><span class="muted">' + (k + 1) + ' / ' + terms.length +
                  ' · tap card to flip</span><button class="btn" id="next">Next →</button></div>';
                renderMath(area);
                $("#card").onclick = function () { flipped = !flipped; draw(); };
                $("#card").onkeydown = function (e) { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flipped = !flipped; draw(); } };
                $("#prev").onclick = function () { k = (k - 1 + terms.length) % terms.length; flipped = false; draw(); };
                $("#next").onclick = function () { k = (k + 1) % terms.length; flipped = false; draw(); };
              }
              draw();
            }
            var mode = "list"; list();
            $("#flash-btn").onclick = function () {
              mode = mode === "list" ? "cards" : "list";
              this.textContent = mode === "list" ? "Flashcard mode" : "Show list";
              if (mode === "list") list(); else cards();
            };
          } else if (name === "practice") {
            body.innerHTML = qs.length ? qs.map(function (q, i) {
              return '<div class="q"><div class="q-head"><div><b>Q' + (i + 1) + '.</b> ' + inline(q.q) + '</div>' +
                (q.marks ? '<span class="marks">[' + esc(q.marks) + ' marks]</span>' : '') + '</div>' +
                (q.a ? '<details><summary>Show mark scheme / model answer</summary><div class="answer prose">' + md(q.a) + '</div></details>' : '') +
                '</div>';
            }).join("") : empty("practice questions");
          } else if (name === "tips") {
            body.innerHTML = tips.length ? '<ul class="prose tips">' + tips.map(function (x) { return "<li>" + inline(x) + "</li>"; }).join("") + '</ul>' : empty("exam tips");
          }
          renderMath(body);
        }
        showTab("summary");
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      }

      function pager(t) {
        var i = flat.map(function (x) { return x.topic; }).indexOf(t);
        var prev = flat[i - 1], next = flat[i + 1];
        return '<nav class="pager">' +
          (prev ? '<a href="#' + encodeURIComponent(prev.topic.id) + '">← ' + esc(prev.topic.title) + '</a>' : '<span></span>') +
          (next ? '<a href="#' + encodeURIComponent(next.topic.id) + '" style="text-align:right">' + esc(next.topic.title) + ' →</a>' : '<span></span>') +
          '</nav>';
      }

      function route() {
        var h = decodeURIComponent(location.hash.slice(1));
        var hit = flat.filter(function (x) { return x.topic.id === h; })[0];
        if (hit) { drawTopic(hit.topic, hit.unit); drawSidebar(h); }
        else { drawOverview(); drawSidebar("overview"); }
        sidebar.classList.remove("open");
      }
      window.addEventListener("hashchange", route);
      route();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    if (document.body.getAttribute("data-page") === "home") initHome();
    if (document.body.getAttribute("data-page") === "subject") initSubject();
  });
})();
