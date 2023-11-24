import{a as p}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();p.defaults.headers.common["x-api-key"]="live_Kc3PvDtHRk4eDbn3uRz4Up5bwgciWixWGmbxgznRlcrY2jsdJHQvUa43F0x0XNT4";function u(){return p.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data).catch(e=>{throw e})}function h(e){const o=`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`;return p.get(o).then(r=>r.data).catch(r=>{throw r})}const s=document.querySelector(".breed-select"),c=document.querySelector(".loader"),d=document.querySelector(".error"),i=document.querySelector(".cat-info");s.addEventListener("change",g);async function m(){try{s.classList.add("hidden"),c.classList.remove("hidden");const e=await u();return console.log("getBreeds: ",e),e&&s.classList.remove("hidden"),e}catch(e){console.log(e),d.classList.remove("hidden")}finally{c.classList.add("hidden")}}m().then(e=>e.map(o=>{const r=`<option value=${o.id} key=${o.id}>${o.name}</option>`;s.insertAdjacentHTML("beforeend",r)}).join("")).catch(e=>{console.log(e),d.classList.remove("hidden")});async function f(e){try{s.classList.add("hidden"),i.classList.add("hidden"),d.classList.add("hidden"),c.classList.remove("hidden");const o=await h(e);return o&&(s.classList.remove("hidden"),i.classList.remove("hidden")),o}catch(o){console.log(o),d.classList.remove("hidden")}finally{c.classList.add("hidden")}}function g(e){e.preventDefault();const o=e.target.value;f(o).then(r=>{var t,n;i.innerHTML="",console.log("Cat by breed: ",r[0]);const a=`<div style="display: flex; flex-direction: row">
        <div
          style="
            margin-top: 30px;
            margin-right: 30px;
            width: 350px;
            background-color: grey;
            border-radius: 4px 4px 4px 4px;
            box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
              0px 1px 1px 0px rgba(46, 47, 66, 0.16),
              0px 1px 6px 0px rgba(46, 47, 66, 0.08);
              overflow: hidden;
          "
        >
          <img
            src=${r[0].url}
            alt=${r[0].breeds[0].name}
            style="
              display: block;
              width: 100%;
            "
          />
        </div>
        <div style="display: block; margin-top: 30px">
          <h1 style="font-size: x-large; font-weight: 700; margin-bottom: 16px">
            ${r[0].breeds[0].name}
          </h1>
          <p style="margin-bottom: 12px">${r[0].breeds[0].description}</p>
          <p>
            <span style="font-weight: 700; padding-right: 8px">Temperament:</span>${(n=(t=r[0])==null?void 0:t.breeds[0])==null?void 0:n.temperament}
          </p>
        </div>
      </div>`;r&&i.classList.remove("hidden"),i.innerHTML=a}).catch(r=>{console.log(r),d.classList.remove("hidden")})}
//# sourceMappingURL=commonHelpers.js.map
