import{a as c}from"./assets/vendor-1b0a9daf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const h=document.querySelector(".js-open-modal"),b=document.querySelector(".js-close-modal"),q=document.querySelector(".header-backdrop");h.addEventListener("click",p);b.addEventListener("click",p);function p(){q.classList.toggle("is-hidden")}const m=document.querySelector(".quote-text"),g=document.querySelector(".quote-author");async function v(){c.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const t=new Date,s=t.getFullYear()+String(t.getMonth())+t.getDate();let r={};if(localStorage.getItem("quotation")&&(r=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||s!==r.date){const n=await c.get();try{m.textContent=n.data.quote,g.textContent=n.data.author;const e={date:s,quote:n.data.quote,author:n.data.author};localStorage.setItem("quotation",JSON.stringify(e))}catch(e){alert(e.message)}}else m.textContent=r.quote,g.textContent=r.author}v();let u="filter=Muscles",l=1;const L=document.querySelector(".exercises-list-btn"),E=document.querySelector('button[data-action="filter=Muscles"]'),S=document.querySelector('button[data-action="filter=Body parts"]'),x=document.querySelector('button[data-action="filter=Equipment"]');L.addEventListener("click",M);function M(t){E.classList.remove("active"),S.classList.remove("active"),x.classList.remove("active"),t.target.classList.add("active"),u=t.target.dataset.action,l=1,f(u,l)}const d=document.querySelector(".js-exercises-countpage"),k=document.querySelector(".js-exercises-list");f();async function f(t="filter=Muscles",s=1){c.defaults.baseURL="https://energyflow.b.goit.study/api/";const r="filters",n={page:s,limit:8},e=await c.get(`${r}?${t}`,{params:n});try{const o=e.data.totalPages;if(o>1){let a="";for(let i=1;i<=o;i+=1)i===s?a+=`<button data-action=${i} class="js-exercises-countpage-btn active " type="button">${i}</button>`:a+=`
          <button data-action=${i} class="js-exercises-countpage-btn " type="button">${i}</button>
        `;d.innerHTML=a,d.addEventListener("click",$)}w(e.data.results)}catch(o){alert(o.message)}}function $(t){for(const s of d.children)s.classList.remove("active");t.target.classList.add("active"),l=Number(t.target.dataset.action),f(u,l)}function w(t){let s="";t.length>0?s=t.reduce((r,{name:n,filter:e,imgUrl:o})=>r+`
      <li class="exercises-item">
        <a class="exercises-link" href="">
            <img
            class="exercises-image"
            src="${o}"
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
    </li>`,k.innerHTML=s}const y=document.querySelector(".js-footer-form");y.addEventListener("submit",j);function j(t){if(t.preventDefault(),t.target.elements.email.value.trim()===""){alert("please, enter your email");return}y.reset()}
//# sourceMappingURL=commonHelpers.js.map
