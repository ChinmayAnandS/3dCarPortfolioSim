var JM=Object.defineProperty;var $M=(gn,Rt,Jt)=>Rt in gn?JM(gn,Rt,{enumerable:!0,configurable:!0,writable:!0,value:Jt}):gn[Rt]=Jt;var me=(gn,Rt,Jt)=>($M(gn,typeof Rt!="symbol"?Rt+"":Rt,Jt),Jt);var QM=(gn,Rt)=>()=>(Rt||gn((Rt={exports:{}}).exports,Rt),Rt.exports),eb=QM(Lo=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Rt="164",Jt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xu=0,Bo=1,yu=2,zo=1,Mu=2,Ii=3,Ni=0,Ht=1,xi=2,Zi=0,kn=1,ko=2,Vo=3,Ho=4,bu=5,vn=100,Su=101,wu=102,Tu=103,Eu=104,Au=200,Ru=201,Pu=202,Cu=203,sa=204,ra=205,Lu=206,Iu=207,Nu=208,Uu=209,Du=210,Ou=211,Fu=212,Bu=213,zu=214,ku=0,Vu=1,Hu=2,sr=3,Gu=4,Wu=5,ju=6,Xu=7,aa=0,qu=1,Yu=2,Ji=0,Ku=1,Zu=2,Ju=3,$u=4,Qu=5,ed=6,td=7,Go="attached",id="detached",Wo=300,Vn=301,Hn=302,oa=303,la=304,rr=306,Gn=1e3,$i=1001,ar=1002,Dt=1003,jo=1004,Ps=1005,Xt=1006,or=1007,Ui=1008,Qi=1009,nd=1010,sd=1011,Xo=1012,qo=1013,Wn=1014,yi=1015,lr=1016,Yo=1017,Ko=1018,Cs=1020,rd=35902,ad=1021,od=1022,ai=1023,ld=1024,cd=1025,jn=1026,Ls=1027,Zo=1028,Jo=1029,hd=1030,$o=1031,Qo=1033,ca=33776,ha=33777,ua=33778,da=33779,el=35840,tl=35841,il=35842,nl=35843,sl=36196,rl=37492,al=37496,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,pl=37814,ml=37815,fl=37816,gl=37817,vl=37818,_l=37819,xl=37820,yl=37821,pa=36492,Ml=36494,bl=36495,ud=36283,Sl=36284,wl=36285,Tl=36286,Is=2300,Xn=2301,ma=2302,El=2400,Al=2401,Rl=2402,dd=2500,pd=0,Pl=1,fa=2,md=3200,fd=3201,ga=0,gd=1,en="",Pt="srgb",Et="srgb-linear",va="display-p3",cr="display-p3-linear",hr="linear",rt="srgb",ur="rec709",dr="p3",qn=7680,Cl=519,vd=512,_d=513,xd=514,Ll=515,yd=516,Md=517,bd=518,Sd=519,_a=35044,Il="300 es",Di=2e3,pr=2001;class _n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Ns=Math.PI/180,Yn=180/Math.PI;function oi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[s&255]+Ct[s>>8&255]+Ct[s>>16&255]+Ct[s>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function xa(s,e){return(s%e+e)%e}function wd(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Td(s,e,t){return s!==e?(t-s)/(e-s):0}function Us(s,e,t){return(1-t)*s+t*e}function Ed(s,e,t,i){return Us(s,e,1-Math.exp(-t*i))}function Ad(s,e=1){return e-Math.abs(xa(s,e*2)-e)}function Rd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Pd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ld(s,e){return s+Math.random()*(e-s)}function Id(s){return s*(.5-Math.random())}function Nd(s){s!==void 0&&(Nl=s);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ud(s){return s*Ns}function Dd(s){return s*Yn}function Od(s){return(s&s-1)===0&&s!==0}function Fd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zd(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ul={DEG2RAD:Ns,RAD2DEG:Yn,generateUUID:oi,clamp:At,euclideanModulo:xa,mapLinear:wd,inverseLerp:Td,lerp:Us,damp:Ed,pingpong:Ad,smoothstep:Rd,smootherstep:Pd,randInt:Cd,randFloat:Ld,randFloatSpread:Id,seededRandom:Nd,degToRad:Ud,radToDeg:Dd,isPowerOfTwo:Od,ceilPowerOfTwo:Fd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:zd,normalize:Ze,denormalize:li};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,n,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],_=n[1],M=n[4],S=n[7],C=n[2],T=n[5],R=n[8];return r[0]=a*v+o*_+l*C,r[3]=a*m+o*M+l*T,r[6]=a*f+o*S+l*R,r[1]=c*v+h*_+u*C,r[4]=c*m+h*M+u*T,r[7]=c*f+h*S+u*R,r[2]=d*v+p*_+g*C,r[5]=d*m+p*M+g*T,r[8]=d*f+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Ue;function Dl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kd(){const s=Ds("canvas");return s.style.display="block",s}const Ol={};function Fl(s){s in Ol||(Ol[s]=!0,console.warn(s))}const Bl=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zl=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Et]:{transfer:hr,primaries:ur,toReference:s=>s,fromReference:s=>s},[Pt]:{transfer:rt,primaries:ur,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[cr]:{transfer:hr,primaries:dr,toReference:s=>s.applyMatrix3(zl),fromReference:s=>s.applyMatrix3(Bl)},[va]:{transfer:rt,primaries:dr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zl),fromReference:s=>s.applyMatrix3(Bl).convertLinearToSRGB()}},Vd=new Set([Et,cr]),Ke={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=mr[e].toReference,n=mr[t].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return mr[s].primaries},getTransfer:function(s){return s===en?hr:mr[s].transfer}};function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zn;class Hd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Ds("canvas")),Zn.width=e.width,Zn.height=e.height;const i=Zn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gd=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ba(n[a].image)):r.push(ba(n[a]))}else r=ba(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class bt extends _n{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=$i,n=$i,r=Xt,a=Ui,o=ai,l=Qi,c=bt.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=oi(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null,bt.DEFAULT_MAPPING=Wo,bt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,n=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],u=a[5],d=a[9],p=a[2],g=a[6],v=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,_=(u+1)/2,M=(v+1)/2,S=(l+h)/4,C=(c+p)/4,T=(d+g)/4;return f>_&&f>M?f<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(f),n=S/i,r=C/i):_>M?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=S/n,r=T/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=C/r,n=T/r),this.set(i,n,r,t),this}let m=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jd extends _n{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new bt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends jd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vl extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xd extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Mi=class{constructor(s=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=s,this._y=e,this._z=t,this._w=i}static slerpFlat(s,e,t,i,n,r,a){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const u=n[r+0],d=n[r+1],p=n[r+2],g=n[r+3];if(a===0){s[e+0]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h;return}if(a===1){s[e+0]=u,s[e+1]=d,s[e+2]=p,s[e+3]=g;return}if(h!==g||o!==u||l!==d||c!==p){let v=1-a;const m=o*u+l*d+c*p+h*g,f=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),C=Math.atan2(S,m*f);v=Math.sin(v*C)/S,a=Math.sin(a*C)/S}const M=a*f;if(o=o*v+u*M,l=l*v+d*M,c=c*v+p*M,h=h*v+g*M,v===1-a){const S=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=S,l*=S,c*=S,h*=S}}s[e]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h}static multiplyQuaternionsFlat(s,e,t,i,n,r){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=n[r],u=n[r+1],d=n[r+2],p=n[r+3];return s[e]=a*p+c*h+o*d-l*u,s[e+1]=o*p+c*u+l*h-a*d,s[e+2]=l*p+c*d+a*u-o*h,s[e+3]=c*p-a*h-o*u-l*d,s}get x(){return this._x}set x(s){this._x=s,this._onChangeCallback()}get y(){return this._y}set y(s){this._y=s,this._onChangeCallback()}get z(){return this._z}set z(s){this._z=s,this._onChangeCallback()}get w(){return this._w}set w(s){this._w=s,this._onChangeCallback()}set(s,e,t,i){return this._x=s,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(s){return this._x=s.x,this._y=s.y,this._z=s.z,this._w=s.w,this._onChangeCallback(),this}setFromEuler(s,e=!0){const t=s._x,i=s._y,n=s._z,r=s._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),h=a(n/2),u=o(t/2),d=o(i/2),p=o(n/2);switch(r){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(s,e){const t=e/2,i=Math.sin(t);return this._x=s.x*i,this._y=s.y*i,this._z=s.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(s){const e=s.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=t+a+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(n-l)*d,this._z=(r-i)*d}else if(t>a&&t>h){const d=2*Math.sqrt(1+t-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(n+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-t-h);this._w=(n-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-t-a);this._w=(r-i)/d,this._x=(n+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(s,e){let t=s.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(s.x)>Math.abs(s.z)?(this._x=-s.y,this._y=s.x,this._z=0,this._w=t):(this._x=0,this._y=-s.z,this._z=s.y,this._w=t)):(this._x=s.y*e.z-s.z*e.y,this._y=s.z*e.x-s.x*e.z,this._z=s.x*e.y-s.y*e.x,this._w=t),this.normalize()}angleTo(s){return 2*Math.acos(Math.abs(At(this.dot(s),-1,1)))}rotateTowards(s,e){const t=this.angleTo(s);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(s,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(s){return this._x*s._x+this._y*s._y+this._z*s._z+this._w*s._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let s=this.length();return s===0?(this._x=0,this._y=0,this._z=0,this._w=1):(s=1/s,this._x=this._x*s,this._y=this._y*s,this._z=this._z*s,this._w=this._w*s),this._onChangeCallback(),this}multiply(s){return this.multiplyQuaternions(this,s)}premultiply(s){return this.multiplyQuaternions(s,this)}multiplyQuaternions(s,e){const t=s._x,i=s._y,n=s._z,r=s._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+r*a+i*l-n*o,this._y=i*c+r*o+n*a-t*l,this._z=n*c+r*l+t*o-i*a,this._w=r*c-t*a-i*o-n*l,this._onChangeCallback(),this}slerp(s,e){if(e===0)return this;if(e===1)return this.copy(s);const t=this._x,i=this._y,n=this._z,r=this._w;let a=r*s._w+t*s._x+i*s._y+n*s._z;if(a<0?(this._w=-s._w,this._x=-s._x,this._y=-s._y,this._z=-s._z,a=-a):this.copy(s),a>=1)return this._w=r,this._x=t,this._y=i,this._z=n,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*t+e*this._x,this._y=d*i+e*this._y,this._z=d*n+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=r*h+this._w*u,this._x=t*h+this._x*u,this._y=i*h+this._y*u,this._z=n*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(s,e,t){return this.copy(s).slerp(e,t)}random(){const s=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),n=Math.sqrt(t);return this.set(i*Math.sin(s),i*Math.cos(s),n*Math.sin(e),n*Math.cos(e))}equals(s){return s._x===this._x&&s._y===this._y&&s._z===this._z&&s._w===this._w}fromArray(s,e=0){return this._x=s[e],this._y=s[e+1],this._z=s[e+2],this._w=s[e+3],this._onChangeCallback(),this}toArray(s=[],e=0){return s[e]=this._x,s[e+1]=this._y,s[e+2]=this._z,s[e+3]=this._w,s}fromBufferAttribute(s,e){return this._x=s.getX(e),this._y=s.getY(e),this._z=s.getZ(e),this._w=s.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(s){return this._onChangeCallback=s,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new B,Hl=new Mi;class $t{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),gr.subVectors(this.max,Os),Jn.subVectors(e.a,Os),$n.subVectors(e.b,Os),Qn.subVectors(e.c,Os),tn.subVectors($n,Jn),nn.subVectors(Qn,$n),yn.subVectors(Jn,Qn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-yn.z,yn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,yn.z,0,-yn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-yn.y,yn.x,0];return!wa(t,Jn,$n,Qn,gr)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Jn,$n,Qn,gr))?!1:(vr.crossVectors(tn,nn),t=[vr.x,vr.y,vr.z],wa(t,Jn,$n,Qn,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new B,new B,new B,new B,new B,new B,new B,new B],ci=new B,fr=new $t,Jn=new B,$n=new B,Qn=new B,tn=new B,nn=new B,yn=new B,Os=new B,gr=new B,vr=new B,Mn=new B;function wa(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Mn.fromArray(s,r);const o=n.x*Math.abs(Mn.x)+n.y*Math.abs(Mn.y)+n.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),h=i.dot(Mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qd=new $t,Fs=new B,Ta=new B;let bi=class{constructor(s=new B,e=-1){this.isSphere=!0,this.center=s,this.radius=e}set(s,e){return this.center.copy(s),this.radius=e,this}setFromPoints(s,e){const t=this.center;e!==void 0?t.copy(e):qd.setFromPoints(s).getCenter(t);let i=0;for(let n=0,r=s.length;n<r;n++)i=Math.max(i,t.distanceToSquared(s[n]));return this.radius=Math.sqrt(i),this}copy(s){return this.center.copy(s.center),this.radius=s.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(s){return s.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(s){return s.distanceTo(this.center)-this.radius}intersectsSphere(s){const e=this.radius+s.radius;return s.center.distanceToSquared(this.center)<=e*e}intersectsBox(s){return s.intersectsSphere(this)}intersectsPlane(s){return Math.abs(s.distanceToPoint(this.center))<=this.radius}clampPoint(s,e){const t=this.center.distanceToSquared(s);return e.copy(s),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(s){return this.isEmpty()?(s.makeEmpty(),s):(s.set(this.center,this.center),s.expandByScalar(this.radius),s)}applyMatrix4(s){return this.center.applyMatrix4(s),this.radius=this.radius*s.getMaxScaleOnAxis(),this}translate(s){return this.center.add(s),this}expandByPoint(s){if(this.isEmpty())return this.center.copy(s),this.radius=0,this;Fs.subVectors(s,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(Fs,i/t),this.radius+=i}return this}union(s){return s.isEmpty()?this:this.isEmpty()?(this.copy(s),this):(this.center.equals(s.center)===!0?this.radius=Math.max(this.radius,s.radius):(Ta.subVectors(s.center,this.center).setLength(s.radius),this.expandByPoint(Fs.copy(s.center).add(Ta)),this.expandByPoint(Fs.copy(s.center).sub(Ta))),this)}equals(s){return s.center.equals(this.center)&&s.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Fi=new B,Ea=new B,_r=new B,sn=new B,Aa=new B,xr=new B,Ra=new B;let es=class{constructor(s=new B,e=new B(0,0,-1)){this.origin=s,this.direction=e}set(s,e){return this.origin.copy(s),this.direction.copy(e),this}copy(s){return this.origin.copy(s.origin),this.direction.copy(s.direction),this}at(s,e){return e.copy(this.origin).addScaledVector(this.direction,s)}lookAt(s){return this.direction.copy(s).sub(this.origin).normalize(),this}recast(s){return this.origin.copy(this.at(s,Fi)),this}closestPointToPoint(s,e){e.subVectors(s,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(s){return Math.sqrt(this.distanceSqToPoint(s))}distanceSqToPoint(s){const e=Fi.subVectors(s,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(s):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(s))}distanceSqToSegment(s,e,t,i){Ea.copy(s).add(e).multiplyScalar(.5),_r.copy(e).sub(s).normalize(),sn.copy(this.origin).sub(Ea);const n=s.distanceTo(e)*.5,r=-this.direction.dot(_r),a=sn.dot(this.direction),o=-sn.dot(_r),l=sn.lengthSq(),c=Math.abs(1-r*r);let h,u,d,p;if(c>0)if(h=r*o-a,u=r*a-o,p=n*c,h>=0)if(u>=-p)if(u<=p){const g=1/c;h*=g,u*=g,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=n,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-n,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-r*n+a)),u=h>0?-n:Math.min(Math.max(-n,-o),n),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-n,-o),n),d=u*(u+2*o)+l):(h=Math.max(0,-(r*n+a)),u=h>0?n:Math.min(Math.max(-n,-o),n),d=-h*h+u*(u+2*o)+l);else u=r>0?-n:n,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ea).addScaledVector(_r,u),d}intersectSphere(s,e){Fi.subVectors(s.center,this.origin);const t=Fi.dot(this.direction),i=Fi.dot(Fi)-t*t,n=s.radius*s.radius;if(i>n)return null;const r=Math.sqrt(n-i),a=t-r,o=t+r;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(s){return this.distanceSqToPoint(s.center)<=s.radius*s.radius}distanceToPlane(s){const e=s.normal.dot(this.direction);if(e===0)return s.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(s.normal)+s.constant)/e;return t>=0?t:null}intersectPlane(s,e){const t=this.distanceToPlane(s);return t===null?null:this.at(t,e)}intersectsPlane(s){const e=s.distanceToPoint(this.origin);return e===0||s.normal.dot(this.direction)*e<0}intersectBox(s,e){let t,i,n,r,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(t=(s.min.x-u.x)*l,i=(s.max.x-u.x)*l):(t=(s.max.x-u.x)*l,i=(s.min.x-u.x)*l),c>=0?(n=(s.min.y-u.y)*c,r=(s.max.y-u.y)*c):(n=(s.max.y-u.y)*c,r=(s.min.y-u.y)*c),t>r||n>i||((n>t||isNaN(t))&&(t=n),(r<i||isNaN(i))&&(i=r),h>=0?(a=(s.min.z-u.z)*h,o=(s.max.z-u.z)*h):(a=(s.max.z-u.z)*h,o=(s.min.z-u.z)*h),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(s){return this.intersectBox(s,Fi)!==null}intersectTriangle(s,e,t,i,n){Aa.subVectors(e,s),xr.subVectors(t,s),Ra.crossVectors(Aa,xr);let r=this.direction.dot(Ra),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;sn.subVectors(this.origin,s);const o=a*this.direction.dot(xr.crossVectors(sn,xr));if(o<0)return null;const l=a*this.direction.dot(Aa.cross(sn));if(l<0||o+l>r)return null;const c=-a*sn.dot(Ra);return c<0?null:this.at(c/r,n)}applyMatrix4(s){return this.origin.applyMatrix4(s),this.direction.transformDirection(s),this}equals(s){return s.origin.equals(this.origin)&&s.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ce{constructor(e,t,i,n,r,a,o,l,c,h,u,d,p,g,v,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,Kd)}lookAt(e,t,i){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),rn.crossVectors(i,qt),rn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),rn.crossVectors(i,qt)),rn.normalize(),yr.crossVectors(qt,rn),n[0]=rn.x,n[4]=yr.x,n[8]=qt.x,n[1]=rn.y,n[5]=yr.y,n[9]=qt.y,n[2]=rn.z,n[6]=yr.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],_=i[3],M=i[7],S=i[11],C=i[15],T=n[0],R=n[4],P=n[8],b=n[12],y=n[1],D=n[5],N=n[9],E=n[13],O=n[2],F=n[6],z=n[10],W=n[14],H=n[3],Z=n[7],Q=n[11],ve=n[15];return r[0]=a*T+o*y+l*O+c*H,r[4]=a*R+o*D+l*F+c*Z,r[8]=a*P+o*N+l*z+c*Q,r[12]=a*b+o*E+l*W+c*ve,r[1]=h*T+u*y+d*O+p*H,r[5]=h*R+u*D+d*F+p*Z,r[9]=h*P+u*N+d*z+p*Q,r[13]=h*b+u*E+d*W+p*ve,r[2]=g*T+v*y+m*O+f*H,r[6]=g*R+v*D+m*F+f*Z,r[10]=g*P+v*N+m*z+f*Q,r[14]=g*b+v*E+m*W+f*ve,r[3]=_*T+M*y+S*O+C*H,r[7]=_*R+M*D+S*F+C*Z,r[11]=_*P+M*N+S*z+C*Q,r[15]=_*b+M*E+S*W+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*p-i*l*p)+v*(+t*l*p-t*c*d+r*a*d-n*a*p+n*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,M=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,C=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,T=t*_+i*M+n*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=_*R,e[1]=(v*d*r-u*m*r-v*n*p+i*m*p+u*n*f-i*d*f)*R,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*f+i*l*f)*R,e[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*p-i*l*p)*R,e[4]=M*R,e[5]=(h*m*r-g*d*r+g*n*p-t*m*p-h*n*f+t*d*f)*R,e[6]=(g*l*r-a*m*r-g*n*c+t*m*c+a*n*f-t*l*f)*R,e[7]=(a*d*r-h*l*r+h*n*c-t*d*c-a*n*p+t*l*p)*R,e[8]=S*R,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*R,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*R,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=C*R,e[13]=(h*v*n-g*u*n+g*i*d-t*v*d-h*i*m+t*u*m)*R,e[14]=(g*o*n-a*v*n-g*i*l+t*v*l+a*i*m-t*o*m)*R,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,_=l*c,M=l*h,S=l*u,C=i.x,T=i.y,R=i.z;return n[0]=(1-(v+f))*C,n[1]=(p+S)*C,n[2]=(g-M)*C,n[3]=0,n[4]=(p-S)*T,n[5]=(1-(d+f))*T,n[6]=(m+_)*T,n[7]=0,n[8]=(g+M)*R,n[9]=(m-_)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=ts.set(n[0],n[1],n[2]).length();const a=ts.set(n[4],n[5],n[6]).length(),o=ts.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],hi.copy(this);const l=1/r,c=1/a,h=1/o;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=c,hi.elements[5]*=c,hi.elements[6]*=c,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Di){const l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let p,g;if(o===Di)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Di){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-r),d=(t+e)*c,p=(i+n)*h;let g,v;if(o===Di)g=(a+r)*u,v=-2*u;else if(o===pr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new B,hi=new Ce,Yd=new B(0,0,0),Kd=new B(1,1,1),rn=new B,yr=new B,qt=new B,Gl=new Ce,Wl=new Mi;class ui{constructor(e=0,t=0,i=0,n=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zd=0;const jl=new B,is=new Mi,Bi=new Ce,Mr=new B,Bs=new B,Jd=new B,$d=new Mi,Xl=new B(1,0,0),ql=new B(0,1,0),Yl=new B(0,0,1),Kl={type:"added"},Qd={type:"removed"},ns={type:"childadded",child:null},Ca={type:"childremoved",child:null};class ut extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new B,t=new ui,i=new Mi,n=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ue}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Xl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mr.copy(e):Mr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Bs,Mr,this.up):Bi.lookAt(Mr,Bs,this.up),this.quaternion.setFromRotationMatrix(Bi),n&&(Bi.extractRotation(n.matrixWorld),is.setFromRotationMatrix(Bi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ut.DEFAULT_UP=new B(0,1,0),ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new B,zi=new B,La=new B,ki=new B,ss=new B,rs=new B,Zl=new B,Ia=new B,Na=new B,Ua=new B;class Si{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),di.subVectors(e,t),n.cross(di);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){di.subVectors(n,t),zi.subVectors(i,t),La.subVectors(e,t);const a=di.dot(di),o=di.dot(zi),l=di.dot(La),c=zi.dot(zi),h=zi.dot(La),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(e,t,i,n){return di.subVectors(i,t),zi.subVectors(e,t),di.cross(zi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Si.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;ss.subVectors(n,i),rs.subVectors(r,i),Ia.subVectors(e,i);const l=ss.dot(Ia),c=rs.dot(Ia);if(l<=0&&c<=0)return t.copy(i);Na.subVectors(e,n);const h=ss.dot(Na),u=rs.dot(Na);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ss,a);Ua.subVectors(e,r);const p=ss.dot(Ua),g=rs.dot(Ua);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(rs,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zl.subVectors(r,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(Zl,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},br={h:0,s:0,l:0};function Da(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?s+(e-s)*6*t:t<.5?e:t<.6666666666666666?s+(e-s)*6*(.6666666666666666-t):s}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ke.workingColorSpace){if(e=xa(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Da(a,r,e+.3333333333333333),this.g=Da(a,r,e),this.b=Da(a,r,e-.3333333333333333)}return Ke.toWorkingColorSpace(this,n),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Jl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ke.fromWorkingColorSpace(Lt.copy(this),e),Math.round(At(Lt.r*255,0,255))*65536+Math.round(At(Lt.g*255,0,255))*256+Math.round(At(Lt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,n=Lt.g,r=Lt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Pt){Ke.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,n=Lt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(br);const i=Us(an.h,br.h,t),n=Us(an.s,br.s,t),r=Us(an.l,br.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ee;Ee.NAMES=Jl;let ep=0,pi=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=kn,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(s){this._alphaTest>0!=s>0&&this.version++,this._alphaTest=s}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(s).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(s).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(s).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(s).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(s).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(s).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(t.blending=this.blending),this.side!==Ni&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==sa&&(t.blendSrc=this.blendSrc),this.blendDst!==ra&&(t.blendDst=this.blendDst),this.blendEquation!==vn&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(t.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(n){const r=[];for(const a in n){const o=n[a];delete o.metadata,r.push(o)}return r}if(e){const n=i(s.textures),r=i(s.images);n.length>0&&(t.textures=n),r.length>0&&(t.images=r)}return t}clone(){return new this.constructor().copy(this)}copy(s){this.name=s.name,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.blendColor.copy(s.blendColor),this.blendAlpha=s.blendAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let n=0;n!==i;++n)t[n]=e[n].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaHash=s.alphaHash,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.forceSinglePass=s.forceSinglePass,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(s){s===!0&&this.version++}};class wi extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,Sr=new Me;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class $l extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ql extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tp=0;const Qt=new Ce,Oa=new ut,as=new B,Yt=new $t,zs=new $t,wt=new B;class Ft extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Ql:$l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,zs.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,zs.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(zs.min),Yt.expandByPoint(zs.max))}Yt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),wt.add(as)),n=Math.max(n,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new B,l[P]=new B;const c=new B,h=new B,u=new B,d=new Me,p=new Me,g=new Me,v=new B,m=new B;function f(P,b,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(v),o[b].add(v),o[y].add(v),l[P].add(m),l[b].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,b=_.length;P<b;++P){const y=_[P],D=y.start,N=y.count;for(let E=D,O=D+N;E<O;E+=3)f(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const M=new B,S=new B,C=new B,T=new B;function R(P){C.fromBufferAttribute(n,P),T.copy(C);const b=o[P];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),S.crossVectors(T,b);const y=S.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,y)}for(let P=0,b=_.length;P<b;++P){const y=_[P],D=y.start,N=y.count;for(let E=D,O=D+N;E<O;E+=3)R(e.getX(E+0)),R(e.getX(E+1)),R(e.getX(E+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new Ce,bn=new es,wr=new bi,tc=new B,os=new B,ls=new B,cs=new B,Fa=new B,Tr=new B,Er=new Me,Ar=new Me,Rr=new Me,ic=new B,nc=new B,sc=new B,Pr=new B,Cr=new B;class at extends ut{constructor(e=new Ft,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Fa.fromBufferAttribute(u,e),a?Tr.addScaledVector(Fa,h):Tr.addScaledVector(Fa.sub(t),h))}t.add(Tr)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),bn.copy(e.ray).recast(e.near),!(wr.containsPoint(bn.origin)===!1&&(bn.intersectSphere(wr,tc)===null||bn.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(r).invert(),bn.copy(e.ray).applyMatrix4(ec),!(i.boundingBox!==null&&bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=M;S<C;S+=3){const T=o.getX(S),R=o.getX(S+1),P=o.getX(S+2);n=Lr(this,f,e,i,c,h,u,T,R,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);n=Lr(this,a,e,i,c,h,u,_,M,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=M;S<C;S+=3){const T=S,R=S+1,P=S+2;n=Lr(this,f,e,i,c,h,u,T,R,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,M=m+1,S=m+2;n=Lr(this,a,e,i,c,h,u,_,M,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ip(s,e,t,i,n,r,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Ni,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:s}}function Lr(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,os),s.getVertexPosition(l,ls),s.getVertexPosition(c,cs);const h=ip(s,e,t,i,os,ls,cs,Pr);if(h){n&&(Er.fromBufferAttribute(n,o),Ar.fromBufferAttribute(n,l),Rr.fromBufferAttribute(n,c),h.uv=Si.getInterpolation(Pr,os,ls,cs,Er,Ar,Rr,new Me)),r&&(Er.fromBufferAttribute(r,o),Ar.fromBufferAttribute(r,l),Rr.fromBufferAttribute(r,c),h.uv1=Si.getInterpolation(Pr,os,ls,cs,Er,Ar,Rr,new Me)),a&&(ic.fromBufferAttribute(a,o),nc.fromBufferAttribute(a,l),sc.fromBufferAttribute(a,c),h.normal=Si.getInterpolation(Pr,os,ls,cs,ic,nc,sc,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};Si.getNormal(os,ls,cs,u.normal),h.face=u}return h}class mi extends Ft{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function g(v,m,f,_,M,S,C,T,R,P,b){const y=S/R,D=C/P,N=S/2,E=C/2,O=T/2,F=R+1,z=P+1;let W=0,H=0;const Z=new B;for(let Q=0;Q<z;Q++){const ve=Q*D-E;for(let se=0;se<F;se++){const He=se*y-N;Z[v]=He*_,Z[m]=ve*M,Z[f]=O,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(se/R),u.push(1-Q/P),W+=1}}for(let Q=0;Q<P;Q++)for(let ve=0;ve<R;ve++){const se=d+ve+F*Q,He=d+ve+F*(Q+1),J=d+(ve+1)+F*(Q+1),ie=d+(ve+1)+F*Q;l.push(se,He,ie),l.push(He,J,ie),H+=6}o.addGroup(p,H,b),p+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const i=hs(s[t]);for(const n in i)e[n]=i[n]}return e}function np(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const sp={clone:hs,merge:Bt};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ac extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ln=new B,oc=new Me,lc=new Me;class It extends ac{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yn*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class op extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new It(us,ds,e,t);n.layers=this.layers,this.add(n);const r=new It(us,ds,e,t);r.layers=this.layers,this.add(r);const a=new It(us,ds,e,t);a.layers=this.layers,this.add(a);const o=new It(us,ds,e,t);o.layers=this.layers,this.add(o);const l=new It(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new It(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ba extends bt{constructor(e,t,i,n,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Vn,super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lp extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ba(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new mi(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Zi});r.uniforms.tEquirect.value=t;const a=new at(n,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Xt),new op(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const za=new B,cp=new B,hp=new Ue;let cn=class{constructor(s=new B(1,0,0),e=0){this.isPlane=!0,this.normal=s,this.constant=e}set(s,e){return this.normal.copy(s),this.constant=e,this}setComponents(s,e,t,i){return this.normal.set(s,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(s,e){return this.normal.copy(s),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(s,e,t){const i=za.subVectors(t,e).cross(cp.subVectors(s,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,s),this}copy(s){return this.normal.copy(s.normal),this.constant=s.constant,this}normalize(){const s=1/this.normal.length();return this.normal.multiplyScalar(s),this.constant*=s,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(s){return this.normal.dot(s)+this.constant}distanceToSphere(s){return this.distanceToPoint(s.center)-s.radius}projectPoint(s,e){return e.copy(s).addScaledVector(this.normal,-this.distanceToPoint(s))}intersectLine(s,e){const t=s.delta(za),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(s.start)===0?e.copy(s.start):null;const n=-(s.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:e.copy(s.start).addScaledVector(t,n)}intersectsLine(s){const e=this.distanceToPoint(s.start),t=this.distanceToPoint(s.end);return e<0&&t>0||t<0&&e>0}intersectsBox(s){return s.intersectsPlane(this)}intersectsSphere(s){return s.intersectsPlane(this)}coplanarPoint(s){return s.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(s,e){const t=e||hp.getNormalMatrix(s),i=this.coplanarPoint(za).applyMatrix4(s),n=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(n),this}translate(s){return this.constant-=s.dot(this.normal),this}equals(s){return s.normal.equals(this.normal)&&s.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Sn=new bi,Ir=new B;class ka{constructor(e=new cn,t=new cn,i=new cn,n=new cn,r=new cn,a=new cn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],_=n[13],M=n[14],S=n[15];if(i[0].setComponents(l-r,d-c,m-p,S-f).normalize(),i[1].setComponents(l+r,d+c,m+p,S+f).normalize(),i[2].setComponents(l+a,d+h,m+g,S+_).normalize(),i[3].setComponents(l-a,d-h,m-g,S-_).normalize(),i[4].setComponents(l-o,d-u,m-v,S-M).normalize(),t===Di)i[5].setComponents(l+o,d+u,m+v,S+M).normalize();else if(t===pr)i[5].setComponents(o,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ir.x=n.normal.x>0?e.max.x:e.min.x,Ir.y=n.normal.y>0?e.max.y:e.min.y,Ir.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function up(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class ps extends Ft{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const _=f*d-a;for(let M=0;M<c;M++){const S=M*u-r;g.push(S,-_,0),v.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const M=_+c*f,S=_+c*(f+1),C=_+1+c*(f+1),T=_+1+c*f;p.push(M,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dp=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
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
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
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
#endif`,hm=`struct PhysicalMaterial {
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
}`,um=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
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
}`,xf=`#if DEPTH_PACKING == 3200
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
	#endif
}`,yf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,Cf=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,If=`#define NORMAL
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
}`,Nf=`#define NORMAL
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
}`,Uf=`#define PHONG
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
}`,Df=`#define PHONG
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
}`,Of=`#define STANDARD
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
}`,Ff=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,zf=`#define TOON
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
}`,kf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,jf=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:dp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:fp,alphatest_fragment:gp,alphatest_pars_fragment:vp,aomap_fragment:_p,aomap_pars_fragment:xp,batching_pars_vertex:yp,batching_vertex:Mp,begin_vertex:bp,beginnormal_vertex:Sp,bsdfs:wp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Cp,color_fragment:Lp,color_pars_fragment:Ip,color_pars_vertex:Np,color_vertex:Up,common:Dp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Bp,displacementmap_vertex:zp,emissivemap_fragment:kp,emissivemap_pars_fragment:Vp,colorspace_fragment:Hp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Xp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:sm,envmap_vertex:Yp,fog_vertex:Kp,fog_pars_vertex:Zp,fog_fragment:Jp,fog_pars_fragment:$p,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:im,lights_pars_begin:nm,lights_toon_fragment:rm,lights_toon_pars_fragment:am,lights_phong_fragment:om,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:dm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:vm,map_fragment:_m,map_pars_fragment:xm,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:wm,morphcolor_vertex:Tm,morphnormal_vertex:Em,morphtarget_pars_vertex:Am,morphtarget_vertex:Rm,normal_fragment_begin:Pm,normal_fragment_maps:Cm,normal_pars_fragment:Lm,normal_pars_vertex:Im,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:km,premultiplied_alpha_fragment:Vm,project_vertex:Hm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Ym,shadowmap_vertex:Km,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:$m,skinning_vertex:Qm,skinnormal_vertex:ef,specularmap_fragment:tf,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:of,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:uf,background_vert:df,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:ff,cube_vert:gf,cube_frag:vf,depth_vert:_f,depth_frag:xf,distanceRGBA_vert:yf,distanceRGBA_frag:Mf,equirect_vert:bf,equirect_frag:Sf,linedashed_vert:wf,linedashed_frag:Tf,meshbasic_vert:Ef,meshbasic_frag:Af,meshlambert_vert:Rf,meshlambert_frag:Pf,meshmatcap_vert:Cf,meshmatcap_frag:Lf,meshnormal_vert:If,meshnormal_frag:Nf,meshphong_vert:Uf,meshphong_frag:Df,meshphysical_vert:Of,meshphysical_frag:Ff,meshtoon_vert:Bf,meshtoon_frag:zf,points_vert:kf,points_frag:Vf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Wf,sprite_frag:jf},ue={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Ti={basic:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Bt([ue.points,ue.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Bt([ue.common,ue.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Bt([ue.sprite,ue.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Bt([ue.common,ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Bt([ue.lights,ue.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Ti.physical={uniforms:Bt([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Nr={r:0,b:0,g:0},wn=new ui,Xf=new Ce;function qf(s,e,t,i,n,r,a){const o=new Ee(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function v(_){let M=!1;const S=g(_);S===null?f(o,l):S&&S.isColor&&(f(S,1),M=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(_,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===rr)?(h===void 0&&(h=new at(new mi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:hs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),wn.copy(M.backgroundRotation),wn.x*=-1,wn.y*=-1,wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(wn)),h.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,(u!==S||d!==S.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new at(new ps(2,2),new on({name:"BackgroundMaterial",uniforms:hs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,M){_.getRGB(Nr,rc(s)),i.buffers.color.setClear(Nr.r,Nr.g,Nr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:v,addToRenderList:m}}function Yf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(y,D,N,E,O){let F=!1;const z=u(E,N,D);r!==z&&(r=z,c(r.object)),F=p(y,E,N,O),F&&g(y,E,N,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(y,D,N,E),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,D,N){const E=N.wireframe===!0;let O=i[y.id];O===void 0&&(O={},i[y.id]=O);let F=O[D.id];F===void 0&&(F={},O[D.id]=F);let z=F[E];return z===void 0&&(z=d(l()),F[E]=z),z}function d(y){const D=[],N=[],E=[];for(let O=0;O<t;O++)D[O]=0,N[O]=0,E[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:E,object:y,attributes:{},index:null}}function p(y,D,N,E){const O=r.attributes,F=D.attributes;let z=0;const W=N.getAttributes();for(const H in W)if(W[H].location>=0){const Z=O[H];let Q=F[H];if(Q===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Z===void 0||Z.attribute!==Q||Q&&Z.data!==Q.data)return!0;z++}return r.attributesNum!==z||r.index!==E}function g(y,D,N,E){const O={},F=D.attributes;let z=0;const W=N.getAttributes();for(const H in W)if(W[H].location>=0){let Z=F[H];Z===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const Q={};Q.attribute=Z,Z&&Z.data&&(Q.data=Z.data),O[H]=Q,z++}r.attributes=O,r.attributesNum=z,r.index=E}function v(){const y=r.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function m(y){f(y,0)}function f(y,D){const N=r.newAttributes,E=r.enabledAttributes,O=r.attributeDivisors;N[y]=1,E[y]===0&&(s.enableVertexAttribArray(y),E[y]=1),O[y]!==D&&(s.vertexAttribDivisor(y,D),O[y]=D)}function _(){const y=r.newAttributes,D=r.enabledAttributes;for(let N=0,E=D.length;N<E;N++)D[N]!==y[N]&&(s.disableVertexAttribArray(N),D[N]=0)}function M(y,D,N,E,O,F,z){z===!0?s.vertexAttribIPointer(y,D,N,O,F):s.vertexAttribPointer(y,D,N,E,O,F)}function S(y,D,N,E){v();const O=E.attributes,F=N.getAttributes(),z=D.defaultAttributeValues;for(const W in F){const H=F[W];if(H.location>=0){let Z=O[W];if(Z===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const Q=Z.normalized,ve=Z.itemSize,se=e.get(Z);if(se===void 0)continue;const He=se.buffer,J=se.type,ie=se.bytesPerElement,fe=J===s.INT||J===s.UNSIGNED_INT||Z.gpuType===qo;if(Z.isInterleavedBufferAttribute){const le=Z.data,ke=le.stride,Fe=Z.offset;if(le.isInstancedInterleavedBuffer){for(let V=0;V<H.locationSize;V++)f(H.location+V,le.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let V=0;V<H.locationSize;V++)m(H.location+V);s.bindBuffer(s.ARRAY_BUFFER,He);for(let V=0;V<H.locationSize;V++)M(H.location+V,ve/H.locationSize,J,Q,ke*ie,(Fe+ve/H.locationSize*V)*ie,fe)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)f(H.location+le,Z.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<H.locationSize;le++)m(H.location+le);s.bindBuffer(s.ARRAY_BUFFER,He);for(let le=0;le<H.locationSize;le++)M(H.location+le,ve/H.locationSize,J,Q,ve*ie,ve/H.locationSize*le*ie,fe)}}else if(z!==void 0){const Q=z[W];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(H.location,Q);break;case 3:s.vertexAttrib3fv(H.location,Q);break;case 4:s.vertexAttrib4fv(H.location,Q);break;default:s.vertexAttrib1fv(H.location,Q)}}}}_()}function C(){P();for(const y in i){const D=i[y];for(const N in D){const E=D[N];for(const O in E)h(E[O].object),delete E[O];delete D[N]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const N in D){const E=D[N];for(const O in E)h(E[O].object),delete E[O];delete D[N]}delete i[y.id]}function R(y){for(const D in i){const N=i[D];if(N[y.id]===void 0)continue;const E=N[y.id];for(const O in E)h(E[O].object),delete E[O];delete N[y.id]}}function P(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Kf(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zf(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==ai&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:S,maxSamples:C}}function Jf(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new cn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:i,M=_*4;let S=f.clippingState||null;l.value=S,S=h(g,d,M,p);for(let C=0;C!==M;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=p;M!==v;++M,S+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $f(s){let e=new WeakMap;function t(a,o){return o===oa?a.mapping=Vn:o===la&&(a.mapping=Hn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===la)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lp(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Va extends ac{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ms=4,hc=[.125,.215,.35,.446,.526,.582],Tn=20,Ha=new Va,uc=new Ee;let Ga=null,Wa=0,ja=0,Xa=!1;const En=(1+Math.sqrt(5))/2,fs=1/En,dc=[new B(-En,fs,0),new B(En,fs,0),new B(-fs,0,En),new B(fs,0,En),new B(0,En,-fs),new B(0,En,fs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,ja),this._renderer.xr.enabled=Xa,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===Hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:lr,format:ai,colorSpace:Et,depthBuffer:!1},n=mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(r)),this._blurMaterial=eg(r,e,t)}return n}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,n){const r=new It(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(uc),l.toneMapping=Ji,l.autoClear=!1;const u=new wi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),d=new at(new mi,u);let p=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(uc),p=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(r.up.set(0,a[v],0),r.lookAt(o[v],0,0)):m===1?(r.up.set(0,0,a[v]),r.lookAt(0,o[v],0)):(r.up.set(0,a[v],0),r.lookAt(0,0,o[v]));const f=this._cubeSize;Ur(n,m*f,v>2?f:0,f,f),l.setRenderTarget(n),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Vn||e.mapping===Hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dc[(n-r-1)%dc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Tn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Tn;m>Tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tn}`);const f=[];let _=0;for(let R=0;R<Tn;++R){const P=R/v,b=Math.exp(-P*P/2);f.push(b),R===0?_+=b:R<m&&(_+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[n],C=3*S*(n>M-ms?n-M+ms:0),T=4*(this._cubeSize-S);Ur(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(u,Ha)}}function Qf(s){const e=[],t=[],i=[];let n=s;const r=s-ms+1+hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-ms?l=hc[a-s+ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),M=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,P=T>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(b,v*g*T),M.set(d,m*g*T);const y=[T,T,T,T,T,T];S.set(y,f*g*T)}const C=new Ft;C.setAttribute("position",new Ot(_,v)),C.setAttribute("uv",new Ot(M,m)),C.setAttribute("faceIndex",new Ot(S,f)),e.push(C),n>ms&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mc(s,e,t){const i=new xn(s,e,t);return i.texture.mapping=rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function eg(s,e,t){const i=new Float32Array(Tn),n=new B(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fc(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function gc(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function tg(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===oa||l===la,h=l===Vn||l===Hn;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new pc(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ig(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ng(s,e,t,i){const n={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete n[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let M=0,S=_.length;M<S;M+=3){const C=_[M+0],T=_[M+1],R=_[M+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let M=0,S=_.length/3-1;M<S;M+=3){const C=M+0,T=M+1,R=M+2;d.push(C,T,T,R,R,C)}}else return;const m=new(Dl(d)?Ql:$l)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sg(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/a,p[m]);else{v.multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_];for(let _=0;_<v.length;_++)t.update(f,i,v[_])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function ag(s,e,t){const i=new WeakMap,n=new it;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let g=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",g)};var p=g;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let C=0;v===!0&&(C=1),m===!0&&(C=2),f===!0&&(C=3);let T=o.attributes.position.count*C,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*R*4*u),b=new Vl(P,T,R,u);b.type=yi,b.needsUpdate=!0;const y=C*4;for(let D=0;D<u;D++){const N=_[D],E=M[D],O=S[D],F=T*R*4*D;for(let z=0;z<N.count;z++){const W=z*y;v===!0&&(n.fromBufferAttribute(N,z),P[F+W+0]=n.x,P[F+W+1]=n.y,P[F+W+2]=n.z,P[F+W+3]=0),m===!0&&(n.fromBufferAttribute(E,z),P[F+W+4]=n.x,P[F+W+5]=n.y,P[F+W+6]=n.z,P[F+W+7]=0),f===!0&&(n.fromBufferAttribute(O,z),P[F+W+8]=n.x,P[F+W+9]=n.y,P[F+W+10]=n.z,P[F+W+11]=O.itemSize===4?n.w:1)}}d={count:u,texture:b,size:new Me(T,R)},i.set(o,d),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function og(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class vc extends bt{constructor(e,t,i,n,r,a,o,l,c,h){if(h=h!==void 0?h:jn,h!==jn&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jn&&(i=Wn),i===void 0&&h===Ls&&(i=Cs),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _c=new bt,xc=new vc(1,1);xc.compareFunction=Ll;const yc=new Vl,Mc=new Xd,bc=new Ba,Sc=[],wc=[],Tc=new Float32Array(16),Ec=new Float32Array(9),Ac=new Float32Array(4);function gs(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Sc[n];if(r===void 0&&(r=new Float32Array(n),Sc[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Dr(s,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function lg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function dg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;Ac.set(i),s.uniformMatrix2fv(this.addr,!1,Ac),xt(t,i)}}function pg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;Ec.set(i),s.uniformMatrix3fv(this.addr,!1,Ec),xt(t,i)}}function mg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;Tc.set(i),s.uniformMatrix4fv(this.addr,!1,Tc),xt(t,i)}}function fg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function xg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function Sg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const r=this.type===s.SAMPLER_2D_SHADOW?xc:_c;t.setTexture2D(e||r,n)}function wg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Mc,n)}function Tg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||bc,n)}function Eg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||yc,n)}function Ag(s){switch(s){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return fg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return yg;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Rg(s,e){s.uniform1fv(this.addr,e)}function Pg(s,e){const t=gs(e,this.size,2);s.uniform2fv(this.addr,t)}function Cg(s,e){const t=gs(e,this.size,3);s.uniform3fv(this.addr,t)}function Lg(s,e){const t=gs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ig(s,e){const t=gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ng(s,e){const t=gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ug(s,e){const t=gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Dg(s,e){s.uniform1iv(this.addr,e)}function Og(s,e){s.uniform2iv(this.addr,e)}function Fg(s,e){s.uniform3iv(this.addr,e)}function Bg(s,e){s.uniform4iv(this.addr,e)}function zg(s,e){s.uniform1uiv(this.addr,e)}function kg(s,e){s.uniform2uiv(this.addr,e)}function Vg(s,e){s.uniform3uiv(this.addr,e)}function Hg(s,e){s.uniform4uiv(this.addr,e)}function Gg(s,e,t){const i=this.cache,n=e.length,r=Dr(t,n);_t(i,r)||(s.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||_c,r[a])}function Wg(s,e,t){const i=this.cache,n=e.length,r=Dr(t,n);_t(i,r)||(s.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Mc,r[a])}function jg(s,e,t){const i=this.cache,n=e.length,r=Dr(t,n);_t(i,r)||(s.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||bc,r[a])}function Xg(s,e,t){const i=this.cache,n=e.length,r=Dr(t,n);_t(i,r)||(s.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||yc,r[a])}function qg(s){switch(s){case 5126:return Rg;case 35664:return Pg;case 35665:return Cg;case 35666:return Lg;case 35674:return Ig;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Dg;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ag(t.type)}}class Kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Rc(s,e){s.seq.push(e),s.map[e.id]=e}function Jg(s,e,t){const i=s.name,n=i.length;for(Ya.lastIndex=0;;){const r=Ya.exec(i),a=Ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Rc(t,c===void 0?new Yg(o,s,e):new Kg(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Zg(o),Rc(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);Jg(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Pc(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const $g=37297;let Qg=0;function ev(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function tv(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let i;switch(e===t?i="":e===dr&&t===ur?i="LinearDisplayP3ToLinearSRGB":e===ur&&t===dr&&(i="LinearSRGBToLinearDisplayP3"),s){case Et:case cr:return[i,"LinearTransferOETF"];case Pt:case va:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Cc(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+ev(s.getShaderSource(e),a)}else return n}function iv(s,e){const t=tv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nv(s,e){let t;switch(e){case Ku:t="Linear";break;case Zu:t="Reinhard";break;case Ju:t="OptimizedCineon";break;case $u:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function rv(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function av(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ks(s){return s!==""}function Lc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(s){return s.replace(ov,cv)}const lv=new Map;function cv(s,e){let t=De[e];if(t===void 0){const i=lv.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(s){return s.replace(hv,uv)}function uv(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Uc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function pv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vn:case Hn:e="ENVMAP_TYPE_CUBE";break;case rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hn:e="ENVMAP_MODE_REFRACTION";break}return e}function fv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case aa:e="ENVMAP_BLENDING_MULTIPLY";break;case qu:e="ENVMAP_BLENDING_MIX";break;case Yu:e="ENVMAP_BLENDING_ADD";break}return e}function gv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vv(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dv(t),c=pv(t),h=mv(t),u=fv(t),d=gv(t),p=sv(t),g=rv(r),v=n.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),f.length>0&&(f+=`
`)):(m=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),f=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?De.tonemapping_pars_fragment:"",t.toneMapping!==Ji?nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Ka(a),a=Lc(a,t),a=Ic(a,t),o=Ka(o),o=Lc(o,t),o=Ic(o,t),a=Nc(a),o=Nc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=_+m+a,S=_+f+o,C=Pc(n,n.VERTEX_SHADER,M),T=Pc(n,n.FRAGMENT_SHADER,S);n.attachShader(v,C),n.attachShader(v,T),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(D){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(v).trim(),E=n.getShaderInfoLog(C).trim(),O=n.getShaderInfoLog(T).trim();let F=!0,z=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,C,T);else{const W=Cc(n,C,"vertex"),H=Cc(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+W+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(E===""||O==="")&&(z=!1);z&&(D.diagnostics={runnable:F,programLog:N,vertexShader:{log:E,prefix:m},fragmentShader:{log:O,prefix:f}})}n.deleteShader(C),n.deleteShader(T),P=new Or(n,v),b=av(n,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(v,$g)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let _v=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yv(e),t.set(e,i)),i}}class yv{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}}function Mv(s,e,t,i,n,r,a){const o=new Pa,l=new xv,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,D,N,E){const O=N.fog,F=E.geometry,z=b.isMeshStandardMaterial?N.environment:null,W=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),H=W&&W.mapping===rr?W.image.height:null,Z=g[b.type];b.precision!==null&&(p=n.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=Q!==void 0?Q.length:0;let se=0;F.morphAttributes.position!==void 0&&(se=1),F.morphAttributes.normal!==void 0&&(se=2),F.morphAttributes.color!==void 0&&(se=3);let He,J,ie,fe;if(Z){const Oe=Ti[Z];He=Oe.vertexShader,J=Oe.fragmentShader}else He=b.vertexShader,J=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),fe=l.getFragmentShaderID(b);const le=s.getRenderTarget(),ke=E.isInstancedMesh===!0,Fe=E.isBatchedMesh===!0,V=!!b.map,Qe=!!b.matcap,Se=!!W,et=!!b.aoMap,Te=!!b.lightMap,Ve=!!b.bumpMap,Le=!!b.normalMap,Ge=!!b.displacementMap,dt=!!b.emissiveMap,U=!!b.metalnessMap,w=!!b.roughnessMap,q=b.anisotropy>0,$=b.clearcoat>0,te=b.dispersion>0,ee=b.iridescence>0,ye=b.sheen>0,de=b.transmission>0,pe=q&&!!b.anisotropyMap,Re=$&&!!b.clearcoatMap,ae=$&&!!b.clearcoatNormalMap,be=$&&!!b.clearcoatRoughnessMap,We=ee&&!!b.iridescenceMap,we=ee&&!!b.iridescenceThicknessMap,ge=ye&&!!b.sheenColorMap,Ie=ye&&!!b.sheenRoughnessMap,Be=!!b.specularMap,tt=!!b.specularColorMap,I=!!b.specularIntensityMap,L=de&&!!b.transmissionMap,Y=de&&!!b.thicknessMap,X=!!b.gradientMap,oe=!!b.alphaMap,re=b.alphaTest>0,qe=!!b.alphaHash,nt=!!b.extensions;let ct=Ji;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ct=s.toneMapping);const st={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:J,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Fe,instancing:ke,instancingColor:ke&&E.instanceColor!==null,instancingMorph:ke&&E.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Et,alphaToCoverage:!!b.alphaToCoverage,map:V,matcap:Qe,envMap:Se,envMapMode:Se&&W.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:Te,bumpMap:Ve,normalMap:Le,displacementMap:d&&Ge,emissiveMap:dt,normalMapObjectSpace:Le&&b.normalMapType===gd,normalMapTangentSpace:Le&&b.normalMapType===ga,metalnessMap:U,roughnessMap:w,anisotropy:q,anisotropyMap:pe,clearcoat:$,clearcoatMap:Re,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:te,iridescence:ee,iridescenceMap:We,iridescenceThicknessMap:we,sheen:ye,sheenColorMap:ge,sheenRoughnessMap:Ie,specularMap:Be,specularColorMap:tt,specularIntensityMap:I,transmission:de,transmissionMap:L,thicknessMap:Y,gradientMap:X,opaque:b.transparent===!1&&b.blending===kn&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:re,alphaHash:qe,combine:b.combine,mapUv:V&&v(b.map.channel),aoMapUv:et&&v(b.aoMap.channel),lightMapUv:Te&&v(b.lightMap.channel),bumpMapUv:Ve&&v(b.bumpMap.channel),normalMapUv:Le&&v(b.normalMap.channel),displacementMapUv:Ge&&v(b.displacementMap.channel),emissiveMapUv:dt&&v(b.emissiveMap.channel),metalnessMapUv:U&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:pe&&v(b.anisotropyMap.channel),clearcoatMapUv:Re&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(b.sheenRoughnessMap.channel),specularMapUv:Be&&v(b.specularMap.channel),specularColorMapUv:tt&&v(b.specularColorMap.channel),specularIntensityMapUv:I&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:Y&&v(b.thicknessMap.channel),alphaMapUv:oe&&v(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Le||q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!F.attributes.uv&&(V||oe),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:E.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:V&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xi,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:nt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:nt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)y.push(D),y.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(y,b),M(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function _(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),b.push(o.mask)}function S(b){const y=g[b.type];let D;if(y){const N=Ti[y];D=sp.clone(N.uniforms)}else D=b.uniforms;return D}function C(b,y){let D;for(let N=0,E=h.length;N<E;N++){const O=h[N];if(O.cacheKey===y){D=O,++D.usedTimes;break}}return D===void 0&&(D=new vv(s,y,b,r),h.push(D)),D}function T(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function bv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Oc(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,p,g,v,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Sv),i.length>1&&i.sort(d||Dc),n.length>1&&n.sort(d||Dc)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function wv(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new Oc,s.set(i,[a])):n>=r.length?(a=new Oc,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ee};break;case"SpotLight":t={position:new B,direction:new B,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Ev(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Av=0;function Rv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pv(s){const e=new Tv,t=Ev(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const n=new B,r=new Ce,a=new Ce;function o(c,h){let u=0,d=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,v=0,m=0,f=0,_=0,M=0,S=0,C=0,T=0,R=0,P=0;c.sort(Rv);const b=h===!0?Math.PI:1;for(let D=0,N=c.length;D<N;D++){const E=c[D],O=E.color,F=E.intensity,z=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=O.r*F*b,d+=O.g*F*b,p+=O.b*F*b;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],F);P++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity*b),E.castShadow){const Z=E.shadow,Q=t.get(E);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=E.shadow.matrix,M++}i.directional[g]=H,g++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(O).multiplyScalar(F*b),H.distance=z,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[m]=H;const Z=E.shadow;if(E.map&&(i.spotLightMap[T]=E.map,T++,Z.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[m]=Z.matrix,E.castShadow){const Q=t.get(E);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=W,C++}m++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[f]=H,f++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity*b),H.distance=E.distance,H.decay=E.decay,E.castShadow){const Z=E.shadow,Q=t.get(E);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[v]=Q,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=E.shadow.matrix,S++}i.point[v]=H,v++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(F*b),H.groundColor.copy(E.groundColor).multiplyScalar(F*b),i.hemi[_]=H,_++}}f>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==g||y.pointLength!==v||y.spotLength!==m||y.rectAreaLength!==f||y.hemiLength!==_||y.numDirectionalShadows!==M||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==T||y.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=f,i.point.length=v,i.hemi.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,y.directionalLength=g,y.pointLength=v,y.spotLength=m,y.rectAreaLength=f,y.hemiLength=_,y.numDirectionalShadows=M,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=T,y.numLightProbes=P,i.version=Av++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const M=c[f];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Fc(s){const e=new Pv(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(h){e.setup(t,h)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cv(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new Fc(s),e.set(n,[o])):r>=a.length?(o=new Fc(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Lv extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`;function Dv(s,e,t){let i=new ka;const n=new Me,r=new Me,a=new it,o=new Lv({depthPacking:fd}),l=new Iv,c={},h=t.maxTextureSize,u={[Ni]:Ht,[Ht]:Ni,[xi]:xi},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Nv,fragmentShader:Uv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new at(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let f=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Zi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const E=f!==Ii&&this.type===Ii,O=f===Ii&&this.type!==Ii;for(let F=0,z=T.length;F<z;F++){const W=T[F],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Z=H.getFrameExtents();if(n.multiply(Z),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Z.x),n.x=r.x*Z.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Z.y),n.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||E===!0||O===!0){const ve=this.type!==Ii?{minFilter:Dt,magFilter:Dt}:{};H.map!==null&&H.map.dispose(),H.map=new xn(n.x,n.y,ve),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Q=H.getViewportCount();for(let ve=0;ve<Q;ve++){const se=H.getViewport(ve);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),N.viewport(a),H.updateMatrices(W,ve),i=H.getFrustum(),S(R,P,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Ii&&_(H,P),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,y,D)};function _(T,R){const P=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,P,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,P,p,v,null)}function M(T,R,P,b){let y=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=y.uuid,E=R.uuid;let O=c[N];O===void 0&&(O={},c[N]=O);let F=O[E];F===void 0&&(F=y.clone(),O[E]=F,R.addEventListener("dispose",C)),y=F}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Ii?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=s.properties.get(y);N.light=P}return y}function S(T,R,P,b,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=e.update(T),E=T.material;if(Array.isArray(E)){const O=N.groups;for(let F=0,z=O.length;F<z;F++){const W=O[F],H=E[W.materialIndex];if(H&&H.visible){const Z=M(T,H,b,y);T.onBeforeShadow(s,T,R,P,N,Z,W),s.renderBufferDirect(P,null,N,Z,T,W),T.onAfterShadow(s,T,R,P,N,Z,W)}}}else if(E.visible){const O=M(T,E,b,y);T.onBeforeShadow(s,T,R,P,N,O,null),s.renderBufferDirect(P,null,N,O,T,null),T.onAfterShadow(s,T,R,P,N,O,null)}}const D=T.children;for(let N=0,E=D.length;N<E;N++)S(D[N],R,P,b,y)}function C(T){T.target.removeEventListener("dispose",C);for(const R in c){const P=c[R],b=T.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function Ov(s){function e(){let L=!1;const Y=new it;let X=null;const oe=new it(0,0,0,0);return{setMask:function(re){X!==re&&!L&&(s.colorMask(re,re,re,re),X=re)},setLocked:function(re){L=re},setClear:function(re,qe,nt,ct,st){st===!0&&(re*=ct,qe*=ct,nt*=ct),Y.set(re,qe,nt,ct),oe.equals(Y)===!1&&(s.clearColor(re,qe,nt,ct),oe.copy(Y))},reset:function(){L=!1,X=null,oe.set(-1,0,0,0)}}}function t(){let L=!1,Y=null,X=null,oe=null;return{setTest:function(re){re?fe(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(re){Y!==re&&!L&&(s.depthMask(re),Y=re)},setFunc:function(re){if(X!==re){switch(re){case ku:s.depthFunc(s.NEVER);break;case Vu:s.depthFunc(s.ALWAYS);break;case Hu:s.depthFunc(s.LESS);break;case sr:s.depthFunc(s.LEQUAL);break;case Gu:s.depthFunc(s.EQUAL);break;case Wu:s.depthFunc(s.GEQUAL);break;case ju:s.depthFunc(s.GREATER);break;case Xu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=re}},setLocked:function(re){L=re},setClear:function(re){oe!==re&&(s.clearDepth(re),oe=re)},reset:function(){L=!1,Y=null,X=null,oe=null}}}function i(){let L=!1,Y=null,X=null,oe=null,re=null,qe=null,nt=null,ct=null,st=null;return{setTest:function(Oe){L||(Oe?fe(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(Oe){Y!==Oe&&!L&&(s.stencilMask(Oe),Y=Oe)},setFunc:function(Oe,Nt,ht){(X!==Oe||oe!==Nt||re!==ht)&&(s.stencilFunc(Oe,Nt,ht),X=Oe,oe=Nt,re=ht)},setOp:function(Oe,Nt,ht){(qe!==Oe||nt!==Nt||ct!==ht)&&(s.stencilOp(Oe,Nt,ht),qe=Oe,nt=Nt,ct=ht)},setLocked:function(Oe){L=Oe},setClear:function(Oe){st!==Oe&&(s.clearStencil(Oe),st=Oe)},reset:function(){L=!1,Y=null,X=null,oe=null,re=null,qe=null,nt=null,ct=null,st=null}}}const n=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,_=null,M=null,S=null,C=null,T=new Ee(0,0,0),R=0,P=!1,b=null,y=null,D=null,N=null,E=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=z>=2);let H=null,Z={};const Q=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),se=new it().fromArray(Q),He=new it().fromArray(ve);function J(L,Y,X,oe){const re=new Uint8Array(4),qe=s.createTexture();s.bindTexture(L,qe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<X;nt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Y,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage2D(Y+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re);return qe}const ie={};ie[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),r.setFunc(sr),Ve(!1),Le(Bo),fe(s.CULL_FACE),et(Zi);function fe(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function le(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function ke(L,Y){return h[L]!==Y?(s.bindFramebuffer(L,Y),h[L]=Y,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Y),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Y),!0):!1}function Fe(L,Y){let X=d,oe=!1;if(L){X=u.get(Y),X===void 0&&(X=[],u.set(Y,X));const re=L.textures;if(X.length!==re.length||X[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,nt=re.length;qe<nt;qe++)X[qe]=s.COLOR_ATTACHMENT0+qe;X.length=re.length,oe=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,oe=!0);oe&&s.drawBuffers(X)}function V(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Qe={[vn]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[wu]:s.FUNC_REVERSE_SUBTRACT};Qe[Tu]=s.MIN,Qe[Eu]=s.MAX;const Se={[Au]:s.ZERO,[Ru]:s.ONE,[Pu]:s.SRC_COLOR,[sa]:s.SRC_ALPHA,[Du]:s.SRC_ALPHA_SATURATE,[Nu]:s.DST_COLOR,[Lu]:s.DST_ALPHA,[Cu]:s.ONE_MINUS_SRC_COLOR,[ra]:s.ONE_MINUS_SRC_ALPHA,[Uu]:s.ONE_MINUS_DST_COLOR,[Iu]:s.ONE_MINUS_DST_ALPHA,[Ou]:s.CONSTANT_COLOR,[Fu]:s.ONE_MINUS_CONSTANT_COLOR,[Bu]:s.CONSTANT_ALPHA,[zu]:s.ONE_MINUS_CONSTANT_ALPHA};function et(L,Y,X,oe,re,qe,nt,ct,st,Oe){if(L===Zi){g===!0&&(le(s.BLEND),g=!1);return}if(g===!1&&(fe(s.BLEND),g=!0),L!==bu){if(L!==v||Oe!==P){if((m!==vn||M!==vn)&&(s.blendEquation(s.FUNC_ADD),m=vn,M=vn),Oe)switch(L){case kn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ko:s.blendFunc(s.ONE,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ho:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ko:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ho:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,_=null,S=null,C=null,T.set(0,0,0),R=0,v=L,P=Oe}return}re=re||Y,qe=qe||X,nt=nt||oe,(Y!==m||re!==M)&&(s.blendEquationSeparate(Qe[Y],Qe[re]),m=Y,M=re),(X!==f||oe!==_||qe!==S||nt!==C)&&(s.blendFuncSeparate(Se[X],Se[oe],Se[qe],Se[nt]),f=X,_=oe,S=qe,C=nt),(ct.equals(T)===!1||st!==R)&&(s.blendColor(ct.r,ct.g,ct.b,st),T.copy(ct),R=st),v=L,P=!1}function Te(L,Y){L.side===xi?le(s.CULL_FACE):fe(s.CULL_FACE);let X=L.side===Ht;Y&&(X=!X),Ve(X),L.blending===kn&&L.transparent===!1?et(Zi):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),n.setMask(L.colorWrite);const oe=L.stencilWrite;a.setTest(oe),oe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){b!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),b=L)}function Le(L){L!==xu?(fe(s.CULL_FACE),L!==y&&(L===Bo?s.cullFace(s.BACK):L===yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),y=L}function Ge(L){L!==D&&(F&&s.lineWidth(L),D=L)}function dt(L,Y,X){L?(fe(s.POLYGON_OFFSET_FILL),(N!==Y||E!==X)&&(s.polygonOffset(Y,X),N=Y,E=X)):le(s.POLYGON_OFFSET_FILL)}function U(L){L?fe(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function w(L){L===void 0&&(L=s.TEXTURE0+O-1),H!==L&&(s.activeTexture(L),H=L)}function q(L,Y,X){X===void 0&&(H===null?X=s.TEXTURE0+O-1:X=H);let oe=Z[X];oe===void 0&&(oe={type:void 0,texture:void 0},Z[X]=oe),(oe.type!==L||oe.texture!==Y)&&(H!==X&&(s.activeTexture(X),H=X),s.bindTexture(L,Y||ie[L]),oe.type=L,oe.texture=Y)}function $(){const L=Z[H];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){se.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function Ie(L){He.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function Be(L,Y){let X=l.get(Y);X===void 0&&(X=new WeakMap,l.set(Y,X));let oe=X.get(L);oe===void 0&&(oe=s.getUniformBlockIndex(Y,L.name),X.set(L,oe))}function tt(L,Y){const X=l.get(Y).get(L);o.get(Y)!==X&&(s.uniformBlockBinding(Y,X,L.__bindingPointIndex),o.set(Y,X))}function I(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},H=null,Z={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,_=null,M=null,S=null,C=null,T=new Ee(0,0,0),R=0,P=!1,b=null,y=null,D=null,N=null,E=null,se.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:fe,disable:le,bindFramebuffer:ke,drawBuffers:Fe,useProgram:V,setBlending:et,setMaterial:Te,setFlipSided:Ve,setCullFace:Le,setLineWidth:Ge,setPolygonOffset:dt,setScissorTest:U,activeTexture:w,bindTexture:q,unbindTexture:$,compressedTexImage2D:te,compressedTexImage3D:ee,texImage2D:We,texImage3D:we,updateUBOMapping:Be,uniformBlockBinding:tt,texStorage2D:ae,texStorage3D:be,texSubImage2D:ye,texSubImage3D:de,compressedTexSubImage2D:pe,compressedTexSubImage3D:Re,scissor:ge,viewport:Ie,reset:I}}function Fv(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,w){return p?new OffscreenCanvas(U,w):Ds("canvas")}function v(U,w,q){let $=1;const te=dt(U);if((te.width>q||te.height>q)&&($=q/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ee=Math.floor($*te.width),ye=Math.floor($*te.height);u===void 0&&(u=g(ee,ye));const de=w?g(ee,ye):u;return de.width=ee,de.height=ye,de.getContext("2d").drawImage(U,0,0,ee,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+ye+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==Dt&&U.minFilter!==Xt}function f(U){s.generateMipmap(U)}function _(U,w,q,$,te=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ee=w;if(w===s.RED&&(q===s.FLOAT&&(ee=s.R32F),q===s.HALF_FLOAT&&(ee=s.R16F),q===s.UNSIGNED_BYTE&&(ee=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ee=s.R8UI),q===s.UNSIGNED_SHORT&&(ee=s.R16UI),q===s.UNSIGNED_INT&&(ee=s.R32UI),q===s.BYTE&&(ee=s.R8I),q===s.SHORT&&(ee=s.R16I),q===s.INT&&(ee=s.R32I)),w===s.RG&&(q===s.FLOAT&&(ee=s.RG32F),q===s.HALF_FLOAT&&(ee=s.RG16F),q===s.UNSIGNED_BYTE&&(ee=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ee=s.RG8UI),q===s.UNSIGNED_SHORT&&(ee=s.RG16UI),q===s.UNSIGNED_INT&&(ee=s.RG32UI),q===s.BYTE&&(ee=s.RG8I),q===s.SHORT&&(ee=s.RG16I),q===s.INT&&(ee=s.RG32I)),w===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),w===s.RGBA){const ye=te?hr:Ke.getTransfer($);q===s.FLOAT&&(ee=s.RGBA32F),q===s.HALF_FLOAT&&(ee=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ee=ye===rt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(U,w){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dt&&U.minFilter!==Xt?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function S(U){const w=U.target;w.removeEventListener("dispose",S),T(w),w.isVideoTexture&&h.delete(w)}function C(U){const w=U.target;w.removeEventListener("dispose",C),P(w)}function T(U){const w=i.get(U);if(w.__webglInit===void 0)return;const q=U.source,$=d.get(q);if($){const te=$[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(U),Object.keys($).length===0&&d.delete(q)}i.remove(U)}function R(U){const w=i.get(U);s.deleteTexture(w.__webglTexture);const q=U.source,$=d.get(q);delete $[w.__cacheKey],a.memory.textures--}function P(U){const w=i.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let te=0;te<w.__webglFramebuffer[$].length;te++)s.deleteFramebuffer(w.__webglFramebuffer[$][te]);else s.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)s.deleteFramebuffer(w.__webglFramebuffer[$]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=U.textures;for(let $=0,te=q.length;$<te;$++){const ee=i.get(q[$]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(q[$])}i.remove(U)}let b=0;function y(){b=0}function D(){const U=b;return U>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+n.maxTextures),b+=1,U}function N(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function E(U,w){const q=i.get(U);if(U.isVideoTexture&&Le(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(q,U,w);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function O(U,w){const q=i.get(U);if(U.version>0&&q.__version!==U.version){se(q,U,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function F(U,w){const q=i.get(U);if(U.version>0&&q.__version!==U.version){se(q,U,w);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function z(U,w){const q=i.get(U);if(U.version>0&&q.__version!==U.version){He(q,U,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const W={[Gn]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[ar]:s.MIRRORED_REPEAT},H={[Dt]:s.NEAREST,[jo]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[Xt]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},Z={[vd]:s.NEVER,[Sd]:s.ALWAYS,[_d]:s.LESS,[Ll]:s.LEQUAL,[xd]:s.EQUAL,[bd]:s.GEQUAL,[yd]:s.GREATER,[Md]:s.NOTEQUAL};function Q(U,w){if(w.type===yi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Xt||w.magFilter===or||w.magFilter===Ps||w.magFilter===Ui||w.minFilter===Xt||w.minFilter===or||w.minFilter===Ps||w.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,W[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,W[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,W[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,H[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,H[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dt||w.minFilter!==Ps&&w.minFilter!==Ui||w.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ve(U,w){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",S));const $=w.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const ee=N(w);if(ee!==U.__cacheKey){te[ee]===void 0&&(te[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),te[ee].usedTimes++;const ye=te[U.__cacheKey];ye!==void 0&&(te[U.__cacheKey].usedTimes--,ye.usedTimes===0&&R(w)),U.__cacheKey=ee,U.__webglTexture=te[ee].texture}return q}function se(U,w,q){let $=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=s.TEXTURE_3D);const te=ve(U,w),ee=w.source;t.bindTexture($,U.__webglTexture,s.TEXTURE0+q);const ye=i.get(ee);if(ee.version!==ye.__version||te===!0){t.activeTexture(s.TEXTURE0+q);const de=Ke.getPrimaries(Ke.workingColorSpace),pe=w.colorSpace===en?null:Ke.getPrimaries(w.colorSpace),Re=w.colorSpace===en||de===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ae=v(w.image,!1,n.maxTextureSize);ae=Ge(w,ae);const be=r.convert(w.format,w.colorSpace),We=r.convert(w.type);let we=_(w.internalFormat,be,We,w.colorSpace,w.isVideoTexture);Q($,w);let ge;const Ie=w.mipmaps,Be=w.isVideoTexture!==!0,tt=ye.__version===void 0||te===!0,I=ee.dataReady,L=M(w,ae);if(w.isDepthTexture)we=s.DEPTH_COMPONENT16,w.type===yi?we=s.DEPTH_COMPONENT32F:w.type===Wn?we=s.DEPTH_COMPONENT24:w.type===Cs&&(we=s.DEPTH24_STENCIL8),tt&&(Be?t.texStorage2D(s.TEXTURE_2D,1,we,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,we,ae.width,ae.height,0,be,We,null));else if(w.isDataTexture)if(Ie.length>0){Be&&tt&&t.texStorage2D(s.TEXTURE_2D,L,we,Ie[0].width,Ie[0].height);for(let Y=0,X=Ie.length;Y<X;Y++)ge=Ie[Y],Be?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,be,We,ge.data):t.texImage2D(s.TEXTURE_2D,Y,we,ge.width,ge.height,0,be,We,ge.data);w.generateMipmaps=!1}else Be?(tt&&t.texStorage2D(s.TEXTURE_2D,L,we,ae.width,ae.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,be,We,ae.data)):t.texImage2D(s.TEXTURE_2D,0,we,ae.width,ae.height,0,be,We,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,L,we,Ie[0].width,Ie[0].height,ae.depth);for(let Y=0,X=Ie.length;Y<X;Y++)ge=Ie[Y],w.format!==ai?be!==null?Be?I&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ae.depth,be,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,we,ge.width,ge.height,ae.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ae.depth,be,We,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,we,ge.width,ge.height,ae.depth,0,be,We,ge.data)}else{Be&&tt&&t.texStorage2D(s.TEXTURE_2D,L,we,Ie[0].width,Ie[0].height);for(let Y=0,X=Ie.length;Y<X;Y++)ge=Ie[Y],w.format!==ai?be!==null?Be?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,be,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,be,We,ge.data):t.texImage2D(s.TEXTURE_2D,Y,we,ge.width,ge.height,0,be,We,ge.data)}else if(w.isDataArrayTexture)Be?(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,L,we,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,We,ae.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,be,We,ae.data);else if(w.isData3DTexture)Be?(tt&&t.texStorage3D(s.TEXTURE_3D,L,we,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,We,ae.data)):t.texImage3D(s.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,be,We,ae.data);else if(w.isFramebufferTexture){if(tt)if(Be)t.texStorage2D(s.TEXTURE_2D,L,we,ae.width,ae.height);else{let Y=ae.width,X=ae.height;for(let oe=0;oe<L;oe++)t.texImage2D(s.TEXTURE_2D,oe,we,Y,X,0,be,We,null),Y>>=1,X>>=1}}else if(Ie.length>0){if(Be&&tt){const Y=dt(Ie[0]);t.texStorage2D(s.TEXTURE_2D,L,we,Y.width,Y.height)}for(let Y=0,X=Ie.length;Y<X;Y++)ge=Ie[Y],Be?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,be,We,ge):t.texImage2D(s.TEXTURE_2D,Y,we,be,We,ge);w.generateMipmaps=!1}else if(Be){if(tt){const Y=dt(ae);t.texStorage2D(s.TEXTURE_2D,L,we,Y.width,Y.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,We,ae)}else t.texImage2D(s.TEXTURE_2D,0,we,be,We,ae);m(w)&&f($),ye.__version=ee.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function He(U,w,q){if(w.image.length!==6)return;const $=ve(U,w),te=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+q);const ee=i.get(te);if(te.version!==ee.__version||$===!0){t.activeTexture(s.TEXTURE0+q);const ye=Ke.getPrimaries(Ke.workingColorSpace),de=w.colorSpace===en?null:Ke.getPrimaries(w.colorSpace),pe=w.colorSpace===en||ye===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,be=[];for(let X=0;X<6;X++)!Re&&!ae?be[X]=v(w.image[X],!0,n.maxCubemapSize):be[X]=ae?w.image[X].image:w.image[X],be[X]=Ge(w,be[X]);const We=be[0],we=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Ie=_(w.internalFormat,we,ge,w.colorSpace),Be=w.isVideoTexture!==!0,tt=ee.__version===void 0||$===!0,I=te.dataReady;let L=M(w,We);Q(s.TEXTURE_CUBE_MAP,w);let Y;if(Re){Be&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,L,Ie,We.width,We.height);for(let X=0;X<6;X++){Y=be[X].mipmaps;for(let oe=0;oe<Y.length;oe++){const re=Y[oe];w.format!==ai?we!==null?Be?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,re.width,re.height,we,re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,re.width,re.height,we,ge,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,re.width,re.height,0,we,ge,re.data)}}}else{if(Y=w.mipmaps,Be&&tt){Y.length>0&&L++;const X=dt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,L,Ie,X.width,X.height)}for(let X=0;X<6;X++)if(ae){Be?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,be[X].width,be[X].height,we,ge,be[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,be[X].width,be[X].height,0,we,ge,be[X].data);for(let oe=0;oe<Y.length;oe++){const re=Y[oe].image[X].image;Be?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,re.width,re.height,we,ge,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,re.width,re.height,0,we,ge,re.data)}}else{Be?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,we,ge,be[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,we,ge,be[X]);for(let oe=0;oe<Y.length;oe++){const re=Y[oe];Be?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,we,ge,re.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,we,ge,re.image[X])}}}m(w)&&f(s.TEXTURE_CUBE_MAP),ee.__version=te.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function J(U,w,q,$,te,ee){const ye=r.convert(q.format,q.colorSpace),de=r.convert(q.type),pe=_(q.internalFormat,ye,de,q.colorSpace);if(!i.get(w).__hasExternalTextures){const Re=Math.max(1,w.width>>ee),ae=Math.max(1,w.height>>ee);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,pe,Re,ae,w.depth,0,ye,de,null):t.texImage2D(te,ee,pe,Re,ae,0,ye,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ve(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,te,i.get(q).__webglTexture,0,Te(w)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,te,i.get(q).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(U,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer&&!w.stencilBuffer){let $=s.DEPTH_COMPONENT24;if(q||Ve(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===yi?$=s.DEPTH_COMPONENT32F:te.type===Wn&&($=s.DEPTH_COMPONENT24));const ee=Te(w);Ve(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,$,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,$,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,$,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,U)}else if(w.depthBuffer&&w.stencilBuffer){const $=Te(w);q&&Ve(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,w.width,w.height):Ve(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,U)}else{const $=w.textures;for(let te=0;te<$.length;te++){const ee=$[te],ye=r.convert(ee.format,ee.colorSpace),de=r.convert(ee.type),pe=_(ee.internalFormat,ye,de,ee.colorSpace),Re=Te(w);q&&Ve(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,pe,w.width,w.height):Ve(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,pe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,pe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),E(w.depthTexture,0);const q=i.get(w.depthTexture).__webglTexture,$=Te(w);if(w.depthTexture.format===jn)Ve(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(w.depthTexture.format===Ls)Ve(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function le(U){const w=i.get(U),q=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,U)}else if(q){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=s.createRenderbuffer(),ie(w.__webglDepthbuffer[$],U,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ie(w.__webglDepthbuffer,U,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(U,w,q){const $=i.get(U);w!==void 0&&J($.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&le(U)}function Fe(U){const w=U.texture,q=i.get(U),$=i.get(w);U.addEventListener("dispose",C);const te=U.textures,ee=U.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=w.version,a.memory.textures++),ee){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let pe=0;pe<w.mipmaps.length;pe++)q.__webglFramebuffer[de][pe]=s.createFramebuffer()}else q.__webglFramebuffer[de]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)q.__webglFramebuffer[de]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(ye)for(let de=0,pe=te.length;de<pe;de++){const Re=i.get(te[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),a.memory.textures++)}if(U.samples>0&&Ve(U)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const pe=te[de];q.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const Re=r.convert(pe.format,pe.colorSpace),ae=r.convert(pe.type),be=_(pe.internalFormat,Re,ae,pe.colorSpace,U.isXRRenderTarget===!0),We=Te(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,be,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,q.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Q(s.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)J(q.__webglFramebuffer[de][pe],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else J(q.__webglFramebuffer[de],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(w)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let de=0,pe=te.length;de<pe;de++){const Re=te[de],ae=i.get(Re);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),Q(s.TEXTURE_2D,Re),J(q.__webglFramebuffer,U,Re,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),m(Re)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Q(de,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)J(q.__webglFramebuffer[pe],U,w,s.COLOR_ATTACHMENT0,de,pe);else J(q.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,de,0);m(w)&&f(de),t.unbindTexture()}U.depthBuffer&&le(U)}function V(U){const w=U.textures;for(let q=0,$=w.length;q<$;q++){const te=w[q];if(m(te)){const ee=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=i.get(te).__webglTexture;t.bindTexture(ee,ye),f(ee),t.unbindTexture()}}}const Qe=[],Se=[];function et(U){if(U.samples>0){if(Ve(U)===!1){const w=U.textures,q=U.width,$=U.height;let te=s.COLOR_BUFFER_BIT;const ee=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=i.get(U),de=w.length>1;if(de)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Re=i.get(w[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,q,$,0,0,q,$,te,s.NEAREST),l===!0&&(Qe.length=0,Se.length=0,Qe.push(s.COLOR_ATTACHMENT0+pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Qe.push(ee),Se.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Re=i.get(w[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Te(U){return Math.min(n.maxSamples,U.samples)}function Ve(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(U){const w=a.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Ge(U,w){const q=U.colorSpace,$=U.format,te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Et&&q!==en&&(Ke.getTransfer(q)===rt?($!==ai||te!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function dt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=y,this.setTexture2D=E,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ve}function Bv(s,e){function t(i,n=en){let r;const a=Ke.getTransfer(n);if(i===Qi)return s.UNSIGNED_BYTE;if(i===Yo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ko)return s.UNSIGNED_SHORT_5_5_5_1;if(i===rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return s.BYTE;if(i===sd)return s.SHORT;if(i===Xo)return s.UNSIGNED_SHORT;if(i===qo)return s.INT;if(i===Wn)return s.UNSIGNED_INT;if(i===yi)return s.FLOAT;if(i===lr)return s.HALF_FLOAT;if(i===ad)return s.ALPHA;if(i===od)return s.RGB;if(i===ai)return s.RGBA;if(i===ld)return s.LUMINANCE;if(i===cd)return s.LUMINANCE_ALPHA;if(i===jn)return s.DEPTH_COMPONENT;if(i===Ls)return s.DEPTH_STENCIL;if(i===Zo)return s.RED;if(i===Jo)return s.RED_INTEGER;if(i===hd)return s.RG;if(i===$o)return s.RG_INTEGER;if(i===Qo)return s.RGBA_INTEGER;if(i===ca||i===ha||i===ua||i===da)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===el||i===tl||i===il||i===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===rl||i===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sl||i===rl)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===al)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===pl||i===ml||i===fl||i===gl||i===vl||i===_l||i===xl||i===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ol)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ul)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===Ml||i===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pa)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===Sl||i===wl||i===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class zv extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let An=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}};const kv={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`;class Gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new bt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,n=new on({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new at(new ps(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Wv extends _n{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new Gv,m=t.getContextAttributes();let f=null,_=null;const M=[],S=[],C=new Me;let T=null;const R=new It;R.layers.enable(1),R.viewport=new it;const P=new It;P.layers.enable(2),P.viewport=new it;const b=[R,P],y=new zv;y.layers.enable(1),y.layers.enable(2);let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=M[J];return ie===void 0&&(ie=new Za,M[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=M[J];return ie===void 0&&(ie=new Za,M[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=M[J];return ie===void 0&&(ie=new Za,M[J]=ie),ie.getHandSpace()};function E(J){const ie=S.indexOf(J.inputSource);if(ie===-1)return;const fe=M[ie];fe!==void 0&&(fe.update(J.inputSource,J.frame,c||a),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){n.removeEventListener("select",E),n.removeEventListener("selectstart",E),n.removeEventListener("selectend",E),n.removeEventListener("squeeze",E),n.removeEventListener("squeezestart",E),n.removeEventListener("squeezeend",E),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",F);for(let J=0;J<M.length;J++){const ie=S[J];ie!==null&&(S[J]=null,M[J].disconnect(ie))}D=null,N=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,n=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",E),n.addEventListener("selectstart",E),n.addEventListener("selectend",E),n.addEventListener("squeeze",E),n.addEventListener("squeezestart",E),n.addEventListener("squeezeend",E),n.addEventListener("end",O),n.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ie),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new xn(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,fe=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Ls:jn,fe=m.stencil?Cs:Wn);const ke={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ke),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new xn(d.textureWidth,d.textureHeight,{format:ai,type:Qi,depthTexture:new vc(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function F(J){for(let ie=0;ie<J.removed.length;ie++){const fe=J.removed[ie],le=S.indexOf(fe);le>=0&&(S[le]=null,M[le].disconnect(fe))}for(let ie=0;ie<J.added.length;ie++){const fe=J.added[ie];let le=S.indexOf(fe);if(le===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=S.length){S.push(fe),le=Fe;break}else if(S[Fe]===null){S[Fe]=fe,le=Fe;break}if(le===-1)break}const ke=M[le];ke&&ke.connect(fe)}}const z=new B,W=new B;function H(J,ie,fe){z.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);const le=z.distanceTo(W),ke=ie.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,V=ke[14]/(ke[10]-1),Qe=ke[14]/(ke[10]+1),Se=(ke[9]+1)/ke[5],et=(ke[9]-1)/ke[5],Te=(ke[8]-1)/ke[0],Ve=(Fe[8]+1)/Fe[0],Le=V*Te,Ge=V*Ve,dt=le/(-Te+Ve),U=dt*-Te;ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(U),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const w=V+dt,q=Qe+dt,$=Le-U,te=Ge+(le-U),ee=Se*Qe/q*w,ye=et*Qe/q*w;J.projectionMatrix.makePerspective($,te,ee,ye,w,q),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Z(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;v.texture!==null&&(J.near=v.depthNear,J.far=v.depthFar),y.near=P.near=R.near=J.near,y.far=P.far=R.far=J.far,(D!==y.near||N!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,N=y.far,R.near=D,R.far=N,P.near=D,P.far=N,R.updateProjectionMatrix(),P.updateProjectionMatrix(),J.updateProjectionMatrix());const ie=J.parent,fe=y.cameras;Z(y,ie);for(let le=0;le<fe.length;le++)Z(fe[le],ie);fe.length===2?H(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),Q(J,y,ie)};function Q(J,ie,fe){fe===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yn*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null};let ve=null;function se(J,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let le=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Fe=0;Fe<fe.length;Fe++){const V=fe[Fe];let Qe=null;if(p!==null)Qe=p.getViewport(V);else{const et=u.getViewSubImage(d,V);Qe=et.viewport,Fe===0&&(e.setRenderTargetTextures(_,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(_))}let Se=b[Fe];Se===void 0&&(Se=new It,Se.layers.enable(Fe),Se.viewport=new it,b[Fe]=Se),Se.matrix.fromArray(V.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(V.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Fe===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Se)}const ke=n.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Fe=u.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,n.renderState)}}for(let fe=0;fe<M.length;fe++){const le=S[fe],ke=M[fe];le!==null&&ke!==void 0&&ke.update(le,ie,c||a)}v.render(e,y),ve&&ve(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const He=new cc;He.setAnimationLoop(se),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}}const Rn=new ui,jv=new Ce;function Xv(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),M=_.envMap,S=_.envMapRotation;if(M&&(m.envMap.value=M,Rn.copy(S),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),m.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Rn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const C=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*C,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function qv(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const S=M.program;i.uniformBlockBinding(_,S)}function c(_,M){let S=n[_.id];S===void 0&&(g(_),S=h(_),n[_.id]=S,_.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(_,C);const T=e.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){const M=u();_.__bindingPointIndex=M;const S=s.createBuffer(),C=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const M=n[_.id],S=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,R=S.length;T<R;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,y=P.length;b<y;b++){const D=P[b];if(p(D,T,b,C)===!0){const N=D.__offset,E=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let F=0;F<E.length;F++){const z=E[F],W=v(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,N+O,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,O),O+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,M,S,C){const T=_.value,R=M+"_"+S;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const P=C[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(_){const M=_.uniforms;let S=0;const C=16;for(let R=0,P=M.length;R<P;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,D=b.length;y<D;y++){const N=b[y],E=Array.isArray(N.value)?N.value:[N.value];for(let O=0,F=E.length;O<F;O++){const z=E[O],W=v(z),H=S%C;H!==0&&C-H<W.boundary&&(S+=C-H),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=W.storage}}}const T=S%C;return T>0&&(S+=C-T),_.__size=S,_.__cache={},this}function v(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function f(){for(const _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class Yv{constructor(e={}){const{canvas:t=kd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const M=this;let S=!1,C=0,T=0,R=null,P=-1,b=null;const y=new it,D=new it;let N=null;const E=new Ee(0);let O=0,F=t.width,z=t.height,W=1,H=null,Z=null;const Q=new it(0,0,F,z),ve=new it(0,0,F,z);let se=!1;const He=new ka;let J=!1,ie=!1;const fe=new Ce,le=new B,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return R===null?W:1}let V=i;function Qe(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rt}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",X,!1),V===null){const k="webgl2";if(V=Qe(k,A),V===null)throw Qe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,et,Te,Ve,Le,Ge,dt,U,w,q,$,te,ee,ye,de,pe,Re,ae,be,We,we,ge,Ie,Be;function tt(){Se=new ig(V),Se.init(),ge=new Bv(V,Se),et=new Zf(V,Se,e,ge),Te=new Ov(V),Ve=new rg(V),Le=new bv,Ge=new Fv(V,Se,Te,Le,et,ge,Ve),dt=new $f(M),U=new tg(M),w=new up(V),Ie=new Yf(V,w),q=new ng(V,w,Ve,Ie),$=new og(V,q,w,Ve),be=new ag(V,et,Ge),pe=new Jf(Le),te=new Mv(M,dt,U,Se,et,Ie,pe),ee=new Xv(M,Le),ye=new wv,de=new Cv(Se),ae=new qf(M,dt,U,Te,$,d,l),Re=new Dv(M,$,et),Be=new qv(V,Ve,et,Te),We=new Kf(V,Se,Ve),we=new sg(V,Se,Ve),Ve.programs=te.programs,M.capabilities=et,M.extensions=Se,M.properties=Le,M.renderLists=ye,M.shadowMap=Re,M.state=Te,M.info=Ve}tt();const I=new Wv(M,V);this.xr=I,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(F,z,!1))},this.getSize=function(A){return A.set(F,z)},this.setSize=function(A,k,K=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,z=k,t.width=Math.floor(A*W),t.height=Math.floor(k*W),K===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(F*W,z*W).floor()},this.setDrawingBufferSize=function(A,k,K){F=A,z=k,W=K,t.width=Math.floor(A*K),t.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,k,K,j){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,k,K,j),Te.viewport(y.copy(Q).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,k,K,j){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,k,K,j),Te.scissor(D.copy(ve).multiplyScalar(W).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){Te.setScissorTest(se=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(A=!0,k=!0,K=!0){let j=0;if(A){let G=!1;if(R!==null){const ce=R.texture.format;G=ce===Qo||ce===$o||ce===Jo}if(G){const ce=R.texture.type,xe=ce===Qi||ce===Wn||ce===Xo||ce===Cs||ce===Yo||ce===Ko,_e=ae.getClearColor(),Ae=ae.getClearAlpha(),Ne=_e.r,Xe=_e.g,je=_e.b;xe?(p[0]=Ne,p[1]=Xe,p[2]=je,p[3]=Ae,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=Ne,g[1]=Xe,g[2]=je,g[3]=Ae,V.clearBufferiv(V.COLOR,0,g))}else j|=V.COLOR_BUFFER_BIT}k&&(j|=V.DEPTH_BUFFER_BIT),K&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",X,!1),ye.dispose(),de.dispose(),Le.dispose(),dt.dispose(),U.dispose(),$.dispose(),Ie.dispose(),Be.dispose(),te.dispose(),I.dispose(),I.removeEventListener("sessionstart",Oe),I.removeEventListener("sessionend",Nt),ht.stop()};function L(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Ve.autoReset,k=Re.enabled,K=Re.autoUpdate,j=Re.needsUpdate,G=Re.type;tt(),Ve.autoReset=A,Re.enabled=k,Re.autoUpdate=K,Re.needsUpdate=j,Re.type=G}function X(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){const k=A.target;k.removeEventListener("dispose",oe),re(k)}function re(A){qe(A),Le.remove(A)}function qe(A){const k=Le.get(A).programs;k!==void 0&&(k.forEach(function(K){te.releaseProgram(K)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,j,G,ce){k===null&&(k=ke);const xe=G.isMesh&&G.matrixWorld.determinant()<0,_e=qM(A,k,K,j,G);Te.setMaterial(j,xe);let Ae=K.index,Ne=1;if(j.wireframe===!0){if(Ae=q.getWireframeAttribute(K),Ae===void 0)return;Ne=2}const Xe=K.drawRange,je=K.attributes.position;let Mt=Xe.start*Ne,jt=(Xe.start+Xe.count)*Ne;ce!==null&&(Mt=Math.max(Mt,ce.start*Ne),jt=Math.min(jt,(ce.start+ce.count)*Ne)),Ae!==null?(Mt=Math.max(Mt,0),jt=Math.min(jt,Ae.count)):je!=null&&(Mt=Math.max(Mt,0),jt=Math.min(jt,je.count));const si=jt-Mt;if(si<0||si===1/0)return;Ie.setup(G,j,_e,K,Ae);let Vt,pt=We;if(Ae!==null&&(Vt=w.get(Ae),pt=we,pt.setIndex(Vt)),G.isMesh)j.wireframe===!0?(Te.setLineWidth(j.wireframeLinewidth*Fe()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(G.isLine){let Pe=j.linewidth;Pe===void 0&&(Pe=1),Te.setLineWidth(Pe*Fe()),G.isLineSegments?pt.setMode(V.LINES):G.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else G.isPoints?pt.setMode(V.POINTS):G.isSprite&&pt.setMode(V.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)pt.renderInstances(Mt,si,G.count);else if(K.isInstancedBufferGeometry){const Pe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,No=Math.min(K.instanceCount,Pe);pt.renderInstances(Mt,si,No)}else pt.render(Mt,si)};function nt(A,k,K){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=Ht,A.needsUpdate=!0,na(A,k,K),A.side=Ni,A.needsUpdate=!0,na(A,k,K),A.side=xi):na(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),m=de.get(K),m.init(k),_.push(m),K.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==K&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(M._useLegacyLights);const j=new Set;return A.traverse(function(G){const ce=G.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const _e=ce[xe];nt(_e,K,G),j.add(_e)}else nt(ce,K,G),j.add(ce)}),_.pop(),m=null,j},this.compileAsync=function(A,k,K=null){const j=this.compile(A,k,K);return new Promise(G=>{function ce(){if(j.forEach(function(xe){Le.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){G(A);return}setTimeout(ce,10)}Se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ct=null;function st(A){ct&&ct(A)}function Oe(){ht.stop()}function Nt(){ht.start()}const ht=new cc;ht.setAnimationLoop(st),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(A){ct=A,I.setAnimationLoop(A),A===null?ht.stop():ht.start()},I.addEventListener("sessionstart",Oe),I.addEventListener("sessionend",Nt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(k),k=I.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,k,R),m=de.get(A,_.length),m.init(k),_.push(m),fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),He.setFromProjectionMatrix(fe),ie=this.localClippingEnabled,J=pe.init(this.clippingPlanes,ie),v=ye.get(A,f.length),v.init(),f.push(v),mn(A,k,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,Z);const K=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1;K&&ae.addToRenderList(v,A),this.info.render.frame++,J===!0&&pe.beginShadows();const j=m.state.shadowsArray;Re.render(j,A,k),J===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,ce=v.transmissive;if(m.setupLights(M._useLegacyLights),k.isArrayCamera){const xe=k.cameras;if(ce.length>0)for(let _e=0,Ae=xe.length;_e<Ae;_e++){const Ne=xe[_e];ir(G,ce,A,Ne)}K&&ae.render(A);for(let _e=0,Ae=xe.length;_e<Ae;_e++){const Ne=xe[_e];Fn(v,A,Ne,Ne.viewport)}}else ce.length>0&&ir(G,ce,A,k),K&&ae.render(A),Fn(v,A,k);R!==null&&(Ge.updateMultisampleRenderTarget(R),Ge.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,k),Ie.resetDefaultState(),P=-1,b=null,_.pop(),_.length>0?(m=_[_.length-1],J===!0&&pe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function mn(A,k,K,j){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||He.intersectsSprite(A)){j&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const ce=$.update(A),xe=A.material;xe.visible&&v.push(A,ce,xe,K,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||He.intersectsObject(A))){const ce=$.update(A),xe=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),le.copy(ce.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(xe)){const _e=ce.groups;for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const Xe=_e[Ae],je=xe[Xe.materialIndex];je&&je.visible&&v.push(A,ce,je,K,le.z,Xe)}}else xe.visible&&v.push(A,ce,xe,K,le.z,null)}}const G=A.children;for(let ce=0,xe=G.length;ce<xe;ce++)mn(G[ce],k,K,j)}function Fn(A,k,K,j){const G=A.opaque,ce=A.transmissive,xe=A.transparent;m.setupLightsView(K),J===!0&&pe.setGlobalState(M.clippingPlanes,K),j&&Te.viewport(y.copy(j)),G.length>0&&ia(G,k,K),ce.length>0&&ia(ce,k,K),xe.length>0&&ia(xe,k,K),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ir(A,k,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new xn(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?lr:Qi,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const G=m.state.transmissionRenderTarget[j.id],ce=j.viewport||y;G.setSize(ce.z,ce.w);const xe=M.getRenderTarget();M.setRenderTarget(G),M.getClearColor(E),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear();const _e=M.toneMapping;M.toneMapping=Ji;const Ae=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),J===!0&&pe.setGlobalState(M.clippingPlanes,j),ia(A,K,j),Ge.updateMultisampleRenderTarget(G),Ge.updateRenderTargetMipmap(G),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Xe=0,je=k.length;Xe<je;Xe++){const Mt=k[Xe],jt=Mt.object,si=Mt.geometry,Vt=Mt.material,pt=Mt.group;if(Vt.side===xi&&jt.layers.test(j.layers)){const Pe=Vt.side;Vt.side=Ht,Vt.needsUpdate=!0,mu(jt,K,j,si,Vt,pt),Vt.side=Pe,Vt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ge.updateMultisampleRenderTarget(G),Ge.updateRenderTargetMipmap(G))}M.setRenderTarget(xe),M.setClearColor(E,O),Ae!==void 0&&(j.viewport=Ae),M.toneMapping=_e}function ia(A,k,K){const j=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ce=A.length;G<ce;G++){const xe=A[G],_e=xe.object,Ae=xe.geometry,Ne=j===null?xe.material:j,Xe=xe.group;_e.layers.test(K.layers)&&mu(_e,k,K,Ae,Ne,Xe)}}function mu(A,k,K,j,G,ce){A.onBeforeRender(M,k,K,j,G,ce),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,k,K,j,A,ce),G.transparent===!0&&G.side===xi&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,M.renderBufferDirect(K,k,j,G,A,ce),G.side=Ni,G.needsUpdate=!0,M.renderBufferDirect(K,k,j,G,A,ce),G.side=xi):M.renderBufferDirect(K,k,j,G,A,ce),A.onAfterRender(M,k,K,j,G,ce)}function na(A,k,K){k.isScene!==!0&&(k=ke);const j=Le.get(A),G=m.state.lights,ce=m.state.shadowsArray,xe=G.state.version,_e=te.getParameters(A,G.state,ce,k,K),Ae=te.getProgramCacheKey(_e);let Ne=j.programs;j.environment=A.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(A.isMeshStandardMaterial?U:dt).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",oe),Ne=new Map,j.programs=Ne);let Xe=Ne.get(Ae);if(Xe!==void 0){if(j.currentProgram===Xe&&j.lightsStateVersion===xe)return gu(A,_e),Xe}else _e.uniforms=te.getUniforms(A),A.onBuild(K,_e,M),A.onBeforeCompile(_e,M),Xe=te.acquireProgram(_e,Ae),Ne.set(Ae,Xe),j.uniforms=_e.uniforms;const je=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=pe.uniform),gu(A,_e),j.needsLights=KM(A),j.lightsStateVersion=xe,j.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.directionalShadowMap.value=G.state.directionalShadowMap,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotShadowMap.value=G.state.spotShadowMap,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMap.value=G.state.pointShadowMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Xe,j.uniformsList=null,Xe}function fu(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Or.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function gu(A,k){const K=Le.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function qM(A,k,K,j,G){k.isScene!==!0&&(k=ke),Ge.resetTextureUnits();const ce=k.fog,xe=j.isMeshStandardMaterial?k.environment:null,_e=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Et,Ae=(j.isMeshStandardMaterial?U:dt).get(j.envMap||xe),Ne=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),je=!!K.morphAttributes.position,Mt=!!K.morphAttributes.normal,jt=!!K.morphAttributes.color;let si=Ji;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(si=M.toneMapping);const Vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pt=Vt!==void 0?Vt.length:0,Pe=Le.get(j),No=m.state.lights;if(J===!0&&(ie===!0||A!==b)){const ri=A===b&&j.id===P;pe.setState(j,A,ri)}let Uo=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==No.state.version||Pe.outputColorSpace!==_e||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Ae||j.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==pe.numPlanes||Pe.numIntersection!==pe.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Xe||Pe.morphTargets!==je||Pe.morphNormals!==Mt||Pe.morphColors!==jt||Pe.toneMapping!==si||Pe.morphTargetsCount!==pt)&&(Uo=!0):(Uo=!0,Pe.__version=j.version);let Bn=Pe.currentProgram;Uo===!0&&(Bn=na(j,k,G));let vu=!1,nr=!1,Do=!1;const Ut=Bn.getUniforms(),fn=Pe.uniforms;if(Te.useProgram(Bn.program)&&(vu=!0,nr=!0,Do=!0),j.id!==P&&(P=j.id,nr=!0),vu||b!==A){Ut.setValue(V,"projectionMatrix",A.projectionMatrix),Ut.setValue(V,"viewMatrix",A.matrixWorldInverse);const ri=Ut.map.cameraPosition;ri!==void 0&&ri.setValue(V,le.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Ut.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ut.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,nr=!0,Do=!0)}if(G.isSkinnedMesh){Ut.setOptional(V,G,"bindMatrix"),Ut.setOptional(V,G,"bindMatrixInverse");const ri=G.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),Ut.setValue(V,"boneTexture",ri.boneTexture,Ge))}G.isBatchedMesh&&(Ut.setOptional(V,G,"batchingTexture"),Ut.setValue(V,"batchingTexture",G._matricesTexture,Ge));const Oo=K.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0)&&be.update(G,K,Bn),(nr||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,Ut.setValue(V,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(fn.envMap.value=Ae,fn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),nr&&(Ut.setValue(V,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&YM(fn,Do),ce&&j.fog===!0&&ee.refreshFogUniforms(fn,ce),ee.refreshMaterialUniforms(fn,j,W,z,m.state.transmissionRenderTarget[A.id]),Or.upload(V,fu(Pe),fn,Ge)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Or.upload(V,fu(Pe),fn,Ge),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ut.setValue(V,"center",G.center),Ut.setValue(V,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(V,"normalMatrix",G.normalMatrix),Ut.setValue(V,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ri=j.uniformsGroups;for(let Fo=0,ZM=ri.length;Fo<ZM;Fo++){const _u=ri[Fo];Be.update(_u,Bn),Be.bind(_u,Bn)}}return Bn}function YM(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function KM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,k,K){Le.get(A.texture).__webglTexture=k,Le.get(A.depthTexture).__webglTexture=K;const j=Le.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const K=Le.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,K=0){R=A,C=k,T=K;let j=!0,G=null,ce=!1,xe=!1;if(A){const _e=Le.get(A);_e.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):_e.__webglFramebuffer===void 0?Ge.setupRenderTarget(A):_e.__hasExternalTextures&&Ge.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const Ne=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?G=Ne[k][K]:G=Ne[k],ce=!0):A.samples>0&&Ge.useMultisampledRTT(A)===!1?G=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[K]:G=Ne,y.copy(A.viewport),D.copy(A.scissor),N=A.scissorTest}else y.copy(Q).multiplyScalar(W).floor(),D.copy(ve).multiplyScalar(W).floor(),N=se;if(Te.bindFramebuffer(V.FRAMEBUFFER,G)&&j&&Te.drawBuffers(A,G),Te.viewport(y),Te.scissor(D),Te.setScissorTest(N),ce){const _e=Le.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,K)}else if(xe){const _e=Le.get(A.texture),Ae=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,_e.__webglTexture,K||0,Ae)}P=-1},this.readRenderTargetPixels=function(A,k,K,j,G,ce,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e){Te.bindFramebuffer(V.FRAMEBUFFER,_e);try{const Ae=A.texture,Ne=Ae.format,Xe=Ae.type;if(!et.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-j&&K>=0&&K<=A.height-G&&V.readPixels(k,K,j,G,ge.convert(Ne),ge.convert(Xe),ce)}finally{const Ae=R!==null?Le.get(R).__webglFramebuffer:null;Te.bindFramebuffer(V.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(A,k,K=0){const j=Math.pow(2,-K),G=Math.floor(k.image.width*j),ce=Math.floor(k.image.height*j);Ge.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,A.x,A.y,G,ce),Te.unbindTexture()},this.copyTextureToTexture=function(A,k,K,j=0){const G=k.image.width,ce=k.image.height,xe=ge.convert(K.format),_e=ge.convert(K.type);Ge.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,A.x,A.y,G,ce,xe,_e,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,xe,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,A.x,A.y,xe,_e,k.image),j===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,k,K,j,G=0){const ce=A.max.x-A.min.x,xe=A.max.y-A.min.y,_e=A.max.z-A.min.z,Ae=ge.convert(j.format),Ne=ge.convert(j.type);let Xe;if(j.isData3DTexture)Ge.setTexture3D(j,0),Xe=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Ge.setTexture2DArray(j,0),Xe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const je=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),jt=V.getParameter(V.UNPACK_SKIP_PIXELS),si=V.getParameter(V.UNPACK_SKIP_ROWS),Vt=V.getParameter(V.UNPACK_SKIP_IMAGES),pt=K.isCompressedTexture?K.mipmaps[G]:K.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,pt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?V.texSubImage3D(Xe,G,k.x,k.y,k.z,ce,xe,_e,Ae,Ne,pt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,G,k.x,k.y,k.z,ce,xe,_e,Ae,pt.data):V.texSubImage3D(Xe,G,k.x,k.y,k.z,ce,xe,_e,Ae,Ne,pt),V.pixelStorei(V.UNPACK_ROW_LENGTH,je),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,si),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Vt),G===0&&j.generateMipmaps&&V.generateMipmap(Xe),Te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ge.setTextureCube(A,0):A.isData3DTexture?Ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ge.setTexture2DArray(A,0):Ge.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Te.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===va?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===cr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Kv extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new B;class Ja{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ja(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bc=new B,zc=new it,kc=new it,Jv=new B,Vc=new Ce,Fr=new B,$a=new bi,Hc=new Ce,Qa=new es;class $v extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Go,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fr),this.boundingSphere.expandByPoint(Fr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(n),e.ray.intersectsSphere($a)!==!1&&(Hc.copy(n).invert(),Qa.copy(e.ray).applyMatrix4(Hc),!(this.boundingBox!==null&&Qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Go?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;zc.fromBufferAttribute(n.attributes.skinIndex,e),kc.fromBufferAttribute(n.attributes.skinWeight,e),Bc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=kc.getComponent(r);if(a!==0){const o=zc.getComponent(r);Vc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Jv.copy(Bc).applyMatrix4(Vc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gc extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wc extends bt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Dt,h=Dt,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=new Ce,Qv=new Ce;class eo{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Qv;jc.multiplyMatrices(o,t[r]),jc.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new eo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Wc(t,e,e,ai,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Gc),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class to extends Ot{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new Ce,Xc=new Ce,Br=[],qc=new $t,e0=new Ce,Vs=new at,Hs=new bi;class t0 extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,e0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),qc.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(qc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Hs.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,vs),Xc.multiplyMatrices(i,vs),Vs.matrixWorld=Xc,Vs.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const l=Br[a];l.instanceId=r,l.object=this,t.push(l)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wc(new Float32Array(n*this.count),n,this.count,Zo,yi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yc extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zr=new B,kr=new B,Kc=new Ce,Gs=new es,Vr=new bi,io=new B,Zc=new B;class no extends ut{constructor(e=new Ft,t=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)zr.fromBufferAttribute(t,n-1),kr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=zr.distanceTo(kr);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(n),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Kc.copy(n).invert(),Gs.copy(e.ray).applyMatrix4(Kc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p-1;g<v;g+=c){const m=h.getX(g),f=h.getX(g+1),_=Hr(this,e,Gs,l,m,f);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(p-1),v=h.getX(d),m=Hr(this,e,Gs,l,g,v);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,v=p-1;g<v;g+=c){const m=Hr(this,e,Gs,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Hr(this,e,Gs,l,p-1,d);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Hr(s,e,t,i,n,r){const a=s.geometry.attributes.position;if(zr.fromBufferAttribute(a,n),kr.fromBufferAttribute(a,r),t.distanceSqToSegment(zr,kr,io,Zc)>i)return;io.applyMatrix4(s.matrixWorld);const o=e.ray.origin.distanceTo(io);if(!(o<e.near||o>e.far))return{distance:o,point:Zc.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,object:s}}const Jc=new B,$c=new B;class i0 extends no{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Jc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Jc.distanceTo($c);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n0 extends no{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qc extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new Ce,so=new es,Gr=new bi,Wr=new B;class s0 extends ut{constructor(e=new Ft,t=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(n),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;eh.copy(n).invert(),so.copy(e.ray).applyMatrix4(eh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,g=d;p<g;p++){const v=c.getX(p);Wr.fromBufferAttribute(h,v),th(Wr,v,l,n,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=u,g=d;p<g;p++)Wr.fromBufferAttribute(h,p),th(Wr,p,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function th(s,e,t,i,n,r,a){const o=so.distanceSqToPoint(s);if(o<t){const l=new B;so.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ro extends Ft{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=i/2;let f=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(p,2));function _(){const S=new B,C=new B;let T=0;const R=(t-e)/i;for(let P=0;P<=r;P++){const b=[],y=P/r,D=y*(t-e)+e;for(let N=0;N<=n;N++){const E=N/n,O=E*l+o,F=Math.sin(O),z=Math.cos(O);C.x=D*F,C.y=-y*i+m,C.z=D*z,u.push(C.x,C.y,C.z),S.set(F,R,z).normalize(),d.push(S.x,S.y,S.z),p.push(E,1-y),b.push(g++)}v.push(b)}for(let P=0;P<n;P++)for(let b=0;b<r;b++){const y=v[b][P],D=v[b+1][P],N=v[b+1][P+1],E=v[b][P+1];h.push(y,D,E),h.push(D,N,E),T+=6}c.addGroup(f,T,0),f+=T}function M(S){const C=g,T=new Me,R=new B;let P=0;const b=S===!0?e:t,y=S===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const D=g;for(let N=0;N<=n;N++){const E=N/n*l+o,O=Math.cos(E),F=Math.sin(E);R.x=b*F,R.y=m*y,R.z=b*O,u.push(R.x,R.y,R.z),d.push(0,y,0),T.x=O*.5+.5,T.y=F*.5*y+.5,p.push(T.x,T.y),g++}for(let N=0;N<n;N++){const E=C+N,O=D+N;S===!0?h.push(O,O+1,E):h.push(O+1,O,E),P+=3}c.addGroup(f,P,S===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends Ft{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,d=new B,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const _=[],M=f/i;let S=0;f===0&&a===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(n+T*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(n+T*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+S,1-M),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const M=h[f][_+1],S=h[f][_],C=h[f+1][_],T=h[f+1][_+1];(f!==0||a>0)&&p.push(M,S,T),(f!==i-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ei extends ao{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ih extends pi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Xr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function r0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function a0(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function nh(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function sh(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}class Ws{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class o0 extends Ws{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=e,o=2*t-i;break;case Rl:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,l=2*i-t;break;case Rl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+_*a[c+C]+M*a[l+C]+S*a[u+C];return r}}class l0 extends Ws{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class c0 extends Ws{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new c0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new o0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Xn:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Xn;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&r0(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ma,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ai.prototype.TimeBufferType=Float32Array,Ai.prototype.ValueBufferType=Float32Array,Ai.prototype.DefaultInterpolation=Xn;class _s extends Ai{}_s.prototype.ValueTypeName="bool",_s.prototype.ValueBufferType=Array,_s.prototype.DefaultInterpolation=Is,_s.prototype.InterpolantFactoryMethodLinear=void 0,_s.prototype.InterpolantFactoryMethodSmooth=void 0;class rh extends Ai{}rh.prototype.ValueTypeName="color";class xs extends Ai{}xs.prototype.ValueTypeName="number";class h0 extends Ws{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Mi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Pn extends Ai{InterpolantFactoryMethodLinear(e){return new h0(this.times,this.values,this.getValueSize(),e)}}Pn.prototype.ValueTypeName="quaternion",Pn.prototype.DefaultInterpolation=Xn,Pn.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends Ai{}ys.prototype.ValueTypeName="string",ys.prototype.ValueBufferType=Array,ys.prototype.DefaultInterpolation=Is,ys.prototype.InterpolantFactoryMethodLinear=void 0,ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Ai{}Ms.prototype.ValueTypeName="vector";class u0{constructor(e="",t=-1,i=[],n=dd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(p0(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Ai.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=a0(l);l=nh(l,1,h),c=nh(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,g){if(d.length!==0){const v=[],m=[];sh(d,v,m,p),v.length!==0&&g.push(new h(u,v,m))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let g=0;g<u[p].morphTargets.length;g++)d[u[p].morphTargets[g]]=-1;for(const g in d){const v=[],m=[];for(let f=0;f!==u[p].morphTargets.length;++f){const _=u[p];v.push(_.time),m.push(_.morphTarget===g?1:0)}n.push(new xs(".morphTargetInfluence["+g+"]",v,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(Ms,d+".position",u,"pos",n),i(Pn,d+".quaternion",u,"rot",n),i(Ms,d+".scale",u,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function d0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return rh;case"quaternion":return Pn;case"bool":case"boolean":return _s;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function p0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=d0(s.type);if(s.times===void 0){const t=[],i=[];sh(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const hn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class m0{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const f0=new m0;class Cn{constructor(e){this.manager=e!==void 0?e:f0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class g0 extends Error{constructor(e,t){super(e),this.response=t}}class ah extends Cn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:n});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Vi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){_();function _(){u.read().then(({done:M,value:S})=>{if(M)f.close();else{v+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let T=0,R=h.length;T<R;T++){const P=h[T];P.onProgress&&P.onProgress(C)}f.enqueue(S),_()}})}}});return new Response(m)}else throw new g0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{hn.add(e,c);const h=Vi[e];delete Vi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oh extends Cn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=hn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ds("img");function l(){h(),hn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class v0 extends Cn{constructor(e){super(e)}load(e,t,i,n){const r=new Ba;r.colorSpace=Pt;const a=new oh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}}class lh extends Cn{constructor(e){super(e)}load(e,t,i,n){const r=new bt,a=new oh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class qr extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _0 extends qr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oo=new Ce,ch=new B,hh=new B;class lo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hh),t.updateMatrixWorld(),oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x0 extends lo{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Yn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class y0 extends qr{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new x0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uh=new Ce,js=new B,co=new B;class M0 extends lo{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),i.position.copy(js),co.copy(i.position),co.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(co),i.updateMatrixWorld(),n.makeTranslation(-js.x,-js.y,-js.z),uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class b0 extends qr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new M0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class S0 extends lo{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w0 extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new S0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class T0 extends Cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=hn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),hn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hn.add(e,l),r.manager.itemStart(e)}}const ho="\\[\\]\\.:\\/",E0=new RegExp("["+ho+"]","g"),uo="[^"+ho+"]",A0="[^"+ho.replace("\\.","")+"]",R0=/((?:WC+[\/:])*)/.source.replace("WC",uo),P0=/(WCOD+)?/.source.replace("WCOD",A0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),L0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),I0=new RegExp("^"+R0+P0+C0+L0+"$"),N0=["material","materials","bones","map"];class U0{constructor(e,t,i){const n=i||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Je{constructor(e,t,i){this.path=t,this.parsedPath=i||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,i):new Je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(E0,"")}static parseTrackName(e){const t=I0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);N0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=U0,Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const dh=new Ce;class ph{constructor(e,t,i=0,n=1/0){this.ray=new es(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(e,t=!0,i=[]){return po(e,this,i,t),i.sort(mh),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)po(e[n],this,i,t);return i.sort(mh),i}}function mh(s,e){return s.distance-e.distance}function po(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const n=s.children;for(let r=0,a=n.length;r<a;r++)po(n[r],e,t,!0)}}class fh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rt}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rt);const gh={type:"change"},mo={type:"start"},vh={type:"end"},Yr=new es,_h=new cn,D0=Math.cos(70*Ul.DEG2RAD);class O0 extends _n{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jt.ROTATE,MIDDLE:Jt.DOLLY,RIGHT:Jt.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Re),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gh),i.update(),r=n.NONE},this.update=function(){const I=new B,L=new Mi().setFromUnitVectors(e.up,new B(0,1,0)),Y=L.clone().invert(),X=new B,oe=new Mi,re=new B,qe=2*Math.PI;return function(nt=null){const ct=i.object.position;I.copy(ct).sub(i.target),I.applyQuaternion(L),o.setFromVector3(I),i.autoRotate&&r===n.NONE&&N(y(nt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let st=i.minAzimuthAngle,Oe=i.maxAzimuthAngle;isFinite(st)&&isFinite(Oe)&&(st<-Math.PI?st+=qe:st>Math.PI&&(st-=qe),Oe<-Math.PI?Oe+=qe:Oe>Math.PI&&(Oe-=qe),st<=Oe?o.theta=Math.max(st,Math.min(Oe,o.theta)):o.theta=o.theta>(st+Oe)/2?Math.max(st,o.theta):Math.min(Oe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Nt=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)o.radius=Q(o.radius);else{const ht=o.radius;o.radius=Q(o.radius*c),Nt=ht!=o.radius}if(I.setFromSpherical(o),I.applyQuaternion(Y),ct.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&T){let ht=null;if(i.object.isPerspectiveCamera){const mn=I.length();ht=Q(mn*c);const Fn=mn-ht;i.object.position.addScaledVector(S,Fn),i.object.updateMatrixWorld(),Nt=!!Fn}else if(i.object.isOrthographicCamera){const mn=new B(C.x,C.y,0);mn.unproject(i.object);const Fn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Nt=Fn!==i.object.zoom;const ir=new B(C.x,C.y,0);ir.unproject(i.object),i.object.position.sub(ir).add(mn),i.object.updateMatrixWorld(),ht=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ht!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ht).add(i.object.position):(Yr.origin.copy(i.object.position),Yr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Yr.direction))<D0?e.lookAt(i.target):(_h.setFromNormalAndCoplanarPoint(i.object.up,i.target),Yr.intersectPlane(_h,i.target))))}else if(i.object.isOrthographicCamera){const ht=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ht!==i.object.zoom&&(i.object.updateProjectionMatrix(),Nt=!0)}return c=1,T=!1,Nt||X.distanceToSquared(i.object.position)>a||8*(1-oe.dot(i.object.quaternion))>a||re.distanceToSquared(i.target)>a?(i.dispatchEvent(gh),X.copy(i.object.position),oe.copy(i.object.quaternion),re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",We),i.domElement.removeEventListener("pointerdown",U),i.domElement.removeEventListener("pointercancel",q),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",q),i.domElement.getRootNode().removeEventListener("keydown",de,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Re),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const a=1e-6,o=new fh,l=new fh;let c=1;const h=new B,u=new Me,d=new Me,p=new Me,g=new Me,v=new Me,m=new Me,f=new Me,_=new Me,M=new Me,S=new B,C=new Me;let T=!1;const R=[],P={};let b=!1;function y(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function D(I){const L=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*L)}function N(I){l.theta-=I}function E(I){l.phi-=I}const O=function(){const I=new B;return function(L,Y){I.setFromMatrixColumn(Y,0),I.multiplyScalar(-L),h.add(I)}}(),F=function(){const I=new B;return function(L,Y){i.screenSpacePanning===!0?I.setFromMatrixColumn(Y,1):(I.setFromMatrixColumn(Y,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(L),h.add(I)}}(),z=function(){const I=new B;return function(L,Y){const X=i.domElement;if(i.object.isPerspectiveCamera){const oe=i.object.position;I.copy(oe).sub(i.target);let re=I.length();re*=Math.tan(i.object.fov/2*Math.PI/180),O(2*L*re/X.clientHeight,i.object.matrix),F(2*Y*re/X.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(L*(i.object.right-i.object.left)/i.object.zoom/X.clientWidth,i.object.matrix),F(Y*(i.object.top-i.object.bottom)/i.object.zoom/X.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(I,L){if(!i.zoomToCursor)return;T=!0;const Y=i.domElement.getBoundingClientRect(),X=I-Y.left,oe=L-Y.top,re=Y.width,qe=Y.height;C.x=X/re*2-1,C.y=-(oe/qe)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function ve(I){u.set(I.clientX,I.clientY)}function se(I){Z(I.clientX,I.clientX),f.set(I.clientX,I.clientY)}function He(I){g.set(I.clientX,I.clientY)}function J(I){d.set(I.clientX,I.clientY),p.subVectors(d,u).multiplyScalar(i.rotateSpeed);const L=i.domElement;N(2*Math.PI*p.x/L.clientHeight),E(2*Math.PI*p.y/L.clientHeight),u.copy(d),i.update()}function ie(I){_.set(I.clientX,I.clientY),M.subVectors(_,f),M.y>0?W(D(M.y)):M.y<0&&H(D(M.y)),f.copy(_),i.update()}function fe(I){v.set(I.clientX,I.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),z(m.x,m.y),g.copy(v),i.update()}function le(I){Z(I.clientX,I.clientY),I.deltaY<0?H(D(I.deltaY)):I.deltaY>0&&W(D(I.deltaY)),i.update()}function ke(I){let L=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),L=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),L=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),L=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),L=!0;break}L&&(I.preventDefault(),i.update())}function Fe(I){if(R.length===1)u.set(I.pageX,I.pageY);else{const L=tt(I),Y=.5*(I.pageX+L.x),X=.5*(I.pageY+L.y);u.set(Y,X)}}function V(I){if(R.length===1)g.set(I.pageX,I.pageY);else{const L=tt(I),Y=.5*(I.pageX+L.x),X=.5*(I.pageY+L.y);g.set(Y,X)}}function Qe(I){const L=tt(I),Y=I.pageX-L.x,X=I.pageY-L.y,oe=Math.sqrt(Y*Y+X*X);f.set(0,oe)}function Se(I){i.enableZoom&&Qe(I),i.enablePan&&V(I)}function et(I){i.enableZoom&&Qe(I),i.enableRotate&&Fe(I)}function Te(I){if(R.length==1)d.set(I.pageX,I.pageY);else{const Y=tt(I),X=.5*(I.pageX+Y.x),oe=.5*(I.pageY+Y.y);d.set(X,oe)}p.subVectors(d,u).multiplyScalar(i.rotateSpeed);const L=i.domElement;N(2*Math.PI*p.x/L.clientHeight),E(2*Math.PI*p.y/L.clientHeight),u.copy(d)}function Ve(I){if(R.length===1)v.set(I.pageX,I.pageY);else{const L=tt(I),Y=.5*(I.pageX+L.x),X=.5*(I.pageY+L.y);v.set(Y,X)}m.subVectors(v,g).multiplyScalar(i.panSpeed),z(m.x,m.y),g.copy(v)}function Le(I){const L=tt(I),Y=I.pageX-L.x,X=I.pageY-L.y,oe=Math.sqrt(Y*Y+X*X);_.set(0,oe),M.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),W(M.y),f.copy(_);const re=(I.pageX+L.x)*.5,qe=(I.pageY+L.y)*.5;Z(re,qe)}function Ge(I){i.enableZoom&&Le(I),i.enablePan&&Ve(I)}function dt(I){i.enableZoom&&Le(I),i.enableRotate&&Te(I)}function U(I){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",q)),!Ie(I)&&(we(I),I.pointerType==="touch"?ae(I):$(I)))}function w(I){i.enabled!==!1&&(I.pointerType==="touch"?be(I):te(I))}function q(I){switch(ge(I),R.length){case 0:i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",q),i.dispatchEvent(vh),r=n.NONE;break;case 1:const L=R[0],Y=P[L];ae({pointerId:L,pageX:Y.x,pageY:Y.y});break}}function $(I){let L;switch(I.button){case 0:L=i.mouseButtons.LEFT;break;case 1:L=i.mouseButtons.MIDDLE;break;case 2:L=i.mouseButtons.RIGHT;break;default:L=-1}switch(L){case Jt.DOLLY:if(i.enableZoom===!1)return;se(I),r=n.DOLLY;break;case Jt.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;He(I),r=n.PAN}else{if(i.enableRotate===!1)return;ve(I),r=n.ROTATE}break;case Jt.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;ve(I),r=n.ROTATE}else{if(i.enablePan===!1)return;He(I),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(mo)}function te(I){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;J(I);break;case n.DOLLY:if(i.enableZoom===!1)return;ie(I);break;case n.PAN:if(i.enablePan===!1)return;fe(I);break}}function ee(I){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(I.preventDefault(),i.dispatchEvent(mo),le(ye(I)),i.dispatchEvent(vh))}function ye(I){const L=I.deltaMode,Y={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(L){case 1:Y.deltaY*=16;break;case 2:Y.deltaY*=100;break}return I.ctrlKey&&!b&&(Y.deltaY*=10),Y}function de(I){I.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(I){I.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Re(I){i.enabled===!1||i.enablePan===!1||ke(I)}function ae(I){switch(Be(I),R.length){case 1:switch(i.touches.ONE){case zn.ROTATE:if(i.enableRotate===!1)return;Fe(I),r=n.TOUCH_ROTATE;break;case zn.PAN:if(i.enablePan===!1)return;V(I),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case zn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(I),r=n.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(I),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(mo)}function be(I){switch(Be(I),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(I),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Ve(I),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(I),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;dt(I),i.update();break;default:r=n.NONE}}function We(I){i.enabled!==!1&&I.preventDefault()}function we(I){R.push(I.pointerId)}function ge(I){delete P[I.pointerId];for(let L=0;L<R.length;L++)if(R[L]==I.pointerId){R.splice(L,1);return}}function Ie(I){for(let L=0;L<R.length;L++)if(R[L]==I.pointerId)return!0;return!1}function Be(I){let L=P[I.pointerId];L===void 0&&(L=new Me,P[I.pointerId]=L),L.set(I.pageX,I.pageY)}function tt(I){const L=I.pointerId===R[0]?R[1]:R[0];return P[L]}i.domElement.addEventListener("contextmenu",We),i.domElement.addEventListener("pointerdown",U),i.domElement.addEventListener("pointercancel",q),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}class fi{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new x);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new x);const i=this.elements,n=e.x,r=e.y,a=e.z;return t.x=i[0]*n+i[1]*r+i[2]*a,t.y=i[3]*n+i[4]*r+i[5]*a,t.z=i[6]*n+i[7]*r+i[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new fi);const i=this.elements,n=e.elements,r=t.elements,a=i[0],o=i[1],l=i[2],c=i[3],h=i[4],u=i[5],d=i[6],p=i[7],g=i[8],v=n[0],m=n[1],f=n[2],_=n[3],M=n[4],S=n[5],C=n[6],T=n[7],R=n[8];return r[0]=a*v+o*_+l*C,r[1]=a*m+o*M+l*T,r[2]=a*f+o*S+l*R,r[3]=c*v+h*_+u*C,r[4]=c*m+h*M+u*T,r[5]=c*f+h*S+u*R,r[6]=d*v+p*_+g*C,r[7]=d*m+p*M+g*T,r[8]=d*f+p*S+g*R,t}scale(e,t){t===void 0&&(t=new fi);const i=this.elements,n=t.elements;for(let r=0;r!==3;r++)n[3*r+0]=e.x*i[3*r+0],n[3*r+1]=e.y*i[3*r+1],n[3*r+2]=e.z*i[3*r+2];return t}solve(e,t){t===void 0&&(t=new x);const i=3,n=4,r=[];let a,o;for(a=0;a<i*n;a++)r.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)r[a+n*o]=this.elements[a+3*o];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(a=c-l,r[a+n*a]===0){for(o=a+1;o<c;o++)if(r[a+n*o]!==0){h=u;do d=u-h,r[d+n*a]+=r[d+n*o];while(--h);break}}if(r[a+n*a]!==0)for(o=a+1;o<c;o++){const p=r[a+n*o]/r[a+n*a];h=u;do d=u-h,r[d+n*o]=d<=a?0:r[d+n*o]-r[d+n*a]*p;while(--h)}}while(--l);if(t.z=r[2*n+3]/r[2*n+2],t.y=(r[1*n+3]-r[1*n+2]*t.z)/r[1*n+1],t.x=(r[0*n+3]-r[0*n+2]*t.z-r[0*n+1]*t.y)/r[0*n+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new fi);const t=3,i=6,n=F0;let r,a;for(r=0;r<3;r++)for(a=0;a<3;a++)n[r+i*a]=this.elements[r+3*a];n[3]=1,n[9]=0,n[15]=0,n[4]=0,n[10]=1,n[16]=0,n[5]=0,n[11]=0,n[17]=1;let o=3;const l=o;let c;const h=i;let u;do{if(r=l-o,n[r+i*r]===0){for(a=r+1;a<l;a++)if(n[r+i*a]!==0){c=h;do u=h-c,n[u+i*r]+=n[u+i*a];while(--c);break}}if(n[r+i*r]!==0)for(a=r+1;a<l;a++){const d=n[r+i*a]/n[r+i*r];c=h;do u=h-c,n[u+i*a]=u<=r?0:n[u+i*a]-n[u+i*r]*d;while(--c)}}while(--o);r=2;do{a=r-1;do{const d=n[r+i*a]/n[r+i*r];c=i;do u=i-c,n[u+i*a]=n[u+i*a]-n[u+i*r]*d;while(--c)}while(a--)}while(--r);r=2;do{const d=1/n[r+i*r];c=i;do u=i-c,n[u+i*r]=n[u+i*r]*d;while(--c)}while(r--);r=2;do{a=2;do{if(u=n[t+a+i*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,a,u)}while(a--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,n=e.z,r=e.w,a=t+t,o=i+i,l=n+n,c=t*a,h=t*o,u=t*l,d=i*o,p=i*l,g=n*l,v=r*a,m=r*o,f=r*l,_=this.elements;return _[0]=1-(d+g),_[1]=h-f,_[2]=u+m,_[3]=h+f,_[4]=1-(c+g),_[5]=p-v,_[6]=u-m,_[7]=p+v,_[8]=1-(c+d),this}transpose(e){e===void 0&&(e=new fi);const t=this.elements,i=e.elements;let n;return i[0]=t[0],i[4]=t[4],i[8]=t[8],n=t[1],i[1]=t[3],i[3]=n,n=t[2],i[2]=t[6],i[6]=n,n=t[5],i[5]=t[7],i[7]=n,e}}const F0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class x{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new x);const i=e.x,n=e.y,r=e.z,a=this.x,o=this.y,l=this.z;return t.x=o*r-l*n,t.y=l*i-a*r,t.z=a*n-o*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new x(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new x(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new fi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,n=Math.sqrt(e*e+t*t+i*i);if(n>0){const r=1/n;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new x);const t=this.x,i=this.y,n=this.z;let r=Math.sqrt(t*t+i*i+n*n);return r>0?(r=1/r,e.x=t*r,e.y=i*r,e.z=n*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z;return Math.sqrt((r-t)*(r-t)+(a-i)*(a-i)+(o-n)*(o-n))}distanceSquared(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z;return(r-t)*(r-t)+(a-i)*(a-i)+(o-n)*(o-n)}scale(e,t){t===void 0&&(t=new x);const i=this.x,n=this.y,r=this.z;return t.x=e*i,t.y=e*n,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new x),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new x),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new x),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const n=B0,r=1/i;n.set(this.x*r,this.y*r,this.z*r);const a=z0;Math.abs(n.x)<.9?(a.set(1,0,0),n.cross(a,e)):(a.set(0,1,0),n.cross(a,e)),n.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const n=this.x,r=this.y,a=this.z;i.x=n+(e.x-n)*t,i.y=r+(e.y-r)*t,i.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(xh),xh.almostEquals(e,t)}clone(){return new x(this.x,this.y,this.z)}}x.ZERO=new x(0,0,0),x.UNIT_X=new x(1,0,0),x.UNIT_Y=new x(0,1,0),x.UNIT_Z=new x(0,0,1);const B0=new x,z0=new x,xh=new x;class Kt{constructor(e){e===void 0&&(e={}),this.lowerBound=new x,this.upperBound=new x,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,n){const r=this.lowerBound,a=this.upperBound,o=i;r.copy(e[0]),o&&o.vmult(r,r),a.copy(r);for(let l=1;l<e.length;l++){let c=e[l];o&&(o.vmult(c,yh),c=yh),c.x>a.x&&(a.x=c.x),c.x<r.x&&(r.x=c.x),c.y>a.y&&(a.y=c.y),c.y<r.y&&(r.y=c.y),c.z>a.z&&(a.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(a,a)),n&&(r.x-=n,r.y-=n,r.z-=n,a.x+=n,a.y+=n,a.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Kt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,r=e.upperBound,a=n.x<=i.x&&i.x<=r.x||t.x<=r.x&&r.x<=i.x,o=n.y<=i.y&&i.y<=r.y||t.y<=r.y&&r.y<=i.y,l=n.z<=i.z&&i.z<=r.z||t.z<=r.z&&r.z<=i.z;return a&&o&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,r=e.upperBound;return t.x<=n.x&&i.x>=r.x&&t.y<=n.y&&i.y>=r.y&&t.z<=n.z&&i.z>=r.z}getCorners(e,t,i,n,r,a,o,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),n.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),a.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const i=Mh,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7];this.getCorners(n,r,a,o,l,c,h,u);for(let d=0;d!==8;d++){const p=i[d];e.pointToLocal(p,p)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=Mh,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7];this.getCorners(n,r,a,o,l,c,h,u);for(let d=0;d!==8;d++){const p=i[d];e.pointToWorld(p,p)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,n=1/t.x,r=1/t.y,a=1/t.z,o=(this.lowerBound.x-i.x)*n,l=(this.upperBound.x-i.x)*n,c=(this.lowerBound.y-i.y)*r,h=(this.upperBound.y-i.y)*r,u=(this.lowerBound.z-i.z)*a,d=(this.upperBound.z-i.z)*a,p=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(u,d));return!(g<0||p>g)}}const yh=new x,Mh=[new x,new x,new x,new x,new x,new x,new x,new x];class bh{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:n}=t;if(n>i){const r=n;n=i,i=r}return this.matrix[(i*(i+1)>>1)+n-1]}set(e,t,i){let{index:n}=e,{index:r}=t;if(r>n){const a=r;r=n,n=a}this.matrix[(n*(n+1)>>1)+r-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Sh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const n=i[e].indexOf(t);return n!==-1&&i[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,n=t.length;i<n;i++)t[i].call(this,e)}return this}}class ot{constructor(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new x),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=k0,n=V0;e.tangents(i,n),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new ot);const i=this.x,n=this.y,r=this.z,a=this.w,o=e.x,l=e.y,c=e.z,h=e.w;return t.x=i*h+a*o+n*c-r*l,t.y=n*h+a*l+r*o-i*c,t.z=r*h+a*c+i*l-n*o,t.w=a*h-i*o-n*l-r*c,t}inverse(e){e===void 0&&(e=new ot);const t=this.x,i=this.y,n=this.z,r=this.w;this.conjugate(e);const a=1/(t*t+i*i+n*n+r*r);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new ot),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new x);const i=e.x,n=e.y,r=e.z,a=this.x,o=this.y,l=this.z,c=this.w,h=c*i+o*r-l*n,u=c*n+l*i-a*r,d=c*r+a*n-o*i,p=-a*i-o*n-l*r;return t.x=h*c+p*-a+u*-l-d*-o,t.y=u*c+p*-o+d*-a-h*-l,t.z=d*c+p*-l+h*-o-u*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,n,r;const a=this.x,o=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=a*o+l*c;if(h>.499&&(i=2*Math.atan2(a,c),n=Math.PI/2,r=0),h<-.499&&(i=-2*Math.atan2(a,c),n=-Math.PI/2,r=0),i===void 0){const u=a*a,d=o*o,p=l*l;i=Math.atan2(2*o*c-2*a*l,1-2*d-2*p),n=Math.asin(2*h),r=Math.atan2(2*a*c-2*o*l,1-2*u-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=n,e.x=r}setFromEuler(e,t,i,n){n===void 0&&(n="XYZ");const r=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(i/2);return n==="XYZ"?(this.x=l*a*o+r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o-l*c*h):n==="YXZ"?(this.x=l*a*o+r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o+l*c*h):n==="ZXY"?(this.x=l*a*o-r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o-l*c*h):n==="ZYX"?(this.x=l*a*o-r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o+l*c*h):n==="YZX"?(this.x=l*a*o+r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o-l*c*h):n==="XZY"&&(this.x=l*a*o-r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o+l*c*h),this}clone(){return new ot(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new ot);const n=this.x,r=this.y,a=this.z,o=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,p,g,v,m;return p=n*l+r*c+a*h+o*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),v=Math.sin((1-t)*d)/g,m=Math.sin(t*d)/g):(v=1-t,m=t),i.x=v*n+m*l,i.y=v*r+m*c,i.z=v*a+m*h,i.w=v*o+m*u,i}integrate(e,t,i,n){n===void 0&&(n=new ot);const r=e.x*i.x,a=e.y*i.y,o=e.z*i.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return n.x+=d*(r*u+a*h-o*c),n.y+=d*(a*u+o*l-r*h),n.z+=d*(o*u+r*c-a*l),n.w+=d*(-r*l-a*c-o*h),n}}const k0=new x,V0=new x,H0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class he{constructor(e){e===void 0&&(e={}),this.id=he.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}he.idCounter=0,he.types=H0;class Ye{constructor(e){e===void 0&&(e={}),this.position=new x,this.quaternion=new ot,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ye.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ye.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new x),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,n){return n===void 0&&(n=new x),i.vsub(e,n),t.conjugate(wh),wh.vmult(n,n),n}static pointToWorldFrame(e,t,i,n){return n===void 0&&(n=new x),t.vmult(i,n),n.vadd(e,n),n}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new x),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,n){return n===void 0&&(n=new x),t.w*=-1,t.vmult(i,n),t.w*=-1,n}}const wh=new ot;class bs extends he{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:n=[],axes:r,boundingSphereRadius:a}=e;super({type:he.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const n=new x;for(let r=0;r!==e.length;r++){const a=e[r],o=a.length;for(let l=0;l!==o;l++){const c=(l+1)%o;t[a[l]].vsub(t[a[c]],n),n.normalize();let h=!1;for(let u=0;u!==i.length;u++)if(i[u].almostEquals(n)||i[u].almostEquals(n)){h=!0;break}h||i.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);const t=this.faceNormals[e]||new x;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],n=this.vertices[i[0]],r=this.vertices[i[1]],a=this.vertices[i[2]];bs.computeNormal(n,r,a,t)}static computeNormal(e,t,i,n){const r=new x,a=new x;t.vsub(e,a),i.vsub(t,r),r.cross(a,n),n.isZero()||n.normalize()}clipAgainstHull(e,t,i,n,r,a,o,l,c){const h=new x;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){h.copy(i.faceNormals[g]),r.vmult(h,h);const v=h.dot(a);v>d&&(d=v,u=g)}const p=[];for(let g=0;g<i.faces[u].length;g++){const v=i.vertices[i.faces[u][g]],m=new x;m.copy(v),r.vmult(m,m),n.vadd(m,m),p.push(m)}u>=0&&this.clipFaceAgainstHull(a,e,t,p,o,l,c)}findSeparatingAxis(e,t,i,n,r,a,o,l){const c=new x,h=new x,u=new x,d=new x,p=new x,g=new x;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){i.vmult(m.uniqueAxes[f],c);const _=m.testSepAxis(c,e,t,i,n,r);if(_===!1)return!1;_<v&&(v=_,a.copy(c))}else{const f=o?o.length:m.faces.length;for(let _=0;_<f;_++){const M=o?o[_]:_;c.copy(m.faceNormals[M]),i.vmult(c,c);const S=m.testSepAxis(c,e,t,i,n,r);if(S===!1)return!1;S<v&&(v=S,a.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){r.vmult(e.uniqueAxes[f],h);const _=m.testSepAxis(h,e,t,i,n,r);if(_===!1)return!1;_<v&&(v=_,a.copy(h))}else{const f=l?l.length:e.faces.length;for(let _=0;_<f;_++){const M=l?l[_]:_;h.copy(e.faceNormals[M]),r.vmult(h,h);const S=m.testSepAxis(h,e,t,i,n,r);if(S===!1)return!1;S<v&&(v=S,a.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){i.vmult(m.uniqueEdges[f],d);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],p),d.cross(p,g),!g.almostZero()){g.normalize();const M=m.testSepAxis(g,e,t,i,n,r);if(M===!1)return!1;M<v&&(v=M,a.copy(g))}}return n.vsub(t,u),u.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,i,n,r,a){const o=this;bs.project(o,e,i,n,fo),bs.project(t,e,r,a,go);const l=fo[0],c=fo[1],h=go[0],u=go[1];if(l<u||h<c)return!1;const d=l-u,p=h-c;return d<p?d:p}calculateLocalInertia(e,t){const i=new x,n=new x;this.computeLocalAABB(n,i);const r=i.x-n.x,a=i.y-n.y,o=i.z-n.z;t.x=.08333333333333333*e*(2*a*2*a+2*o*2*o),t.y=.08333333333333333*e*(2*r*2*r+2*o*2*o),t.z=.08333333333333333*e*(2*a*2*a+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],n=this.vertices[t[0]];return-i.dot(n)}clipFaceAgainstHull(e,t,i,n,r,a,o){const l=new x,c=new x,h=new x,u=new x,d=new x,p=new x,g=new x,v=new x,m=this,f=[],_=n,M=f;let S=-1,C=Number.MAX_VALUE;for(let y=0;y<m.faces.length;y++){l.copy(m.faceNormals[y]),i.vmult(l,l);const D=l.dot(e);D<C&&(C=D,S=y)}if(S<0)return;const T=m.faces[S];T.connectedFaces=[];for(let y=0;y<m.faces.length;y++)for(let D=0;D<m.faces[y].length;D++)T.indexOf(m.faces[y][D])!==-1&&y!==S&&T.connectedFaces.indexOf(y)===-1&&T.connectedFaces.push(y);const R=T.length;for(let y=0;y<R;y++){const D=m.vertices[T[y]],N=m.vertices[T[(y+1)%R]];D.vsub(N,c),h.copy(c),i.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[S]),i.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),p.copy(D),i.vmult(p,p),t.vadd(p,p);const E=T.connectedFaces[y];g.copy(this.faceNormals[E]);const O=this.getPlaneConstantOfFace(E);v.copy(g),i.vmult(v,v);const F=O-v.dot(t);for(this.clipFaceAgainstPlane(_,M,v,F);_.length;)_.shift();for(;M.length;)_.push(M.shift())}g.copy(this.faceNormals[S]);const P=this.getPlaneConstantOfFace(S);v.copy(g),i.vmult(v,v);const b=P-v.dot(t);for(let y=0;y<_.length;y++){let D=v.dot(_[y])+b;if(D<=r&&(console.log(`clamped: depth=${D} to minDist=${r}`),D=r),D<=a){const N=_[y];if(D<=1e-6){const E={point:N,normal:v,depth:D};o.push(E)}}}}clipFaceAgainstPlane(e,t,i,n){let r,a;const o=e.length;if(o<2)return t;let l=e[e.length-1],c=e[0];r=i.dot(l)+n;for(let h=0;h<o;h++){if(c=e[h],a=i.dot(c)+n,r<0)if(a<0){const u=new x;u.copy(c),t.push(u)}else{const u=new x;l.lerp(c,r/(r-a),u),t.push(u)}else if(a<0){const u=new x;l.lerp(c,r/(r-a),u),t.push(u),t.push(c)}l=c,r=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new x);const i=this.vertices,n=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(i[r],n[r]),e.vadd(n[r],n[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){const r=i[n];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new x);const i=this.faceNormals,n=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(i[r],n[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const n=t[i].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,n){const r=this.vertices;let a,o,l,c,h,u,d=new x;for(let p=0;p<r.length;p++){d.copy(r[p]),t.vmult(d,d),e.vadd(d,d);const g=d;(a===void 0||g.x<a)&&(a=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}i.set(a,o,l),n.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new x);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,n=this.vertices;if(t){for(let r=0;r<i;r++){const a=n[r];t.vmult(a,a)}for(let r=0;r<this.faceNormals.length;r++){const a=this.faceNormals[r];t.vmult(a,a)}}if(e)for(let r=0;r<i;r++){const a=n[r];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,i=this.faces,n=this.faceNormals,r=null,a=new x;this.getAveragePointLocal(a);for(let o=0;o<this.faces.length;o++){let l=n[o];const c=t[i[o][0]],h=new x;e.vsub(c,h);const u=l.dot(h),d=new x;a.vsub(c,d);const p=l.dot(d);if(u<0&&p>0||u>0&&p<0)return!1}return r?1:-1}static project(e,t,i,n,r){const a=e.vertices.length,o=G0;let l=0,c=0;const h=W0,u=e.vertices;h.setZero(),Ye.vectorToLocalFrame(i,n,t,o),Ye.pointToLocalFrame(i,n,h,h);const d=h.dot(o);c=l=u[0].dot(o);for(let p=1;p<a;p++){const g=u[p].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const fo=[],go=[];new x;const G0=new x,W0=new x;class mt extends he{constructor(e){super({type:he.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,n=x,r=[new n(-e,-t,-i),new n(e,-t,-i),new n(e,t,-i),new n(-e,t,-i),new n(-e,-t,i),new n(e,-t,i),new n(e,t,i),new n(-e,t,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new bs({vertices:r,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new x),mt.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const n=e;i.x=.08333333333333333*t*(2*n.y*2*n.y+2*n.z*2*n.z),i.y=.08333333333333333*t*(2*n.x*2*n.x+2*n.z*2*n.z),i.z=.08333333333333333*t*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,t){const i=e,n=this.halfExtents;if(i[0].set(n.x,0,0),i[1].set(0,n.y,0),i[2].set(0,0,n.z),i[3].set(-n.x,0,0),i[4].set(0,-n.y,0),i[5].set(0,0,-n.z),t!==void 0)for(let r=0;r!==i.length;r++)t.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const n=this.halfExtents,r=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let a=0;a<r.length;a++)un.set(r[a][0],r[a][1],r[a][2]),t.vmult(un,un),e.vadd(un,un),i(un.x,un.y,un.z)}calculateWorldAABB(e,t,i,n){const r=this.halfExtents;Ri[0].set(r.x,r.y,r.z),Ri[1].set(-r.x,r.y,r.z),Ri[2].set(-r.x,-r.y,r.z),Ri[3].set(-r.x,-r.y,-r.z),Ri[4].set(r.x,-r.y,-r.z),Ri[5].set(r.x,r.y,-r.z),Ri[6].set(-r.x,r.y,-r.z),Ri[7].set(r.x,-r.y,r.z);const a=Ri[0];t.vmult(a,a),e.vadd(a,a),n.copy(a),i.copy(a);for(let o=1;o<8;o++){const l=Ri[o];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>n.x&&(n.x=c),h>n.y&&(n.y=h),u>n.z&&(n.z=u),c<i.x&&(i.x=c),h<i.y&&(i.y=h),u<i.z&&(i.z=u)}}}const un=new x,Ri=[new x,new x,new x,new x,new x,new x,new x,new x],vo={DYNAMIC:1,STATIC:2,KINEMATIC:4},_o={AWAKE:0,SLEEPY:1,SLEEPING:2};class ne extends Sh{constructor(e){e===void 0&&(e={}),super(),this.id=ne.idCounter++,this.index=-1,this.world=null,this.vlambda=new x,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new x,this.previousPosition=new x,this.interpolatedPosition=new x,this.initPosition=new x,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new x,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new x,this.force=new x;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ne.STATIC:ne.DYNAMIC,typeof e.type==typeof ne.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ne.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new x,this.quaternion=new ot,this.initQuaternion=new ot,this.previousQuaternion=new ot,this.interpolatedQuaternion=new ot,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new x,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new x,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new x,this.invInertia=new x,this.invInertiaWorld=new fi,this.invMassSolve=0,this.invInertiaSolve=new x,this.invInertiaWorldSolve=new fi,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new x(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new x(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Kt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new x,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ne.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ne.SLEEPING&&this.dispatchEvent(ne.wakeupEvent)}sleep(){this.sleepState=ne.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;t===ne.AWAKE&&i<n?(this.sleepState=ne.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ne.sleepyEvent)):t===ne.SLEEPY&&i>n?this.wakeUp():t===ne.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ne.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ne.SLEEPING||this.type===ne.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new x),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new x),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new x),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new x),this.quaternion.vmult(e,t),t}addShape(e,t,i){const n=new x,r=new ot;return t&&n.copy(t),i&&r.copy(i),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let n=0;for(let r=0;r!==i;r++){const a=e[r];a.updateBoundingSphereRadius();const o=t[r].length(),l=a.boundingSphereRadius;o+l>n&&(n=o+l)}this.boundingRadius=n}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,n=e.length,r=j0,a=X0,o=this.quaternion,l=this.aabb,c=q0;for(let h=0;h!==n;h++){const u=e[h];o.vmult(t[h],r),r.vadd(this.position,r),o.mult(i[h],a),u.calculateWorldAABB(r,a,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Y0,n=K0;i.setRotationFromQuaternion(this.quaternion),i.transpose(n),i.scale(t,i),i.mmult(n,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new x),this.type!==ne.DYNAMIC)return;this.sleepState===ne.SLEEPING&&this.wakeUp();const i=Z0;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new x),this.type!==ne.DYNAMIC)return;const i=J0,n=$0;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyForce(i,n)}applyTorque(e){this.type===ne.DYNAMIC&&(this.sleepState===ne.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new x),this.type!==ne.DYNAMIC)return;this.sleepState===ne.SLEEPING&&this.wakeUp();const i=t,n=Q0;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);const r=e_;i.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new x),this.type!==ne.DYNAMIC)return;const i=t_,n=i_;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyImpulse(i,n)}updateMassProperties(){const e=n_;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),mt.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new x;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ne.DYNAMIC||this.type===ne.KINEMATIC)||this.sleepState===ne.SLEEPING)return;const n=this.velocity,r=this.angularVelocity,a=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,p=h*e;n.x+=o.x*p*d.x,n.y+=o.y*p*d.y,n.z+=o.z*p*d.z;const g=u.elements,v=this.angularFactor,m=l.x*v.x,f=l.y*v.y,_=l.z*v.z;r.x+=e*(g[0]*m+g[1]*f+g[2]*_),r.y+=e*(g[3]*m+g[4]*f+g[5]*_),r.z+=e*(g[6]*m+g[7]*f+g[8]*_),a.x+=n.x*e,a.y+=n.y*e,a.z+=n.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ne.idCounter=0,ne.COLLIDE_EVENT_NAME="collide",ne.DYNAMIC=vo.DYNAMIC,ne.STATIC=vo.STATIC,ne.KINEMATIC=vo.KINEMATIC,ne.AWAKE=_o.AWAKE,ne.SLEEPY=_o.SLEEPY,ne.SLEEPING=_o.SLEEPING,ne.wakeupEvent={type:"wakeup"},ne.sleepyEvent={type:"sleepy"},ne.sleepEvent={type:"sleep"};const j0=new x,X0=new ot,q0=new Kt,Y0=new fi,K0=new fi,tb=new fi,Z0=new x,J0=new x,$0=new x,Q0=new x,e_=new x,t_=new x,i_=new x,n_=new x;class Th{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ne.STATIC||e.sleepState===ne.SLEEPING)&&(t.type&ne.STATIC||t.sleepState===ne.SLEEPING))}intersectionTest(e,t,i,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,n):this.doBoundingSphereBroadphase(e,t,i,n)}doBoundingSphereBroadphase(e,t,i,n){const r=s_;t.position.vsub(e.position,r);const a=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<a&&(i.push(e),n.push(t))}doBoundingBoxBroadphase(e,t,i,n){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),n.push(t))}makePairsUnique(e,t){const i=r_,n=a_,r=o_,a=e.length;for(let o=0;o!==a;o++)n[o]=e[o],r[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==a;o++){const l=n[o].id,c=r[o].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=o,i.keys.push(h)}for(let o=0;o!==i.keys.length;o++){const l=i.keys.pop(),c=i[l];e.push(n[c]),t.push(r[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new x;e.position.vsub(t.position,i);const n=e.shapes[0],r=t.shapes[0];return Math.pow(n.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const s_=new x;new x,new ot,new x;const r_={keys:[]},a_=[],o_=[];new x,new x,new x;class l_ extends Th{constructor(){super()}collisionPairs(e,t,i){const n=e.bodies,r=n.length;let a,o;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)a=n[l],o=n[c],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let n=0;n<e.bodies.length;n++){const r=e.bodies[n];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&i.push(r)}return i}}class qs{constructor(){this.rayFromWorld=new x,this.rayToWorld=new x,this.hitNormalWorld=new x,this.hitPointWorld=new x,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,n,r,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(n),this.shape=r,this.body=a,this.distance=o}}let Eh,Ah,Rh,Ph,Ch,Lh,Ih;const xo={CLOSEST:1,ANY:2,ALL:4};Eh=he.types.SPHERE,Ah=he.types.PLANE,Rh=he.types.BOX,Ph=he.types.CYLINDER,Ch=he.types.CONVEXPOLYHEDRON,Lh=he.types.HEIGHTFIELD,Ih=he.types.TRIMESH;class gt{get[Eh](){return this._intersectSphere}get[Ah](){return this._intersectPlane}get[Rh](){return this._intersectBox}get[Ph](){return this._intersectConvex}get[Ch](){return this._intersectConvex}get[Lh](){return this._intersectHeightfield}get[Ih](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new x),t===void 0&&(t=new x),this.from=e.clone(),this.to=t.clone(),this.direction=new x,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=gt.ANY,this.result=new qs,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||gt.ANY,this.result=t.result||new qs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Nh),yo.length=0,e.broadphase.aabbQuery(e,Nh,yo),this.intersectBodies(yo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const n=c_,r=h_;for(let a=0,o=e.shapes.length;a<o;a++){const l=e.shapes[a];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],r),e.quaternion.vmult(e.shapeOffsets[a],n),n.vadd(e.position,n),this.intersectShape(l,r,n,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,n=e.length;!this.result.shouldStop&&i<n;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,n){const r=this.from;if(w_(r,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,n,e)}_intersectBox(e,t,i,n,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,n,r)}_intersectPlane(e,t,i,n,r){const a=this.from,o=this.to,l=this.direction,c=new x(0,0,1);t.vmult(c,c);const h=new x;a.vsub(i,h);const u=h.dot(c);o.vsub(i,h);const d=h.dot(c);if(u*d>0||a.distanceTo(o)<u)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new x,v=new x,m=new x;a.vsub(i,g);const f=-c.dot(g)/p;l.scale(f,v),a.vadd(v,m),this.reportIntersection(c,m,r,n,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,n=this.to,r=this.from;t.x=Math.min(n.x,r.x),t.y=Math.min(n.y,r.y),t.z=Math.min(n.z,r.z),i.x=Math.max(n.x,r.x),i.y=Math.max(n.y,r.y),i.z=Math.max(n.z,r.z)}_intersectHeightfield(e,t,i,n,r){e.data,e.elementSize;const a=u_;a.from.copy(this.from),a.to.copy(this.to),Ye.pointToLocalFrame(i,t,a.from,a.from),Ye.pointToLocalFrame(i,t,a.to,a.to),a.updateDirection();const o=d_;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new Kt;a.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,o,!0),h=Math.min(h,o[0]+1),u=Math.min(u,o[1]+1);for(let p=l;p<h;p++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,d),!!d.overlapsRay(a)){if(e.getConvexTrianglePillar(p,g,!1),Ye.pointToWorldFrame(i,t,e.pillarOffset,Kr),this._intersectConvex(e.pillarConvex,t,Kr,n,r,Uh),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),Ye.pointToWorldFrame(i,t,e.pillarOffset,Kr),this._intersectConvex(e.pillarConvex,t,Kr,n,r,Uh)}}}_intersectSphere(e,t,i,n,r){const a=this.from,o=this.to,l=e.radius,c=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,h=2*((o.x-a.x)*(a.x-i.x)+(o.y-a.y)*(a.y-i.y)+(o.z-a.z)*(a.z-i.z)),u=(a.x-i.x)**2+(a.y-i.y)**2+(a.z-i.z)**2-l**2,d=h**2-4*c*u,p=p_,g=m_;if(!(d<0))if(d===0)a.lerp(o,d,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1);else{const v=(-h-Math.sqrt(d))/(2*c),m=(-h+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(a.lerp(o,v,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(o,m,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1))}}_intersectConvex(e,t,i,n,r,a){const o=f_,l=Dh,c=a&&a.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=c?c.length:h.length,_=this.result;for(let M=0;!_.shouldStop&&M<f;M++){const S=c?c[M]:M,C=h[S],T=d[S],R=t,P=i;l.copy(u[C[0]]),R.vmult(l,l),l.vadd(P,l),l.vsub(g,l),R.vmult(T,o);const b=p.dot(o);if(Math.abs(b)<this.precision)continue;const y=o.dot(l)/b;if(!(y<0)){p.scale(y,Gt),Gt.vadd(g,Gt),gi.copy(u[C[0]]),R.vmult(gi,gi),P.vadd(gi,gi);for(let D=1;!_.shouldStop&&D<C.length-1;D++){Pi.copy(u[C[D]]),Ci.copy(u[C[D+1]]),R.vmult(Pi,Pi),R.vmult(Ci,Ci),P.vadd(Pi,Pi),P.vadd(Ci,Ci);const N=Gt.distanceTo(g);!(gt.pointInTriangle(Gt,gi,Pi,Ci)||gt.pointInTriangle(Gt,Pi,gi,Ci))||N>m||this.reportIntersection(o,Gt,r,n,S)}}}}_intersectTrimesh(e,t,i,n,r,a){const o=g_,l=b_,c=S_,h=Dh,u=v_,d=__,p=x_,g=M_,v=y_,m=e.indices;e.vertices;const f=this.from,_=this.to,M=this.direction;c.position.copy(i),c.quaternion.copy(t),Ye.vectorToLocalFrame(i,t,M,u),Ye.pointToLocalFrame(i,t,f,d),Ye.pointToLocalFrame(i,t,_,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,p.vsub(d,u),u.normalize();const S=d.distanceSquared(p);e.tree.rayQuery(this,c,l);for(let C=0,T=l.length;!this.result.shouldStop&&C!==T;C++){const R=l[C];e.getNormal(R,o),e.getVertex(m[R*3],gi),gi.vsub(d,h);const P=u.dot(o),b=o.dot(h)/P;if(b<0)continue;u.scale(b,Gt),Gt.vadd(d,Gt),e.getVertex(m[R*3+1],Pi),e.getVertex(m[R*3+2],Ci);const y=Gt.distanceSquared(d);!(gt.pointInTriangle(Gt,Pi,gi,Ci)||gt.pointInTriangle(Gt,gi,Pi,Ci))||y>S||(Ye.vectorToWorldFrame(t,o,v),Ye.pointToWorldFrame(i,t,Gt,g),this.reportIntersection(v,g,r,n,R))}l.length=0}reportIntersection(e,t,i,n,r){const a=this.from,o=this.to,l=a.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case gt.ALL:this.hasHit=!0,c.set(a,o,e,t,i,n,l),c.hasHit=!0,this.callback(c);break;case gt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,i,n,l));break;case gt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,i,n,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,n){n.vsub(t,Ln),i.vsub(t,Ys),e.vsub(t,Mo);const r=Ln.dot(Ln),a=Ln.dot(Ys),o=Ln.dot(Mo),l=Ys.dot(Ys),c=Ys.dot(Mo);let h,u;return(h=l*o-a*c)>=0&&(u=r*c-a*o)>=0&&h+u<r*l-a*a}}gt.CLOSEST=xo.CLOSEST,gt.ANY=xo.ANY,gt.ALL=xo.ALL;const Nh=new Kt,yo=[],Ys=new x,Mo=new x,c_=new x,h_=new ot,Gt=new x,gi=new x,Pi=new x,Ci=new x;new x,new qs;const Uh={faceList:[0]},Kr=new x,u_=new gt,d_=[],p_=new x,m_=new x,f_=new x;new x,new x;const Dh=new x,g_=new x,v_=new x,__=new x,x_=new x,y_=new x,M_=new x;new Kt;const b_=[],S_=new Ye,Ln=new x,Zr=new x;function w_(s,e,t){t.vsub(s,Ln);const i=Ln.dot(e);return e.scale(i,Zr),Zr.vadd(s,Zr),t.distanceTo(Zr)}class Ss extends Th{static checkBounds(e,t,i){let n,r;i===0?(n=e.position.x,r=t.position.x):i===1?(n=e.position.y,r=t.position.y):i===2&&(n=e.position.z,r=t.position.z);const a=e.boundingRadius,o=t.boundingRadius,l=n+a;return r-o<l}static insertionSortX(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=n.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=n}return e}static insertionSortY(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=n.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=n}return e}static insertionSortZ(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=n.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=n}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=i=>{t.push(i.body)},this._removeBodyHandler=i=>{const n=t.indexOf(i.body);n!==-1&&t.splice(n,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,i){const n=this.axisList,r=n.length,a=this.axisIndex;let o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==r;o++){const c=n[o];for(l=o+1;l<r;l++){const h=n[l];if(this.needBroadphaseCollision(c,h)){if(!Ss.checkBounds(c,h,a))break;this.intersectionTest(c,h,t,i)}}}}sortList(){const e=this.axisList,t=this.axisIndex,i=e.length;for(let n=0;n!==i;n++){const r=e[n];r.aabbNeedsUpdate&&r.updateAABB()}t===0?Ss.insertionSortX(e):t===1?Ss.insertionSortY(e):t===2&&Ss.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,i=0,n=0,r=0,a=0;const o=this.axisList,l=o.length,c=1/l;for(let p=0;p!==l;p++){const g=o[p],v=g.position.x;e+=v,t+=v*v;const m=g.position.y;i+=m,n+=m*m;const f=g.position.z;r+=f,a+=f*f}const h=t-e*e*c,u=n-i*i*c,d=a-r*r*c;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);const n=this.axisIndex;let r="x";n===1&&(r="y"),n===2&&(r="z");const a=this.axisList;t.lowerBound[r],t.upperBound[r];for(let o=0;o<a.length;o++){const l=a[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&i.push(l)}return i}}class Oh{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class Fh{constructor(){this.spatial=new x,this.rotational=new x}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ks{constructor(e,t,i,n){i===void 0&&(i=-1e6),n===void 0&&(n=1e6),this.id=Ks.idCounter++,this.minForce=i,this.maxForce=n,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Fh,this.jacobianElementB=new Fh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,.016666666666666666)}setSpookParams(e,t,i){const n=t,r=e,a=i;this.a=4/(a*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(a*a*r*(1+4*n))}computeB(e,t,i){const n=this.computeGW(),r=this.computeGq(),a=this.computeGiMf();return-r*e-n*t-a*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.position,a=n.position;return e.spatial.dot(r)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.velocity,a=n.velocity,o=i.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(r,o)+t.multiplyVectors(a,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.vlambda,a=n.vlambda,o=i.wlambda,l=n.wlambda;return e.multiplyVectors(r,o)+t.multiplyVectors(a,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.force,a=i.torque,o=n.force,l=n.torque,c=i.invMassSolve,h=n.invMassSolve;return r.scale(c,Bh),o.scale(h,zh),i.invInertiaWorldSolve.vmult(a,kh),n.invInertiaWorldSolve.vmult(l,Vh),e.multiplyVectors(Bh,kh)+t.multiplyVectors(zh,Vh)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.invMassSolve,a=n.invMassSolve,o=i.invInertiaWorldSolve,l=n.invInertiaWorldSolve;let c=r+a;return o.vmult(e.rotational,Jr),c+=Jr.dot(e.rotational),l.vmult(t.rotational,Jr),c+=Jr.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,n=this.bi,r=this.bj,a=T_;n.vlambda.addScaledVector(n.invMassSolve*e,t.spatial,n.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,i.spatial,r.vlambda),n.invInertiaWorldSolve.vmult(t.rotational,a),n.wlambda.addScaledVector(e,a,n.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,a),r.wlambda.addScaledVector(e,a,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ks.idCounter=0;const Bh=new x,zh=new x,kh=new x,Vh=new x,Jr=new x,T_=new x;class E_ extends Ks{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new x,this.rj=new x,this.ni=new x}computeB(e){const t=this.a,i=this.b,n=this.bi,r=this.bj,a=this.ri,o=this.rj,l=A_,c=R_,h=n.velocity,u=n.angularVelocity;n.force,n.torque;const d=r.velocity,p=r.angularVelocity;r.force,r.torque;const g=P_,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,c),f.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(r.position),g.vadd(o,g),g.vsub(n.position,g),g.vsub(a,g);const _=f.dot(g),M=this.restitution+1,S=M*d.dot(f)-M*h.dot(f)+p.dot(c)-u.dot(l),C=this.computeGiMf();return-_*t-S*i-e*C}getImpactVelocityAlongNormal(){const e=C_,t=L_,i=I_,n=N_,r=U_;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(n,t),e.vsub(t,r),this.ni.dot(r)}}const A_=new x,R_=new x,P_=new x,C_=new x,L_=new x,I_=new x,N_=new x,U_=new x;new x,new x,new x,new x,new x,new x,new x,new x,new x,new x;class Hh extends Ks{constructor(e,t,i){super(e,t,-i,i),this.ri=new x,this.rj=new x,this.t=new x}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,n=this.rj,r=D_,a=O_,o=this.t;i.cross(o,r),n.cross(o,a);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(a);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const D_=new x,O_=new x;class ei{constructor(e,t,i){i=Oh.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ei.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}ei.idCounter=0;class vi{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=vi.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}vi.idCounter=0,new x,new x,new x,new x,new x,new x,new x,new x,new x,new x,new x;class F_{constructor(e){e===void 0&&(e={}),e=Oh.defaults(e,{chassisConnectionPointLocal:new x,chassisConnectionPointWorld:new x,directionLocal:new x,directionWorld:new x,axleLocal:new x,axleWorld:new x,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=e.maxSuspensionTravel,this.customSlidingRotationalSpeed=e.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=e.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=e.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=e.chassisConnectionPointWorld.clone(),this.directionLocal=e.directionLocal.clone(),this.directionWorld=e.directionWorld.clone(),this.axleLocal=e.axleLocal.clone(),this.axleWorld=e.axleWorld.clone(),this.suspensionRestLength=e.suspensionRestLength,this.suspensionMaxLength=e.suspensionMaxLength,this.radius=e.radius,this.suspensionStiffness=e.suspensionStiffness,this.dampingCompression=e.dampingCompression,this.dampingRelaxation=e.dampingRelaxation,this.frictionSlip=e.frictionSlip,this.forwardAcceleration=e.forwardAcceleration,this.sideAcceleration=e.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=e.rollInfluence,this.maxSuspensionForce=e.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=e.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new qs,this.worldTransform=new Ye,this.isInContact=!1}updateWheel(e){const t=this.raycastResult;if(this.isInContact){const i=t.hitNormalWorld.dot(t.directionWorld);t.hitPointWorld.vsub(e.position,Wh),e.getVelocityAtWorldPoint(Wh,Gh);const n=t.hitNormalWorld.dot(Gh);if(i>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=10;else{const r=-1/i;this.suspensionRelativeVelocity=n*r,this.clippedInvContactDotSuspension=r}}else t.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.hitNormalWorld),this.clippedInvContactDotSuspension=1}}const Gh=new x,Wh=new x;class B_{constructor(e){this.chassisBody=e.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof e.indexRightAxis<"u"?e.indexRightAxis:2,this.indexForwardAxis=typeof e.indexForwardAxis<"u"?e.indexForwardAxis:0,this.indexUpAxis=typeof e.indexUpAxis<"u"?e.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(e){e===void 0&&(e={});const t=new F_(e),i=this.wheelInfos.length;return this.wheelInfos.push(t),i}setSteeringValue(e,t){const i=this.wheelInfos[t];i.steering=e}applyEngineForce(e,t){this.wheelInfos[t].engineForce=e}setBrake(e,t){this.wheelInfos[t].brake=e}addToWorld(e){e.addBody(this.chassisBody);const t=this;this.preStepCallback=()=>{t.updateVehicle(e.dt)},e.addEventListener("preStep",this.preStepCallback),this.world=e}getVehicleAxisWorld(e,t){t.set(e===0?1:0,e===1?1:0,e===2?1:0),this.chassisBody.vectorToWorldFrame(t,t)}updateVehicle(e){const t=this.wheelInfos,i=t.length,n=this.chassisBody;for(let u=0;u<i;u++)this.updateWheelTransform(u);this.currentVehicleSpeedKmHour=3.6*n.velocity.length();const r=new x;this.getVehicleAxisWorld(this.indexForwardAxis,r),r.dot(n.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let u=0;u<i;u++)this.castRay(t[u]);this.updateSuspension(e);const a=new x,o=new x;for(let u=0;u<i;u++){const d=t[u];let p=d.suspensionForce;p>d.maxSuspensionForce&&(p=d.maxSuspensionForce),d.raycastResult.hitNormalWorld.scale(p*e,a),d.raycastResult.hitPointWorld.vsub(n.position,o),n.applyImpulse(a,o)}this.updateFriction(e);const l=new x,c=new x,h=new x;for(let u=0;u<i;u++){const d=t[u];n.getVelocityAtWorldPoint(d.chassisConnectionPointWorld,h);let p=1;switch(this.indexUpAxis){case 1:p=-1;break}if(d.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,c);const g=c.dot(d.raycastResult.hitNormalWorld);d.raycastResult.hitNormalWorld.scale(g,l),c.vsub(l,c);const v=c.dot(h);d.deltaRotation=p*v*e/d.radius}(d.sliding||!d.isInContact)&&d.engineForce!==0&&d.useCustomSlidingRotationalSpeed&&(d.deltaRotation=(d.engineForce>0?1:-1)*d.customSlidingRotationalSpeed*e),Math.abs(d.brake)>Math.abs(d.engineForce)&&(d.deltaRotation=0),d.rotation+=d.deltaRotation,d.deltaRotation*=.99}}updateSuspension(e){const t=this.chassisBody.mass,i=this.wheelInfos,n=i.length;for(let r=0;r<n;r++){const a=i[r];if(a.isInContact){let o;const l=a.suspensionRestLength,c=a.suspensionLength,h=l-c;o=a.suspensionStiffness*h*a.clippedInvContactDotSuspension;const u=a.suspensionRelativeVelocity;let d;u<0?d=a.dampingCompression:d=a.dampingRelaxation,o-=d*u,a.suspensionForce=o*t,a.suspensionForce<0&&(a.suspensionForce=0)}else a.suspensionForce=0}}removeFromWorld(e){this.constraints,e.removeBody(this.chassisBody),e.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(e){const t=H_,i=G_;this.updateWheelTransformWorld(e);const n=this.chassisBody;let r=-1;const a=e.suspensionRestLength+e.radius;e.directionWorld.scale(a,t);const o=e.chassisConnectionPointWorld;o.vadd(t,i);const l=e.raycastResult;l.reset();const c=n.collisionResponse;n.collisionResponse=!1,this.world.rayTest(o,i,l),n.collisionResponse=c;const h=l.body;if(e.raycastResult.groundObject=0,h){r=l.distance,e.raycastResult.hitNormalWorld=l.hitNormalWorld,e.isInContact=!0;const u=l.distance;e.suspensionLength=u-e.radius;const d=e.suspensionRestLength-e.maxSuspensionTravel,p=e.suspensionRestLength+e.maxSuspensionTravel;e.suspensionLength<d&&(e.suspensionLength=d),e.suspensionLength>p&&(e.suspensionLength=p,e.raycastResult.reset());const g=e.raycastResult.hitNormalWorld.dot(e.directionWorld),v=new x;n.getVelocityAtWorldPoint(e.raycastResult.hitPointWorld,v);const m=e.raycastResult.hitNormalWorld.dot(v);if(g>=-.1)e.suspensionRelativeVelocity=0,e.clippedInvContactDotSuspension=10;else{const f=-1/g;e.suspensionRelativeVelocity=m*f,e.clippedInvContactDotSuspension=f}}else e.suspensionLength=e.suspensionRestLength+0*e.maxSuspensionTravel,e.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.raycastResult.hitNormalWorld),e.clippedInvContactDotSuspension=1;return r}updateWheelTransformWorld(e){e.isInContact=!1;const t=this.chassisBody;t.pointToWorldFrame(e.chassisConnectionPointLocal,e.chassisConnectionPointWorld),t.vectorToWorldFrame(e.directionLocal,e.directionWorld),t.vectorToWorldFrame(e.axleLocal,e.axleWorld)}updateWheelTransform(e){const t=z_,i=k_,n=V_,r=this.wheelInfos[e];this.updateWheelTransformWorld(r),r.directionLocal.scale(-1,t),i.copy(r.axleLocal),t.cross(i,n),n.normalize(),i.normalize();const a=r.steering,o=new ot;o.setFromAxisAngle(t,a);const l=new ot;l.setFromAxisAngle(i,r.rotation);const c=r.worldTransform.quaternion;this.chassisBody.quaternion.mult(o,c),c.mult(l,c),c.normalize();const h=r.worldTransform.position;h.copy(r.directionWorld),h.scale(r.suspensionLength,h),h.vadd(r.chassisConnectionPointWorld,h)}getWheelTransformWorld(e){return this.wheelInfos[e].worldTransform}updateFriction(e){const t=j_,i=this.wheelInfos,n=i.length,r=this.chassisBody,a=q_,o=X_;this.numWheelsOnGround=0;for(let h=0;h<n;h++){const u=i[h];u.raycastResult.body&&this.numWheelsOnGround++,u.sideImpulse=0,u.forwardImpulse=0,a[h]||(a[h]=new x),o[h]||(o[h]=new x)}for(let h=0;h<n;h++){const u=i[h],d=u.raycastResult.body;if(d){const p=o[h];this.getWheelTransformWorld(h).vectorToWorldFrame(W_[this.indexRightAxis],p);const g=u.raycastResult.hitNormalWorld,v=p.dot(g);g.scale(v,t),p.vsub(t,p),p.normalize(),g.cross(p,a[h]),a[h].normalize(),u.sideImpulse=ax(r,u.raycastResult.hitPointWorld,d,u.raycastResult.hitPointWorld,p),u.sideImpulse*=Y_}}const l=1,c=.5;this.sliding=!1;for(let h=0;h<n;h++){const u=i[h],d=u.raycastResult.body;let p=0;if(u.slipInfo=1,d){const g=u.brake?u.brake:0;p=$_(r,d,u.raycastResult.hitPointWorld,a[h],g),p+=u.engineForce*e;const v=g/p;u.slipInfo*=v}if(u.forwardImpulse=0,u.skidInfo=1,d){u.skidInfo=1;const g=u.suspensionForce*e*u.frictionSlip,v=g*g;u.forwardImpulse=p;const m=u.forwardImpulse*c/u.forwardAcceleration,f=u.sideImpulse*l/u.sideAcceleration,_=m*m+f*f;if(u.sliding=!1,_>v){this.sliding=!0,u.sliding=!0;const M=g/Math.sqrt(_);u.skidInfo*=M}}}if(this.sliding)for(let h=0;h<n;h++){const u=i[h];u.sideImpulse!==0&&u.skidInfo<1&&(u.forwardImpulse*=u.skidInfo,u.sideImpulse*=u.skidInfo)}for(let h=0;h<n;h++){const u=i[h],d=new x;if(u.raycastResult.hitPointWorld.vsub(r.position,d),u.forwardImpulse!==0){const p=new x;a[h].scale(u.forwardImpulse,p),r.applyImpulse(p,d)}if(u.sideImpulse!==0){const p=u.raycastResult.body,g=new x;u.raycastResult.hitPointWorld.vsub(p.position,g);const v=new x;o[h].scale(u.sideImpulse,v),r.vectorToLocalFrame(d,d),d["xyz"[this.indexUpAxis]]*=u.rollInfluence,r.vectorToWorldFrame(d,d),r.applyImpulse(v,d),v.scale(-1,v),p.applyImpulse(v,g)}}}}new x,new x,new x;const z_=new x,k_=new x,V_=new x;new gt,new x;const H_=new x,G_=new x,W_=[new x(1,0,0),new x(0,1,0),new x(0,0,1)],j_=new x,X_=[],q_=[],Y_=1,K_=new x,Z_=new x,J_=new x;function $_(s,e,t,i,n){let r=0;const a=t,o=K_,l=Z_,c=J_;s.getVelocityAtWorldPoint(a,o),e.getVelocityAtWorldPoint(a,l),o.vsub(l,c);const h=i.dot(c),u=jh(s,t,i),d=jh(e,t,i),p=1/(u+d);return r=-h*p,n<r&&(r=n),r<-n&&(r=-n),r}const Q_=new x,ex=new x,tx=new x,ix=new x;function jh(s,e,t){const i=Q_,n=ex,r=tx,a=ix;return e.vsub(s.position,i),i.cross(t,n),s.invInertiaWorld.vmult(n,a),a.cross(i,r),s.invMass+t.dot(r)}const nx=new x,sx=new x,rx=new x;function ax(s,e,t,i,n){if(n.lengthSquared()>1.1)return 0;const r=nx,a=sx,o=rx;s.getVelocityAtWorldPoint(e,r),t.getVelocityAtWorldPoint(i,a),r.vsub(a,o);const l=n.dot(o),c=.2,h=1/(s.invMass+t.invMass);return-c*l*h}class ox extends he{constructor(e){if(super({type:he.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new x);const i=2*e*this.radius*this.radius/5;return t.x=i,t.y=i,t.z=i,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,i,n){const r=this.radius,a=["x","y","z"];for(let o=0;o<a.length;o++){const l=a[o];i[l]=e[l]-r,n[l]=e[l]+r}}}new x,new x,new x,new x,new x,new x,new x,new x,new x;class $r extends bs{constructor(e,t,i,n){if(e===void 0&&(e=1),t===void 0&&(t=1),i===void 0&&(i=1),n===void 0&&(n=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=n,a=[],o=[],l=[],c=[],h=[],u=Math.cos,d=Math.sin;a.push(new x(-t*d(0),-i*.5,t*u(0))),c.push(0),a.push(new x(-e*d(0),i*.5,e*u(0))),h.push(1);for(let g=0;g<r;g++){const v=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(a.push(new x(-t*d(v),-i*.5,t*u(v))),c.push(2*g+2),a.push(new x(-e*d(v),i*.5,e*u(v))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&o.push(new x(-d(m),0,u(m)))}l.push(c),o.push(new x(0,1,0));const p=[];for(let g=0;g<h.length;g++)p.push(h[h.length-g-1]);l.push(p),super({vertices:a,faces:l,axes:o}),this.type=he.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=i,this.numSegments=n}}class Xh extends he{constructor(){super({type:he.types.PLANE}),this.worldNormal=new x,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new x),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,n){Hi.set(0,0,1),t.vmult(Hi,Hi);const r=Number.MAX_VALUE;i.set(-r,-r,-r),n.set(r,r,r),Hi.x===1?n.x=e.x:Hi.x===-1&&(i.x=e.x),Hi.y===1?n.y=e.y:Hi.y===-1&&(i.y=e.y),Hi.z===1?n.z=e.z:Hi.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Hi=new x;new x,new x,new x,new x,new x,new x,new x,new x,new x,new x,new Kt,new x,new Kt,new x,new x,new x,new x,new x,new x,new x,new Kt,new x,new Ye,new Kt;class lx{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class cx extends lx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const n=this.iterations,r=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=t.bodies,c=l.length,h=e;let u,d,p,g,v,m;if(o!==0)for(let S=0;S!==c;S++)l[S].updateSolveMassProperties();const f=ux,_=dx,M=hx;f.length=o,_.length=o,M.length=o;for(let S=0;S!==o;S++){const C=a[S];M[S]=0,_[S]=C.computeB(h),f[S]=1/C.computeC()}if(o!==0){for(let T=0;T!==c;T++){const R=l[T],P=R.vlambda,b=R.wlambda;P.set(0,0,0),b.set(0,0,0)}for(i=0;i!==n;i++){g=0;for(let T=0;T!==o;T++){const R=a[T];u=_[T],d=f[T],m=M[T],v=R.computeGWlambda(),p=d*(u-v-R.eps*m),m+p<R.minForce?p=R.minForce-m:m+p>R.maxForce&&(p=R.maxForce-m),M[T]+=p,g+=p>0?p:-p,R.addToWlambda(p)}if(g*g<r)break}for(let T=0;T!==c;T++){const R=l[T],P=R.velocity,b=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),P.vadd(R.vlambda,P),R.wlambda.vmul(R.angularFactor,R.wlambda),b.vadd(R.wlambda,b)}let S=a.length;const C=1/h;for(;S--;)a[S].multiplier=M[S]*C}return i}}const hx=[],ux=[],dx=[];ne.STATIC;class px{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class mx extends px{constructor(){super(...arguments),this.type=x}constructObject(){return new x}}const lt={sphereSphere:he.types.SPHERE,spherePlane:he.types.SPHERE|he.types.PLANE,boxBox:he.types.BOX|he.types.BOX,sphereBox:he.types.SPHERE|he.types.BOX,planeBox:he.types.PLANE|he.types.BOX,convexConvex:he.types.CONVEXPOLYHEDRON,sphereConvex:he.types.SPHERE|he.types.CONVEXPOLYHEDRON,planeConvex:he.types.PLANE|he.types.CONVEXPOLYHEDRON,boxConvex:he.types.BOX|he.types.CONVEXPOLYHEDRON,sphereHeightfield:he.types.SPHERE|he.types.HEIGHTFIELD,boxHeightfield:he.types.BOX|he.types.HEIGHTFIELD,convexHeightfield:he.types.CONVEXPOLYHEDRON|he.types.HEIGHTFIELD,sphereParticle:he.types.PARTICLE|he.types.SPHERE,planeParticle:he.types.PLANE|he.types.PARTICLE,boxParticle:he.types.BOX|he.types.PARTICLE,convexParticle:he.types.PARTICLE|he.types.CONVEXPOLYHEDRON,cylinderCylinder:he.types.CYLINDER,sphereCylinder:he.types.SPHERE|he.types.CYLINDER,planeCylinder:he.types.PLANE|he.types.CYLINDER,boxCylinder:he.types.BOX|he.types.CYLINDER,convexCylinder:he.types.CONVEXPOLYHEDRON|he.types.CYLINDER,heightfieldCylinder:he.types.HEIGHTFIELD|he.types.CYLINDER,particleCylinder:he.types.PARTICLE|he.types.CYLINDER,sphereTrimesh:he.types.SPHERE|he.types.TRIMESH,planeTrimesh:he.types.PLANE|he.types.TRIMESH};class fx{get[lt.sphereSphere](){return this.sphereSphere}get[lt.spherePlane](){return this.spherePlane}get[lt.boxBox](){return this.boxBox}get[lt.sphereBox](){return this.sphereBox}get[lt.planeBox](){return this.planeBox}get[lt.convexConvex](){return this.convexConvex}get[lt.sphereConvex](){return this.sphereConvex}get[lt.planeConvex](){return this.planeConvex}get[lt.boxConvex](){return this.boxConvex}get[lt.sphereHeightfield](){return this.sphereHeightfield}get[lt.boxHeightfield](){return this.boxHeightfield}get[lt.convexHeightfield](){return this.convexHeightfield}get[lt.sphereParticle](){return this.sphereParticle}get[lt.planeParticle](){return this.planeParticle}get[lt.boxParticle](){return this.boxParticle}get[lt.convexParticle](){return this.convexParticle}get[lt.cylinderCylinder](){return this.convexConvex}get[lt.sphereCylinder](){return this.sphereConvex}get[lt.planeCylinder](){return this.planeConvex}get[lt.boxCylinder](){return this.boxConvex}get[lt.convexCylinder](){return this.convexConvex}get[lt.heightfieldCylinder](){return this.heightfieldCylinder}get[lt.particleCylinder](){return this.particleCylinder}get[lt.sphereTrimesh](){return this.sphereTrimesh}get[lt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new mx,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,n,r,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new E_(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&n.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,h=n.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=r||i,o.sj=a||n,o}createFrictionEquationsFromContact(e,t){const i=e.bi,n=e.bj,r=e.si,a=e.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||i.material,u=a.material||n.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(o.frictionGravity||o.gravity).length();let p=i.invMass+n.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new Hh(i,n,d*p),m=g.length?g.pop():new Hh(i,n,d*p);return v.bi=m.bi=i,v.bj=m.bj=n,v.minForce=m.minForce=-d*p,v.maxForce=m.maxForce=d*p,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];In.setZero(),ws.setZero(),Ts.setZero();const r=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==r?(In.vadd(t.ni,In),ws.vadd(t.ri,ws),Ts.vadd(t.rj,Ts)):(In.vsub(t.ni,In),ws.vadd(t.rj,ws),Ts.vadd(t.ri,Ts));const a=1/e;ws.scale(a,i.ri),Ts.scale(a,i.rj),n.ri.copy(i.ri),n.rj.copy(i.rj),In.normalize(),In.tangents(i.t,n.t)}getContacts(e,t,i,n,r,a,o){this.contactPointPool=r,this.frictionEquationPool=o,this.result=n,this.frictionResult=a;const l=_x,c=xx,h=gx,u=vx;for(let d=0,p=e.length;d!==p;d++){const g=e[d],v=t[d];let m=null;g.material&&v.material&&(m=i.getContactMaterial(g.material,v.material)||null);const f=g.type&ne.KINEMATIC&&v.type&ne.STATIC||g.type&ne.STATIC&&v.type&ne.KINEMATIC||g.type&ne.KINEMATIC&&v.type&ne.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const M=g.shapes[_];for(let S=0;S<v.shapes.length;S++){v.quaternion.mult(v.shapeOrientations[S],c),v.quaternion.vmult(v.shapeOffsets[S],u),u.vadd(v.position,u);const C=v.shapes[S];if(!(M.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(u)>M.boundingSphereRadius+C.boundingSphereRadius)continue;let T=null;M.material&&C.material&&(T=i.getContactMaterial(M.material,C.material)||null),this.currentContactMaterial=T||m||i.defaultContactMaterial;const R=M.type|C.type,P=this[R];if(P){let b=!1;M.type<C.type?b=P.call(this,M,C,h,u,l,c,g,v,M,C,f):b=P.call(this,C,M,u,h,c,l,v,g,M,C,f),b&&f&&(i.shapeOverlapKeeper.set(M.id,C.id),i.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,t,i,n,r,a,o,l,c,h,u){if(u)return i.distanceSquared(n)<(e.radius+t.radius)**2;const d=this.createContactEquation(o,l,e,t,c,h);n.vsub(i,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(i,d.ri),d.ri.vsub(o.position,d.ri),d.rj.vadd(n,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,i,n,r,a,o,l,c,h,u){const d=this.createContactEquation(o,l,e,t,c,h);if(d.ni.set(0,0,1),a.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),i.vsub(n,Qr),d.ni.scale(d.ni.dot(Qr),qh),Qr.vsub(qh,d.rj),-Qr.dot(d.ni)<=e.radius){if(u)return!0;const p=d.ri,g=d.rj;p.vadd(i,p),p.vsub(o.position,p),g.vadd(n,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,n,r,a,o,l,e,t,u)}sphereBox(e,t,i,n,r,a,o,l,c,h,u){const d=this.v3pool,p=jx;i.vsub(n,ea),t.getSideNormals(p,a);const g=e.radius;let v=!1;const m=qx,f=Yx,_=Kx;let M=null,S=0,C=0,T=0,R=null;for(let z=0,W=p.length;z!==W&&v===!1;z++){const H=Hx;H.copy(p[z]);const Z=H.length();H.normalize();const Q=ea.dot(H);if(Q<Z+g&&Q>0){const ve=Gx,se=Wx;ve.copy(p[(z+1)%3]),se.copy(p[(z+2)%3]);const He=ve.length(),J=se.length();ve.normalize(),se.normalize();const ie=ea.dot(ve),fe=ea.dot(se);if(ie<He&&ie>-He&&fe<J&&fe>-J){const le=Math.abs(Q-Z-g);if((R===null||le<R)&&(R=le,C=ie,T=fe,M=Z,m.copy(H),f.copy(ve),_.copy(se),S++,u))return!0}}}if(S){v=!0;const z=this.createContactEquation(o,l,e,t,c,h);m.scale(-g,z.ri),z.ni.copy(m),z.ni.negate(z.ni),m.scale(M,m),f.scale(C,f),m.vadd(f,m),_.scale(T,_),m.vadd(_,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(n,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let P=d.get();const b=Xx;for(let z=0;z!==2&&!v;z++)for(let W=0;W!==2&&!v;W++)for(let H=0;H!==2&&!v;H++)if(P.set(0,0,0),z?P.vadd(p[0],P):P.vsub(p[0],P),W?P.vadd(p[1],P):P.vsub(p[1],P),H?P.vadd(p[2],P):P.vsub(p[2],P),n.vadd(P,b),b.vsub(i,b),b.lengthSquared()<g*g){if(u)return!0;v=!0;const Z=this.createContactEquation(o,l,e,t,c,h);Z.ri.copy(b),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(P),Z.ri.vadd(i,Z.ri),Z.ri.vsub(o.position,Z.ri),Z.rj.vadd(n,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}d.release(P),P=null;const y=d.get(),D=d.get(),N=d.get(),E=d.get(),O=d.get(),F=p.length;for(let z=0;z!==F&&!v;z++)for(let W=0;W!==F&&!v;W++)if(z%3!==W%3){p[W].cross(p[z],y),y.normalize(),p[z].vadd(p[W],D),N.copy(i),N.vsub(D,N),N.vsub(n,N);const H=N.dot(y);y.scale(H,E);let Z=0;for(;Z===z%3||Z===W%3;)Z++;O.copy(i),O.vsub(E,O),O.vsub(D,O),O.vsub(n,O);const Q=Math.abs(H),ve=O.length();if(Q<p[Z].length()&&ve<g){if(u)return!0;v=!0;const se=this.createContactEquation(o,l,e,t,c,h);D.vadd(E,se.rj),se.rj.copy(se.rj),O.negate(se.ni),se.ni.normalize(),se.ri.copy(se.rj),se.ri.vadd(n,se.ri),se.ri.vsub(i,se.ri),se.ri.normalize(),se.ri.scale(g,se.ri),se.ri.vadd(i,se.ri),se.ri.vsub(o.position,se.ri),se.rj.vadd(n,se.rj),se.rj.vsub(l.position,se.rj),this.result.push(se),this.createFrictionEquationsFromContact(se,this.frictionResult)}}d.release(y,D,N,E,O)}planeBox(e,t,i,n,r,a,o,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,n,r,a,o,l,e,t,u)}convexConvex(e,t,i,n,r,a,o,l,c,h,u,d,p){const g=hy;if(!(i.distanceTo(n)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,r,n,a,g,d,p)){const v=[],m=uy;e.clipAgainstHull(i,r,t,n,a,g,-100,100,v);let f=0;for(let _=0;_!==v.length;_++){if(u)return!0;const M=this.createContactEquation(o,l,e,t,c,h),S=M.ri,C=M.rj;g.negate(M.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,S),C.copy(v[_].point),S.vsub(i,S),C.vsub(n,C),S.vadd(i,S),S.vsub(o.position,S),C.vadd(n,C),C.vsub(l.position,C),this.result.push(M),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,i,n,r,a,o,l,c,h,u){const d=this.v3pool;i.vsub(n,Zx);const p=t.faceNormals,g=t.faces,v=t.vertices,m=e.radius;let f=!1;for(let _=0;_!==v.length;_++){const M=v[_],S=ey;a.vmult(M,S),n.vadd(S,S);const C=Qx;if(S.vsub(i,C),C.lengthSquared()<m*m){if(u)return!0;f=!0;const T=this.createContactEquation(o,l,e,t,c,h);T.ri.copy(C),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),S.vsub(n,T.rj),T.ri.vadd(i,T.ri),T.ri.vsub(o.position,T.ri),T.rj.vadd(n,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,M=g.length;_!==M&&f===!1;_++){const S=p[_],C=g[_],T=ty;a.vmult(S,T);const R=iy;a.vmult(v[C[0]],R),R.vadd(n,R);const P=ny;T.scale(-m,P),i.vadd(P,P);const b=sy;P.vsub(R,b);const y=b.dot(T),D=ry;if(i.vsub(R,D),y<0&&D.dot(T)>0){const N=[];for(let E=0,O=C.length;E!==O;E++){const F=d.get();a.vmult(v[C[E]],F),n.vadd(F,F),N.push(F)}if(Vx(N,T,i)){if(u)return!0;f=!0;const E=this.createContactEquation(o,l,e,t,c,h);T.scale(-m,E.ri),T.negate(E.ni);const O=d.get();T.scale(-y,O);const F=d.get();T.scale(-m,F),i.vsub(n,E.rj),E.rj.vadd(F,E.rj),E.rj.vadd(O,E.rj),E.rj.vadd(n,E.rj),E.rj.vsub(l.position,E.rj),E.ri.vadd(i,E.ri),E.ri.vsub(o.position,E.ri),d.release(O),d.release(F),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);for(let z=0,W=N.length;z!==W;z++)d.release(N[z]);return}else for(let E=0;E!==C.length;E++){const O=d.get(),F=d.get();a.vmult(v[C[(E+1)%C.length]],O),a.vmult(v[C[(E+2)%C.length]],F),n.vadd(O,O),n.vadd(F,F);const z=Jx;F.vsub(O,z);const W=$x;z.unit(W);const H=d.get(),Z=d.get();i.vsub(O,Z);const Q=Z.dot(W);W.scale(Q,H),H.vadd(O,H);const ve=d.get();if(H.vsub(i,ve),Q>0&&Q*Q<z.lengthSquared()&&ve.lengthSquared()<m*m){if(u)return!0;const se=this.createContactEquation(o,l,e,t,c,h);H.vsub(n,se.rj),H.vsub(i,se.ni),se.ni.normalize(),se.ni.scale(m,se.ri),se.rj.vadd(n,se.rj),se.rj.vsub(l.position,se.rj),se.ri.vadd(i,se.ri),se.ri.vsub(o.position,se.ri),this.result.push(se),this.createFrictionEquationsFromContact(se,this.frictionResult);for(let He=0,J=N.length;He!==J;He++)d.release(N[He]);d.release(O),d.release(F),d.release(H),d.release(ve),d.release(Z);return}d.release(O),d.release(F),d.release(H),d.release(ve),d.release(Z)}for(let E=0,O=N.length;E!==O;E++)d.release(N[E])}}}planeConvex(e,t,i,n,r,a,o,l,c,h,u){const d=ay,p=oy;p.set(0,0,1),r.vmult(p,p);let g=0;const v=ly;for(let m=0;m!==t.vertices.length;m++)if(d.copy(t.vertices[m]),a.vmult(d,d),n.vadd(d,d),d.vsub(i,v),p.dot(v)<=0){if(u)return!0;const f=this.createContactEquation(o,l,e,t,c,h),_=cy;p.scale(p.dot(v),_),d.vsub(_,_),_.vsub(i,f.ri),f.ni.copy(p),d.vsub(n,f.rj),f.ri.vadd(i,f.ri),f.ri.vsub(o.position,f.ri),f.rj.vadd(n,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(f,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,u)}sphereHeightfield(e,t,i,n,r,a,o,l,c,h,u){const d=t.data,p=e.radius,g=t.elementSize,v=Sy,m=by;Ye.pointToLocalFrame(n,a,i,m);let f=Math.floor((m.x-p)/g)-1,_=Math.ceil((m.x+p)/g)+1,M=Math.floor((m.y-p)/g)-1,S=Math.ceil((m.y+p)/g)+1;if(_<0||S<0||f>d.length||M>d[0].length)return;f<0&&(f=0),_<0&&(_=0),M<0&&(M=0),S<0&&(S=0),f>=d.length&&(f=d.length-1),_>=d.length&&(_=d.length-1),S>=d[0].length&&(S=d[0].length-1),M>=d[0].length&&(M=d[0].length-1);const C=[];t.getRectMinMax(f,M,_,S,C);const T=C[0],R=C[1];if(m.z-p>R||m.z+p<T)return;const P=this.result;for(let b=f;b<_;b++)for(let y=M;y<S;y++){const D=P.length;let N=!1;if(t.getConvexTrianglePillar(b,y,!1),Ye.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,i,v,r,a,o,l,e,t,u)),u&&N||(t.getConvexTrianglePillar(b,y,!0),Ye.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,i,v,r,a,o,l,e,t,u)),u&&N))return!0;if(P.length-D>2)return}}boxHeightfield(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,u)}convexHeightfield(e,t,i,n,r,a,o,l,c,h,u){const d=t.data,p=t.elementSize,g=e.boundingSphereRadius,v=yy,m=My,f=xy;Ye.pointToLocalFrame(n,a,i,f);let _=Math.floor((f.x-g)/p)-1,M=Math.ceil((f.x+g)/p)+1,S=Math.floor((f.y-g)/p)-1,C=Math.ceil((f.y+g)/p)+1;if(M<0||C<0||_>d.length||S>d[0].length)return;_<0&&(_=0),M<0&&(M=0),S<0&&(S=0),C<0&&(C=0),_>=d.length&&(_=d.length-1),M>=d.length&&(M=d.length-1),C>=d[0].length&&(C=d[0].length-1),S>=d[0].length&&(S=d[0].length-1);const T=[];t.getRectMinMax(_,S,M,C,T);const R=T[0],P=T[1];if(!(f.z-g>P||f.z+g<R))for(let b=_;b<M;b++)for(let y=S;y<C;y++){let D=!1;if(t.getConvexTrianglePillar(b,y,!1),Ye.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,i,v,r,a,o,l,null,null,u,m,null)),u&&D||(t.getConvexTrianglePillar(b,y,!0),Ye.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,i,v,r,a,o,l,null,null,u,m,null)),u&&D))return!0}}sphereParticle(e,t,i,n,r,a,o,l,c,h,u){const d=fy;if(d.set(0,0,1),n.vsub(i,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const p=this.createContactEquation(l,o,t,e,c,h);d.normalize(),p.rj.copy(d),p.rj.scale(e.radius,p.rj),p.ni.copy(d),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,i,n,r,a,o,l,c,h,u){const d=dy;d.set(0,0,1),o.quaternion.vmult(d,d);const p=py;if(n.vsub(o.position,p),d.dot(p)<=0){if(u)return!0;const g=this.createContactEquation(l,o,t,e,c,h);g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0);const v=my;d.scale(d.dot(n),v),n.vsub(v,v),g.rj.copy(v),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,u)}convexParticle(e,t,i,n,r,a,o,l,c,h,u){let d=-1;const p=vy,g=_y;let v=null;const m=gy;if(m.copy(n),m.vsub(i,m),r.conjugate(Yh),Yh.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let f=0,_=e.faces.length;f!==_;f++){const M=[e.worldVertices[e.faces[f][0]]],S=e.worldFaceNormals[f];n.vsub(M[0],Kh);const C=-S.dot(Kh);if(v===null||Math.abs(C)<Math.abs(v)){if(u)return!0;v=C,d=f,p.copy(S)}}if(d!==-1){const f=this.createContactEquation(l,o,t,e,c,h);p.scale(v,g),g.vadd(n,g),g.vsub(i,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const _=f.ri,M=f.rj;_.vadd(n,_),_.vsub(l.position,_),M.vadd(i,M),M.vsub(o.position,M),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,n,r,a,o,l,c,h,u){return this.convexHeightfield(t,e,n,i,a,r,l,o,c,h,u)}particleCylinder(e,t,i,n,r,a,o,l,c,h,u){return this.convexParticle(t,e,n,i,a,r,l,o,c,h,u)}sphereTrimesh(e,t,i,n,r,a,o,l,c,h,u){const d=Ax,p=Rx,g=Px,v=Cx,m=Lx,f=Ix,_=Ox,M=Ex,S=wx,C=Fx;Ye.pointToLocalFrame(n,a,i,m);const T=e.radius;_.lowerBound.set(m.x-T,m.y-T,m.z-T),_.upperBound.set(m.x+T,m.y+T,m.z+T),t.getTrianglesInAABB(_,C);const R=Tx,P=e.radius*e.radius;for(let E=0;E<C.length;E++)for(let O=0;O<3;O++)if(t.getVertex(t.indices[C[E]*3+O],R),R.vsub(m,S),S.lengthSquared()<=P){if(M.copy(R),Ye.pointToWorldFrame(n,a,M,R),R.vsub(i,S),u)return!0;let F=this.createContactEquation(o,l,e,t,c,h);F.ni.copy(S),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(i,F.ri),F.ri.vsub(o.position,F.ri),F.rj.copy(R),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let E=0;E<C.length;E++)for(let O=0;O<3;O++){t.getVertex(t.indices[C[E]*3+O],d),t.getVertex(t.indices[C[E]*3+(O+1)%3],p),p.vsub(d,g),m.vsub(p,f);const F=f.dot(g);m.vsub(d,f);let z=f.dot(g);if(z>0&&F<0&&(m.vsub(d,f),v.copy(g),v.normalize(),z=f.dot(v),v.scale(z,f),f.vadd(d,f),f.distanceTo(m)<e.radius)){if(u)return!0;const W=this.createContactEquation(o,l,e,t,c,h);f.vsub(m,W.ni),W.ni.normalize(),W.ni.scale(e.radius,W.ri),W.ri.vadd(i,W.ri),W.ri.vsub(o.position,W.ri),Ye.pointToWorldFrame(n,a,f,f),f.vsub(l.position,W.rj),Ye.vectorToWorldFrame(a,W.ni,W.ni),Ye.vectorToWorldFrame(a,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const b=Nx,y=Ux,D=Dx,N=Sx;for(let E=0,O=C.length;E!==O;E++){t.getTriangleVertices(C[E],b,y,D),t.getNormal(C[E],N),m.vsub(b,f);let F=f.dot(N);if(N.scale(F,f),m.vsub(f,f),F=f.distanceTo(m),gt.pointInTriangle(f,b,y,D)&&F<e.radius){if(u)return!0;let z=this.createContactEquation(o,l,e,t,c,h);f.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(i,z.ri),z.ri.vsub(o.position,z.ri),Ye.pointToWorldFrame(n,a,f,f),f.vsub(l.position,z.rj),Ye.vectorToWorldFrame(a,z.ni,z.ni),Ye.vectorToWorldFrame(a,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}C.length=0}planeTrimesh(e,t,i,n,r,a,o,l,c,h,u){const d=new x,p=yx;p.set(0,0,1),r.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const v=new x;v.copy(d),Ye.pointToWorldFrame(n,a,v,d);const m=Mx;if(d.vsub(i,m),p.dot(m)<=0){if(u)return!0;const f=this.createContactEquation(o,l,e,t,c,h);f.ni.copy(p);const _=bx;p.scale(m.dot(p),_),d.vsub(_,_),f.ri.copy(_),f.ri.vsub(o.position,f.ri),f.rj.copy(d),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}}}const In=new x,ws=new x,Ts=new x,gx=new x,vx=new x,_x=new ot,xx=new ot,yx=new x,Mx=new x,bx=new x,Sx=new x,wx=new x;new x;const Tx=new x,Ex=new x,Ax=new x,Rx=new x,Px=new x,Cx=new x,Lx=new x,Ix=new x,Nx=new x,Ux=new x,Dx=new x,Ox=new Kt,Fx=[],Qr=new x,qh=new x,Bx=new x,zx=new x,kx=new x;function Vx(s,e,t){let i=null;const n=s.length;for(let r=0;r!==n;r++){const a=s[r],o=Bx;s[(r+1)%n].vsub(a,o);const l=zx;o.cross(e,l);const c=kx;t.vsub(a,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const ea=new x,Hx=new x,Gx=new x,Wx=new x,jx=[new x,new x,new x,new x,new x,new x],Xx=new x,qx=new x,Yx=new x,Kx=new x,Zx=new x,Jx=new x,$x=new x,Qx=new x,ey=new x,ty=new x,iy=new x,ny=new x,sy=new x,ry=new x;new x,new x;const ay=new x,oy=new x,ly=new x,cy=new x,hy=new x,uy=new x,dy=new x,py=new x,my=new x,fy=new x,Yh=new ot,gy=new x;new x;const vy=new x,Kh=new x,_y=new x,xy=new x,yy=new x,My=[0],by=new x,Sy=new x;class Zh{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),n=this.current;let r=0;for(;i>n[r];)r++;if(i!==n[r]){for(let a=n.length-1;a>=r;a--)n[a+1]=n[a];n[r]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,n=this.previous,r=i.length,a=n.length;let o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=h===n[o],c||Jh(e,h)}o=0;for(let l=0;l<a;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=i[o]===h,c||Jh(t,h)}}}function Jh(s,e){s.push((e&4294901760)>>16,e&65535)}const bo=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class wy{constructor(){this.data={keys:[]}}get(e,t){const i=bo(e,t);return this.data[i]}set(e,t,i){const n=bo(e,t);this.get(e,t)||this.data.keys.push(n),this.data[n]=i}delete(e,t){const i=bo(e,t),n=this.data.keys.indexOf(i);n!==-1&&this.data.keys.splice(n,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class Ty extends Sh{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=.016666666666666666,this.nextId=0,this.gravity=new x,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new x,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new l_,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new cx,this.constraints=[],this.narrowphase=new fx(this),this.collisionMatrix=new bh,this.collisionMatrixPrevious=new bh,this.bodyOverlapKeeper=new Zh,this.shapeOverlapKeeper=new Zh,this.contactmaterials=[],this.contactMaterialTable=new wy,this.defaultMaterial=new vi("default"),this.defaultContactMaterial=new ei(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof qs?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,n){return i===void 0&&(i={}),i.mode=gt.ALL,i.from=e,i.to=t,i.callback=n,So.intersectWorld(this,i)}raycastAny(e,t,i,n){return i===void 0&&(i={}),i.mode=gt.ANY,i.from=e,i.to=t,i.result=n,So.intersectWorld(this,i)}raycastClosest(e,t,i,n){return i===void 0&&(i={}),i.mode=gt.CLOSEST,i.from=e,i.to=t,i.result=n,So.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ne&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,n=i.indexOf(e);if(n!==-1){i.splice(n,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const n=t[i].shapes;for(let r=0;r<n.length;r++){const a=n[r];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=.016666666666666666),t===void 0&&(t=10);const i=yt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const n=i-this.lastCallTime;this.step(e,n,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const n=yt.now();let r=0;for(;this.accumulator>=e&&r<i&&(this.internalStep(e),this.accumulator-=e,r++,!(yt.now()-n>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=Cy,n=Ly,r=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=ne.DYNAMIC;let d=-1/0;const p=this.constraints,g=Py;l.length();const v=l.x,m=l.y,f=l.z;let _=0;for(c&&(d=yt.now()),_=0;_!==r;_++){const N=a[_];if(N.type===u){const E=N.force,O=N.mass;E.x+=O*v,E.y+=O*m,E.z+=O*f}}for(let N=0,E=this.subsystems.length;N!==E;N++)this.subsystems[N].update();c&&(d=yt.now()),i.length=0,n.length=0,this.broadphase.collisionPairs(this,i,n),c&&(h.broadphase=yt.now()-d);let M=p.length;for(_=0;_!==M;_++){const N=p[_];if(!N.collideConnected)for(let E=i.length-1;E>=0;E-=1)(N.bodyA===i[E]&&N.bodyB===n[E]||N.bodyB===i[E]&&N.bodyA===n[E])&&(i.splice(E,1),n.splice(E,1))}this.collisionMatrixTick(),c&&(d=yt.now());const S=Ry,C=t.length;for(_=0;_!==C;_++)S.push(t[_]);t.length=0;const T=this.frictionEquations.length;for(_=0;_!==T;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,n,this,t,S,this.frictionEquations,g),c&&(h.narrowphase=yt.now()-d),c&&(d=yt.now()),_=0;_<this.frictionEquations.length;_++)o.addEquation(this.frictionEquations[_]);const R=t.length;for(let N=0;N!==R;N++){const E=t[N],O=E.bi,F=E.bj,z=E.si,W=E.sj;let H;if(O.material&&F.material?H=this.getContactMaterial(O.material,F.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,O.material&&F.material&&(O.material.friction>=0&&F.material.friction>=0&&O.material.friction*F.material.friction,O.material.restitution>=0&&F.material.restitution>=0&&(E.restitution=O.material.restitution*F.material.restitution)),o.addEquation(E),O.allowSleep&&O.type===ne.DYNAMIC&&O.sleepState===ne.SLEEPING&&F.sleepState===ne.AWAKE&&F.type!==ne.STATIC){const Z=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),Q=F.sleepSpeedLimit**2;Z>=Q*2&&(O.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===ne.DYNAMIC&&F.sleepState===ne.SLEEPING&&O.sleepState===ne.AWAKE&&O.type!==ne.STATIC){const Z=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),Q=O.sleepSpeedLimit**2;Z>=Q*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,F,!0),this.collisionMatrixPrevious.get(O,F)||(Zs.body=F,Zs.contact=E,O.dispatchEvent(Zs),Zs.body=O,F.dispatchEvent(Zs)),this.bodyOverlapKeeper.set(O.id,F.id),this.shapeOverlapKeeper.set(z.id,W.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=yt.now()-d,d=yt.now()),_=0;_!==r;_++){const N=a[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(M=p.length,_=0;_!==M;_++){const N=p[_];N.update();for(let E=0,O=N.equations.length;E!==O;E++){const F=N.equations[E];o.addEquation(F)}}o.solve(e,this),c&&(h.solve=yt.now()-d),o.removeAllEquations();const P=Math.pow;for(_=0;_!==r;_++){const N=a[_];if(N.type&u){const E=P(1-N.linearDamping,e),O=N.velocity;O.scale(E,O);const F=N.angularVelocity;if(F){const z=P(1-N.angularDamping,e);F.scale(z,F)}}}this.dispatchEvent(Ay),c&&(d=yt.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,y=this.quatNormalizeFast;for(_=0;_!==r;_++)a[_].integrate(e,b,y);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=yt.now()-d),this.stepnumber+=1,this.dispatchEvent(Ey);let D=!0;if(this.allowSleep)for(D=!1,_=0;_!==r;_++){const N=a[_];N.sleepTick(this.time),N.sleepState!==ne.SLEEPING&&(D=!0)}this.hasActiveBodies=D}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Gi,Wi),e){for(let r=0,a=Gi.length;r<a;r+=2)Js.bodyA=this.getBodyById(Gi[r]),Js.bodyB=this.getBodyById(Gi[r+1]),this.dispatchEvent(Js);Js.bodyA=Js.bodyB=null}if(t){for(let r=0,a=Wi.length;r<a;r+=2)$s.bodyA=this.getBodyById(Wi[r]),$s.bodyB=this.getBodyById(Wi[r+1]),this.dispatchEvent($s);$s.bodyA=$s.bodyB=null}Gi.length=Wi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((i||n)&&this.shapeOverlapKeeper.getDiff(Gi,Wi),i){for(let r=0,a=Gi.length;r<a;r+=2){const o=this.getShapeById(Gi[r]),l=this.getShapeById(Gi[r+1]);ji.shapeA=o,ji.shapeB=l,o&&(ji.bodyA=o.body),l&&(ji.bodyB=l.body),this.dispatchEvent(ji)}ji.bodyA=ji.bodyB=ji.shapeA=ji.shapeB=null}if(n){for(let r=0,a=Wi.length;r<a;r+=2){const o=this.getShapeById(Wi[r]),l=this.getShapeById(Wi[r+1]);Xi.shapeA=o,Xi.shapeB=l,o&&(Xi.bodyA=o.body),l&&(Xi.bodyB=l.body),this.dispatchEvent(Xi)}Xi.bodyA=Xi.bodyB=Xi.shapeA=Xi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const n=e[i];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}}new Kt;const So=new gt,yt=globalThis.performance||{};if(!yt.now){let s=Date.now();yt.timing&&yt.timing.navigationStart&&(s=yt.timing.navigationStart),yt.now=()=>Date.now()-s}new x;const Ey={type:"postStep"},Ay={type:"preStep"},Zs={type:ne.COLLIDE_EVENT_NAME,body:null,contact:null},Ry=[],Py=[],Cy=[],Ly=[],Gi=[],Wi=[],Js={type:"beginContact",bodyA:null,bodyB:null},$s={type:"endContact",bodyA:null,bodyB:null},ji={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Xi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Iy(s,e,t){let{color:i=65280,scale:n=1,onInit:r,onUpdate:a}=t===void 0?{}:t;const o=[],l=new wi({color:i??65280,wireframe:!0}),c=new x,h=new x,u=new x,d=new ot,p=new jr(1),g=new mi(1,1,1),v=new ps(10,10,10,10);v.translate(0,0,1e-4);function m(P){const b=new Ft,y=[];for(let N=0;N<P.vertices.length;N++){const E=P.vertices[N];y.push(E.x,E.y,E.z)}b.setAttribute("position",new St(y,3));const D=[];for(let N=0;N<P.faces.length;N++){const E=P.faces[N],O=E[0];for(let F=1;F<E.length-1;F++){const z=E[F],W=E[F+1];D.push(O,z,W)}}return b.setIndex(D),b.computeBoundingSphere(),b.computeVertexNormals(),b}function f(P){const b=new Ft,y=[],D=c,N=h,E=u;for(let O=0;O<P.indices.length/3;O++)P.getTriangleVertices(O,D,N,E),y.push(D.x,D.y,D.z),y.push(N.x,N.y,N.z),y.push(E.x,E.y,E.z);return b.setAttribute("position",new St(y,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function _(P){const b=new Ft,y=P.elementSize||1,D=P.data.flatMap((E,O)=>E.flatMap((F,z)=>[O*y,z*y,F])),N=[];for(let E=0;E<P.data.length-1;E++)for(let O=0;O<P.data[E].length-1;O++){const F=P.data[E].length,z=E*F+O;N.push(z+1,z+F,z+F+1),N.push(z+F,z+1,z)}return b.setIndex(N),b.setAttribute("position",new St(D,3)),b.computeBoundingSphere(),b.computeVertexNormals(),b}function M(P){let b=new at;const{SPHERE:y,BOX:D,PLANE:N,CYLINDER:E,CONVEXPOLYHEDRON:O,TRIMESH:F,HEIGHTFIELD:z}=he.types;switch(P.type){case y:{b=new at(p,l);break}case D:{b=new at(g,l);break}case N:{b=new at(v,l);break}case E:{const W=new ro(P.radiusTop,P.radiusBottom,P.height,P.numSegments);b=new at(W,l),P.geometryId=W.id;break}case O:{const W=m(P);b=new at(W,l),P.geometryId=W.id;break}case F:{const W=f(P);b=new at(W,l),P.geometryId=W.id;break}case z:{const W=_(P);b=new at(W,l),P.geometryId=W.id;break}}return s.add(b),b}function S(P,b){const{SPHERE:y,BOX:D,PLANE:N,CYLINDER:E,CONVEXPOLYHEDRON:O,TRIMESH:F,HEIGHTFIELD:z}=he.types;switch(b.type){case y:{const{radius:W}=b;P.scale.set(W*n,W*n,W*n);break}case D:{P.scale.copy(b.halfExtents),P.scale.multiplyScalar(2*n);break}case N:break;case E:{P.scale.set(1*n,1*n,1*n);break}case O:{P.scale.set(1*n,1*n,1*n);break}case F:{P.scale.copy(b.scale).multiplyScalar(n);break}case z:{P.scale.set(1*n,1*n,1*n);break}}}function C(P,b){if(!P)return!1;const{geometry:y}=P;return y instanceof jr&&b.type===he.types.SPHERE||y instanceof mi&&b.type===he.types.BOX||y instanceof ps&&b.type===he.types.PLANE||y.id===b.geometryId&&b.type===he.types.CYLINDER||y.id===b.geometryId&&b.type===he.types.CONVEXPOLYHEDRON||y.id===b.geometryId&&b.type===he.types.TRIMESH||y.id===b.geometryId&&b.type===he.types.HEIGHTFIELD}function T(P,b){let y=o[P],D=!1;return C(y,b)||(y&&s.remove(y),o[P]=y=M(b),D=!0),S(y,b),D}function R(){const P=o,b=c,y=d;let D=0;for(const N of e.bodies)for(let E=0;E!==N.shapes.length;E++){const O=N.shapes[E],F=T(D,O),z=P[D];z&&(N.quaternion.vmult(N.shapeOffsets[E],b),N.position.vadd(b,b),N.quaternion.mult(N.shapeOrientations[E],y),z.position.copy(b),z.quaternion.copy(y),F&&r instanceof Function&&r(N,z,O),!F&&a instanceof Function&&a(N,z,O)),D++}for(let N=D;N<P.length;N++){const E=P[N];E&&s.remove(E)}P.length=D}return{update:R}}function $h(s,e){if(e===pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===fa||e===Pl){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===fa)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class qi extends Cn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new Jy(t)})}load(e,t,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Xs.extractUrlBase(e);a=Xs.resolveURL(c,this.path)}else a=Xs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ah(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qh){try{a[ze.KHR_BINARY_GLTF]=new $y(e)}catch(h){n&&n(h);return}r=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new uM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new Dy;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qy(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new eM;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new tM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function Ny(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Uy{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let o;const l=new Ee(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],Et);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new w0(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new b0(l),o.distance=c;break;case"spot":o=new y0(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,pn(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),n=Promise.resolve(o),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],r=(n.extensions&&n.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(a){return i._getNodeRef(t.cache,r,a)})}}class Dy{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return wi}extendParams(e,t,i){const n=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Et),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(n)}}class Oy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class Fy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(r)}}class By{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}}class zy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class ky{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Et)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Vy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Hy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Et),Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class Wy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Et),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Pt)),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ei}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Yy{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ky{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zy{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,n.mode,n.filter),p})})}else return null}}class Jy{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==ti.TRIANGLES&&l.mode!==ti.TRIANGLE_STRIP&&l.mode!==ti.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=i.extensions[this.name].attributes,a=[],o={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const p of h){const g=new Ce,v=new B,m=new Mi,f=new B(1,1,1),_=new t0(p.geometry,p.material,u);for(let M=0;M<u;M++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,M),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,M),o.SCALE&&f.fromBufferAttribute(o.SCALE,M),_.setMatrixAt(M,g.compose(v,m,f));for(const M in o)if(M==="_COLOR_0"){const S=o[M];_.instanceColor=new to(S.array,S.itemSize,S.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,o[M]);ut.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),d.push(_)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const Qh="glTF",Qs=12,eu={JSON:1313821514,BIN:5130562};class $y{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Qs,r=new DataView(e,Qs);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===eu.JSON){const c=new Uint8Array(e,Qs+a,o);this.content=i.decode(c)}else if(l===eu.BIN){const c=Qs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=To[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=To[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],p=Es[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(p)},o,c,Et,d)})})}}class eM{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tM{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class tu extends Ws{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,p=d*u,g=e*c,v=g-c,m=-2*p+3*d,f=p-d,_=1-m,M=f-d+u;for(let S=0;S!==o;S++){const C=a[v+S+o],T=a[v+S+l]*h,R=a[g+S+o],P=a[g+S]*h;r[S]=_*C+M*T+m*R+f*P}return r}}const iM=new Mi;class nM extends tu{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return iM.fromArray(r).normalize().toArray(r),r}}const ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iu={9728:Dt,9729:Xt,9984:jo,9985:or,9986:Ps,9987:Ui},nu={33071:$i,33648:ar,10497:Gn},wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},To={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sM={CUBICSPLINE:void 0,LINEAR:Xn,STEP:Is},Eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ao({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),s.DefaultMaterial}function Nn(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aM(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function oM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lM(s){let e;const t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ao(t.attributes):e=s.indices+":"+Ao(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Ao(s.targets[i]);return e}function Ao(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Ro(s){switch(s){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hM=new Ce;class uM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ny,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new lh(this.options.manager):this.textureLoader=new T0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ah(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Nn(r,o,n),pn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(Xs.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=wo[n.type],o=Es[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Ot(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=wo[n.type],c=Es[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let v,m;if(p&&p!==u){const f=Math.floor(d/p),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let M=t.cache.get(_);M||(v=new c(o,f*p,n.count*p/h),M=new Zv(v,p/h),t.cache.add(_,M)),m=new Ja(M,l,d%p/h,g)}else o===null?v=new c(n.count*l):v=new c(o,d,n.count*l),m=new Ot(v,l,g);if(n.sparse!==void 0){const f=wo.SCALAR,_=Es[n.sparse.indices.componentType],M=n.sparse.indices.byteOffset||0,S=n.sparse.values.byteOffset||0,C=new _(a[1],M,n.sparse.count*f),T=new c(a[2],S,n.sparse.count*l);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized));for(let R=0,P=C.length;R<P;R++){const b=C[R];if(m.setX(b,T[R*l]),l>=2&&m.setY(b,T[R*l+1]),l>=3&&m.setZ(b,T[R*l+2]),l>=4&&m.setW(b,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,r=t.images[n];let a=this.textureLoader;if(r.uri){const o=i.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(e,n,a)}loadTextureImage(e,t,i){const n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=iu[u.magFilter]||Xt,h.minFilter=iu[u.minFilter]||Ui,h.wrapS=nu[u.wrapS]||Gn,h.wrapT=nu[u.wrapT]||Gn,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new bt(v);m.needsUpdate=!0,d(m)}),t.load(Xs.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||cM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Qc,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Yc,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ao}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const u=n[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Et),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=xi);const h=r.alphaMode||Eo.OPAQUE;if(h===Eo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Eo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==wi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==wi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==wi){const u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Et)}return r.emissiveTexture!==void 0&&a!==wi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),pn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Nn(n,u,r),u})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return su(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=lM(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=su(new Ft,c,t),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?rM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const v=h[p],m=a[p];let f;const _=c[p];if(m.mode===ti.TRIANGLES||m.mode===ti.TRIANGLE_STRIP||m.mode===ti.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new $v(v,_):new at(v,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===ti.TRIANGLE_STRIP?f.geometry=$h(f.geometry,Pl):m.mode===ti.TRIANGLE_FAN&&(f.geometry=$h(f.geometry,fa));else if(m.mode===ti.LINES)f=new i0(v,_);else if(m.mode===ti.LINE_STRIP)f=new no(v,_);else if(m.mode===ti.LINE_LOOP)f=new n0(v,_);else if(m.mode===ti.POINTS)f=new s0(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&oM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),pn(f,r),m.extensions&&Nn(n,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Nn(n,u[0],r),u[0];const d=new An;r.extensions&&Nn(n,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new It(Ul.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Va(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ce;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new eo(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const p=n.channels[u],g=n.samplers[p.sampler],v=p.target,m=v.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,_=n.parameters!==void 0?n.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],v=u[3],m=u[4],f=[];for(let _=0,M=d.length;_<M;_++){const S=d[_],C=p[_],T=g[_],R=v[_],P=m[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const b=i._createAnimationTracks(S,C,T,R,P);if(b)for(let y=0;y<b.length;y++)f.push(b[y])}return new u0(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,hM)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Gc:c.length>1?h=new An:c.length===1?h=c[0]:h=new ut,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),pn(h,r),r.extensions&&Nn(i,h,r),r.matrix!==void 0){const u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new An;i.name&&(r.name=n.createUniqueName(i.name)),pn(r,i),i.extensions&&Nn(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of n.associations)(d instanceof pi||d instanceof bt)&&u.set(d,p);return h.traverse(d=>{const p=n.associations.get(d);p!=null&&u.set(d,p)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const a=[],o=e.name?e.name:e.uuid,l=[];dn[r.path]===dn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(dn[r.path]){case dn.weights:c=xs;break;case dn.rotation:c=Pn;break;case dn.position:case dn.scale:c=Ms;break;default:switch(i.itemSize){case 1:c=xs;break;case 2:case 3:default:c=Ms;break}break}const h=n.interpolation!==void 0?sM[n.interpolation]:Xn,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+dn[r.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ro(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof Pn?nM:tu;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dM(s,e,t){const i=e.attributes,n=new $t;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const h=Ro(Es[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new B,l=new B;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=Ro(Es[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new bi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function su(s,e,t){const i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=To[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return Ke.workingColorSpace!==Et&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),pn(s,e),dM(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?aM(s,e.targets,t):s})}var er=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";s=h}var n=(performance||Date).now(),r=n,a=0,o=t(new er.Panel("FPS","#0ff","#002")),l=t(new er.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new er.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){n=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-n,200),h>=r+1e3&&(o.update(a*1e3/(h-r),100),r=h,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:i}};er.Panel=function(s,e,t){var i=1/0,n=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,d=15*a,p=74*a,g=30*a,v=document.createElement("canvas");v.width=o,v.height=l,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(s,c,h),m.fillRect(u,d,p,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,d,p,g),{dom:v,update:function(f,_){i=Math.min(i,f),n=Math.max(n,f),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=e,m.fillText(r(f)+" "+s+" ("+r(i)+"-"+r(n)+")",c,h),m.drawImage(v,u+a,d,p-a,g,u,d,p-a,g),m.fillRect(u+p-a,d,a,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+p-a,d,a,r((1-f/_)*g))}}};var As=Object.freeze({Linear:Object.freeze({None:function(s){return s},In:function(s){return s},Out:function(s){return s},InOut:function(s){return s}}),Quadratic:Object.freeze({In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}}),Cubic:Object.freeze({In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}}),Quartic:Object.freeze({In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}}),Quintic:Object.freeze({In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}}),Sinusoidal:Object.freeze({In:function(s){return 1-Math.sin((1-s)*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))}}),Exponential:Object.freeze({In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}}),Circular:Object.freeze({In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}}),Elastic:Object.freeze({In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}}),Bounce:Object.freeze({In:function(s){return 1-As.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?As.Bounce.In(s*2)*.5:As.Bounce.Out(s*2-1)*.5+.5}}),generatePow:function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:function(e){return Math.pow(e,s)},Out:function(e){return 1-Math.pow(1-e,s)},InOut:function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5}}}}),Rs=function(){return performance.now()},ru=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},s.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},s.prototype.update=function(e,t){e===void 0&&(e=Rs()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<i.length;n++){var r=this._tweens[i[n]],a=!t;r&&r.update(e,a)===!1&&!t&&delete this._tweens[i[n]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),Un={Linear:function(s,e){var t=s.length-1,i=t*e,n=Math.floor(i),r=Un.Utils.Linear;return e<0?r(s[0],s[1],i):e>1?r(s[t],s[t-1],t-i):r(s[n],s[n+1>t?t:n+1],i-n)},Bezier:function(s,e){for(var t=0,i=s.length-1,n=Math.pow,r=Un.Utils.Bernstein,a=0;a<=i;a++)t+=n(1-e,i-a)*n(e,a)*s[a]*r(i,a);return t},CatmullRom:function(s,e){var t=s.length-1,i=t*e,n=Math.floor(i),r=Un.Utils.CatmullRom;return s[0]===s[t]?(e<0&&(n=Math.floor(i=t*(1+e))),r(s[(n-1+t)%t],s[n],s[(n+1)%t],s[(n+2)%t],i-n)):e<0?s[0]-(r(s[0],s[0],s[1],s[1],-i)-s[0]):e>1?s[t]-(r(s[t],s[t],s[t-1],s[t-1],i-t)-s[t]):r(s[n?n-1:0],s[n],s[t<n+1?t:n+1],s[t<n+2?t:n+2],i-n)},Utils:{Linear:function(s,e,t){return(e-s)*t+s},Bernstein:function(s,e){var t=Un.Utils.Factorial;return t(s)/t(e)/t(s-e)},Factorial:function(){var s=[1];return function(e){var t=1;if(s[e])return s[e];for(var i=e;i>1;i--)t*=i;return s[e]=t,t}}(),CatmullRom:function(s,e,t,i,n){var r=(t-s)*.5,a=(i-e)*.5,o=n*n,l=n*o;return(2*e-2*t+r+a)*l+(-3*e+3*t-2*r-a)*o+r*n+e}}},Po=function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Co=new ru,pM=function(){function s(e,t){t===void 0&&(t=Co),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=As.Linear.None,this._interpolationFunction=Un.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Po.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=Rs()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var r in this._valuesEnd)n[r]=this._valuesEnd[r];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,i,n,r){for(var a in i){var o=e[a],l=Array.isArray(o),c=l?"array":typeof o,h=!l&&Array.isArray(i[a]);if(!(c==="undefined"||c==="function")){if(h){var u=i[a];if(u.length===0)continue;for(var d=[o],p=0,g=u.length;p<g;p+=1){var v=this._handleRelativeValue(o,u[p]);if(isNaN(v)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(v)}h&&(i[a]=d)}if((c==="object"||l)&&o&&!h){t[a]=l?[]:{};var m=o;for(var f in m)t[a][f]=m[f];n[a]=l?[]:{};var u=i[a];if(!this._isDynamic){var _={};for(var f in u)_[f]=u[f];i[a]=u=_}this._setupProperties(m,t[a],u,n[a],r)}else(typeof t[a]>"u"||r)&&(t[a]=o),l||(t[a]*=1),h?n[a]=i[a].slice().reverse():n[a]=t[a]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(e){return e===void 0&&(e=Rs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},s.prototype.resume=function(e){return e===void 0&&(e=Rs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e===void 0&&(e=Co),this._group=e,this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=As.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=Un.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){var i;if(e===void 0&&(e=Rs()),t===void 0&&(t=!0),this._isPaused)return!0;var n=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>n)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var r=e-this._startTime,a=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),o=this._duration+this._repeat*a,l=this._calculateElapsedPortion(r,a,o),c=this._easingFunction(l),h=this._calculateCompletionStatus(r,a);if(h==="repeat"&&this._processRepetition(r,a),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,c),h==="about-to-repeat"&&this._processRepetition(r,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,l),h==="repeat"||h==="about-to-repeat")this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1;else if(h==="completed"){this._isPlaying=!1,this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,d=this._chainedTweens.length;u<d;u++)this._chainedTweens[u].start(this._startTime+this._duration,!1)}return h!=="completed"},s.prototype._calculateElapsedPortion=function(e,t,i){if(this._duration===0||e>i)return 1;var n=e%t,r=Math.min(n/this._duration,1);return r===0&&e!==0&&e%this._duration===0?1:r},s.prototype._calculateCompletionStatus=function(e,t){return this._duration!==0&&e<this._duration?"playing":this._repeat<=0?"completed":e===this._duration?"about-to-repeat":"repeat"},s.prototype._processRepetition=function(e,t){var i=Math.min(Math.trunc((e-this._duration)/t)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=i);for(var n in this._valuesStartRepeat){var r=this._valuesEnd[n];!this._yoyo&&typeof r=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(r)),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}this._yoyo&&(this._reversed=!this._reversed),this._startTime+=t*i},s.prototype._updateProperties=function(e,t,i,n){for(var r in i)if(t[r]!==void 0){var a=t[r]||0,o=i[r],l=Array.isArray(e[r]),c=Array.isArray(o),h=!l&&c;h?e[r]=this._interpolationFunction(o,n):typeof o=="object"&&o?this._updateProperties(e[r],a,o,n):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[r]=a+(o-a)*n))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s}(),mM="23.1.2",fM=Po.nextId,Li=Co,gM=Li.getAll.bind(Li),vM=Li.removeAll.bind(Li),_M=Li.add.bind(Li),xM=Li.remove.bind(Li),yM=Li.update.bind(Li),Lo={Easing:As,Group:ru,Interpolation:Un,now:Rs,Sequence:Po,nextId:fM,Tween:pM,VERSION:mM,getAll:gM,removeAll:vM,add:_M,remove:xM,update:yM};class MM{constructor(e,t,i,n,r,a){me(this,"scene");me(this,"world");me(this,"groundBodyMaterial");me(this,"loader",new qi);me(this,"canvas");me(this,"camera");me(this,"mouse");me(this,"raycaster");me(this,"clickables",[]);me(this,"carBody");me(this,"lastOpenedTime",0);me(this,"cooldown",5e3);this.scene=e,this.world=t,this.groundBodyMaterial=i,this.mouse=new Me,this.raycaster=new ph,this.canvas=r,this.camera=n,this.carBody=a,this.addBorder(),this.addPropsGLTF("./assets/playground/trees/twinTrees.glb",{x:17.5,y:0,z:15},{x:1,y:1,z:1},{x:0,y:Math.PI/2,z:0}),this.socialsSetup({x:40,y:2,z:0},{x:1,y:1,z:1}),this.addPropsGLTF("./assets/playground/plane/grndFin3.glb",{x:0,y:-.5,z:0},{x:1,y:1,z:1},{x:0,y:Math.PI,z:0}),this.addPropsGLTF("./assets/playground/miscelleneous/controlInstructions.glb",{x:-55,y:2,z:-22},{x:1,y:1,z:1},{x:0,y:-Math.PI/4,z:0}),this.canvas.addEventListener("click",this.onDocumentMouseClick.bind(this)),this.createTexturedSky(this.scene),this.addInnerBorder()}addInnerBorder(){const e=new mt(new x(31.5,2.5,14)),t=new ne({mass:0,material:this.groundBodyMaterial});t.addShape(e),t.position.set(-6.95,1,-14.65),this.world.addBody(t)}createTexturedSky(e){const t=new v0().load(["./assets/skybox/px.jpg","./assets/skybox/nx.jpg","./assets/skybox/py.jpg","./assets/skybox/ny.jpg","./assets/skybox/pz.jpg","./assets/skybox/nz.jpg"]);e.background=t}socialsSetup(e,t){this.addPropsGLTF("./assets/socials/github.glb",{x:e.x,y:e.y,z:e.z},t,{x:Math.PI/2,y:0,z:Math.PI/2}),this.createCannonBody(new $r(1.8,1.8,1,8),{x:e.x,y:e.y,z:e.z},{x:0,y:0,z:1,angle:Math.PI/2},0,"github"),this.addPropsGLTF("./assets/socials/linkedIn.glb",{x:e.x,y:e.y,z:e.z-10},t,{x:Math.PI/2,y:0,z:Math.PI/2}),this.createCannonBody(new mt(new x(.3,1.5,1.5)),{x:e.x,y:e.y,z:e.z-10},{x:0,y:0,z:0,angle:0},0,"linkedIn"),this.addPropsGLTF("./assets/socials/mail.glb",{x:e.x,y:e.y,z:e.z-20},t,{x:Math.PI/2,y:0,z:Math.PI/2}),this.createCannonBody(new mt(new x(.3,1.5,1.5)),{x:e.x,y:e.y,z:e.z-20},{x:0,y:0,z:0,angle:0},0,"email"),this.addPropsGLTF("./assets/socials/X.glb",{x:e.x,y:e.y,z:e.z-30},t,{x:Math.PI/2,y:0,z:Math.PI/2}),this.createCannonBody(new mt(new x(.3,1.5,1.5)),{x:e.x,y:e.y,z:e.z-30},{x:0,y:0,z:0,angle:0},0,"twitter")}addPropsGLTF(e,t,i,n){this.loader.load(e,r=>{const a=r.scene;a.scale.set(i.x,i.y,i.z),a.rotation.set(n.x,n.y,n.z),a.position.set(t.x,t.y,t.z),this.scene.add(a),this.clickables.push(a)})}addBorder(){[{x:0,y:-2.5,z:-62.5,sizeX:125,sizeY:5,sizeZ:5},{x:0,y:-2.5,z:62.5,sizeX:125,sizeY:5,sizeZ:5},{x:-62.5,y:-2.5,z:0,sizeX:5,sizeY:5,sizeZ:125},{x:62.5,y:-2.5,z:0,sizeX:5,sizeY:5,sizeZ:125}].forEach(e=>{const t=new mt(new x(e.sizeX/2,e.sizeY/2,e.sizeZ/2)),i=new ne({mass:0,material:this.groundBodyMaterial});i.addShape(t),i.position.set(e.x,-e.y,e.z),this.world.addBody(i)})}createCannonBody(e,t,i,n,r){const a=new ne({mass:n,shape:e,position:new x(t.x,t.y,t.z)});a.quaternion.setFromAxisAngle(new x(i.x,i.y,i.z),i.angle),a.addEventListener("collide",o=>{this.handleCollision(o,r)}),this.world.addBody(a)}handleCollision(e,t){let i=Date.now();if(i-this.lastOpenedTime<this.cooldown)return;const n=e.body,r=e.target;(n===this.carBody||r===this.carBody)&&(this.lastOpenedTime=i,console.log(this.lastOpenedTime),t==="email"?window.open("mailto:write2chimbu@gmail.com"):t==="github"?window.open("https://github.com/ChinmayAnandS","_blank"):t==="linkedIn"?window.open("https://www.linkedin.com/in/chinmay-anand-s","_blank"):t==="twitter"&&window.open("https://x.com/k0d3_whisker","_blank"))}onDocumentMouseClick(e){e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.clickables,!0);if(t.length>0){const i=t[0].object;i.name.includes("email")?window.open("mailto:write2chimbu@gmail.com"):i.name.includes("github")?window.open("https://github.com/ChinmayAnandS","_blank"):i.name.includes("linkedIn")?window.open("https://www.linkedin.com/in/chinmay-anand-s-a61162202","_blank"):i.name.includes("twitter")&&window.open("https://x.com/k0d3_whisker","_blank")}}}class au extends ne{constructor(t){super(t);me(this,"userData",{})}}class bM{constructor(e,t,i,n,r,a,o,l,c){me(this,"world");me(this,"scene");me(this,"wallPosition");me(this,"brickSize");me(this,"brickOffset");me(this,"rows");me(this,"columns");me(this,"arrangementType");me(this,"bricks",[]);me(this,"brickPhysicsMaterial");this.world=e,this.scene=t,this.wallPosition=n,this.brickSize=r,this.brickOffset=a,this.rows=o,this.columns=l,this.arrangementType=c,this.brickPhysicsMaterial=new vi("brickMaterial");const h=new ei(this.brickPhysicsMaterial,this.brickPhysicsMaterial,{friction:.9,restitution:.1});this.world.addContactMaterial(h);const u=new ei(i,this.brickPhysicsMaterial,{friction:.9,restitution:.1});this.world.addContactMaterial(u),this.initBricks()}initBricks(){const{x:e,y:t,z:i}=this.brickSize,n=new mi(e,t,i),r=new wi({color:12369084});switch(this.arrangementType){case 1:this.createStackedBricks(n,r,e,t);break;case 2:this.createStaggeredBricks(n,r,e,t);break;case 3:this.createTriangularBricks(n,r,e,t);break;default:console.error("Invalid arrangement type");break}}createStackedBricks(e,t,i,n){for(let r=0;r<this.rows;r++)for(let a=0;a<this.columns;a++){const o=(a-this.columns/2)*(i+this.brickOffset)+this.wallPosition.x,l=(r+.5)*(n+this.brickOffset)+this.wallPosition.y,c=this.wallPosition.z;this.createBrick(e,t,o,l,c)}}createStaggeredBricks(e,t,i,n){for(let r=0;r<this.rows;r++){const a=r%2===0?this.columns-1:this.columns;for(let o=0;o<a;o++){const l=(o-a/2)*(i+this.brickOffset)+this.wallPosition.x,c=(r+.5)*(n+this.brickOffset)+this.wallPosition.y,h=this.wallPosition.z;this.createBrick(e,t,l,c,h)}}}createTriangularBricks(e,t,i,n){for(let r=0;r<this.rows;r++){const a=this.columns-r;for(let o=0;o<a;o++){const l=(o-a/2)*(i+this.brickOffset)+this.wallPosition.x,c=(r+.5)*(n+this.brickOffset)+this.wallPosition.y,h=this.wallPosition.z;this.createBrick(e,t,l,c,h)}}}createBrick(e,t,i,n,r){const{x:a,y:o,z:l}=this.brickSize,c=new mt(new x(a/2,o/2,l/2)),h=new au({mass:1,position:new x(i,n,r),shape:c,material:this.brickPhysicsMaterial});h.fixedRotation=!0,h.updateMassProperties(),this.world.addBody(h);const u=new at(e,t);u.position.set(i,n,r),this.scene.add(u),h.userData={isBrick:!0},this.bricks.push({body:h,mesh:u})}onCollision(e){var n,r,a,o;const t=e.body,i=e.target;(n=t.userData)!=null&&n.isCube&&((r=i.userData)!=null&&r.isBrick)?(i.mass=1,i.fixedRotation=!1,i.updateMassProperties()):(a=i.userData)!=null&&a.isCube&&((o=t.userData)!=null&&o.isBrick)&&(t.mass=1,t.fixedRotation=!1,t.updateMassProperties())}addCollisionListeners(e){e.userData={isCube:!0},this.bricks.forEach(t=>{t.body.addEventListener("collide",this.onCollision.bind(this))})}update(){this.bricks.forEach(e=>{e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion)})}}function ou(s,e,t,i,n){new qi().load(n,r=>{const a=r.scene;a.scale.set(t.x,t.y,t.z),a.quaternion.setFromAxisAngle(new B(i.x,i.y,i.z),i.angle),a.position.set(e.x,e.y,e.z),s.add(a)})}function Io(s,e,t,i){const n=new ne({mass:0,position:new x(e.x,e.y,e.z),quaternion:new ot().setFromAxisAngle(new x(i.x,i.y,i.z),i.angle),shape:new mt(new x(t.x/2,t.y/2,t.z/2))});s.addBody(n)}class SM{constructor(e,t,i,n,r,a,o,l){me(this,"scene");me(this,"world");me(this,"ballPosition");me(this,"pinsPosition");me(this,"rows");me(this,"pins",[]);me(this,"pinBodies",[]);me(this,"ballPhysicsMaterial");me(this,"pinPhysicsMaterial");me(this,"GLTFloader");me(this,"ballMesh");me(this,"ballBody");me(this,"pinMesh");me(this,"ballRadius");me(this,"pinDim");me(this,"modelsLoaded");this.scene=e,this.world=t,this.ballPosition=n,this.pinsPosition=r,this.rows=l,this.GLTFloader=new qi,this.ballRadius=a.radius,this.pinDim=o,this.modelsLoaded=!1,this.ballPhysicsMaterial=new vi("ballMaterial"),this.pinPhysicsMaterial=new vi("pinMaterial");const c=new ei(this.ballPhysicsMaterial,this.pinPhysicsMaterial,{friction:10,restitution:.9});this.world.addContactMaterial(c);const h=new ei(this.pinPhysicsMaterial,this.pinPhysicsMaterial,{friction:.9,restitution:1.5});this.world.addContactMaterial(h);const u=new ei(this.ballPhysicsMaterial,i,{friction:.9,restitution:.1});this.world.addContactMaterial(u);const d=new ei(this.pinPhysicsMaterial,i,{friction:.9,restitution:.1});this.world.addContactMaterial(d),this.initBowling()}initBowling(){let e=4;this.loadModels(),ou(this.scene,{x:this.ballPosition.x,y:0,z:this.ballPosition.z+20},{x:1,y:1,z:1},{x:0,y:1,z:0,angle:Math.PI/2},"./assets/playground/bowling/fenceStructure.glb"),Io(this.world,{x:this.ballPosition.x-e,y:0,z:this.ballPosition.z+18.5},{x:35,y:2.5,z:.3},{x:0,y:1,z:0,angle:Math.PI/2}),Io(this.world,{x:this.ballPosition.x+e,y:0,z:this.ballPosition.z+18.5},{x:35,y:2.5,z:.3},{x:0,y:1,z:0,angle:Math.PI/2}),Io(this.world,{x:this.ballPosition.x,y:0,z:this.pinsPosition.z+2*e+2.5},{x:.3,y:2.5,z:8},{x:0,y:1,z:0,angle:Math.PI/2})}loadModels(){this.GLTFloader.load("./assets/playground/bowling/bowlingBall.glb",e=>{const t=e.scene;t.scale.set(1,1,1),this.ballMesh=t,this.setupBall(),this.checkModelLoaded()}),this.GLTFloader.load("./assets/playground/bowling/bowlingPin.glb",e=>{const t=e.scene;t.position.y=0,t.scale.set(.7,.7,.7),this.pinMesh=t,this.createPinsInTriangle(),this.checkModelLoaded()})}checkModelLoaded(){this.ballMesh&&this.pinMesh&&(this.modelsLoaded=!0)}setupBall(){const{x:e,y:t,z:i}=this.ballPosition,n=new ox(this.ballRadius);this.ballBody=new ne({mass:50,material:this.ballPhysicsMaterial,shape:n,position:new x(e,t,i)}),this.world.addBody(this.ballBody),this.ballMesh.position.set(e,t,i),this.scene.add(this.ballMesh)}createPinsInTriangle(){const e=this.pinDim.height,{x:t,y:i,z:n}=this.pinsPosition,r=.5*2+.05,a=-(this.rows-1)*r/2;for(let o=0;o<this.rows;o++)for(let l=0;l<=o;l++){const c=l*r-o*r/2,h=t+c,u=n+o*r+a,d=i+e/2;this.createPin(h,d,u)}}createPin(e,t,i){const n=this.pinMesh.clone();n.position.set(e,0,i),this.scene.add(n);const r=new $r(this.pinDim.topRadius,this.pinDim.bottomRadius,this.pinDim.height,this.pinDim.pinSegments),a=new ne({mass:1,material:this.pinPhysicsMaterial});a.addShape(r),a.position.set(e,t,i),this.world.addBody(a),this.pins.push(n),this.pinBodies.push(a)}update(){if(this.modelsLoaded){this.ballMesh.position.copy(this.ballBody.position),this.ballMesh.quaternion.copy(this.ballBody.quaternion);for(let e=0;e<this.pins.length;e++)this.pins[e].position.copy(this.pinBodies[e].position),this.pins[e].quaternion.copy(this.pinBodies[e].quaternion)}}}class wM{constructor(e,t,i,n,r){me(this,"scene");me(this,"world");me(this,"rampPosition");me(this,"rampSize");me(this,"rampAngle");me(this,"rampPhysicsMaterial");me(this,"rampMesh");me(this,"rampBody");this.scene=e,this.world=t,this.rampPosition=i,this.rampSize=n,this.rampAngle=r,this.rampPhysicsMaterial=new vi("rampMaterial"),this.initRamp(),this.initLandingRamp()}initRamp(){const{width:e,height:t,depth:i}=this.rampSize,n=new mi(e,t,i),r=new ih({color:16753203});this.rampMesh=new at(n,r),this.rampMesh.position.set(this.rampPosition.x,this.rampPosition.y,this.rampPosition.z),this.rampMesh.setRotationFromAxisAngle(new B(this.rampAngle.x,this.rampAngle.y,this.rampAngle.z),this.rampAngle.angle),this.scene.add(this.rampMesh),this.rampBody=new ne({mass:0,material:this.rampPhysicsMaterial}),this.rampBody.addShape(new mt(new x(e/2,t/2,i/2))),this.rampBody.position.set(this.rampPosition.x,this.rampPosition.y,this.rampPosition.z),this.rampBody.quaternion.setFromAxisAngle(new x(this.rampAngle.x,this.rampAngle.y,this.rampAngle.z),this.rampAngle.angle),this.world.addBody(this.rampBody)}initLandingRamp(){const{width:e,height:t,depth:i}=this.rampSize,n=new mi(e,t,i),r=new ih({color:16753203});this.rampMesh=new at(n,r),this.rampMesh.position.set(this.rampPosition.x,this.rampPosition.y,this.rampPosition.z+25),this.rampMesh.setRotationFromAxisAngle(new B(this.rampAngle.x,this.rampAngle.y,this.rampAngle.z),-this.rampAngle.angle),this.scene.add(this.rampMesh),this.rampBody=new ne({mass:0,material:this.rampPhysicsMaterial}),this.rampBody.addShape(new mt(new x(e/2,t/2,i/2))),this.rampBody.position.set(this.rampPosition.x,this.rampPosition.y,this.rampPosition.z+25),this.rampBody.quaternion.setFromAxisAngle(new x(this.rampAngle.x,this.rampAngle.y,this.rampAngle.z),-this.rampAngle.angle),this.world.addBody(this.rampBody)}}class TM{constructor(e,t,i,n){me(this,"scene");me(this,"world");me(this,"textPosition");me(this,"model");me(this,"body");me(this,"textboxMaterial");me(this,"groundBodyMaterial");me(this,"model1");me(this,"body1");me(this,"model2");me(this,"body2");this.scene=e,this.world=i,this.textPosition=n,this.groundBodyMaterial=t,this.textboxMaterial=new vi("textboxMaterial");const r=new ei(this.groundBodyMaterial,this.textboxMaterial,{friction:10,restitution:.1});this.world.addContactMaterial(r),this.initFirstNameText(),this.initLastNameText(),this.initInitialsText()}initFirstNameText(){new qi().load("./assets/playground/miscelleneous/firstName1.glb",e=>{this.model=e.scene.children[0],this.model.scale.set(1.5,1.5,1.5),this.model.position.set(this.textPosition.x,this.textPosition.y,this.textPosition.z),this.scene.add(this.model),this.createCannonBody()},void 0,e=>{console.error("An error occurred loading the font:",e)})}initLastNameText(){new qi().load("./assets/playground/miscelleneous/lastName1.glb",e=>{this.model1=e.scene.children[0],this.model1.scale.set(1.5,1.5,1.5),this.model1.position.set(this.textPosition.x,this.textPosition.y,this.textPosition.z+5.5),this.scene.add(this.model1),this.createCannonBody1()},void 0,e=>{console.error("An error occurred loading the font:",e)})}initInitialsText(){new qi().load("./assets/playground/miscelleneous/initial1.glb",e=>{this.model2=e.scene.children[0],this.model2.scale.set(1.5,2,1.5),this.model2.position.set(this.textPosition.x,this.textPosition.y,this.textPosition.z),this.scene.add(this.model2),this.createCannonBody2()},void 0,e=>{console.error("An error occurred loading the font:",e)})}createCannonBody(){const e=new $t().setFromObject(this.model),t=new B;e.getSize(t);const i=new x(t.x/2,t.y/2+.3,t.z/2-.2),n=new mt(i);this.body=new ne({mass:50,position:new x(this.model.position.x,this.model.position.y+2,this.model.position.z),material:this.textboxMaterial,shape:n}),this.body.quaternion.setFromAxisAngle(new x(0,1,0),-Math.PI/2),this.world.addBody(this.body)}createCannonBody1(){const e=new $t().setFromObject(this.model1),t=new B;e.getSize(t);const i=new x(t.x/2,t.y/2+.05,t.z/2),n=new mt(i);this.body1=new ne({mass:10,position:new x(this.model1.position.x,this.model1.position.y+2,this.model1.position.z),material:this.textboxMaterial,shape:n}),this.body1.quaternion.setFromAxisAngle(new x(0,1,0),-Math.PI/2),this.world.addBody(this.body1)}createCannonBody2(){const e=new $t().setFromObject(this.model2),t=new B;e.getSize(t);const i=new x(t.x/2,t.y/2,t.z/2),n=new mt(i);this.body2=new ne({mass:50,position:new x(this.model1.position.x,this.model1.position.y+2,this.model1.position.z+3),material:this.textboxMaterial,shape:n}),this.body2.quaternion.setFromAxisAngle(new x(0,1,0),-Math.PI/2),this.world.addBody(this.body2)}updateTextPhysics(){this.model===void 0||this.body===void 0||(this.model.position.copy(this.body.position),this.model.quaternion.copy(this.body.quaternion),!(this.model1===void 0||this.body1===void 0)&&(this.model1.position.copy(this.body1.position),this.model1.quaternion.copy(this.body1.quaternion),!(this.model2===void 0||this.body2===void 0)&&(this.model2.position.copy(this.body2.position),this.model2.quaternion.copy(this.body2.quaternion))))}}class EM{constructor(e,t,i){const n=new qi;n.load("./assets/playground/signBoard/playgroundBoard.glb",c=>{const h=c.scene;h.scale.set(1,1,1),h.rotation.y=Math.PI/2,h.position.set(i.x,i.y,i.z+5),e.add(h)}),n.load("./assets/playground/signBoard/projectsBoard.glb",c=>{const h=c.scene;h.scale.set(1,1,1),h.rotation.y=Math.PI/2,h.position.set(i.x,i.y,i.z-16.5),e.add(h)}),n.load("./assets/playground/signBoard/socialsBoard1.glb",c=>{const h=c.scene;h.scale.set(1,1,1),h.rotation.y=Math.PI/2,h.position.set(i.x,i.y,i.z-17.3),e.add(h)});const r=new ne({mass:0});r.addShape(new mt(new x(.1,3,.1))),r.position.set(i.x,i.y+1.5,i.z-4.25),t.addBody(r);const a=new ne({mass:0});a.addShape(new mt(new x(.1,3,.1))),a.position.set(i.x,i.y+1.5,i.z-15.8),t.addBody(a);const o=new ne({mass:0});o.addShape(new mt(new x(.1,3,.1))),o.position.set(i.x,i.y+1.5,i.z-7.7),t.addBody(o);const l=new ne({mass:0});l.addShape(new mt(new x(.1,3,.1))),l.position.set(i.x,i.y+1.5,i.z-12.2),t.addBody(l)}}class AM{constructor(e,t,i,n,r,a,o){me(this,"scene");me(this,"world");me(this,"position");me(this,"rotation");me(this,"TextureLoader");me(this,"raycaster");me(this,"mouse");me(this,"mesh");me(this,"link");me(this,"camera");me(this,"camera1");me(this,"carBody");me(this,"lastOpenedTime",0);me(this,"cooldown",5e3);this.scene=e,this.camera=t,this.camera1=i,this.world=n,this.position=r,this.rotation=a,this.raycaster=new ph,this.mouse=new Me,this.carBody=o,this.TextureLoader=new lh,this.init()}init(){ou(this.scene,this.position,{x:1,y:1,z:1},this.rotation,"./assets/project/projectBanner.glb"),this.addPhotoToBanner(),window.addEventListener("click",this.onDocumentMouseClick.bind(this),!1),window.addEventListener("click",this.onDocumentMouseClick1.bind(this),!1),this.createCannonBody(new $r(.5,.5,4,8),this.position,this.rotation,0)}addPhotoToBanner(){this.link="https://chinmayanands.github.io/GPAgenerator/",this.TextureLoader.load("./assets/project/projectPictures/GPAGenerator.jpg",e=>{let t=new wi({map:e}),i=new mi(11,5.5,.01);this.mesh=new at(i,t),this.mesh.position.set(this.position.x,this.position.y+4.5,this.position.z+.3),this.mesh.rotation.y=-Math.PI/6,this.scene.add(this.mesh)})}onDocumentMouseClick(e){e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children);t.length>0&&t[0].object===this.mesh&&window.open(this.link,"_blank")}onDocumentMouseClick1(e){e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera1);const t=this.raycaster.intersectObjects(this.scene.children);t.length>0&&t[0].object===this.mesh&&window.open(this.link,"_blank")}createCannonBody(e,t,i,n){const r=new ne({mass:n,shape:e,position:new x(t.x,t.y,t.z)});r.quaternion.setFromAxisAngle(new x(i.x,i.y,i.z),i.angle),r.addEventListener("collide",a=>{this.handleCollision(a)}),this.world.addBody(r)}handleCollision(e){let t=Date.now();if(t-this.lastOpenedTime<this.cooldown)return;const i=e.body,n=e.target;(i===this.carBody||n===this.carBody)&&(this.lastOpenedTime=t,console.log(this.lastOpenedTime),window.open(this.link,"_blank"))}}const Zt=new Kv,RM=new _0(16777147,16408405,4);Zt.add(RM);const ii=new It(75,window.innerWidth/window.innerHeight,.1,1e3);ii.position.set(-40,3.31,-20);const PM={x:-62.92,y:4.71,z:-15.04},Dn=new It(75,window.innerWidth/window.innerHeight,.1,1e3);Dn.position.set(0,0,0);const CM=new Lo.Tween(ii.position).to(PM,2e3).onUpdate(()=>{ii.position.set(ii.position.x,ii.position.y,ii.position.z)}).easing(Lo.Easing.Quadratic.InOut);setTimeout(()=>{CM.start()},1500);const On=new Yv;On.setSize(window.innerWidth,window.innerHeight),On.shadowMap.enabled=!0,document.body.appendChild(On.domElement),window.addEventListener("resize",()=>{ii.aspect=window.innerWidth/window.innerHeight,ii.updateProjectionMatrix(),Dn.aspect=window.innerWidth/window.innerHeight,Dn.updateProjectionMatrix(),On.setSize(window.innerWidth,window.innerHeight)});const Wt=new O0(ii,On.domElement);Wt.enablePan=!1,Wt.enableDamping=!0,Wt.dampingFactor=.1,Wt.enableZoom=!0,Wt.maxDistance=8,Wt.minDistance=3,Wt.maxPolarAngle=Math.PI/3,Wt.minPolarAngle=0,Wt.cursor=new B(10,10,10);const Tt=new Ty({gravity:new x(0,-10,0)}),_i={length:1.7,width:.25,height:.75},vt=new au({mass:300,shape:new mt(new x(_i.length,_i.width,_i.height))});vt.position.set(-56,5,-15),vt.angularVelocity.set(0,-.5,0),vt.quaternion.setFromAxisAngle(new x(0,1,0),Math.PI),vt.angularDamping=.1;const LM=new mt(new x(.01,.01,.75)),IM=new x(-1.75,-.5,0);vt.addShape(LM,IM);const NM=new mt(new x(.1,.2,.75)),UM=new x(2,-.25,0);vt.addShape(NM,UM),Tt.addBody(vt);const $e=new B_({chassisBody:vt}),Yi={radius:.3,directionLocal:new x(0,-1,0),suspensionStiffness:30,suspensionRestLength:.3,frictionSlip:1.5,dampingRelaxation:2.3,dampingCompression:4.4,maxSuspensionForce:1e5,rollInfluence:.01,axleLocal:new x(0,0,1),chassisConnectionPointLocal:new x(-1,0,1),maxSuspensionTravel:.3,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0,segments:16};Yi.chassisConnectionPointLocal.set(-_i.length+.47,-.2,_i.height),$e.addWheel(Yi),Yi.chassisConnectionPointLocal.set(-_i.length+.47,-.2,-_i.height),$e.addWheel(Yi),Yi.chassisConnectionPointLocal.set(_i.length-.7,-.2,_i.height),$e.addWheel(Yi),Yi.chassisConnectionPointLocal.set(_i.length-.7,-.2,-_i.height),$e.addWheel(Yi),$e.addToWorld(Tt);const ta=[],lu=new vi("wheel");$e.wheelInfos.forEach(s=>{const e=new $r(s.radius,s.radius,s.radius,Yi.segments),t=new ne({mass:0,material:lu});t.type=ne.KINEMATIC,t.collisionFilterGroup=0;const i=new ot().setFromEuler(Math.PI/2,0,0);t.addShape(e,new x,i),ta.push(t),Tt.addBody(t)}),Tt.addEventListener("postStep",()=>{for(let s=0;s<$e.wheelInfos.length;s++){$e.updateWheelTransform(s);const e=$e.wheelInfos[s].worldTransform,t=ta[s];t&&(t.position.copy(e.position),t.quaternion.copy(e.quaternion))}});const Ki=new ne({mass:0,shape:new Xh,type:ne.STATIC});Ki.material=new vi("ground"),Ki.quaternion.setFromEuler(-Math.PI/2,0,0),Ki.addShape(new Xh),Tt.addBody(Ki);const DM=new ei(lu,Ki.material,{friction:10,restitution:0,contactEquationStiffness:1e3});Tt.addContactMaterial(DM);const kt={maxSteerVal:.75,maxForce:1e3,brakeForce:1e6,handBrakeForce:1e3,maxSpeed:100,nosBoost:1e3,resetCar:()=>{vt.position.set(-56,5,-15),vt.velocity.set(0,0,0),vt.angularVelocity.set(0,-.5,0),vt.quaternion.setFromAxisAngle(new x(0,1,0),Math.PI)}};document.addEventListener("keydown",s=>{switch(s.key){case"w":case"W":case"ArrowUp":$e.applyEngineForce(-kt.maxForce,2),$e.applyEngineForce(-kt.maxForce,3);break;case"s":case"S":case"ArrowDown":$e.applyEngineForce(kt.maxForce,2),$e.applyEngineForce(kt.maxForce,3);break;case"a":case"A":case"ArrowLeft":$e.setSteeringValue(kt.maxSteerVal,0),$e.setSteeringValue(kt.maxSteerVal,1);break;case"d":case"D":case"ArrowRight":$e.setSteeringValue(-kt.maxSteerVal,0),$e.setSteeringValue(-kt.maxSteerVal,1);break;case" ":$e.setBrake(kt.brakeForce,2),$e.setBrake(kt.brakeForce,3);break;case"Shift":$e.applyEngineForce(-kt.nosBoost-kt.maxForce,2),$e.applyEngineForce(-kt.nosBoost-kt.maxForce,3);break;case"r":case"R":kt.resetCar();break}}),document.addEventListener("keyup",s=>{switch(s.key){case"w":case"W":case"ArrowUp":case"s":case"S":case"ArrowDown":case"Shift":$e.applyEngineForce(0,2),$e.applyEngineForce(0,3);break;case"a":case"A":case"ArrowLeft":case"d":case"D":case"ArrowRight":$e.setSteeringValue(0,0),$e.setSteeringValue(0,1);break;case" ":$e.setBrake(0,0),$e.setBrake(0,1),$e.setBrake(0,2),$e.setBrake(0,3);break}});const cu=document.getElementById("progressBar");let ni;new qi().load("./assets/car/LowPolyCar3.glb",s=>{cu.style.display="none",ni=s.scene,ni.scale.set(1,1,1),Zt.add(ni)},s=>{const e=s.loaded/s.total*100;cu.value=e===1/0?100:e});let tr=[];const hu=new qi;hu.load("./assets/car/carWheel3.glb",s=>{const e=s.scene;for(let t=0;t<4;t++){if(t===1||t===3)continue;let i=e.clone();Zt.add(i),tr[t]=i}}),hu.load("./assets/car/carWheel2.glb",s=>{const e=s.scene;for(let t=0;t<4;t++){if(t===0||t===2)continue;let i=e.clone();Zt.add(i),tr[t]=i}console.log(tr)}),new MM(Zt,Tt,Ki.material,ii,On.domElement,vt);let uu=[];for(let s=0;s<3;s++){const e={x:-30,y:0,z:15+s*10},t={x:1,y:.5,z:.5},i=.05,n=4,r=4,a=new bM(Tt,Zt,Ki.material,e,t,i,n,r,s+1);a.addCollisionListeners(vt),uu.push(a)}const OM={x:0,y:1,z:10},FM={x:0,y:1,z:35},BM={radius:1,ballSegments:32},zM={topRadius:.1,bottomRadius:.5,height:2.5,pinSegments:16},kM=4,VM=new SM(Zt,Tt,Ki.material,OM,FM,BM,zM,kM),HM={x:30,y:0,z:15},GM={width:5,height:1,depth:5},WM={x:1,y:0,z:0,angle:-Math.PI/6};new wM(Zt,Tt,HM,GM,WM);const jM=new TM(Zt,Ki.material,Tt,{x:-45,y:1,z:-18});new EM(Zt,Tt,{x:-40,y:0,z:-5}),new AM(Zt,ii,Dn,Tt,{x:-35,y:0,z:-45},{x:0,y:1,z:0,angle:-Math.PI/6},vt);const du=new er;document.body.appendChild(du.dom),Tt.broadphase=new Ss(Tt),Tt.defaultContactMaterial.friction=0;const XM=new Iy(Zt,Tt);function pu(){Tt.fixedStep(),XM.update(),ni&&(ni.position.set(vt.position.x,vt.position.y,vt.position.z),ni.quaternion.copy(vt.quaternion)),uu.forEach(e=>e.update()),VM.update(),jM.updateTextPhysics(),tr.length===4&&ta.length===4&&ta.forEach((e,t)=>{const i=tr[t];i.position.copy(e.position),i.quaternion.copy(e.quaternion)});const s=ni&&ni.position.z<-22.5;s?(Dn.position.set(ni.position.x-8,ni.position.y+5,ni.position.z+5),Dn.lookAt(ni.position)):(Wt.target.copy(vt.position),Wt.maxPolarAngle=Math.PI/3,Wt.maxDistance=8,Wt.minDistance=3,Wt.update()),On.render(Zt,s?Dn:ii),requestAnimationFrame(pu),du.update()}pu()}),sb=eb();export{sb as default};
