(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();var g={exports:{}};(function(m){let r=200,d="";typeof SNOWFLAKES_COUNT<"u"&&(r=SNOWFLAKES_COUNT),typeof BASE_CSS<"u"&&(d=BASE_CSS);let s=null,t=null;function o(){s=document.body.offsetHeight,t=100*s/window.innerHeight}function i(){var n;const e=document.getElementById("snow");r=Number(((n=e==null?void 0:e.dataset)==null?void 0:n.count)||r)}function C(e){e?document.getElementById("snow").style.display="block":document.getElementById("snow").style.display="none"}function M(e=200){e-=1;const n=document.getElementById("snow");n.innerHTML="";for(let l=0;l<e;l++){let a=document.createElement("div");a.className="snowflake",n.appendChild(a)}}function $(){let e=document.getElementById("psjs-css");return e||(e=document.createElement("style"),e.id="psjs-css",document.head.appendChild(e),e)}function b(e){const n=$();n.innerHTML=e,document.head.appendChild(n)}function v(e=100){return Math.floor(Math.random()*e)+1}function O(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}function A(e,n){return Math.random()*(n-e)+e}function I(e=200){let n="snowflake",l=d;for(let a=1;a<e;a++){let c=Math.random()*100,h=Math.random()*10,L=c+h,N=c+h/2,y=A(.3,.8),B=y*t,u=Math.random(),x=O(10,t/10*3),H=v(t/10*3)*-1,P=Math.random();l+=`
      .${n}:nth-child(${a}) {
        opacity: ${P};
        transform: translate(${c}vw, -10px) scale(${u});
        animation: fall-${a} ${x}s ${H}s linear infinite;
      }
      @keyframes fall-${a} {
        ${y*100}% {
          transform: translate(${L}vw, ${B}vh) scale(${u});
        }
        to {
          transform: translate(${N}vw, ${t}vh) scale(${u});
        }
      }
    `}b(l)}function p(){o(),i(),I(r),M(r)}window.addEventListener("resize",p),m.exports={createSnow:p,showSnow:C}})(g);var w=g.exports;const S=[`
      ★
    ／&＼
   ／ @ ＼
  ／     ＼
 ／       ＼
／         ＼
^^^^^| |^^^^^
     | |
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
      `,`
      ★
    ／&＼
   ／p@i＼
  ／  &  ＼
 ／       ＼
／         ＼
^^^^^| |^^^^^
     | |
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
      `,`
      ★
    ／&＼
   ／p@i＼
  ／ ｡&i*＼
 ／   @   ＼
／         ＼
^^^^^| |^^^^^
     | |
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
      `,`
      ★
    ／&＼
   ／p@i＼
  ／ ｡&i*＼
 ／i  @  *＼
／  @ ** i ＼
^^^^^| |^^^^^
     | |
   ＿＿＿
  / ,  ⊃ヽ＿＿
 ｜, 3/        ヽ
／\`ー/＿＿＿＿／

Merry Christmas
     2023
      `],T=document.getElementById("ascii-art");let f=0;function E(){T.textContent=S[f],f=(f+1)%S.length}w.createSnow();w.showSnow(!0);E();setInterval(E,1e3);
