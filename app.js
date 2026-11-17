(()=>{var nm=0,Dh=1,im=2;var Yf=1,sm=2,vi=3,Cn=0,Tt=1,wt=2,gt=0,ar=1,Pt=2,Ph=3,Ih=4,rm=5,ps=100,am=101,om=102,lm=103,cm=104,um=200,hm=201,fm=202,dm=203,$l=204,ec=205,pm=206,mm=207,gm=208,vm=209,xm=210,ym=211,Mm=212,_m=213,Am=214,tc=0,sa=1,nc=2,ur=3,ic=4,sc=5,rc=6,ac=7,qf=0,Sm=1,Em=2,jn=0,wm=1,Tm=2,bm=3,Cm=4,Rm=5,Dm=6,Pm=7;var Qf=300,hr=301,fr=302,ra=303,oc=304,Jo=306,vs=1e3,gs=1001,lc=1002,Dt=1003,Im=1004;var Xa=1005;var zt=1006,_l=1007;var yi=1008;var ht=1009,Zf=1010,Kf=1011,aa=1012,pu=1013,xs=1014,bn=1015,ws=1016,mu=1017,gu=1018,Hi=1020,Jf=35902,jf=1021,$f=1022,Gn=1023,ed=1024,td=1025,or=1026,ki=1027,vu=1028,xu=1029,nd=1030,yu=1031;var Mu=1033,Ao=33776,So=33777,Eo=33778,wo=33779,cc=35840,uc=35841,hc=35842,fc=35843,dc=36196,pc=37492,mc=37496,gc=37808,vc=37809,xc=37810,yc=37811,Mc=37812,_c=37813,Ac=37814,Sc=37815,Ec=37816,wc=37817,Tc=37818,bc=37819,Cc=37820,Rc=37821,To=36492,Dc=36494,Pc=36495,id=36283,Ic=36284,Uc=36285,Bc=36286;var bo=2300,Lc=2301,Al=2302,Uh=2400,Bh=2401,Lh=2402;var xn=3200,Um=3201;var sd=0,Bm=1,Tn="",ze="srgb",ti="srgb-linear",jo="linear",ut="srgb";var Hs=7680;var Nh=519,Lm=512,Nm=513,Fm=514,rd=515,Om=516,zm=517,Hm=518,km=519,Nc=35044;var Fh="300 es",Mi=2e3,Co=2001,fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,ta=Math.PI/180,oa=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function _u(n,e){return(n%e+e)%e}function Gm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vm(n,e,t){return n!==e?(t-n)/(e-n):0}function na(n,e,t){return(1-t)*n+t*e}function Wm(n,e,t,i){return na(n,e,1-Math.exp(-t*i))}function Xm(n,e=1){return e-Math.abs(_u(n,e*2)-e)}function Ym(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zm(n,e){return n+Math.random()*(e-n)}function Km(n){return n*(.5-Math.random())}function Jm(n){n!==void 0&&(Oh=n);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jm(n){return n*ta}function $m(n){return n*oa}function eg(n){return(n&n-1)===0&&n!==0}function tg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ng(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ig(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),f=a((e-i)/2),p=r((i-e)/2),v=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ti={DEG2RAD:ta,RAD2DEG:oa,generateUUID:_i,clamp:ln,euclideanModulo:_u,mapLinear:Gm,inverseLerp:Vm,lerp:na,damp:Wm,pingpong:Xm,smoothstep:Ym,smootherstep:qm,randInt:Qm,randFloat:Zm,randFloatSpread:Km,seededRandom:Jm,degToRad:jm,radToDeg:$m,isPowerOfTwo:eg,ceilPowerOfTwo:tg,floorPowerOfTwo:ng,setQuaternionFromProperEuler:ig,normalize:ot,denormalize:kn},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],g=s[0],m=s[3],d=s[6],A=s[1],E=s[4],M=s[7],I=s[2],T=s[5],C=s[8];return r[0]=a*g+o*A+l*I,r[3]=a*m+o*E+l*T,r[6]=a*d+o*M+l*C,r[1]=c*g+u*A+h*I,r[4]=c*m+u*E+h*T,r[7]=c*d+u*M+h*C,r[2]=f*g+p*A+v*I,r[5]=f*m+p*E+v*T,r[8]=f*d+p*M+v*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=t*h+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sl=new Le;function ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sg(){let n=la("canvas");return n.style.display="block",n}var zh={};function $r(n){n in zh||(zh[n]=!0,console.warn(n))}function rg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ag(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function og(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ke={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(n.r=lr(n.r),n.g=lr(n.g),n.b=lr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Tn?jo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hh=[.64,.33,.3,.6,.15,.06],kh=[.2126,.7152,.0722],Gh=[.3127,.329],Vh=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[ti]:{primaries:Hh,whitePoint:Gh,transfer:jo,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:kh,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Hh,whitePoint:Gh,transfer:ut,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:kh,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var ks,Fc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=la("canvas")),ks.width=e.width,ks.height=e.height;let i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lg=0,Ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(El(s[a].image)):r.push(El(s[a]))}else r=El(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function El(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cg=0,bt=class n extends fn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=gs,s=gs,r=zt,a=yi,o=Gn,l=ht,c=n.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=_i(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Qf;bt.DEFAULT_ANISOTROPY=1;var Ve=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(p+1)/2,I=(d+1)/2,T=(u+f)/4,C=(h+g)/4,D=(v+m)/4;return E>M&&E>I?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=C/i):M>I?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=D/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=D/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(h-g)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends fn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends Oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Do=class extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==f||c!==p||u!==v){let m=1-o,d=l*f+c*p+u*v+h*g,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let I=Math.sqrt(E),T=Math.atan2(I,d*A);m=Math.sin(m*T)/I,o=Math.sin(o*T)/I}let M=o*A;if(l=l*m+f*M,c=c*m+p*M,u=u*m+v*M,h=h*m+g*M,m===1-o){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*p-c*f,e[t+1]=l*v+u*f+c*h-o*p,e[t+2]=c*v+u*p+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wl=new b,Xh=new Gi,Si=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),qa.subVectors(this.max,Gr),Gs.subVectors(e.a,Gr),Vs.subVectors(e.b,Gr),Ws.subVectors(e.c,Gr),Ui.subVectors(Vs,Gs),Bi.subVectors(Ws,Vs),os.subVectors(Gs,Ws);let t=[0,-Ui.z,Ui.y,0,-Bi.z,Bi.y,0,-os.z,os.y,Ui.z,0,-Ui.x,Bi.z,0,-Bi.x,os.z,0,-os.x,-Ui.y,Ui.x,0,-Bi.y,Bi.x,0,-os.y,os.x,0];return!Tl(t,Gs,Vs,Ws,qa)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Gs,Vs,Ws,qa))?!1:(Qa.crossVectors(Ui,Bi),t=[Qa.x,Qa.y,Qa.z],Tl(t,Gs,Vs,Ws,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new b,new b,new b,new b,new b,new b,new b,new b],On=new b,Ya=new Si,Gs=new b,Vs=new b,Ws=new b,Ui=new b,Bi=new b,os=new b,Gr=new b,qa=new b,Qa=new b,ls=new b;function Tl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ls.fromArray(n,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ug=new Si,Vr=new b,bl=new b,Ei=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ug.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(bl)),this.expandByPoint(Vr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new b,Cl=new b,Za=new b,Li=new b,Rl=new b,Ka=new b,Dl=new b,dr=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cl.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Cl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=Li.dot(this.direction),l=-Li.dot(Za),c=Li.lengthSq(),u=Math.abs(1-a*a),h,f,p,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){let g=1/u;h*=g,f*=g,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Cl).addScaledVector(Za,f),p}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){Rl.subVectors(t,e),Ka.subVectors(i,e),Dl.crossVectors(Rl,Ka);let a=this.direction.dot(Dl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);let l=o*this.direction.dot(Ka.crossVectors(Li,Ka));if(l<0)return null;let c=o*this.direction.dot(Rl.cross(Li));if(c<0||l+c>a)return null;let u=-o*Li.dot(Dl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,a,o,l,c,u,h,f,p,v,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,p,v,g,m)}set(e,t,i,s,r,a,o,l,c,u,h,f,p,v,g,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,v=c*u,g=c*h;t[0]=f+g*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,v=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+v,t[10]=f-g*h}else if(e.order==="XZY"){let f=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,fg)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ni.crossVectors(i,mn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ni.crossVectors(i,mn)),Ni.normalize(),Ja.crossVectors(mn,Ni),s[0]=Ni.x,s[4]=Ja.x,s[8]=mn.x,s[1]=Ni.y,s[5]=Ja.y,s[9]=mn.y,s[2]=Ni.z,s[6]=Ja.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],g=i[6],m=i[10],d=i[14],A=i[3],E=i[7],M=i[11],I=i[15],T=s[0],C=s[4],D=s[8],S=s[12],y=s[1],R=s[5],k=s[9],F=s[13],G=s[2],K=s[6],V=s[10],j=s[14],W=s[3],re=s[7],fe=s[11],Ae=s[15];return r[0]=a*T+o*y+l*G+c*W,r[4]=a*C+o*R+l*K+c*re,r[8]=a*D+o*k+l*V+c*fe,r[12]=a*S+o*F+l*j+c*Ae,r[1]=u*T+h*y+f*G+p*W,r[5]=u*C+h*R+f*K+p*re,r[9]=u*D+h*k+f*V+p*fe,r[13]=u*S+h*F+f*j+p*Ae,r[2]=v*T+g*y+m*G+d*W,r[6]=v*C+g*R+m*K+d*re,r[10]=v*D+g*k+m*V+d*fe,r[14]=v*S+g*F+m*j+d*Ae,r[3]=A*T+E*y+M*G+I*W,r[7]=A*C+E*R+M*K+I*re,r[11]=A*D+E*k+M*V+I*fe,r[15]=A*S+E*F+M*j+I*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*p-i*l*p)+g*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-i*a*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],A=h*m*c-g*f*c+g*l*p-o*m*p-h*l*d+o*f*d,E=v*f*c-u*m*c-v*l*p+a*m*p+u*l*d-a*f*d,M=u*g*c-v*h*c+v*o*p-a*g*p-u*o*d+a*h*d,I=v*h*l-u*g*l-v*o*f+a*g*f+u*o*m-a*h*m,T=t*A+i*E+s*M+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=A*C,e[1]=(g*f*r-h*m*r-g*s*p+i*m*p+h*s*d-i*f*d)*C,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*d+i*l*d)*C,e[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*p-i*l*p)*C,e[4]=E*C,e[5]=(u*m*r-v*f*r+v*s*p-t*m*p-u*s*d+t*f*d)*C,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*d-t*l*d)*C,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*C,e[8]=M*C,e[9]=(v*h*r-u*g*r-v*i*p+t*g*p+u*i*d-t*h*d)*C,e[10]=(a*g*r-v*o*r+v*i*c-t*g*c-a*i*d+t*o*d)*C,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*p-t*o*p)*C,e[12]=I*C,e[13]=(u*g*s-v*h*s+v*i*f-t*g*f-u*i*m+t*h*m)*C,e[14]=(v*o*s-a*g*s-v*i*l+t*g*l+a*i*m-t*o*m)*C,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*f+t*o*f)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,v=r*h,g=a*u,m=a*h,d=o*h,A=l*c,E=l*u,M=l*h,I=i.x,T=i.y,C=i.z;return s[0]=(1-(g+d))*I,s[1]=(p+M)*I,s[2]=(v-E)*I,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(m+A)*T,s[7]=0,s[8]=(v+E)*C,s[9]=(m-A)*C,s[10]=(1-(f+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Xs.set(s[0],s[1],s[2]).length(),a=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let c=1/r,u=1/a,h=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Mi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,v;if(o===Mi)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Co)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Mi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),f=(t+e)*c,p=(i+s)*u,v,g;if(o===Mi)v=(a+r)*h,g=-2*h;else if(o===Co)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xs=new b,zn=new lt,hg=new b(0,0,0),fg=new b(1,1,1),Ni=new b,Ja=new b,mn=new b,Yh=new lt,qh=new Gi,$n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dg=0,Qh=new b,Ys=new Gi,pi=new lt,ja=new b,Wr=new b,pg=new b,mg=new Gi,Zh=new b(1,0,0),Kh=new b(0,1,0),Jh=new b(0,0,1),jh={type:"added"},gg={type:"removed"},qs={type:"childadded",child:null},Pl={type:"childremoved",child:null},qt=class n extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new $n,i=new Gi,s=new b(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Le}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Wr,ja,this.up):pi.lookAt(ja,Wr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(pi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gg),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};qt.DEFAULT_UP=new b(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new b,mi=new b,Il=new b,gi=new b,Qs=new b,Zs=new b,$h=new b,Ul=new b,Bl=new b,Ll=new b,Nl=new Ve,Fl=new Ve,Ol=new Ve,zi=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),mi.subVectors(i,t),Il.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(mi),l=Hn.dot(Il),c=mi.dot(mi),u=mi.dot(Il),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Nl.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Nl.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nl,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),mi.subVectors(e,t),Hn.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Qs.subVectors(s,i),Zs.subVectors(r,i),Ul.subVectors(e,i);let l=Qs.dot(Ul),c=Zs.dot(Ul);if(l<=0&&c<=0)return t.copy(i);Bl.subVectors(e,s);let u=Qs.dot(Bl),h=Zs.dot(Bl);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Qs,a);Ll.subVectors(e,r);let p=Qs.dot(Ll),v=Zs.dot(Ll);if(v>=0&&p<=v)return t.copy(r);let g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Zs,o);let m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return $h.subVectors(r,s),o=(h-u)/(h-u+(p-v)),t.copy(s).addScaledVector($h,o);let d=1/(m+g+f);return a=g*d,o=f*d,t.copy(i).addScaledVector(Qs,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=_u(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=zl(a,r,e+1/3),this.g=zl(a,r,e),this.b=zl(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let i=od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Ke.fromWorkingColorSpace(sn.copy(this),e),Math.round(ln(sn.r*255,0,255))*65536+Math.round(ln(sn.g*255,0,255))*256+Math.round(ln(sn.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,s=sn.g,r=sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=ze){Ke.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,s=sn.b;return e!==ze?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL($a);let i=na(Fi.h,$a.h,t),s=na(Fi.s,$a.s,t),r=na(Fi.l,$a.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Se;Se.NAMES=od;var vg=0,dn=class extends fn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=_i(),this.name="",this.blending=ar,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=ec,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vn=class extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new b,eo=new ne,tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}};var Po=class extends tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Io=class extends tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Mt=class extends tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},xg=0,wn=new lt,Hl=new qt,Ks=new b,gn=new Si,Xr=new Si,Xt=new b,ct=class n extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?Io:Po)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(gn.min,Xr.min),gn.expandByPoint(Xt),Xt.addVectors(gn.max,Xr.max),gn.expandByPoint(Xt)):(gn.expandByPoint(Xr.min),gn.expandByPoint(Xr.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(e,c),Xt.add(Ks)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new b,l[D]=new b;let c=new b,u=new b,h=new b,f=new ne,p=new ne,v=new ne,g=new b,m=new b;function d(D,S,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),v.sub(f);let R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),o[D].add(g),o[S].add(g),o[y].add(g),l[D].add(m),l[S].add(m),l[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,S=A.length;D<S;++D){let y=A[D],R=y.start,k=y.count;for(let F=R,G=R+k;F<G;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let E=new b,M=new b,I=new b,T=new b;function C(D){I.fromBufferAttribute(s,D),T.copy(I);let S=o[D];E.copy(S),E.sub(I.multiplyScalar(I.dot(S))).normalize(),M.crossVectors(T,S);let R=M.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,R)}for(let D=0,S=A.length;D<S;++D){let y=A[D],R=y.start,k=y.count;for(let F=R,G=R+k;F<G;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new b,r=new b,a=new b,o=new b,l=new b,c=new b,u=new b,h=new b;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new tt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ef=new lt,cs=new dr,to=new Ei,tf=new b,no=new b,io=new b,so=new b,kl=new b,ro=new b,nf=new b,ao=new b,Te=class extends qt{constructor(e=new ct,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(kl.fromBufferAttribute(h,e),a?ro.addScaledVector(kl,u):ro.addScaledVector(kl.sub(t),u))}t.add(ro)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(to.containsPoint(cs.origin)===!1&&(cs.intersectSphere(to,tf)===null||cs.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),cs.copy(e.ray).applyMatrix4(ef),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){let m=f[v],d=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,I=E;M<I;M+=3){let T=o.getX(M),C=o.getX(M+1),D=o.getX(M+2);s=oo(this,d,e,i,c,u,h,T,C,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){let A=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=oo(this,a,e,i,c,u,h,A,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){let m=f[v],d=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,I=E;M<I;M+=3){let T=M,C=M+1,D=M+2;s=oo(this,d,e,i,c,u,h,T,C,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){let A=m,E=m+1,M=m+2;s=oo(this,a,e,i,c,u,h,A,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yg(n,e,t,i,s,r,a,o){let l;if(e.side===Tt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Cn,o),l===null)return null;ao.copy(o),ao.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:n}}function oo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,no),n.getVertexPosition(l,io),n.getVertexPosition(c,so);let u=yg(n,e,t,i,no,io,so,nf);if(u){let h=new b;zi.getBarycoord(nf,no,io,so,h),s&&(u.uv=zi.getInterpolatedAttribute(s,o,l,c,h,new ne)),r&&(u.uv1=zi.getInterpolatedAttribute(r,o,l,c,h,new ne)),a&&(u.normal=zi.getInterpolatedAttribute(a,o,l,c,h,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new b,materialIndex:0};zi.getNormal(no,io,so,f.normal),u.face=f,u.barycoord=h}return u}var ys=class n extends ct{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function v(g,m,d,A,E,M,I,T,C,D,S){let y=M/C,R=I/D,k=M/2,F=I/2,G=T/2,K=C+1,V=D+1,j=0,W=0,re=new b;for(let fe=0;fe<V;fe++){let Ae=fe*R-F;for(let ke=0;ke<K;ke++){let ft=ke*y-k;re[g]=ft*A,re[m]=Ae*E,re[d]=G,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[d]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(ke/C),h.push(1-fe/D),j+=1}}for(let fe=0;fe<D;fe++)for(let Ae=0;Ae<C;Ae++){let ke=f+Ae+K*fe,ft=f+Ae+K*(fe+1),q=f+(Ae+1)+K*(fe+1),te=f+(Ae+1)+K*fe;l.push(ke,ft,te),l.push(ft,q,te),W+=6}o.addGroup(p,W,S),p+=W,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=pr(n[t]);for(let s in i)e[s]=i[s]}return e}function Mg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ld(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var _g={clone:pr,merge:on},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Uo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new b,sf=new ne,rf=new ne,Yt=class extends Uo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,js=1,Hc=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Js,js,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Js,js,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Js,js,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Js,js,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Js,js,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Js,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Bo=class extends bt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kc=class extends je{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ys(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:gt});r.uniforms.tEquirect.value=t;let a=new Te(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=zt),new Hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Gl=new b,Eg=new b,wg=new Le,xi=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gl.subVectors(i,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wg.getNormalMatrix(e),s=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Ei,lo=new b,ua=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],d=s[12],A=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-p,M-d).normalize(),i[1].setComponents(l+r,f+c,m+p,M+d).normalize(),i[2].setComponents(l+a,f+u,m+v,M+A).normalize(),i[3].setComponents(l-a,f-u,m-v,M-A).normalize(),i[4].setComponents(l-o,f-h,m-g,M-E).normalize(),t===Mi)i[5].setComponents(l+o,f+h,m+g,M+E).normalize();else if(t===Co)i[5].setComponents(o,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tg(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){let v=h[f],g=h[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,h[f]=g)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){let g=h[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var mr=class n extends ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){let A=d*f-a;for(let E=0;E<c;E++){let M=E*h-r;v.push(M,-A,0),g.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){let E=A+c*d,M=A+c*(d+1),I=A+1+c*(d+1),T=A+1+c*d;p.push(E,M,T),p.push(M,I,T)}this.setIndex(p),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_v=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:bg,alphahash_pars_fragment:Cg,alphamap_fragment:Rg,alphamap_pars_fragment:Dg,alphatest_fragment:Pg,alphatest_pars_fragment:Ig,aomap_fragment:Ug,aomap_pars_fragment:Bg,batching_pars_vertex:Lg,batching_vertex:Ng,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:zg,iridescence_fragment:Hg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:Yg,color_pars_fragment:qg,color_pars_vertex:Qg,color_vertex:Zg,common:Kg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:jg,displacementmap_pars_vertex:$g,displacementmap_vertex:e0,emissivemap_fragment:t0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:y0,envmap_vertex:c0,fog_vertex:u0,fog_pars_vertex:h0,fog_fragment:f0,fog_pars_fragment:d0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:v0,lights_pars_begin:x0,lights_toon_fragment:M0,lights_toon_pars_fragment:_0,lights_phong_fragment:A0,lights_phong_pars_fragment:S0,lights_physical_fragment:E0,lights_physical_pars_fragment:w0,lights_fragment_begin:T0,lights_fragment_maps:b0,lights_fragment_end:C0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:I0,map_fragment:U0,map_pars_fragment:B0,map_particle_fragment:L0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:z0,morphcolor_vertex:H0,morphnormal_vertex:k0,morphtarget_pars_vertex:G0,morphtarget_vertex:V0,normal_fragment_begin:W0,normal_fragment_maps:X0,normal_pars_fragment:Y0,normal_pars_vertex:q0,normal_vertex:Q0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:$0,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:sv,dithering_pars_fragment:rv,roughnessmap_fragment:av,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:lv,shadowmap_pars_vertex:cv,shadowmap_vertex:uv,shadowmask_pars_fragment:hv,skinbase_vertex:fv,skinning_pars_vertex:dv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:vv,tonemapping_fragment:xv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:_v,uv_pars_fragment:Av,uv_pars_vertex:Sv,uv_vertex:Ev,worldpos_vertex:wv,background_vert:Tv,background_frag:bv,backgroundCube_vert:Cv,backgroundCube_frag:Rv,cube_vert:Dv,cube_frag:Pv,depth_vert:Iv,depth_frag:Uv,distanceRGBA_vert:Bv,distanceRGBA_frag:Lv,equirect_vert:Nv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:zv,meshbasic_vert:Hv,meshbasic_frag:kv,meshlambert_vert:Gv,meshlambert_frag:Vv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:Yv,meshnormal_frag:qv,meshphong_vert:Qv,meshphong_frag:Zv,meshphysical_vert:Kv,meshphysical_frag:Jv,meshtoon_vert:jv,meshtoon_frag:$v,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},ie={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Jn={basic:{uniforms:on([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:on([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:on([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:on([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:on([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:on([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:on([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:on([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:on([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:on([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:on([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:on([ie.common,ie.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:on([ie.lights,ie.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Jn.physical={uniforms:on([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var co={r:0,b:0,g:0},hs=new $n,ax=new lt;function ox(n,e,t,i,s,r,a){let o=new Se(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function v(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function g(A){let E=!1,M=v(A);M===null?d(o,l):M&&M.isColor&&(d(M,1),E=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,E){let M=v(E);M&&(M.isCubeTexture||M.mapping===Jo)?(u===void 0&&(u=new Te(new ys(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:pr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hs.copy(E.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(hs)),u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==ut,(h!==M||f!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Te(new mr(2,2),new Pe({name:"BackgroundMaterial",uniforms:pr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,E){A.getRGB(co,ld(n)),i.buffers.color.setClear(co.r,co.g,co.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:g,addToRenderList:m}}function lx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(y,R,k,F,G){let K=!1,V=h(F,k,R);r!==V&&(r=V,c(r.object)),K=p(y,F,k,G),K&&v(y,F,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(y,R,k,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,R,k){let F=k.wireframe===!0,G=i[y.id];G===void 0&&(G={},i[y.id]=G);let K=G[R.id];K===void 0&&(K={},G[R.id]=K);let V=K[F];return V===void 0&&(V=f(l()),K[F]=V),V}function f(y){let R=[],k=[],F=[];for(let G=0;G<t;G++)R[G]=0,k[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,R,k,F){let G=r.attributes,K=R.attributes,V=0,j=k.getAttributes();for(let W in j)if(j[W].location>=0){let fe=G[W],Ae=K[W];if(Ae===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function v(y,R,k,F){let G={},K=R.attributes,V=0,j=k.getAttributes();for(let W in j)if(j[W].location>=0){let fe=K[W];fe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));let Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),G[W]=Ae,V++}r.attributes=G,r.attributesNum=V,r.index=F}function g(){let y=r.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){let k=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;k[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),G[y]!==R&&(n.vertexAttribDivisor(y,R),G[y]=R)}function A(){let y=r.newAttributes,R=r.enabledAttributes;for(let k=0,F=R.length;k<F;k++)R[k]!==y[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function E(y,R,k,F,G,K,V){V===!0?n.vertexAttribIPointer(y,R,k,G,K):n.vertexAttribPointer(y,R,k,F,G,K)}function M(y,R,k,F){g();let G=F.attributes,K=k.getAttributes(),V=R.defaultAttributeValues;for(let j in K){let W=K[j];if(W.location>=0){let re=G[j];if(re===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){let fe=re.normalized,Ae=re.itemSize,ke=e.get(re);if(ke===void 0)continue;let ft=ke.buffer,q=ke.type,te=ke.bytesPerElement,ye=q===n.INT||q===n.UNSIGNED_INT||re.gpuType===pu;if(re.isInterleavedBufferAttribute){let ae=re.data,Ce=ae.stride,Ie=re.offset;if(ae.isInstancedInterleavedBuffer){for(let Ge=0;Ge<W.locationSize;Ge++)d(W.location+Ge,ae.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ge=0;Ge<W.locationSize;Ge++)m(W.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Ge=0;Ge<W.locationSize;Ge++)E(W.location+Ge,Ae/W.locationSize,q,fe,Ce*te,(Ie+Ae/W.locationSize*Ge)*te,ye)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)d(W.location+ae,re.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let ae=0;ae<W.locationSize;ae++)E(W.location+ae,Ae/W.locationSize,q,fe,Ae*te,Ae/W.locationSize*ae*te,ye)}}else if(V!==void 0){let fe=V[j];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}A()}function I(){D();for(let y in i){let R=i[y];for(let k in R){let F=R[k];for(let G in F)u(F[G].object),delete F[G];delete R[k]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;let R=i[y.id];for(let k in R){let F=R[k];for(let G in F)u(F[G].object),delete F[G];delete R[k]}delete i[y.id]}function C(y){for(let R in i){let k=i[R];if(k[y.id]===void 0)continue;let F=k[y.id];for(let G in F)u(F[G].object),delete F[G];delete k[y.id]}}function D(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function cx(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g]*f[g];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ux(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let D=C===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ht&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!D)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:I,maxSamples:T}}function hx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new xi,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let A=r?0:i,E=A*4,M=d.clippingState||null;l.value=M,M=u(v,f,E,p);for(let I=0;I!==E;++I)M[I]=t[I];d.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let d=p+g*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==g;++E,M+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function fx(n){let e=new WeakMap;function t(a,o){return o===ra?a.mapping=hr:o===oc&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ra||o===oc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new kc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ha=class extends Uo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rr=4,af=[.125,.215,.35,.446,.526,.582],ms=20,Vl=new ha,of=new Se,Wl=null,Xl=0,Yl=0,ql=!1,ds=(1+Math.sqrt(5))/2,$s=1/ds,lf=[new b(-ds,$s,0),new b(ds,$s,0),new b(-$s,0,ds),new b($s,0,ds),new b(0,ds,-$s),new b(0,ds,$s),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,Yl),this._renderer.xr.enabled=ql,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ws,format:Gn,colorSpace:ti,depthBuffer:!1},s=cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=px(r,e,t)}return s}_compileMaterial(e){let t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,i,s){let o=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(of),u.toneMapping=jn,u.autoClear=!1;let p=new vn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),v=new Te(new ys,p),g=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(of),g=!0);for(let d=0;d<6;d++){let A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let E=this._cubeSize;uo(s,A*E,d>2?E:0,E,E),u.setRenderTarget(s),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===hr||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Vl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lf[(s-r-1)%lf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Te(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let d=[],A=0;for(let C=0;C<ms;++C){let D=C/g,S=Math.exp(-D*D/2);d.push(S),C===0?A+=S:C<m&&(A+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-i;let M=this._sizeLods[s],I=3*M*(s>E-rr?s-E+rr:0),T=4*(this._cubeSize-M);uo(t,I,T,3*M,2*M),l.setRenderTarget(t),l.render(h,Vl)}};function dx(n){let e=[],t=[],i=[],s=n,r=n-rr+1+af.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-rr?l=af[a-n+rr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,g=3,m=2,d=1,A=new Float32Array(g*v*p),E=new Float32Array(m*v*p),M=new Float32Array(d*v*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,D=T>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];A.set(S,g*v*T),E.set(f,m*v*T);let y=[T,T,T,T,T,T];M.set(y,d*v*T)}let I=new ct;I.setAttribute("position",new tt(A,g)),I.setAttribute("uv",new tt(E,m)),I.setAttribute("faceIndex",new tt(M,d)),e.push(I),s>rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cf(n,e,t){let i=new je(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function px(n,e,t){let i=new Float32Array(ms),s=new b(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gt,depthTest:!1,depthWrite:!1})}function uf(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gt,depthTest:!1,depthWrite:!1})}function hf(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gt,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ra||l===oc,u=l===hr||l===fr;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new gr(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new gr(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function vx(n,e,t,i){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let v in f)e.update(f[v],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let v in p){let g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,v=h.attributes.position,g=0;if(p!==null){let A=p.array;g=p.version;for(let E=0,M=A.length;E<M;E+=3){let I=A[E+0],T=A[E+1],C=A[E+2];f.push(I,T,T,C,C,I)}}else if(v!==void 0){let A=v.array;g=v.version;for(let E=0,M=A.length/3-1;E<M;E+=3){let I=E+0,T=E+1,C=E+2;f.push(I,T,T,C,C,I)}}else return;let m=new(ad(f)?Io:Po)(f,1);m.version=g;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,f*a,v),t.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function h(f,p,v,g){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,g,0,v);let d=0;for(let A=0;A<v;A++)d+=p[A]*g[A];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Mx(n,e,t){let i=new WeakMap,s=new Ve;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],E=0;p===!0&&(E=1),v===!0&&(E=2),g===!0&&(E=3);let M=o.attributes.position.count*E,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*I*4*h),C=new Do(T,M,I,h);C.type=bn,C.needsUpdate=!0;let D=E*4;for(let y=0;y<h;y++){let R=m[y],k=d[y],F=A[y],G=M*I*4*y;for(let K=0;K<R.count;K++){let V=K*D;p===!0&&(s.fromBufferAttribute(R,K),T[G+V+0]=s.x,T[G+V+1]=s.y,T[G+V+2]=s.z,T[G+V+3]=0),v===!0&&(s.fromBufferAttribute(k,K),T[G+V+4]=s.x,T[G+V+5]=s.y,T[G+V+6]=s.z,T[G+V+7]=0),g===!0&&(s.fromBufferAttribute(F,K),T[G+V+8]=s.x,T[G+V+9]=s.y,T[G+V+10]=s.z,T[G+V+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new ne(M,I)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _x(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Vi=class extends bt{constructor(e,t,i,s,r,a,o,l,c,u=or){if(u!==or&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===or&&(i=xs),i===void 0&&u===ki&&(i=Hi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ud=new bt,ff=new Vi(1,1),hd=new Do,fd=new zc,dd=new Bo,df=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),vf=new Float32Array(4);function Mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=df[s];if(r===void 0&&(r=new Float32Array(s),df[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function Tx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ht(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),kt(t,i)}}function bx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ht(t,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),kt(t,i)}}function Cx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ht(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),kt(t,i)}}function Rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Fx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ff.compareFunction=rd,r=ff):r=ud,t.setTexture2D(e||r,s)}function Ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fd,s)}function zx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dd,s)}function Hx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hd,s)}function kx(n){switch(n){case 5126:return Ax;case 35664:return Sx;case 35665:return Ex;case 35666:return wx;case 35674:return Tx;case 35675:return bx;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Dx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Ux;case 36294:return Bx;case 36295:return Lx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Gx(n,e){n.uniform1fv(this.addr,e)}function Vx(n,e){let t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function Wx(n,e){let t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Xx(n,e){let t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function Yx(n,e){let t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qx(n,e){let t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){let t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zx(n,e){n.uniform1iv(this.addr,e)}function Kx(n,e){n.uniform2iv(this.addr,e)}function Jx(n,e){n.uniform3iv(this.addr,e)}function jx(n,e){n.uniform4iv(this.addr,e)}function $x(n,e){n.uniform1uiv(this.addr,e)}function ey(n,e){n.uniform2uiv(this.addr,e)}function ty(n,e){n.uniform3uiv(this.addr,e)}function ny(n,e){n.uniform4uiv(this.addr,e)}function iy(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ud,r[a])}function sy(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fd,r[a])}function ry(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dd,r[a])}function ay(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hd,r[a])}function oy(n){switch(n){case 5126:return Gx;case 35664:return Vx;case 35665:return Wx;case 35666:return Xx;case 35674:return Yx;case 35675:return qx;case 35676:return Qx;case 5124:case 35670:return Zx;case 35667:case 35671:return Kx;case 35668:case 35672:return Jx;case 35669:case 35673:return jx;case 5125:return $x;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}var Gc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}},Vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}},Wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function xf(n,e){n.seq.push(e),n.map[e.id]=e}function ly(n,e,t){let i=n.name,s=i.length;for(Ql.lastIndex=0;;){let r=Ql.exec(i),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xf(t,c===void 0?new Gc(o,n,e):new Vc(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Wc(o),xf(t,h)),t=h}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ly(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function yf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var cy=37297,uy=0;function hy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Mf=new Le;function fy(n){Ke._getMatrix(Mf,Ke.workingColorSpace,n);let e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case jo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _f(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hy(n.getShaderSource(e),a)}else return s}function dy(n,e){let t=fy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function py(n,e){let t;switch(e){case wm:t="Linear";break;case Tm:t="Reinhard";break;case bm:t="Cineon";break;case Cm:t="ACESFilmic";break;case Dm:t="AgX";break;case Pm:t="Neutral";break;case Rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ho=new b;function my(){Ke.getLuminanceCoefficients(ho);let n=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function vy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ea(n){return n!==""}function Af(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(n){return n.replace(yy,_y)}var My=new Map;function _y(n,e){let t=Oe[e];if(t===void 0){let i=My.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}var Ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(n){return n.replace(Ay,Sy)}function Sy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ey(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function wy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case fr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ty(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function by(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Sm:e="ENVMAP_BLENDING_MIX";break;case Em:e="ENVMAP_BLENDING_ADD";break}return e}function Cy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ry(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ey(t),c=wy(t),u=Ty(t),h=by(t),f=Cy(t),p=gy(t),v=vy(r),g=s.createProgram(),m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ea).join(`
`),d.length>0&&(d+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),d=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==jn?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Xc(a),a=Af(a,t),a=Sf(a,t),o=Xc(o),o=Af(o,t),o=Sf(o,t),a=Ef(a),o=Ef(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=A+m+a,M=A+d+o,I=yf(s,s.VERTEX_SHADER,E),T=yf(s,s.FRAGMENT_SHADER,M);s.attachShader(g,I),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(R){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(g).trim(),F=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(T).trim(),K=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,I,T);else{let j=_f(s,I,"vertex"),W=_f(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+j+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||G==="")&&(V=!1);V&&(R.diagnostics={runnable:K,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(I),s.deleteShader(T),D=new cr(s,g),S=xy(s,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,cy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=T,this}var Dy=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qc(e),t.set(e,i)),i}},qc=class{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}};function Py(n,e,t,i,s,r,a){let o=new ca,l=new Yc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,k,F){let G=k.fog,K=F.geometry,V=S.isMeshStandardMaterial?k.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=j&&j.mapping===Jo?j.image.height:null,re=v[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=fe!==void 0?fe.length:0,ke=0;K.morphAttributes.position!==void 0&&(ke=1),K.morphAttributes.normal!==void 0&&(ke=2),K.morphAttributes.color!==void 0&&(ke=3);let ft,q,te,ye;if(re){let at=Jn[re];ft=at.vertexShader,q=at.fragmentShader}else ft=S.vertexShader,q=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);let ae=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Ge=F.isBatchedMesh===!0,Et=!!S.map,Qe=!!S.matcap,Rt=!!j,L=!!S.aoMap,Sn=!!S.lightMap,We=!!S.bumpMap,Xe=!!S.normalMap,we=!!S.displacementMap,vt=!!S.emissiveMap,Ee=!!S.metalnessMap,w=!!S.roughnessMap,x=S.anisotropy>0,N=S.clearcoat>0,Q=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,Me=S.transmission>0,oe=x&&!!S.anisotropyMap,de=N&&!!S.clearcoatMap,Ze=N&&!!S.clearcoatNormalMap,$=N&&!!S.clearcoatRoughnessMap,pe=J&&!!S.iridescenceMap,be=J&&!!S.iridescenceThicknessMap,Re=Y&&!!S.sheenColorMap,me=Y&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Fe=!!S.specularColorMap,pt=!!S.specularIntensityMap,P=Me&&!!S.transmissionMap,se=Me&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,he=S.alphaTest>0,le=!!S.alphaHash,Ue=!!S.extensions,Ct=jn;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ct=n.toneMapping);let tn={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:ft,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ti,alphaToCoverage:!!S.alphaToCoverage,map:Et,matcap:Qe,envMap:Rt,envMapMode:Rt&&j.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Sn,bumpMap:We,normalMap:Xe,displacementMap:f&&we,emissiveMap:vt,normalMapObjectSpace:Xe&&S.normalMapType===Bm,normalMapTangentSpace:Xe&&S.normalMapType===sd,metalnessMap:Ee,roughnessMap:w,anisotropy:x,anisotropyMap:oe,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:Ze,clearcoatRoughnessMap:$,dispersion:Q,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:be,sheen:Y,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Ye,specularColorMap:Fe,specularIntensityMap:pt,transmission:Me,transmissionMap:P,thicknessMap:se,gradientMap:X,opaque:S.transparent===!1&&S.blending===ar&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:le,combine:S.combine,mapUv:Et&&g(S.map.channel),aoMapUv:L&&g(S.aoMap.channel),lightMapUv:Sn&&g(S.lightMap.channel),bumpMapUv:We&&g(S.bumpMap.channel),normalMapUv:Xe&&g(S.normalMap.channel),displacementMapUv:we&&g(S.displacementMap.channel),emissiveMapUv:vt&&g(S.emissiveMap.channel),metalnessMapUv:Ee&&g(S.metalnessMap.channel),roughnessMapUv:w&&g(S.roughnessMap.channel),anisotropyMapUv:oe&&g(S.anisotropyMap.channel),clearcoatMapUv:de&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(S.sheenRoughnessMap.channel),specularMapUv:Ye&&g(S.specularMap.channel),specularColorMapUv:Fe&&g(S.specularColorMap.channel),specularIntensityMapUv:pt&&g(S.specularIntensityMap.channel),transmissionMapUv:P&&g(S.transmissionMap.channel),thicknessMapUv:se&&g(S.thicknessMap.channel),alphaMapUv:Z&&g(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xe||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Et||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Et&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wt,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function d(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(y,S),E(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function A(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function E(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){let y=v[S.type],R;if(y){let k=Jn[y];R=_g.clone(k.uniforms)}else R=S.uniforms;return R}function I(S,y){let R;for(let k=0,F=u.length;k<F;k++){let G=u[k];if(G.cacheKey===y){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Ry(n,y,S,r),u.push(R)),R}function T(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:I,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:D}}function Iy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Uy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,p,v,g,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=g,d.group=m),e++,d}function o(h,f,p,v,g,m){let d=a(h,f,p,v,g,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,v,g,m){let d=a(h,f,p,v,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Uy),i.length>1&&i.sort(f||Tf),s.length>1&&s.sort(f||Tf)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function By(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new bf,n.set(i,[a])):s>=r.length?(a=new bf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ly(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Se};break;case"SpotLight":t={position:new b,direction:new b,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function Ny(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Fy=0;function Oy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zy(n){let e=new Ly,t=Ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let s=new b,r=new lt,a=new lt;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,d=0,A=0,E=0,M=0,I=0,T=0,C=0;c.sort(Oy);for(let S=0,y=c.length;S<y;S++){let R=c[S],k=R.color,F=R.intensity,G=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*F,h+=k.g*F,f+=k.b*F;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],F);C++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=V,p++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[g]=V;let j=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,j.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[g]=j.matrix,R.castShadow){let W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=K,M++}g++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let j=R.shadow,W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=R.shadow.matrix,E++}i.point[v]=V,v++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(F),V.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==M||D.numSpotMaps!==I||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,D.directionalLength=p,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=M,D.numSpotMaps=I,D.numLightProbes=C,i.version=Fy++)}function l(c,u){let h=0,f=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let E=c[d];if(E.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Cf(n){let e=new zy(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cf(n),e.set(s,[o])):r>=a.length?(o=new Cf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Qc=class extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vy(n,e,t){let i=new ua,s=new ne,r=new ne,a=new Ve,o=new Qc({depthPacking:Um}),l=new Zc,c={},u=t.maxTextureSize,h={[Cn]:Tt,[Tt]:Cn,[wt]:wt},f=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:ky,fragmentShader:Gy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new ct;v.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Te(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let d=this.type;this.render=function(T,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(gt),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=d!==vi&&this.type===vi,G=d===vi&&this.type!==vi;for(let K=0,V=T.length;K<V;K++){let j=T[K],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let re=W.getFrameExtents();if(s.multiply(re),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,W.mapSize.y=r.y)),W.map===null||F===!0||G===!0){let Ae=this.type!==vi?{minFilter:Dt,magFilter:Dt}:{};W.map!==null&&W.map.dispose(),W.map=new je(s.x,s.y,Ae),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let fe=W.getViewportCount();for(let Ae=0;Ae<fe;Ae++){let ke=W.getViewport(Ae);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),k.viewport(a),W.updateMatrices(j,Ae),i=W.getFrustum(),M(C,D,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&A(W,D),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,R)};function A(T,C){let D=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new je(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,D,p,g,null)}function E(T,C,D,S){let y=null,R=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=D.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=y.uuid,F=C.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let K=G[F];K===void 0&&(K=y.clone(),G[F]=K,C.addEventListener("dispose",I)),y=K}if(y.visible=C.visible,y.wireframe=C.wireframe,S===vi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=n.properties.get(y);k.light=D}return y}function M(T,C,D,S,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let F=e.update(T),G=T.material;if(Array.isArray(G)){let K=F.groups;for(let V=0,j=K.length;V<j;V++){let W=K[V],re=G[W.materialIndex];if(re&&re.visible){let fe=E(T,re,S,y);T.onBeforeShadow(n,T,C,D,F,fe,W),n.renderBufferDirect(D,null,F,fe,T,W),T.onAfterShadow(n,T,C,D,F,fe,W)}}}else if(G.visible){let K=E(T,G,S,y);T.onBeforeShadow(n,T,C,D,F,K,null),n.renderBufferDirect(D,null,F,K,T,null),T.onAfterShadow(n,T,C,D,F,K,null)}}let k=T.children;for(let F=0,G=k.length;F<G;F++)M(k[F],C,D,S,y)}function I(T){T.target.removeEventListener("dispose",I);for(let D in c){let S=c[D],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var Wy={[tc]:sa,[nc]:rc,[ic]:ac,[ur]:sc,[sa]:tc,[rc]:nc,[ac]:ic,[sc]:ur};function Xy(n,e){function t(){let P=!1,se=new Ve,X=null,Z=new Ve(0,0,0,0);return{setMask:function(he){X!==he&&!P&&(n.colorMask(he,he,he,he),X=he)},setLocked:function(he){P=he},setClear:function(he,le,Ue,Ct,tn){tn===!0&&(he*=Ct,le*=Ct,Ue*=Ct),se.set(he,le,Ue,Ct),Z.equals(se)===!1&&(n.clearColor(he,le,Ue,Ct),Z.copy(se))},reset:function(){P=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let P=!1,se=!1,X=null,Z=null,he=null;return{setReversed:function(le){if(se!==le){let Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);let Ct=he;he=null,this.setClear(Ct)}se=le},getReversed:function(){return se},setTest:function(le){le?ae(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(le){X!==le&&!P&&(n.depthMask(le),X=le)},setFunc:function(le){if(se&&(le=Wy[le]),Z!==le){switch(le){case tc:n.depthFunc(n.NEVER);break;case sa:n.depthFunc(n.ALWAYS);break;case nc:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case ic:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case rc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=le}},setLocked:function(le){P=le},setClear:function(le){he!==le&&(se&&(le=1-le),n.clearDepth(le),he=le)},reset:function(){P=!1,X=null,Z=null,he=null,se=!1}}}function s(){let P=!1,se=null,X=null,Z=null,he=null,le=null,Ue=null,Ct=null,tn=null;return{setTest:function(at){P||(at?ae(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(at){se!==at&&!P&&(n.stencilMask(at),se=at)},setFunc:function(at,Nn,ui){(X!==at||Z!==Nn||he!==ui)&&(n.stencilFunc(at,Nn,ui),X=at,Z=Nn,he=ui)},setOp:function(at,Nn,ui){(le!==at||Ue!==Nn||Ct!==ui)&&(n.stencilOp(at,Nn,ui),le=at,Ue=Nn,Ct=ui)},setLocked:function(at){P=at},setClear:function(at){tn!==at&&(n.clearStencil(at),tn=at)},reset:function(){P=!1,se=null,X=null,Z=null,he=null,le=null,Ue=null,Ct=null,tn=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,d=null,A=null,E=null,M=null,I=null,T=null,C=new Se(0,0,0),D=0,S=!1,y=null,R=null,k=null,F=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=j>=2);let re=null,fe={},Ae=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),ft=new Ve().fromArray(Ae),q=new Ve().fromArray(ke);function te(P,se,X,Z){let he=new Uint8Array(4),le=n.createTexture();n.bindTexture(P,le),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<X;Ue++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(se+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return le}let ye={};ye[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(ur),We(!1),Xe(Dh),ae(n.CULL_FACE),L(gt);function ae(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Ce(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Ie(P,se){return h[P]!==se?(n.bindFramebuffer(P,se),h[P]=se,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ge(P,se){let X=p,Z=!1;if(P){X=f.get(se),X===void 0&&(X=[],f.set(se,X));let he=P.textures;if(X.length!==he.length||X[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ue=he.length;le<Ue;le++)X[le]=n.COLOR_ATTACHMENT0+le;X.length=he.length,Z=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Z=!0);Z&&n.drawBuffers(X)}function Et(P){return v!==P?(n.useProgram(P),v=P,!0):!1}let Qe={[ps]:n.FUNC_ADD,[am]:n.FUNC_SUBTRACT,[om]:n.FUNC_REVERSE_SUBTRACT};Qe[lm]=n.MIN,Qe[cm]=n.MAX;let Rt={[um]:n.ZERO,[hm]:n.ONE,[fm]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[xm]:n.SRC_ALPHA_SATURATE,[gm]:n.DST_COLOR,[pm]:n.DST_ALPHA,[dm]:n.ONE_MINUS_SRC_COLOR,[ec]:n.ONE_MINUS_SRC_ALPHA,[vm]:n.ONE_MINUS_DST_COLOR,[mm]:n.ONE_MINUS_DST_ALPHA,[ym]:n.CONSTANT_COLOR,[Mm]:n.ONE_MINUS_CONSTANT_COLOR,[_m]:n.CONSTANT_ALPHA,[Am]:n.ONE_MINUS_CONSTANT_ALPHA};function L(P,se,X,Z,he,le,Ue,Ct,tn,at){if(P===gt){g===!0&&(Ce(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),P!==rm){if(P!==m||at!==S){if((d!==ps||M!==ps)&&(n.blendEquation(n.FUNC_ADD),d=ps,M=ps),at)switch(P){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pt:n.blendFunc(n.ONE,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,E=null,I=null,T=null,C.set(0,0,0),D=0,m=P,S=at}return}he=he||se,le=le||X,Ue=Ue||Z,(se!==d||he!==M)&&(n.blendEquationSeparate(Qe[se],Qe[he]),d=se,M=he),(X!==A||Z!==E||le!==I||Ue!==T)&&(n.blendFuncSeparate(Rt[X],Rt[Z],Rt[le],Rt[Ue]),A=X,E=Z,I=le,T=Ue),(Ct.equals(C)===!1||tn!==D)&&(n.blendColor(Ct.r,Ct.g,Ct.b,tn),C.copy(Ct),D=tn),m=P,S=!1}function Sn(P,se){P.side===wt?Ce(n.CULL_FACE):ae(n.CULL_FACE);let X=P.side===Tt;se&&(X=!X),We(X),P.blending===ar&&P.transparent===!1?L(gt):L(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),vt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){y!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),y=P)}function Xe(P){P!==nm?(ae(n.CULL_FACE),P!==R&&(P===Dh?n.cullFace(n.BACK):P===im?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),R=P}function we(P){P!==k&&(V&&n.lineWidth(P),k=P)}function vt(P,se,X){P?(ae(n.POLYGON_OFFSET_FILL),(F!==se||G!==X)&&(n.polygonOffset(se,X),F=se,G=X)):Ce(n.POLYGON_OFFSET_FILL)}function Ee(P){P?ae(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function w(P){P===void 0&&(P=n.TEXTURE0+K-1),re!==P&&(n.activeTexture(P),re=P)}function x(P,se,X){X===void 0&&(re===null?X=n.TEXTURE0+K-1:X=re);let Z=fe[X];Z===void 0&&(Z={type:void 0,texture:void 0},fe[X]=Z),(Z.type!==P||Z.texture!==se)&&(re!==X&&(n.activeTexture(X),re=X),n.bindTexture(P,se||ye[P]),Z.type=P,Z.texture=se)}function N(){let P=fe[re];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){ft.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ft.copy(P))}function me(P){q.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Ye(P,se){let X=c.get(se);X===void 0&&(X=new WeakMap,c.set(se,X));let Z=X.get(P);Z===void 0&&(Z=n.getUniformBlockIndex(se,P.name),X.set(P,Z))}function Fe(P,se){let Z=c.get(se).get(P);l.get(se)!==Z&&(n.uniformBlockBinding(se,Z,P.__bindingPointIndex),l.set(se,Z))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,fe={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,d=null,A=null,E=null,M=null,I=null,T=null,C=new Se(0,0,0),D=0,S=!1,y=null,R=null,k=null,F=null,G=null,ft.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:Ie,drawBuffers:Ge,useProgram:Et,setBlending:L,setMaterial:Sn,setFlipSided:We,setCullFace:Xe,setLineWidth:we,setPolygonOffset:vt,setScissorTest:Ee,activeTexture:w,bindTexture:x,unbindTexture:N,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:pe,texImage3D:be,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:Ze,texStorage3D:$,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Re,viewport:me,reset:pt}}function Rf(n,e,t,i){let s=Yy(i);switch(t){case jf:return n*e;case ed:return n*e;case td:return n*e*2;case vu:return n*e/s.components*s.byteLength;case xu:return n*e/s.components*s.byteLength;case nd:return n*e*2/s.components*s.byteLength;case yu:return n*e*2/s.components*s.byteLength;case $f:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case Mu:return n*e*4/s.components*s.byteLength;case Ao:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case dc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case To:case Dc:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case id:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yy(n){switch(n){case ht:case Zf:return{byteLength:1,components:1};case aa:case Kf:case ws:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case xs:case pu:case bn:return{byteLength:4,components:1};case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function qy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return p?new OffscreenCanvas(w,x):la("canvas")}function g(w,x,N){let Q=1,J=Ee(w);if((J.width>N||J.height>N)&&(Q=N/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(Q*J.width),Me=Math.floor(Q*J.height);h===void 0&&(h=v(Y,Me));let oe=x?v(Y,Me):h;return oe.width=Y,oe.height=Me,oe.getContext("2d").drawImage(w,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Me+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,x,N,Q,J=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=x;if(x===n.RED&&(N===n.FLOAT&&(Y=n.R32F),N===n.HALF_FLOAT&&(Y=n.R16F),N===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.R8UI),N===n.UNSIGNED_SHORT&&(Y=n.R16UI),N===n.UNSIGNED_INT&&(Y=n.R32UI),N===n.BYTE&&(Y=n.R8I),N===n.SHORT&&(Y=n.R16I),N===n.INT&&(Y=n.R32I)),x===n.RG&&(N===n.FLOAT&&(Y=n.RG32F),N===n.HALF_FLOAT&&(Y=n.RG16F),N===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RG8UI),N===n.UNSIGNED_SHORT&&(Y=n.RG16UI),N===n.UNSIGNED_INT&&(Y=n.RG32UI),N===n.BYTE&&(Y=n.RG8I),N===n.SHORT&&(Y=n.RG16I),N===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),N===n.UNSIGNED_INT&&(Y=n.RGB32UI),N===n.BYTE&&(Y=n.RGB8I),N===n.SHORT&&(Y=n.RGB16I),N===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),N===n.UNSIGNED_INT&&(Y=n.RGBA32UI),N===n.BYTE&&(Y=n.RGBA8I),N===n.SHORT&&(Y=n.RGBA16I),N===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){let Me=J?jo:Ke.getTransfer(Q);N===n.FLOAT&&(Y=n.RGBA32F),N===n.HALF_FLOAT&&(Y=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Y=Me===ut?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(w,x){let N;return w?x===null||x===xs||x===Hi?N=n.DEPTH24_STENCIL8:x===bn?N=n.DEPTH32F_STENCIL8:x===aa&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xs||x===Hi?N=n.DEPTH_COMPONENT24:x===bn?N=n.DEPTH_COMPONENT32F:x===aa&&(N=n.DEPTH_COMPONENT16),N}function I(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dt&&w.minFilter!==zt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){let x=w.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&u.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),y(x)}function D(w){let x=i.get(w);if(x.__webglInit===void 0)return;let N=w.source,Q=f.get(N);if(Q){let J=Q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys(Q).length===0&&f.delete(N)}i.remove(w)}function S(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let N=w.source,Q=f.get(N);delete Q[x.__cacheKey],a.memory.textures--}function y(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let J=0;J<x.__webglFramebuffer[Q].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[Q][J]);else n.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=w.textures;for(let Q=0,J=N.length;Q<J;Q++){let Y=i.get(N[Q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(N[Q])}i.remove(w)}let R=0;function k(){R=0}function F(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function G(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function K(w,x){let N=i.get(w);if(w.isVideoTexture&&we(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,w,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function V(w,x){let N=i.get(w);if(w.version>0&&N.__version!==w.version){q(N,w,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function j(w,x){let N=i.get(w);if(w.version>0&&N.__version!==w.version){q(N,w,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function W(w,x){let N=i.get(w);if(w.version>0&&N.__version!==w.version){te(N,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}let re={[vs]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},fe={[Dt]:n.NEAREST,[Im]:n.NEAREST_MIPMAP_NEAREST,[Xa]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},Ae={[Lm]:n.NEVER,[km]:n.ALWAYS,[Nm]:n.LESS,[rd]:n.LEQUAL,[Fm]:n.EQUAL,[Hm]:n.GEQUAL,[Om]:n.GREATER,[zm]:n.NOTEQUAL};function ke(w,x){if(x.type===bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===zt||x.magFilter===_l||x.magFilter===Xa||x.magFilter===yi||x.minFilter===zt||x.minFilter===_l||x.minFilter===Xa||x.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,re[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,re[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,re[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dt||x.minFilter!==Xa&&x.minFilter!==yi||x.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ft(w,x){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));let Q=x.source,J=f.get(Q);J===void 0&&(J={},f.set(Q,J));let Y=G(x);if(Y!==w.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[Y].usedTimes++;let Me=J[w.__cacheKey];Me!==void 0&&(J[w.__cacheKey].usedTimes--,Me.usedTimes===0&&S(x)),w.__cacheKey=Y,w.__webglTexture=J[Y].texture}return N}function q(w,x,N){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);let J=ft(w,x),Y=x.source;t.bindTexture(Q,w.__webglTexture,n.TEXTURE0+N);let Me=i.get(Y);if(Y.version!==Me.__version||J===!0){t.activeTexture(n.TEXTURE0+N);let oe=Ke.getPrimaries(Ke.workingColorSpace),de=x.colorSpace===Tn?null:Ke.getPrimaries(x.colorSpace),Ze=x.colorSpace===Tn||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let $=g(x.image,!1,s.maxTextureSize);$=vt(x,$);let pe=r.convert(x.format,x.colorSpace),be=r.convert(x.type),Re=E(x.internalFormat,pe,be,x.colorSpace,x.isVideoTexture);ke(Q,x);let me,Ye=x.mipmaps,Fe=x.isVideoTexture!==!0,pt=Me.__version===void 0||J===!0,P=Y.dataReady,se=I(x,$);if(x.isDepthTexture)Re=M(x.format===ki,x.type),pt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Re,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Re,$.width,$.height,0,pe,be,null));else if(x.isDataTexture)if(Ye.length>0){Fe&&pt&&t.texStorage2D(n.TEXTURE_2D,se,Re,Ye[0].width,Ye[0].height);for(let X=0,Z=Ye.length;X<Z;X++)me=Ye[X],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,pe,be,me.data):t.texImage2D(n.TEXTURE_2D,X,Re,me.width,me.height,0,pe,be,me.data);x.generateMipmaps=!1}else Fe?(pt&&t.texStorage2D(n.TEXTURE_2D,se,Re,$.width,$.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,pe,be,$.data)):t.texImage2D(n.TEXTURE_2D,0,Re,$.width,$.height,0,pe,be,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Re,Ye[0].width,Ye[0].height,$.depth);for(let X=0,Z=Ye.length;X<Z;X++)if(me=Ye[X],x.format!==Gn)if(pe!==null)if(Fe){if(P)if(x.layerUpdates.size>0){let he=Rf(me.width,me.height,x.format,x.type);for(let le of x.layerUpdates){let Ue=me.data.subarray(le*he/me.data.BYTES_PER_ELEMENT,(le+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,le,me.width,me.height,1,pe,Ue)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,$.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,$.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,$.depth,pe,be,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,$.depth,0,pe,be,me.data)}else{Fe&&pt&&t.texStorage2D(n.TEXTURE_2D,se,Re,Ye[0].width,Ye[0].height);for(let X=0,Z=Ye.length;X<Z;X++)me=Ye[X],x.format!==Gn?pe!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,pe,be,me.data):t.texImage2D(n.TEXTURE_2D,X,Re,me.width,me.height,0,pe,be,me.data)}else if(x.isDataArrayTexture)if(Fe){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Re,$.width,$.height,$.depth),P)if(x.layerUpdates.size>0){let X=Rf($.width,$.height,x.format,x.type);for(let Z of x.layerUpdates){let he=$.data.subarray(Z*X/$.data.BYTES_PER_ELEMENT,(Z+1)*X/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,$.width,$.height,1,pe,be,he)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,pe,be,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,$.width,$.height,$.depth,0,pe,be,$.data);else if(x.isData3DTexture)Fe?(pt&&t.texStorage3D(n.TEXTURE_3D,se,Re,$.width,$.height,$.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,pe,be,$.data)):t.texImage3D(n.TEXTURE_3D,0,Re,$.width,$.height,$.depth,0,pe,be,$.data);else if(x.isFramebufferTexture){if(pt)if(Fe)t.texStorage2D(n.TEXTURE_2D,se,Re,$.width,$.height);else{let X=$.width,Z=$.height;for(let he=0;he<se;he++)t.texImage2D(n.TEXTURE_2D,he,Re,X,Z,0,pe,be,null),X>>=1,Z>>=1}}else if(Ye.length>0){if(Fe&&pt){let X=Ee(Ye[0]);t.texStorage2D(n.TEXTURE_2D,se,Re,X.width,X.height)}for(let X=0,Z=Ye.length;X<Z;X++)me=Ye[X],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe,be,me):t.texImage2D(n.TEXTURE_2D,X,Re,pe,be,me);x.generateMipmaps=!1}else if(Fe){if(pt){let X=Ee($);t.texStorage2D(n.TEXTURE_2D,se,Re,X.width,X.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,be,$)}else t.texImage2D(n.TEXTURE_2D,0,Re,pe,be,$);m(x)&&d(Q),Me.__version=Y.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function te(w,x,N){if(x.image.length!==6)return;let Q=ft(w,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);let Y=i.get(J);if(J.version!==Y.__version||Q===!0){t.activeTexture(n.TEXTURE0+N);let Me=Ke.getPrimaries(Ke.workingColorSpace),oe=x.colorSpace===Tn?null:Ke.getPrimaries(x.colorSpace),de=x.colorSpace===Tn||Me===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!Ze&&!$?pe[Z]=g(x.image[Z],!0,s.maxCubemapSize):pe[Z]=$?x.image[Z].image:x.image[Z],pe[Z]=vt(x,pe[Z]);let be=pe[0],Re=r.convert(x.format,x.colorSpace),me=r.convert(x.type),Ye=E(x.internalFormat,Re,me,x.colorSpace),Fe=x.isVideoTexture!==!0,pt=Y.__version===void 0||Q===!0,P=J.dataReady,se=I(x,be);ke(n.TEXTURE_CUBE_MAP,x);let X;if(Ze){Fe&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ye,be.width,be.height);for(let Z=0;Z<6;Z++){X=pe[Z].mipmaps;for(let he=0;he<X.length;he++){let le=X[he];x.format!==Gn?Re!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,le.width,le.height,Re,me,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ye,le.width,le.height,0,Re,me,le.data)}}}else{if(X=x.mipmaps,Fe&&pt){X.length>0&&se++;let Z=Ee(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if($){Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Re,me,pe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,pe[Z].width,pe[Z].height,0,Re,me,pe[Z].data);for(let he=0;he<X.length;he++){let Ue=X[he].image[Z].image;Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ue.width,Ue.height,Re,me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ye,Ue.width,Ue.height,0,Re,me,Ue.data)}}else{Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,me,pe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Re,me,pe[Z]);for(let he=0;he<X.length;he++){let le=X[he];Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Re,me,le.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ye,Re,me,le.image[Z])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ye(w,x,N,Q,J,Y){let Me=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),de=E(N.internalFormat,Me,oe,N.colorSpace),Ze=i.get(x),$=i.get(N);if($.__renderTarget=x,!Ze.__hasExternalTextures){let pe=Math.max(1,x.width>>Y),be=Math.max(1,x.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,de,pe,be,x.depth,0,Me,oe,null):t.texImage2D(J,Y,de,pe,be,0,Me,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,$.__webglTexture,0,We(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,$.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(w,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let Q=x.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Y=M(x.stencilBuffer,J),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=We(x);Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Y,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{let Q=x.textures;for(let J=0;J<Q.length;J++){let Y=Q[J],Me=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),de=E(Y.internalFormat,Me,oe,Y.colorSpace),Ze=We(x);N&&Xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,de,x.width,x.height):Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,de,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,de,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let J=Q.__webglTexture,Y=We(x);if(x.depthTexture.format===or)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===ki)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(w){let x=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ce(x.__webglFramebuffer,w)}else if(N){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[Q],w,!1);else{let J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(w,x,N){let Q=i.get(w);x!==void 0&&ye(Q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ie(w)}function Et(w){let x=w.texture,N=i.get(w),Q=i.get(x);w.addEventListener("dispose",C);let J=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[oe][de]=n.createFramebuffer()}else N.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)N.__webglFramebuffer[oe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Me)for(let oe=0,de=J.length;oe<de;oe++){let Ze=i.get(J[oe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Xe(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let de=J[oe];N.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);let Ze=r.convert(de.format,de.colorSpace),$=r.convert(de.type),pe=E(de.internalFormat,Ze,$,de.colorSpace,w.isXRRenderTarget===!0),be=We(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,pe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ye(N.__webglFramebuffer[oe][de],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ye(N.__webglFramebuffer[oe],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,de=J.length;oe<de;oe++){let Ze=J[oe],$=i.get(Ze);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),ke(n.TEXTURE_2D,Ze),ye(N.__webglFramebuffer,w,Ze,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ze)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),ke(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ye(N.__webglFramebuffer[de],w,x,n.COLOR_ATTACHMENT0,oe,de);else ye(N.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,oe,0);m(x)&&d(oe),t.unbindTexture()}w.depthBuffer&&Ie(w)}function Qe(w){let x=w.textures;for(let N=0,Q=x.length;N<Q;N++){let J=x[N];if(m(J)){let Y=A(w),Me=i.get(J).__webglTexture;t.bindTexture(Y,Me),d(Y),t.unbindTexture()}}}let Rt=[],L=[];function Sn(w){if(w.samples>0){if(Xe(w)===!1){let x=w.textures,N=w.width,Q=w.height,J=n.COLOR_BUFFER_BIT,Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),oe=x.length>1;if(oe)for(let de=0;de<x.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<x.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);let Ze=i.get(x[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,N,Q,0,0,N,Q,J,n.NEAREST),l===!0&&(Rt.length=0,L.length=0,Rt.push(n.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Rt.push(Y),L.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<x.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);let Ze=i.get(x[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function We(w){return Math.min(s.maxSamples,w.samples)}function Xe(w){let x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(w){let x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function vt(w,x){let N=w.colorSpace,Q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ti&&N!==Tn&&(Ke.getTransfer(N)===ut?(Q!==Gn||J!==ht)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Xe}function Qy(n,e){function t(i,s=Tn){let r,a=Ke.getTransfer(s);if(i===ht)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===ws)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===$f)return n.RGB;if(i===Gn)return n.RGBA;if(i===ed)return n.LUMINANCE;if(i===td)return n.LUMINANCE_ALPHA;if(i===or)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===vu)return n.RED;if(i===xu)return n.RED_INTEGER;if(i===nd)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===Ao||i===So||i===Eo||i===wo)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===pc)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===vc||i===xc||i===yc||i===Mc||i===_c||i===Ac||i===Sc||i===Ec||i===wc||i===Tc||i===bc||i===Cc||i===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===Dc||i===Pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===id||i===Ic||i===Uc||i===Bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===To)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Kc=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Lt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zy={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pe({vertexShader:Ky,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends fn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null,g=new Jc,m=t.getContextAttributes(),d=null,A=null,E=[],M=[],I=new ne,T=null,C=new Yt;C.viewport=new Ve;let D=new Yt;D.viewport=new Ve;let S=[C,D],y=new Kc,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=E[q];return te===void 0&&(te=new ia,E[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=E[q];return te===void 0&&(te=new ia,E[q]=te),te.getGripSpace()},this.getHand=function(q){let te=E[q];return te===void 0&&(te=new ia,E[q]=te),te.getHandSpace()};function F(q){let te=M.indexOf(q.inputSource);if(te===-1)return;let ye=E[te];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||a),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let q=0;q<E.length;q++){let te=M[q];te!==null&&(M[q]=null,E[q].disconnect(te))}R=null,k=null,g.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,A=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new je(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:ht,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ye=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ki:or,ye=m.stencil?Hi:xs);let Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new je(f.textureWidth,f.textureHeight,{format:Gn,type:ht,depthTexture:new Vi(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let te=0;te<q.removed.length;te++){let ye=q.removed[te],ae=M.indexOf(ye);ae>=0&&(M[ae]=null,E[ae].disconnect(ye))}for(let te=0;te<q.added.length;te++){let ye=q.added[te],ae=M.indexOf(ye);if(ae===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=M.length){M.push(ye),ae=Ie;break}else if(M[Ie]===null){M[Ie]=ye,ae=Ie;break}if(ae===-1)break}let Ce=E[ae];Ce&&Ce.connect(ye)}}let V=new b,j=new b;function W(q,te,ye){V.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);let ae=V.distanceTo(j),Ce=te.projectionMatrix.elements,Ie=ye.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),Et=Ce[14]/(Ce[10]+1),Qe=(Ce[9]+1)/Ce[5],Rt=(Ce[9]-1)/Ce[5],L=(Ce[8]-1)/Ce[0],Sn=(Ie[8]+1)/Ie[0],We=Ge*L,Xe=Ge*Sn,we=ae/(-L+Sn),vt=we*-L;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(vt),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ee=Ge+we,w=Et+we,x=We-vt,N=Xe+(ae-vt),Q=Qe*Et/w*Ee,J=Rt*Et/w*Ee;q.projectionMatrix.makePerspective(x,N,Q,J,Ee,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,ye=q.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),y.near=D.near=C.near=te,y.far=D.far=C.far=ye,(R!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),C.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,y.layers.mask=C.layers.mask|D.layers.mask;let ae=q.parent,Ce=y.cameras;re(y,ae);for(let Ie=0;Ie<Ce.length;Ie++)re(Ce[Ie],ae);Ce.length===2?W(y,C,D):y.projectionMatrix.copy(C.projectionMatrix),fe(q,y,ae)};function fe(q,te,ye){ye===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Ae=null;function ke(q,te){if(u=te.getViewerPose(c||a),v=te,u!==null){let ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ae=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ie=0;Ie<ye.length;Ie++){let Ge=ye[Ie],Et=null;if(p!==null)Et=p.getViewport(Ge);else{let Rt=h.getViewSubImage(f,Ge);Et=Rt.viewport,Ie===0&&(e.setRenderTargetTextures(A,Rt.colorTexture,f.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(A))}let Qe=S[Ie];Qe===void 0&&(Qe=new Yt,Qe.layers.enable(Ie),Qe.viewport=new Ve,S[Ie]=Qe),Qe.matrix.fromArray(Ge.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ge.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Et.x,Et.y,Et.width,Et.height),Ie===0&&(y.matrix.copy(Qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Qe)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let Ie=h.getDepthInformation(ye[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,s.renderState)}}for(let ye=0;ye<E.length;ye++){let ae=M[ye],Ce=E[ye];ae!==null&&Ce!==void 0&&Ce.update(ae,te,c||a)}Ae&&Ae(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}let ft=new cd;ft.setAnimationLoop(ke),this.setAnimationLoop=function(q){Ae=q},this.dispose=function(){}}},fs=new $n,jy=new lt;function $y(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ld(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Tt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Tt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),E=A.envMap,M=A.envMapRotation;E&&(m.envMap.value=E,fs.copy(M),fs.x*=-1,fs.y*=-1,fs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(fs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eM(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){let M=E.program;i.uniformBlockBinding(A,M)}function c(A,E){let M=s[A.id];M===void 0&&(v(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));let I=E.program;i.updateUBOMapping(A,I);let T=e.render.frame;r[A.id]!==T&&(f(A),r[A.id]=T)}function u(A){let E=h();A.__bindingPointIndex=E;let M=n.createBuffer(),I=A.__size,T=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let E=s[A.id],M=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,C=M.length;T<C;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,y=D.length;S<y;S++){let R=D[S];if(p(R,T,S,I)===!0){let k=R.__offset,F=Array.isArray(R.value)?R.value:[R.value],G=0;for(let K=0;K<F.length;K++){let V=F[K],j=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,k+G,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,E,M,I){let T=A.value,C=E+"_"+M;if(I[C]===void 0)return typeof T=="number"||typeof T=="boolean"?I[C]=T:I[C]=T.clone(),!0;{let D=I[C];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return I[C]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function v(A){let E=A.uniforms,M=0,I=16;for(let C=0,D=E.length;C<D;C++){let S=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,R=S.length;y<R;y++){let k=S[y],F=Array.isArray(k.value)?k.value:[k.value];for(let G=0,K=F.length;G<K;G++){let V=F[G],j=g(V),W=M%I,re=W%j.boundary,fe=W+re;M+=re,fe!==0&&I-fe<j.storage&&(M+=I-fe),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=j.storage}}}let T=M%I;return T>0&&(M+=I-T),A.__size=M,A.__cache={},this}function g(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){let E=A.target;E.removeEventListener("dispose",m);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Lo=class{constructor(e={}){let{canvas:t=sg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=new Uint32Array(4),g=new Int32Array(4),m=null,d=null,A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=jn,this.toneMappingExposure=1;let M=this,I=!1,T=0,C=0,D=null,S=-1,y=null,R=new Ve,k=new Ve,F=null,G=new Se(0),K=0,V=t.width,j=t.height,W=1,re=null,fe=null,Ae=new Ve(0,0,V,j),ke=new Ve(0,0,V,j),ft=!1,q=new ua,te=!1,ye=!1,ae=new lt,Ce=new lt,Ie=new b,Ge=new Ve,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Rt(){return D===null?W:1}let L=i;function Sn(_,U){return t.getContext(_,U)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){let U="webgl2";if(L=Sn(U,_),L===null)throw Sn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let We,Xe,we,vt,Ee,w,x,N,Q,J,Y,Me,oe,de,Ze,$,pe,be,Re,me,Ye,Fe,pt,P;function se(){We=new gx(L),We.init(),Fe=new Qy(L,We),Xe=new ux(L,We,e,Fe),we=new Xy(L,We),Xe.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),vt=new yx(L),Ee=new Iy,w=new qy(L,We,we,Ee,Xe,Fe,vt),x=new fx(M),N=new mx(M),Q=new Tg(L),pt=new lx(L,Q),J=new vx(L,Q,vt,pt),Y=new _x(L,J,Q,vt),Re=new Mx(L,Xe,w),$=new hx(Ee),Me=new Py(M,x,N,We,Xe,pt,$),oe=new $y(M,Ee),de=new By,Ze=new Hy(We),be=new ox(M,x,N,we,Y,p,l),pe=new Vy(M,Y,Xe),P=new eM(L,vt,Xe,we),me=new cx(L,We,vt),Ye=new xx(L,We,vt),vt.programs=Me.programs,M.capabilities=Xe,M.extensions=We,M.properties=Ee,M.renderLists=de,M.shadowMap=pe,M.state=we,M.info=vt}se();let X=new jc(M,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let _=We.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=We.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(_){_!==void 0&&(W=_,this.setSize(V,j,!1))},this.getSize=function(_){return _.set(V,j)},this.setSize=function(_,U,O=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=_,j=U,t.width=Math.floor(_*W),t.height=Math.floor(U*W),O===!0&&(t.style.width=_+"px",t.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(V*W,j*W).floor()},this.setDrawingBufferSize=function(_,U,O){V=_,j=U,W=O,t.width=Math.floor(_*O),t.height=Math.floor(U*O),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(Ae)},this.setViewport=function(_,U,O,z){_.isVector4?Ae.set(_.x,_.y,_.z,_.w):Ae.set(_,U,O,z),we.viewport(R.copy(Ae).multiplyScalar(W).round())},this.getScissor=function(_){return _.copy(ke)},this.setScissor=function(_,U,O,z){_.isVector4?ke.set(_.x,_.y,_.z,_.w):ke.set(_,U,O,z),we.scissor(k.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(_){we.setScissorTest(ft=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){fe=_},this.getClearColor=function(_){return _.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(_=!0,U=!0,O=!0){let z=0;if(_){let B=!1;if(D!==null){let ee=D.texture.format;B=ee===Mu||ee===yu||ee===xu}if(B){let ee=D.texture.type,ce=ee===ht||ee===xs||ee===aa||ee===Hi||ee===mu||ee===gu,ge=be.getClearColor(),ve=be.getClearAlpha(),De=ge.r,Be=ge.g,xe=ge.b;ce?(v[0]=De,v[1]=Be,v[2]=xe,v[3]=ve,L.clearBufferuiv(L.COLOR,0,v)):(g[0]=De,g[1]=Be,g[2]=xe,g[3]=ve,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),O&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),Ze.dispose(),Ee.dispose(),x.dispose(),N.dispose(),Y.dispose(),pt.dispose(),P.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ah),X.removeEventListener("sessionend",Sh),as.stop()};function Z(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let _=vt.autoReset,U=pe.enabled,O=pe.autoUpdate,z=pe.needsUpdate,B=pe.type;se(),vt.autoReset=_,pe.enabled=U,pe.autoUpdate=O,pe.needsUpdate=z,pe.type=B}function le(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ue(_){let U=_.target;U.removeEventListener("dispose",Ue),Ct(U)}function Ct(_){tn(_),Ee.remove(_)}function tn(_){let U=Ee.get(_).programs;U!==void 0&&(U.forEach(function(O){Me.releaseProgram(O)}),_.isShaderMaterial&&Me.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,O,z,B,ee){U===null&&(U=Et);let ce=B.isMesh&&B.matrixWorld.determinant()<0,ge=$p(_,U,O,z,B);we.setMaterial(z,ce);let ve=O.index,De=1;if(z.wireframe===!0){if(ve=J.getWireframeAttribute(O),ve===void 0)return;De=2}let Be=O.drawRange,xe=O.attributes.position,Je=Be.start*De,mt=(Be.start+Be.count)*De;ee!==null&&(Je=Math.max(Je,ee.start*De),mt=Math.min(mt,(ee.start+ee.count)*De)),ve!==null?(Je=Math.max(Je,0),mt=Math.min(mt,ve.count)):xe!=null&&(Je=Math.max(Je,0),mt=Math.min(mt,xe.count));let xt=mt-Je;if(xt<0||xt===1/0)return;pt.setup(B,z,ge,O,ve);let hn,nt=me;if(ve!==null&&(hn=Q.get(ve),nt=Ye,nt.setIndex(hn)),B.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*Rt()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(B.isLine){let _e=z.linewidth;_e===void 0&&(_e=1),we.setLineWidth(_e*Rt()),B.isLineSegments?nt.setMode(L.LINES):B.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else B.isPoints?nt.setMode(L.POINTS):B.isSprite&&nt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let _e=B._multiDrawStarts,hi=B._multiDrawCounts,it=B._multiDrawCount,Fn=ve?Q.get(ve).bytesPerElement:1,zs=Ee.get(z).currentProgram.getUniforms();for(let pn=0;pn<it;pn++)zs.setValue(L,"_gl_DrawID",pn),nt.render(_e[pn]/Fn,hi[pn])}else if(B.isInstancedMesh)nt.renderInstances(Je,xt,B.count);else if(O.isInstancedBufferGeometry){let _e=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,hi=Math.min(O.instanceCount,_e);nt.renderInstances(Je,xt,hi)}else nt.render(Je,xt)};function at(_,U,O){_.transparent===!0&&_.side===wt&&_.forceSinglePass===!1?(_.side=Tt,_.needsUpdate=!0,Wa(_,U,O),_.side=Cn,_.needsUpdate=!0,Wa(_,U,O),_.side=wt):Wa(_,U,O)}this.compile=function(_,U,O=null){O===null&&(O=_),d=Ze.get(O),d.init(U),E.push(d),O.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),_!==O&&_.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let z=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ee=B.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){let ge=ee[ce];at(ge,O,B),z.add(ge)}else at(ee,O,B),z.add(ee)}),E.pop(),d=null,z},this.compileAsync=function(_,U,O=null){let z=this.compile(_,U,O);return new Promise(B=>{function ee(){if(z.forEach(function(ce){Ee.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){B(_);return}setTimeout(ee,10)}We.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Nn=null;function ui(_){Nn&&Nn(_)}function Ah(){as.stop()}function Sh(){as.start()}let as=new cd;as.setAnimationLoop(ui),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(_){Nn=_,X.setAnimationLoop(_),_===null?as.stop():as.start()},X.addEventListener("sessionstart",Ah),X.addEventListener("sessionend",Sh),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,U,D),d=Ze.get(_,E.length),d.init(U),E.push(d),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,te=$.init(this.clippingPlanes,ye),m=de.get(_,A.length),m.init(),A.push(m),X.enabled===!0&&X.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&Ml(ee,U,-1/0,M.sortObjects)}Ml(_,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,fe),Qe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Qe&&be.addToRenderList(m,_),this.info.render.frame++,te===!0&&$.beginShadows();let O=d.state.shadowsArray;pe.render(O,_,U),te===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,B=m.transmissive;if(d.setupLights(),U.isArrayCamera){let ee=U.cameras;if(B.length>0)for(let ce=0,ge=ee.length;ce<ge;ce++){let ve=ee[ce];wh(z,B,_,ve)}Qe&&be.render(_);for(let ce=0,ge=ee.length;ce<ge;ce++){let ve=ee[ce];Eh(m,_,ve,ve.viewport)}}else B.length>0&&wh(z,B,_,U),Qe&&be.render(_),Eh(m,_,U);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(M,_,U),pt.resetDefaultState(),S=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],te===!0&&$.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ml(_,U,O,z){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)O=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||q.intersectsSprite(_)){z&&Ge.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ce);let ce=Y.update(_),ge=_.material;ge.visible&&m.push(_,ce,ge,O,Ge.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||q.intersectsObject(_))){let ce=Y.update(_),ge=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ge.copy(_.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ge.copy(ce.boundingSphere.center)),Ge.applyMatrix4(_.matrixWorld).applyMatrix4(Ce)),Array.isArray(ge)){let ve=ce.groups;for(let De=0,Be=ve.length;De<Be;De++){let xe=ve[De],Je=ge[xe.materialIndex];Je&&Je.visible&&m.push(_,ce,Je,O,Ge.z,xe)}}else ge.visible&&m.push(_,ce,ge,O,Ge.z,null)}}let ee=_.children;for(let ce=0,ge=ee.length;ce<ge;ce++)Ml(ee[ce],U,O,z)}function Eh(_,U,O,z){let B=_.opaque,ee=_.transmissive,ce=_.transparent;d.setupLightsView(O),te===!0&&$.setGlobalState(M.clippingPlanes,O),z&&we.viewport(R.copy(z)),B.length>0&&Va(B,U,O),ee.length>0&&Va(ee,U,O),ce.length>0&&Va(ce,U,O),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function wh(_,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new je(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?ws:ht,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let ee=d.state.transmissionRenderTarget[z.id],ce=z.viewport||R;ee.setSize(ce.z,ce.w);let ge=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(G),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),Qe&&be.render(O);let ve=M.toneMapping;M.toneMapping=jn;let De=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),te===!0&&$.setGlobalState(M.clippingPlanes,z),Va(_,O,z),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),We.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let xe=0,Je=U.length;xe<Je;xe++){let mt=U[xe],xt=mt.object,hn=mt.geometry,nt=mt.material,_e=mt.group;if(nt.side===wt&&xt.layers.test(z.layers)){let hi=nt.side;nt.side=Tt,nt.needsUpdate=!0,Th(xt,O,z,hn,nt,_e),nt.side=hi,nt.needsUpdate=!0,Be=!0}}Be===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}M.setRenderTarget(ge),M.setClearColor(G,K),De!==void 0&&(z.viewport=De),M.toneMapping=ve}function Va(_,U,O){let z=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ee=_.length;B<ee;B++){let ce=_[B],ge=ce.object,ve=ce.geometry,De=z===null?ce.material:z,Be=ce.group;ge.layers.test(O.layers)&&Th(ge,U,O,ve,De,Be)}}function Th(_,U,O,z,B,ee){_.onBeforeRender(M,U,O,z,B,ee),_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(M,U,O,z,_,ee),B.transparent===!0&&B.side===wt&&B.forceSinglePass===!1?(B.side=Tt,B.needsUpdate=!0,M.renderBufferDirect(O,U,z,B,_,ee),B.side=Cn,B.needsUpdate=!0,M.renderBufferDirect(O,U,z,B,_,ee),B.side=wt):M.renderBufferDirect(O,U,z,B,_,ee),_.onAfterRender(M,U,O,z,B,ee)}function Wa(_,U,O){U.isScene!==!0&&(U=Et);let z=Ee.get(_),B=d.state.lights,ee=d.state.shadowsArray,ce=B.state.version,ge=Me.getParameters(_,B.state,ee,U,O),ve=Me.getProgramCacheKey(ge),De=z.programs;z.environment=_.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(_.isMeshStandardMaterial?N:x).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,De===void 0&&(_.addEventListener("dispose",Ue),De=new Map,z.programs=De);let Be=De.get(ve);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===ce)return Ch(_,ge),Be}else ge.uniforms=Me.getUniforms(_),_.onBeforeCompile(ge,M),Be=Me.acquireProgram(ge,ve),De.set(ve,Be),z.uniforms=ge.uniforms;let xe=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(xe.clippingPlanes=$.uniform),Ch(_,ge),z.needsLights=tm(_),z.lightsStateVersion=ce,z.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.directionalShadowMap.value=B.state.directionalShadowMap,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotShadowMap.value=B.state.spotShadowMap,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMap.value=B.state.pointShadowMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=Be,z.uniformsList=null,Be}function bh(_){if(_.uniformsList===null){let U=_.currentProgram.getUniforms();_.uniformsList=cr.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function Ch(_,U){let O=Ee.get(_);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function $p(_,U,O,z,B){U.isScene!==!0&&(U=Et),w.resetTextureUnits();let ee=U.fog,ce=z.isMeshStandardMaterial?U.environment:null,ge=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ti,ve=(z.isMeshStandardMaterial?N:x).get(z.envMap||ce),De=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Be=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xe=!!O.morphAttributes.position,Je=!!O.morphAttributes.normal,mt=!!O.morphAttributes.color,xt=jn;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=M.toneMapping);let hn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=hn!==void 0?hn.length:0,_e=Ee.get(z),hi=d.state.lights;if(te===!0&&(ye===!0||_!==y)){let En=_===y&&z.id===S;$.setState(z,_,En)}let it=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==hi.state.version||_e.outputColorSpace!==ge||B.isBatchedMesh&&_e.batching===!1||!B.isBatchedMesh&&_e.batching===!0||B.isBatchedMesh&&_e.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&_e.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&_e.instancing===!1||!B.isInstancedMesh&&_e.instancing===!0||B.isSkinnedMesh&&_e.skinning===!1||!B.isSkinnedMesh&&_e.skinning===!0||B.isInstancedMesh&&_e.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&_e.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&_e.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&_e.instancingMorph===!1&&B.morphTexture!==null||_e.envMap!==ve||z.fog===!0&&_e.fog!==ee||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==$.numPlanes||_e.numIntersection!==$.numIntersection)||_e.vertexAlphas!==De||_e.vertexTangents!==Be||_e.morphTargets!==xe||_e.morphNormals!==Je||_e.morphColors!==mt||_e.toneMapping!==xt||_e.morphTargetsCount!==nt)&&(it=!0):(it=!0,_e.__version=z.version);let Fn=_e.currentProgram;it===!0&&(Fn=Wa(z,U,B));let zs=!1,pn=!1,Hr=!1,yt=Fn.getUniforms(),Kn=_e.uniforms;if(we.useProgram(Fn.program)&&(zs=!0,pn=!0,Hr=!0),z.id!==S&&(S=z.id,pn=!0),zs||y!==_){we.buffers.depth.getReversed()?(ae.copy(_.projectionMatrix),ag(ae),og(ae),yt.setValue(L,"projectionMatrix",ae)):yt.setValue(L,"projectionMatrix",_.projectionMatrix),yt.setValue(L,"viewMatrix",_.matrixWorldInverse);let Pi=yt.map.cameraPosition;Pi!==void 0&&Pi.setValue(L,Ie.setFromMatrixPosition(_.matrixWorld)),Xe.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(L,"isOrthographic",_.isOrthographicCamera===!0),y!==_&&(y=_,pn=!0,Hr=!0)}if(B.isSkinnedMesh){yt.setOptional(L,B,"bindMatrix"),yt.setOptional(L,B,"bindMatrixInverse");let En=B.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),yt.setValue(L,"boneTexture",En.boneTexture,w))}B.isBatchedMesh&&(yt.setOptional(L,B,"batchingTexture"),yt.setValue(L,"batchingTexture",B._matricesTexture,w),yt.setOptional(L,B,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",B._indirectTexture,w),yt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",B._colorsTexture,w));let kr=O.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&Re.update(B,O,Fn),(pn||_e.receiveShadow!==B.receiveShadow)&&(_e.receiveShadow=B.receiveShadow,yt.setValue(L,"receiveShadow",B.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Kn.envMap.value=ve,Kn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Kn.envMapIntensity.value=U.environmentIntensity),pn&&(yt.setValue(L,"toneMappingExposure",M.toneMappingExposure),_e.needsLights&&em(Kn,Hr),ee&&z.fog===!0&&oe.refreshFogUniforms(Kn,ee),oe.refreshMaterialUniforms(Kn,z,W,j,d.state.transmissionRenderTarget[_.id]),cr.upload(L,bh(_e),Kn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cr.upload(L,bh(_e),Kn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(L,"center",B.center),yt.setValue(L,"modelViewMatrix",B.modelViewMatrix),yt.setValue(L,"normalMatrix",B.normalMatrix),yt.setValue(L,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let En=z.uniformsGroups;for(let Pi=0,Ii=En.length;Pi<Ii;Pi++){let Rh=En[Pi];P.update(Rh,Fn),P.bind(Rh,Fn)}}return Fn}function em(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function tm(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,U,O){Ee.get(_.texture).__webglTexture=U,Ee.get(_.depthTexture).__webglTexture=O;let z=Ee.get(_);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,U){let O=Ee.get(_);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(_,U=0,O=0){D=_,T=U,C=O;let z=!0,B=null,ee=!1,ce=!1;if(_){let ve=Ee.get(_);if(ve.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ve.__webglFramebuffer===void 0)w.setupRenderTarget(_);else if(ve.__hasExternalTextures)w.rebindTextures(_,Ee.get(_.texture).__webglTexture,Ee.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let xe=_.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Ee.has(xe)&&(_.width!==xe.image.width||_.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(_)}}let De=_.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ce=!0);let Be=Ee.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?B=Be[U][O]:B=Be[U],ee=!0):_.samples>0&&w.useMultisampledRTT(_)===!1?B=Ee.get(_).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[O]:B=Be,R.copy(_.viewport),k.copy(_.scissor),F=_.scissorTest}else R.copy(Ae).multiplyScalar(W).floor(),k.copy(ke).multiplyScalar(W).floor(),F=ft;if(we.bindFramebuffer(L.FRAMEBUFFER,B)&&z&&we.drawBuffers(_,B),we.viewport(R),we.scissor(k),we.setScissorTest(F),ee){let ve=Ee.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,O)}else if(ce){let ve=Ee.get(_.texture),De=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,O||0,De)}S=-1},this.readRenderTargetPixels=function(_,U,O,z,B,ee,ce){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ee.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){we.bindFramebuffer(L.FRAMEBUFFER,ge);try{let ve=_.texture,De=ve.format,Be=ve.type;if(!Xe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-z&&O>=0&&O<=_.height-B&&L.readPixels(U,O,z,B,Fe.convert(De),Fe.convert(Be),ee)}finally{let ve=D!==null?Ee.get(D).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(_,U,O,z,B,ee,ce){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ee.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){let ve=_.texture,De=ve.format,Be=ve.type;if(!Xe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=_.width-z&&O>=0&&O<=_.height-B){we.bindFramebuffer(L.FRAMEBUFFER,ge);let xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,xe),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(U,O,z,B,Fe.convert(De),Fe.convert(Be),0);let Je=D!==null?Ee.get(D).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Je);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await rg(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(xe),L.deleteSync(mt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,U=null,O=0){_.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,_=arguments[1]);let z=Math.pow(2,-O),B=Math.floor(_.image.width*z),ee=Math.floor(_.image.height*z),ce=U!==null?U.x:0,ge=U!==null?U.y:0;w.setTexture2D(_,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,ce,ge,B,ee),we.unbindTexture()},this.copyTextureToTexture=function(_,U,O=null,z=null,B=0){_.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,_=arguments[1],U=arguments[2],B=arguments[3]||0,O=null);let ee,ce,ge,ve,De,Be,xe,Je,mt,xt=_.isCompressedTexture?_.mipmaps[B]:_.image;O!==null?(ee=O.max.x-O.min.x,ce=O.max.y-O.min.y,ge=O.isBox3?O.max.z-O.min.z:1,ve=O.min.x,De=O.min.y,Be=O.isBox3?O.min.z:0):(ee=xt.width,ce=xt.height,ge=xt.depth||1,ve=0,De=0,Be=0),z!==null?(xe=z.x,Je=z.y,mt=z.z):(xe=0,Je=0,mt=0);let hn=Fe.convert(U.format),nt=Fe.convert(U.type),_e;U.isData3DTexture?(w.setTexture3D(U,0),_e=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),_e=L.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),_e=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let hi=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),zs=L.getParameter(L.UNPACK_SKIP_ROWS),pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);let Hr=_.isDataArrayTexture||_.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let Kn=Ee.get(_),kr=Ee.get(U),En=Ee.get(Kn.__renderTarget),Pi=Ee.get(kr.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,En.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ii=0;Ii<ge;Ii++)Hr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(_).__webglTexture,B,Be+Ii),_.isDepthTexture?(yt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,B,mt+Ii),L.blitFramebuffer(ve,De,ee,ce,xe,Je,ee,ce,L.DEPTH_BUFFER_BIT,L.NEAREST)):yt?L.copyTexSubImage3D(_e,B,xe,Je,mt+Ii,ve,De,ee,ce):L.copyTexSubImage2D(_e,B,xe,Je,mt+Ii,ve,De,ee,ce);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yt?_.isDataTexture||_.isData3DTexture?L.texSubImage3D(_e,B,xe,Je,mt,ee,ce,ge,hn,nt,xt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,B,xe,Je,mt,ee,ce,ge,hn,xt.data):L.texSubImage3D(_e,B,xe,Je,mt,ee,ce,ge,hn,nt,xt):_.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,xe,Je,ee,ce,hn,nt,xt.data):_.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,xe,Je,xt.width,xt.height,hn,xt.data):L.texSubImage2D(L.TEXTURE_2D,B,xe,Je,ee,ce,hn,nt,xt);L.pixelStorei(L.UNPACK_ROW_LENGTH,hi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,zs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pn),B===0&&U.generateMipmaps&&L.generateMipmap(_e),we.unbindTexture()},this.copyTextureToTexture3D=function(_,U,O=null,z=null,B=0){return _.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,_=arguments[2],U=arguments[3],B=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,U,O,z,B)},this.initRenderTarget=function(_){Ee.get(_).__webglFramebuffer===void 0&&w.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?w.setTextureCube(_,0):_.isData3DTexture?w.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?w.setTexture2DArray(_,0):w.setTexture2D(_,0),we.unbindTexture()},this.resetState=function(){T=0,C=0,D=null,we.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Ms=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new b,_s=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},da=class extends dn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,Yr=new b,tr=new b,nr=new b,ir=new ne,qr=new ne,pd=new lt,fo=new b,Qr=new b,po=new b,Df=new ne,Zl=new ne,Pf=new ne,No=class extends qt{constructor(e=new da){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fa(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new _s(i,3,0,!1)),er.setAttribute("uv",new _s(i,2,3,!1))}this.geometry=er,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;mo(fo.set(-.5,-.5,0),nr,a,tr,s,r),mo(Qr.set(.5,-.5,0),nr,a,tr,s,r),mo(po.set(.5,.5,0),nr,a,tr,s,r),Df.set(0,0),Zl.set(1,0),Pf.set(1,1);let o=e.ray.intersectTriangle(fo,Qr,po,!1,Yr);if(o===null&&(mo(Qr.set(-.5,.5,0),nr,a,tr,s,r),Zl.set(0,1),o=e.ray.intersectTriangle(fo,po,Qr,!1,Yr),o===null))return;let l=e.ray.origin.distanceTo(Yr);l<e.near||l>e.far||t.push({distance:l,point:Yr.clone(),uv:zi.getInterpolation(Yr,fo,Qr,po,Df,Zl,Pf,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function mo(n,e,t,i,s,r){ir.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(qr.x=r*ir.x-s*ir.y,qr.y=s*ir.x+r*ir.y):qr.copy(ir),n.copy(e),n.x+=qr.x,n.y+=qr.y,n.applyMatrix4(pd)}var $c=class extends bt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Dt,u=Dt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fo=class extends tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new lt,If=new lt,go=[],Uf=new Si,tM=new lt,Zr=new Te,Kr=new Ei,pa=class extends Te{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Uf.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Uf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Kr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(i),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),If.multiplyMatrices(i,sr),Zr.matrixWorld=If,Zr.raycast(e,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,t.push(l)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $c(new Float32Array(s*this.count),s,this.count,vu,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var vr=class extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oo=new b,zo=new b,Bf=new lt,Jr=new dr,vo=new Ei,Kl=new b,Lf=new b,ma=class extends qt{constructor(e=new ct,t=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Oo.fromBufferAttribute(t,s-1),zo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Oo.distanceTo(zo);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Bf.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(Bf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=c){let d=u.getX(g),A=u.getX(g+1),E=xo(this,e,Jr,l,d,A);E&&t.push(E)}if(this.isLineLoop){let g=u.getX(v-1),m=u.getX(p),d=xo(this,e,Jr,l,g,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=c){let d=xo(this,e,Jr,l,g,g+1);d&&t.push(d)}if(this.isLineLoop){let g=xo(this,e,Jr,l,v-1,p);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(n,e,t,i,s,r){let a=n.geometry.attributes.position;if(Oo.fromBufferAttribute(a,s),zo.fromBufferAttribute(a,r),t.distanceSqToSegment(Oo,zo,Kl,Lf)>i)return;Kl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:Lf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Vn=class extends dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nf=new lt,eu=new dr,yo=new Ei,Mo=new b,ei=class extends qt{constructor(e=new ct,t=new Vn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Nf.copy(s).invert(),eu.copy(e.ray).applyMatrix4(Nf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,g=p;v<g;v++){let m=c.getX(v);Mo.fromBufferAttribute(h,m),Ff(Mo,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p;v<g;v++)Mo.fromBufferAttribute(h,v),Ff(Mo,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ff(n,e,t,i,s,r,a){let o=eu.distanceSqToPoint(n);if(o<t){let l=new b;eu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ga=class extends bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Dt,this.minFilter=Dt,this.generateMipmaps=!1,this.needsUpdate=!0}};var wi=class extends bt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class n extends ct{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],v=0,g=[],m=i/2,d=0;A(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function A(){let M=new b,I=new b,T=0,C=(t-e)/i;for(let D=0;D<=r;D++){let S=[],y=D/r,R=y*(t-e)+e;for(let k=0;k<=s;k++){let F=k/s,G=F*l+o,K=Math.sin(G),V=Math.cos(G);I.x=R*K,I.y=-y*i+m,I.z=R*V,h.push(I.x,I.y,I.z),M.set(K,C,V).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-y),S.push(v++)}g.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let y=g[S][D],R=g[S+1][D],k=g[S+1][D+1],F=g[S][D+1];(e>0||S!==0)&&(u.push(y,R,F),T+=3),(t>0||S!==r-1)&&(u.push(R,k,F),T+=3)}c.addGroup(d,T,0),d+=T}function E(M){let I=v,T=new ne,C=new b,D=0,S=M===!0?e:t,y=M===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),v++;let R=v;for(let k=0;k<=s;k++){let G=k/s*l+o,K=Math.cos(G),V=Math.sin(G);C.x=S*V,C.y=m*y,C.z=S*K,h.push(C.x,C.y,C.z),f.push(0,y,0),T.x=K*.5+.5,T.y=V*.5*y+.5,p.push(T.x,T.y),v++}for(let k=0;k<s;k++){let F=I+k,G=R+k;M===!0?u.push(G,G+1,F):u.push(G+1,G,F),D+=3}c.addGroup(d,D,M===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ho=class n extends As{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tu=class n extends ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(A){let E=new b,M=new b,I=new b;for(let T=0;T<t.length;T+=3)p(t[T+0],E),p(t[T+1],M),p(t[T+2],I),l(E,M,I,A)}function l(A,E,M,I){let T=I+1,C=[];for(let D=0;D<=T;D++){C[D]=[];let S=A.clone().lerp(M,D/T),y=E.clone().lerp(M,D/T),R=T-D;for(let k=0;k<=R;k++)k===0&&D===T?C[D][k]=S:C[D][k]=S.clone().lerp(y,k/R)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){let y=Math.floor(S/2);S%2===0?(f(C[D][y+1]),f(C[D+1][y]),f(C[D][y])):(f(C[D][y+1]),f(C[D+1][y+1]),f(C[D+1][y]))}}function c(A){let E=new b;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(A),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){let A=new b;for(let E=0;E<r.length;E+=3){A.x=r[E+0],A.y=r[E+1],A.z=r[E+2];let M=m(A)/2/Math.PI+.5,I=d(A)/Math.PI+.5;a.push(M,1-I)}v(),h()}function h(){for(let A=0;A<a.length;A+=6){let E=a[A+0],M=a[A+2],I=a[A+4],T=Math.max(E,M,I),C=Math.min(E,M,I);T>.9&&C<.1&&(E<.2&&(a[A+0]+=1),M<.2&&(a[A+2]+=1),I<.2&&(a[A+4]+=1))}}function f(A){r.push(A.x,A.y,A.z)}function p(A,E){let M=A*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function v(){let A=new b,E=new b,M=new b,I=new b,T=new ne,C=new ne,D=new ne;for(let S=0,y=0;S<r.length;S+=9,y+=6){A.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),T.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),I.copy(A).add(E).add(M).divideScalar(3);let R=m(I);g(T,y+0,A,R),g(C,y+2,E,R),g(D,y+4,M,R)}}function g(A,E,M,I){I<0&&A.x===1&&(a[E]=A.x-1),M.x===0&&M.z===0&&(a[E]=I/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function d(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ko=class n extends tu{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Wi=class n extends ct{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new b,v=new ne;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let d=r+m/i*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}h+=f}for(let g=0;g<s;g++){let m=g*(i+1);for(let d=0;d<i;d++){let A=d+m,E=A,M=A+i+1,I=A+i+2,T=A+1;o.push(E,M,T),o.push(M,I,T)}}this.setIndex(o),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class n extends ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new b,f=new b,p=[],v=[],g=[],m=[];for(let d=0;d<=i;d++){let A=[],E=d/i,M=0;d===0&&a===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let T=I/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(T+M,1-E),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){let E=u[d][A+1],M=u[d][A],I=u[d+1][A],T=u[d+1][A+1];(d!==0||a>0)&&p.push(E,M,T),(d!==i-1||l<Math.PI)&&p.push(M,I,T)}this.setIndex(p),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Go=class n extends ct{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new b,h=new b,f=new b;for(let p=0;p<=i;p++)for(let v=0;v<=s;v++){let g=v/s*r,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=s;v++){let g=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,d=(s+1)*(p-1)+v,A=(s+1)*p+v;a.push(g,m,A),a.push(m,d,A)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var xr=class extends Pe{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Xi=class extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sd,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var yr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends yr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:r=e,o=2*t-i;break;case Lh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:a=e,l=2*i-t;break;case Lh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-t)/(s-t),g=v*v,m=g*v,d=-f*m+2*f*g-f*v,A=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*v+1,E=(-1-p)*m+(1.5+p)*g+.5*v,M=p*m-p*g;for(let I=0;I!==o;++I)r[I]=d*a[u+I]+A*a[c+I]+E*a[l+I]+M*a[h+I];return r}},iu=class extends yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},su=class extends yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case Lc:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Al,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,f=h-i,p=h+i;for(let v=0;v!==i;++v){let g=t[h+v];if(g!==t[f+v]||g!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Lc;var Ss=class extends Wn{constructor(e,t,i){super(e,t,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=bo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ru=class extends Wn{};ru.prototype.ValueTypeName="color";var au=class extends Wn{};au.prototype.ValueTypeName="number";var ou=class extends yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Gi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vo=class extends Wn{InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Wn{constructor(e,t,i){super(e,t,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=bo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var lu=class extends Wn{};lu.prototype.ValueTypeName="vector";var Of={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},va=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}},iM=new va,xa=class{constructor(e){this.manager=e!==void 0?e:iM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var cu=class extends xa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Of.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=la("img");function l(){u(),Of.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Wo=class extends xa{constructor(e){super(e)}load(e,t,i,s){let r=new bt,a=new cu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Xo=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Jl=new lt,zf=new b,Hf=new b,uu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),Hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hf),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var kf=new lt,jr=new b,jl=new b,hu=class extends uu{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(jr),jl.copy(i.position),jl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jl),i.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),kf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf)}},Yo=class extends Xo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var qo=class extends Xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gf(){return performance.now()}var Su="\\[\\]\\.:\\/",sM=new RegExp("["+Su+"]","g"),Eu="[^"+Su+"]",rM="[^"+Su.replace("\\.","")+"]",aM=/((?:WC+[\/:])*)/.source.replace("WC",Eu),oM=/(WCOD+)?/.source.replace("WCOD",rM),lM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),cM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),uM=new RegExp("^"+aM+oM+lM+cM+"$"),hM=["material","materials","bones","map"],fu=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sM,"")}static parseTrackName(e){let t=uM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=fu;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wA=new Float32Array(1);var ue=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}};var Vf=new lt,Zo=class{constructor(e,t,i=0,s=1/0){this.ray=new dr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(e,t=!0,i=[]){return du(e,this,i,t),i.sort(Wf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)du(e[s],this,i,t);return i.sort(Wf),i}};function Wf(n,e){return n.distance-e.distance}function du(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)du(r[a],e,t,!0)}}var Xf=new ne,Ko=class{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var dM=(()=>{let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new ct;return t.setAttribute("position",new tt(n,3)),t.setAttribute("uv",new tt(e,2)),t})(),yn=class Cu{static get fullscreenGeometry(){return dM}constructor(e="Pass",t=new Ms,i=new ha){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Te(Cu.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ms),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=xn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof je||t instanceof dn||t instanceof bt||t instanceof Cu)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},pM=class extends yn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){let r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},mM=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Ru="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",_d=class extends Pe{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new ue(null),depthBuffer:new ue(null),channelWeights:new ue(null),opacity:new ue(1)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mM,vertexShader:Ru}),this.depthFunc=sa}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){let e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){let e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},Ad=class extends yn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new _d,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new je(1,1,{minFilter:zt,magFilter:zt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==ht?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===ze&&(this.renderTarget.texture.colorSpace=ze))}},md=new Se,Du=class extends yn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(md),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(md,o):c&&n.setClearAlpha(o)}},gM=class extends yn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Du(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){let r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function vM(n,e){let t=n.getContext();if(e<=0||typeof t.renderbufferStorageMultisample!="function")return 0;let i=t.getParameter(t.MAX_SAMPLES),s=Math.min(e,i);if(s<=0)return 0;let r=t.getParameter(t.RENDERBUFFER_BINDING),a=t.createRenderbuffer();try{return t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorageMultisample(t.RENDERBUFFER,s,t.RGBA8,1,1),s}catch{return 0}finally{t.bindRenderbuffer(t.RENDERBUFFER,r),t.deleteRenderbuffer(a)}}var wu=1/1e3,xM=1e3,yM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*wu}get fixedDelta(){return this._fixedDelta*wu}set fixedDelta(n){this._fixedDelta=n*xM}get elapsed(){return this._elapsed*wu}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Sd=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s=ht}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Ad,this.depthRenderTarget=null,this.passes=[],this.timer=new yM,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){let e=this.renderer===null?n:vM(this.renderer,n);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new ne),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===ht&&n.outputColorSpace===ze&&(this.inputBuffer.texture.colorSpace=ze,this.outputBuffer.texture.colorSpace=ze,this.inputBuffer.dispose(),this.outputBuffer.dispose());let s=this.multisampling;this.multisampling=s,n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){let n=new Vi;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=ki,n.type=Hi):n.type=bn;let e=new Vi;e.format=n.format,e.type=n.type,e.name="EffectComposer.OutputDepth";let t=new Vi;t.format=n.format,t.type=n.type,t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new je(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){let e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);let r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let n=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){let s=this.renderer,r=s===null?new ne:s.getDrawingBufferSize(new ne),a=new je(r.width,r.height,{minFilter:zt,magFilter:zt,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===ht&&s!==null&&s.outputColorSpace===ze&&(a.texture.colorSpace=ze),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(n){for(let e of this.passes)e.mainScene=n}setMainCamera(n){for(let e of this.passes)e.mainCamera=n}addPass(n,e){let t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new ne),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of t)o.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(n.getDepthTexture()===r&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof gM?a=!0:o instanceof pM&&(a=!1)}}setSize(n,e,t){let i=this.renderer,s=i.getSize(new ne);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);let r=i.getDrawingBufferSize(new ne);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],yn.fullscreenGeometry.dispose()}},ii={NONE:0,DEPTH:1,CONVOLUTION:2},$e={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},MM=class{constructor(){this.shaderParts=new Map([[$e.FRAGMENT_HEAD,null],[$e.FRAGMENT_MAIN_UV,null],[$e.FRAGMENT_MAIN_IMAGE,null],[$e.VERTEX_HEAD,null],[$e.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ii.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ti}};var Tu=!1,gd=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case wt:t=this.materialsFlatShadedDoubleSide;break;case Tt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case wt:t=this.materialsDoubleSide;break;case Tt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Pe))return n.clone();let e=n.uniforms,t=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}let i=n.clone();for(let s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Cn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Tt,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=wt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Tt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=wt,i})}}render(n,e,t){let i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Tu){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Tu}static set workaroundEnabled(n){Tu=n}};var Yi=-1,ni=class extends fn{constructor(n=null,e=Yi,t=Yi,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new ne(1,1),this.preferredSize=new ne(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new ne,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Yi?t.width=e.width:e.height!==Yi?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Yi?t.height=e.height:e.width!==Yi?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Yi),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Yi}};var Ne={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},_M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",SM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",WM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",JM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$M=new Map([[Ne.ADD,_M],[Ne.ALPHA,AM],[Ne.AVERAGE,SM],[Ne.COLOR,EM],[Ne.COLOR_BURN,wM],[Ne.COLOR_DODGE,TM],[Ne.DARKEN,bM],[Ne.DIFFERENCE,CM],[Ne.DIVIDE,RM],[Ne.DST,null],[Ne.EXCLUSION,DM],[Ne.HARD_LIGHT,PM],[Ne.HARD_MIX,IM],[Ne.HUE,UM],[Ne.INVERT,BM],[Ne.INVERT_RGB,LM],[Ne.LIGHTEN,NM],[Ne.LINEAR_BURN,FM],[Ne.LINEAR_DODGE,OM],[Ne.LINEAR_LIGHT,zM],[Ne.LUMINOSITY,HM],[Ne.MULTIPLY,kM],[Ne.NEGATION,GM],[Ne.NORMAL,VM],[Ne.OVERLAY,WM],[Ne.PIN_LIGHT,XM],[Ne.REFLECT,YM],[Ne.SATURATION,qM],[Ne.SCREEN,QM],[Ne.SOFT_LIGHT,ZM],[Ne.SRC,KM],[Ne.SUBTRACT,JM],[Ne.VIVID_LIGHT,jM]]),e_=class extends fn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new ue(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return $M.get(this.blendFunction)}};var _r=class extends fn{constructor(n,e,{attributes:t=ii.NONE,blendFunction:i=Ne.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new e_(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ti,this._outputColorSpace=Tn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=xn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];(e instanceof je||e instanceof dn||e instanceof bt||e instanceof yn)&&this[n].dispose()}}};var Pu={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},t_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,n_="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",i_=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],s_=class extends Pe{constructor(n=new Ve){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ue(null),texelSize:new ue(new Ve),scale:new ue(1),kernel:new ue(0)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:t_,vertexShader:n_}),this.setTexelSize(n.x,n.y),this.kernelSize=Pu.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return i_[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){let t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},r_=class extends yn{constructor({kernelSize:n=Pu.MEDIUM,resolutionScale:e=.5,width:t=ni.AUTO_SIZE,height:i=ni.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new je(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new ni(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new s_,this._blurMaterial.kernelSize=n,this.copyMaterial=new _d}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence,h=e;this.fullscreenMaterial=c;for(let f=0,p=u.length;f<p;++f){let v=(f&1)===0?o:l;c.kernel=u[f],c.inputBuffer=h.texture,n.setRenderTarget(v),n.render(r,a),h=v}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==ht?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===ze&&(this.renderTargetA.texture.colorSpace=ze,this.renderTargetB.texture.colorSpace=ze))}static get AUTO_SIZE(){return ni.AUTO_SIZE}},a_=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,o_=class extends Pe{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"170".replace(/\D+/g,"")},uniforms:{inputBuffer:new ue(null),threshold:new ue(0),smoothing:new ue(1),range:new ue(null)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:a_,vertexShader:Ru}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},Ed=class extends yn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=ni.AUTO_SIZE,height:r=ni.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new o_(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new je(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new ni(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==ht&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},l_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,c_="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",u_=class extends Pe{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ue(null),texelSize:new ue(new ne)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:l_,vertexShader:c_})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},h_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,f_="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",d_=class extends Pe{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ue(null),supportBuffer:new ue(null),texelSize:new ue(new ne),radius:new ue(.85)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:h_,vertexShader:f_})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},p_=class extends yn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new je(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new u_,this.upsamplingMaterial=new d_,this.resolution=new ne}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){let i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){let s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){let{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this,h=e;this.fullscreenMaterial=o;for(let f=0,p=c.length;f<p;++f){let v=c[f];o.setSize(h.width,h.height),o.inputBuffer=h.texture,n.setRenderTarget(v),n.render(r,a),h=v}this.fullscreenMaterial=l;for(let f=u.length-1;f>=0;--f){let p=u[f];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[f].texture,n.setRenderTarget(p),n.render(r,a),h=p}}setSize(n,e){let t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){let i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let s of i)s.texture.type=t;if(t!==ht)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===ze)for(let s of i)s.texture.colorSpace=ze}}dispose(){super.dispose();for(let n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},m_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,wd=class extends _r{constructor({blendFunction:n=Ne.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Pu.LARGE,resolutionScale:l=.5,width:c=ni.AUTO_SIZE,height:u=ni.AUTO_SIZE,resolutionX:h=c,resolutionY:f=u}={}){super("BloomEffect",m_,{blendFunction:n,uniforms:new Map([["map",new ue(null)],["intensity",new ue(s)]])}),this.renderTarget=new je(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new r_({kernelSize:o}),this.luminancePass=new Ed({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new p_,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;let p=this.resolution=new ni(this,h,f,l);p.addEventListener("change",v=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===ze&&(this.renderTarget.texture.colorSpace=ze))}};var g_=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,v_="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",Td=class extends _r{constructor({offset:n=new ne(.001,5e-4),radialModulation:e=!1,modulationOffset:t=.15}={}){super("ChromaticAberrationEffect",g_,{vertexShader:v_,attributes:ii.CONVOLUTION,uniforms:new Map([["offset",new ue(n)],["modulationOffset",new ue(t)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(n){n?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(n){this.uniforms.get("modulationOffset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}};var vd=class extends yn{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){let r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==ht&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};var bd=class extends yn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Du,this.overrideMaterialManager=t===null?null:new gd(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new gd(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=u}};var Cd={DEPTH:0,LUMA:1,COLOR:2},x_={DISABLED:0,DEPTH:1,CUSTOM:2},Ts={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},cn={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},ya={DEFAULT:0,ESKIL:1};var y_=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,Rd=class extends _r{constructor({blendFunction:n=Ne.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",y_,{blendFunction:n}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(n){this.premultiply!==n&&(n?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(n){this.premultiply=n}};var YA=Math.PI*.5;var M_=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,__=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,A_=class extends Pe{constructor(n=new ne,e=Cd.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:"170".replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new ue(null),depthBuffer:new ue(null),predicationBuffer:new ue(null),texelSize:new ue(n)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:M_,vertexShader:__}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=xn){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},S_=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,E_="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",w_=class extends Pe{constructor(n=new ne,e=new ne){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new ue(null),searchTexture:new ue(null),areaTexture:new ue(null),resolution:new ue(e),texelSize:new ue(n)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:S_,vertexShader:E_})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){let e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){let e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){let e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){let t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},xd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",yd="data:image/png;base64,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",T_="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",b_="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Dd=class extends _r{constructor({blendFunction:n=Ne.SRC,preset:e=Ts.MEDIUM,edgeDetectionMode:t=Cd.COLOR,predicationMode:i=x_.DISABLED}={}){super("SMAAEffect",T_,{vertexShader:b_,blendFunction:n,attributes:ii.CONVOLUTION|ii.DEPTH,uniforms:new Map([["weightMap",new ue(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new je(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Du(!0,!1,!1),this.clearPass.overrideClearColor=new Se(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new vd(new A_),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new vd(new w_);let a=new va;a.onLoad=()=>{let o=new bt(s);o.name="SMAA.Search",o.magFilter=Dt,o.minFilter=Dt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;let l=new bt(r);l.name="SMAA.Area",l.magFilter=zt,l.minFilter=zt,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=xd,r.src=yd),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){let e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Ts.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ts.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ts.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Ts.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=xn){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){let{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return xd}static get areaImageDataURL(){return yd}};var C_=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,R_=class extends Pe{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new ue(null),luminanceBuffer1:new ue(null),minLuminance:new ue(.01),deltaTime:new ue(0),tau:new ue(1)},extensions:{shaderTextureLOD:!0},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:C_,vertexShader:Ru})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},D_=class extends yn{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new R_,this.needsSwap=!1,this.renderTargetPrevious=new je(1,1,{minFilter:Dt,magFilter:Dt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";let i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new Ad(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},P_=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,Pd=class extends _r{constructor({blendFunction:n=Ne.SRC,adaptive:e=!1,mode:t=e?cn.REINHARD2_ADAPTIVE:cn.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",P_,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new ue(null)],["maxLuminance",new ue(s)],["whitePoint",new ue(r)],["middleGrey",new ue(a)],["averageLuminance",new ue(l)]])}),this.renderTargetLuminance=new je(1,1,{minFilter:yi,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Ed({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new D_(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;let t="170".replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case cn.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case cn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case cn.CINEON:case cn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case cn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case cn.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case cn.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===cn.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){let e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===cn.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?cn.REINHARD2_ADAPTIVE:cn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},I_=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Id=class extends _r{constructor({blendFunction:n,eskil:e=!1,technique:t=e?ya.ESKIL:ya.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",I_,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new ue(i)],["darkness",new ue(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===ya.ESKIL}set eskil(n){this.technique=n?ya.ESKIL:ya.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}};var U_=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,B_="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",L_=class extends Pe{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"170".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ue(null),depthBuffer:new ue(null),resolution:new ue(new ne),texelSize:new ue(new ne),cameraNear:new ue(.3),cameraFar:new ue(1e3),aspect:new ue(1),time:new ue(0)},blending:gt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=xn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=U_.replace($e.FRAGMENT_HEAD,n.get($e.FRAGMENT_HEAD)||"").replace($e.FRAGMENT_MAIN_UV,n.get($e.FRAGMENT_MAIN_UV)||"").replace($e.FRAGMENT_MAIN_IMAGE,n.get($e.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=B_.replace($e.VERTEX_HEAD,n.get($e.VERTEX_HEAD)||"").replace($e.VERTEX_MAIN_SUPPORT,n.get($e.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Yt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return $e}};var t1=Number("170".replace(/\D+/g,"")),bs=255/256,n1=new Float32Array([bs/256**3,bs/256**2,bs/256,bs]),i1=new Float32Array([bs,bs/256,bs/256**2,1/256**3]);function Md(n,e,t){for(let i of e){let s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function N_(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&ii.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,c=l.get($e.FRAGMENT_HEAD)||"",u=l.get($e.FRAGMENT_MAIN_UV)||"",h=l.get($e.FRAGMENT_MAIN_IMAGE)||"",f=l.get($e.VERTEX_HEAD)||"",p=l.get($e.VERTEX_MAIN_SUPPORT)||"",v=new Set,g=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let A=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${n}MainSupport(`,p+=A?`vUv);
`:`);
`;for(let E of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let M of E[1].split(/\s*,\s*/))t.varyings.add(M),v.add(M),g.add(M);for(let E of s.matchAll(o))g.add(E[1])}for(let A of i.matchAll(o))g.add(A[1]);for(let A of e.defines.keys())g.add(A.replace(/\([\w\s,]*\)/g,""));for(let A of e.uniforms.keys())g.add(A);g.delete("while"),g.delete("for"),g.delete("if"),e.uniforms.forEach((A,E)=>t.uniforms.set(n+E.charAt(0).toUpperCase()+E.slice(1),A)),e.defines.forEach((A,E)=>t.defines.set(n+E.charAt(0).toUpperCase()+E.slice(1),A));let m=new Map([["fragment",i],["vertex",s]]);Md(n,g,t.defines),Md(n,g,m),i=m.get("fragment"),s=m.get("vertex");let d=e.blendMode;if(t.blendModes.set(d.blendFunction,d),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===ze?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Tn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let A=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,(t.attributes&ii.DEPTH)!==0&&A.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;let E=n+"BlendOpacity";t.uniforms.set(E,d.opacity),h+=`color0 = blend${d.blendFunction}(color0, color1, ${E});

	`,c+=`uniform float ${E};

`}if(c+=i+`
`,s!==null&&(f+=s+`
`),l.set($e.FRAGMENT_HEAD,c),l.set($e.FRAGMENT_MAIN_UV,u),l.set($e.FRAGMENT_MAIN_IMAGE,h),l.set($e.VERTEX_HEAD,f),l.set($e.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(let A of e.extensions)t.extensions.add(A)}}var el=class extends yn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new L_(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(let e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(let e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let n=new MM,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===Ne.DST)n.attributes|=a.getAttributes()&ii.DEPTH;else{if((n.attributes&a.getAttributes()&ii.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);N_("e"+e++,a,n)}let t=n.shaderParts.get($e.FRAGMENT_HEAD),i=n.shaderParts.get($e.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get($e.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&ii.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===ze&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set($e.FRAGMENT_HEAD,t),n.shaderParts.set($e.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set($e.FRAGMENT_MAIN_UV,s);for(let[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=xn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(let r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==ht&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){n.type==="change"&&this.recompile()}};var r1=[new Float32Array(3),new Float32Array(3)],a1=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],o1=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var l1=[new Float32Array(2),new Float32Array(2)];var c1=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),u1=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],h1=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],f1=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var d1=new Map([[rn(0,0,0,0),new Float32Array([0,0,0,0])],[rn(0,0,0,1),new Float32Array([0,0,0,1])],[rn(0,0,1,0),new Float32Array([0,0,1,0])],[rn(0,0,1,1),new Float32Array([0,0,1,1])],[rn(0,1,0,0),new Float32Array([0,1,0,0])],[rn(0,1,0,1),new Float32Array([0,1,0,1])],[rn(0,1,1,0),new Float32Array([0,1,1,0])],[rn(0,1,1,1),new Float32Array([0,1,1,1])],[rn(1,0,0,0),new Float32Array([1,0,0,0])],[rn(1,0,0,1),new Float32Array([1,0,0,1])],[rn(1,0,1,0),new Float32Array([1,0,1,0])],[rn(1,0,1,1),new Float32Array([1,0,1,1])],[rn(1,1,0,0),new Float32Array([1,1,0,0])],[rn(1,1,0,1),new Float32Array([1,1,0,1])],[rn(1,1,1,0),new Float32Array([1,1,1,0])],[rn(1,1,1,1),new Float32Array([1,1,1,1])]]);function bu(n,e,t){return n+(e-n)*t}function rn(n,e,t,i){let s=bu(n,e,.75),r=bu(t,i,1-.25);return bu(s,r,1-.125)}var Qi=`
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
`,Ud=`
varying vec3 vN; varying vec3 vP; varying vec3 vV;
void main(){ vN=normalize(normalMatrix*normal); vP=position; vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Q1=`
uniform float uT; uniform vec3 uA; uniform vec3 uB; uniform float uPulse; uniform float uBright;
varying vec3 vN; varying vec3 vP; varying vec3 vV;
${Qi}
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
}`,Bd=`
varying vec3 vN; varying vec3 vV;
void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Ld=`
uniform vec3 uC; uniform float uI; uniform float uP;
varying vec3 vN; varying vec3 vV;
void main(){ float f=pow(1.0-abs(dot(vN,vV)),uP); gl_FragColor=vec4(uC*f*uI,f*uI); }`,Iu=`
varying vec3 vN; varying vec3 vWP; varying vec3 vP; varying vec3 vV;
void main(){ vP=position; vN=normalize(mat3(modelMatrix)*normal); vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; vV=normalize(cameraPosition-wp.xyz); gl_Position=projectionMatrix*viewMatrix*wp; }`,Nd=`
uniform float uT; uniform float uSeed; uniform int uKind; uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform vec3 uStar;
varying vec3 vN; varying vec3 vWP; varying vec3 vP; varying vec3 vV;
${Qi}
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
}`,Fd=`
uniform vec3 uC; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
void main(){ vec3 L=normalize(-vWP); float f=pow(1.0-abs(dot(normalize(vN),vV)),2.5); float day=smoothstep(-0.3,0.6,dot(normalize(vN),L)); gl_FragColor=vec4(uC*f*day*1.6,f*day); }`;var Uu="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",Bu=`
uniform float uT; varying vec2 vUv;
${Qi}
void main(){
  vec2 c=vUv-0.5; float r=length(c)*2.0; float a=atan(c.y,c.x);
  if(r<0.32||r>1.0) discard;
  float sw=fbm(vec3(cos(a)*2.0,sin(a)*2.0,r*6.0-uT*1.2)+vec3(r*3.0+a*0.5));
  float t=smoothstep(1.0,0.35,r);
  vec3 hot=mix(vec3(1.0,0.35,0.25),vec3(1.0,0.9,0.75),t);
  float i=t*(0.55+0.45*sw)*smoothstep(0.32,0.4,r);
  gl_FragColor=vec4(hot*i*2.2,i);
}`,Od="varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",Z1=`
uniform float uT; uniform vec3 uA; uniform vec3 uB; varying vec3 vD;
${Qi}
void main(){
  vec3 d=normalize(vD);
  float n1=fbm(d*1.6+vec3(0.0,0.0,uT*0.004)); float n2=fbm(d*3.2+vec3(9.0));
  float dust=smoothstep(-0.1,0.7,n1)*0.55; float teal=smoothstep(0.1,0.8,n2)*0.35;
  vec3 col=vec3(0.012,0.012,0.022)+uA*dust*dust*1.3+uB*teal*teal*1.1;
  float lane=smoothstep(0.35,0.0,abs(d.y+0.15*n1))*0.18; col+=mix(uA,uB,0.5)*lane*0.35;
  gl_FragColor=vec4(col,1.0);
}`,Lu=`
varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; vV=normalize(cameraPosition-wp.xyz); gl_Position=projectionMatrix*viewMatrix*wp; }`,zd=`
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
}`,Hd=`
uniform sampler2D uMap; uniform vec3 uStar; uniform float uOff; varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
void main(){ float a=texture2D(uMap,vUv+vec2(uOff,0.0)).r; vec3 L=normalize(-vWP); float nl=dot(normalize(vN),L);
  float d=smoothstep(-0.1,0.4,nl); gl_FragColor=vec4(uStar*(0.04+d*1.05),a*0.9*smoothstep(-0.3,0.1,nl)+a*0.05); }`,kd="varying vec3 vL; varying vec3 vWP; void main(){ vL=position; vec4 wp=modelMatrix*vec4(position,1.0); vWP=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }",Gd=`
uniform sampler2D uMap; uniform vec3 uStar; uniform float uIn; uniform float uOut; uniform vec3 uTint; varying vec3 vL; varying vec3 vWP;
void main(){ float r=(length(vL.xy)-uIn)/(uOut-uIn); if(r<0.0||r>1.0) discard; vec4 t=texture2D(uMap,vec2(r,0.5));
  float lit=0.55+0.45*abs(normalize(-vWP).y); gl_FragColor=vec4(t.rgb*uTint*uStar*lit*1.1,t.a*0.95); }`,K1=`
uniform float uT; uniform sampler2D uMap; uniform vec3 uA; uniform vec3 uB; uniform float uPulse; uniform float uBright;
varying vec3 vN; varying vec3 vP; varying vec3 vV;
${Qi}
void main(){
  vec3 p=normalize(vP); vec2 uv=vec2(atan(p.z,p.x)/6.2831853+0.5, asin(clamp(p.y,-1.0,1.0))/3.14159265+0.5);
  float w=fbm(p*4.0+vec3(uT*0.07)); uv+=vec2(w*0.012,w*0.008);
  float m=dot(texture2D(uMap,uv+vec2(uT*0.002,0.0)).rgb,vec3(0.333));
  float cells=snoise(p*22.0+uT*0.3)*0.5+0.5;
  vec3 col=mix(uB,uA,clamp(m*1.6-0.15+cells*0.18,0.0,1.0)); col=mix(col,vec3(1.0,0.97,0.9),pow(m,3.0)*0.6);
  float limb=pow(max(dot(vN,vV),0.0),0.5); col*=0.45+0.8*limb;
  gl_FragColor=vec4(col*(1.7+uPulse*0.8)*uBright,1.0);
}`,Vd=`
uniform float uT; uniform sampler2D uMap; uniform vec3 uA; uniform vec3 uB; varying vec3 vD;
${Qi}
void main(){
  vec3 d=normalize(vD); vec2 uv=vec2(atan(d.z,d.x)/6.2831853+0.5, asin(clamp(d.y,-1.0,1.0))/3.14159265+0.5);
  vec3 mw=texture2D(uMap,uv).rgb; mw=pow(mw,vec3(1.15))*1.25;
  float n1=fbm(d*1.6+vec3(0.0,0.0,uT*0.004)); float n2=fbm(d*3.2+vec3(9.0));
  vec3 neb=uA*pow(smoothstep(-0.1,0.7,n1),2.0)*0.55+uB*pow(smoothstep(0.1,0.8,n2),2.0)*0.45;
  gl_FragColor=vec4(mw+neb*(0.6+0.8*dot(mw,vec3(0.33))),1.0);
}`,Wd=`
uniform float uT; uniform sampler2D uMap; uniform vec3 uA; uniform vec3 uB; uniform float uPulse; uniform float uBright;
varying vec3 vN; varying vec3 vP; varying vec3 vV;
${Qi}
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
}`,Xd="varying vec2 vUv; void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(0.0,0.0,0.0,1.0); mv.xy+=position.xy; gl_Position=projectionMatrix*mv; }",Yd=`
uniform float uT; uniform vec3 uA; uniform vec3 uB; uniform float uI; uniform float uR; varying vec2 vUv;
${Qi}
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
}`;var Ma=class n extends Te{constructor(){super(n.Geometry,new vn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new b,t=new b,i=new ga(16,16),s=new ga(16,16),r=ht,a=n.Geometry,o=new xr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new xr({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Te(a,o),u=[],h=Xn.Shader,f=new xr({name:h.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Se(16777215)},scale:{value:new ne},screenPosition:{value:new b}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Pt,transparent:!0,depthWrite:!1}),p=new Te(a,f);this.addElement=function(A){u.push(A)};let v=new ne,g=new ne,m=new Ko,d=new Ve;this.onBeforeRender=function(A,E,M){A.getCurrentViewport(d);let I=A.getRenderTarget(),T=I!==null?I.texture.type:ht;r!==T&&(i.dispose(),s.dispose(),i.type=s.type=T,r=T);let C=d.w/d.z,D=d.z/2,S=d.w/2,y=16/d.w;if(v.set(y*C,y),m.min.set(d.x,d.y),m.max.set(d.x+(d.z-16),d.y+(d.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),g.x=d.x+e.x*D+D-8,g.y=d.y+e.y*S+S-8,m.containsPoint(g))){A.copyFramebufferToTexture(i,g);let R=o.uniforms;R.scale.value=v,R.screenPosition.value=e,A.renderBufferDirect(M,null,a,o,c,null),A.copyFramebufferToTexture(s,g),R=l.uniforms,R.scale.value=v,R.screenPosition.value=e,A.renderBufferDirect(M,null,a,l,c,null);let k=-e.x*2,F=-e.y*2;for(let G=0,K=u.length;G<K;G++){let V=u[G],j=f.uniforms;j.color.value.copy(V.color),j.map.value=V.texture,j.screenPosition.value.x=e.x+k*V.distance,j.screenPosition.value.y=e.y+F*V.distance,y=V.size/d.w;let W=d.w/d.z;j.scale.value.set(y*W,y),f.uniformsNeedUpdate=!0,A.renderBufferDirect(M,null,a,f,p,null)}}},this.dispose=function(){o.dispose(),l.dispose(),f.dispose(),i.dispose(),s.dispose();for(let A=0,E=u.length;A<E;A++)u[A].texture.dispose()}}},Xn=class{constructor(e,t=1,i=0,s=new Se(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=s}};Xn.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Ma.Geometry=(function(){let n=new ct,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new fa(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new _s(t,3,0,!1)),n.setAttribute("uv",new _s(t,2,3,!1)),n})();var He=n=>document.getElementById(n),Kt=()=>Date.now(),et=n=>new Se(n),An=[{id:"mote",n:"Stardust motes",e:"\u2728",base:15,rate:.1,d:"Specks that loop your star"},{id:"rock",n:"Asteroid belt",e:"\u{1FAA8}",base:110,rate:1,d:"Every rock adds to the belt"},{id:"moon",n:"Moon",e:"\u{1F319}",base:1200,rate:8,d:"Cratered, grey, steady"},{id:"plan",n:"Ocean world",e:"\u{1F30D}",base:13e3,rate:47,d:"Oceans, clouds, continents"},{id:"giant",n:"Gas giant",e:"\u{1FA90}",base:14e4,rate:260,d:"Storm bands and rings"},{id:"ring",n:"Ring world",e:"\u{1F48D}",base:2e6,rate:1400,d:"A built halo, lit seams"},{id:"dyson",n:"Dyson swarm",e:"\u{1F6F0}\uFE0F",base:33e6,rate:7800,d:"Panels that drink the star"},{id:"pulsar",n:"Pulsar",e:"\u{1F4AB}",base:51e7,rate:44e3,d:"A spinning lighthouse"},{id:"hole",n:"Black hole",e:"\u{1F573}\uFE0F",base:75e8,rate:26e4,d:"Eats light, gives back more"}],pp=[10,25,50,100,150,200],ns=[];An.forEach(n=>pp.forEach((e,t)=>ns.push({id:n.id+e,g:n.id,at:e,cost:n.base*Math.pow(10,t+1)*(t?2:1),n:n.n+["  \xB7 spin up"," \xB7 gravity"," \xB7 clusters"," \xB7 resonance"," \xB7 fusion"," \xB7 singularity"][t],d:`${n.n} \xD72 (needs ${e})`,e:n.e})));[[100,"Firm tap","Taps \xD72","\u{1F446}"],[5e3,"Solar flare","Taps \xD72","\u{1F446}"],[5e5,"Comet sense","Comets come twice as often","\u2604\uFE0F"],[5e6,"Core heat","Taps also give 1% of your /sec","\u{1F446}"],[5e7,"Stellar wind","Taps \xD73","\u{1F446}"],[5e9,"Tidal lock","Everything \xD71.5","\u{1F30C}"],[5e11,"Gravity well","Everything \xD72","\u{1F30C}"],[5e13,"Hand of god","Taps give +3% more of your /sec (4% total)","\u{1F446}"]].forEach(([n,e,t,i],s)=>ns.push({id:"t"+s,cost:n,n:e,d:t,e:i}));ns.sort((n,e)=>n.cost-e.cost);var sl=[["first","First light",n=>n.total>=1],["k","1K dust",n=>n.total>=1e3],["m","Millionaire of the void",n=>n.total>=1e6],["b","Billion",n=>n.total>=1e9],["tap100","100 taps",n=>n.taps>=100],["tap1k","1,000 taps",n=>n.taps>=1e3],["comet","Comet catcher",n=>n.comets>=1],["comet25","Comet hunter",n=>n.comets>=25],["moon","Got a moon",n=>(n.own.moon||0)>=1],["giant","Gas giant",n=>(n.own.giant||0)>=1],["hole","Event horizon",n=>(n.own.hole||0)>=1],["nova","Supernova",n=>n.novas>=1],["nova5","Serial supernova",n=>n.novas>=5],["fifty","Crowded sky",n=>An.reduce((e,t)=>e+(n.own[t.id]||0),0)>=50]],$u="kairos.orbit.v2",gl=(n,e)=>Object.assign({dust:0,total:0,own:{},ups:{},t:Kt(),sound:!0},n?{shards:0,life:0,shop:{},novas:0,ach:{},taps:0,comets:0,born:Kt(),allTime:0}:{shards:e.shards,life:e.life,shop:e.shop,novas:e.novas,ach:e.ach,taps:e.taps,comets:e.comets,born:e.born,allTime:e.allTime}),H=gl(!0);try{let n=localStorage.getItem($u)||localStorage.getItem("kairos.orbit.v1");n&&(H=Object.assign(gl(!0),JSON.parse(n)))}catch{}H.life>=(H.shards||0)||(H.life=H.shards||0);var is=()=>{H.t=Kt();try{localStorage.setItem($u,JSON.stringify(H))}catch{}};window.__S=()=>H;var ss=0,mp=n=>ns.reduce((e,t)=>t.g===n.id&&H.ups[t.id]?e*2:e,1),gp=()=>(1+H.shards*.1)*Math.pow(2,Ln("forge"))*(H.ups.t5?1.5:1)*(H.ups.t6?2:1),Wu=()=>gp()*(ss>Kt()?10:1),vp=n=>(H.own[n.id]||0)*n.rate*mp(n),ji=()=>An.reduce((n,e)=>n+vp(e),0)*Wu(),O_=()=>(H.ups.t0?2:1)*(H.ups.t1?2:1)*(H.ups.t4?3:1),z_=()=>(H.ups.t3?.01:0)+(H.ups.t7?.03:0)+.01*Ln("touch"),eh=()=>(gp()+ji()/(ss>Kt()?10:1)*z_())*O_()*(ss>Kt()?10:1),Cr=1.15,th=(n,e)=>n.base*Math.pow(Cr,H.own[n.id]||0)*(Math.pow(Cr,e)-1)/(Cr-1),H_=n=>Math.max(0,Math.floor(Math.log(H.dust*(Cr-1)/(n.base*Math.pow(Cr,H.own[n.id]||0))+1)/Math.log(Cr))),Xu=[{id:"comet",n:"Comet magnet",e:"\u2604\uFE0F",d:n=>`Comets come ${25*n}% more often`,base:2,gr:1.8,max:5,at:0},{id:"frenzy",n:"Long frenzy",e:"\u{1F525}",d:n=>`Frenzy lasts ${20+5*n}s`,base:3,gr:1.8,max:4,at:0},{id:"night",n:"Night shift",e:"\u{1F319}",d:n=>`Away earnings ${10+10*n}% of your rate`,base:3,gr:1.7,max:4,at:4},{id:"head",n:"Head start",e:"\u{1F680}",d:n=>`Each run starts with ${Ut([0,1e4,1e6,1e8][n])} stardust`,base:4,gr:2.2,max:3,at:4},{id:"touch",n:"Golden touch",e:"\u{1F446}",d:n=>`Taps also give +${n}% of your /sec`,base:6,gr:2,max:5,at:8},{id:"forge",n:"Star forge",e:"\u2B50",d:n=>`Everything \xD7${Ut(Math.pow(2,n))}`,base:10,gr:2.5,max:99,at:10},{id:"echo",n:"Shard echo",e:"\u{1F48E}",d:n=>`Supernovas pay +${25*n}% shards`,base:15,gr:2.5,max:6,at:20}],Ln=n=>H.shop&&H.shop[n]||0,Yu=n=>Math.ceil(n.base*Math.pow(n.gr,Ln(n.id))),Ra=()=>1e9*Math.pow(1+(H.life||0)/5,2),nh=()=>2*(1+.5*(H.novas||0))*(1+.25*Ln("echo")),ih=n=>Math.floor(Math.sqrt(n/Ra())*nh()),k_=n=>Ra()*Math.pow((ih(n)+1)/nh(),2),qd=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"],Ut=n=>{if(!isFinite(n))return"\u221E";if(n<1e3)return n<10&&n%1?n.toFixed(1):Math.floor(n).toLocaleString();let e=Math.min(qd.length-1,Math.floor(Math.log10(n)/3)),t=n/Math.pow(1e3,e);return(t<10?t.toFixed(2):t<100?t.toFixed(1):Math.floor(t))+qd[e]},G_=n=>{let e=Math.floor(n/1e3),t=Math.floor(e/3600),i=Math.floor(e%3600/60);return t?`${t}h ${i}m`:i?`${i}m ${e%60}s`:`${e}s`},_a=null,rl=null;function V_(){return _a||(_a=new(window.AudioContext||window.webkitAudioContext),rl=_a.createGain(),rl.gain.value=.5,rl.connect(_a.destination)),_a}function en(n,e=.08,t="sine",i=.06,s=1.5){if(H.sound)try{let r=V_(),a=r.createOscillator(),o=r.createGain();a.type=t,a.frequency.setValueAtTime(n,r.currentTime),a.frequency.exponentialRampToValueAtTime(n*s,r.currentTime+e),o.gain.setValueAtTime(i,r.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),a.connect(o).connect(rl),a.start(),a.stop(r.currentTime+e+.02)}catch{}}var Nu=[0,2,4,7,9,12,14,16],tl=0,W_=()=>{tl=(tl+1+(Math.random()<.3?1:0))%Nu.length,en(392*Math.pow(2,Nu[tl]/12),.12,"sine",.05,1.01),en(784*Math.pow(2,Nu[tl]/12),.06,"triangle",.015,1.01)},vl=n=>{try{navigator.vibrate&&navigator.vibrate(n)}catch{}},xp=He("stage"),Ri=He("cv"),jt=new Lo({canvas:Ri,antialias:!1,stencil:!1,depth:!0,powerPreference:"high-performance"});jt.setPixelRatio(Math.min(2,window.devicePixelRatio||1));jt.toneMapping=jn;jt.toneMappingExposure=1.05;var St=new Ms,dt=new Yt(42,1,.05,12e4),Oa=new Sd(jt,{frameBufferType:ws,multisampling:0});Oa.addPass(new bd(St,dt));var yp=new wd({mipmapBlur:!0,intensity:1.4,luminanceThreshold:.68,luminanceSmoothing:.25,radius:.72}),X_=new Td({offset:new ne(6e-4,5e-4),radialModulation:!0,modulationOffset:.35}),Y_=new Id({offset:.28,darkness:.62}),Mp=new Rd({premultiply:!0,blendFunction:Ne.SCREEN});Mp.blendMode.opacity.value=.06;var q_=new Pd({mode:cn.ACES_FILMIC});Oa.addPass(new el(dt,yp,Y_,Mp,q_));Oa.addPass(new el(dt,X_));Oa.addPass(new el(dt,new Dd({preset:Ts.HIGH})));var qu={set strength(n){yp.intensity=n*1.5},set radius(n){},resolution:{set(){}}},_p=new Wo,Q_=Math.min(8,jt.capabilities.getMaxAnisotropy()),It=(n,e=!0)=>{let t=_p.load("tex/"+n);return e&&(t.colorSpace=ze),t.anisotropy=Q_,t.wrapS=vs,t},Nt={sun:It("2k_sun.jpg"),moon:It("2k_moon.jpg"),mercury:It("2k_mercury.jpg"),mars:It("2k_mars.jpg"),venus:It("2k_venus_surface.jpg"),earth:It("2k_earth_daymap.jpg"),night:It("2k_earth_nightmap.jpg"),clouds:It("2k_earth_clouds.jpg",!1),jupiter:It("2k_jupiter.jpg"),saturn:It("2k_saturn.jpg"),sring:It("2k_saturn_ring_alpha.png"),uranus:It("2k_uranus.jpg"),neptune:It("2k_neptune.jpg"),ceres:It("2k_ceres_fictional.jpg"),haumea:It("2k_haumea_fictional.jpg"),makemake:It("2k_makemake_fictional.jpg"),eris:It("2k_eris_fictional.jpg"),mw:It("4k_stars_milky_way.jpg"),rockD:It("rock_Diffuse.jpg"),rockN:It("rock_nor_gl.jpg",!1),rockR:It("rock_Rough.jpg",!1)};[Nt.mw].forEach(n=>{n.anisotropy=1});var Qd=null;_p.load("tex/studio_env.jpg",n=>{n.mapping=ra,n.colorSpace=ze;let e=new gr(jt);Qd=e.fromEquirectangular(n).texture,n.dispose(),e.dispose(),[wp,Qu].forEach(t=>{t.envMap=Qd,t.needsUpdate=!0})});var es={uT:{value:0}},Z_=new Te(new Jt(6e4,48,32),new Pe({vertexShader:Od,fragmentShader:Vd,side:Tt,depthWrite:!1,uniforms:{uT:es.uT,uMap:{value:Nt.mw},uA:{value:et("#b4532a")},uB:{value:et("#1f8f8a")}}}));St.add(Z_);{let n=(e,t,i,s,r)=>{let a=new ct,o=new Float32Array(e*3),l=new Float32Array(e*3),c=[et("#ffffff"),et("#cfe3ff"),et("#ffe2c4"),et("#bfeee8"),et("#ff9a7a"),et("#9fb8ff"),et("#d7a8ff"),et("#ffd27a")];for(let p=0;p<e;p++){let v=new b().randomDirection().multiplyScalar(t+Math.random()*(i-t));o.set([v.x,v.y,v.z],p*3);let g=c[Math.random()*c.length|0],m=.5+Math.random()*.8;l.set([g.r*m,g.g*m,g.b*m],p*3)}a.setAttribute("position",new tt(o,3)),a.setAttribute("color",new tt(l,3));let u=document.createElement("canvas");u.width=u.height=32;let h=u.getContext("2d"),f=h.createRadialGradient(16,16,0,16,16,16);return f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.35,"rgba(255,255,255,.55)"),f.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=f,h.fillRect(0,0,32,32),new ei(a,new Vn({size:s*2.2,map:new wi(u),vertexColors:!0,transparent:!0,opacity:r,sizeAttenuation:!1,depthWrite:!1,blending:Pt}))};St.add(n(16e3,2e4,5e4,1,.75)),St.add(n(2400,2e4,5e4,1.8,.95)),St.add(n(260,2e4,5e4,3.2,1))}var cl=[["#ffd25a","#ff3d0a"],["#bfe0ff","#3d6dff"],["#ffffff","#b9a8ff"],["#ffb3ec","#c03cff"],["#b8ffe8","#18c79a"]],Da=new Pe({vertexShader:Ud,fragmentShader:Wd,uniforms:{uT:es.uT,uMap:{value:Nt.sun},uA:{value:et("#fff")},uB:{value:et("#fff")},uPulse:{value:0},uBright:{value:1}}}),In=new Te(new Jt(3,96,64),Da);St.add(In);var Pa=(n,e,t)=>new Pe({vertexShader:Bd,fragmentShader:Ld,uniforms:{uC:{value:et(n)},uI:{value:e},uP:{value:t}},transparent:!0,blending:Pt,depthWrite:!1,side:Cn}),Ia=new Pe({vertexShader:Xd,fragmentShader:Yd,uniforms:{uT:es.uT,uA:{value:et("#fff1d0")},uB:{value:et("#ff9a2e")},uI:{value:1},uR:{value:3/11}},transparent:!0,depthWrite:!1,blending:Pt}),za=new Te(new mr(22,22),Ia);za.material.uniforms.uC={value:Ia.uniforms.uA.value};za.renderOrder=2;St.add(za);var Ap=new qt;Ap.material={uniforms:{uI:{value:0},uC:{value:new Se}}};var Ar=n=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);if(n==="core"){i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.08,"rgba(255,240,210,.9)"),i.addColorStop(.25,"rgba(255,190,120,.25)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,256,256),t.globalCompositeOperation="lighter";for(let r=0;r<6;r++){t.save(),t.translate(128,128),t.rotate(r*Math.PI/6);let a=t.createLinearGradient(-128,0,128,0);a.addColorStop(0,"rgba(255,230,200,0)"),a.addColorStop(.5,"rgba(255,240,220,.12)"),a.addColorStop(1,"rgba(255,230,200,0)"),t.fillStyle=a,t.fillRect(-128,-1,256,2),t.restore()}}else if(n==="ring")i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.78,"rgba(0,0,0,0)"),i.addColorStop(.86,"rgba(160,220,255,.35)"),i.addColorStop(.9,"rgba(255,160,220,.25)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,256,256);else{t.translate(128,128),t.beginPath();for(let a=0;a<6;a++){let o=a*Math.PI/3;t.lineTo(Math.cos(o)*110,Math.sin(o)*110)}t.closePath();let r=t.createRadialGradient(0,0,0,0,0,110);r.addColorStop(0,"rgba(255,255,255,.10)"),r.addColorStop(.85,"rgba(255,255,255,.22)"),r.addColorStop(1,"rgba(255,255,255,.05)"),t.fillStyle=r,t.fill()}let s=new wi(e);return s.colorSpace=ze,s},Ha=new Ma,Sp=[new Xn(Ar("core"),240,0,new Se("#fff1d0")),new Xn(Ar("ring"),170,0,new Se("#ffd2a0")),new Xn(Ar("hex"),60,.55,new Se("#8fd3ff")),new Xn(Ar("hex"),110,.75,new Se("#c9a8ff")),new Xn(Ar("hex"),44,.95,new Se("#7affd8")),new Xn(Ar("ring"),200,1.15,new Se("#ffd2a0"))];Sp.forEach(n=>Ha.addElement(n));In.add(Ha);var Ep=new Yo(16777215,3,0,0);St.add(Ep);St.add(new qo(4210768,.4));function sh(){try{ai&&ai.clear(),pl&&pl()}catch{}let[n,e]=cl[H.novas%cl.length];Da.uniforms.uA.value.set(n),Da.uniforms.uB.value.set(e),Ia.uniforms.uA.value.set(n),Ia.uniforms.uB.value.set(e),Ha.children?.length,Sp.forEach((t,i)=>t.color.set(i?e:n)),Ep.color.set(n),ka.forEach(t=>t.uniforms.uStar.value.set(n))}var ka=[],Zd=(n,e,t,i,s)=>{let r=new Pe({vertexShader:Iu,fragmentShader:Nd,uniforms:{uT:es.uT,uSeed:{value:s},uKind:{value:n},uA:{value:et(e)},uB:{value:et(t)},uC:{value:et(i)},uStar:{value:et("#ffcf6a")}}});return ka.push(r),r},Fu=(n,e={})=>{let t=new Pe({vertexShader:Lu,fragmentShader:zd,uniforms:{uMap:{value:n},uNight:{value:e.night||n},uHasNight:{value:e.night?1:0},uHue:{value:e.hue||0},uSat:{value:e.sat??1},uTint:{value:et(e.tint||"#ffffff")},uBump:{value:e.bump??1.2},uSpec:{value:e.spec??0},uRough:{value:e.rough??.4},uUOff:{value:e.uoff??Math.random()},uStar:{value:et("#ffe9c8")}},extensions:{derivatives:!0}});return ka.push(t),t},K_=()=>{let n=new Pe({vertexShader:Lu,fragmentShader:Hd,uniforms:{uMap:{value:Nt.clouds},uStar:{value:et("#ffe9c8")},uOff:{value:Math.random()}},transparent:!0,depthWrite:!1});return ka.push(n),n},nl=new Jt(1,128,96),Kd=(()=>{let n=document.createElement("canvas");n.width=128,n.height=80;let e=n.getContext("2d");e.fillStyle="#0b2a3a",e.fillRect(0,0,128,80);for(let i=0;i<8;i++)for(let s=0;s<5;s++){let r=e.createLinearGradient(i*16,s*16,i*16+14,s*16+14);r.addColorStop(0,"#1f6f9a"),r.addColorStop(1,"#0d3550"),e.fillStyle=r,e.fillRect(i*16+1,s*16+1,14,14)}e.strokeStyle="#cfd8e0",e.lineWidth=2,e.strokeRect(1,1,126,78);let t=new wi(n);return t.colorSpace=ze,t})(),wp=new Xi({map:Kd,color:16777215,metalness:.6,roughness:.25,emissive:2872480,emissiveMap:Kd,emissiveIntensity:.6,side:wt,envMapIntensity:1.4}),Qu=new Xi({color:15329013,metalness:.95,roughness:.18,envMapIntensity:1.4,emissiveMap:(()=>{let n=document.createElement("canvas");n.width=1024,n.height=64;let e=n.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,1024,64),e.fillStyle="#a78bfa";for(let i=0;i<1024;i+=32)e.fillRect(i,0,2,64);e.fillRect(0,30,1024,3);let t=new wi(n);return t.wrapS=t.wrapT=vs,t.repeat.set(4,1),t})(),emissive:16777215,emissiveIntensity:1.2}),Jd=(n,e)=>new Te(new Jt(n*1.12,48,32),new Pe({vertexShader:Iu,fragmentShader:Fd,uniforms:{uC:{value:et(e)}},transparent:!0,blending:Pt,depthWrite:!1,side:Tt})),jd=new Jt(1,64,48),Rn={mote:[5.2,6.6],rock:[8,10.5],moon:[12.5,14.5],plan:[16,19],giant:[21,25],ring:[27,29.5],dyson:[4.4,5.6],pulsar:[32,34],hole:[37,40]},J_={moon:10,plan:8,giant:6,ring:4,pulsar:4,hole:3},Un={};An.forEach(n=>Un[n.id]=[]);var Fr=new Lt;St.add(Fr);var Tp=new vr({color:10980346,transparent:!0,opacity:.05,depthWrite:!1});function j_(n,e){let t=[];for(let s=0;s<=128;s++){let r=s/128*Math.PI*2;t.push(new b(Math.cos(r)*n,0,Math.sin(r)*n))}let i=new ma(new ct().setFromPoints(t),Tp);i.rotation.x=e,Fr.add(i)}var st=(n,e)=>n+Math.random()*(e-n);function $_(n,e){let t=Math.random()*10,[i,s]=Rn[n],r=st(i,s),a=st(-.08,.08),o=.9/Math.pow(r,1.5)*st(.9,1.1),l={r,inc:a,sp:o,a:Math.random()*Math.PI*2,spin:st(.1,.4),obj:new Lt},c;if(n==="moon"){let u=st(.35,.55),h=[Nt.moon,Nt.mercury,Nt.ceres,Nt.eris][e%4];c=new Te(nl,Fu(h,{bump:2.4,sat:.75})),c.scale.setScalar(u)}else if(n==="plan"){let u=st(.75,1.05),h=e%4;if(c=new Te(nl,Fu(h===3?Nt.mars:Nt.earth,{night:h===3?null:Nt.night,hue:0,spec:h===3?0:1,bump:h===3?1.6:.9})),c.scale.setScalar(u),h!==3){let f=new Te(nl,K_());f.scale.setScalar(1.012),c.add(f),l.clouds=f}c.add(Jd(1,h===3?"#ff9a6a":"#6fb7ff"))}else if(n==="giant"){let u=st(1.6,2.2),h=e%4,f=[Nt.jupiter,Nt.saturn,Nt.uranus,Nt.neptune][h];if(c=new Te(nl,Fu(f,{bump:0,hue:e>=4?.35:0})),c.scale.setScalar(u),c.add(Jd(1,["#e8c49a","#f2dcae","#a8e6ee","#5b7cff"][h])),h===1||h===2||e%3===0){let p=new Te(new Wi(1.25,2.35,192,1),new Pe({vertexShader:kd,fragmentShader:Gd,uniforms:{uMap:{value:Nt.sring},uStar:{value:et("#ffe9c8")},uIn:{value:1.25},uOut:{value:2.35},uTint:{value:et(h===2?"#bfe9f0":"#ffffff")}},transparent:!0,side:wt,depthWrite:!1}));ka.push(p.material),p.rotation.x=-Math.PI/2+(h===2?1.3:.42),c.add(p)}}else if(n==="ring"){c=new Lt;let u=new Te(new Go(1.3,.12,32,220),Qu);u.rotation.x=Math.PI/2;let h=new Lt;h.rotation.x=st(-.4,.4),h.add(u),c.add(h);let f=Nt.earth.clone();f.wrapS=f.wrapT=vs,f.repeat.set(5,.18),f.offset.set(0,.42),f.needsUpdate=!0;let p=new Te(new As(1.165,1.165,.2,220,1,!0),new Xi({map:f,roughness:.85,metalness:0,side:Tt,emissive:2241365,emissiveIntensity:.25}));h.add(p);let v=new Te(new As(1.16,1.16,.025,220,1,!0),new vn({color:10473727,transparent:!0,opacity:.5,blending:Pt,depthWrite:!1,side:wt}));v.position.y=.11,h.add(v);let g=v.clone();g.position.y=-.11,h.add(g);for(let d=0;d<3;d++){let A=new Te(new As(.02,.02,2.3,8),Qu);A.rotation.z=Math.PI/2;let E=new Lt;E.rotation.y=d*Math.PI/3,E.add(A),h.add(E)}let m=new Te(jd,Zd(3,"#cfc8ea","#7a70a8","#7aa7ff",t+1));m.scale.setScalar(.3),c.add(m)}else if(n==="pulsar"){c=new Lt;let u=new Te(jd,Zd(4,"#9fb8ff","#3a4aa8","#e6f0ff",t));u.scale.setScalar(.35),c.add(u),c.add(new Te(new Jt(.7,32,24),Pa("#7aa7ff",1.6,1.8)));let h=new Pe({transparent:!0,blending:Pt,depthWrite:!1,side:wt,uniforms:{uT:es.uT},vertexShader:"varying vec2 vUv; varying float vF; void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.0); vec3 n=normalize(normalMatrix*normal); vF=abs(dot(n,normalize(-mv.xyz))); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform float uT; varying vec2 vUv; varying float vF; void main(){ float l=vUv.y; float a=pow(l,1.6)*pow(vF,1.4); a*=0.85+0.15*sin(uT*30.0-l*40.0); vec3 c=mix(vec3(0.45,0.6,1.0),vec3(0.95,0.98,1.0),pow(l,3.0)); gl_FragColor=vec4(c*a*1.1,a); }"}),f=new Lt;[1,-1].forEach(p=>{let v=new Te(new Ho(.35,6,24,1,!0),h);v.position.y=3*p,v.rotation.x=p>0?Math.PI:0,f.add(v)}),f.rotation.z=.5,c.add(f),l.beam=f}else if(n==="hole"){c=new Lt,c.add(new Te(new Jt(.8,48,32),new vn({color:0}))),c.add(new Te(new Jt(.86,48,32),Pa("#ffb08a",2.2,6)));let u=new Te(new Wi(.8,2.6,128,1),new Pe({vertexShader:Uu,fragmentShader:Bu,uniforms:{uT:es.uT},transparent:!0,side:wt,blending:Pt,depthWrite:!1}));u.rotation.x=-Math.PI/2+.25,c.add(u),l.disk=u;let h=new Te(new Wi(.84,1.55,128,1),new Pe({vertexShader:Uu,fragmentShader:Bu,uniforms:{uT:es.uT},transparent:!0,side:wt,blending:Pt,depthWrite:!1,opacity:.6}));h.renderOrder=-1,c.add(h),l.halo=h;let f=new Te(new Wi(.81,.845,160,1),new vn({color:16773590,transparent:!0,opacity:.9,blending:Pt,depthWrite:!1,side:wt}));c.add(f),l.photon=f,c.scale.setScalar(st(.9,1.2))}return l.obj.add(c),l.mesh=c,l.size={moon:.5,plan:.9,giant:2.2,ring:1.5,pulsar:.8,hole:2.6}[n]||1,l.label=(An.find(u=>u.id===n)||{}).n,St.add(l.obj),j_(r,a),l.born=performance.now(),l.obj.scale.setScalar(.001),l}var rh=900,Br=new ct,al=new Float32Array(rh*3),bp=[];for(let n=0;n<rh;n++)bp.push({r:st(...Rn.mote),a:Math.random()*6.28,y:st(-.25,.25),s:st(.8,1.2)});Br.setAttribute("position",new tt(al,3));Br.setDrawRange(0,0);var ah=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,240,220,.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new wi(n)})(),eA=new ei(Br,new Vn({size:.22,map:ah,color:16771528,transparent:!0,blending:Pt,depthWrite:!1}));St.add(eA);var oh=700,tA=(()=>{let n=new ko(1,3),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=new b().fromBufferAttribute(e,t);i.multiplyScalar(.8+.25*Math.sin(i.x*3.1+1.7)*Math.cos(i.y*2.3)+.12*Math.sin(i.z*7)),e.setXYZ(t,i.x,i.y,i.z)}return n.computeVertexNormals(),n})(),Us=new pa(tA,new Xi({map:Nt.rockD,normalMap:Nt.rockN,roughnessMap:Nt.rockR,color:12168612,roughness:1,metalness:.02}),oh);Us.count=0;St.add(Us);var Cp=[];for(let n=0;n<oh;n++)Cp.push({r:st(...Rn.rock),a:Math.random()*6.28,y:st(-.35,.35),s:st(.05,.22),rx:Math.random()*6,ry:Math.random()*6,sp:st(.2,1)});var lh=600,Bs=new pa(new ys(.16,.1,.008),wp,lh);Bs.count=0;St.add(Bs);var Rp=[];for(let n=0;n<lh;n++)Rp.push({r:st(...Rn.dyson),th:Math.acos(st(-1,1)),ph:Math.random()*6.28,sp:st(.15,.35)});var si=new qt;function Ga(){for(let n of["moon","plan","giant","ring","pulsar","hole"]){let e=Math.min(J_[n],H.own[n]||0),t=Un[n];for(;t.length<e;)t.push($_(n,t.length));for(;t.length>e;){let i=t.pop();St.remove(i.obj)}}Object.values(Un).some(n=>n.length)||Fr.clear(),Br.setDrawRange(0,Math.min(rh,(H.own.mote||0)*12)),Us.count=Math.min(oh,(H.own.rock||0)*10),Bs.count=Math.min(lh,(H.own.dyson||0)*30)}var Ft=null,$d=Kt()+4e4,ch=new Te(new Jt(.35,24,16),new vn({color:16777215})),uh=new Te(new Jt(1.1,24,16),Pa("#ffc65c",2.4,1.5)),ul=60,Rr=new ct,Dp=new Float32Array(ul*3),Pp=new Float32Array(ul*3);Rr.setAttribute("position",new tt(Dp,3));Rr.setAttribute("color",new tt(Pp,3));var Ip=new ei(Rr,new Vn({size:.55,map:ah,vertexColors:!0,transparent:!0,blending:Pt,depthWrite:!1}));function hh(){let n=Math.random()*6.28,e=new b(Math.cos(n)*60,st(-6,10),Math.sin(n)*60),t=new b(-e.x*.4+st(-10,10),st(-3,5),-e.z*.4+st(-10,10)).normalize().multiplyScalar(-60).negate();Ft={p:e.clone(),v:t.sub(e).normalize().multiplyScalar(11),hist:[]},St.add(ch,uh,Ip),en(990,.4,"triangle",.03,1.3)}function fh(){St.remove(ch,uh,Ip),Ft=null,typeof qe<"u"&&(qe=null)}var Or=600,Ua=new ct,Er=new Float32Array(Or*3),ba=new Float32Array(Or*3),Cs=new Float32Array(Or*3),ol=new Float32Array(Or);Ua.setAttribute("position",new tt(Er,3));Ua.setAttribute("color",new tt(ba,3));St.add(new ei(Ua,new Vn({size:.35,map:ah,vertexColors:!0,transparent:!0,blending:Pt,depthWrite:!1})));var ep=0;function hl(n,e,t,i=6){let s=et(e);for(let r=0;r<t;r++){let a=ep=(ep+1)%Or,o=new b().randomDirection().multiplyScalar(i*st(.3,1));Er.set([n.x,n.y,n.z],a*3),Cs.set([o.x,o.y,o.z],a*3),ba.set([s.r,s.g,s.b],a*3),ol[a]=1}}var Dr=new Te(new Jt(1,64,48),Pa("#ffffff",3,1.2));Dr.visible=!1;St.add(Dr);var Zi=-1,dh=new Lt;St.add(dh);var ph=11e4,mh=new ct,Up=new Float32Array(ph*3),Bp=new Float32Array(ph*3);{let n=et("#ffd9b0"),e=et("#9fc3ff"),t=et("#c9a8ff"),i=et("#ff9fc8"),s=et("#9fffe0"),r=new b(-2600,-300,1400);for(let a=0;a<ph;a++){let o=a%3,l=Math.pow(Math.random(),.6)*5200,c=o*2.094+l*.0011+(Math.random()-.5)*(.9-l/9e3),u=Math.cos(c)*l+(Math.random()-.5)*260,h=Math.sin(c)*l+(Math.random()-.5)*260,f=(Math.random()-.5)*120*(1-l/6e3);Up.set([u+r.x,f+r.y,h+r.z],a*3);let p=Math.random(),v=l<900?n:p<.35?e:p<.65?t:p<.82?i:s,g=.4+Math.random()*.7;Bp.set([v.r*g,v.g*g,v.b*g],a*3)}}mh.setAttribute("position",new tt(Up,3));mh.setAttribute("color",new tt(Bp,3));var Zu=new Vn({size:26,map:null,vertexColors:!0,transparent:!0,opacity:0,blending:Pt,depthWrite:!1}),nA=new ei(mh,Zu);dh.add(nA);var Lp=[],Np=He("labels"),iA=["Vela Reach","Kepler Drift","Ashfall","Tyrian Gate","Halcyon","Morrow","Cinder Belt","Lumen"];for(let n=0;n<8;n++){let e=n*.785+st(-.2,.2),t=st(260,900),i=new Lt;i.position.set(Math.cos(e)*t,st(-60,60),Math.sin(e)*t);let s=["#ffcf6a","#9fc3ff","#ff9b7a","#c9a8ff","#9fffe0"][n%5],r=new Te(new Jt(4,32,24),new vn({color:s}));r.material.color.multiplyScalar(2),i.add(r),i.add(new Te(new Jt(14,32,24),Pa(s,1.2,1.6)));for(let o=0;o<2+n%3;o++){let l=[],c=20+o*12;for(let h=0;h<=64;h++)l.push(new b(Math.cos(h/64*6.283)*c,0,Math.sin(h/64*6.283)*c));i.add(new ma(new ct().setFromPoints(l),new vr({color:s,transparent:!0,opacity:.18})));let u=new Te(new Jt(1.6+o,16,12),new Xi({color:s,roughness:.8}));u.userData={r:c,a:Math.random()*6.28,sp:.3/(o+1)},i.add(u)}dh.add(i);let a=document.createElement("div");a.className="syslbl",a.innerHTML=`<b>${iA[n]}</b><span>Locked \xB7 coming soon</span>`,Np.appendChild(a),Lp.push({g:i,el:a})}var gh=(()=>{let n=document.createElement("canvas");n.width=n.height=32;let e=n.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new wi(n)})(),$i=["#ffffff","#cfe3ff","#ffe2c4","#ff9a7a","#9fb8ff","#d7a8ff","#ffd27a","#9fffe0"].map(et),sA=(()=>{let e=new ct,t=new Float32Array(24e3*3),i=new Float32Array(24e3*3);for(let a=0;a<24e3;a++){let o=new b().randomDirection().multiplyScalar(260+Math.pow(Math.random(),.7)*14e3);o.y*=.55,t.set([o.x,o.y,o.z],a*3);let l=$i[Math.random()*$i.length|0],c=.35+Math.random()*.9;i.set([l.r*c,l.g*c,l.b*c],a*3)}e.setAttribute("position",new tt(t,3)),e.setAttribute("color",new tt(i,3));let s=new Vn({size:9,map:gh,vertexColors:!0,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1,blending:Pt}),r=new ei(e,s);return St.add(r),s})(),fl=new Lt;St.add(fl);for(let n=0;n<70;n++){let e=Math.random()*6.283,t=380+Math.pow(Math.random(),.8)*4200,i=new Lt;i.position.set(Math.cos(e)*t,(Math.random()-.5)*300,Math.sin(e)*t);let s=$i[Math.random()*$i.length|0],r=new No(new da({map:gh,color:s,transparent:!0,blending:Pt,depthWrite:!1}));r.scale.setScalar(28+Math.random()*30),i.add(r);let a=new Te(new Wi(16,16.6,64),new vn({color:s,transparent:!0,opacity:.12,side:wt,depthWrite:!1}));a.rotation.x=Math.PI/2+(Math.random()-.5)*.6,i.add(a),fl.add(i)}var vh=new Lt;St.add(vh);for(let n=0;n<18;n++){let t=new ct,i=new Float32Array(2600*3),s=new Float32Array(2600*3),r=$i[Math.random()*$i.length|0],a=$i[Math.random()*$i.length|0],o=2+n%3,l=700+Math.random()*900;for(let h=0;h<2600;h++){let f=Math.pow(Math.random(),.7)*l,p=h%o*(6.283/o)+f*(2.4/l)+(Math.random()-.5)*.7;i.set([Math.cos(p)*f,(Math.random()-.5)*40,Math.sin(p)*f],h*3);let v=f<l*.25?r:a,g=.4+Math.random()*.7;s.set([v.r*g,v.g*g,v.b*g],h*3)}t.setAttribute("position",new tt(i,3)),t.setAttribute("color",new tt(s,3));let c=new ei(t,new Vn({size:3,map:gh,vertexColors:!0,transparent:!0,opacity:0,sizeAttenuation:!1,depthWrite:!1,blending:Pt})),u=new b().randomDirection().multiplyScalar(14e3+Math.random()*2e4);c.position.copy(u),c.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),vh.add(c)}var xl=document.createElement("div");xl.className="syslbl home";xl.innerHTML="<b>Your system</b><span>You are here</span>";Np.appendChild(xl);var rA=new b;function aA(n){let e=Ti.smoothstep(n,180,900),t=Ti.smoothstep(n,1500,5e3);{let s=Ti.smoothstep(n,30,260);sA.opacity=s*.85,fl.visible=e>.01,fl.children.forEach(r=>{r.children[0].material.opacity=e*(1-t*.6),r.children[1].visible=e>.3&&t<.5}),vh.children.forEach(r=>r.material.opacity=.25+t*.75)}Zu.opacity=t*.42,Zu.size=3+t*3.5,Fr.visible=n<1200,Tp.opacity=.05*(1-e);let i=n<25?"Close-up":n<180?"Your system":n<1500?"Local sector":"The galaxy";He("zlvl").textContent!==i&&(He("zlvl").textContent=i);for(let s of Lp)s.g.children.forEach(r=>{r.userData.r&&(r.userData.a+=.016*r.userData.sp,r.position.set(Math.cos(r.userData.a)*r.userData.r,0,Math.sin(r.userData.a)*r.userData.r))}),tp(s.el,s.g.position,e*(1-t));tp(xl,rA.set(0,8,0),e*(1-t*.5))}function tp(n,e,t){if(t<.02){n.style.opacity=0;return}let i=e.clone().project(dt);if(i.z>1){n.style.opacity=0;return}n.style.opacity=t,n.style.transform=`translate(${(i.x+1)/2*Dn}px,${(1-i.y)/2*Pn}px) translate(-50%,-140%)`}var wa=1,Dn=1,Pn=1,Ba=70,Aa=.6,Ps=.42,Ku=0,Rs=0,Pr=0;function Lr(){let n=xp.getBoundingClientRect(),e=Math.max(1,Math.round(n.width)),t=Math.max(1,Math.round(n.height));if(e===Dn&&t===Pn&&Lr._ok)return;Lr._ok=1,Dn=e,Pn=t,jt.setSize(Dn,Pn,!1),Oa.setSize(Dn,Pn,!1),qu.resolution.set(Dn/2,Pn/2),dt.aspect=Dn/Pn,dt.updateProjectionMatrix();let i=44,s=Ti.degToRad(dt.fov)/2,r=Math.atan(Math.tan(s)*dt.aspect);Ba=i/Math.sin(Math.min(s,r))*(dt.aspect<1?.68:.82),wa=1}window.addEventListener("resize",Lr);try{new ResizeObserver(()=>Lr()).observe(xp)}catch{}var Ds=new Zo,np=new ne,Is=0,Yn=null,oi=new Map,Ca=0,Ou=0,bi=0,Gt=null,zu=new b,Sa=new b,oA=-4.2,lA=5.4,ci=n=>{bi=Ti.clamp(n,Gt?-5.6:oA,lA)};Ri.addEventListener("pointerdown",n=>{try{Ri.setPointerCapture?.(n.pointerId)}catch{}if(oi.set(n.pointerId,{x:n.clientX,y:n.clientY}),oi.size===2){let[e,t]=[...oi.values()];Ca=Math.hypot(e.x-t.x,e.y-t.y),Yn=null}else Yn={x:n.clientX,y:n.clientY,t:performance.now(),moved:0}});Ri.addEventListener("pointermove",n=>{if(!oi.has(n.pointerId)||Wt)return;if(oi.set(n.pointerId,{x:n.clientX,y:n.clientY}),oi.size===2){let[i,s]=[...oi.values()],r=Math.hypot(i.x-s.x,i.y-s.y);Ca&&ci(bi-Math.log(r/Ca)*1.2),Ca=r;return}if(!Yn)return;let e=n.clientX-Yn.x,t=n.clientY-Yn.y;Yn.moved+=Math.abs(e)+Math.abs(t),Yn.x=n.clientX,Yn.y=n.clientY,Yn.moved>8&&(Ku=e*.004,Ps=Ti.clamp(Ps+t*.004,-1.2,1.35))});var Fp=n=>{oi.delete(n.pointerId),oi.size<2&&(Ca=0)};Ri.addEventListener("pointerup",n=>{let e=Yn,t=oi.size>1;if(Fp(n),Yn=null,Wt)return hp(n.clientX,n.clientY);t||!e||e.moved>8||hp(n.clientX,n.clientY)});Ri.addEventListener("pointercancel",Fp);Ri.addEventListener("wheel",n=>{n.preventDefault(),!Wt&&(ci(bi+Math.sign(n.deltaY)*Math.min(.6,Math.abs(n.deltaY)/250)),He("hint").classList.add("gone"))},{passive:!1});Ri.addEventListener("dblclick",()=>{Wt||(Gt=null,ci(0))});He("zin").onclick=()=>ci(bi-.7);He("zout").onclick=()=>ci(bi+.7);He("zhome").onclick=()=>{Gt=null,ci(0)};var Wt=(()=>{try{return localStorage.getItem("orbit.mode")==="tap"}catch{return!1}})(),rs=document.createElement("div");rs.id="modesw";rs.setAttribute("role","tablist");rs.setAttribute("aria-label","Screen");rs.innerHTML='<button role="tab" data-m="tap">Tap</button><button role="tab" data-m="view">View</button>';He("stage").appendChild(rs);["pointerdown","touchstart","mousedown"].forEach(n=>rs.addEventListener(n,e=>e.stopPropagation(),{passive:!0}));function Op(n,e){Wt=n==="tap";try{localStorage.setItem("orbit.mode",n)}catch{}He("app").classList.toggle("tapmode",Wt),rs.querySelectorAll("button").forEach(t=>{let i=t.dataset.m===n;t.classList.toggle("on",i),t.setAttribute("aria-selected",i)}),ts&&Fa(!1),Gt=null,Ls=1,Ns=Fs=0,e||en(Wt?520:780,.08,"sine",.03,1.1)}rs.addEventListener("click",n=>{let e=n.target.closest("[data-m]");e&&Op(e.dataset.m)});setTimeout(()=>Op(Wt?"tap":"view",!0),0);var Ot=document.createElement("canvas");Ot.id="tapv";Ot.setAttribute("aria-label","Your star system. Tap the sun to collect stardust. Tap comets for a bonus.");He("stage").insertBefore(Ot,He("labels"));var Mn=Ot.getContext("2d"),dl=document.createElement("canvas"),cA=dl.getContext("2d"),ri=document.createElement("canvas"),Zt=(()=>{try{return(localStorage.getItem("helios.style")||H.style)==="smooth"}catch{return!1}})(),wr=0,Tr=0,qn=1,$t=3,Qt=0,Vt=0,qe=null,Di=0,zp=0,Ls=1,Ns=0,Fs=0,Ir=[],Ur=[],ip=[["#fffbd0","#ffe600","#ff8a00","#ff2e6e"],["#eaffff","#00f0ff","#2d7bff","#7a2cff"],["#ffffff","#e6ccff","#b86bff","#ff2ea6"],["#fff0fb","#ff8ad8","#ff2ea6","#9b1cff"],["#f4ffe0","#7dff3a","#00d68f","#00a3ff"]],uA=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Nr=(n,e)=>(uA[(e&3)*4+(n&3)]+.5)/16,rt=(n,e)=>{let t=n*374761393+e*668265263|0;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967296},Ki=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Os=()=>ip[H.novas%ip.length];function At(n,e,t,i,s){Zt?(n.beginPath(),n.arc(e+i/2,t+s/2,Math.max(.5,Math.max(i,s)*.55),0,6.283),n.fill()):n.fillRect(e,t,i,s)}var Hp=[];function yl(){let n=Ot.getBoundingClientRect();n.width&&(qn=Math.min(2,devicePixelRatio||1),wr=n.width,Tr=n.height,Ot.width=Math.round(wr*qn),Ot.height=Math.round(Tr*qn),$t=Math.max(2,Math.round(Math.min(wr,Tr)/210)),Qt=Math.ceil(wr/$t),Vt=Math.ceil(Tr/$t),dl.width=Qt,dl.height=Vt,ri.width=Qt,ri.height=Vt,hA(),Hp=Array.from({length:Math.round(Qt*Vt/140)},(e,t)=>({x:rt(t,7)*Qt|0,y:rt(t,9)*Vt|0,c:["#ffffff","#9ff8ff","#ffe6ff","#fff59a"][t%4],p:rt(t,3)*6.28,s:.6+rt(t,5)*2.2,big:rt(t,11)>.93})))}function hA(){if(Zt){ri.width=Math.round(wr*qn),ri.height=Math.round(Tr*qn);let r=ri.getContext("2d"),a=ri.width,o=ri.height,l=r.createLinearGradient(0,0,0,o);l.addColorStop(0,"#3a0f7a"),l.addColorStop(.35,"#2a0e63"),l.addColorStop(.7,"#1a1a6e"),l.addColorStop(1,"#0c2d7a"),r.fillStyle=l,r.fillRect(0,0,a,o);for(let[c,u,h,f]of[[.25,.3,"255,46,166",.42],[.78,.7,"0,200,255",.38],[.6,.15,"122,44,255",.3]]){let p=f*a,v=r.createRadialGradient(c*a,u*o,0,c*a,u*o,p);v.addColorStop(0,`rgba(${h},.42)`),v.addColorStop(1,`rgba(${h},0)`),r.fillStyle=v,r.fillRect(0,0,a,o)}return}let n=ri.getContext("2d"),e=n.createImageData(Qt,Vt),t=e.data,i=[Ki("#3a0f7a"),Ki("#2a0e63"),Ki("#1a1a6e"),Ki("#0c2d7a")],s=[[.25,.3,Ki("#ff2ea6"),.42],[.78,.7,Ki("#00c8ff"),.38],[.6,.15,Ki("#7a2cff"),.3]];for(let r=0;r<Vt;r++)for(let a=0;a<Qt;a++){let o=r/Vt*(i.length-1),l=Math.min(i.length-2,Math.floor(o)),c=o-l,u=c>Nr(a,r)?i[l+1]:i[l],h=u[0],f=u[1],p=u[2];for(let[g,m,d,A]of s){let E=a/Qt-g,M=(r/Vt-m)*(Vt/Qt),I=Math.max(0,1-Math.sqrt(E*E+M*M)/A);I*I*.55+(rt(a>>2,r>>2)-.5)*.08*I>Nr(a+1,r+2)*.9&&(h=h*.55+d[0]*.45,f=f*.55+d[1]*.45,p=p*.55+d[2]*.45)}let v=(r*Qt+a)*4;t[v]=h,t[v+1]=f,t[v+2]=p,t[v+3]=255}n.putImageData(e,0,0)}addEventListener("resize",yl);yl();window.heliosStyle=n=>{Zt=n==="smooth",H.style=n;try{localStorage.setItem("helios.style",n)}catch{}document.documentElement.classList.toggle("smooth",Zt),ai.clear(),yl(),pl()};document.documentElement.classList.toggle("smooth",Zt);function un(n,e,t,i,s,r={}){if(Zt)return fA(n,e,t,i,s,r);e|=0,t|=0;let a=i*i,o=s.map(Ki);for(let l=-i;l<=i;l++)for(let c=-i;c<=i;c++){let u=c*c+l*l;if(u>a)continue;let h=Math.sqrt(u)/i*.75+(c+l)/(i*2)*.55+.2;if(r.bands&&(h=h*.5+(Math.sin(l/i*r.bands+r.ph)*.5+.5)*.6),r.spots&&rt(c+r.seed,l)>1-r.spots&&(h-=.35),r.land&&rt(c+r.seed*7>>1,l>>1)>.62){n.fillStyle=r.land[h+Nr(c,l)*.3>.6?1:0],n.fillRect(e+c,t+l,1,1);continue}let f=Math.max(0,Math.min(o.length-1,Math.floor(h*(o.length-1)+Nr(c+e,l+t)*.9)));n.fillStyle=s[f],n.fillRect(e+c,t+l,1,1)}}function fA(n,e,t,i,s,r={}){if(i<=0)return;n.save(),n.beginPath(),n.arc(e,t,i,0,6.283),n.clip();let a=n.createRadialGradient(e-i*.38,t-i*.38,i*.05,e,t,i*1.05);if(s.forEach((l,c)=>a.addColorStop(c/(s.length-1),l)),n.fillStyle=a,n.fillRect(e-i,t-i,i*2,i*2),r.bands){n.globalAlpha=.16;for(let l=-i;l<i;l+=i/4.5)n.fillStyle=Math.round(l/(i/4.5))+(r.ph|0)&1?s[0]:s[s.length-1],n.fillRect(e-i,t+l,i*2,i/9+Math.sin(l+r.ph)*i/30);n.globalAlpha=1}if(r.land){n.fillStyle=r.land[1];for(let l=0;l<5;l++){let c=rt(l,r.seed|0)*6.28,u=rt(l+9,r.seed|0)*i*.7;n.beginPath(),n.ellipse(e+Math.cos(c)*u,t+Math.sin(c)*u,i*(.18+rt(l,4)*.2),i*(.12+rt(l,6)*.14),c,0,6.283),n.fill()}}if(r.spots){n.fillStyle="rgba(0,0,0,.1)";for(let l=0;l<6;l++){let c=rt(l,(r.seed|0)+3)*6.28,u=rt(l+2,(r.seed|0)+5)*i*.75;n.beginPath(),n.arc(e+Math.cos(c)*u,t+Math.sin(c)*u,i*(.08+rt(l,8)*.12),0,6.283),n.fill()}}let o=n.createRadialGradient(e-i*.3,t-i*.3,i*.6,e,t,i*1.02);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(10,0,40,.35)"),n.fillStyle=o,n.fillRect(e-i,t-i,i*2,i*2),n.restore()}var sp={};function xh(n){let e=sp[n];return e?e.ok?e:null:(e=sp[n]=new Image,e.onload=()=>{e.ok=!0,ai.clear()},e.src=n,null)}var rp=["bg/nebula.jpg","bg/mist.jpg","bg/clouds.jpg"];function dA(n){let e=xh(rp[H.novas%rp.length]);if(!e)return!1;let t=Ot.width,i=Ot.height,s=Math.max(t/e.width,i/e.height)*1.08,r=e.width*s,a=e.height*s,o=(t-r)/2+Math.sin(n*.021)*(r-t)*.45,l=(i-a)/2+Math.cos(n*.017)*(a-i)*.45;Mn.drawImage(e,o,l,r,a);let c=Mn.createLinearGradient(0,0,0,i);return c.addColorStop(0,"rgba(5,2,20,.55)"),c.addColorStop(.22,"rgba(5,2,20,.1)"),c.addColorStop(.8,"rgba(5,2,20,.05)"),c.addColorStop(1,"rgba(5,2,20,.5)"),Mn.fillStyle=c,Mn.fillRect(0,0,t,i),!0}var ap={moon:["tex/2k_moon.jpg","tex/2k_mercury.jpg","tex/2k_ceres_fictional.jpg","tex/2k_eris_fictional.jpg"],plan:["tex/2k_earth_daymap.jpg","tex/2k_earth_daymap.jpg","tex/2k_venus_surface.jpg","tex/2k_mars.jpg"],giant:["tex/2k_jupiter.jpg","tex/2k_saturn.jpg","tex/2k_uranus.jpg","tex/2k_neptune.jpg"]},Hu={plan:["#6fb7ff","#6fb7ff","#ffcf8a","#ff9a6a"],giant:["#e8c49a","#f2dcae","#a8e6ee","#5b7cff"]};function op(n,e,t,i,s,r,a){n.save(),n.beginPath(),n.arc(e,t,i,0,6.283),n.clip();let o=s.height*2*(i*2)/s.height,l=rt(r,77)*o%o;n.drawImage(s,e-i-l,t-i,o,i*2),n.drawImage(s,e-i-l+o,t-i,o,i*2);let c=n.createRadialGradient(e-i*.45,t-i*.45,i*.1,e,t,i*1.08);if(c.addColorStop(0,"rgba(255,255,255,.18)"),c.addColorStop(.5,"rgba(0,0,0,0)"),c.addColorStop(.82,"rgba(0,0,10,.55)"),c.addColorStop(1,"rgba(0,0,10,.9)"),n.fillStyle=c,n.fillRect(e-i,t-i,i*2,i*2),n.restore(),a){let u=n.createRadialGradient(e,t,i*.92,e,t,i*1.18);u.addColorStop(0,a+"00"),u.addColorStop(.45,a+"88"),u.addColorStop(1,a+"00"),n.fillStyle=u,n.beginPath(),n.arc(e,t,i*1.18,0,6.283),n.fill()}}var ai=new Map;function kp(n,e,t){let i=n+e+":"+t+":"+H.novas%5+(Zt?"s"+$t*qn:""),s=ai.get(i);if(s)return s;ai.size>300&&ai.clear();let r=Zt?$t*qn:1,a=n==="giant"||n==="hole"||n==="ring"?t*2+3:2,o=(t+a)*2+1;s=document.createElement("canvas"),s.width=s.height=Math.ceil(o*r),s.sc=r;let l=s.getContext("2d"),c=t+a;l.scale(r,r);let u=(f,p,v,g,m)=>{if(Zt){l.lineWidth=Math.max(.8,f/9),l.strokeStyle=v,l.beginPath(),l.ellipse(c,c,f,p,0,m?Math.PI:0,m?2*Math.PI:Math.PI),l.stroke();return}for(let d=0;d<6.283;d+=.6/Math.max(f,4)){let A=Math.sin(d)*p;(m?A>0:A<0)||(l.fillStyle=Math.round(d*9)&1?v:g,l.fillRect(c+Math.round(Math.cos(d)*f),c+Math.round(A),1,1))}},h=Zt&&ap[n]&&xh(ap[n][e%4]);if(h&&n!=="giant")return op(l,c,c,t,h,e,Hu[n]&&Hu[n][e%4]),ai.set(i,s),s;if(h&&n==="giant"){let f=e%4===1||e%4===2||e%3===0,p=e%4===1?"#e9d6aa":"#bfe6ee";return f&&(l.lineWidth=Math.max(1,t*.28),l.strokeStyle=p+"88",l.beginPath(),l.ellipse(c,c,t*1.85,t*.5,-.25,Math.PI,2*Math.PI),l.stroke()),op(l,c,c,t,h,e,Hu.giant[e%4]),f&&(l.strokeStyle=p+"aa",l.beginPath(),l.ellipse(c,c,t*1.85,t*.5,-.25,0,Math.PI),l.stroke()),ai.set(i,s),s}if(n==="moon")un(l,c,c,t,[["#fbf3ff","#d6c4ff","#9a7ce8","#4b2f8f"],["#fff6e6","#ffcfa0","#d68a5a","#7a3d2a"],["#eafff8","#a8f0e0","#5fb8b0","#245a63"],["#fff0ff","#ffb8f0","#d66ad0","#6a2a8a"]][e%4],{spots:.12,seed:e*13});else if(n==="plan")un(l,c,c,t,e%4===3?["#fff0e0","#ff9a5a","#e8502e","#7a1f3a"]:["#eaffff","#00f0ff","#0098ff","#2a3db8"],e%4===3?{spots:.1,seed:e}:{land:["#2bd44a","#7dff3a"],seed:e});else if(n==="giant"){let f=[["#fff1d6","#ffbe5c","#ff8a00","#b8325a"],["#fff6d0","#ffe08a","#e0a84a","#8a5a2a"],["#e8ffff","#8af6ff","#3aa8d8","#2a4a9a"],["#e6e0ff","#9a8aff","#5b4cff","#2a1a8a"]][e%4];(e%4===1||e%4===2||e%3===0)&&u(t*1.9,t*.55,"#ff2ea6","#ffe600",!0),un(l,c,c,t,f,{bands:9,ph:e}),(e%4===1||e%4===2||e%3===0)&&u(t*1.9,t*.55,"#ff2ea6","#ffe600",!1)}else if(n==="ring"){for(let f=0;f<2;f++)u(t*1.6+f,t*.6+f*.5,"#00f0ff","#9ff8ff",!0),u(t*1.6+f,t*.6+f*.5,"#00f0ff","#ffffff",!1);un(l,c,c,Math.max(1,t>>2),["#ffffff","#7dff3a","#00d68f"])}else n==="pulsar"?un(l,c,c,t,["#ffffff","#eaffff","#9ff8ff","#00f0ff"]):n==="hole"&&(u(t*1.9,t*.5,"#ff8a00","#ff2e6e",!0),un(l,c,c,t,["#000000","#05010f","#120428","#ff2ea6"]),u(t*1.9,t*.5,"#ffe600","#ff2ea6",!1));return ai.set(i,s),s}function lp(n,e,t,i,s,r){let a=r||Os();if(Zt)return mA(n,e,t,i,s,a);e|=0,t|=0,n.fillStyle=a[3];for(let l=i+2;l<i+2+Math.max(3,i*.35);l++)for(let c=0;c<6.283;c+=1/l){let u=Math.round(e+Math.cos(c)*l),h=Math.round(t+Math.sin(c)*l);u+h&1&&Nr(u,h)<1-(l-i)/(i*.4+3)&&n.fillRect(u,h,1,1)}for(let l=0;l<12;l++){let c=zp+l*.5236,u=i*(1.35+.22*Math.sin(s*1.3+l*1.7))+Di*i*.3;n.fillStyle=l&1?a[1]:a[2];for(let h=i+3;h<u;h+=2)n.fillRect(Math.round(e+Math.cos(c)*h),Math.round(t+Math.sin(c)*h),1,1)}un(n,e,t,i,a),n.fillStyle=a[0];let o=Math.floor(s*3);for(let l=0;l<i*1.5;l++){let c=rt(l,o)*6.283,u=Math.sqrt(rt(l+99,o))*i*.85;n.fillRect(Math.round(e+Math.cos(c)*u),Math.round(t+Math.sin(c)*u),1,1)}if(ss>Kt()&&(s*8|0)&1){n.fillStyle="#ff2e6e";for(let l=0;l<6.283;l+=.6/i)n.fillRect(Math.round(e+Math.cos(l)*(i+1)),Math.round(t+Math.sin(l)*(i+1)),1,1)}}var Ci=[{at:0,n:"Molecular cloud",e:"\u2601\uFE0F",f:1},{at:40,n:"Protostar",e:"\u{1F311}",f:1},{at:600,n:"T Tauri star",e:"\u{1F31F}",f:.8},{at:1e4,n:"Main sequence",e:"\u2600\uFE0F",f:1},{at:1e6,n:"Subgiant",e:"\u{1F7E0}",f:1.15,P:["#fff3c8","#ffd060","#ff8a3c","#e0405a"]},{at:2e7,n:"Red giant",e:"\u{1F534}",f:1.35,P:["#ffd8b0","#ff8a4a","#ff4a3c","#a01a5a"]},{at:2e8,n:"Yellow supergiant",e:"\u{1F315}",f:1.5,P:["#ffffff","#fff59a","#ffd23c","#ff8a00"]},{at:6e8,n:"Red supergiant",e:"\u2764\uFE0F\u200D\u{1F525}",f:1.72,P:["#ffc8a0","#ff6a3a","#e8203c","#7a0a4a"]},{at:1e9,n:"Core collapse",e:"\u{1F4A5}",f:1.75,P:["#ffc8a0","#ff6a3a","#e8203c","#7a0a4a"]}];function yh(){let n=H.total||0,e=0;for(;e<Ci.length-1&&n>=Ci[e+1].at;)e++;return e}function Gp(n){let e=Ci[n].at,t=n<Ci.length-1?Ci[n+1].at:e*2,i=H.total||0;return e<=0?Math.min(1,i/t):Math.max(0,Math.min(1,Math.log(Math.max(i,e)/e)/Math.log(t/e)))}var il=-1,La=document.createElement("span");La.className="pill";La.id="stagelbl";try{He("stage").appendChild(La)}catch{}function pA(){let n=yh(),e=Ci[n],t=Ci[Math.min(n+1,Ci.length-1)];return e.f+(t.f-e.f)*Gp(n)*(n>=3&&n<8?.6:0)}function cp(n,e,t,i,s,r){let a=Os(),o=Math.round(i*9),l=s*(.35+r*.9),c=1.25-r*.55-Di*.08,u=["#b9a2ff","#8a6ad8","#ff8ad8","#6f8cff","#d6c4ff",a[2]];for(let h=0;h<o;h++){let f=rt(h,17),p=i*c*(.12+Math.pow(f,.7)*1.1),v=h*2.399+l*(1.6-f)+Math.sin(s*.7+h)*.05;n.fillStyle=u[h%u.length],At(n,e+Math.cos(v)*p,t+Math.sin(v)*p*.62,rt(h,23)>.86?2:1,1)}for(let h=0;h<9;h++){let f=h*.7+l*.5,p=i*c*(.55+rt(h,5)*.5);un(n,e+Math.cos(f)*p,t+Math.sin(f)*p*.62,1+h%2,["#e6dcff","#9a7ce8","#4b2f8f"])}}function up(n,e,t,i,s){let r=yh(),a=Ci[r],o=Gp(r);if(il!==r){if(il!==-1&&r>il){Qn(`${a.e} Your star is now a ${a.n.toLowerCase()}`),Ur.push({x:e,y:t,r:i*.5,a:1});for(let u=0;u<30;u++){let h=Math.random()*6.28,f=40+Math.random()*110;Ir.push({x:e,y:t,vx:Math.cos(h)*f,vy:Math.sin(h)*f,life:1.2,c:(a.P||Os())[u%3],s:2})}}il=r,La.textContent=a.e+" "+a.n,La.title="Your star's life stage. Earn stardust to age it; Supernova unlocks at core collapse."}if(r===0){if(cp(n,e,t,i,s,o*.4),H.novas>0){n.fillStyle="#9ff8ff",At(n,e-1,t-1,2,2);let u=s*4;n.fillStyle="#00f0ff";for(let h=2;h<6;h++)At(n,e+Math.cos(u)*h,t+Math.sin(u)*h*.5,1,1),At(n,e-Math.cos(u)*h,t-Math.sin(u)*h*.5,1,1)}else un(n,e,t,Math.max(1,Math.round(i*.12)),["#ffd6ff","#ff8ad8","#9b1cff"]);return}if(r===1){cp(n,e,t,i,s,.4+o*.4);let u=Math.max(2,Math.round(i*(.18+o*.35)*(1+Di*.12)));n.fillStyle="#ff2e6e";for(let h=u+1;h<u+4;h++)for(let f=0;f<6.283;f+=1/h){let p=Math.round(e+Math.cos(f)*h),v=Math.round(t+Math.sin(f)*h);p+v&1&&At(n,p,v,1,1)}un(n,e,t,u,["#ffd0a0","#ff8a00","#ff2e6e","#9b1cff"]);return}if(r===2){let u=Math.round(i*(.55+o*.25)*(1+Di*.12)),h=.85+.15*Math.sin(s*9)*Math.sin(s*3.7);n.fillStyle="#b9a2ff";for(let f=0;f<i*5;f++){let p=f*2.399+s*.5,v=u*(1.3+rt(f,3)*.9);At(n,e+Math.cos(p)*v,t+Math.sin(p)*v*.22,1,1)}for(let f of[-1,1])for(let p=0;p<i*1.2;p++){let v=t+f*(u+p),g=Math.sin(p*.4-s*10)*(1+p*.04);n.fillStyle=p%3?"#9ff8ff":"#00f0ff",rt(p,s*20|0)>.25&&At(n,e+g,v,1,1)}lp(n,e,t,Math.round(u*h),s,["#fff6e0","#ffd060","#ff8a00","#ff2e6e"]);return}let l=a.P||Os(),c=i;if(r>=7){c=Math.round(i*(1+.04*Math.sin(s*2.2)));for(let u=0;u<3;u++){let h=c*(1.15+(s*.12+u/3)%1*.9),f=1-(s*.12+u/3)%1;if(Zt){n.strokeStyle=l[2]+Math.round(f*90).toString(16).padStart(2,"0"),n.lineWidth=Math.max(.6,c*.03),n.beginPath(),n.arc(e,t,h,0,6.283),n.stroke();continue}n.fillStyle=l[2];for(let p=0;p<6.283;p+=2/h)rt(Math.round(p*30),u)<f*.6&&At(n,e+Math.cos(p)*h,t+Math.sin(p)*h,1,1)}}if(lp(n,e,t,c,s,l),r>=5&&!Zt){n.fillStyle=l[3];for(let u=0;u<c*1.2;u++){let h=rt(u,s*.6|0)*6.283,f=Math.sqrt(rt(u+50,s*.6|0))*c*.85;At(n,e+Math.cos(h)*f,t+Math.sin(h)*f,2,2)}}r===8&&(s*6|0)%3===0&&un(n,e,t,Math.max(2,Math.round(c*.28)),["#ffffff","#e6f6ff","#9ff8ff"])}function mA(n,e,t,i,s,r){let a=n.createRadialGradient(e,t,i*.9,e,t,i*2.6);a.addColorStop(0,r[1]+"66"),a.addColorStop(.35,r[2]+"26"),a.addColorStop(1,r[2]+"00"),n.fillStyle=a,n.beginPath(),n.arc(e,t,i*2.6,0,6.283),n.fill();let o=n.createRadialGradient(e,t,i*.98,e,t,i*1.22);o.addColorStop(0,r[1]+"aa"),o.addColorStop(1,r[1]+"00"),n.fillStyle=o,n.beginPath(),n.arc(e,t,i*1.22,0,6.283),n.fill();let l=n.createRadialGradient(e-i*.3,t-i*.32,i*.08,e,t,i);l.addColorStop(0,"#ffffff"),l.addColorStop(.18,r[0]),l.addColorStop(.62,r[1]),l.addColorStop(.92,r[2]),l.addColorStop(1,r[3]),n.fillStyle=l,n.beginPath(),n.arc(e,t,i,0,6.283),n.fill();let c=xh("tex/2k_sun.jpg");if(c){n.save(),n.beginPath(),n.arc(e,t,i,0,6.283),n.clip(),n.globalAlpha=.5,n.globalCompositeOperation="multiply";let u=i*4,h=s*i*.02%u;n.drawImage(c,e-i-h,t-i,u,i*2),n.drawImage(c,e-i-h+u,t-i,u,i*2),n.globalCompositeOperation="source-over",n.globalAlpha=1;let f=n.createRadialGradient(e-i*.3,t-i*.32,0,e,t,i);f.addColorStop(0,"rgba(255,255,255,.55)"),f.addColorStop(.5,"rgba(255,255,255,0)"),n.fillStyle=f,n.fillRect(e-i,t-i,i*2,i*2),n.restore()}ss>Kt()&&(n.strokeStyle=`rgba(255,46,110,${.45+.35*Math.sin(s*8)})`,n.lineWidth=Math.max(.6,i*.04),n.beginPath(),n.arc(e,t,i*1.1,0,6.283),n.stroke())}function Mh(){let n=yh()>=3?pA():1,e=Wt?Math.max(12,Math.min(Qt*.21,Vt*.15)*n*(1+Di*.17))|0:Math.max(6,Math.round(2.9*_h()*n*(1+Di*.15)));return{x:Qt/2+(Wt?0:Ns+8)|0,y:Vt*(Wt?.44:.46)+(Wt?0:Fs)|0,R:e}}function gA(){let n=12;for(let e of An)H.own[e.id]&&(n=Math.max(n,Rn[e.id][1]+1.5));return n}function Vp(){let n=_h(),e=gA()*n+2,t=e*.42+4,i=Math.abs(Qt/2-9-e),s=Math.max(3,Math.abs(Vt/2-6-t));Ns=Math.max(-i,Math.min(i,Ns)),Fs=Math.max(-s,Math.min(s,Fs))}function _h(){let n=12;for(let e of An)H.own[e.id]&&(n=Math.max(n,Rn[e.id][1]+1.5));return Ls*(Math.min(Qt-18,Vt*2)/2-2)/n}function vA(n,e){Di=Math.min(1.6,Di+.6);let t=Os(),i=Mh();Ur.push({x:i.x,y:i.y,r:i.R+1,a:1});for(let s=0;s<14;s++){let r=Math.random()*6.28,a=30+Math.random()*70;Ir.push({x:i.x+Math.cos(r)*i.R,y:i.y+Math.sin(r)*i.R,vx:Math.cos(r)*a,vy:Math.sin(r)*a,life:1,c:t[s%3],s:s%4?1:2})}}function xA(n,e,t){n/=$t,e/=$t;for(let i=0;i<50;i++){let s=Math.random()*6.28,r=20+Math.random()*110;Ir.push({x:n,y:e,vx:Math.cos(s)*r,vy:Math.sin(s)*r,life:1.3,c:i&1?t:"#ffffff",s:i%3?1:2})}Ur.push({x:n,y:e,r:2,a:1,c:t})}var Bn=new Map,_n=null,Na=0;Ot.addEventListener("pointerdown",n=>{n.preventDefault(),Xp=performance.now();let e=Ot.getBoundingClientRect(),t=n.clientX-e.left,i=n.clientY-e.top;if(qe&&Math.hypot(t-qe.x,i-qe.y)<46)return Yp();if(Wt)return ml(n.clientX,n.clientY,e);try{Ot.setPointerCapture(n.pointerId)}catch{}if(Bn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Bn.size===1)_n={x:n.clientX,y:n.clientY,px:Ns,py:Fs,moved:0};else if(Bn.size===2){let[s,r]=[...Bn.values()];Na=Math.hypot(s.x-r.x,s.y-r.y)/Ls,_n=null}});Ot.addEventListener("pointermove",n=>{if(!(Wt||!Bn.has(n.pointerId))){if(Bn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Bn.size===2&&Na){let[e,t]=[...Bn.values()];Ls=Math.max(.6,Math.min(4,Math.hypot(e.x-t.x,e.y-t.y)/Na));return}if(_n){let e=n.clientX-_n.x,t=n.clientY-_n.y;_n.moved=Math.max(_n.moved,Math.hypot(e,t)),Ns=_n.px+e/$t,Fs=_n.py+t/$t,Vp()}}});var yA=n=>{if(Wt)return;let e=_n,t=Bn.size;if(Bn.delete(n.pointerId),Bn.size<2&&(Na=0),t>1||!e){_n=null;return}if(_n=null,e.moved>8)return;let i=Ot.getBoundingClientRect(),s=Mh(),r=(n.clientX-i.left)/$t,a=(n.clientY-i.top)/$t;Math.hypot(r-s.x,a-s.y)<=s.R+4&&ml(n.clientX,n.clientY,i)};Ot.addEventListener("pointerup",yA);Ot.addEventListener("pointercancel",n=>{Bn.delete(n.pointerId),_n=null,Na=0});Ot.addEventListener("wheel",n=>{n.preventDefault(),Wt||(Ls=Math.max(.6,Math.min(4,Ls*Math.exp(-n.deltaY/400))))},{passive:!1});Ot.addEventListener("dblclick",()=>{Ls=1,Ns=Fs=0});function MA(n,e){if((Ot.clientWidth!==Math.round(wr)||Ot.clientHeight!==Math.round(Tr))&&yl(),!Qt)return;let t;Zt?(Mn.setTransform(1,0,0,1,0,0),Mn.imageSmoothingEnabled=!0,Mn.imageSmoothingQuality="high",dA(e)||Mn.drawImage(ri,0,0),Mn.setTransform($t*qn,0,0,$t*qn,0,0),t=Mn):(t=cA,t.imageSmoothingEnabled=!1,t.drawImage(ri,0,0));for(let s of Hp){if(Math.sin(e*s.s+s.p)<-.35)continue;t.fillStyle=s.c;let r=(s.y+(e*s.s*1.5|0))%Vt;At(t,s.x,r,1,1),s.big&&Math.sin(e*s.s+s.p)>.6&&(At(t,s.x-1,r,3,1),At(t,s.x,r-1,1,3))}Di*=Math.pow(.02,n),zp+=n*.12;let i=Mh();if(Wt)up(t,i.x,i.y,i.R,e);else{Vp();let s=_h(),r=.42,a=Os();t.fillStyle="rgba(255,255,255,.22)";for(let g of Object.keys(Rn)){if(!H.own[g])continue;let m=(Rn[g][0]+Rn[g][1])/2*s;for(let d=0;d<6.283;d+=3/Math.max(m,6))At(t,Math.round(i.x+Math.cos(d)*m),Math.round(i.y+Math.sin(d)*m*r),1,1)}let o=[],l=(g,m)=>({x:i.x+Math.cos(m)*g*s,y:i.y+Math.sin(m)*g*s*r,back:Math.sin(m)<0}),c=Math.min(70,(H.own.mote||0)*3),u=Math.min(180,(H.own.rock||0)*6),h=Math.min(80,(H.own.dyson||0)*6);for(let g=0;g<c;g++)o.push({...l(Rn.mote[0]+rt(g,1)*1.4,g*2.399+e*.35),dot:g%3?"#ffe600":"#ffffff"});for(let g=0;g<u;g++)o.push({...l(Rn.rock[0]+rt(g,2)*2.5,g*2.399+e*.12),dot:["#b9a2ff","#8a6ad8","#ff8ad8"][g%3],s:rt(g,4)>.8?2:1});for(let g=0;g<h;g++)o.push({...l(Rn.dyson[0]+rt(g,6)*1.2,g*2.399+e*.6),dot:(g+(e*4|0))%5?"#00f0ff":"#ffffff"});let f={moon:.6,plan:1.05,giant:1.9,ring:1.2,pulsar:.6,hole:1.1},p={moon:2,plan:3,giant:4,ring:3,pulsar:2,hole:3};for(let g in Un)Un[g].forEach((m,d)=>{let A=l(m.r,m.a);o.push({...A,spr:kp(g,d,Math.max(p[g],Math.round(f[g]*s))),id:g})});let v=g=>{if(g.dot){t.fillStyle=g.dot,At(t,g.x|0,g.y|0,g.s||1,g.s||1);return}{let m=g.spr.sc||1,d=g.spr.width/m;t.drawImage(g.spr,Zt?g.x-d/2:Math.round(g.x-d/2),Zt?g.y-d/2:Math.round(g.y-d/2),d,d)}if(g.id==="pulsar"){t.fillStyle="#9ff8ff";let m=e*3;for(let d=3;d<14;d+=1)At(t,Math.round(g.x+Math.cos(m)*d),Math.round(g.y+Math.sin(m)*d*.6),1,1),At(t,Math.round(g.x-Math.cos(m)*d),Math.round(g.y-Math.sin(m)*d*.6),1,1)}};o.sort((g,m)=>g.y-m.y),o.filter(g=>g.back).forEach(v),up(t,i.x,i.y,i.R,e),o.filter(g=>!g.back).forEach(v)}Ur=Ur.filter(s=>(s.r+=n*60,(s.a-=n*1.6)>0));for(let s of Ur){t.fillStyle=s.c||Os()[1];for(let r=0;r<6.283;r+=1.2/s.r)Nr(Math.round(r*20),0)<s.a&&At(t,Math.round(s.x+Math.cos(r)*s.r),Math.round(s.y+Math.sin(r)*s.r),1,1)}Ir=Ir.filter(s=>(s.life-=n*1.5)>0).slice(-400);for(let s of Ir)s.x+=s.vx*n,s.y+=s.vy*n,s.vx*=.95,s.vy*=.95,!(s.life<.3&&(e*20|0)&1)&&(t.fillStyle=s.c,At(t,s.x|0,s.y|0,s.s,s.s));if(Ft&&!qe){let s=Math.random()<.5,r=Math.random()<.5,a=Vt*(r?.12+Math.random()*.08:.68+Math.random()*.08);qe={x0:s?-10:Qt+10,y0:a,x1:s?Qt+10:-10,y1:a+Vt*(Math.random()*.12-.06),k:0,hist:[]}}if(qe&&qe.x0!==void 0){qe.k+=n/6.5;let s=qe.k,r=qe.x0+(qe.x1-qe.x0)*s,a=qe.y0+(qe.y1-qe.y0)*s+Math.sin(s*3.14)*(qe.y0<Vt/2?8:-8);qe.x=r*$t,qe.y=a*$t,qe.hist.unshift([r|0,a|0]),qe.hist.length>26&&qe.hist.pop();let o=["#ffffff","#fff59a","#ffe600","#ff8a00","#ff2ea6","#b86bff"];qe.hist.forEach(([l,c],u)=>{if(u>10&&u+(e*12|0)&1)return;t.fillStyle=o[Math.min(o.length-1,u/4|0)];let h=u<4?2:1;At(t,l,c,h,h)}),t.fillStyle="#ffffff",At(t,(r|0)-1,(a|0)-1,3,3),t.fillStyle="#9ff8ff",At(t,(r|0)-2,a|0,1,1),At(t,(r|0)+2,a|0,1,1),At(t,r|0,(a|0)-2,1,1),At(t,r|0,(a|0)+2,1,1),s>=1&&(qe=null,Ft&&fh())}Zt||(Mn.setTransform(1,0,0,1,0,0),Mn.imageSmoothingEnabled=!1,Mn.drawImage(dl,0,0,Qt*$t*qn,Vt*$t*qn))}function pl(){let n=[],e=(s,r)=>{let a=document.createElement("canvas"),o=Zt?3:1;a.width=a.height=24*o;let l=a.getContext("2d");l.scale(o,o),r(l),n.push(`.ico-${s}{background-image:url(${a.toDataURL()})!important}`)},t=s=>r=>{let a=s.width/(s.sc||1);r.drawImage(s,12-a/2,12-a/2,a,a)};e("mote",s=>{[[12,12,"#ffffff",2],[6,8,"#ffe600",1],[17,6,"#ffe600",1],[18,16,"#ffffff",1],[7,17,"#ff2ea6",1],[12,4,"#00f0ff",1]].forEach(([r,a,o,l])=>{s.fillStyle=o,s.fillRect(r,a,l,l)})}),e("rock",s=>{un(s,10,12,5,["#e6dcff","#b9a2ff","#8a6ad8","#4b2f8f"],{spots:.15,seed:3}),un(s,18,7,2,["#ffd0f0","#ff8ad8","#b8325a"]),un(s,18,17,1,["#ffd0f0","#ff8ad8"])}),["moon","plan","giant","ring","hole","pulsar"].forEach(s=>e(s,t(kp(s,0,{moon:7,plan:8,giant:5,ring:6,hole:4,pulsar:4}[s])))),e("dyson",s=>{un(s,12,12,3,["#ffffff","#ffe600","#ff8a00"]),s.fillStyle="#00f0ff";for(let r=0;r<8;r++){let a=r*.785;s.fillRect(Math.round(12+Math.cos(a)*8),Math.round(12+Math.sin(a)*8),2,2)}});let i=document.getElementById("pixicons");i||(i=document.createElement("style"),i.id="pixicons",document.head.appendChild(i)),i.textContent=n.join(`
`)}pl();var ts=!1,Ta=0,Wp=!1,Xp=performance.now(),ll=0,Fa=(n,e=!1)=>{ts=n,Wp=n&&e,ll=0,He("app").classList.toggle("cine",n),Gt=null,Ta=0,setTimeout(Lr,30)};He("cine").onclick=()=>Fa(!ts);for(let n of["pointerdown","wheel","keydown","touchstart"])addEventListener(n,()=>{Xp=performance.now(),Wp&&Fa(!1)},{passive:!0,capture:!0});addEventListener("keydown",n=>{n.key==="Escape"&&ts&&Fa(!1),(n.key==="c"||n.key==="C")&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)&&Fa(!ts)});function _A(n){let e=null,t=1e9;for(let i in Un)for(let s of Un[i]){let r=s.obj.getWorldPosition(new b),a=Math.max(.6,s.size||1)*1.6;n.ray.distanceToPoint(r)<a&&n.ray.origin.distanceTo(r)<t&&(t=n.ray.origin.distanceTo(r),e=s)}return e}function hp(n,e){let t=Ri.getBoundingClientRect();if(np.set((n-t.left)/Dn*2-1,-((e-t.top)/Pn)*2+1),Ds.setFromCamera(np,dt),Ft&&Ds.ray.distanceToPoint(Ft.p)<2.6)return Yp();if(Wt)return ml(n,e,t);let i=_A(Ds),s=Ds.ray.distanceToPoint(In.position)<4.6?Ds.ray.origin.distanceTo(In.position):1e9;if(i&&(!s||Ds.ray.origin.distanceTo(i.obj.position)<s)){Gt=i,Is=0,ci(Math.log((i.size||1)*7/Ba)),Qn(`${i.label} \xB7 tap the star to go back`),en(700,.1,"sine",.04,1.2);return}s<1e9&&(Gt&&(Gt=null,ci(0)),ml(n,e,t))}function ml(n,e,t){let i=eh();H.dust+=i,H.total+=i,H.allTime+=i,H.taps++,Rs=1,Pr=Math.min(1,Pr+.25);let s=Ds.ray.closestPointToPoint(In.position,new b).sub(In.position);s.lengthSq()<1e-6&&s.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),s.setLength(3.1).add(In.position),hl(s,cl[H.novas%cl.length][0],14,5),vA(n-t.left,e-t.top),Ju(n-t.left,e-t.top,"+"+Ut(i)),W_(),vl(6),He("hint").classList.add("gone"),Zn()}function Ju(n,e,t,i){let s=document.createElement("div");s.className="float"+(i?" big":""),s.textContent=t,s.style.left=n+(Math.random()-.5)*30+"px",s.style.top=e-12+"px",He("floats").appendChild(s),setTimeout(()=>s.remove(),1100)}function Yp(){H.comets++;let n=ji(),e=Ft.p.clone(),t;if(Math.random()<.55||n===0){let i=Math.max(n*90,eh()*40,25);H.dust+=i,H.total+=i,H.allTime+=i,t=`\u2604\uFE0F Comet! +${Ut(i)} stardust`,hl(e,"#ffc65c",120,9)}else ss=Kt()+2e4+5e3*Ln("frenzy"),t="\u2604\uFE0F Frenzy! Everything \xD710 for 20s",hl(e,"#ff4d5e",140,10);if(Wt&&qe)Ju(qe.x,qe.y,t.split("! ")[1]||t,!0),xA(qe.x,qe.y,t.includes("Frenzy")?"#ff4d5e":"#ffc65c"),qe=null;else{let i=e.clone().project(dt);Ju((i.x+1)/2*Dn,(1-i.y)/2*Pn,t.split("! ")[1]||t,!0)}fh(),Qn(t),en(1320,.35,"triangle",.06,1.2),en(1760,.5,"sine",.04,1.1),vl([20,30,20])}var Ji="build",br=1,ku=[1,10,100,"max"];document.querySelectorAll(".tab[data-t]").forEach(n=>n.onclick=()=>{Ji=n.dataset.t,document.querySelectorAll(".tab[data-t]").forEach(e=>e.classList.toggle("on",e===n)),He("buymode").hidden=Ji!=="build",li="",Zn()});He("buymode").onclick=()=>{br=ku[(ku.indexOf(br)+1)%ku.length],He("buymode").textContent=br==="max"?"Max":"\xD7"+br,li="",Zn()};He("snd").onclick=()=>{H.sound=!H.sound,He("snd").setAttribute("aria-pressed",H.sound),He("snd").innerHTML=H.sound?qp:Qp,is()};var qp='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',Qp='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>',fp;function Qn(n){let e=He("toast");e.textContent=n,e.classList.add("on"),clearTimeout(fp),fp=setTimeout(()=>e.classList.remove("on"),2600)}var Zp=()=>{let n=-1;return An.forEach((e,t)=>{(H.own[e.id]||H.allTime>=e.base*.5)&&(n=t)}),An.slice(0,Math.min(An.length,n+2))},dp=()=>ns.filter(n=>!H.ups[n.id]&&(n.g?(H.own[n.g]||0)>=n.at:H.allTime>=n.cost*.3)).slice(0,12),li="",Sr=0;function Zn(){Sr+=(H.dust-Sr)*.35,Math.abs(H.dust-Sr)<1&&(Sr=H.dust),He("dust").textContent=Ut(Sr),He("ps").textContent=Ut(ji()),He("tv").textContent=Ut(eh());let n=ss-Kt();He("frenzy").hidden=n<=0,n>0&&(He("frenzy").textContent=`\u2604\uFE0F Frenzy \xD710 \xB7 ${Math.ceil(n/1e3)}s`),He("t-up").classList.toggle("new",Ji!=="up"&&dp().some(t=>H.dust>=t.cost)),He("t-nova").classList.toggle("new",Ji!=="nova"&&(H.total>=Ra()||Xu.some(t=>H.life>=t.at&&Ln(t.id)<t.max&&H.shards>=Yu(t))));let e="";if(Ji==="build"){for(let t of Zp()){let i=!H.own[t.id]&&H.allTime<t.base*.5,s=br==="max"?Math.max(1,H_(t)):br,r=th(t,s),a=!i&&H.dust>=r,o=H.own[t.id]||0,l=pp.find(h=>o<h)||200,c=Math.min(100,o/l*100),u=ji()?vp(t)*Wu()/ji()*100:0;e+=`<button class="row ${i?"locked":a?"ok":"no"}" data-buy="${t.id}" data-k="${s}" ${i?"disabled":""} aria-label="Buy ${s} ${t.n} for ${Ut(r)}">
        <span class="ico ico-${t.id}">${i?"?":""}</span>
        <span class="mid"><span class="nm">${i?"Unknown signal":t.n}</span><span class="ds">${i?"Keep collecting to find it":`${Ut(t.rate*mp(t)*Wu())}/s each${u>=1?` \xB7 ${u.toFixed(0)}% of income`:""}`}</span>${i?"":`<span class="bar"><i style="width:${c}%"></i></span><span class="ms">${o} / ${l} for \xD72</span>`}</span>
        <span class="rt"><span class="cost">${Ut(r)}</span><span class="own">${s>1?"\xD7"+s:"own "+o}</span></span></button>`}H.own.mote||(e+='<p class="empty">Tap the star 15 times, then buy Stardust motes. They collect for you.</p>')}else if(Ji==="up"){let t=dp();t.length||(e+='<p class="empty">No upgrades yet. Own 10 of something or keep tapping.</p>');for(let i of t){let s=H.dust>=i.cost;e+=`<button class="row ${s?"ok":"no"}" data-up="${i.id}"><span class="ico emo">${i.e}</span><span class="mid"><span class="nm">${i.n.replace("  \xB7"," \xB7")}</span><span class="ds">${i.d}</span></span><span class="rt"><span class="cost">${Ut(i.cost)}</span></span></button>`}e+=`<p class="empty">${ns.filter(i=>H.ups[i.id]).length} of ${ns.length} upgrades owned</p>`}else if(Ji==="nova"){let t=Ra(),i=ih(H.total),s=H.total>=t&&i>0,r=Math.min(100,H.total/t*100),a=Math.floor(nh());e+=`<div class="card"><span class="lbl">Nebula shards</span><span class="big">${H.shards}</span><span class="ds">Each unspent shard is +10% to everything. You're at +${H.shards*10}%. Shards earned all time: ${H.life}.</span></div>
      <div class="card"><span class="lbl">Go supernova</span><span class="big ${s?"up":""}">+${s?i:0}</span>
      <span class="bar"><i style="width:${r}%"></i></span><span class="ms">${Ut(H.total)} / ${Ut(t)} earned this run</span>
      <span class="ds">${s?`Supernova now for +${i}. Keep going: next shard at ${Ut(k_(H.total))}. You keep shards, the shop, achievements and stats; the rest resets.`:`Unlocks at ${Ut(t)} stardust earned this run (spending doesn't count against you). Reaching it pays +${a}, and earning more pays more. The goal grows with every shard you earn, and each Supernova pays more than the last.`}</span>
      <button class="cta red" id="novaBtn" ${s?"":"disabled"}>Supernova</button></div>
      <p class="empty">Shard shop: spent shards stop giving their +10%</p>`;for(let o of Xu){let l=Ln(o.id),c=H.life<o.at,u=l>=o.max,h=Yu(o),f=!c&&!u&&H.shards>=h;e+=`<button class="row ${c?"locked":f?"ok":"no"}" data-shop="${o.id}" ${c||u?"disabled":""}><span class="ico emo">${c?"?":o.e}</span><span class="mid"><span class="nm">${o.n}${l?` \xB7 lv ${l}`:""}</span><span class="ds">${c?`Unlocks after ${o.at} shards earned all time`:u?o.d(l)+" (max)":`${l?o.d(l)+" \u2192 ":""}${o.d(l+1)}`}</span></span><span class="rt"><span class="cost">${c||u?"":h+" \u{1F48E}"}</span></span></button>`}}else{let t=[["Stardust this run",Ut(H.total)],["All time",Ut(H.allTime)],["Per second",Ut(ji())],["Taps",H.taps.toLocaleString()],["Comets caught",H.comets],["Supernovas",H.novas],["Bodies in orbit",An.reduce((i,s)=>i+(H.own[s.id]||0),0)],["Playing since",new Date(H.born).toLocaleDateString()]];e+=`<div class="card">${t.map(([i,s])=>`<div class="kv"><span>${i}</span><b>${s}</b></div>`).join("")}</div>
      <div class="card"><span class="lbl">Achievements ${sl.filter(i=>H.ach[i[0]]).length}/${sl.length}</span><div class="achs">${sl.map(([i,s])=>`<span class="ach ${H.ach[i]?"got":""}">${s}</span>`).join("")}</div></div>
      <button class="cta ghost" id="wipe">Wipe save</button><p class="empty">Planet and star maps: Solar System Scope (CC BY 4.0). Rock + studio light: Poly Haven (CC0).</p>`}if(e!==li){let t=He("list"),i=t.scrollTop;t.innerHTML=e,t.scrollTop=i,li=e}AA()}function Kp(n,e,t){let i=th(n,e);if(H.dust<i)return t&&(t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake")),en(160,.1,"square",.02,.9);let s=!H.own[n.id];if(H.dust-=i,H.own[n.id]=(H.own[n.id]||0)+e,Ga(),en(660,.1,"triangle",.05,1.3),en(990,.14,"sine",.03,1.2),vl(10),s&&Qn(`${n.e} ${n.n} joins your orbit`),li="",ju="",Zn(),is(),t&&t.classList.contains("rb")){let r=document.querySelector(`#rail [data-rb="${n.id}"]`);r&&(r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop"))}}var zr=document.createElement("div");zr.id="rail";zr.setAttribute("aria-label","Quick buy");He("stage").appendChild(zr);var ju="";function AA(){let n="";for(let e of Zp()){let t=!H.own[e.id]&&H.allTime<e.base*.5,i=th(e,1),s=H.own[e.id]||0;n+=t?'<button class="rb lock" disabled aria-label="Next: unknown"><span class="ico">?</span></button>':`<button class="rb ${H.dust>=i?"ok":"no"}" data-rb="${e.id}" aria-label="Buy 1 ${e.n} for ${Ut(i)}"><span class="ico ico-${e.id}"></span>${s?`<b>${s}</b>`:""}<i>${Ut(i)}</i></button>`}n!==ju&&(zr.innerHTML=n,ju=n)}zr.addEventListener("click",n=>{let e=n.target.closest("[data-rb]");e&&(n.stopPropagation(),Kp(An.find(t=>t.id===e.dataset.rb),1,e))});["pointerdown","touchstart","mousedown"].forEach(n=>zr.addEventListener(n,e=>e.stopPropagation(),{passive:!0}));He("list").addEventListener("click",n=>{let e=n.target.closest("[data-buy]"),t=n.target.closest("[data-up]");if(e&&Kp(An.find(s=>s.id===e.dataset.buy),+e.dataset.k,e),t){let s=ns.find(r=>r.id===t.dataset.up);if(H.dust<s.cost)return en(160,.1,"square",.02,.9);H.dust-=s.cost,H.ups[s.id]=1,en(880,.2,"triangle",.05,1.5),Qn(`${s.e} ${s.n.replace("  \xB7"," \xB7")}`),li="",Zn(),is()}let i=n.target.closest("[data-shop]");if(i){let s=Xu.find(a=>a.id===i.dataset.shop),r=Yu(s);if(H.life<s.at||Ln(s.id)>=s.max||H.shards<r)return en(160,.1,"square",.02,.9);H.shards-=r,H.shop[s.id]=Ln(s.id)+1,en(880,.2,"triangle",.05,1.5),Qn(`${s.e} ${s.n} \xB7 lv ${H.shop[s.id]}`),li="",Zn(),is()}if(n.target.id==="novaBtn"&&SA(),n.target.id==="wipe")if(Kt()-(window._wa||0)<3e3){H=gl(!0);try{localStorage.removeItem($u)}catch{}Ga(),Fr.clear(),sh(),li="",Zn(),Qn("Fresh universe")}else window._wa=Kt(),Qn("Tap Wipe again to erase everything")});function SA(){let n=ih(H.total);if(!(H.total<Ra()||n<=0)){Dr.visible=!0,Zi=0,Pr=1,hl(new b,"#ffffff",400,26),en(80,2.2,"sawtooth",.09,.4),en(1200,1.4,"sine",.04,.3),vl([60,40,160]),H.shards+=n,H.life=(H.life||0)+n,H.novas++,H=gl(!1,H);{let e=[0,1e4,1e6,1e8][Ln("head")];H.dust+=e}Ga(),Fr.clear(),setTimeout(sh,600),Qn(`Supernova! +${n} Nebula shards`),Ji="build",document.querySelectorAll(".tab[data-t]").forEach(e=>e.classList.toggle("on",e.dataset.t==="build")),He("buymode").hidden=!1,li="",Zn(),is()}}var EA=new Qo,Gu=0,Vu=0,Ea=0;function Jp(){let n=Math.min(.05,EA.getDelta());Ea+=n,es.uT.value=Ea;let e=ji()*n;if(H.dust+=e,H.total+=e,H.allTime+=e,!Ft&&Kt()>$d&&(hh(),$d=Kt()+(H.ups.t2?.5:1)/(1+.25*Ln("comet"))*(4e4+Math.random()*5e4)),Ku*=.94,Aa+=.025*n+Ku,ts&&(ll+=n,ll>22))if(ll=0,Gt)Gt=null;else{let o=Object.keys(Un).flatMap(l=>Un[l]||[]).filter(l=>l&&l.obj&&l.obj.visible);o.length&&(Gt=o[Math.random()*o.length|0],Is=0)}ts&&Gt?(Ta+=n,Aa+=.08*n,bi+=(Math.log((Gt.size||1)*5/Ba)-bi)*Math.min(1,n*.6)):ts&&(Ta+=n,Aa+=.05*n,bi=-1.1+1.9*(.5-.5*Math.cos(Ta*.09)),Ps+=(.18+.22*Math.sin(Ta*.05)-Ps)*Math.min(1,n*.5)),Pr*=.9,Rs=Math.max(0,Rs-n*3.5);let t=(Math.random()-.5)*Pr*.25,i=(Math.random()-.5)*Pr*.25;wa=Math.max(0,wa-n*.45),Ou+=(bi-Ou)*Math.min(1,n*5);let s=Math.max(Gt?1.2:9,Ba*Math.exp(Ou)*(1+.9*wa*wa));Gt?zu.copy(Gt.obj.position):zu.set(0,0,0),Is=Math.min(1,Is+n*.8),Sa.lerp(zu,Gt?Math.min(1,n*3+Is*Is):Math.min(1,n*4)),dt.position.set(Sa.x+Math.cos(Aa)*Math.cos(Ps)*s+t,Sa.y+Math.sin(Ps)*s+i,Sa.z+Math.sin(Aa)*Math.cos(Ps)*s),dt.lookAt(Sa);{let o=dt.position.distanceTo(In.position),l=Ti.smoothstep(o,7,22);Ia.uniforms.uI.value=.24+.18*l,Ha.visible=l>.3&&o<160,qu.radius=.55*(.4+.6*l),jt.toneMappingExposure=.75+.3*l,Da.uniforms.uBright.value=.72+.06*l}aA(s),Da.uniforms.uPulse.value=Rs;let r=1+Rs*.06;In.scale.setScalar(r),za.scale.setScalar(r),Ap.scale.setScalar(1+Rs*.15+Math.sin(Ea*1.3)*.02),In.rotation.y+=n*.05;for(let o in Un)for(let l of Un[o]){l.a+=l.sp*n*3;let c=Math.min(1,(performance.now()-l.born)/700),u=1-Math.pow(1-c,3);l.obj.scale.setScalar(Math.max(.001,u)),l.obj.position.set(Math.cos(l.a)*l.r,Math.sin(l.a)*l.r*Math.sin(l.inc),Math.sin(l.a)*l.r*Math.cos(l.inc)),l.mesh.rotation.y+=l.spin*n,l.clouds&&(l.clouds.rotation.y+=n*.03),l.beam&&(l.beam.rotation.y+=n*4),l.halo&&(l.halo.quaternion.copy(dt.quaternion).premultiply(l.obj.quaternion.clone().invert()),l.photon.quaternion.copy(l.halo.quaternion)),l.disk&&(l.disk.rotation.z+=n*.6)}let a=Br.drawRange.count;for(let o=0;o<a;o++){let l=bp[o];l.a+=n*.9/Math.pow(l.r,1.5)*3*l.s,al[o*3]=Math.cos(l.a)*l.r,al[o*3+1]=l.y+Math.sin(Ea*2+o)*.05,al[o*3+2]=Math.sin(l.a)*l.r}Br.attributes.position.needsUpdate=!0;for(let o=0;o<Us.count;o++){let l=Cp[o];l.a+=n*.9/Math.pow(l.r,1.5)*3,l.rx+=n*l.sp,si.position.set(Math.cos(l.a)*l.r,l.y,Math.sin(l.a)*l.r),si.rotation.set(l.rx,l.ry,0),si.scale.setScalar(l.s),si.updateMatrix(),Us.setMatrixAt(o,si.matrix)}Us.count&&(Us.instanceMatrix.needsUpdate=!0);for(let o=0;o<Bs.count;o++){let l=Rp[o];l.ph+=n*l.sp,si.position.setFromSphericalCoords(l.r,l.th,l.ph),si.lookAt(0,0,0),si.scale.setScalar(1),si.updateMatrix(),Bs.setMatrixAt(o,si.matrix)}Bs.count&&(Bs.instanceMatrix.needsUpdate=!0),Ft&&(Ft.p.addScaledVector(Ft.v,n),ch.position.copy(Ft.p),uh.position.copy(Ft.p),Ft.hist.unshift(Ft.p.clone()),Ft.hist.length>ul&&Ft.hist.pop(),Ft.hist.forEach((o,l)=>{Dp.set([o.x+st(-.08,.08),o.y+st(-.08,.08),o.z+st(-.08,.08)],l*3);let c=1-l/ul;Pp.set([c,c*.78,c*.36],l*3)}),Rr.setDrawRange(0,Ft.hist.length),Rr.attributes.position.needsUpdate=!0,Rr.attributes.color.needsUpdate=!0,Ft.p.length()>75&&fh());for(let o=0;o<Or;o++)if(ol[o]>0){ol[o]-=n*1.1;let l=Math.max(0,ol[o]);Er[o*3]+=Cs[o*3]*n,Er[o*3+1]+=Cs[o*3+1]*n,Er[o*3+2]+=Cs[o*3+2]*n,Cs[o*3]*=.97,Cs[o*3+1]*=.97,Cs[o*3+2]*=.97,l===0&&(Er[o*3+1]=9999),ba[o*3]*=.985,ba[o*3+1]*=.985,ba[o*3+2]*=.985}if(Ua.attributes.position.needsUpdate=!0,Ua.attributes.color.needsUpdate=!0,Zi>=0){Zi+=n;let o=3+Zi*60;Dr.scale.setScalar(o),Dr.material.uniforms.uI.value=Math.max(0,3*(1-Zi/1.4)),Zi>1.4&&(Zi=-1,Dr.visible=!1)}if(qu.strength=.4+.5*Ti.smoothstep(dt.position.distanceTo(In.position),7,22)+Rs*.5+(ss>Kt()?.4:0)+(Zi>=0?1.5:0),MA(n,Ea),Gu+=n,Vu+=n,Gu>.1){Gu=0,Zn();for(let[o,l,c]of sl)!H.ach[o]&&c(H)&&(H.ach[o]=1,Qn(`\u{1F3C6} ${l}`),en(1180,.25,"triangle",.05,1.2))}Vu>10&&(Vu=0,is()),requestAnimationFrame(Jp)}function jp(){let n=Math.min(Kt()-H.t,288e5);if(n>6e4){let e=ji()*n/1e3*(.1+.1*Ln("night"));e>0&&(H.dust+=e,H.total+=e,H.allTime+=e,Qn(`While you were away (${G_(n)}): +${Ut(e)} stardust`))}H.t=Kt()}document.addEventListener("visibilitychange",()=>{document.hidden?is():jp()});window.addEventListener("pagehide",is);He("snd").innerHTML=H.sound?qp:Qp;Lr();sh();jp();Ga();H.taps&&He("hint").classList.add("gone");Sr=H.dust;Zn();requestAnimationFrame(Jp);window.__comet=()=>hh();window.__tc=()=>qe&&[qe.x,qe.y];window.__dbg={iso:()=>{St.children.forEach(n=>{n!==In&&n!==za&&(n.visible=!1)}),Ha.visible=!1},proj:()=>{let n=new b().setFromMatrixColumn(dt.matrixWorld,0).multiplyScalar(3),e=new b().setFromMatrixColumn(dt.matrixWorld,1).multiplyScalar(3),t=new b().project(dt),i=n.clone().project(dt),s=e.clone().project(dt);return[t.x,t.y,(i.x-t.x)*Dn/2,(s.y-t.y)*Pn/2,dt.aspect,Dn,Pn,jt.domElement.width,jt.domElement.height,dt.projectionMatrix.elements[0],dt.projectionMatrix.elements[5]]},cam:()=>[dt.aspect,dt.fov,Dn,Pn,jt.getSize(new ne).toArray(),jt.getViewport(new Ve).toArray(),jt.getCurrentViewport(new Ve).toArray(),jt.getContext().getParameter(jt.getContext().VIEWPORT),jt.getContext().drawingBufferWidth,jt.getContext().drawingBufferHeight],S:()=>H,set:n=>{Object.assign(H,n),Ga(),li="",Zn()},comet:hh,focus:(n,e=0,t)=>{Gt=Un[n][e],Is=0,ci(Math.log((Gt.size||1)*(t||7)/Ba))},zoom:n=>ci(n)};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.39.6 build Sun Nov 01 2026
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2026 Raoul van Rüschen
   * @license Zlib
   *)
*/
