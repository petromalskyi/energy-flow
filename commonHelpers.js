import{a as i}from"./assets/vendor-1b0a9daf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=document.querySelector(".js-open-modal"),h=document.querySelector(".js-close-modal"),b=document.querySelector(".header-backdrop");y.addEventListener("click",p);h.addEventListener("click",p);function p(){b.classList.toggle("is-hidden")}const g=document.querySelector(".quote-text"),m=document.querySelector(".quote-author");async function q(){i.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const o=new Date,s=o.getFullYear()+String(o.getMonth())+o.getDate();let a={};if(localStorage.getItem("quotation")&&(a=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||s!==a.date){const n=await i.get();try{g.textContent=n.data.quote,m.textContent=n.data.author;const e={date:s,quote:n.data.quote,author:n.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else g.textContent=a.quote,m.textContent=a.author}q();let u="filter=Muscles",l=1;const L=document.querySelector(".exercises-list-btn"),v=document.querySelector('button[data-action="filter=Muscles"]'),S=document.querySelector('button[data-action="filter=Body parts"]'),x=document.querySelector('button[data-action="filter=Equipment"]');L.addEventListener("click",E);function E(o){v.classList.remove("active"),S.classList.remove("active"),x.classList.remove("active"),o.target.classList.add("active"),u=o.target.dataset.action,l=1,f(u,l)}const d=document.querySelector(".js-exercises-countpage"),M=document.querySelector(".js-exercises-list");f();async function f(o="filter=Muscles",s=1){i.defaults.baseURL="https://energyflow.b.goit.study/api/";const a="filters",n={page:s,limit:8},e=await i.get(`${a}?${o}`,{params:n});try{const t=e.data.totalPages;if(t>1){let r="";for(let c=1;c<=t;c+=1)c===s?r+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:r+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;d.innerHTML=r,d.addEventListener("click",k)}$(e.data.results)}catch(t){alert(t.message)}}function k(o){for(const s of d.children)s.classList.remove("active");o.target.classList.add("active"),l=Number(o.target.dataset.action),f(u,l)}function $(o){console.log(o.length);let s="";o.length>0?s=o.reduce((a,{name:n,filter:e,imgUrl:t})=>a+`
      <li class="exercises-item">
        <a class="exercises-link" href="">
            <img
            class="exercises-image"
            src="${t}"
            alt="${n}"
            />
            <div class="div-position">
                <p class="exercises-filter">${e}</p>
                <p class="exercises-name">${n}</p>
            </div>
         </a>
       </li>`,""):s=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,M.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map
