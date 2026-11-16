/* KINGVERSE — the link between King's 5 games (Nov 16 2026).
   HELIOS → TETHYS → TALOS → NYX → DEMETER. Each game unlocks at 75% of the one before.
   Each game has ONE relic upgrade; every relic boosts all 5 games. That is the only link between them.
   State lives in localStorage "kingverse.v1" (same site, so every game sees it). */
(function () {
  "use strict";
  var KEY = "kingverse.v1", UNLOCK = 0.75;
  var me = document.currentScript && document.currentScript.src || "";
  var BASE = me ? me.replace(/kv\.js(\?.*)?$/, "") : "./";
  var G = [
    { id: "helios", n: "HELIOS", e: "☀️", p: "", d: "Grow a star from dust to supernova.", r: { id: "sunstone", n: "Sunstone", e: "🔆", d: "Everything costs 10% less in all 5 games." } },
    { id: "tethys", n: "TETHYS", e: "🌊", p: "tethys/", d: "Dive a submarine to the bottom of the ocean.", r: { id: "pearl", n: "Abyss Pearl", e: "🫧", d: "+25% earnings in all 5 games." } },
    { id: "talos", n: "TALOS", e: "⚙️", p: "talos/", d: "Merge bronze parts into a giant automaton.", r: { id: "spring", n: "Mainspring", e: "🌀", d: "Everything automatic runs 25% faster in all 5 games." } },
    { id: "nyx", n: "NYX", e: "🏍️", p: "nyx/", d: "Claim the neon grid with your light trail.", r: { id: "core", n: "Light Core", e: "💠", d: "Taps, clicks and boosts are twice as strong in all 5 games." } },
    { id: "demeter", n: "DEMETER", e: "🌱", p: "demeter/", d: "Grow a garden up to the World Tree.", r: { id: "gaia", n: "Seed of Gaia", e: "🌳", d: "+50% while-you-were-away earnings in all 5 games." } }
  ];
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || { pct: {}, relic: {} }; } catch (e) { return { pct: {}, relic: {} }; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  var S = load();
  window.addEventListener("storage", function (e) { if (e.key === KEY) { S = load(); if (panel && !panel.hidden) paint(); } });
  function idx(id) { for (var i = 0; i < G.length; i++) if (G[i].id === id) return i; return -1; }
  function pct(id) { return Math.max(0, Math.min(1, +(S.pct[id] || 0))); }
  function setPct(id, p) { p = Math.max(0, Math.min(1, p || 0)); if (p > pct(id) + 0.0005 || p === 1) { var was = unlockedList(); S.pct[id] = Math.max(pct(id), p); save(S); var now = unlockedList(); if (now.length > was.length) toast(G[now.length - 1].n + " unlocked! Open the map to play it."); } }
  var DEV = /[?&]dev=1/.test(location.search) || (function () { try { return localStorage.getItem("kingverse.dev") === "1"; } catch (e) { return false; } })();   /* debug: every game unlocked */
  function unlocked(id) { var i = idx(id); return DEV || i <= 0 || pct(G[i - 1].id) >= UNLOCK; }
  function unlockedList() { return G.filter(function (g) { return unlocked(g.id); }); }
  function hasRelic(rid) { return !!S.relic[rid]; }
  function relicOf(id) { return G[idx(id)].r; }
  function grant(id) { var r = relicOf(id); if (S.relic[r.id]) return false; S.relic[r.id] = Date.now(); save(S); toast(r.n + " found! " + r.d); return true; }
  function boost() { return { cost: hasRelic("sunstone") ? 0.9 : 1, earn: hasRelic("pearl") ? 1.25 : 1, speed: hasRelic("spring") ? 1.25 : 1, tap: hasRelic("core") ? 2 : 1, off: hasRelic("gaia") ? 1.5 : 1 }; }
  function url(id) { return BASE + G[idx(id)].p; }

  /* KING_KVMAP (Nov 17): pixel-art icons drawn from 12x12 grids instead of emojis. Letters pick a colour from the palette. */
  var PAL = { y: "#ffe14d", o: "#ffb347", r: "#ff5d6c", w: "#ffffff", c: "#4df3ff", b: "#2f8fd8", d: "#1a5f9e", g: "#8b8a99", s: "#c9d1db", k: "#3b2380", p: "#ff4dd8", v: "#a78bfa", n: "#4dff9a", e: "#2fae5f", t: "#8a5a2b", m: "#5d3a1a" };
  var PIX = {
    helios: ["....y..y....", ".y..yyyy..y.", "..yyooooyy..", "..yooooooy..", "yyoooooooyyy", ".yoooooooy..", ".yoooooooy..", "yyyoooooooyy", "..yooooooy..", "..yyooooyy..", ".y..yyyy..y.", "....y..y...."],
    tethys: ["............", "......c.....", ".....ccc....", "....cwccc...", "...cccccc...", "..cccccccc..", "............", ".cc..cc..cc.", "c..cc..cc..c", "............", "bb..bb..bb..", "..bb..bb..bb"],
    talos: ["....oooo....", "...oo..oo...", ".o.oooooo.o.", "oooo....oooo", ".oo..oo..oo.", ".oo.o..o.oo.", ".oo.o..o.oo.", ".oo..oo..oo.", "oooo....oooo", ".o.oooooo.o.", "...oo..oo...", "....oooo...."],
    nyx: ["............", "............", "......pp....", ".....pppv...", "..vvvvvvvv..", ".vvcvvvvvcv.", "vv.ccvvvcc.v", "v.c..c.c..cv", ".c....c....c", "..c..c.c..c.", "...cc...cc..", "pppppppppppp"],
    demeter: ["....nn......", "...nnnn.....", "..nnennn....", "...nnen..nn.", ".....e.nnnn.", ".....enneen.", "....ee..nn..", ".....e......", ".....e......", "...tttttt...", "...tmmmmt...", "....tttt...."],
    lock: ["............", "....gggg....", "...g....g...", "...g....g...", "...g....g...", "..gggggggg..", "..gggggggg..", "..ggg..ggg..", "..gggg.ggg..", "..gggggggg..", "..gggggggg..", "............"],
    sunstone: ["............", "....yyyy....", "...yooooy...", "..yoowwooy..", "..yowwoooy..", "..yooooooy..", "...yoooy....", "....yoy.....", ".....y......", "............", "............", "............"],
    pearl: ["............", "....wwww....", "...wwccww...", "..wwcwwcww..", "..wcwwwwcw..", "..wcwwwwcw..", "..wwcwwcww..", "...wwccww...", "....wwww....", "............", "............", "............"],
    spring: ["............", "..oooooooo..", "..o.......o.", "...ooooooo..", "..o.......o.", "...ooooooo..", "..o.......o.", "...ooooooo..", "..o.......o.", "..oooooooo..", "............", "............"],
    core: ["............", ".....cc.....", "....cwwc....", "...cwccwc...", "..cwccccwc..", ".cwccvvccwc.", ".cwccvvccwc.", "..cwccccwc..", "...cwccwc...", "....cwwc....", ".....cc.....", "............"],
    gaia: ["............", "....nnnn....", "...nnennn...", "..nnneenn...", "..nnennnnn..", "...nnnenn...", ".....e......", ".....e......", "....eee.....", "...tttttt...", "............", "............"]
  };
  function pix(k, sz, dim) { var g = PIX[k] || PIX.lock, r = ""; for (var y = 0; y < 12; y++) for (var x = 0; x < 12; x++) { var ch = g[y].charAt(x); if (ch !== "." && PAL[ch]) r += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02" fill="' + (dim ? "#4a4560" : PAL[ch]) + '"/>'; } return '<svg class="kv-px" viewBox="0 0 12 12" width="' + sz + '" height="' + sz + '" shape-rendering="crispEdges" aria-hidden="true">' + r + "</svg>"; }

  /* ---------- UI: the 🎮 Games button + panel, shared by every game ---------- */
  var CSS = ".kv-btn{position:fixed;z-index:9500;right:calc(12px + env(safe-area-inset-right));bottom:calc(12px + env(safe-area-inset-bottom));width:46px;height:46px;border-radius:12px;display:grid;place-items:center;font-size:22px;cursor:pointer;background:rgba(20,10,48,.85);border:2px solid #a78bfa;box-shadow:3px 3px 0 #06030f;color:#fff;-webkit-tap-highlight-color:transparent}" +
    ".kv-btn.inline{position:static;width:40px;height:40px;font-size:18px}" +
    ".kv-btn .kv-dot{position:absolute;top:-4px;right:-4px;width:12px;height:12px;border-radius:50%;background:#4dff9a;box-shadow:0 0 8px #4dff9a}" +
    ".kv-btn:focus-visible,.kv-p button:focus-visible,.kv-p a:focus-visible{outline:2px solid #ffe14d;outline-offset:2px}" +
    ".kv-p{position:fixed;inset:0;z-index:9600;display:flex;align-items:flex-end;justify-content:center;background:rgba(4,2,12,.6);font-family:'Pixelify Sans',ui-monospace,monospace;color:#fff}" +
    ".kv-p[hidden]{display:none}" +
    ".kv-in{width:min(520px,100%);max-height:88dvh;overflow:auto;background:#1a0b3d;border:2px solid #a78bfa;border-bottom:0;box-shadow:0 -6px 0 #06030f;padding:16px 14px calc(16px + env(safe-area-inset-bottom))}" +
    "@media(min-width:700px){.kv-p{align-items:center}.kv-in{border-bottom:2px solid #a78bfa}}" +
    ".kv-in h2{margin:0 0 4px;font-size:20px;letter-spacing:.06em}.kv-in .sub{color:#c9c4e8;font-size:13px;margin:0 0 12px}" +
    ".kv-g{display:grid;grid-template-columns:44px 1fr auto;gap:10px;align-items:center;padding:10px;margin-bottom:8px;background:#22104f;border:2px solid #3b2380;text-decoration:none;color:#fff}" +
    ".kv-g.cur{border-color:#ffe14d}.kv-g.lock{opacity:.55}" +
    ".kv-g .ic{font-size:26px;text-align:center}.kv-g b{font-size:15px;letter-spacing:.05em}.kv-g small{display:block;color:#c9c4e8;font-size:12px;margin-top:2px}" +
    ".kv-bar{height:8px;background:#0d0626;margin-top:6px;border:1px solid #3b2380}.kv-bar i{display:block;height:100%;background:linear-gradient(90deg,#ff4dd8,#ffe14d)}" +
    ".kv-g .go{font-size:13px;font-weight:700;color:#4dff9a;white-space:nowrap}.kv-g.lock .go{color:#c9c4e8}" +
    ".kv-rel{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 4px}.kv-rel span{padding:6px 8px;background:#22104f;border:2px solid #3b2380;font-size:12px}.kv-rel span.on{border-color:#4dff9a;color:#4dff9a}" +
    ".kv-map{position:relative;margin:4px auto 6px;width:100%;max-width:360px}" +
    ".kv-map svg.kv-path{position:absolute;inset:0;width:100%;height:100%;overflow:visible}" +
    ".kv-path .lit{stroke:#ffe14d;stroke-dasharray:6 8;animation:kvdash 1.2s linear infinite}@keyframes kvdash{to{stroke-dashoffset:-28}}" +
    ".kv-node{position:absolute;transform:translate(-50%,-50%);width:150px;text-align:center;text-decoration:none;color:#fff;display:block}" +
    ".kv-orb{width:74px;height:74px;margin:0 auto;display:grid;place-items:center;background:#22104f;border:3px solid #3b2380;box-shadow:4px 4px 0 #06030f;position:relative}" +
    ".kv-node.done .kv-orb{border-color:#4dff9a}.kv-node.cur .kv-orb{border-color:#ffe14d;animation:kvbob 1.6s ease-in-out infinite}@keyframes kvbob{50%{transform:translateY(-4px)}}" +
    ".kv-node.lock .kv-orb{background:#140a2e}.kv-node b{display:inline-block;margin-top:10px;font-size:15px;letter-spacing:.12em;background:#1a0b3d;padding:0 6px}.kv-node.lock b{color:#8b8a99}" +
    ".kv-node small{display:table;margin:1px auto 0;font-size:12px;color:#c9c4e8;background:#1a0b3d;padding:0 6px}" +
    ".kv-node .kv-ring{position:absolute;left:-3px;right:-3px;bottom:-9px;height:5px;background:#0d0626;border:1px solid #3b2380}.kv-node .kv-ring i{display:block;height:100%;background:linear-gradient(90deg,#ff4dd8,#ffe14d)}" +
    ".kv-here{position:absolute;left:50%;top:-16px;transform:translateX(-50%);background:#ffe14d;color:#1a0b3d;font-size:11px;padding:1px 6px;font-weight:700;letter-spacing:.08em;white-space:nowrap}" +
    ".kv-relics{display:flex;justify-content:center;gap:8px;margin:6px 0 2px}.kv-relics span{width:40px;height:40px;display:grid;place-items:center;background:#22104f;border:2px solid #3b2380}.kv-relics span.on{border-color:#ffe14d;box-shadow:0 0 10px rgba(255,225,77,.5)}" +
    ".kv-rl{text-align:center;font-size:12px;color:#c9c4e8;letter-spacing:.06em;margin:4px 0 10px}" +
    "@media (prefers-reduced-motion:reduce){.kv-path .lit,.kv-node.cur .kv-orb{animation:none}}" +
    ".kv-x{all:unset;cursor:pointer;float:right;font-size:20px;padding:2px 8px;background:#22104f;border:2px solid #3b2380}" +
    ".kv-toast{position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:9700;max-width:calc(100vw - 24px);padding:10px 14px;background:#1a0b3d;border:2px solid #4dff9a;box-shadow:3px 3px 0 #06030f;color:#fff;font:600 14px 'Pixelify Sans',monospace;text-align:center}" +
    ".kv-lock{position:fixed;inset:0;z-index:9400;display:grid;place-items:center;background:radial-gradient(#22104f,#06030f);color:#fff;font-family:'Pixelify Sans',monospace;text-align:center;padding:24px}" +
    ".kv-lock div{max-width:360px}.kv-lock h1{font-size:28px;margin:8px 0}.kv-lock p{color:#c9c4e8}.kv-lock a{display:inline-block;margin-top:14px;padding:12px 18px;background:#a78bfa;color:#140a2e;font-weight:800;text-decoration:none;box-shadow:3px 3px 0 #06030f}";
  var styled = false, panel = null, cur = null, btn = null, tt = 0;
  function style() { if (styled) return; styled = true; var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s); }
  function toast(m) { style(); var t = document.createElement("div"); t.className = "kv-toast"; t.setAttribute("role", "status"); t.textContent = m; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 4200); }
  function paint() {
    /* KING_KVMAP: a winding pixel map replaces the old list. Bottom = HELIOS, top = DEMETER. */
    var n = G.length, H = 128, top = 60, Wd = 300, xs = [150, 70, 230, 80, 220], pts = [];
    for (var i = 0; i < n; i++) pts.push([xs[i], top + (n - 1 - i) * H]);
    var hh = top * 2 + (n - 1) * H, reached = 0;
    G.forEach(function (g, i) { if (unlocked(g.id)) reached = i; });
    function seg(a, b) { var mx = (a[0] + b[0]) / 2; return "M" + a[0] + " " + a[1] + " C " + a[0] + " " + (a[1] - H * .55) + ", " + b[0] + " " + (b[1] + H * .55) + ", " + b[0] + " " + b[1]; }
    var paths = "";
    for (var k = 0; k < n - 1; k++) paths += '<path d="' + seg(pts[k], pts[k + 1]) + '" fill="none" stroke-width="3" stroke-linecap="square" ' + (k < reached ? 'class="lit"' : 'stroke="#3b2380" stroke-dasharray="2 9"') + "/>";
    var nodes = "";
    G.forEach(function (g, i) {
      var ok = unlocked(g.id), p = Math.round(pct(g.id) * 100), here = g.id === cur, done = p >= 75;
      var why = i > 0 ? "75% in " + G[i - 1].n + " (" + Math.round(pct(G[i - 1].id) * 100) + "% now)" : "";
      var tag = ok && !here ? "a" : "div", href = ok && !here ? ' href="' + url(g.id) + '"' : "";
      nodes += "<" + tag + ' class="kv-node' + (here ? " cur" : "") + (ok ? "" : " lock") + (done ? " done" : "") + '"' + href + ' style="left:' + (pts[i][0] / Wd * 100) + "%;top:" + pts[i][1] + 'px"' + (ok ? "" : ' aria-disabled="true"') + ">" +
        '<span class="kv-orb">' + (here ? '<span class="kv-here">YOU ARE HERE</span>' : "") + pix(ok ? g.id : "lock", 44) + (ok ? '<span class="kv-ring"><i style="width:' + p + '%"></i></span>' : "") + "</span>" +
        "<b>" + g.n + "</b><small>" + (ok ? (here ? "Playing · best " + p + "%" : "Best " + p + "% · tap to play") : "Locked · " + why) + "</small></" + tag + ">";
    });
    var got = G.filter(function (g) { return hasRelic(g.r.id); }).length, b = boost();
    var on = [b.cost < 1 ? "costs −10%" : "", b.earn > 1 ? "earnings +25%" : "", b.speed > 1 ? "automation +25%" : "", b.tap > 1 ? "taps ×2" : "", b.off > 1 ? "away +50%" : ""].filter(Boolean).join(" · ");
    var h = '<div class="kv-in" role="dialog" aria-modal="true" aria-label="KINGVERSE map"><button class="kv-x" aria-label="Close">✕</button><h2>KINGVERSE</h2><p class="sub">Reach 75% to light the path to the next world.</p>' +
      '<div class="kv-relics">' + G.map(function (g) { var o = hasRelic(g.r.id); return '<span class="' + (o ? "on" : "") + '" title="' + (o ? g.r.n + ": " + g.r.d : g.n + " relic (not found yet)") + '">' + pix(g.r.id, 26, !o) + "</span>"; }).join("") + "</div>" +
      '<p class="kv-rl">RELICS ' + got + " / " + n + (on ? " · " + on : " · none found yet") + "</p>" +
      '<div class="kv-map" style="height:' + hh + 'px"><svg class="kv-path" viewBox="0 0 ' + Wd + " " + hh + '" preserveAspectRatio="none">' + paths + "</svg>" + nodes + "</div></div>";
    panel.innerHTML = h; panel.querySelector(".kv-x").onclick = closeP;
    var c = panel.querySelector(".kv-node.cur"); if (c && c.scrollIntoView) setTimeout(function () { c.scrollIntoView({ block: "center" }); }, 30);
  }
  function openP() { style(); if (!panel) { panel = document.createElement("div"); panel.className = "kv-p"; panel.hidden = true; panel.addEventListener("click", function (e) { if (e.target === panel) closeP(); }); document.body.appendChild(panel); document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel && !panel.hidden) closeP(); }); } S = load(); paint(); panel.hidden = false; var x = panel.querySelector(".kv-x"); x && x.focus(); if (btn) { var d = btn.querySelector(".kv-dot"); d && d.remove(); } }
  function closeP() { if (panel) panel.hidden = true; }
  /* mount(gameId, into?) — adds the 🎮 button (floating, or inside a given container) and blocks the game if it is still locked */
  function mount(id, into) {
    cur = id; style(); if (id !== "helios") { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pixify); else setTimeout(pixify, 0); }
    btn = document.createElement("button"); btn.className = "kv-btn" + (into ? " inline" : ""); btn.setAttribute("aria-label", "All games"); btn.innerHTML = pix(id, 26); btn.onclick = openP;
    var seen = +(localStorage.getItem("kingverse.seen") || 1), n = unlockedList().length; if (n > seen) { var d = document.createElement("i"); d.className = "kv-dot"; btn.appendChild(d); } try { localStorage.setItem("kingverse.seen", String(n)); } catch (e) {}
    (into || document.body).appendChild(btn);
    if (!unlocked(id)) { var i = idx(id), L = document.createElement("div"); L.className = "kv-lock"; L.innerHTML = "<div><div>" + pix("lock", 56) + "</div><h1>" + G[i].n + "</h1><p>Reach 75% in " + G[i - 1].n + " to unlock this game. You're at " + Math.round(pct(G[i - 1].id) * 100) + "%.</p><a href=\"" + url(G[i - 1].id) + "\">Play " + G[i - 1].n + "</a></div>"; document.body.appendChild(L); return false; }
    return true;
  }
  /* KING_PIXEMOJI (Nov 17): in-game emojis become chunky pixel icons. Each emoji is drawn once on a tiny 16px canvas,
     then shown 1.25em tall with image-rendering: pixelated, so every game matches the pixel map. Off: localStorage kingverse.pix = "0". */
  var PXC = {}, PXRE = /(?:\p{Extended_Pictographic}|\p{Regional_Indicator}{2})(?:\uFE0F|\u200D\p{Extended_Pictographic}\uFE0F?)*/gu;
  function pxURL(e) {
    if (PXC[e]) return PXC[e];
    var c = document.createElement("canvas"); c.width = c.height = 16; var x = c.getContext("2d");
    x.textAlign = "center"; x.textBaseline = "middle"; x.font = "14px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif"; x.fillText(e, 8, 9);
    var d = x.getImageData(0, 0, 14, 14), a = d.data; for (var i = 3; i < a.length; i += 4) a[i] = a[i] > 110 ? 255 : 0; x.putImageData(d, 0, 0);   // hard edges, no soft blur
    return (PXC[e] = c.toDataURL());
  }
  function pxNode(t) {
    var v = t.nodeValue; PXRE.lastIndex = 0; if (!PXRE.test(v)) return; PXRE.lastIndex = 0;
    var f = document.createDocumentFragment(), last = 0, m;
    while ((m = PXRE.exec(v))) { if (m.index > last) f.appendChild(document.createTextNode(v.slice(last, m.index))); var im = document.createElement("img"); im.className = "kv-px"; im.alt = m[0]; im.src = pxURL(m[0]); f.appendChild(im); last = m.index + m[0].length; }
    if (last < v.length) f.appendChild(document.createTextNode(v.slice(last)));
    t.parentNode.replaceChild(f, t);
  }
  function pxWalk(r) {
    if (r.nodeType === 3) { var p = r.parentNode; if (p && !/^(SCRIPT|STYLE|TEXTAREA|INPUT|OPTION|TITLE)$/.test(p.nodeName)) pxNode(r); return; }
    if (r.nodeType !== 1 || /^(SCRIPT|STYLE|TEXTAREA|CANVAS|SVG)$/i.test(r.nodeName)) return;
    for (var c = r.firstChild, nx; c; c = nx) { nx = c.nextSibling; pxWalk(c); }
  }
  function pixify() {
    try { if (localStorage.getItem("kingverse.pix") === "0") return; } catch (e) {}
    var st = document.createElement("style"); st.textContent = ".kv-px{height:1.25em;width:1.25em;vertical-align:-.25em;image-rendering:pixelated;image-rendering:crisp-edges;display:inline-block}"; document.head.appendChild(st);
    pxWalk(document.body);
    new MutationObserver(function (ms) { ms.forEach(function (m) { if (m.type === "characterData") pxWalk(m.target); else m.addedNodes.forEach(pxWalk); }); }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  window.KV = { games: G, pct: pct, setPct: setPct, unlocked: unlocked, hasRelic: hasRelic, relicOf: relicOf, grant: grant, boost: boost, mount: mount, open: openP, toast: toast, url: url, UNLOCK: UNLOCK };
})();
