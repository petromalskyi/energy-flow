import{a as d}from"./assets/vendor-1b0a9daf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const T=document.querySelector(".js-open-modal"),F=document.querySelector(".js-close-modal"),N=document.querySelector(".header-backdrop");T.addEventListener("click",L);F.addEventListener("click",L);function L(){N.classList.toggle("is-hidden")}const q=document.querySelector(".quote-text"),S=document.querySelector(".quote-author");async function U(){d.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const s=new Date,t=s.getFullYear()+String(s.getMonth())+s.getDate();let a={};if(localStorage.getItem("quotation")&&(a=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==a.date){const n=await d.get();try{q.textContent=n.data.quote,S.textContent=n.data.author;const e={date:t,quote:n.data.quote,author:n.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else q.textContent=a.quote,S.textContent=a.author}U();const w=document.querySelector(".js-exercises-list");function D(s){let t="";s.length>0?t=s.reduce((a,{name:n,filter:e,imgUrl:o})=>a+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${o}"
            alt="${n}"
            data-filter='${e}' 
            data-name='${n}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${e}' 
            data-name='${n}'>${e}</p>
                <p class="exercises-name" data-filter='${e}' 
            data-name='${n}'>${n}</p>
            </div>
            </a>
       </li>`,""):t=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,w.innerHTML=t}function I(s){let t="";s.length>0?t=s.reduce((a,{rating:n,name:e,burnedCalories:o,bodyPart:l,target:m})=>a+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${n}</p>
              <svg width="18" height="18">
                <use href="/img/symbol-defs.svg#icon-star"></use>
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
            <p class="second-entrance">${o} / 3 min</p>
          </div>
          <div>
            <p class="second-text">Body part:</p>
            <p class="second-entrance">${l}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${m}</p>
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
    </li>`,w.innerHTML=t}let h="filter=Muscles",f=1;const A=document.querySelector(".js-exercises-list-btn"),B=document.querySelector('button[data-action="filter=Muscles"]'),H=document.querySelector('button[data-action="filter=Body parts"]'),Q=document.querySelector('button[data-action="filter=Equipment"]'),k=document.querySelector(".js-exercises-title"),M=document.querySelector(".js-exercises-text");A.addEventListener("click",R);let v="muscles";function R(s){B.classList.remove("active"),H.classList.remove("active"),Q.classList.remove("active"),s.target.classList.add("active"),h=s.target.dataset.action,v=s.target.dataset.filter,f=1,k.textContent="Exercises",M.textContent="",b(h,f)}const u=document.querySelector(".js-exercises-countpage");b();async function b(s="filter=Muscles",t=1){d.defaults.baseURL="https://energyflow.b.goit.study/api/";let a="filters",n={page:t,limit:8},e=await d.get(`${a}?${s}`,{params:n});try{let m=function(i){i.preventDefault(),console.log(i.target),console.log(i.target.dataset.filter),console.log(i.target.dataset.name);const r=i.target.dataset.name;k.textContent="Exercises / ";let C=r[0].toUpperCase()+r.slice(1);M.textContent=`${C}`;let p=1;x();async function x(){a="exercises",console.log("filter=",v),console.log("nameQuery",r);const E=`${a}?${v}=${r}&page=${p}&limit=8`;console.log("query",E),e=await d.get(E);try{console.dir(e),console.dir(e.data),console.dir(e.data.results);let g=e.data.totalPages;if(console.log(g),g>1){let P=function(c){for(const O of u.children)O.classList.remove("active");c.target.classList.add("active"),p=Number(c.target.dataset.action),console.log(p),x()},y="";for(let c=1;c<=g;c+=1)c===p?y+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:y+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;u.innerHTML=y,u.addEventListener("click",P)}I(e.data.results)}catch(g){console.log(g)}}},o=e.data.totalPages;if(o>1){let i="";for(let r=1;r<=o;r+=1)r===t?i+=`<button data-action=${r} class="js-exercises-countpage-btn active " type="button">${r}</button>`:i+=`
          <button data-action=${r} class="js-exercises-countpage-btn " type="button">${r}</button>
        `;u.innerHTML=i,u.addEventListener("click",z)}D(e.data.results);const l=document.querySelector(".js-exercises-list");console.log(l),l.addEventListener("click",m)}catch(o){alert(o.message)}}function z(s){for(const t of u.children)t.classList.remove("active");s.target.classList.add("active"),f=Number(s.target.dataset.action),b(h,f)}const j=document.querySelector(".js-footer-form");j.addEventListener("submit",Y);let $=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function Y(s){s.preventDefault();let t=s.target.elements.email.value.trim();if(console.log($.test(t)),$.test(t)){if(t===""){alert("please, enter your email");return}const a={email:t};async function n(){try{const e=await d.post("subscription",a);alert(e.data.message),j.reset()}catch{alert("Subscription already exists")}}n()}}
//# sourceMappingURL=commonHelpers.js.map
