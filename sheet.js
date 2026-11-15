/* KING_SHEETDRAG — phone layout: the upgrades sheet starts small (15% of the screen) and drags up to expand. */
(function () {
  "use strict";
  if (!window.matchMedia) return;
  var mq = matchMedia("(max-width: 899px)"), MIN = 15, MAX = 85, SNAPS = [15, 45, 85], KEY = "orbit.sheet.h";
  var sheet = document.getElementById("sheet"); if (!sheet) return;
  var st = document.createElement("style");
  st.textContent = "\
@media (max-width:899px){#sheet{height:calc(var(--sheet-h,15) * 1dvh)!important;transition:height .28s cubic-bezier(.2,.9,.25,1);touch-action:none}\
#sheet.dragging{transition:none}\
#sheet-grip{position:relative;flex:0 0 auto;height:22px;margin-bottom:-6px;display:grid;place-items:center;cursor:grab;touch-action:none;-webkit-tap-highlight-color:transparent}\
#sheet-grip::after{content:'';width:38px;height:5px;border-radius:3px;background:rgba(255,255,255,.28);transition:background .15s,width .15s}\
#sheet-grip:hover::after,#sheet.dragging #sheet-grip::after{background:rgba(255,255,255,.5);width:46px}\
#sheet #list{touch-action:pan-y}}\
@media (min-width:900px){#sheet-grip{display:none}}\
@media (prefers-reduced-motion:reduce){#sheet{transition:none!important}}";
  document.head.appendChild(st);

  var grip = document.createElement("div"); grip.id = "sheet-grip";
  grip.setAttribute("role", "slider"); grip.setAttribute("aria-label", "Resize upgrades panel"); grip.tabIndex = 0;
  grip.setAttribute("aria-valuemin", MIN); grip.setAttribute("aria-valuemax", MAX);
  sheet.insertBefore(grip, sheet.firstChild);

  var h = +(function () { try { return localStorage.getItem(KEY); } catch (e) { return 0; } })() || MIN;
  function nudge() { window.dispatchEvent(new Event("resize")); }   // the 3D view re-fits to the new space
  function set(v, save) {
    h = Math.max(MIN, Math.min(MAX, v)); sheet.style.setProperty("--sheet-h", h.toFixed(1)); grip.setAttribute("aria-valuenow", Math.round(h));
    if (save) { try { localStorage.setItem(KEY, String(Math.round(h))); } catch (e) {} }
  }
  function snap(v, vel) {
    if (Math.abs(vel) > 0.6) { var up = vel > 0, list = up ? SNAPS : SNAPS.slice().reverse(); for (var i = 0; i < list.length; i++) if (up ? list[i] > v + 2 : list[i] < v - 2) return list[i]; return up ? MAX : MIN; }
    return SNAPS.reduce(function (a, b) { return Math.abs(b - v) < Math.abs(a - v) ? b : a; });
  }
  set(h);

  var y0 = 0, h0 = 0, lastY = 0, lastT = 0, vel = 0, moved = false, raf = 0;
  function down(e) {
    if (!mq.matches) return;
    e.preventDefault(); e.stopPropagation(); grip.setPointerCapture && grip.setPointerCapture(e.pointerId);
    y0 = lastY = e.clientY; lastT = performance.now(); h0 = h; vel = 0; moved = false; sheet.classList.add("dragging");
  }
  function move(e) {
    if (!sheet.classList.contains("dragging")) return;
    e.preventDefault(); e.stopPropagation();
    var vh = window.innerHeight / 100, now = performance.now();
    if (Math.abs(e.clientY - y0) > 4) moved = true;
    vel = ((lastY - e.clientY) / vh) / Math.max(1, now - lastT) * 16; lastY = e.clientY; lastT = now;
    set(h0 + (y0 - e.clientY) / vh);
    if (!raf) raf = requestAnimationFrame(function () { raf = 0; nudge(); });
  }
  function up(e) {
    if (!sheet.classList.contains("dragging")) return;
    sheet.classList.remove("dragging"); e.stopPropagation();
    set(moved ? snap(h, vel) : (h < 30 ? 45 : MIN), true);   // a tap toggles small <-> half
    setTimeout(nudge, 300);
  }
  grip.addEventListener("pointerdown", down);
  grip.addEventListener("pointermove", move);
  grip.addEventListener("pointerup", up);
  grip.addEventListener("pointercancel", up);
  grip.addEventListener("keydown", function (e) {
    var k = e.key; if (k !== "ArrowUp" && k !== "ArrowDown") return; e.preventDefault();
    var i = SNAPS.indexOf(snap(h, 0)); i = Math.max(0, Math.min(SNAPS.length - 1, i + (k === "ArrowUp" ? 1 : -1))); set(SNAPS[i], true); setTimeout(nudge, 300);
  });
  mq.addEventListener && mq.addEventListener("change", function () { setTimeout(nudge, 50); });
  setTimeout(nudge, 60);
})();
