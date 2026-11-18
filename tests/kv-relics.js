const { chromium } = require('playwright');
const G={tethys:{rid:'pearl',seed:{cr:1e12,best:1e9,depth:0}},talos:{rid:'spring',seed:{br:1e12,maxT:10,cells:[10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},nyx:{rid:'core',seed:{en:1e12,cleared:10,best:10}},demeter:{rid:'gaia',seed:{co:1e12,found:12,got:['wheat','carrot','berry','grape','pumpkin','mushroom','lotus','cherry','x9','x10','x11','x12']}}};
(async()=>{const b=await chromium.launch();
for(const [g,c] of Object.entries(G)){const ctx=await b.newContext({viewport:{width:390,height:844}});
 await ctx.addInitScript(([g,seed])=>{ if(!sessionStorage.getItem('s')){sessionStorage.setItem('s','1');localStorage.setItem('kingverse.dev','1');const k='kv.'+g;const cur=JSON.parse(localStorage.getItem(k)||'{}');localStorage.setItem(k,JSON.stringify(Object.assign(cur,seed,{t:Date.now()})));}},[g,c.seed]);
 const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto(`http://localhost:8823/${g}/`);await p.waitForTimeout(1500);
 const btn=await p.$('[data-u="relic"]');const before=btn?await btn.evaluate(e=>e.className):'none';
 if(btn){await btn.scrollIntoViewIfNeeded();await btn.click();await p.waitForTimeout(300);}
 const r=await p.evaluate(rid=>({has:KV.hasRelic(rid),gameRelic:S.relic}),c.rid);
 console.log(g,'btn:',before,'->',JSON.stringify(r),errs.length?errs:'');await ctx.close();}
await b.close();})();
