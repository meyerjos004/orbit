const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:390,height:844}});
await ctx.addInitScript(()=>{ if(!sessionStorage.getItem('s')){sessionStorage.setItem('s','1');
 const base=JSON.parse(localStorage.getItem('kairos.orbit.v2')||'null');
 localStorage.setItem('kairos.orbit.seed','1');}});
const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8823/?dev=1');await p.waitForTimeout(2500);
await p.evaluate(()=>{const S=window.__S();S.allTime=1e7;S.total=1e7;S.dust=5e6;});
{const c=await p.$('text=/Continue without saving/i'); if(c) await c.click();} await p.waitForTimeout(600);
const tabs=await p.evaluate(()=>[...document.querySelectorAll('button,[role=tab]')].map(x=>x.innerText.trim()).filter(t=>t&&t.length<20).slice(0,30));console.log('tabs',tabs);
const up=await p.$('text=/^Upgrades?$/i'); if(up) await up.click(); await p.waitForTimeout(500);
const rel=await p.$('[data-relic]'); console.log('relic btn', !!rel, rel? await rel.evaluate(e=>e.disabled+' | '+e.innerText.replace(/\n/g,' ')):'');
if(rel){await rel.click();await p.waitForTimeout(400);}
console.log(await p.evaluate(()=>({sun:KV.hasRelic('sunstone'),dust:window.__S().dust})));
await p.screenshot({path:'/home/claude/kvshots/merge/sunstone.png'});
console.log('errors',errs);await b.close();})();
