const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:390,height:844}});
await ctx.addInitScript(()=>{ if(!sessionStorage.getItem('seeded')){sessionStorage.setItem('seeded','1');localStorage.setItem('kingverse.dev','1');localStorage.setItem('kingverse.v1',JSON.stringify({pct:{helios:1,tethys:1,talos:0.9},relic:{spring:1}}));localStorage.setItem('kv.talos',JSON.stringify({br:5,size:4,cells:[10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],maxT:10,lv:{auto:2,tier:0,size:0},relic:true,t:Date.now()}));}});
const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8823/talos/');await p.waitForTimeout(1500);const out=[];
for(let k=0;k<2;k++){
 const lbl=await p.evaluate(()=>{const b=document.querySelector('[data-u="prestige"]');return b?b.querySelector('.nm').innerText:null});
 await p.click('[data-u="prestige"]');await p.waitForTimeout(500);
 const t=await p.evaluate(()=>document.body.innerText.match(/Rebuild #\d+[^\n]*/)?.[0]||'(no toast text)');
 const st=await p.evaluate(()=>({pr:S.pr,maxT:S.maxT,br:S.br,relicOwned:KV.hasRelic('spring'),gameRelic:S.relic}));
 out.push({buttonBefore:lbl,toast:t,st});
 await p.evaluate(()=>{S.maxT=10;S.cells[0]=10;});await p.evaluate(()=>{const b=document.querySelector('[data-u="auto"]');b&&b.click()});await p.waitForTimeout(300);
}
console.log(JSON.stringify(out,null,1));console.log('errors',errs);await b.close();})();
