import{a as l}from"./assets/vendor-1b0a9daf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const j=document.querySelector(".js-open-modal"),C=document.querySelector(".js-close-modal"),T=document.querySelector(".header-backdrop");j.addEventListener("click",q);C.addEventListener("click",q);function q(){T.classList.toggle("is-hidden")}const b=document.querySelector(".quote-text"),S=document.querySelector(".quote-author");async function O(){l.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const s=new Date,t=s.getFullYear()+String(s.getMonth())+s.getDate();let a={};if(localStorage.getItem("quotation")&&(a=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==a.date){const o=await l.get();try{b.textContent=o.data.quote,S.textContent=o.data.author;const e={date:t,quote:o.data.quote,author:o.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else b.textContent=a.quote,S.textContent=a.author}O();const f="/energy-flow/assets/symbol-defs-e6683987.svg",$=document.querySelector(".js-exercises-list");function H(s){let t="";s.length>0?t=s.reduce((a,{name:o,filter:e,imgUrl:n})=>a+`
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
    </li>`,$.innerHTML=t}function F(s){let t="";t=s.reduce((a,{rating:o,name:e,burnedCalories:n,bodyPart:c,target:r})=>a+`
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
          <svg class="second-icon-man" width="24" height="24">
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
            <p class="second-entrance">${c}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${r}</p>
          </div>
        </div>
      </li>
   `,""),$.innerHTML=t}let v="filter=Muscles",m=1,g=1,u=1,y=[],i="";const N=document.querySelector(".js-exercises-list-btn"),U=document.querySelector('button[data-action="filter=Muscles"]'),D=document.querySelector('button[data-action="filter=Body parts"]'),I=document.querySelector('button[data-action="filter=Equipment"]'),L=document.querySelector(".js-exercises-title"),w=document.querySelector(".js-exercises-text");let h="muscles";N.addEventListener("click",Q);function Q(s){U.classList.remove("active"),D.classList.remove("active"),I.classList.remove("active"),s.target.classList.add("active"),v=s.target.dataset.action,h=s.target.dataset.filter,m=1,L.textContent="Exercises",w.textContent="",x(v,m)}const d=document.querySelector(".js-exercises-countpage"),p=document.querySelector(".js-exercises-second-countpage");x();async function x(s="filter=Muscles",t=1){l.defaults.baseURL="https://energyflow.b.goit.study/api/";let a="filters",o={page:t,limit:8};g=1,u=1;let e=await l.get(`${a}?${s}`,{params:o});try{let n=e.data.totalPages;if(d.innerHTML="",p.innerHTML="",n>1){let c="";for(let r=1;r<=n;r+=1)r===t?c+=`<button data-action=${r} class="js-exercises-countpage-btn active " type="button">${r}</button>`:c+=`
          <button data-action=${r} class="js-exercises-countpage-btn " type="button">${r}</button>
        `;d.innerHTML=c,d.addEventListener("click",B)}H(e.data.results)}catch(n){alert(n.message)}}const M=document.querySelector(".js-exercises-list");console.log("listEl",M);M.addEventListener("click",A);function A(s){s.preventDefault(),i=s.target.dataset.name,console.log("nameQuery",i),L.textContent="Exercises / ";let t=i[0].toUpperCase()+i.slice(1);w.textContent=`${t}`,k()}async function k(){let s="exercises";console.log("filter=",h),console.log("nameQuery",i);const t=`${s}?${h}=${i}&page=${g}&limit=8`;console.log("query",t);let a=await l.get(t);try{if(u=a.data.totalPages,y=a.data.results,console.log("amountPageSecond",u),d.innerHTML="",p.innerHTML="",u>1){let o="";for(let e=1;e<=u;e+=1)e===g?o+=`<button data-action=${e} class="js-exercises-countpage-btn active " type="button">${e}</button>`:o+=`
          <button data-action=${e} class="js-exercises-countpage-btn " type="button">${e}</button>
        `;p.innerHTML=o,p.addEventListener("click",R)}console.log("arraySend",y),F(y)}catch(o){console.log(o)}}function B(s){for(const t of d.children)t.classList.remove("active");s.target.classList.add("active"),m=Number(s.target.dataset.action),x(v,m)}function R(s){const t=document.querySelector(".js-exercises-second-countpage");console.log(t);for(const a of t.children)a.classList.remove("active");s.target.classList.add("active"),g=Number(s.target.dataset.action),console.log("currentPageSecond",g),k()}const P=document.querySelector(".js-footer-form");P.addEventListener("submit",z);let E=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function z(s){s.preventDefault();let t=s.target.elements.email.value.trim();if(console.log(E.test(t)),E.test(t)){if(t===""){alert("please, enter your email");return}const a={email:t};async function o(){try{const e=await l.post("subscription",a);alert(e.data.message),P.reset()}catch{alert("Subscription already exists")}}o()}}
//# sourceMappingURL=commonHelpers.js.map
