import{a as l}from"./assets/vendor-1b0a9daf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const k=document.querySelector(".js-open-modal"),M=document.querySelector(".js-close-modal"),j=document.querySelector(".header-backdrop");k.addEventListener("click",x);M.addEventListener("click",x);function x(){j.classList.toggle("is-hidden")}const h=document.querySelector(".quote-text"),v=document.querySelector(".quote-author");async function C(){l.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const s=new Date,t=s.getFullYear()+String(s.getMonth())+s.getDate();let a={};if(localStorage.getItem("quotation")&&(a=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==a.date){const o=await l.get();try{h.textContent=o.data.quote,v.textContent=o.data.author;const e={date:t,quote:o.data.quote,author:o.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else h.textContent=a.quote,v.textContent=a.author}C();const P="/energy-flow/assets/symbol-defs-e6683987.svg",E=document.querySelector(".js-exercises-list");function O(s){let t="";s.length>0?t=s.reduce((a,{name:o,filter:e,imgUrl:n})=>a+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${n}"
            alt="${o}"
            data-filter='${e}' 
            data-name='${o}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${e}' 
            data-name='${o}'>${e}</p>
                <p class="exercises-name" data-filter='${e}' 
            data-name='${o}'>${o}</p>
            </div>
            </a>
       </li>`,""):t=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,E.innerHTML=t}function T(s){let t="";s.length>0?t=s.reduce((a,{rating:o,name:e,burnedCalories:n,bodyPart:r,target:c})=>a+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${o}</p>
              <svg width="18" height="18">
                <use href="${P}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="second-btn">
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="/img/symbol-defs.svg#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg width="24" height="24">
            <use href="/img/symbol-defs.svg#icon-running-man"></use>
          </svg>
          <p class="second-title">${e}</p>
        </div>

        <div class="second-position-three">
          <div>
            <p class="second-text">Burned calories:</p>
            <p class="second-entrance">${n} / 3 min</p>
          </div>
          <div>
            <p class="second-text">Body part:</p>
            <p class="second-entrance">${r}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${c}</p>
          </div>
        </div>
      </li>
   `,""):t=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,E.innerHTML=t}let f="filter=Muscles",g=1;const F=document.querySelector(".js-exercises-list-btn"),N=document.querySelector('button[data-action="filter=Muscles"]'),U=document.querySelector('button[data-action="filter=Body parts"]'),H=document.querySelector('button[data-action="filter=Equipment"]'),q=document.querySelector(".js-exercises-title"),S=document.querySelector(".js-exercises-text");let m="muscles";F.addEventListener("click",D);function D(s){N.classList.remove("active"),U.classList.remove("active"),H.classList.remove("active"),s.target.classList.add("active"),f=s.target.dataset.action,m=s.target.dataset.filter,g=1,q.textContent="Exercises",S.textContent="",y(f,g)}const i=document.querySelector(".js-exercises-countpage");y();async function y(s="filter=Muscles",t=1){l.defaults.baseURL="https://energyflow.b.goit.study/api/";let a="filters",o={page:t,limit:8},e=await l.get(`${a}?${s}`,{params:o});try{let n=e.data.totalPages;if(i.innerHTML="",n>1){let r="";for(let c=1;c<=n;c+=1)c===t?r+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:r+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;i.innerHTML=r,i.addEventListener("click",B)}O(e.data.results)}catch(n){alert(n.message)}}const $=document.querySelector(".js-exercises-list");console.log($);$.addEventListener("click",I);let u="";function I(s){s.preventDefault(),u=s.target.dataset.name,q.textContent="Exercises / ";let t=u[0].toUpperCase()+u.slice(1);S.textContent=`${t}`,L()}let p=1,d=1;async function L(){let s="exercises";console.log("filter=",m),console.log("nameQuery",u);const t=`${s}?${m}=${u}&page=${p}&limit=8`;console.log("query",t);let a=await l.get(t);try{if(d=a.data.totalPages,console.log(d),i.innerHTML="",d>1){let o="";for(let e=1;e<=d;e+=1)e===p?o+=`<button data-action=${e} class="js-exercises-countpage-btn active " type="button">${e}</button>`:o+=`
          <button data-action=${e} class="js-exercises-countpage-btn " type="button">${e}</button>
        `;i.innerHTML=o,i.addEventListener("click",A)}T(a.data.results)}catch(o){console.log(o)}}function A(s){for(const t of i.children)t.classList.remove("active");s.target.classList.add("active"),p=Number(s.target.dataset.action),console.log("currentPageSecond",p),L()}function B(s){for(const t of i.children)t.classList.remove("active");s.target.classList.add("active"),g=Number(s.target.dataset.action),y(f,g)}const w=document.querySelector(".js-footer-form");w.addEventListener("submit",Q);let b=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function Q(s){s.preventDefault();let t=s.target.elements.email.value.trim();if(console.log(b.test(t)),b.test(t)){if(t===""){alert("please, enter your email");return}const a={email:t};async function o(){try{const e=await l.post("subscription",a);alert(e.data.message),w.reset()}catch{alert("Subscription already exists")}}o()}}
//# sourceMappingURL=commonHelpers.js.map
