(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=[`
      ★
    ／&＼
   ／ @ ＼
  ／     ＼
 ／       ＼
／         ＼
^^^^^| |^^^^^
     | |
      `,`
      ★
    ／&＼
   ／p@i＼
  ／  &  ＼
 ／       ＼
／         ＼
^^^^^| |^^^^^
     | |
      `,`
      ★
    ／&＼
   ／p@i＼
  ／ ｡&i*＼
 ／   @   ＼
／         ＼
^^^^^| |^^^^^
     | |
      `,`
      ★
    ／&＼
   ／p@i＼
  ／ ｡&i*＼
 ／i  @  *＼
／  @ ** i ＼
^^^^^| |^^^^^
     | |
      `],u=document.getElementById("ascii-art");let o=0;function c(){u.textContent=s[o],o=(o+1)%s.length}c();setInterval(c,1e3);
