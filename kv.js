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
  function setPct(id, p) { p = Math.max(0, Math.min(1, p || 0)); if (p > pct(id) + 0.0005 || p === 1) { var was = unlockedList(); S.pct[id] = Math.max(pct(id), p); save(S); var now = unlockedList(); if (now.length > was.length) toast("🔓 " + G[now.length - 1].e + " " + G[now.length - 1].n + " unlocked! Open 🎮 Games to play it."); } }
  function unlocked(id) { var i = idx(id); return i <= 0 || pct(G[i - 1].id) >= UNLOCK; }
  function unlockedList() { return G.filter(function (g) { return unlocked(g.id); }); }
  function hasRelic(rid) { return !!S.relic[rid]; }
  function relicOf(id) { return G[idx(id)].r; }
  function grant(id) { var r = relicOf(id); if (S.relic[r.id]) return false; S.relic[r.id] = Date.now(); save(S); toast(r.e + " " + r.n + " found! " + r.d); return true; }
  function boost() { return { cost: hasRelic("sunstone") ? 0.9 : 1, earn: hasRelic("pearl") ? 1.25 : 1, speed: hasRelic("spring") ? 1.25 : 1, tap: hasRelic("core") ? 2 : 1, off: hasRelic("gaia") ? 1.5 : 1 }; }
  function url(id) { return BASE + G[idx(id)].p; }

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
    ".kv-x{all:unset;cursor:pointer;float:right;font-size:20px;padding:2px 8px;background:#22104f;border:2px solid #3b2380}" +
    ".kv-toast{position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:9700;max-width:calc(100vw - 24px);padding:10px 14px;background:#1a0b3d;border:2px solid #4dff9a;box-shadow:3px 3px 0 #06030f;color:#fff;font:600 14px 'Pixelify Sans',monospace;text-align:center}" +
    ".kv-lock{position:fixed;inset:0;z-index:9400;display:grid;place-items:center;background:radial-gradient(#22104f,#06030f);color:#fff;font-family:'Pixelify Sans',monospace;text-align:center;padding:24px}" +
    ".kv-lock div{max-width:360px}.kv-lock h1{font-size:28px;margin:8px 0}.kv-lock p{color:#c9c4e8}.kv-lock a{display:inline-block;margin-top:14px;padding:12px 18px;background:#a78bfa;color:#140a2e;font-weight:800;text-decoration:none;box-shadow:3px 3px 0 #06030f}";
  var styled = false, panel = null, cur = null, btn = null, tt = 0;
  function style() { if (styled) return; styled = true; var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s); }
  function toast(m) { style(); var t = document.createElement("div"); t.className = "kv-toast"; t.setAttribute("role", "status"); t.textContent = m; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 4200); }
  function paint() {
    var h = '<div class="kv-in" role="dialog" aria-modal="true" aria-label="Games"><button class="kv-x" aria-label="Close">✕</button><h2>🎮 GAMES</h2><p class="sub">Reach 75% in a game to unlock the next one. Each game hides one relic that boosts all five.</p>';
    G.forEach(function (g, i) {
      var ok = unlocked(g.id), p = Math.round(pct(g.id) * 100), here = g.id === cur;
      var why = i > 0 ? "Reach 75% in " + G[i - 1].n + " (" + Math.round(pct(G[i - 1].id) * 100) + "% now)" : "";
      h += (ok && !here ? '<a class="kv-g" href="' + url(g.id) + '">' : '<div class="kv-g' + (here ? " cur" : "") + (ok ? "" : " lock") + '">') +
        '<span class="ic">' + (ok ? g.e : "🔒") + "</span><span><b>" + g.n + "</b><small>" + (ok ? g.d : why) + '</small><span class="kv-bar"><i style="width:' + p + '%"></i></span></span>' +
        '<span class="go">' + (here ? "Playing" : ok ? p + "% · Play ▶" : "Locked") + "</span>" + (ok && !here ? "</a>" : "</div>");
    });
    h += '<div class="kv-rel">'; G.forEach(function (g) { var on = hasRelic(g.r.id); h += '<span class="' + (on ? "on" : "") + '" title="' + g.r.d + '">' + (on ? g.r.e + " " + g.r.n : "❔ " + g.n + " relic") + "</span>"; }); h += "</div>";
    var b = boost(); h += '<p class="sub">Active boosts: ' + [b.cost < 1 ? "costs −10%" : "", b.earn > 1 ? "earnings +25%" : "", b.speed > 1 ? "automation +25%" : "", b.tap > 1 ? "taps ×2" : "", b.off > 1 ? "away +50%" : ""].filter(Boolean).join(" · ") + (b.cost === 1 && b.earn === 1 && b.speed === 1 && b.tap === 1 && b.off === 1 ? "none yet" : "") + "</p></div>";
    panel.innerHTML = h; panel.querySelector(".kv-x").onclick = closeP;
  }
  function openP() { style(); if (!panel) { panel = document.createElement("div"); panel.className = "kv-p"; panel.hidden = true; panel.addEventListener("click", function (e) { if (e.target === panel) closeP(); }); document.body.appendChild(panel); document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel && !panel.hidden) closeP(); }); } S = load(); paint(); panel.hidden = false; var x = panel.querySelector(".kv-x"); x && x.focus(); if (btn) { var d = btn.querySelector(".kv-dot"); d && d.remove(); } }
  function closeP() { if (panel) panel.hidden = true; }
  /* mount(gameId, into?) — adds the 🎮 button (floating, or inside a given container) and blocks the game if it is still locked */
  function mount(id, into) {
    cur = id; style();
    btn = document.createElement("button"); btn.className = "kv-btn" + (into ? " inline" : ""); btn.setAttribute("aria-label", "All games"); btn.textContent = "🎮"; btn.onclick = openP;
    var seen = +(localStorage.getItem("kingverse.seen") || 1), n = unlockedList().length; if (n > seen) { var d = document.createElement("i"); d.className = "kv-dot"; btn.appendChild(d); } try { localStorage.setItem("kingverse.seen", String(n)); } catch (e) {}
    (into || document.body).appendChild(btn);
    if (!unlocked(id)) { var i = idx(id), L = document.createElement("div"); L.className = "kv-lock"; L.innerHTML = "<div><div style=\"font-size:48px\">🔒</div><h1>" + G[i].e + " " + G[i].n + "</h1><p>Reach 75% in " + G[i - 1].n + " to unlock this game. You're at " + Math.round(pct(G[i - 1].id) * 100) + "%.</p><a href=\"" + url(G[i - 1].id) + "\">Play " + G[i - 1].n + "</a></div>"; document.body.appendChild(L); return false; }
    return true;
  }
  window.KV = { games: G, pct: pct, setPct: setPct, unlocked: unlocked, hasRelic: hasRelic, relicOf: relicOf, grant: grant, boost: boost, mount: mount, open: openP, toast: toast, url: url, UNLOCK: UNLOCK };
})();
