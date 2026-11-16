// Shared GLSL: Ashima 3D simplex noise + fbm
export const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){float a=0.5,s=0.0;for(int i=0;i<5;i++){s+=a*snoise(p);p*=2.03;a*=0.5;}return s;}
`;

// Star surface: boiling granulation + limb darkening
export const STAR_V = /* glsl */ `
varying vec3 vN; varying vec3 vP; varying vec3 vV;
void main(){ vN=normalize(normalMatrix*normal); vP=position; vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`;
export const STAR_F = /* glsl */ `
uniform float uT; uniform vec3 uA; uniform vec3 uB; uniform float uPulse; uniform float uBright;
varying vec3 vN; varying vec3 vP; varying vec3 vV;
${NOISE}
void main(){
  vec3 p=normalize(vP);
  float n=fbm(p*3.0+vec3(0.0,uT*0.08,uT*0.05));
  float cells=snoise(p*14.0+uT*0.25)*0.5+0.5;
  float spots=smoothstep(0.55,0.75,fbm(p*1.6-uT*0.02));
  vec3 col=mix(uB,uA,0.55+0.45*n);
  col=mix(col,vec3(1.0,0.98,0.9),cells*0.35);
  col*=1.0-spots*0.35;
  float limb=pow(max(dot(vN,vV),0.0),0.45);
  col*=0.55+0.75*limb;
  col*=(1.6+uPulse*0.8)*uBright;
  gl_FragColor=vec4(col,1.0);
}`;

// Additive corona billboard shell (fresnel)
export const GLOW_V = /* glsl */ `
varying vec3 vN; varying vec3 vV;
void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`;
export const GLOW_F = /* glsl */ `
uniform vec3 uC; uniform float uI; uniform float uP;
varying vec3 vN; varying vec3 vV;
void main(){ float f=pow(1.0-abs(dot(vN,vV)),uP); gl_FragColor=vec4(uC*f*uI,f*uI); }`;

// Planets: one shader, several looks
export const PLANET_V = /* glsl */ `
varying vec3 vN; varying vec3 vWP; varying vec3 vP; varying vec3 vV;
void main(){ vP=position; vN=normalize(mat3(modelMatrix)*normal); vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; vV=normalize(cameraPosition-wp.xyz); gl_Position=projectionMatrix*viewMatrix*wp; }`;
export const PLANET_F = /* glsl */ `
uniform float uT; uniform float uSeed; uniform int uKind; uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform vec3 uStar;
varying vec3 vN; varying vec3 vWP; varying vec3 vP; varying vec3 vV;
${NOISE}
void main(){
  vec3 p=normalize(vP)+vec3(uSeed*7.13,uSeed*3.71,uSeed*1.37);
  vec3 L=normalize(-vWP); vec3 N=normalize(vN);
  float diff=max(dot(N,L),0.0); vec3 col; float spec=0.0;
  if(uKind==0){ // rock / moon: craters + ridges
    float h=fbm(p*2.5); float cr=smoothstep(0.35,0.5,abs(snoise(p*6.0)))*0.25;
    col=mix(uB,uA,0.5+0.5*h)-cr*0.2;
  } else if(uKind==1){ // ocean world
    float h=fbm(p*1.8); float land=smoothstep(0.02,0.08,h);
    vec3 ocean=mix(uB*0.6,uB,0.5+0.5*fbm(p*5.0));
    vec3 ground=mix(uA,uC,smoothstep(0.1,0.45,h));
    float ice=smoothstep(0.78,0.9,abs(normalize(vP).y));
    col=mix(ocean,ground,land); col=mix(col,vec3(0.95),ice);
    float cl=smoothstep(0.15,0.6,fbm(p*3.0+vec3(uT*0.02,0.0,0.0)));
    col=mix(col,vec3(1.0),cl*0.85);
    vec3 H=normalize(L+vV); spec=pow(max(dot(N,H),0.0),60.0)*(1.0-land)*(1.0-cl)*0.9;
  } else if(uKind==2){ // gas giant: turbulent bands
    float y=normalize(vP).y; float w=fbm(p*vec3(1.0,6.0,1.0)+vec3(uT*0.015,0.0,0.0));
    float b=sin((y+w*0.18)*22.0+uSeed*10.0)*0.5+0.5;
    col=mix(uA,uB,b); col=mix(col,uC,smoothstep(0.6,0.95,fbm(p*3.0)));
    float storm=smoothstep(0.12,0.0,length(normalize(vP).xy-vec2(0.4,-0.25)));
    col=mix(col,uC*1.2,storm*0.8);
  } else if(uKind==3){ // ring world / tech: glowing seams
    float g=abs(sin(normalize(vP).x*40.0))*abs(sin(normalize(vP).y*40.0));
    col=mix(uA,uB,fbm(p*4.0)*0.5+0.5); col+=uC*smoothstep(0.9,1.0,1.0-g)*3.0; diff=max(diff,0.45);
  } else { // lava / pulsar crust
    float h=fbm(p*3.0+uT*0.05); col=mix(uA,uB,0.5+0.5*h);
    float cracks=smoothstep(0.08,0.0,abs(snoise(p*5.0+uT*0.03)));
    col+=uC*cracks*2.5; diff=max(diff,0.25);
  }
  float rim=pow(1.0-max(dot(N,vV),0.0),3.0);
  vec3 lit=col*(0.06+1.05*diff)+spec*vec3(1.0)+uStar*rim*diff*0.6;
  gl_FragColor=vec4(lit,1.0);
}`;

// Atmosphere shell on back faces
export const ATMO_F = /* glsl */ `
uniform vec3 uC; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
void main(){ vec3 L=normalize(-vWP); float f=pow(1.0-abs(dot(normalize(vN),vV)),2.5); float day=smoothstep(-0.3,0.6,dot(normalize(vN),L)); gl_FragColor=vec4(uC*f*day*1.6,f*day); }`;

// Planet ring band (RingGeometry, radius from local position)
export const RING_V = /* glsl */ `varying vec3 vL; varying vec3 vWP; void main(){ vL=position; vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }`;
export const RING_F = /* glsl */ `
uniform vec3 uA; uniform vec3 uB; uniform float uIn; uniform float uOut; uniform float uSeed; varying vec3 vL; varying vec3 vWP;
float h(float x){return fract(sin(x*127.1+uSeed*31.7)*43758.5453);}
void main(){
  float r=(length(vL.xy)-uIn)/(uOut-uIn); if(r<0.0||r>1.0) discard;
  float bands=0.0; for(int i=0;i<6;i++){ float f=float(i)*7.0+3.0; bands+=sin(r*f*6.2831+h(float(i))*6.0)*0.5+0.5; } bands/=6.0;
  float gap=smoothstep(0.0,0.02,abs(r-0.62))*smoothstep(0.0,0.015,abs(r-0.31));
  float a=bands*gap*smoothstep(0.0,0.05,r)*smoothstep(1.0,0.9,r);
  vec3 L=normalize(-vWP); float lit=0.35+0.65*abs(L.y)+0.4;
  gl_FragColor=vec4(mix(uA,uB,bands)*lit,a*0.85);
}`;

// Black hole accretion disk
export const DISK_V = /* glsl */ `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
export const DISK_F = /* glsl */ `
uniform float uT; varying vec2 vUv;
${NOISE}
void main(){
  vec2 c=vUv-0.5; float r=length(c)*2.0; float a=atan(c.y,c.x);
  if(r<0.32||r>1.0) discard;
  float sw=fbm(vec3(cos(a)*2.0,sin(a)*2.0,r*6.0-uT*1.2)+vec3(r*3.0+a*0.5));
  float t=smoothstep(1.0,0.35,r);
  vec3 hot=mix(vec3(1.0,0.35,0.25),vec3(1.0,0.9,0.75),t);
  float i=t*(0.55+0.45*sw)*smoothstep(0.32,0.4,r);
  gl_FragColor=vec4(hot*i*2.2,i);
}`;

// Nebula sky (inside a big sphere)
export const SKY_V = /* glsl */ `varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
export const SKY_F = /* glsl */ `
uniform float uT; uniform vec3 uA; uniform vec3 uB; varying vec3 vD;
${NOISE}
void main(){
  vec3 d=normalize(vD);
  float n1=fbm(d*1.6+vec3(0.0,0.0,uT*0.004)); float n2=fbm(d*3.2+vec3(9.0));
  float dust=smoothstep(-0.1,0.7,n1)*0.55; float teal=smoothstep(0.1,0.8,n2)*0.35;
  vec3 col=vec3(0.012,0.012,0.022)+uA*dust*dust*1.3+uB*teal*teal*1.1;
  float lane=smoothstep(0.35,0.0,abs(d.y+0.15*n1))*0.18; col+=mix(uA,uB,0.5)*lane*0.35;
  gl_FragColor=vec4(col,1.0);
}`;

// ===== v3: textured planets (Solar System Scope maps, CC BY 4.0) =====
export const P3_V = /* glsl */ `
varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; vV=normalize(cameraPosition-wp.xyz); gl_Position=projectionMatrix*viewMatrix*wp; }`;
export const P3_F = /* glsl */ `
uniform sampler2D uMap; uniform sampler2D uNight; uniform float uHasNight; uniform float uHue; uniform float uSat; uniform vec3 uTint; uniform float uBump; uniform float uSpec; uniform vec3 uStar; uniform float uRough; uniform float uUOff;
varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
vec3 hue(vec3 c,float a){ const vec3 k=vec3(0.57735); float ca=cos(a); return c*ca+cross(k,c)*sin(a)+k*dot(k,c)*(1.0-ca); }
float lum(vec3 c){ return dot(c,vec3(0.299,0.587,0.114)); }
void main(){
  vec2 uv=vUv+vec2(uUOff,0.0); vec3 base=texture2D(uMap,uv).rgb; base=hue(base,uHue); float l=lum(base); base=mix(vec3(l),base,uSat)*uTint;
  // bump: height = texture luminance, gradient taken in UV space (stable, no screen-space noise)
  vec3 N=normalize(vN); vec2 e=vec2(1.0/2048.0,1.0/1024.0);
  float hc=lum(texture2D(uMap,uv).rgb), hu=lum(texture2D(uMap,uv+vec2(e.x,0.0)).rgb), hv=lum(texture2D(uMap,uv+vec2(0.0,e.y)).rgb);
  vec3 Tg=normalize(cross(vec3(0.0,1.0,0.0),N)+vec3(1e-4)); vec3 Bt=normalize(cross(N,Tg));
  N=normalize(N-uBump*((hu-hc)*Tg+(hv-hc)*Bt)*6.0);
  vec3 L=normalize(-vWP); float nl=dot(N,L);
  float diff=smoothstep(-0.08,0.35,nl)*0.85+max(nl,0.0)*0.35;
  vec3 col=base*(0.025+diff*1.15)*uStar;
  // ocean glint: blue-dominant pixels are water
  float water=smoothstep(0.02,0.12,base.b-max(base.r,base.g)); vec3 H=normalize(L+vV);
  col+=uStar*pow(max(dot(normalize(vN),H),0.0),mix(18.0,90.0,1.0-uRough))*water*uSpec*smoothstep(0.0,0.2,nl);
  // night side city lights
  if(uHasNight>0.5){ vec3 nt=texture2D(uNight,uv).rgb; col+=nt*vec3(1.0,0.75,0.45)*1.4*smoothstep(0.15,-0.25,nl); }
  // rim/terminator warmth
  float rim=pow(1.0-max(dot(normalize(vN),vV),0.0),4.0); col+=uStar*rim*smoothstep(-0.2,0.5,nl)*0.25;
  gl_FragColor=vec4(col,1.0);
}`;
// cloud shell
export const CLOUD_F = /* glsl */ `
uniform sampler2D uMap; uniform vec3 uStar; uniform float uOff; varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
void main(){ float a=texture2D(uMap,vUv+vec2(uOff,0.0)).r; vec3 L=normalize(-vWP); float nl=dot(normalize(vN),L);
  float d=smoothstep(-0.1,0.4,nl); gl_FragColor=vec4(uStar*(0.04+d*1.05),a*0.9*smoothstep(-0.3,0.1,nl)+a*0.05); }`;
// saturn-style ring (radial lookup into 1D ring strip)
export const RING3_V = /* glsl */ `varying vec3 vL; varying vec3 vWP; void main(){ vL=position; vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }`;
export const RING3_F = /* glsl */ `
uniform sampler2D uMap; uniform vec3 uStar; uniform float uIn; uniform float uOut; uniform vec3 uTint; varying vec3 vL; varying vec3 vWP;
void main(){ float r=(length(vL.xy)-uIn)/(uOut-uIn); if(r<0.0||r>1.0) discard; vec4 t=texture2D(uMap,vec2(r,0.5));
  float lit=0.55+0.45*abs(normalize(-vWP).y); gl_FragColor=vec4(t.rgb*uTint*uStar*lit*1.1,t.a*0.95); }`;
// textured sun: real photosphere map + boiling distortion + limb darkening
export const SUN3_F = /* glsl */ `
uniform float uT; uniform sampler2D uMap; uniform vec3 uA; uniform vec3 uB; uniform float uPulse; uniform float uBright;
varying vec3 vN; varying vec3 vP; varying vec3 vV;
${NOISE}
void main(){
  vec3 p=normalize(vP); vec2 uv=vec2(atan(p.z,p.x)/6.2831853+0.5, asin(clamp(p.y,-1.0,1.0))/3.14159265+0.5);
  float w=fbm(p*4.0+vec3(uT*0.07)); uv+=vec2(w*0.012,w*0.008);
  float m=dot(texture2D(uMap,uv+vec2(uT*0.002,0.0)).rgb,vec3(0.333));
  float cells=snoise(p*22.0+uT*0.3)*0.5+0.5;
  vec3 col=mix(uB,uA,clamp(m*1.6-0.15+cells*0.18,0.0,1.0)); col=mix(col,vec3(1.0,0.97,0.9),pow(m,3.0)*0.6);
  float limb=pow(max(dot(vN,vV),0.0),0.5); col*=0.45+0.8*limb;
  gl_FragColor=vec4(col*(1.7+uPulse*0.8)*uBright,1.0);
}`;
// sky: real Milky Way photo + King's rust/teal nebula wash
export const SKY3_F = /* glsl */ `
uniform float uT; uniform sampler2D uMap; uniform vec3 uA; uniform vec3 uB; varying vec3 vD;
${NOISE}
void main(){
  vec3 d=normalize(vD); vec2 uv=vec2(atan(d.z,d.x)/6.2831853+0.5, asin(clamp(d.y,-1.0,1.0))/3.14159265+0.5);
  vec3 mw=texture2D(uMap,uv).rgb; mw=pow(mw,vec3(1.15))*1.25;
  float n1=fbm(d*1.6+vec3(0.0,0.0,uT*0.004)); float n2=fbm(d*3.2+vec3(9.0));
  vec3 neb=uA*pow(smoothstep(-0.1,0.7,n1),2.0)*0.55+uB*pow(smoothstep(0.1,0.8,n2),2.0)*0.45;
  gl_FragColor=vec4(mw+neb*(0.6+0.8*dot(mw,vec3(0.33))),1.0);
}`;

// ===== v4 sun =====
export const SUN4_F = /* glsl */ `
uniform float uT; uniform sampler2D uMap; uniform vec3 uA; uniform vec3 uB; uniform float uPulse; uniform float uBright;
varying vec3 vN; varying vec3 vP; varying vec3 vV;
${NOISE}
float cell(vec3 p){ vec3 i=floor(p), f=fract(p); float d=1.0; for(int x=-1;x<=1;x++) for(int y=-1;y<=1;y++) for(int z=-1;z<=1;z++){ vec3 o=vec3(x,y,z); vec3 h=fract(sin(vec3(dot(i+o,vec3(127.1,311.7,74.7)),dot(i+o,vec3(269.5,183.3,246.1)),dot(i+o,vec3(113.5,271.9,124.6))))*43758.5453); vec3 r=o+h-f; d=min(d,dot(r,r)); } return sqrt(d); }
void main(){
  vec3 p=normalize(vP); float rot=uT*0.012; vec3 q=vec3(p.x*cos(rot)-p.z*sin(rot),p.y,p.x*sin(rot)+p.z*cos(rot));
  vec2 uv=vec2(atan(q.z,q.x)/6.2831853+0.5, asin(clamp(q.y,-1.0,1.0))/3.14159265+0.5);
  float w=fbm(q*3.0+vec3(uT*0.05)); uv+=vec2(w*0.010,w*0.006);
  float tex=dot(texture2D(uMap,uv).rgb,vec3(0.333));
  // granulation: bright cell centres, dark intergranular lanes (Voronoi), boiling
  vec3 gp=q*42.0+vec3(fbm(q*9.0+uT*0.15))*0.8; float c1=cell(gp+vec3(0.0,uT*0.25,0.0)); float lanes=smoothstep(0.25,0.75,c1);
  float c2=cell(q*110.0+vec3(uT*0.4)); float fine=smoothstep(0.2,0.8,c2);
  float sg=fbm(q*5.0+uT*0.02);
  float spots=smoothstep(0.58,0.7,fbm(q*2.0+vec3(3.1)))*smoothstep(0.6,0.15,abs(q.y));
  float pen=smoothstep(0.45,0.58,fbm(q*2.0+vec3(3.1)))*smoothstep(0.6,0.15,abs(q.y));
  float heat=0.62+tex*0.35+sg*0.12-lanes*0.32-fine*0.1;
  vec3 col=mix(uB*0.55,uA,clamp(heat,0.0,1.0)); col+=vec3(1.0,0.9,0.7)*smoothstep(0.85,1.05,heat)*0.25;
  col=mix(col,col*0.55,pen-spots); col=mix(col,vec3(0.18,0.05,0.01),spots);
  float mu=max(dot(normalize(vN),normalize(vV)),0.0); float limb=1.0-0.68*(1.0-pow(mu,0.85));
  col*=limb; col=mix(uB*0.7,col,smoothstep(0.0,0.4,mu));
  gl_FragColor=vec4(col*(1.35+uPulse*0.9)*uBright,1.0);
}`;
// camera-facing corona billboard: soft glow + animated streamers
export const CORONA_V = /* glsl */ `varying vec2 vUv; void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(0.0,0.0,0.0,1.0); mv.xy+=position.xy; gl_Position=projectionMatrix*mv; }`;
export const CORONA_F = /* glsl */ `
uniform float uT; uniform vec3 uA; uniform vec3 uB; uniform float uI; uniform float uR; varying vec2 vUv;
${NOISE}
void main(){
  vec2 c=(vUv-0.5)*2.0; float r=length(c); float a=atan(c.y,c.x);
  float rs=uR; if(r<rs*0.98) discard;
  float x=(r-rs)/(1.0-rs);
  float glow=exp(-x*7.0)*1.2+exp(-x*2.2)*0.35+exp(-x*0.8)*0.06;
  float st=fbm(vec3(cos(a)*3.0,sin(a)*3.0,uT*0.06))*0.5+0.5; st=pow(st,2.0);
  float rays=pow(max(0.0,snoise(vec3(a*6.0,x*1.5-uT*0.08,uT*0.03))*0.5+0.5),3.0)*exp(-x*3.0);
  float i=(glow*(0.75+0.5*st)+rays*0.8)*uI*smoothstep(1.0,0.55,r);
  vec3 col=mix(uB,uA,exp(-x*4.0));
  gl_FragColor=vec4(col*i,i);
}`;
