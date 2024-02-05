import{a as i}from"./assets/vendor-1b0a9daf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const B=document.querySelector(".js-open-modal"),R=document.querySelector(".js-close-modal"),Y=document.querySelector(".header-backdrop");B.addEventListener("click",C);R.addEventListener("click",C);function C(){Y.classList.toggle("is-hidden")}const L=document.querySelector(".quote-text"),w=document.querySelector(".quote-author");async function z(){i.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const o=new Date,e=o.getFullYear()+String(o.getMonth())+o.getDate();let n={};if(localStorage.getItem("quotation")&&(n=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||e!==n.date){const s=await i.get();try{L.textContent=s.data.quote,w.textContent=s.data.author;const t={date:e,quote:s.data.quote,author:s.data.author};localStorage.setItem("quotation",JSON.stringify(t))}catch(t){alert(t.message)}}else L.textContent=n.quote,w.textContent=n.author}z();const v="/energy-flow/assets/symbol-defs-430dada7.svg",M=document.querySelector(".js-exercises-list");function Q(o){let e="";o.length>0?e=o.reduce((n,{name:s,filter:t,imgUrl:a})=>n+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${a}"
            alt="${s}"
            data-filter='${t}' 
            data-name='${s}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${t}' 
            data-name='${s}'>${t}</p>
                <p class="exercises-name" data-filter='${t}' 
            data-name='${s}'>${s}</p>
            </div>
            </a>
       </li>`,""):e=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,M.innerHTML=e}function J(o){let e="";o.length>0?e=o.reduce((n,{rating:s,name:t,burnedCalories:a,bodyPart:r,target:x,_id:b})=>n+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${s}</p>
              <svg width="18" height="18">
                <use href="${v}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="js-second-btn" data-id=${b}>
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="${v}#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg class="second-icon-man" width="24" height="24">
            <use href="${v}#icon-running-man"></use>
          </svg>
          <p class="second-title">${t}</p>
        </div>

        <div class="second-position-three">
          <div>
            <p class="second-text">Burned calories:</p>
            <p class="second-entrance">${a} / 3 min</p>
          </div>
          <div>
            <p class="second-text">Body part:</p>
            <p class="second-entrance">${r}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${x}</p>
          </div>
        </div>
      </li>
   `,""):e=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,M.innerHTML=e}let c="",E="filter=Muscles",y=1,u=1,l=1,p="";const K=document.querySelector(".js-exercises-list-btn"),W=document.querySelector('button[data-action="filter=Muscles"]'),G=document.querySelector('button[data-action="filter=Body parts"]'),V=document.querySelector('button[data-action="filter=Equipment"]'),j=document.querySelector(".js-exercises-title"),P=document.querySelector(".js-exercises-text"),h=document.querySelector(".js-exercises-list");let T="muscles";K.addEventListener("click",X);function X(o){W.classList.remove("active"),G.classList.remove("active"),V.classList.remove("active"),o.target.classList.add("active"),E=o.target.dataset.action,T=o.target.dataset.filter,y=1,j.textContent="Exercises",P.textContent="",S(E,y)}const d=document.querySelector(".js-exercises-countpage"),f=document.querySelector(".js-exercises-second-countpage");S();async function S(o="filter=Muscles",e=1){i.defaults.baseURL="https://energyflow.b.goit.study/api/";let n="filters",s={page:e,limit:8};h.removeEventListener("click",H),h.addEventListener("click",O),u=1,l=1,c=await i.get(`${n}?${o}`,{params:s});try{let t=c.data.totalPages;if(d.innerHTML="",f.innerHTML="",t>1){let a="";for(let r=1;r<=t;r+=1)r===e?a+=`<button data-action=${r} class="js-exercises-countpage-btn active " type="button">${r}</button>`:a+=`
          <button data-action=${r} class="js-exercises-countpage-btn " type="button">${r}</button>
        `;d.innerHTML=a,d.addEventListener("click",_)}Q(c.data.results)}catch(t){alert(t.message)}}function O(o){o.preventDefault(),p=o.target.dataset.name,j.textContent="Exercises / ";let e=p[0].toUpperCase()+p.slice(1);P.textContent=`${e}`,I()}async function I(){let o="exercises";h.removeEventListener("click",O);const e=`${o}?${T}=${p}&page=${u}&limit=8`;c=await i.get(e);try{if(l=c.data.totalPages,console.log("amountPageSecond",l),d.innerHTML="",f.innerHTML="",l>1){let n="";for(let s=1;s<=l;s+=1)s===u?n+=`<button data-action=${s} class="js-exercises-countpage-btn active " type="button">${s}</button>`:n+=`
          <button data-action=${s} class="js-exercises-countpage-btn " type="button">${s}</button>
        `;f.innerHTML=n,f.addEventListener("click",ee)}J(c.data.results),h.addEventListener("click",H)}catch(n){alert(n.message)}}function H(o){const e=o.target.dataset.id;e&&(console.log(e),Z(e))}async function Z(o){const n=`exercises/${o}`;c=await i.get(n);try{console.dir(c.data);const s=document.querySelector(".id-modal-img");console.log(s),s.setAttribute("src",`${c.data.gifUrl}`);const t=document.querySelector(".id-modal-title");t.textContent=`${c.data.name}`;const a=document.querySelector(".rating-item");a.textContent=`${c.data.rating}`;const r=document.querySelector('[data-action="target"]');r.textContent=`${c.data.target}`;const x=document.querySelector('[data-action="waist"]');x.textContent=`${c.data.bodyPart}`;const b=document.querySelector('[data-action="equipment"]');b.textContent=`${c.data.equipment}`;const A=document.querySelector('[data-action="popular"]');A.textContent=`${c.data.popularity}`;const D=document.querySelector('[data-action="burnedcalories"]');D.textContent=`${c.data.burnedCalories} / ${c.data.time}`;const F=document.querySelector('[data-action="description"]');F.textContent=`${c.data.description}`;const q=Math.floor(c.data.rating);console.log(q);const m=document.querySelectorAll(".rating-icon");console.log(m);for(let g=q;g<m.length;g++){const se=m[g];m[g].setAttribute("href","/img/symbol-defs.svg#icon-star-passive")}const oe=document.querySelector(".js-second-btn"),$=document.querySelector(".js-backdrop-id"),N=document.querySelector(".js-id-modal-btn-close");$.classList.toggle("is-hidden"),N.addEventListener("click",()=>$.classList.toggle("is-hidden"))}catch(s){alert(s.message)}}function _(o){for(const e of d.children)e.classList.remove("active");o.target.classList.add("active"),y=Number(o.target.dataset.action),S(E,y)}function ee(o){const e=document.querySelector(".js-exercises-second-countpage");console.log(e);for(const n of e.children)n.classList.remove("active");o.target.classList.add("active"),u=Number(o.target.dataset.action),console.log("currentPageSecond",u),I()}const U=document.querySelector(".js-footer-form");U.addEventListener("submit",te);let k=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function te(o){o.preventDefault();let e=o.target.elements.email.value.trim();if(console.log(k.test(e)),k.test(e)){if(e===""){alert("please, enter your email");return}const n={email:e};async function s(){try{const t=await i.post("subscription",n);alert(t.data.message),U.reset()}catch{alert("Subscription already exists")}}s()}}
//# sourceMappingURL=commonHelpers.js.map
