// Each game unlocks at 75% of the one before (no ?dev). Run with the repo served on :8823.
const { chromium } = require('playwright');
const chain = ['helios','tethys','talos','nyx','demeter'];
(async()=>{const b=await chromium.launch(); let fail=0;
for (let i=1;i<chain.length;i++){ for (const [pct,want] of [[0.74,false],[0.75,true]]){
  const ctx=await b.newContext({viewport:{width:390,height:844}});
  const prev={}; for(let j=0;j<i;j++) prev[chain[j]]= j===i-1?pct:1;
  await ctx.addInitScript(p=>{localStorage.removeItem('kingverse.dev');localStorage.setItem('kingverse.v1',JSON.stringify({pct:p,relic:{}}));},prev);
  const p=await ctx.newPage(); await p.goto(`http://localhost:8823/${chain[i]}/`); await p.waitForTimeout(900);
  const open=await p.evaluate(()=>!document.querySelector('.kv-lock'));
  const ok=open===want; if(!ok) fail++;
  console.log(`${ok?'PASS':'FAIL'} ${chain[i]} with ${chain[i-1]} at ${pct*100}% -> ${open?'open':'locked'}`); await ctx.close(); }}
console.log(fail?`${fail} failed`:'all pass'); await b.close(); process.exit(fail?1:0);})();
