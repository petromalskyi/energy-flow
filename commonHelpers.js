import{a as c}from"./assets/vendor-1b0a9daf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h=document.querySelector(".js-open-modal"),q=document.querySelector(".js-close-modal"),S=document.querySelector(".header-backdrop");h.addEventListener("click",y);q.addEventListener("click",y);function y(){S.classList.toggle("is-hidden")}const g=document.querySelector(".quote-text"),m=document.querySelector(".quote-author");async function x(){c.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const o=new Date,t=o.getFullYear()+String(o.getMonth())+o.getDate();let r={};if(localStorage.getItem("quotation")&&(r=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==r.date){const a=await c.get();try{g.textContent=a.data.quote,m.textContent=a.data.author;const e={date:t,quote:a.data.quote,author:a.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else g.textContent=r.quote,m.textContent=r.author}x();let u="filter=Muscles",l=1;const E=document.querySelector(".exercises-list-btn"),L=document.querySelector('button[data-action="filter=Muscles"]'),v=document.querySelector('button[data-action="filter=Body parts"]'),M=document.querySelector('button[data-action="filter=Equipment"]');E.addEventListener("click",k);function k(o){L.classList.remove("active"),v.classList.remove("active"),M.classList.remove("active"),o.target.classList.add("active"),u=o.target.dataset.action,l=1,f(u,l)}const d=document.querySelector(".js-exercises-countpage"),w=document.querySelector(".js-exercises-list");f();async function f(o="filter=Muscles",t=1){c.defaults.baseURL="https://energyflow.b.goit.study/api/";const r="filters",a={page:t,limit:8},e=await c.get(`${r}?${o}`,{params:a});try{const s=e.data.totalPages;if(s>1){let n="";for(let i=1;i<=s;i+=1)i===t?n+=`<button data-action=${i} class="js-exercises-countpage-btn active " type="button">${i}</button>`:n+=`
          <button data-action=${i} class="js-exercises-countpage-btn " type="button">${i}</button>
        `;d.innerHTML=n,d.addEventListener("click",$)}j(e.data.results)}catch(s){alert(s.message)}}function $(o){for(const t of d.children)t.classList.remove("active");o.target.classList.add("active"),l=Number(o.target.dataset.action),f(u,l)}function j(o){let t="";o.length>0?t=o.reduce((r,{name:a,filter:e,imgUrl:s})=>r+`
      <li class="exercises-item">
        <a class="exercises-link" href="">
            <img
            class="exercises-image"
            src="${s}"
            alt="${a}"
            />
            <div class="div-position">
                <p class="exercises-filter">${e}</p>
                <p class="exercises-name">${a}</p>
            </div>
         </a>
       </li>`,""):t=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,w.innerHTML=t}const b=document.querySelector(".js-footer-form");b.addEventListener("submit",O);let p=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function O(o){o.preventDefault();let t=o.target.elements.email.value.trim();if(console.log(p.test(t)),p.test(t)){const r={email:t};async function a(){c.defaults.baseURL="https://energyflow.b.goit.study/api/";try{const e=await c.post("subscription",r);console.log(e),console.log(e.status),e.status===409?alert("Subscription already exists"):alert(e.data.message)}catch{alert("Subscription already exists")}}a(),b.reset()}}
//# sourceMappingURL=commonHelpers.js.map
