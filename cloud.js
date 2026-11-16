/* KING_ORBITCLOUD — ORBIT profiles: phone or email + 6-digit code from Argus, no password.
   Loaded BEFORE app.js so a cloud save is in place before the game reads localStorage. */
(function () {
  "use strict";
  var KEY = "kairos.orbit.v2", TOK = "orbit.cloud.token", WHO = "orbit.cloud.who", PEND = "orbit.cloud.pending", LAST = "orbit.cloud.lastpush", SKIP = "orbit.cloud.skip";
  var API = "https://cqetawiuvnwkmmcrluxj.supabase.co/rest/v1/rpc/orbit_api";
  var PK = "sb_publishable_lpyZu3BGBfMRHRzEqLmqXw_VbxFAN5U";
  var ls = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var ss = {
    get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { sessionStorage.removeItem(k); } catch (e) {} }
  };

  // 1) Before the game starts: apply a cloud save that we fetched on the last page load.
  var pend = ss.get(PEND);
  if (pend) { ls.set(KEY, pend); ls.set(LAST, pend); ss.del(PEND); }

  function api(op, payload, keep) {
    return fetch(API, {
      method: "POST", keepalive: !!keep,
      headers: { "Content-Type": "application/json", apikey: PK, Authorization: "Bearer " + PK },
      body: JSON.stringify({ op: op, payload: payload || {} })
    }).then(function (r) { return r.json(); });
  }
  function progress(s) { try { var o = typeof s === "string" ? JSON.parse(s) : s; return { a: +(o && o.allTime) || 0, t: +(o && o.t) || 0 }; } catch (e) { return { a: 0, t: 0 }; } }
  function better(cloud, local) {   // more lifetime progress wins; tie → newer save
    var c = progress(cloud), l = progress(local);
    return c.a > l.a || (c.a === l.a && c.t > l.t);
  }
  function applyCloud(data) {   // put the cloud save in place and restart the game cleanly
    applying = true; var s = JSON.stringify(data); ss.set(PEND, s); location.reload();
  }
  var pushing = false, applying = false;
  function push(keep) {
    if (keep) pushing = false;
    var tok = ls.get(TOK), cur = ls.get(KEY);
    if (applying || !tok || !cur || pushing || cur === ls.get(LAST)) return;
    var data; try { data = JSON.parse(cur); } catch (e) { return; }
    pushing = true;
    api("save", { token: tok, data: data }, keep).then(function (r) {
      pushing = false;
      if (r && r.ok) { ls.set(LAST, cur);  }
      else if (r && r.err === "signed_out") signOutLocal();
    }).catch(function () { pushing = false; });
  }

  // 2) After the page is up: profile button + panel, sync loop.
  function ready(f) { if (document.readyState !== "loading") f(); else document.addEventListener("DOMContentLoaded", f); }
  var root, panel, statusEl, btn;
  function setStatus(t) { if (statusEl) statusEl.textContent = t || ""; }
  function who() { try { return JSON.parse(ls.get(WHO) || "null"); } catch (e) { return null; } }
  function signOutLocal() { ls.del(TOK); ls.del(WHO); ls.del(LAST); ckDel(); }
  /* KING_REMEMBER: a long-lived cookie survives deleting + re-adding the home-screen app (iOS copies Safari's cookies into a new web app).
     It holds the login token, first name, masked number and the number itself (to text a fresh code if the token ever expires). */
  var CK = "helios_auth", ASKED = "orbit.cloud.asked1";
  function ckGet() { var m = document.cookie.match(/(?:^|; )helios_auth=([^;]*)/); try { return m ? JSON.parse(decodeURIComponent(m[1])) : null; } catch (e) { return null; } }
  function ckSet(o) { try { document.cookie = CK + "=" + encodeURIComponent(JSON.stringify(o)) + "; Max-Age=34560000; Path=/orbit/; SameSite=Lax; Secure"; } catch (e) {} }
  function ckDel() { try { document.cookie = CK + "=; Max-Age=0; Path=/orbit/; SameSite=Lax; Secure"; } catch (e) {} }
  function remember(tok, player, id) { var c = ckGet() || {}; ckSet({ t: tok || c.t, n: (player && player.name) || c.n || "", m: (player && player.ident) || c.m || "", i: id || c.i || "" }); }

  var css = "\
#oc-veil{position:fixed;inset:0;z-index:9998;background:rgba(3,3,10,.5);opacity:0;transition:opacity .25s}#oc-veil.show{opacity:1}\
#oc-panel{position:fixed;z-index:10000;left:0;right:0;bottom:0;margin:0 auto;width:100%;max-width:420px;box-sizing:border-box;padding:24px 20px calc(env(safe-area-inset-bottom,0px) + 18px);border-radius:22px 22px 0 0;background:#fff;color:#0e1020;font:16px/1.35 -apple-system,BlinkMacSystemFont,'SF Pro Text',system-ui,sans-serif;box-shadow:0 -10px 40px rgba(0,0,0,.35);transform:translateY(105%);transition:transform .32s cubic-bezier(.2,.9,.25,1)}\
#oc-panel.show{transform:none}\
@media (min-width:700px){#oc-panel{bottom:auto;top:50%;border-radius:22px;padding:28px;transform:translateY(-46%) scale(.97);opacity:0;transition:transform .25s cubic-bezier(.2,.9,.25,1),opacity .2s}#oc-panel.show{transform:translateY(-50%);opacity:1}}\
#oc-panel h3{margin:0 0 16px;font-size:22px;font-weight:700;letter-spacing:-.01em}\
#oc-panel .sub{margin:-6px 0 16px;color:#6b6f80;font-size:15px}\
#oc-panel input.f{display:block;width:100%;box-sizing:border-box;height:52px;margin:0 0 12px;padding:0 16px;border:1px solid #e2e3ea;border-radius:14px;background:#f6f6f9;color:#0e1020;font:17px -apple-system,system-ui,sans-serif;outline:none;transition:border-color .15s,background .15s}\
#oc-panel input.f:focus{border-color:#0e1020;background:#fff}\
#oc-panel .boxes{position:relative;display:flex;gap:8px;margin:0 0 14px}\
#oc-panel .boxes b{flex:1;height:60px;display:grid;place-items:center;border:1px solid #e2e3ea;border-radius:14px;background:#f6f6f9;font:600 28px -apple-system,system-ui,sans-serif;font-variant-numeric:tabular-nums;color:#0e1020;transition:border-color .15s,background .15s,transform .15s}\
#oc-panel .boxes b.cur{border-color:#0e1020;background:#fff}#oc-panel .boxes b.fill{background:#fff}\
#oc-panel .boxes.bad b{animation:ocshake .3s}@keyframes ocshake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}\
#oc-panel .boxes input{position:absolute;inset:0;width:100%;height:100%;opacity:0;font-size:16px;border:0;color:transparent;background:transparent;caret-color:transparent}\
#oc-panel .go{position:relative;display:grid;place-items:center;width:100%;height:52px;margin:0 auto;border:0;border-radius:14px;background:#e9e9ef;color:#9a9caa;font:600 17px -apple-system,system-ui,sans-serif;cursor:default;transition:background .2s,color .2s,width .35s cubic-bezier(.2,.9,.25,1),border-radius .35s,transform .12s}\
#oc-panel .go.ink{background:#0e1020;color:#fff;cursor:pointer}#oc-panel .go.blue{background:#0a84ff;color:#fff;cursor:pointer}#oc-panel .go:active{transform:scale(.98)}\
#oc-panel .go.done{width:52px;border-radius:26px;background:#0a84ff;color:transparent}\
#oc-panel .go svg{position:absolute;width:26px;height:26px;opacity:0}#oc-panel .go.done svg{opacity:1}\
#oc-panel .go.done svg path{stroke-dasharray:30;stroke-dashoffset:30;animation:ocdraw .4s .25s ease-out forwards}@keyframes ocdraw{to{stroke-dashoffset:0}}\
#oc-panel .lks{display:flex;justify-content:space-between;margin-top:14px}\
#oc-panel .lk{padding:6px 2px;border:0;background:none;color:#6b6f80;font:500 15px -apple-system,system-ui,sans-serif;cursor:pointer}\
#oc-panel .msg{margin:10px 0 0;font-size:14px;color:#6b6f80}#oc-panel .msg:empty{display:none}#oc-panel .msg.err{color:#d93036}\
#oc-panel button:focus-visible{outline:3px solid #0a84ff;outline-offset:2px}\
@media (prefers-reduced-motion:reduce){#oc-panel,#oc-veil,#oc-panel .boxes b,#oc-panel .go{transition:none;animation:none}#oc-panel .go.done svg path{animation:none;stroke-dashoffset:0}}";
  var CHECK = "<svg viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M5 12.5l4.5 4.5L19 7.5'/></svg>";

  var step = "id", idVal = "", mode = "phone", sentVia = "phone", nameDone = null;
  function render() {
    if (!open_) return;
    var skip = "<button class='lk' id='oc-skip'>Continue without saving</button>";
    if (step === "name") {
      panel.innerHTML = "<h3>What's your first name?</h3><p class='sub'>So we can say hi when you come back.</p>" +
        "<input class='f' id='oc-nm' type='text' autocomplete='given-name' autocapitalize='words' maxlength='24' placeholder='First name'>" +
        "<button class='go ink' id='oc-nmok'>Save</button><div class='msg' aria-live='polite'></div><div class='lks'><span></span><button class='lk' id='oc-nmskip'>Skip</button></div>";
      statusEl = panel.querySelector(".msg"); var nm = panel.querySelector("#oc-nm");
      var saveNm = function () { var v = nm.value.trim().slice(0, 24); if (!v) return nameDone && nameDone(); api("name", { token: ls.get(TOK), name: v }).catch(function () {});
        try { var w = who() || {}; w.name = v; ls.set(WHO, JSON.stringify(w)); } catch (e) {} remember(null, { name: v }); nameDone && nameDone(); };
      panel.querySelector("#oc-nmok").onclick = saveNm; nm.onkeydown = function (e) { if (e.key === "Enter") saveNm(); };
      panel.querySelector("#oc-nmskip").onclick = function () { nameDone && nameDone(); };
      setTimeout(function () { nm.focus(); }, 340); return;
    }
    if (step === "back") {
      var c = ckGet() || {}, label = c.n ? c.n : (c.m || "your account");
      panel.innerHTML = "<h3>Welcome back" + (c.n ? ", " + esc(c.n) : "") + "</h3>" +
        "<button class='go blue' id='oc-as'>Log in as " + esc(label) + "</button><div class='msg' aria-live='polite'></div>" +
        "<div class='lks'><button class='lk' id='oc-notme'>Not you?</button><button class='lk' id='oc-skip'>Continue without saving</button></div>";
      statusEl = panel.querySelector(".msg");
      panel.querySelector("#oc-notme").onclick = function () { ckDel(); step = "id"; render(); };
      panel.querySelector("#oc-skip").onclick = function () { ls.set(SKIP, String(Date.now())); close(); };
      panel.querySelector("#oc-as").onclick = function () { var b = this; b.disabled = true; b.textContent = "Logging in…";
        api("load", { token: c.t }).then(function (r) {
          if (r && r.ok) { ls.set(TOK, c.t); ls.set(WHO, JSON.stringify({ name: r.name || c.n, ident: c.m })); b.className = "go done"; b.innerHTML = CHECK;
            setTimeout(function () { close(); if (r.save && better(r.save, ls.get(KEY))) applyCloud(r.save); }, 900); return; }
          if (!c.i) { step = "id"; render(); return; }   // token expired and no number saved: normal sign in
          idVal = c.i; sentVia = /@/.test(c.i) ? "email" : "phone"; api("request", { id: c.i }).then(function () { step = "code"; render(); }).catch(function () { b.disabled = false; b.textContent = "Log in as " + label; err("No connection. Try again."); });
        }).catch(function () { b.disabled = false; b.textContent = "Log in as " + label; err("No connection. Try again."); }); };
      return;
    }
    if (step === "id") {
      var ph = mode === "phone";
      panel.innerHTML = "<h3>Save your progress</h3>" +
        "<input class='f' id='oc-id' " + (ph ? "type='tel' inputmode='tel' autocomplete='tel' placeholder='Phone number'" : "type='email' inputmode='email' autocomplete='email' placeholder='Email'") + " value='" + esc(idVal) + "'>" +
        "<button class='go ink' id='oc-send'>Send code</button><div class='msg' aria-live='polite'></div>" +
        "<div class='lks'><button class='lk' id='oc-mode'>" + (ph ? "Use email" : "Use phone") + "</button>" + skip + "</div>";
      statusEl = panel.querySelector(".msg");
      panel.querySelector("#oc-mode").onclick = function () { mode = ph ? "email" : "phone"; idVal = ""; render(); };
      var send = function () {
        idVal = panel.querySelector("#oc-id").value.trim(); if (!idVal) return panel.querySelector("#oc-id").focus();
        var b = panel.querySelector("#oc-send"); b.disabled = true; b.textContent = "Sending…";
        api("request", { id: idVal }).then(function (r) {
          if (r && r.ok) { sentVia = r.via; step = "code"; render(); }
          else { b.disabled = false; b.textContent = "Send code"; err((r && r.err) || "Couldn't send. Try again."); }
        }).catch(function () { b.disabled = false; b.textContent = "Send code"; err("No connection. Try again."); });
      };
      panel.querySelector("#oc-send").onclick = send;
      panel.querySelector("#oc-id").onkeydown = function (e) { if (e.key === "Enter") send(); };
      setTimeout(function () { var i = panel.querySelector("#oc-id"); i && i.focus(); }, 340);
    } else {
      panel.innerHTML = "<h3>Code sent to your " + (sentVia === "email" ? "email" : "number") + "</h3>" +
        "<div class='boxes'><b></b><b></b><b></b><b></b><b></b><b></b><input id='oc-code' type='text' inputmode='numeric' autocomplete='one-time-code' maxlength='6' pattern='[0-9]*' aria-label='6-digit code'></div>" +
        "<button class='go' id='oc-go' disabled aria-label='Confirm code'><span>Confirm</span>" + CHECK + "</button><div class='msg' aria-live='polite'></div>" +
        "<div class='lks'><button class='lk' id='oc-back'>Back</button>" + skip + "</div>";
      statusEl = panel.querySelector(".msg");
      var ci = panel.querySelector("#oc-code"), bx = panel.querySelector(".boxes"), bs = bx.querySelectorAll("b"), gb = panel.querySelector("#oc-go"), auto;
      var paint = function () { if (gb.classList.contains("done")) return; var v = ci.value.replace(/\D/g, "").slice(0, 6); ci.value = v; bx.classList.remove("bad");
        for (var k = 0; k < 6; k++) { bs[k].textContent = v[k] || ""; bs[k].className = (k === v.length && document.activeElement === ci ? "cur" : "") + (v[k] ? " fill" : ""); }
        var full = v.length === 6; gb.disabled = !full; gb.className = "go" + (full ? " blue" : "");
        clearTimeout(auto); if (full) auto = setTimeout(go, 450); };
      var go = function () {
        var code = ci.value; if (code.length !== 6 || gb.dataset.busy) return; gb.dataset.busy = 1; clearTimeout(auto);
        api("verify", { id: idVal, code: code }).then(function (r) {
          delete gb.dataset.busy;
          if (!r || !r.ok) { bx.classList.add("bad"); ci.value = ""; paint(); err((r && r.err) || "That didn't work."); ci.focus(); return; }
          gb.className = "go done"; ci.blur();
          ls.set(TOK, r.token); ls.set(WHO, JSON.stringify(r.player)); ls.del(SKIP); remember(r.token, r.player, idVal);
          var local = ls.get(KEY), useCloud = r.save && (!local || better(r.save, local));
          setTimeout(function () { idVal = "";
            var finish = function () { step = "id"; if (useCloud) { applyCloud(r.save); return; } ls.del(LAST); push(); close(); };
            if (r.player && r.player.name) return finish();
            nameDone = finish; step = "name"; render(); }, 1100);
        }).catch(function () { delete gb.dataset.busy; err("No connection. Try again."); });
      };
      ci.oninput = paint; ci.onfocus = paint; ci.onblur = paint; gb.onclick = go;
      bx.onclick = function () { ci.focus(); };
      panel.querySelector("#oc-back").onclick = function () { step = "id"; render(); };
      setTimeout(function () { ci.focus(); paint(); }, 340);
      if ("OTPCredential" in window) { try { navigator.credentials.get({ otp: { transport: ["sms"] } }).then(function (o) { if (o && o.code && step === "code") { ci.value = o.code; paint(); } }).catch(function () {}); } catch (e) {} }
    }
    panel.querySelector("#oc-skip").onclick = function () { ls.set(SKIP, String(Date.now())); close(); };
  }
  function err(t) { if (!statusEl) return; statusEl.className = "msg err"; statusEl.textContent = t; }
  var open_ = false, veil;
  function open() { open_ = true; render(); veil.hidden = false; panel.hidden = false; requestAnimationFrame(function () { requestAnimationFrame(function () { veil.classList.add("show"); panel.classList.add("show"); }); }); }
  function close() { open_ = false; veil.classList.remove("show"); panel.classList.remove("show"); setTimeout(function () { if (!open_) { veil.hidden = true; panel.hidden = true; } }, 340); }
  window.orbitProfile = { token: function () { return ls.get(TOK); }, open: function () { step = "id"; open(); }, signOut: function () { push(true); api("signout", { token: ls.get(TOK) }).catch(function () {}); signOutLocal(); }, who: who };   // for a menu entry later
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  ready(function () {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    veil = document.createElement("div"); veil.id = "oc-veil"; veil.hidden = true; document.body.appendChild(veil);
    panel = document.createElement("div"); panel.id = "oc-panel"; panel.hidden = true; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-label", "Save your progress");
    ["pointerdown", "touchstart", "wheel", "keydown"].forEach(function (ev) { panel.addEventListener(ev, function (e) { e.stopPropagation(); }, { passive: true }); });
    document.body.appendChild(panel);
    var tapFocus = function (e) { var t = e.target, i = t.closest && (t.closest("input") || (t.closest(".boxes") && panel.querySelector("#oc-code"))); if (i && document.activeElement !== i) i.focus(); };   // the game swallows taps; focus the field ourselves
    panel.addEventListener("touchend", tapFocus, { passive: true }); panel.addEventListener("click", tapFocus);
    /* KING_ASKONCE: the sign-in sheet pops up once per device (or "Log in as …" when this phone remembers a login),
       and only after the update check so a reload can't swallow the first tap. */
    // handoff from the old home-screen app: ?h=<token> signs this Safari page in, then the param is removed
    var hq = (location.search.match(/[?&]h=([^&]+)/) || [])[1];
    if (hq) { try { hq = decodeURIComponent(hq); history.replaceState(null, "", location.pathname); } catch (e) {}
      if (!ls.get(TOK)) api("load", { token: hq }).then(function (r) { if (!r || !r.ok) return;   // came from their own signed-in app: sign this Safari page in quietly
        ls.set(TOK, hq); ls.set(WHO, JSON.stringify({ name: r.name })); remember(hq, { name: r.name }); ls.set(ASKED, "1"); if (r.save && better(r.save, ls.get(KEY))) applyCloud(r.save); }).catch(function () {}); }
    var cookie = ckGet();
    if (hq) step = null;
    else if (!ls.get(TOK) && cookie && cookie.t && !ls.get(ASKED)) { ls.set(ASKED, "1"); step = "back"; }
    else if (!ls.get(TOK) && !ls.get(ASKED) && !ls.get(SKIP)) { ls.set(ASKED, "1"); }
    else step = null;
    if (step) { var go2 = function () { if (document.getElementById("howto")) window.addEventListener("helios-howto-done", function () { setTimeout(open, 400); }, { once: true }); else open(); };
      Promise.race([window.ORBIT_FRESH || Promise.resolve("ok"), new Promise(function (r) { setTimeout(function () { r("ok"); }, 3000); })]).then(function (st) { if (st !== "reload") setTimeout(go2, 500); }); }
    else step = "id";
    var tok = ls.get(TOK);
    if (tok) api("load", { token: tok }).then(function (r) {   // another device may have played further
      if (r && r.err === "signed_out") return signOutLocal();
      if (r && r.ok) { var w = who() || {}; if (r.name && !w.name) { w.name = r.name; ls.set(WHO, JSON.stringify(w)); } remember(tok, { name: r.name || w.name, ident: w.ident }); }
      if (r && r.ok && r.save && better(r.save, ls.get(KEY))) applyCloud(r.save);
    }).catch(function () {});
    setInterval(function () { push(); }, 20000);
    document.addEventListener("visibilitychange", function () { if (document.hidden) setTimeout(function () { push(true); }, 0); });
    window.addEventListener("pagehide", function () { setTimeout(function () { push(true); }, 0); });
  });
})();
