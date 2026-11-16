/* ORBIT v2 · KING_ORBIT2 (Nov 14): WebGL star system (three.js), procedural shaders, bloom.
   Tap the star, build bodies that really orbit it, catch comets, go supernova. */
import * as THREE from "three";
import { EffectComposer, RenderPass, EffectPass, BloomEffect, SMAAEffect, SMAAPreset, VignetteEffect, ChromaticAberrationEffect, ToneMappingEffect, ToneMappingMode, NoiseEffect, BlendFunction } from "postprocessing";
import * as SH from "./shaders.js";
import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare.js";

const $ = (id) => document.getElementById(id);
const now = () => Date.now();
const col = (h) => new THREE.Color(h);

/* ================= GAME DATA ================= */
const GENS = [
  { id: "mote", n: "Stardust motes", e: "✨", base: 15, rate: 0.1, d: "Specks that loop your star" },
  { id: "rock", n: "Asteroid belt", e: "🪨", base: 110, rate: 1, d: "Every rock adds to the belt" },
  { id: "moon", n: "Moon", e: "🌙", base: 1200, rate: 8, d: "Cratered, grey, steady" },
  { id: "plan", n: "Ocean world", e: "🌍", base: 13000, rate: 47, d: "Oceans, clouds, continents" },
  { id: "giant", n: "Gas giant", e: "🪐", base: 140000, rate: 260, d: "Storm bands and rings" },
  { id: "ring", n: "Ring world", e: "💍", base: 2e6, rate: 1400, d: "A built halo, lit seams" },
  { id: "dyson", n: "Dyson swarm", e: "🛰️", base: 3.3e7, rate: 7800, d: "Panels that drink the star" },
  { id: "pulsar", n: "Pulsar", e: "💫", base: 5.1e8, rate: 44000, d: "A spinning lighthouse" },
  { id: "hole", n: "Black hole", e: "🕳️", base: 7.5e9, rate: 260000, d: "Eats light, gives back more" },
];
const MS = [10, 25, 50, 100, 150, 200];
const UPS = [];
GENS.forEach((g) => MS.forEach((at, k) => UPS.push({ id: g.id + at, g: g.id, at, cost: g.base * Math.pow(10, k + 1) * (k ? 2 : 1), n: g.n + ["  · spin up", " · gravity", " · clusters", " · resonance", " · fusion", " · singularity"][k], d: `${g.n} ×2 (needs ${at})`, e: g.e })));
[[100, "Firm tap", "Taps ×2", "👆"], [5e3, "Solar flare", "Taps ×2", "👆"], [5e5, "Comet sense", "Comets come twice as often", "☄️"], [5e6, "Core heat", "Taps also give 1% of your /sec", "👆"], [5e7, "Stellar wind", "Taps ×3", "👆"], [5e9, "Tidal lock", "Everything ×1.5", "🌌"], [5e11, "Gravity well", "Everything ×2", "🌌"], [5e13, "Hand of god", "Taps give 3% of your /sec", "👆"]]
  .forEach(([cost, n, d, e], i) => UPS.push({ id: "t" + i, cost, n, d, e }));
UPS.sort((a, b) => a.cost - b.cost);
const ACH = [
  ["first", "First light", (s) => s.total >= 1], ["k", "1K dust", (s) => s.total >= 1e3], ["m", "Millionaire of the void", (s) => s.total >= 1e6], ["b", "Billion", (s) => s.total >= 1e9],
  ["tap100", "100 taps", (s) => s.taps >= 100], ["tap1k", "1,000 taps", (s) => s.taps >= 1000], ["comet", "Comet catcher", (s) => s.comets >= 1], ["comet25", "Comet hunter", (s) => s.comets >= 25],
  ["moon", "Got a moon", (s) => (s.own.moon || 0) >= 1], ["giant", "Gas giant", (s) => (s.own.giant || 0) >= 1], ["hole", "Event horizon", (s) => (s.own.hole || 0) >= 1],
  ["nova", "Supernova", (s) => s.novas >= 1], ["nova5", "Serial supernova", (s) => s.novas >= 5], ["fifty", "Crowded sky", (s) => GENS.reduce((a, g) => a + (s.own[g.id] || 0), 0) >= 50],
];
const KEY = "kairos.orbit.v2";
const fresh = (hard, S0) => Object.assign({ dust: 0, total: 0, own: {}, ups: {}, t: now(), sound: true }, hard ? { shards: 0, novas: 0, ach: {}, taps: 0, comets: 0, born: now(), allTime: 0 } : { shards: S0.shards, novas: S0.novas, ach: S0.ach, taps: S0.taps, comets: S0.comets, born: S0.born, allTime: S0.allTime });
let S = fresh(true);
try { const raw = localStorage.getItem(KEY) || localStorage.getItem("kairos.orbit.v1"); if (raw) S = Object.assign(fresh(true), JSON.parse(raw)); } catch (e) {}
const save = () => { S.t = now(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
window.__S = () => S;

let frenzyUntil = 0;
const genMult = (g) => UPS.reduce((m, u) => (u.g === g.id && S.ups[u.id] ? m * 2 : m), 1);
const baseMult = () => (1 + S.shards * 0.1) * (S.ups.t5 ? 1.5 : 1) * (S.ups.t6 ? 2 : 1);
const globalMult = () => baseMult() * (frenzyUntil > now() ? 7 : 1);
const genRate = (g) => (S.own[g.id] || 0) * g.rate * genMult(g);
const perSec = () => GENS.reduce((a, g) => a + genRate(g), 0) * globalMult();
const tapVal = () => { let v = (S.ups.t0 ? 2 : 1) * (S.ups.t1 ? 2 : 1) * (S.ups.t4 ? 3 : 1); const ps = perSec(); if (S.ups.t3) v += ps * 0.01; if (S.ups.t7) v += ps * 0.03; return v * (1 + S.shards * 0.1) * (frenzyUntil > now() ? 7 : 1); };
const R = 1.15;
const cost = (g, k) => g.base * Math.pow(R, S.own[g.id] || 0) * (Math.pow(R, k) - 1) / (R - 1);
const maxBuy = (g) => Math.max(0, Math.floor(Math.log(S.dust * (R - 1) / (g.base * Math.pow(R, S.own[g.id] || 0)) + 1) / Math.log(R)));
const shardsFor = (t) => Math.floor(Math.sqrt(t / 1e9) * 2);
const SUF = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
const fmt = (n) => { if (!isFinite(n)) return "∞"; if (n < 1000) return n < 10 && n % 1 ? n.toFixed(1) : Math.floor(n).toLocaleString(); const e = Math.min(SUF.length - 1, Math.floor(Math.log10(n) / 3)); const v = n / Math.pow(1000, e); return (v < 10 ? v.toFixed(2) : v < 100 ? v.toFixed(1) : Math.floor(v)) + SUF[e]; };
const dur = (ms) => { const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60); return h ? `${h}h ${m}m` : m ? `${m}m ${s % 60}s` : `${s}s`; };

/* ================= SOUND ================= */
let AC = null, master = null;
function ac() { if (!AC) { AC = new (window.AudioContext || window.webkitAudioContext)(); master = AC.createGain(); master.gain.value = 0.5; master.connect(AC.destination); } return AC; }
function tone(f, d = 0.08, type = "sine", v = 0.06, slide = 1.5) { if (!S.sound) return; try { const a = ac(), o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.setValueAtTime(f, a.currentTime); o.frequency.exponentialRampToValueAtTime(f * slide, a.currentTime + d); g.gain.setValueAtTime(v, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + d); o.connect(g).connect(master); o.start(); o.stop(a.currentTime + d + 0.02); } catch (e) {} }
const PENTA = [0, 2, 4, 7, 9, 12, 14, 16];
let tapNote = 0;
const tapSound = () => { tapNote = (tapNote + 1 + (Math.random() < 0.3 ? 1 : 0)) % PENTA.length; tone(392 * Math.pow(2, PENTA[tapNote] / 12), 0.12, "sine", 0.05, 1.01); tone(784 * Math.pow(2, PENTA[tapNote] / 12), 0.06, "triangle", 0.015, 1.01); };
const buzz = (ms) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };

/* ================= THREE SCENE ================= */
const stage = $("stage"), canvas = $("cv");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, stencil: false, depth: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.toneMapping = THREE.NoToneMapping; renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 0.05, 120000);
/* KING_ORBIT3: pmndrs postprocessing = mipmap bloom, SMAA, film grain, chromatic aberration, vignette, ACES in one pass */
const composer = new EffectComposer(renderer, { frameBufferType: THREE.HalfFloatType, multisampling: 0 });
composer.addPass(new RenderPass(scene, camera));
const bloomFx = new BloomEffect({ mipmapBlur: true, intensity: 1.4, luminanceThreshold: 0.68, luminanceSmoothing: 0.25, radius: 0.72 });
const caFx = new ChromaticAberrationEffect({ offset: new THREE.Vector2(0.0006, 0.0005), radialModulation: true, modulationOffset: 0.35 });
const vigFx = new VignetteEffect({ offset: 0.28, darkness: 0.62 });
const grainFx = new NoiseEffect({ premultiply: true, blendFunction: BlendFunction.SCREEN }); grainFx.blendMode.opacity.value = 0.06;
const toneFx = new ToneMappingEffect({ mode: ToneMappingMode.ACES_FILMIC });
composer.addPass(new EffectPass(camera, bloomFx, vigFx, grainFx, toneFx));
composer.addPass(new EffectPass(camera, caFx)); composer.addPass(new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.HIGH })));
const bloom = { set strength(v) { bloomFx.intensity = v * 1.5; }, set radius(v) {}, resolution: { set() {} } };
/* textures: Solar System Scope (CC BY 4.0) + Poly Haven (CC0) */
const TL = new THREE.TextureLoader(), ANI = Math.min(8, renderer.capabilities.getMaxAnisotropy());
const tex = (f, srgb = true) => { const t = TL.load("tex/" + f); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = ANI; t.wrapS = THREE.RepeatWrapping; return t; };
const T = { sun: tex("2k_sun.jpg"), moon: tex("2k_moon.jpg"), mercury: tex("2k_mercury.jpg"), mars: tex("2k_mars.jpg"), venus: tex("2k_venus_surface.jpg"), earth: tex("2k_earth_daymap.jpg"), night: tex("2k_earth_nightmap.jpg"), clouds: tex("2k_earth_clouds.jpg", false),
  jupiter: tex("2k_jupiter.jpg"), saturn: tex("2k_saturn.jpg"), sring: tex("2k_saturn_ring_alpha.png"), uranus: tex("2k_uranus.jpg"), neptune: tex("2k_neptune.jpg"), ceres: tex("2k_ceres_fictional.jpg"), haumea: tex("2k_haumea_fictional.jpg"), makemake: tex("2k_makemake_fictional.jpg"), eris: tex("2k_eris_fictional.jpg"),
  mw: tex("4k_stars_milky_way.jpg"), rockD: tex("rock_Diffuse.jpg"), rockN: tex("rock_nor_gl.jpg", false), rockR: tex("rock_Rough.jpg", false) };
[T.mw].forEach((t) => { t.anisotropy = 1; });
let envMap = null; TL.load("tex/studio_env.jpg", (h) => { h.mapping = THREE.EquirectangularReflectionMapping; h.colorSpace = THREE.SRGBColorSpace; const pm = new THREE.PMREMGenerator(renderer); envMap = pm.fromEquirectangular(h).texture; h.dispose(); pm.dispose(); [dysonMat, ringMetal].forEach((mm) => { mm.envMap = envMap; mm.needsUpdate = true; }); });
const U = { uT: { value: 0 } };

// Sky
const sky = new THREE.Mesh(new THREE.SphereGeometry(60000, 48, 32), new THREE.ShaderMaterial({ vertexShader: SH.SKY_V, fragmentShader: SH.SKY3_F, side: THREE.BackSide, depthWrite: false, uniforms: { uT: U.uT, uMap: { value: T.mw }, uA: { value: col("#b4532a") }, uB: { value: col("#1f8f8a") } } }));
scene.add(sky);
{ // star field (two layers, twinkle via size attenuation)
  const mk = (n, r0, r1, size, op) => { const g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), c = new Float32Array(n * 3); const tint = [col("#ffffff"), col("#cfe3ff"), col("#ffe2c4"), col("#bfeee8"), col("#ff9a7a"), col("#9fb8ff"), col("#d7a8ff"), col("#ffd27a")];
    for (let i = 0; i < n; i++) { const v = new THREE.Vector3().randomDirection().multiplyScalar(r0 + Math.random() * (r1 - r0)); p.set([v.x, v.y, v.z], i * 3); const t = tint[(Math.random() * tint.length) | 0]; const b = 0.5 + Math.random() * 0.8; c.set([t.r * b, t.g * b, t.b * b], i * 3); }
    g.setAttribute("position", new THREE.BufferAttribute(p, 3)); g.setAttribute("color", new THREE.BufferAttribute(c, 3));
    const c2 = document.createElement("canvas"); c2.width = c2.height = 32; const x2 = c2.getContext("2d"), g2 = x2.createRadialGradient(16, 16, 0, 16, 16, 16); g2.addColorStop(0, "rgba(255,255,255,1)"); g2.addColorStop(0.35, "rgba(255,255,255,.55)"); g2.addColorStop(1, "rgba(255,255,255,0)"); x2.fillStyle = g2; x2.fillRect(0, 0, 32, 32);
    return new THREE.Points(g, new THREE.PointsMaterial({ size: size * 2.2, map: new THREE.CanvasTexture(c2), vertexColors: true, transparent: true, opacity: op, sizeAttenuation: false, depthWrite: false, blending: THREE.AdditiveBlending })); };
  scene.add(mk(16000, 20000, 50000, 1.0, 0.75)); scene.add(mk(2400, 20000, 50000, 1.8, 0.95)); scene.add(mk(260, 20000, 50000, 3.2, 1)); /* KING_DENSESKY */
}

// Star
const ERA = [["#ffd25a", "#ff3d0a"], ["#bfe0ff", "#3d6dff"], ["#ffffff", "#b9a8ff"], ["#ffb3ec", "#c03cff"], ["#b8ffe8", "#18c79a"]];
const starMat = new THREE.ShaderMaterial({ vertexShader: SH.STAR_V, fragmentShader: SH.SUN4_F, uniforms: { uT: U.uT, uMap: { value: T.sun }, uA: { value: col("#fff") }, uB: { value: col("#fff") }, uPulse: { value: 0 }, uBright: { value: 1 } } });
const star = new THREE.Mesh(new THREE.SphereGeometry(3, 96, 64), starMat); scene.add(star);
const glowMat = (c, i, p) => new THREE.ShaderMaterial({ vertexShader: SH.GLOW_V, fragmentShader: SH.GLOW_F, uniforms: { uC: { value: col(c) }, uI: { value: i }, uP: { value: p } }, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.FrontSide });
/* KING_SUN4: soft camera-facing corona with moving streamers (no hard shell edge), lens flare, god rays */
const coronaMat = new THREE.ShaderMaterial({ vertexShader: SH.CORONA_V, fragmentShader: SH.CORONA_F, uniforms: { uT: U.uT, uA: { value: col("#fff1d0") }, uB: { value: col("#ff9a2e") }, uI: { value: 1 }, uR: { value: 3 / 11 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
const corona1 = new THREE.Mesh(new THREE.PlaneGeometry(22, 22), coronaMat); corona1.material.uniforms.uC = { value: coronaMat.uniforms.uA.value }; corona1.renderOrder = 2; scene.add(corona1);
const corona2 = new THREE.Object3D(); corona2.material = { uniforms: { uI: { value: 0 }, uC: { value: new THREE.Color() } } };
const flareTex = (kind) => { const c = document.createElement("canvas"); c.width = c.height = 256; const x = c.getContext("2d"), g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  if (kind === "core") { g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.08, "rgba(255,240,210,.9)"); g.addColorStop(0.25, "rgba(255,190,120,.25)"); g.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    x.globalCompositeOperation = "lighter"; for (let k = 0; k < 6; k++) { x.save(); x.translate(128, 128); x.rotate(k * Math.PI / 6); const s = x.createLinearGradient(-128, 0, 128, 0); s.addColorStop(0, "rgba(255,230,200,0)"); s.addColorStop(0.5, "rgba(255,240,220,.12)"); s.addColorStop(1, "rgba(255,230,200,0)"); x.fillStyle = s; x.fillRect(-128, -1, 256, 2); x.restore(); } }
  else if (kind === "ring") { g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.78, "rgba(0,0,0,0)"); g.addColorStop(0.86, "rgba(160,220,255,.35)"); g.addColorStop(0.9, "rgba(255,160,220,.25)"); g.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = g; x.fillRect(0, 0, 256, 256); }
  else { x.translate(128, 128); x.beginPath(); for (let k = 0; k < 6; k++) { const an = k * Math.PI / 3; x.lineTo(Math.cos(an) * 110, Math.sin(an) * 110); } x.closePath(); const h = x.createRadialGradient(0, 0, 0, 0, 0, 110); h.addColorStop(0, "rgba(255,255,255,.10)"); h.addColorStop(0.85, "rgba(255,255,255,.22)"); h.addColorStop(1, "rgba(255,255,255,.05)"); x.fillStyle = h; x.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
const flare = new Lensflare(); const flareEls = [new LensflareElement(flareTex("core"), 240, 0, new THREE.Color("#fff1d0")), new LensflareElement(flareTex("ring"), 170, 0, new THREE.Color("#ffd2a0")), new LensflareElement(flareTex("hex"), 60, 0.55, new THREE.Color("#8fd3ff")), new LensflareElement(flareTex("hex"), 110, 0.75, new THREE.Color("#c9a8ff")), new LensflareElement(flareTex("hex"), 44, 0.95, new THREE.Color("#7affd8")), new LensflareElement(flareTex("ring"), 200, 1.15, new THREE.Color("#ffd2a0"))];
flareEls.forEach((e) => flare.addElement(e)); star.add(flare);
const starLight = new THREE.PointLight(0xffffff, 3, 0, 0); scene.add(starLight); // used by standard materials (dyson panels)
scene.add(new THREE.AmbientLight(0x404050, 0.4));
function setEra() { const [a, b] = ERA[S.novas % ERA.length]; starMat.uniforms.uA.value.set(a); starMat.uniforms.uB.value.set(b); coronaMat.uniforms.uA.value.set(a); coronaMat.uniforms.uB.value.set(b); flare.children?.length; flareEls.forEach((e, i) => e.color.set(i ? b : a)); starLight.color.set(a); PL.forEach((m) => m.uniforms.uStar.value.set(a)); }

// Planet materials
const PL = [];
const planetMat = (kind, a, b, c, seed) => { const m = new THREE.ShaderMaterial({ vertexShader: SH.PLANET_V, fragmentShader: SH.PLANET_F, uniforms: { uT: U.uT, uSeed: { value: seed }, uKind: { value: kind }, uA: { value: col(a) }, uB: { value: col(b) }, uC: { value: col(c) }, uStar: { value: col("#ffcf6a") } } }); PL.push(m); return m; };
const p3 = (map, o = {}) => { const m = new THREE.ShaderMaterial({ vertexShader: SH.P3_V, fragmentShader: SH.P3_F, uniforms: { uMap: { value: map }, uNight: { value: o.night || map }, uHasNight: { value: o.night ? 1 : 0 }, uHue: { value: o.hue || 0 }, uSat: { value: o.sat ?? 1 }, uTint: { value: col(o.tint || "#ffffff") }, uBump: { value: o.bump ?? 1.2 }, uSpec: { value: o.spec ?? 0 }, uRough: { value: o.rough ?? 0.4 }, uUOff: { value: o.uoff ?? Math.random() }, uStar: { value: col("#ffe9c8") } }, extensions: { derivatives: true } }); PL.push(m); return m; };
const cloudMat = () => { const m = new THREE.ShaderMaterial({ vertexShader: SH.P3_V, fragmentShader: SH.CLOUD_F, uniforms: { uMap: { value: T.clouds }, uStar: { value: col("#ffe9c8") }, uOff: { value: Math.random() } }, transparent: true, depthWrite: false }); PL.push(m); return m; };
const SPH2 = new THREE.SphereGeometry(1, 128, 96);
const cellTex = (() => { const c = document.createElement("canvas"); c.width = 128; c.height = 80; const x = c.getContext("2d"); x.fillStyle = "#0b2a3a"; x.fillRect(0, 0, 128, 80); for (let i = 0; i < 8; i++) for (let j = 0; j < 5; j++) { const g = x.createLinearGradient(i * 16, j * 16, i * 16 + 14, j * 16 + 14); g.addColorStop(0, "#1f6f9a"); g.addColorStop(1, "#0d3550"); x.fillStyle = g; x.fillRect(i * 16 + 1, j * 16 + 1, 14, 14); } x.strokeStyle = "#cfd8e0"; x.lineWidth = 2; x.strokeRect(1, 1, 126, 78); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const dysonMat = new THREE.MeshStandardMaterial({ map: cellTex, color: 0xffffff, metalness: 0.6, roughness: 0.25, emissive: 0x2bd4a0, emissiveMap: cellTex, emissiveIntensity: 0.6, side: THREE.DoubleSide, envMapIntensity: 1.4 });
const ringMetal = new THREE.MeshStandardMaterial({ color: 0xe9e6f5, metalness: 0.95, roughness: 0.18, envMapIntensity: 1.4, emissiveMap: (() => { const c = document.createElement("canvas"); c.width = 1024; c.height = 64; const x = c.getContext("2d"); x.fillStyle = "#000"; x.fillRect(0, 0, 1024, 64); x.fillStyle = "#a78bfa"; for (let i = 0; i < 1024; i += 32) { x.fillRect(i, 0, 2, 64); } x.fillRect(0, 30, 1024, 3); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 1); return t; })(), emissive: 0xffffff, emissiveIntensity: 1.2 });
const atmo = (r, c) => new THREE.Mesh(new THREE.SphereGeometry(r * 1.12, 48, 32), new THREE.ShaderMaterial({ vertexShader: SH.PLANET_V, fragmentShader: SH.ATMO_F, uniforms: { uC: { value: col(c) } }, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide }));
const SPH = new THREE.SphereGeometry(1, 64, 48);

// Orbit visuals per type
const ORB = { mote: [5.2, 6.6], rock: [8, 10.5], moon: [12.5, 14.5], plan: [16, 19], giant: [21, 25], ring: [27, 29.5], dyson: [4.4, 5.6], pulsar: [32, 34], hole: [37, 40] };
const CAP = { moon: 10, plan: 8, giant: 6, ring: 4, pulsar: 4, hole: 3 };
const bodies = {}; GENS.forEach((g) => (bodies[g.id] = []));
const orbitLines = new THREE.Group(); scene.add(orbitLines);
const lineMat = new THREE.LineBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.05, depthWrite: false });
function orbitLine(r, inc) { const pts = []; for (let i = 0; i <= 128; i++) { const a = (i / 128) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)); } const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat); l.rotation.x = inc; orbitLines.add(l); }
const rnd = (a, b) => a + Math.random() * (b - a);

function makeBody(id, i) {
  const seed = Math.random() * 10, [r0, r1] = ORB[id], r = rnd(r0, r1), inc = rnd(-0.08, 0.08), sp = 0.9 / Math.pow(r, 1.5) * rnd(0.9, 1.1);
  const o = { r, inc, sp, a: Math.random() * Math.PI * 2, spin: rnd(0.1, 0.4), obj: new THREE.Group() };
  let m;
  if (id === "moon") { const s = rnd(0.35, 0.55), pick = [T.moon, T.mercury, T.ceres, T.eris][i % 4]; m = new THREE.Mesh(SPH2, p3(pick, { bump: 2.4, sat: 0.75 })); m.scale.setScalar(s); }
  else if (id === "plan") { const s = rnd(0.75, 1.05), v = i % 4; m = new THREE.Mesh(SPH2, p3(v === 3 ? T.mars : T.earth, { night: v === 3 ? null : T.night, hue: 0, spec: v === 3 ? 0 : 1, bump: v === 3 ? 1.6 : 0.9 })); m.scale.setScalar(s);
    if (v !== 3) { const cl = new THREE.Mesh(SPH2, cloudMat()); cl.scale.setScalar(1.012); m.add(cl); o.clouds = cl; } m.add(atmo(1, v === 3 ? "#ff9a6a" : "#6fb7ff")); }
  else if (id === "giant") { const s = rnd(1.6, 2.2), v = i % 4, map = [T.jupiter, T.saturn, T.uranus, T.neptune][v]; m = new THREE.Mesh(SPH2, p3(map, { bump: 0, hue: i >= 4 ? 0.35 : 0 })); m.scale.setScalar(s); m.add(atmo(1, ["#e8c49a", "#f2dcae", "#a8e6ee", "#5b7cff"][v]));
    if (v === 1 || v === 2 || i % 3 === 0) { const rg = new THREE.Mesh(new THREE.RingGeometry(1.25, 2.35, 192, 1), new THREE.ShaderMaterial({ vertexShader: SH.RING3_V, fragmentShader: SH.RING3_F, uniforms: { uMap: { value: T.sring }, uStar: { value: col("#ffe9c8") }, uIn: { value: 1.25 }, uOut: { value: 2.35 }, uTint: { value: col(v === 2 ? "#bfe9f0" : "#ffffff") } }, transparent: true, side: THREE.DoubleSide, depthWrite: false })); PL.push(rg.material); rg.rotation.x = -Math.PI / 2 + (v === 2 ? 1.3 : 0.42); m.add(rg); } }
  else if (id === "ring") { m = new THREE.Group(); const t = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.12, 32, 220), ringMetal); t.rotation.x = Math.PI / 2; const rg = new THREE.Group(); rg.rotation.x = rnd(-0.4, 0.4); rg.add(t); m.add(rg);
    /* KING_RINGLAND: lit land strip on the inner face + spokes to the hub */
    const landTex = T.earth.clone(); landTex.wrapS = landTex.wrapT = THREE.RepeatWrapping; landTex.repeat.set(5, 0.18); landTex.offset.set(0, 0.42); landTex.needsUpdate = true;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(1.165, 1.165, 0.2, 220, 1, true), new THREE.MeshStandardMaterial({ map: landTex, roughness: 0.85, metalness: 0, side: THREE.BackSide, emissive: 0x223355, emissiveIntensity: 0.25 })); rg.add(band);
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(1.16, 1.16, 0.025, 220, 1, true), new THREE.MeshBasicMaterial({ color: 0x9fd0ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); wall.position.y = 0.11; rg.add(wall); const wall2 = wall.clone(); wall2.position.y = -0.11; rg.add(wall2);
    for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.3, 8), ringMetal); sp.rotation.z = Math.PI / 2; const piv = new THREE.Group(); piv.rotation.y = k * Math.PI / 3; piv.add(sp); rg.add(piv); } const core = new THREE.Mesh(SPH, planetMat(3, "#cfc8ea", "#7a70a8", "#7aa7ff", seed + 1)); core.scale.setScalar(0.3); m.add(core); }
  else if (id === "pulsar") { m = new THREE.Group(); const c = new THREE.Mesh(SPH, planetMat(4, "#9fb8ff", "#3a4aa8", "#e6f0ff", seed)); c.scale.setScalar(0.35); m.add(c); m.add(new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 24), glowMat("#7aa7ff", 1.6, 1.8)));
    const beamMat = new THREE.ShaderMaterial({ /* KING_BEAM: soft beams that fade along their length */ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, uniforms: { uT: U.uT },
      vertexShader: "varying vec2 vUv; varying float vF; void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.0); vec3 n=normalize(normalMatrix*normal); vF=abs(dot(n,normalize(-mv.xyz))); gl_Position=projectionMatrix*mv; }",
      fragmentShader: "uniform float uT; varying vec2 vUv; varying float vF; void main(){ float l=vUv.y; float a=pow(l,1.6)*pow(vF,1.4); a*=0.85+0.15*sin(uT*30.0-l*40.0); vec3 c=mix(vec3(0.45,0.6,1.0),vec3(0.95,0.98,1.0),pow(l,3.0)); gl_FragColor=vec4(c*a*1.1,a); }" });
    const beam = new THREE.Group(); [1, -1].forEach((s) => { const cn = new THREE.Mesh(new THREE.ConeGeometry(0.35, 6, 24, 1, true), beamMat); cn.position.y = 3 * s; cn.rotation.x = s > 0 ? Math.PI : 0; beam.add(cn); }); beam.rotation.z = 0.5; m.add(beam); o.beam = beam; }
  else if (id === "hole") { m = new THREE.Group(); m.add(new THREE.Mesh(new THREE.SphereGeometry(0.8, 48, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }))); m.add(new THREE.Mesh(new THREE.SphereGeometry(0.86, 48, 32), glowMat("#ffb08a", 2.2, 6.0)));
    const disk = new THREE.Mesh(new THREE.RingGeometry(0.8, 2.6, 128, 1), new THREE.ShaderMaterial({ vertexShader: SH.DISK_V, fragmentShader: SH.DISK_F, uniforms: { uT: U.uT }, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })); disk.rotation.x = -Math.PI / 2 + 0.25; m.add(disk); o.disk = disk; /* KING_LENS: lensed far side of the disk + photon ring, always facing the camera */
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.84, 1.55, 128, 1), new THREE.ShaderMaterial({ vertexShader: SH.DISK_V, fragmentShader: SH.DISK_F, uniforms: { uT: U.uT }, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.6 })); halo.renderOrder = -1; m.add(halo); o.halo = halo;
    const ph = new THREE.Mesh(new THREE.RingGeometry(0.81, 0.845, 160, 1), new THREE.MeshBasicMaterial({ color: 0xfff1d6, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); m.add(ph); o.photon = ph; m.scale.setScalar(rnd(0.9, 1.2)); }
  o.obj.add(m); o.mesh = m; o.size = { moon: 0.5, plan: 0.9, giant: 2.2, ring: 1.5, pulsar: 0.8, hole: 2.6 }[id] || 1; o.label = (GENS.find((g) => g.id === id) || {}).n; scene.add(o.obj); orbitLine(r, inc); o.born = performance.now(); o.obj.scale.setScalar(0.001); return o;
}

// Particles: motes (points around star) + asteroid belt (instanced)
const MOTE_MAX = 900, moteGeo = new THREE.BufferGeometry(), motePos = new Float32Array(MOTE_MAX * 3), moteSeed = [];
for (let i = 0; i < MOTE_MAX; i++) moteSeed.push({ r: rnd(...ORB.mote), a: Math.random() * 6.28, y: rnd(-0.25, 0.25), s: rnd(0.8, 1.2) });
moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3)); moteGeo.setDrawRange(0, 0);
const moteTex = (() => { const c = document.createElement("canvas"); c.width = c.height = 64; const x = c.getContext("2d"), g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.3, "rgba(255,240,220,.6)"); g.addColorStop(1, "rgba(255,255,255,0)"); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
const motes = new THREE.Points(moteGeo, new THREE.PointsMaterial({ size: 0.22, map: moteTex, color: 0xffe9c8, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); scene.add(motes);
const ROCK_MAX = 700;
const rockGeo = (() => { const g = new THREE.IcosahedronGeometry(1, 3), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(p, i); v.multiplyScalar(0.8 + 0.25 * Math.sin(v.x * 3.1 + 1.7) * Math.cos(v.y * 2.3) + 0.12 * Math.sin(v.z * 7.0)); p.setXYZ(i, v.x, v.y, v.z); } g.computeVertexNormals(); return g; })();
const rocks = new THREE.InstancedMesh(rockGeo, new THREE.MeshStandardMaterial({ map: T.rockD, normalMap: T.rockN, roughnessMap: T.rockR, color: 0xb9ada4, roughness: 1, metalness: 0.02 }), ROCK_MAX); rocks.count = 0; scene.add(rocks);
const rockSeed = []; for (let i = 0; i < ROCK_MAX; i++) rockSeed.push({ r: rnd(...ORB.rock), a: Math.random() * 6.28, y: rnd(-0.35, 0.35), s: rnd(0.05, 0.22), rx: Math.random() * 6, ry: Math.random() * 6, sp: rnd(0.2, 1) });
const DYS_MAX = 600;
const dyson = new THREE.InstancedMesh(new THREE.BoxGeometry(0.16, 0.1, 0.008), dysonMat, DYS_MAX); dyson.count = 0; scene.add(dyson);
const dysSeed = []; for (let i = 0; i < DYS_MAX; i++) dysSeed.push({ r: rnd(...ORB.dyson), th: Math.acos(rnd(-1, 1)), ph: Math.random() * 6.28, sp: rnd(0.15, 0.35) });
const dummy = new THREE.Object3D();

function syncBodies() {
  for (const id of ["moon", "plan", "giant", "ring", "pulsar", "hole"]) { const want = Math.min(CAP[id], S.own[id] || 0), arr = bodies[id]; while (arr.length < want) arr.push(makeBody(id, arr.length)); while (arr.length > want) { const o = arr.pop(); scene.remove(o.obj); } }
  if (!Object.values(bodies).some((a) => a.length)) { orbitLines.clear(); }
  moteGeo.setDrawRange(0, Math.min(MOTE_MAX, (S.own.mote || 0) * 12));
  rocks.count = Math.min(ROCK_MAX, (S.own.rock || 0) * 10);
  dyson.count = Math.min(DYS_MAX, (S.own.dyson || 0) * 30);
}

// Comets
let comet = null, nextComet = now() + 40000;
const cometHead = new THREE.Mesh(new THREE.SphereGeometry(0.35, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
const cometGlow = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 16), glowMat("#ffc65c", 2.4, 1.5));
const TRAIL = 60, trailGeo = new THREE.BufferGeometry(), trailPos = new Float32Array(TRAIL * 3), trailCol = new Float32Array(TRAIL * 3);
trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPos, 3)); trailGeo.setAttribute("color", new THREE.BufferAttribute(trailCol, 3));
const trail = new THREE.Points(trailGeo, new THREE.PointsMaterial({ size: 0.55, map: moteTex, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
function spawnComet() { const a = Math.random() * 6.28, from = new THREE.Vector3(Math.cos(a) * 60, rnd(-6, 10), Math.sin(a) * 60), to = new THREE.Vector3(-from.x * 0.4 + rnd(-10, 10), rnd(-3, 5), -from.z * 0.4 + rnd(-10, 10)).normalize().multiplyScalar(-60).negate();
  comet = { p: from.clone(), v: to.sub(from).normalize().multiplyScalar(11), hist: [] }; scene.add(cometHead, cometGlow, trail); tone(990, 0.4, "triangle", 0.03, 1.3); }
function endComet() { scene.remove(cometHead, cometGlow, trail); comet = null; if (typeof tc !== "undefined") tc = null; }

// Burst particles
const BURST = 600, bGeo = new THREE.BufferGeometry(), bPos = new Float32Array(BURST * 3), bCol = new Float32Array(BURST * 3), bVel = new Float32Array(BURST * 3), bLife = new Float32Array(BURST);
bGeo.setAttribute("position", new THREE.BufferAttribute(bPos, 3)); bGeo.setAttribute("color", new THREE.BufferAttribute(bCol, 3));
scene.add(new THREE.Points(bGeo, new THREE.PointsMaterial({ size: 0.35, map: moteTex, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
let bHead = 0;
function burst(at, c, n, speed = 6) { const cc = col(c); for (let k = 0; k < n; k++) { const i = bHead = (bHead + 1) % BURST, d = new THREE.Vector3().randomDirection().multiplyScalar(speed * rnd(0.3, 1)); bPos.set([at.x, at.y, at.z], i * 3); bVel.set([d.x, d.y, d.z], i * 3); bCol.set([cc.r, cc.g, cc.b], i * 3); bLife[i] = 1; } }

// Shockwave (supernova)
const shock = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), glowMat("#ffffff", 3, 1.2)); shock.visible = false; scene.add(shock); let shockT = -1;

/* ================= THE WIDER GALAXY (zoom out) ================= */
const galaxy = new THREE.Group(); scene.add(galaxy);
const GAL_N = 110000, gGeo = new THREE.BufferGeometry(), gPos = new Float32Array(GAL_N * 3), gCol = new Float32Array(GAL_N * 3);
{ const cA = col("#ffd9b0"), cB = col("#9fc3ff"), cC = col("#c9a8ff"), cD = col("#ff9fc8"), cE = col("#9fffe0"); const off = new THREE.Vector3(-2600, -300, 1400);
  for (let i = 0; i < GAL_N; i++) { const arm = i % 3, rr = Math.pow(Math.random(), 0.6) * 5200, ang = arm * 2.094 + rr * 0.0011 + (Math.random() - 0.5) * (0.9 - rr / 9000);
    const x = Math.cos(ang) * rr + (Math.random() - 0.5) * 260, z = Math.sin(ang) * rr + (Math.random() - 0.5) * 260, y = (Math.random() - 0.5) * 120 * (1 - rr / 6000);
    gPos.set([x + off.x, y + off.y, z + off.z], i * 3); const q = Math.random(), c = rr < 900 ? cA : q < 0.35 ? cB : q < 0.65 ? cC : q < 0.82 ? cD : cE, b = 0.4 + Math.random() * 0.7; gCol.set([c.r * b, c.g * b, c.b * b], i * 3); } }
gGeo.setAttribute("position", new THREE.BufferAttribute(gPos, 3)); gGeo.setAttribute("color", new THREE.BufferAttribute(gCol, 3));
const gMat = new THREE.PointsMaterial({ size: 26, map: null, vertexColors: true, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
const galPts = new THREE.Points(gGeo, gMat); galaxy.add(galPts);
const SYS = [], sysLabels = $("labels");
const SYS_NAMES = ["Vela Reach", "Kepler Drift", "Ashfall", "Tyrian Gate", "Halcyon", "Morrow", "Cinder Belt", "Lumen"];
for (let i = 0; i < 8; i++) { const a = i * 0.785 + rnd(-0.2, 0.2), d = rnd(260, 900), g = new THREE.Group(); g.position.set(Math.cos(a) * d, rnd(-60, 60), Math.sin(a) * d);
  const c = ["#ffcf6a", "#9fc3ff", "#ff9b7a", "#c9a8ff", "#9fffe0"][i % 5];
  const core = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 24), new THREE.MeshBasicMaterial({ color: c })); core.material.color.multiplyScalar(2); g.add(core);
  g.add(new THREE.Mesh(new THREE.SphereGeometry(14, 32, 24), glowMat(c, 1.2, 1.6)));
  for (let k = 0; k < 2 + (i % 3); k++) { const pts = []; const rr = 20 + k * 12; for (let j = 0; j <= 64; j++) pts.push(new THREE.Vector3(Math.cos(j / 64 * 6.283) * rr, 0, Math.sin(j / 64 * 6.283) * rr)); g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.18 })));
    const pl = new THREE.Mesh(new THREE.SphereGeometry(1.6 + k, 16, 12), new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 })); pl.userData = { r: rr, a: Math.random() * 6.28, sp: 0.3 / (k + 1) }; g.add(pl); }
  galaxy.add(g); const el = document.createElement("div"); el.className = "syslbl"; el.innerHTML = `<b>${SYS_NAMES[i]}</b><span>Locked · coming soon</span>`; sysLabels.appendChild(el); SYS.push({ g, el }); }

/* KING_UNIVERSE: local star cloud with real parallax, unnamed star systems, distant galaxies */
const dotTex = (() => { const c = document.createElement("canvas"); c.width = c.height = 32; const x = c.getContext("2d"), g = x.createRadialGradient(16, 16, 0, 16, 16, 16); g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.3, "rgba(255,255,255,.6)"); g.addColorStop(1, "rgba(255,255,255,0)"); x.fillStyle = g; x.fillRect(0, 0, 32, 32); return new THREE.CanvasTexture(c); })();
const UPAL = ["#ffffff", "#cfe3ff", "#ffe2c4", "#ff9a7a", "#9fb8ff", "#d7a8ff", "#ffd27a", "#9fffe0"].map(col);
const cloud = (() => { const n = 24000, g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const v = new THREE.Vector3().randomDirection().multiplyScalar(260 + Math.pow(Math.random(), 0.7) * 14000); v.y *= 0.55; p.set([v.x, v.y, v.z], i * 3); const t = UPAL[(Math.random() * UPAL.length) | 0], b = 0.35 + Math.random() * 0.9; c.set([t.r * b, t.g * b, t.b * b], i * 3); }
  g.setAttribute("position", new THREE.BufferAttribute(p, 3)); g.setAttribute("color", new THREE.BufferAttribute(c, 3));
  const mt = new THREE.PointsMaterial({ size: 9, map: dotTex, vertexColors: true, transparent: true, opacity: 0, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending }); const pts = new THREE.Points(g, mt); scene.add(pts); return mt; })();
const miniSys = new THREE.Group(); scene.add(miniSys);
for (let i = 0; i < 70; i++) { const a = Math.random() * 6.283, d = 380 + Math.pow(Math.random(), 0.8) * 4200, s = new THREE.Group(); s.position.set(Math.cos(a) * d, (Math.random() - 0.5) * 300, Math.sin(a) * d);
  const cc = UPAL[(Math.random() * UPAL.length) | 0]; const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTex, color: cc, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); core.scale.setScalar(28 + Math.random() * 30); s.add(core);
  const ring = new THREE.Mesh(new THREE.RingGeometry(16, 16.6, 64), new THREE.MeshBasicMaterial({ color: cc, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false })); ring.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.6; s.add(ring); miniSys.add(s); }
const farGal = new THREE.Group(); scene.add(farGal);
for (let i = 0; i < 18; i++) { const n = 2600, g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), c = new Float32Array(n * 3), cA = UPAL[(Math.random() * UPAL.length) | 0], cB = UPAL[(Math.random() * UPAL.length) | 0], arms = 2 + (i % 3), R0 = 700 + Math.random() * 900;
  for (let k = 0; k < n; k++) { const rr = Math.pow(Math.random(), 0.7) * R0, an = (k % arms) * (6.283 / arms) + rr * (2.4 / R0) + (Math.random() - 0.5) * 0.7; p.set([Math.cos(an) * rr, (Math.random() - 0.5) * 40, Math.sin(an) * rr], k * 3); const t = rr < R0 * 0.25 ? cA : cB, b = 0.4 + Math.random() * 0.7; c.set([t.r * b, t.g * b, t.b * b], k * 3); }
  g.setAttribute("position", new THREE.BufferAttribute(p, 3)); g.setAttribute("color", new THREE.BufferAttribute(c, 3));
  const pt = new THREE.Points(g, new THREE.PointsMaterial({ size: 3, map: dotTex, vertexColors: true, transparent: true, opacity: 0, sizeAttenuation: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  const v = new THREE.Vector3().randomDirection().multiplyScalar(14000 + Math.random() * 20000); pt.position.copy(v); pt.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); farGal.add(pt); }
const homeLbl = document.createElement("div"); homeLbl.className = "syslbl home"; homeLbl.innerHTML = "<b>Your system</b><span>You are here</span>"; sysLabels.appendChild(homeLbl);
const tmpV = new THREE.Vector3();
function updateGalaxy(di) {
  const far = THREE.MathUtils.smoothstep(di, 180, 900), wide = THREE.MathUtils.smoothstep(di, 1500, 5000);
  { const near = THREE.MathUtils.smoothstep(di, 30, 260); cloud.opacity = near * 0.85; miniSys.visible = far > 0.01; miniSys.children.forEach((s) => { s.children[0].material.opacity = far * (1 - wide * 0.6); s.children[1].visible = far > 0.3 && wide < 0.5; }); farGal.children.forEach((g) => (g.material.opacity = 0.25 + wide * 0.75)); }
  gMat.opacity = wide * 0.42; gMat.size = 3 + wide * 3.5; orbitLines.visible = di < 1200; lineMat.opacity = 0.05 * (1 - far);
  const lvl = di < 25 ? "Close-up" : di < 180 ? "Your system" : di < 1500 ? "Local sector" : "The galaxy"; if ($("zlvl").textContent !== lvl) $("zlvl").textContent = lvl;
  for (const s of SYS) { s.g.children.forEach((c) => { if (c.userData.r) { c.userData.a += 0.016 * c.userData.sp; c.position.set(Math.cos(c.userData.a) * c.userData.r, 0, Math.sin(c.userData.a) * c.userData.r); } });
    place(s.el, s.g.position, far * (1 - wide)); }
  place(homeLbl, tmpV.set(0, 8, 0), far * (1 - wide * 0.5));
}
function place(el, p, op) { if (op < 0.02) { el.style.opacity = 0; return; } const v = p.clone().project(camera); if (v.z > 1) { el.style.opacity = 0; return; } el.style.opacity = op; el.style.transform = `translate(${(v.x + 1) / 2 * W}px,${(1 - v.y) / 2 * H}px) translate(-50%,-140%)`; }

/* ================= CAMERA + INPUT ================= */
let intro = 1, W = 1, H = 1, camDist = 70, camYaw = 0.6, camPitch = 0.42, yawVel = 0, starPulse = 0, shake = 0;
function resize() { const b = stage.getBoundingClientRect(), nw = Math.max(1, Math.round(b.width)), nh = Math.max(1, Math.round(b.height)); if (nw === W && nh === H && resize._ok) return; resize._ok = 1; W = nw; H = nh; renderer.setSize(W, H, false); composer.setSize(W, H, false); bloom.resolution.set(W / 2, H / 2); camera.aspect = W / H; camera.updateProjectionMatrix();
  const fitR = 44, vf = THREE.MathUtils.degToRad(camera.fov) / 2, hf = Math.atan(Math.tan(vf) * camera.aspect); camDist = fitR / Math.sin(Math.min(vf, hf)) * (camera.aspect < 1 ? 0.68 : 0.82); intro = 1; }
window.addEventListener("resize", resize); try { new ResizeObserver(() => resize()).observe(stage); } catch (e) {}
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let focusLock = 0; let drag = null; const ptrs = new Map(); let pinch0 = 0, zoom = 0, zoomT = 0, focus = null; const focusPos = new THREE.Vector3(), camTarget = new THREE.Vector3();
const ZMIN = -4.2, ZMAX = 5.4; /* KING_ZOOMRANGE */ // exp(zoom) * camDist: ~0.04x (inside the motes) to ~100x (the galaxy)
const setZoom = (z) => { zoomT = THREE.MathUtils.clamp(z, focus ? -5.6 : ZMIN, ZMAX); };
canvas.addEventListener("pointerdown", (e) => { try { canvas.setPointerCapture?.(e.pointerId); } catch (err) {} ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptrs.size === 2) { const [p, q] = [...ptrs.values()]; pinch0 = Math.hypot(p.x - q.x, p.y - q.y); drag = null; } else drag = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 }; });
canvas.addEventListener("pointermove", (e) => { if (!ptrs.has(e.pointerId) || tapMode) return; ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 2) { const [p, q] = [...ptrs.values()], d = Math.hypot(p.x - q.x, p.y - q.y); if (pinch0) setZoom(zoomT - Math.log(d / pinch0) * 1.2); pinch0 = d; return; }
  if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.moved += Math.abs(dx) + Math.abs(dy); drag.x = e.clientX; drag.y = e.clientY; if (drag.moved > 8) { yawVel = dx * 0.004; /* KING_DRAGDIR */ camPitch = THREE.MathUtils.clamp(camPitch + dy * 0.004, -1.2, 1.35); } });
const endPtr = (e) => { ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch0 = 0; };
canvas.addEventListener("pointerup", (e) => { const d = drag, multi = ptrs.size > 1; endPtr(e); drag = null; if (tapMode) return tapAt(e.clientX, e.clientY); if (multi || !d || d.moved > 8) return; tapAt(e.clientX, e.clientY); });
canvas.addEventListener("pointercancel", endPtr);
canvas.addEventListener("wheel", (e) => { e.preventDefault(); if (tapMode) return; setZoom(zoomT + Math.sign(e.deltaY) * Math.min(0.6, Math.abs(e.deltaY) / 250)); $("hint").classList.add("gone"); }, { passive: false });
canvas.addEventListener("dblclick", () => { if (tapMode) return; focus = null; setZoom(0); });
$("zin").onclick = () => setZoom(zoomT - 0.7); $("zout").onclick = () => setZoom(zoomT + 0.7); $("zhome").onclick = () => { focus = null; setZoom(0); };

/* KING_TAPMODE: two screens. Tap = just the star (tap anywhere). View = the whole universe (drag, zoom, tap the star). */
let tapMode = (() => { try { return localStorage.getItem("orbit.mode") === "tap"; } catch (e) { return false; } })();
const modeSw = document.createElement("div"); modeSw.id = "modesw"; modeSw.setAttribute("role", "tablist"); modeSw.setAttribute("aria-label", "Screen");
modeSw.innerHTML = `<button role="tab" data-m="tap">Tap</button><button role="tab" data-m="view">View</button>`; $("stage").appendChild(modeSw);
["pointerdown", "touchstart", "mousedown"].forEach((ev) => modeSw.addEventListener(ev, (e) => e.stopPropagation(), { passive: true }));
function setMode(m, quiet) { tapMode = m === "tap"; try { localStorage.setItem("orbit.mode", m); } catch (e) {} $("app").classList.toggle("tapmode", tapMode);
  modeSw.querySelectorAll("button").forEach((b) => { const on = b.dataset.m === m; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
  if (cine) setCine(false); focus = null; setZoom(tapMode ? Math.log(14 / camDist) : 0); if (!quiet) tone(tapMode ? 520 : 780, 0.08, "sine", 0.03, 1.1); }
modeSw.addEventListener("click", (e) => { const b = e.target.closest("[data-m]"); if (b) setMode(b.dataset.m); });
setTimeout(() => setMode(tapMode ? "tap" : "view", true), 0);

/* KING_TAPVIEW: Tap is its own simple 2D screen: one big star, tap anywhere, comets streak across. */
const tv = document.createElement("canvas"); tv.id = "tapv"; tv.setAttribute("aria-label", "Tap anywhere to collect stardust. Tap comets for a bonus."); $("stage").insertBefore(tv, $("labels"));
const tx = tv.getContext("2d"); let tW = 0, tH = 0, tDpr = 1, tc = null, tPulse = 0, tRot = 0;
const tDots = Array.from({ length: 140 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + 0.3, p: Math.random() * 6.28, s: 0.4 + Math.random() * 1.6 }));
let tParts = [], tRings = [];
function tSize() { const r = tv.getBoundingClientRect(); if (!r.width) return; tDpr = Math.min(2, devicePixelRatio || 1); tW = r.width; tH = r.height; tv.width = tW * tDpr; tv.height = tH * tDpr; }
addEventListener("resize", tSize); tSize();
function tStar() { const R = Math.min(tW * 0.3, tH * 0.2, 170); return { x: tW / 2, y: tH * 0.42, R }; }
function tapFx(x, y) { tPulse = 1; const c = ERA[S.novas % ERA.length][0], st = tStar(); tRings.push({ x: st.x, y: st.y, r: st.R, a: 0.55 });
  for (let i = 0; i < 12; i++) { const a = Math.random() * 6.28, sp = 90 + Math.random() * 220; tParts.push({ x: st.x + Math.cos(a) * st.R * 0.9, y: st.y + Math.sin(a) * st.R * 0.9, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, c, r: 1.2 + Math.random() * 1.8 }); } }
function cometFx(x, y, c) { for (let i = 0; i < 60; i++) { const a = Math.random() * 6.28, sp = 60 + Math.random() * 380; tParts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1.3, c, r: 1.5 + Math.random() * 2.5 }); } tRings.push({ x, y, r: 6, a: 0.9 }); }
tv.addEventListener("pointerdown", (e) => { e.preventDefault(); lastInput = performance.now(); const b = tv.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
  if (tc && Math.hypot(x - tc.x, y - tc.y) < 46) return catchComet(); tapStar(e.clientX, e.clientY, b); });
function drawTap(dt, t) {
  if (tv.clientWidth !== Math.round(tW) || tv.clientHeight !== Math.round(tH)) tSize(); if (!tW) return;
  const [c0, c1] = ERA[S.novas % ERA.length], st = tStar(), frz = frenzyUntil > now();
  tx.setTransform(tDpr, 0, 0, tDpr, 0, 0); tx.globalCompositeOperation = "source-over";
  // background: near-black with a faint wash of the star's color
  const bg = tx.createRadialGradient(st.x, st.y, 0, st.x, st.y, Math.max(tW, tH) * 0.9); bg.addColorStop(0, c1 + "33"); bg.addColorStop(0.45, "#07060c"); bg.addColorStop(1, "#030307"); tx.fillStyle = bg; tx.fillRect(0, 0, tW, tH);
  for (const d of tDots) { const a = 0.35 + 0.35 * Math.sin(t * d.s + d.p); tx.globalAlpha = a; tx.fillStyle = "#fff"; tx.beginPath(); tx.arc(d.x * tW, ((d.y * tH + t * d.s * 2) % tH), d.r, 0, 6.28); tx.fill(); } tx.globalAlpha = 1;
  tPulse *= Math.pow(0.02, dt); tRot += dt * 0.05; const R = st.R * (1 + tPulse * 0.07 + Math.sin(t * 1.4) * 0.008);
  tx.globalCompositeOperation = "lighter";
  // glow + slow rays
  const gl = tx.createRadialGradient(st.x, st.y, R * 0.6, st.x, st.y, R * (2.6 + tPulse * 0.4)); gl.addColorStop(0, c0 + "66"); gl.addColorStop(0.35, c1 + "2a"); gl.addColorStop(1, c1 + "00"); tx.fillStyle = gl; tx.beginPath(); tx.arc(st.x, st.y, R * 3, 0, 6.28); tx.fill();
  tx.save(); tx.translate(st.x, st.y); tx.rotate(tRot);
  for (let i = 0; i < 14; i++) { tx.rotate(6.283 / 14); const L = R * (1.7 + 0.25 * Math.sin(t * 0.7 + i * 1.9)); const rg = tx.createLinearGradient(0, 0, L, 0); rg.addColorStop(0, c0 + "40"); rg.addColorStop(1, c0 + "00"); tx.fillStyle = rg; tx.beginPath(); tx.moveTo(R * 0.8, -R * 0.05); tx.lineTo(L, 0); tx.lineTo(R * 0.8, R * 0.05); tx.fill(); }
  tx.restore(); tx.globalCompositeOperation = "source-over";
  // body
  const bd = tx.createRadialGradient(st.x - R * 0.25, st.y - R * 0.3, R * 0.05, st.x, st.y, R); bd.addColorStop(0, "#ffffff"); bd.addColorStop(0.35, c0); bd.addColorStop(1, c1); tx.fillStyle = bd; tx.beginPath(); tx.arc(st.x, st.y, R, 0, 6.28); tx.fill();
  const rim = tx.createRadialGradient(st.x, st.y, R * 0.8, st.x, st.y, R); rim.addColorStop(0, c1 + "00"); rim.addColorStop(1, c1 + "aa"); tx.fillStyle = rim; tx.fill();
  if (frz) { tx.strokeStyle = "rgba(255,77,94," + (0.35 + 0.25 * Math.sin(t * 8)) + ")"; tx.lineWidth = 3; tx.beginPath(); tx.arc(st.x, st.y, R * 1.12, 0, 6.28); tx.stroke(); }
  // rings + sparks
  tx.globalCompositeOperation = "lighter";
  tRings = tRings.filter((r) => (r.r += dt * 260, r.a -= dt * 0.9) > 0); for (const r of tRings) { tx.strokeStyle = c0; tx.globalAlpha = r.a; tx.lineWidth = 2; tx.beginPath(); tx.arc(r.x, r.y, r.r, 0, 6.28); tx.stroke(); }
  tParts = tParts.filter((p) => (p.life -= dt * 1.4) > 0).slice(-500); for (const p of tParts) { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.97; p.vy *= 0.97; tx.globalAlpha = Math.min(1, p.life); tx.fillStyle = p.c; tx.beginPath(); tx.arc(p.x, p.y, p.r, 0, 6.28); tx.fill(); }
  tx.globalAlpha = 1;
  // comet: streaks across the screen while the game's comet is out
  if (comet && !tc) { const fromL = Math.random() < 0.5, up = Math.random() < 0.5, y0 = tH * (up ? 0.1 + Math.random() * 0.08 : 0.66 + Math.random() * 0.08), y1 = y0 + tH * (Math.random() * 0.12 - 0.06); tc = { x0: fromL ? -40 : tW + 40, y0, x1: fromL ? tW + 40 : -40, y1, k: 0, hist: [] }; }
  if (tc && tc.x0 !== undefined) { tc.k += dt / 6.5; const e = tc.k; tc.x = tc.x0 + (tc.x1 - tc.x0) * e; tc.y = tc.y0 + (tc.y1 - tc.y0) * e + Math.sin(e * 3.14) * (tc.y0 < tH / 2 ? 24 : -24); tc.hist.unshift([tc.x, tc.y]); if (tc.hist.length > 40) tc.hist.pop();
    for (let i = tc.hist.length - 1; i > 0; i--) { const f = 1 - i / tc.hist.length; tx.strokeStyle = `rgba(255,${190 + f * 50 | 0},${120 + f * 100 | 0},${f * 0.8})`; tx.lineWidth = 1 + f * 7; tx.lineCap = "round"; tx.beginPath(); tx.moveTo(tc.hist[i][0], tc.hist[i][1]); tx.lineTo(tc.hist[i - 1][0], tc.hist[i - 1][1]); tx.stroke(); }
    const hg = tx.createRadialGradient(tc.x, tc.y, 0, tc.x, tc.y, 26); hg.addColorStop(0, "#ffffff"); hg.addColorStop(0.3, "#ffe3a8cc"); hg.addColorStop(1, "#ffb34700"); tx.fillStyle = hg; tx.beginPath(); tx.arc(tc.x, tc.y, 26, 0, 6.28); tx.fill();
    if (e >= 1) { tc = null; if (comet) endComet(); } }
  tx.globalCompositeOperation = "source-over";
}
/* KING_CINE: cinema mode, hides UI and flies a slow tour */
let cine = false, cineT = 0, cineAuto = false, lastInput = performance.now(), visitT = 0; const setCine = (v, auto = false) => { cine = v; cineAuto = v && auto; visitT = 0; $("app").classList.toggle("cine", v); focus = null; cineT = 0; setTimeout(resize, 30); };
$("cine").onclick = () => setCine(!cine);
/* KING_IDLECINE: any input resets the idle clock and ends an auto tour */
for (const ev of ["pointerdown", "wheel", "keydown", "touchstart"]) addEventListener(ev, () => { lastInput = performance.now(); if (cineAuto) setCine(false); }, { passive: true, capture: true }); addEventListener("keydown", (e) => { if (e.key === "Escape" && cine) setCine(false); if ((e.key === "c" || e.key === "C") && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) setCine(!cine); });
function pickBody(r) { let best = null, bd = 1e9; for (const id in bodies) for (const o of bodies[id]) { const p = o.obj.getWorldPosition(new THREE.Vector3()), rad = Math.max(0.6, o.size || 1) * 1.6, d = r.ray.distanceToPoint(p); if (d < rad && r.ray.origin.distanceTo(p) < bd) { bd = r.ray.origin.distanceTo(p); best = o; } } return best; }
function tapAt(cx, cy) {
  const b = canvas.getBoundingClientRect(); ndc.set(((cx - b.left) / W) * 2 - 1, -((cy - b.top) / H) * 2 + 1); ray.setFromCamera(ndc, camera);
  if (comet && ray.ray.distanceToPoint(comet.p) < 2.6) return catchComet();
  if (tapMode) return tapStar(cx, cy, b);   // KING_TAPMODE: anywhere on screen taps the star
  const pb = pickBody(ray), starD = ray.ray.distanceToPoint(star.position) < 4.6 ? ray.ray.origin.distanceTo(star.position) : 1e9;
  if (pb && (!starD || ray.ray.origin.distanceTo(pb.obj.position) < starD)) { focus = pb; focusLock = 0; setZoom(Math.log((pb.size || 1) * 7 / camDist)); toast(`${pb.label} · tap the star to go back`); tone(700, 0.1, "sine", 0.04, 1.2); return; }
  if (starD < 1e9) { if (focus) { focus = null; setZoom(0); } tapStar(cx, cy, b); }
}
function tapStar(cx, cy, b) {
  const v = tapVal(); S.dust += v; S.total += v; S.allTime += v; S.taps++; starPulse = 1; shake = Math.min(1, shake + 0.25);
  const hit = ray.ray.closestPointToPoint(star.position, new THREE.Vector3()).sub(star.position); if (hit.lengthSq() < 1e-6) hit.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5); hit.setLength(3.1).add(star.position);
  burst(hit, ERA[S.novas % ERA.length][0], 14, 5);
  if (tapMode) tapFx(cx - b.left, cy - b.top); floatText(cx - b.left, cy - b.top, "+" + fmt(v)); tapSound(); buzz(6); $("hint").classList.add("gone"); render();
}
function floatText(x, y, t, big) { const d = document.createElement("div"); d.className = "float" + (big ? " big" : ""); d.textContent = t; d.style.left = x + (Math.random() - 0.5) * 30 + "px"; d.style.top = y - 12 + "px"; $("floats").appendChild(d); setTimeout(() => d.remove(), 1100); }
function catchComet() {
  S.comets++; const ps = perSec(), pt = comet.p.clone(); let msg;
  if (Math.random() < 0.55 || ps === 0) { const g = Math.max(ps * 90, tapVal() * 40, 25); S.dust += g; S.total += g; S.allTime += g; msg = `☄️ Comet! +${fmt(g)} stardust`; burst(pt, "#ffc65c", 120, 9); }
  else { frenzyUntil = now() + 20000; msg = "☄️ Frenzy! Everything ×7 for 20s"; burst(pt, "#ff4d5e", 140, 10); }
  if (tapMode && tc) { floatText(tc.x, tc.y, msg.split("! ")[1] || msg, true); cometFx(tc.x, tc.y, msg.includes("Frenzy") ? "#ff4d5e" : "#ffc65c"); tc = null; }
  else { const sp = pt.clone().project(camera); floatText((sp.x + 1) / 2 * W, (1 - sp.y) / 2 * H, msg.split("! ")[1] || msg, true); }
  endComet(); toast(msg); tone(1320, 0.35, "triangle", 0.06, 1.2); tone(1760, 0.5, "sine", 0.04, 1.1); buzz([20, 30, 20]);
}

/* ================= UI ================= */
let tab = "build", bm = 1; const BM = [1, 10, 100, "max"];
document.querySelectorAll(".tab[data-t]").forEach((b) => (b.onclick = () => { tab = b.dataset.t; document.querySelectorAll(".tab[data-t]").forEach((x) => x.classList.toggle("on", x === b)); $("buymode").hidden = tab !== "build"; lastHTML = ""; render(); }));
$("buymode").onclick = () => { bm = BM[(BM.indexOf(bm) + 1) % BM.length]; $("buymode").textContent = bm === "max" ? "Max" : "×" + bm; lastHTML = ""; render(); };
$("snd").onclick = () => { S.sound = !S.sound; $("snd").setAttribute("aria-pressed", S.sound); $("snd").innerHTML = S.sound ? SPK_ON : SPK_OFF; save(); };
const SPK_ON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>`;
const SPK_OFF = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>`;
let toastT; function toast(m) { const t = $("toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2600); }
const visibleGens = () => { let last = -1; GENS.forEach((g, i) => { if (S.own[g.id] || S.allTime >= g.base * 0.5) last = i; }); return GENS.slice(0, Math.min(GENS.length, last + 2)); };
const availUps = () => UPS.filter((u) => !S.ups[u.id] && (u.g ? (S.own[u.g] || 0) >= u.at : S.allTime >= u.cost * 0.3)).slice(0, 12);
let lastHTML = "", shown = 0;
function render() {
  shown += (S.dust - shown) * 0.35; if (Math.abs(S.dust - shown) < 1) shown = S.dust;
  $("dust").textContent = fmt(shown); $("ps").textContent = fmt(perSec()); $("tv").textContent = fmt(tapVal());
  const fr = frenzyUntil - now(); $("frenzy").hidden = fr <= 0; if (fr > 0) $("frenzy").textContent = `☄️ Frenzy ×7 · ${Math.ceil(fr / 1000)}s`;
  $("t-up").classList.toggle("new", tab !== "up" && availUps().some((u) => S.dust >= u.cost));
  $("t-nova").classList.toggle("new", tab !== "nova" && S.total >= 1e9);
  let h = "";
  if (tab === "build") {
    for (const g of visibleGens()) { const locked = !S.own[g.id] && S.allTime < g.base * 0.5, k = bm === "max" ? Math.max(1, maxBuy(g)) : bm, c = cost(g, k), ok = !locked && S.dust >= c, own = S.own[g.id] || 0;
      const next = MS.find((a) => own < a) || 200, pct = Math.min(100, (own / next) * 100), share = perSec() ? (genRate(g) * globalMult() / perSec()) * 100 : 0;
      h += `<button class="row ${locked ? "locked" : ok ? "ok" : "no"}" data-buy="${g.id}" data-k="${k}" ${locked ? "disabled" : ""} aria-label="Buy ${k} ${g.n} for ${fmt(c)}">
        <span class="ico ico-${g.id}">${locked ? "?" : ""}</span>
        <span class="mid"><span class="nm">${locked ? "Unknown signal" : g.n}</span><span class="ds">${locked ? "Keep collecting to find it" : `${fmt(g.rate * genMult(g) * globalMult())}/s each${share >= 1 ? ` · ${share.toFixed(0)}% of income` : ""}`}</span>${locked ? "" : `<span class="bar"><i style="width:${pct}%"></i></span><span class="ms">${own} / ${next} for ×2</span>`}</span>
        <span class="rt"><span class="cost">${fmt(c)}</span><span class="own">${k > 1 ? "×" + k : "own " + own}</span></span></button>`; }
    if (!S.own.mote) h += `<p class="empty">Tap the star 15 times, then buy Stardust motes. They collect for you.</p>`;
  } else if (tab === "up") {
    const a = availUps(); if (!a.length) h += `<p class="empty">No upgrades yet. Own 10 of something or keep tapping.</p>`;
    for (const u of a) { const ok = S.dust >= u.cost; h += `<button class="row ${ok ? "ok" : "no"}" data-up="${u.id}"><span class="ico emo">${u.e}</span><span class="mid"><span class="nm">${u.n.replace("  ·", " ·")}</span><span class="ds">${u.d}</span></span><span class="rt"><span class="cost">${fmt(u.cost)}</span></span></button>`; }
    h += `<p class="empty">${UPS.filter((u) => S.ups[u.id]).length} of ${UPS.length} upgrades owned</p>`;
  } else if (tab === "nova") {
    const sh = shardsFor(S.total), ready = S.total >= 1e9 && sh > 0;
    h += `<div class="card"><span class="lbl">Nebula shards</span><span class="big">${S.shards}</span><span class="ds">Each shard is +10% to everything, forever. You're at +${S.shards * 10}%.</span></div>
      <div class="card"><span class="lbl">Go supernova</span><span class="big ${ready ? "up" : ""}">+${ready ? sh : 0}</span><span class="ds">${ready ? "Your star explodes. You keep shards, achievements and stats; the rest resets and your next star is a new color." : `Unlocks at ${fmt(1e9)} stardust this run (${fmt(S.total)} so far).`}</span>
      <button class="cta red" id="novaBtn" ${ready ? "" : "disabled"}>Supernova</button></div>`;
  } else {
    const kv = [["Stardust this run", fmt(S.total)], ["All time", fmt(S.allTime)], ["Per second", fmt(perSec())], ["Taps", S.taps.toLocaleString()], ["Comets caught", S.comets], ["Supernovas", S.novas], ["Bodies in orbit", GENS.reduce((a, g) => a + (S.own[g.id] || 0), 0)], ["Playing since", new Date(S.born).toLocaleDateString()]];
    h += `<div class="card">${kv.map(([a, b]) => `<div class="kv"><span>${a}</span><b>${b}</b></div>`).join("")}</div>
      <div class="card"><span class="lbl">Achievements ${ACH.filter((a) => S.ach[a[0]]).length}/${ACH.length}</span><div class="achs">${ACH.map(([id, n]) => `<span class="ach ${S.ach[id] ? "got" : ""}">${n}</span>`).join("")}</div></div>
      <button class="cta ghost" id="wipe">Wipe save</button><p class="empty">Planet and star maps: Solar System Scope (CC BY 4.0). Rock + studio light: Poly Haven (CC0).</p>`;
  }
  if (h !== lastHTML) { const l = $("list"), st = l.scrollTop; l.innerHTML = h; l.scrollTop = st; lastHTML = h; }
  renderRail();
}
/* KING_RAIL: buying is shared by the list and the quick-buy rail */
function buyGen(g, k, b) { const c = cost(g, k); if (S.dust < c) { if (b) { b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); } return tone(160, 0.1, "square", 0.02, 0.9); }
  const first = !S.own[g.id]; S.dust -= c; S.own[g.id] = (S.own[g.id] || 0) + k; syncBodies(); tone(660, 0.1, "triangle", 0.05, 1.3); tone(990, 0.14, "sine", 0.03, 1.2); buzz(10); if (first) toast(`${g.e} ${g.n} joins your orbit`); lastHTML = ""; lastRail = ""; render(); save();
  if (b && b.classList.contains("rb")) { const nb = document.querySelector(`#rail [data-rb="${g.id}"]`); if (nb) { nb.classList.remove("pop"); void nb.offsetWidth; nb.classList.add("pop"); } } }
/* KING_RAIL: phone quick-buy rail on the left: every unlocked body + the next one dimmed, so you can buy with the panel closed */
const rail = document.createElement("div"); rail.id = "rail"; rail.setAttribute("aria-label", "Quick buy"); $("stage").appendChild(rail); let lastRail = "";
function renderRail() { let h = "";
  for (const g of visibleGens()) { const locked = !S.own[g.id] && S.allTime < g.base * 0.5, c = cost(g, 1), own = S.own[g.id] || 0;
    h += locked ? `<button class="rb lock" disabled aria-label="Next: unknown"><span class="ico">?</span></button>`
      : `<button class="rb ${S.dust >= c ? "ok" : "no"}" data-rb="${g.id}" aria-label="Buy 1 ${g.n} for ${fmt(c)}"><span class="ico ico-${g.id}"></span>${own ? `<b>${own}</b>` : ""}<i>${fmt(c)}</i></button>`; }
  if (h !== lastRail) { rail.innerHTML = h; lastRail = h; } }
rail.addEventListener("click", (e) => { const b = e.target.closest("[data-rb]"); if (!b) return; e.stopPropagation(); buyGen(GENS.find((x) => x.id === b.dataset.rb), 1, b); });
["pointerdown", "touchstart", "mousedown"].forEach((ev) => rail.addEventListener(ev, (e) => e.stopPropagation(), { passive: true }));
$("list").addEventListener("click", (e) => {
  const b = e.target.closest("[data-buy]"), u = e.target.closest("[data-up]");
  if (b) buyGen(GENS.find((x) => x.id === b.dataset.buy), +b.dataset.k, b);
  if (u) { const x = UPS.find((y) => y.id === u.dataset.up); if (S.dust < x.cost) return tone(160, 0.1, "square", 0.02, 0.9); S.dust -= x.cost; S.ups[x.id] = 1; tone(880, 0.2, "triangle", 0.05, 1.5); toast(`${x.e} ${x.n.replace("  ·", " ·")}`); lastHTML = ""; render(); save(); }
  if (e.target.id === "novaBtn") supernova();
  if (e.target.id === "wipe") { if (now() - (window._wa || 0) < 3000) { S = fresh(true); try { localStorage.removeItem(KEY); } catch (er) {} syncBodies(); orbitLines.clear(); setEra(); lastHTML = ""; render(); toast("Fresh universe"); } else { window._wa = now(); toast("Tap Wipe again to erase everything"); } }
});
function supernova() {
  const sh = shardsFor(S.total); if (S.total < 1e9 || sh <= 0) return;
  shock.visible = true; shockT = 0; shake = 1; burst(new THREE.Vector3(), "#ffffff", 400, 26); tone(80, 2.2, "sawtooth", 0.09, 0.4); tone(1200, 1.4, "sine", 0.04, 0.3); buzz([60, 40, 160]);
  S.shards += sh; S.novas++; S = fresh(false, S); syncBodies(); orbitLines.clear(); setTimeout(setEra, 600); toast(`Supernova! +${sh} Nebula shards`);
  tab = "build"; document.querySelectorAll(".tab[data-t]").forEach((x) => x.classList.toggle("on", x.dataset.t === "build")); $("buymode").hidden = false; lastHTML = ""; render(); save();
}

/* ================= LOOP ================= */
const clock = new THREE.Clock(); let uiAcc = 0, saveAcc = 0, t = 0;
function frame() {
  const dt = Math.min(0.05, clock.getDelta()); t += dt; U.uT.value = t;
  const g = perSec() * dt; S.dust += g; S.total += g; S.allTime += g;
  if (!comet && now() > nextComet) { spawnComet(); nextComet = now() + (S.ups.t2 ? 0.5 : 1) * (40000 + Math.random() * 50000); }
  // camera: slow drift + flick
  yawVel *= 0.94; camYaw += 0.025 * dt + yawVel;
  if (!cine && !tapMode && performance.now() - lastInput > 60000) setCine(true, true);
  if (cine) { visitT += dt; if (visitT > 22) { visitT = 0; if (focus) { focus = null; } else { const pool = Object.keys(bodies).flatMap((k) => bodies[k] || []).filter((b) => b && b.obj && b.obj.visible); if (pool.length) { focus = pool[(Math.random() * pool.length) | 0]; focusLock = 0; } } } }
  if (cine && focus) { cineT += dt; camYaw += 0.08 * dt; zoomT += (Math.log((focus.size || 1) * 5 / camDist) - zoomT) * Math.min(1, dt * 0.6); }
  else if (cine) { cineT += dt; camYaw += 0.05 * dt; zoomT = -1.1 + 1.9 * (0.5 - 0.5 * Math.cos(cineT * 0.09)); camPitch += (0.18 + 0.22 * Math.sin(cineT * 0.05) - camPitch) * Math.min(1, dt * 0.5); } shake *= 0.9; starPulse = Math.max(0, starPulse - dt * 3.5);
  const sx = (Math.random() - 0.5) * shake * 0.25, sy = (Math.random() - 0.5) * shake * 0.25;
  intro = Math.max(0, intro - dt * 0.45); zoom += (zoomT - zoom) * Math.min(1, dt * 5);
  const di = Math.max(focus ? 1.2 : 9, camDist * Math.exp(zoom) * (1 + 0.9 * intro * intro));
  if (focus) focusPos.copy(focus.obj.position); else focusPos.set(0, 0, 0); focusLock = Math.min(1, focusLock + dt * 0.8); camTarget.lerp(focusPos, focus ? Math.min(1, dt * 3 + focusLock * focusLock) : Math.min(1, dt * 4));
  camera.position.set(camTarget.x + Math.cos(camYaw) * Math.cos(camPitch) * di + sx, camTarget.y + Math.sin(camPitch) * di + sy, camTarget.z + Math.sin(camYaw) * Math.cos(camPitch) * di); camera.lookAt(camTarget);
  { const cd = camera.position.distanceTo(star.position), fade = THREE.MathUtils.smoothstep(cd, 7, 22); coronaMat.uniforms.uI.value = 0.24 + 0.18 * fade; flare.visible = fade > 0.3 && cd < 160; bloom.radius = 0.55 * (0.4 + 0.6 * fade); renderer.toneMappingExposure = 0.75 + 0.3 * fade; starMat.uniforms.uBright.value = 0.72 + 0.06 * fade; }
  updateGalaxy(di);
  starMat.uniforms.uPulse.value = starPulse; const sp = 1 + starPulse * 0.06; star.scale.setScalar(sp); corona1.scale.setScalar(sp); corona2.scale.setScalar(1 + starPulse * 0.15 + Math.sin(t * 1.3) * 0.02); star.rotation.y += dt * 0.05;
  // bodies
  for (const id in bodies) for (const o of bodies[id]) { o.a += o.sp * dt * 3; const k = Math.min(1, (performance.now() - o.born) / 700), e = 1 - Math.pow(1 - k, 3); o.obj.scale.setScalar(Math.max(0.001, e));
    o.obj.position.set(Math.cos(o.a) * o.r, Math.sin(o.a) * o.r * Math.sin(o.inc), Math.sin(o.a) * o.r * Math.cos(o.inc)); o.mesh.rotation.y += o.spin * dt; if (o.clouds) o.clouds.rotation.y += dt * 0.03; if (o.beam) o.beam.rotation.y += dt * 4; if (o.halo) { o.halo.quaternion.copy(camera.quaternion).premultiply(o.obj.quaternion.clone().invert()); o.photon.quaternion.copy(o.halo.quaternion); } if (o.disk) o.disk.rotation.z += dt * 0.6; }
  const mc = moteGeo.drawRange.count; for (let i = 0; i < mc; i++) { const m = moteSeed[i]; m.a += dt * 0.9 / Math.pow(m.r, 1.5) * 3 * m.s; motePos[i * 3] = Math.cos(m.a) * m.r; motePos[i * 3 + 1] = m.y + Math.sin(t * 2 + i) * 0.05; motePos[i * 3 + 2] = Math.sin(m.a) * m.r; } moteGeo.attributes.position.needsUpdate = true;
  for (let i = 0; i < rocks.count; i++) { const r = rockSeed[i]; r.a += dt * 0.9 / Math.pow(r.r, 1.5) * 3; r.rx += dt * r.sp; dummy.position.set(Math.cos(r.a) * r.r, r.y, Math.sin(r.a) * r.r); dummy.rotation.set(r.rx, r.ry, 0); dummy.scale.setScalar(r.s); dummy.updateMatrix(); rocks.setMatrixAt(i, dummy.matrix); } if (rocks.count) rocks.instanceMatrix.needsUpdate = true;
  for (let i = 0; i < dyson.count; i++) { const d = dysSeed[i]; d.ph += dt * d.sp; dummy.position.setFromSphericalCoords(d.r, d.th, d.ph); dummy.lookAt(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); dyson.setMatrixAt(i, dummy.matrix); } if (dyson.count) dyson.instanceMatrix.needsUpdate = true;
  // comet
  if (comet) { comet.p.addScaledVector(comet.v, dt); cometHead.position.copy(comet.p); cometGlow.position.copy(comet.p); comet.hist.unshift(comet.p.clone()); if (comet.hist.length > TRAIL) comet.hist.pop();
    comet.hist.forEach((p, i) => { trailPos.set([p.x + rnd(-0.08, 0.08), p.y + rnd(-0.08, 0.08), p.z + rnd(-0.08, 0.08)], i * 3); const f = 1 - i / TRAIL; trailCol.set([f, f * 0.78, f * 0.36], i * 3); }); trailGeo.setDrawRange(0, comet.hist.length); trailGeo.attributes.position.needsUpdate = true; trailGeo.attributes.color.needsUpdate = true;
    if (comet.p.length() > 75) endComet(); }
  // bursts
  for (let i = 0; i < BURST; i++) if (bLife[i] > 0) { bLife[i] -= dt * 1.1; const f = Math.max(0, bLife[i]); bPos[i * 3] += bVel[i * 3] * dt; bPos[i * 3 + 1] += bVel[i * 3 + 1] * dt; bPos[i * 3 + 2] += bVel[i * 3 + 2] * dt; bVel[i * 3] *= 0.97; bVel[i * 3 + 1] *= 0.97; bVel[i * 3 + 2] *= 0.97; if (f === 0) bPos[i * 3 + 1] = 9999; bCol[i * 3] *= 0.985; bCol[i * 3 + 1] *= 0.985; bCol[i * 3 + 2] *= 0.985; }
  bGeo.attributes.position.needsUpdate = true; bGeo.attributes.color.needsUpdate = true;
  if (shockT >= 0) { shockT += dt; const s = 3 + shockT * 60; shock.scale.setScalar(s); shock.material.uniforms.uI.value = Math.max(0, 3 * (1 - shockT / 1.4)); if (shockT > 1.4) { shockT = -1; shock.visible = false; } }
  bloom.strength = (0.4 + 0.5 * THREE.MathUtils.smoothstep(camera.position.distanceTo(star.position), 7, 22)) + starPulse * 0.5 + (frenzyUntil > now() ? 0.4 : 0) + (shockT >= 0 ? 1.5 : 0);
  if (tapMode) drawTap(dt, t); else if (window.__raw) renderer.render(scene, camera); else composer.render();
  uiAcc += dt; saveAcc += dt;
  if (uiAcc > 0.1) { uiAcc = 0; render(); for (const [id, n, f] of ACH) if (!S.ach[id] && f(S)) { S.ach[id] = 1; toast(`🏆 ${n}`); tone(1180, 0.25, "triangle", 0.05, 1.2); } }
  if (saveAcc > 10) { saveAcc = 0; save(); }
  requestAnimationFrame(frame);
}
function offline() { const away = Math.min(now() - S.t, 8 * 3600e3); if (away > 60e3) { const g = GENS.reduce((a, x) => a + genRate(x), 0) * baseMult() * away / 1000 * 0.5; if (g > 0) { S.dust += g; S.total += g; S.allTime += g; toast(`While you were away (${dur(away)}): +${fmt(g)} stardust`); } } S.t = now(); }
document.addEventListener("visibilitychange", () => { if (document.hidden) save(); else offline(); });
window.addEventListener("pagehide", save);
$("snd").innerHTML = S.sound ? SPK_ON : SPK_OFF;
resize(); setEra(); offline(); syncBodies(); if (S.taps) $("hint").classList.add("gone"); shown = S.dust; render(); requestAnimationFrame(frame);
window.__comet = () => spawnComet(); window.__tc = () => tc && [tc.x, tc.y]; window.__dbg = { iso: () => { scene.children.forEach((c) => { if (c !== star && c !== corona1) c.visible = false; }); flare.visible = false; }, proj: () => { const r = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).multiplyScalar(3), u = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1).multiplyScalar(3); const c = new THREE.Vector3().project(camera), a = r.clone().project(camera), b = u.clone().project(camera); return [c.x, c.y, (a.x - c.x) * W / 2, (b.y - c.y) * H / 2, camera.aspect, W, H, renderer.domElement.width, renderer.domElement.height, camera.projectionMatrix.elements[0], camera.projectionMatrix.elements[5]]; }, cam: () => [camera.aspect, camera.fov, W, H, renderer.getSize(new THREE.Vector2()).toArray(), renderer.getViewport(new THREE.Vector4()).toArray(), renderer.getCurrentViewport(new THREE.Vector4()).toArray(), renderer.getContext().getParameter(renderer.getContext().VIEWPORT), renderer.getContext().drawingBufferWidth, renderer.getContext().drawingBufferHeight], S: () => S, set: (o) => { Object.assign(S, o); syncBodies(); lastHTML = ""; render(); }, comet: spawnComet, focus: (id, i = 0, z) => { focus = bodies[id][i]; focusLock = 0; setZoom(Math.log((focus.size || 1) * (z || 7) / camDist)); }, zoom: (z) => setZoom(z) };
