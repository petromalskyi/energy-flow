import{a as l}from"./assets/vendor-1b0a9daf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const P=document.querySelector(".js-open-modal"),j=document.querySelector(".js-close-modal"),C=document.querySelector(".header-backdrop");P.addEventListener("click",E);j.addEventListener("click",E);function E(){C.classList.toggle("is-hidden")}const b=document.querySelector(".quote-text"),x=document.querySelector(".quote-author");async function T(){l.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const s=new Date,t=s.getFullYear()+String(s.getMonth())+s.getDate();let a={};if(localStorage.getItem("quotation")&&(a=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==a.date){const o=await l.get();try{b.textContent=o.data.quote,x.textContent=o.data.author;const e={date:t,quote:o.data.quote,author:o.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else b.textContent=a.quote,x.textContent=a.author}T();const f="/energy-flow/assets/symbol-defs-e6683987.svg",$=document.querySelector(".js-exercises-list");function O(s){let t="";s.length>0?t=s.reduce((a,{name:o,filter:e,imgUrl:n})=>a+`
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
    </li>`,$.innerHTML=t}function F(s){let t="";t=s.reduce((a,{rating:o,name:e,burnedCalories:n,bodyPart:r,target:c})=>a+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${o}</p>
              <svg width="18" height="18">
                <use href="${f}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="second-btn">
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="${f}#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg width="24" height="24">
            <use href="${f}#icon-running-man"></use>
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
   `,""),$.innerHTML=t}let y="filter=Muscles",p=1,g=1,u=1,m=[];const N=document.querySelector(".js-exercises-list-btn"),H=document.querySelector('button[data-action="filter=Muscles"]'),U=document.querySelector('button[data-action="filter=Body parts"]'),D=document.querySelector('button[data-action="filter=Equipment"]'),q=document.querySelector(".js-exercises-title"),L=document.querySelector(".js-exercises-text");let v="muscles";N.addEventListener("click",I);function I(s){H.classList.remove("active"),U.classList.remove("active"),D.classList.remove("active"),s.target.classList.add("active"),y=s.target.dataset.action,v=s.target.dataset.filter,p=1,q.textContent="Exercises",L.textContent="",h(y,p)}const i=document.querySelector(".js-exercises-countpage");h();async function h(s="filter=Muscles",t=1){l.defaults.baseURL="https://energyflow.b.goit.study/api/";let a="filters",o={page:t,limit:8};g=1,u=1;let e=await l.get(`${a}?${s}`,{params:o});try{let n=e.data.totalPages;if(i.innerHTML="",n>1){let r="";for(let c=1;c<=n;c+=1)c===t?r+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:r+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;i.innerHTML=r,i.addEventListener("click",Q)}O(e.data.results)}catch(n){alert(n.message)}}const w=document.querySelector(".js-exercises-list");console.log(w);w.addEventListener("click",A);let d="";function A(s){s.preventDefault(),d=s.target.dataset.name,q.textContent="Exercises / ";let t=d[0].toUpperCase()+d.slice(1);L.textContent=`${t}`,M()}async function M(){let s="exercises";console.log("filter=",v),console.log("nameQuery",d);const t=`${s}?${v}=${d}&page=${g}&limit=8`;console.log("query",t);let a=await l.get(t);try{if(u=a.data.totalPages,m=a.data.results,console.log("amountPageSecond",u),i.innerHTML="",u>1){let o="";for(let e=1;e<=u;e+=1)e===g?o+=`<button data-action=${e} class="js-exercises-countpage-btn active " type="button">${e}</button>`:o+=`
          <button data-action=${e} class="js-exercises-countpage-btn " type="button">${e}</button>
        `;i.innerHTML=o,i.addEventListener("click",B)}console.log("arraySend",m),F(m)}catch(o){console.log(o)}}function B(s){for(const t of i.children)t.classList.remove("active");s.target.classList.add("active"),g=Number(s.target.dataset.action),console.log("currentPageSecond",g),M()}function Q(s){for(const t of i.children)t.classList.remove("active");s.target.classList.add("active"),p=Number(s.target.dataset.action),h(y,p)}const k=document.querySelector(".js-footer-form");k.addEventListener("submit",R);let S=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function R(s){s.preventDefault();let t=s.target.elements.email.value.trim();if(console.log(S.test(t)),S.test(t)){if(t===""){alert("please, enter your email");return}const a={email:t};async function o(){try{const e=await l.post("subscription",a);alert(e.data.message),k.reset()}catch{alert("Subscription already exists")}}o()}}
//# sourceMappingURL=commonHelpers.js.map
