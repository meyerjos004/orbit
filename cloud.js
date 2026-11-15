/* KING_ORBITCLOUD — ORBIT profiles: phone or email + 6-digit code from Argus, no password.
   Loaded BEFORE app.js so a cloud save is in place before the game reads localStorage. */
(function () {
  "use strict";
  var KEY = "kairos.orbit.v2", TOK = "orbit.cloud.token", WHO = "orbit.cloud.who", PEND = "orbit.cloud.pending", LAST = "orbit.cloud.lastpush";
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
    var tok = ls.get(TOK), cur = ls.get(KEY);
    if (applying || !tok || !cur || pushing || cur === ls.get(LAST)) return;
    var data; try { data = JSON.parse(cur); } catch (e) { return; }
    pushing = true;
    api("save", { token: tok, data: data }, keep).then(function (r) {
      pushing = false;
      if (r && r.ok) { ls.set(LAST, cur); if (statusEl && open_) setStatus("Saved"); }
      else if (r && r.err === "signed_out") signOutLocal();
    }).catch(function () { pushing = false; });
  }

  // 2) After the page is up: profile button + panel, sync loop.
  function ready(f) { if (document.readyState !== "loading") f(); else document.addEventListener("DOMContentLoaded", f); }
  var root, panel, statusEl, btn;
  function setStatus(t) { if (statusEl) statusEl.textContent = t || ""; }
  function who() { try { return JSON.parse(ls.get(WHO) || "null"); } catch (e) { return null; } }
  function signOutLocal() { ls.del(TOK); ls.del(WHO); ls.del(LAST); render(); }

  var css = "\
#oc-btn{position:fixed;z-index:9999;top:calc(env(safe-area-inset-top,0px) + 10px);left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:7px;padding:8px 14px;border:0;border-radius:999px;background:#fff;color:#0e1020;font:600 13px/1 -apple-system,BlinkMacSystemFont,'SF Pro Text',system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.35);cursor:pointer;transition:transform .15s}\
#oc-btn:active{transform:translateX(-50%) scale(.97)}#oc-btn i{width:7px;height:7px;border-radius:50%;background:#c9cad3}#oc-btn.on i{background:#18b67a}\
#oc-veil{position:fixed;inset:0;z-index:9998;background:rgba(3,3,10,.45);opacity:0;transition:opacity .25s}#oc-veil.show{opacity:1}\
#oc-panel{position:fixed;z-index:10000;left:0;right:0;bottom:0;margin:0 auto;width:100%;max-width:420px;box-sizing:border-box;padding:22px 20px calc(env(safe-area-inset-bottom,0px) + 20px);border-radius:22px 22px 0 0;background:#fff;color:#0e1020;font:16px/1.35 -apple-system,BlinkMacSystemFont,'SF Pro Text',system-ui,sans-serif;box-shadow:0 -10px 40px rgba(0,0,0,.35);transform:translateY(105%);transition:transform .32s cubic-bezier(.2,.9,.25,1)}\
#oc-panel.show{transform:none}\
@media (min-width:700px){#oc-panel{bottom:auto;top:50%;border-radius:22px;padding:28px;transform:translateY(-46%) scale(.97);opacity:0;transition:transform .25s cubic-bezier(.2,.9,.25,1),opacity .2s}#oc-panel.show{transform:translateY(-50%);opacity:1}}\
#oc-panel .grab{width:36px;height:5px;border-radius:3px;background:#e2e3ea;margin:-8px auto 16px}@media (min-width:700px){#oc-panel .grab{display:none}}\
#oc-panel h3{margin:0 0 16px;font-size:22px;font-weight:700;letter-spacing:-.01em}\
#oc-panel input.f{display:block;width:100%;box-sizing:border-box;height:52px;margin:0 0 12px;padding:0 16px;border:1px solid #e2e3ea;border-radius:14px;background:#f6f6f9;color:#0e1020;font:17px -apple-system,system-ui,sans-serif;outline:none;transition:border-color .15s,background .15s}\
#oc-panel input.f:focus{border-color:#ffb020;background:#fff;box-shadow:0 0 0 4px rgba(255,176,32,.22)}\
#oc-panel .boxes{position:relative;display:flex;gap:8px;margin:0 0 14px}\
#oc-panel .boxes b{flex:1;height:60px;display:grid;place-items:center;border:1px solid #e2e3ea;border-radius:14px;background:#f6f6f9;font:700 28px -apple-system,system-ui,sans-serif;font-variant-numeric:tabular-nums;transition:border-color .15s,background .15s,transform .15s}\
#oc-panel .boxes b.cur{border-color:#ffb020;background:#fff;box-shadow:0 0 0 4px rgba(255,176,32,.22)}#oc-panel .boxes b.fill{background:#fff}\
#oc-panel .boxes.bad b{border-color:#e5484d;animation:ocshake .3s}@keyframes ocshake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}\
#oc-panel .boxes input{position:absolute;inset:0;width:100%;height:100%;opacity:0;font-size:16px;border:0;color:transparent;background:transparent;caret-color:transparent}\
#oc-panel .go{display:block;width:100%;height:52px;border:0;border-radius:14px;background:#0e1020;color:#fff;font:600 17px -apple-system,system-ui,sans-serif;cursor:pointer;transition:transform .12s,opacity .15s}\
#oc-panel .go:active{transform:scale(.98)}#oc-panel .go:disabled{opacity:.45}\
#oc-panel .lk{display:inline-block;margin:14px 0 0;padding:6px 2px;border:0;background:none;color:#6b6f80;font:500 15px -apple-system,system-ui,sans-serif;cursor:pointer}#oc-panel .lk+.lk{float:right}\
#oc-panel .msg:empty{display:none}#oc-panel .msg{margin:10px 0 0;font-size:14px;color:#6b6f80}#oc-panel .msg.err{color:#d93036}\
#oc-panel .who{margin:-8px 0 16px;color:#6b6f80;font-size:15px}\
#oc-btn:focus-visible,#oc-panel button:focus-visible{outline:3px solid #ffb020;outline-offset:2px}\
@media (prefers-reduced-motion:reduce){#oc-panel,#oc-veil,#oc-panel .boxes b{transition:none;animation:none}}";

  var step = "id", idVal = "", mode = "phone";
  function render() {
    if (!btn) return;
    var w = who(), on = !!ls.get(TOK);
    btn.className = on ? "on" : ""; btn.innerHTML = "<i></i>" + (on ? (w && w.name ? esc(w.name) : "Profile") : "Save progress");
    btn.setAttribute("aria-label", on ? "Your ORBIT profile" : "Save your progress");
    if (!open_) return;
    var h = "<div class='grab'></div>";
    if (on) {
      panel.innerHTML = h + "<h3>Your profile</h3><div class='who'>" + esc(w ? w.ident : "") + "</div>" +
        "<input class='f' id='oc-name' maxlength='24' autocomplete='nickname' placeholder='Name' value='" + esc(w && w.name || "") + "'>" +
        "<button class='go' id='oc-save'>Done</button><button class='lk' id='oc-out'>Sign out</button><div class='msg' aria-live='polite'></div>";
      statusEl = panel.querySelector(".msg");
      panel.querySelector("#oc-save").onclick = function () { ls.del(LAST); push(); var n = panel.querySelector("#oc-name").value.trim(); if (n !== ((w && w.name) || "")) api("name", { token: ls.get(TOK), name: n }).then(function () { w.name = n; ls.set(WHO, JSON.stringify(w)); render(); }); close(); };
      panel.querySelector("#oc-out").onclick = function () { push(true); api("signout", { token: ls.get(TOK) }).catch(function () {}); signOutLocal(); close(); };
    } else if (step === "id") {
      var ph = mode === "phone";
      panel.innerHTML = h + "<h3>Save progress</h3>" +
        "<input class='f' id='oc-id' " + (ph ? "type='tel' inputmode='tel' autocomplete='tel' placeholder='Phone number'" : "type='email' inputmode='email' autocomplete='email' placeholder='Email'") + " value='" + esc(idVal) + "'>" +
        "<button class='go' id='oc-send'>Send code</button><button class='lk' id='oc-mode'>" + (ph ? "Use email" : "Use phone") + "</button><div class='msg' aria-live='polite'></div>";
      statusEl = panel.querySelector(".msg");
      panel.querySelector("#oc-mode").onclick = function () { mode = ph ? "email" : "phone"; idVal = ""; render(); };
      var send = function () {
        idVal = panel.querySelector("#oc-id").value.trim(); if (!idVal) return panel.querySelector("#oc-id").focus();
        var b = panel.querySelector("#oc-send"); b.disabled = true; b.textContent = "Sending…";
        api("request", { id: idVal }).then(function (r) {
          if (r && r.ok) { step = "code"; render(); }
          else { b.disabled = false; b.textContent = "Send code"; err((r && r.err) || "Couldn't send. Try again."); }
        }).catch(function () { b.disabled = false; b.textContent = "Send code"; err("No connection. Try again."); });
      };
      panel.querySelector("#oc-send").onclick = send;
      panel.querySelector("#oc-id").onkeydown = function (e) { if (e.key === "Enter") send(); };
      setTimeout(function () { var i = panel.querySelector("#oc-id"); i && i.focus(); }, 320);
    } else {
      panel.innerHTML = h + "<h3>Enter code</h3>" +
        "<div class='boxes'><b></b><b></b><b></b><b></b><b></b><b></b><input id='oc-code' type='text' inputmode='numeric' autocomplete='one-time-code' maxlength='6' pattern='[0-9]*' aria-label='6-digit code'></div>" +
        "<button class='go' id='oc-go' disabled>Sign in</button><button class='lk' id='oc-back'>Change</button><button class='lk' id='oc-again'>Resend</button><div class='msg' aria-live='polite'></div>";
      statusEl = panel.querySelector(".msg");
      var ci = panel.querySelector("#oc-code"), bx = panel.querySelector(".boxes"), bs = bx.querySelectorAll("b"), gb = panel.querySelector("#oc-go");
      var paint = function () { var v = ci.value.replace(/\D/g, "").slice(0, 6); ci.value = v; bx.classList.remove("bad");
        for (var k = 0; k < 6; k++) { bs[k].textContent = v[k] || ""; bs[k].className = (k === v.length && document.activeElement === ci ? "cur" : "") + (v[k] ? " fill" : ""); }
        gb.disabled = v.length !== 6; if (v.length === 6) go(); };
      var go = function () {
        var code = ci.value; if (code.length !== 6 || gb.dataset.busy) return; gb.dataset.busy = 1; gb.disabled = true; gb.textContent = "Checking…";
        api("verify", { id: idVal, code: code }).then(function (r) {
          delete gb.dataset.busy; gb.textContent = "Sign in";
          if (!r || !r.ok) { bx.classList.add("bad"); ci.value = ""; paint(); err((r && r.err) || "That didn't work."); ci.focus(); return; }
          ls.set(TOK, r.token); ls.set(WHO, JSON.stringify(r.player)); step = "id"; idVal = "";
          var local = ls.get(KEY);
          if (r.save && (!local || better(r.save, local))) { gb.textContent = "Loading your universe…"; applyCloud(r.save); return; }
          ls.del(LAST); push(); close(); render();
        }).catch(function () { delete gb.dataset.busy; gb.disabled = false; gb.textContent = "Sign in"; err("No connection. Try again."); });
      };
      ci.oninput = paint; ci.onfocus = paint; ci.onblur = paint; gb.onclick = go;
      bx.onclick = function () { ci.focus(); };
      panel.querySelector("#oc-back").onclick = function () { step = "id"; render(); };
      panel.querySelector("#oc-again").onclick = function () { api("request", { id: idVal }).then(function (r) { if (r && r.ok) { statusEl.className = "msg"; setStatus("Sent again"); } else err((r && r.err) || "Couldn't send."); }); };
      setTimeout(function () { ci.focus(); paint(); }, 320);
      if ("OTPCredential" in window) { try { navigator.credentials.get({ otp: { transport: ["sms"] } }).then(function (o) { if (o && o.code && step === "code") { ci.value = o.code; paint(); } }).catch(function () {}); } catch (e) {} }
    }
  }
  function err(t) { if (!statusEl) return; statusEl.className = "msg err"; statusEl.textContent = t; }
  var open_ = false, veil;
  function open() { open_ = true; render(); veil.hidden = false; panel.hidden = false; requestAnimationFrame(function () { veil.classList.add("show"); panel.classList.add("show"); }); }
  function close() { open_ = false; veil.classList.remove("show"); panel.classList.remove("show"); setTimeout(function () { if (!open_) { veil.hidden = true; panel.hidden = true; } }, 320); render(); }
  function toggle() { if (open_) close(); else open(); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  ready(function () {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    btn = document.createElement("button"); btn.id = "oc-btn"; btn.type = "button"; btn.onclick = toggle;
    veil = document.createElement("div"); veil.id = "oc-veil"; veil.hidden = true; veil.onclick = close; document.body.appendChild(veil);
    panel = document.createElement("div"); panel.id = "oc-panel"; panel.hidden = true; panel.setAttribute("aria-modal", "true");
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open_) close(); }); panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "ORBIT profile");
    ["pointerdown", "touchstart", "wheel", "keydown"].forEach(function (ev) { panel.addEventListener(ev, function (e) { e.stopPropagation(); }, { passive: true }); btn.addEventListener(ev, function (e) { e.stopPropagation(); }, { passive: true }); });
    document.body.appendChild(btn); document.body.appendChild(panel); render();

    var tok = ls.get(TOK);
    if (tok) api("load", { token: tok }).then(function (r) {   // another device may have played further
      if (r && r.err === "signed_out") return signOutLocal();
      if (r && r.ok && r.save && better(r.save, ls.get(KEY))) applyCloud(r.save);
    }).catch(function () {});
    setInterval(function () { push(); }, 20000);
    document.addEventListener("visibilitychange", function () { if (document.hidden) setTimeout(function () { push(true); }, 0); });
    window.addEventListener("pagehide", function () { setTimeout(function () { push(true); }, 0); });
  });
})();
