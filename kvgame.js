/* KINGVERSE game kit: shared look + helpers for TETHYS, TALOS, NYX and DEMETER (HELIOS has its own engine). */
(function () {
  "use strict";
  var SUF = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
  function fmt(n) { if (!isFinite(n)) return "∞"; n = Math.max(0, n); if (n < 1000) return n < 10 && n % 1 ? n.toFixed(1) : String(Math.floor(n)); var e = Math.min(SUF.length - 1, Math.floor(Math.log10(n) / 3)), v = n / Math.pow(1000, e); return (v < 10 ? v.toFixed(2) : v < 100 ? v.toFixed(1) : Math.floor(v)) + SUF[e]; }
  function dur(ms) { var s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60); return h ? h + "h " + m + "m" : m ? m + "m " + (s % 60) + "s" : (s % 60) + "s"; }
  function store(key, def) {
    var s; try { s = JSON.parse(localStorage.getItem(key)); } catch (e) {}
    s = Object.assign(JSON.parse(JSON.stringify(def)), s || {});
    s.save = function () { s.t = Date.now(); try { var c = Object.assign({}, s); delete c.save; localStorage.setItem(key, JSON.stringify(c)); } catch (e) {} };
    window.addEventListener("pagehide", s.save); document.addEventListener("visibilitychange", function () { if (document.hidden) s.save(); });
    return s;
  }
  var AC = null;
  function tone(f, d, type, v, slide) { try { if (localStorage.getItem("kingverse.mute") === "1") return; if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); var o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime; o.type = type || "square"; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * (slide || 1.3), t + (d || 0.08)); g.gain.setValueAtTime(v || 0.04, t); g.gain.exponentialRampToValueAtTime(0.0001, t + (d || 0.08)); o.connect(g).connect(AC.destination); o.start(); o.stop(t + (d || 0.08) + 0.02); } catch (e) {} }
  /* away earnings: 10% of the live rate (like HELIOS), ×Seed of Gaia, 8 h cap */
  function away(s, ratePerSec, give) { var ms = Math.min(Date.now() - (s.t || Date.now()), 8 * 3600e3); if (ms > 60e3 && ratePerSec > 0) { var g = ratePerSec * ms / 1000 * 0.1 * KV.boost().off; if (g > 0) { give(g); KV.toast("While you were away (" + dur(ms) + "): +" + fmt(g)); } } }
  var CSS = "*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html,body{margin:0;height:100%;background:var(--bg);color:#fff;font:15px/1.35 'Pixelify Sans',ui-monospace,monospace;overflow:hidden;font-variant-numeric:tabular-nums}" +
    "@font-face{font-family:'KVDigits';src:url(../fonts/press-start-2p-latin-400-normal.woff2) format('woff2');unicode-range:U+0030-0039;size-adjust:78%;font-display:swap}" +
    "body{font-family:'KVDigits','Pixelify Sans',ui-monospace,monospace}button{font:inherit;color:inherit}" +
    "#app{position:fixed;inset:0;display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr)}" +
    "#top{padding:calc(10px + env(safe-area-inset-top)) 14px 10px;background:linear-gradient(180deg,rgba(0,0,0,.45),transparent);position:relative;z-index:3}" +
    "#top .row1{display:flex;align-items:flex-start;gap:10px}#top .ttl{font-size:12px;letter-spacing:.18em;color:var(--acc)}#top .big{font-size:30px;line-height:1.1;text-shadow:0 0 18px var(--glow)}#top .rate{font-size:13px;color:#c9c4e8;margin-top:2px}" +
    "#top .btns{margin-left:auto;display:flex;gap:6px}#top .ib{width:40px;height:40px;display:grid;place-items:center;background:rgba(0,0,0,.35);border:2px solid var(--line);cursor:pointer;font-size:16px}" +
    "#goal{margin-top:10px;padding:8px 10px;background:rgba(0,0,0,.35);border:2px solid var(--line)}#goal .gl{display:flex;justify-content:space-between;gap:8px;font-size:13px}#goal .gl b{color:var(--acc)}" +
    "#goal .bar{height:10px;margin-top:6px;background:rgba(0,0,0,.5);border:1px solid var(--line)}#goal .bar i{display:block;height:100%;background:linear-gradient(90deg,var(--acc2),var(--acc));transition:width .3s}" +
    "#goal .nx{font-size:12px;color:#c9c4e8;margin-top:5px}" +
    "#stage{position:relative;min-height:0;overflow:hidden}" +
    "#shop{max-height:36dvh;overflow-y:auto;padding:8px 10px calc(10px + env(safe-area-inset-bottom));background:rgba(8,4,20,.92);border-top:2px solid var(--line)}" +
    "@media(min-width:900px){#app{grid-template-columns:minmax(0,1fr) 380px;grid-template-rows:auto minmax(0,1fr)}#top{grid-column:1/-1}#shop{max-height:none;grid-row:2;grid-column:2;border-top:0;border-left:2px solid var(--line)}}" +
    ".up{all:unset;box-sizing:border-box;width:100%;display:grid;grid-template-columns:40px 1fr auto;gap:10px;align-items:center;padding:9px 10px;margin-bottom:6px;background:rgba(255,255,255,.04);border:2px solid var(--line);cursor:pointer}" +
    ".up .ic{font-size:22px;text-align:center}.up .nm{font-size:15px}.up .ds{font-size:12px;color:#c9c4e8}.up .co{text-align:right;font-size:14px;color:var(--acc)}.up .lv{display:block;font-size:11px;color:#c9c4e8}" +
    ".up.no{opacity:.55;cursor:default}.up.ok:hover{border-color:var(--acc)}.up:focus-visible{outline:2px solid #ffe14d}.up.relic{border-color:#ffe14d;background:rgba(255,225,77,.08)}.up.max .co{color:#4dff9a}" +
    ".sh{font-size:11px;letter-spacing:.14em;color:#c9c4e8;margin:8px 2px 6px}" +
    ".pop{position:absolute;pointer-events:none;font-size:16px;color:#fff;text-shadow:0 0 10px var(--glow);animation:kvpop .9s ease-out forwards;white-space:nowrap;transform:translate(-50%,0)}@keyframes kvpop{to{opacity:0;transform:translate(-50%,-48px)}}" +
    "@media(prefers-reduced-motion:reduce){.pop{animation-duration:.01s}}";
  function boot(theme) {
    var r = document.documentElement.style; for (var k in theme) r.setProperty("--" + k, theme[k]);
    var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
  }
  function pop(stage, x, y, text) { var d = document.createElement("div"); d.className = "pop"; d.textContent = text; d.style.left = x + "px"; d.style.top = y + "px"; stage.appendChild(d); setTimeout(function () { d.remove(); }, 900); }
  function upRow(o) { return '<button class="up ' + (o.cls || "") + " " + (o.max ? "max" : o.ok ? "ok" : "no") + '" data-u="' + o.id + '"' + (o.max ? " disabled" : "") + '><span class="ic">' + o.e + '</span><span><span class="nm">' + o.n + '</span><br><span class="ds">' + o.d + '</span></span><span class="co">' + (o.max ? "MAX" : o.cost) + (o.lv != null ? '<span class="lv">' + o.lv + "</span>" : "") + "</span></button>"; }
  function muteBtn(el) { var m = localStorage.getItem("kingverse.mute") === "1"; el.textContent = m ? "🔇" : "🔊"; el.setAttribute("aria-label", m ? "Sound off" : "Sound on"); el.onclick = function () { var n = localStorage.getItem("kingverse.mute") === "1" ? "0" : "1"; try { localStorage.setItem("kingverse.mute", n); } catch (e) {} muteBtn(el); }; }
  window.KG = { fmt: fmt, dur: dur, store: store, tone: tone, away: away, boot: boot, pop: pop, upRow: upRow, muteBtn: muteBtn };
})();
