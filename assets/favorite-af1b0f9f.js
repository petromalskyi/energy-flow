import{a as l}from"./vendor-1b0a9daf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const z=document.querySelector(".js-open-modal"),Q=document.querySelector(".js-close-modal"),W=document.querySelector(".header-backdrop");z.addEventListener("click",C);Q.addEventListener("click",C);function C(){W.classList.toggle("is-hidden")}const L=document.querySelector(".quote-text"),k=document.querySelector(".quote-author");async function M(){l.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const e=new Date,t=e.getFullYear()+String(e.getMonth())+e.getDate();let o={};if(localStorage.getItem("quotation")&&(o=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==o.date){const a=await l.get();try{L.textContent=a.data.quote,k.textContent=a.data.author;const s={date:t,quote:a.data.quote,author:a.data.author};localStorage.setItem("quotation",JSON.stringify(s))}catch(s){alert(s.message)}}else L.textContent=o.quote,k.textContent=o.author}M();const d="/energy-flow/assets/symbol-defs-3a761a52.svg",j=document.querySelector(".js-exercises-list");function G(e){let t="";e.length>0?t=e.reduce((o,{name:a,filter:s,imgUrl:n})=>o+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${n}"
            alt="${a}"
            data-filter='${s}' 
            data-name='${a}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${s}' 
            data-name='${a}'>${s}</p>
                <p class="exercises-name" data-filter='${s}' 
            data-name='${a}'>${a}</p>
            </div>
            </a>
       </li>`,""):t=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,j.innerHTML=t}function V(e){let t="";e.length>0?t=e.reduce((o,{rating:a,name:s,burnedCalories:n,bodyPart:c,target:u,_id:b})=>o+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${a}</p>
              <svg width="18" height="18">
                <use href="${d}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="js-second-btn" data-id=${b}>
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="${d}#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg class="second-icon-man" width="24" height="24">
            <use href="${d}#icon-running-man"></use>
          </svg>
          <p class="second-title">${s}</p>
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
            <p class="second-entrance">${u}</p>
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
    </li>`,j.innerHTML=t}let r="",S="filter=Muscles",v=1,p=1,g=1,f="";const X=document.querySelector(".js-exercises-list-btn"),Z=document.querySelector('button[data-action="filter=Muscles"]'),_=document.querySelector('button[data-action="filter=Body parts"]'),ee=document.querySelector('button[data-action="filter=Equipment"]'),P=document.querySelector(".js-exercises-title"),T=document.querySelector(".js-exercises-text"),h=document.querySelector(".js-exercises-list");let O="muscles";X.addEventListener("click",te);function te(e){Z.classList.remove("active"),_.classList.remove("active"),ee.classList.remove("active"),e.target.classList.add("active"),S=e.target.dataset.action,O=e.target.dataset.filter,v=1,P.textContent="Exercises",T.textContent="",$(S,v)}const m=document.querySelector(".js-exercises-countpage"),y=document.querySelector(".js-exercises-second-countpage");$();async function $(e="filter=Muscles",t=1){l.defaults.baseURL="https://energyflow.b.goit.study/api/";let o="filters",a={page:t,limit:8};h.removeEventListener("click",F),h.addEventListener("click",I),p=1,g=1,r=await l.get(`${o}?${e}`,{params:a});try{let s=r.data.totalPages;if(m.innerHTML="",y.innerHTML="",s>1){let n="";for(let c=1;c<=s;c+=1)c===t?n+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:n+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;m.innerHTML=n,m.addEventListener("click",se)}G(r.data.results)}catch(s){alert(s.message)}}function I(e){e.preventDefault(),f=e.target.dataset.name,P.textContent="Exercises / ";let t=f[0].toUpperCase()+f.slice(1);T.textContent=`${t}`,N()}async function N(){let e="exercises";h.removeEventListener("click",I);const t=`${e}?${O}=${f}&page=${p}&limit=8`;r=await l.get(t);try{if(g=r.data.totalPages,console.log("amountPageSecond",g),m.innerHTML="",y.innerHTML="",g>1){let o="";for(let a=1;a<=g;a+=1)a===p?o+=`<button data-action=${a} class="js-exercises-countpage-btn active " type="button">${a}</button>`:o+=`
          <button data-action=${a} class="js-exercises-countpage-btn " type="button">${a}</button>
        `;y.innerHTML=o,y.addEventListener("click",ae)}V(r.data.results),h.addEventListener("click",F)}catch(o){alert(o.message)}}function F(e){const t=e.target.dataset.id;t&&(console.log(t),oe(t))}async function oe(e){const o=`exercises/${e}`;r=await l.get(o);try{console.dir(r.data);const a=document.querySelector(".id-modal-img");console.log(a),a.setAttribute("src",`${r.data.gifUrl}`);const s=document.querySelector(".id-modal-title");s.textContent=`${r.data.name}`;const n=document.querySelector(".rating-item");n.textContent=`${r.data.rating}`;const c=document.querySelector('[data-action="target"]');c.textContent=`${r.data.target}`;const u=document.querySelector('[data-action="waist"]');u.textContent=`${r.data.bodyPart}`;const b=document.querySelector('[data-action="equipment"]');b.textContent=`${r.data.equipment}`;const D=document.querySelector('[data-action="popular"]');D.textContent=`${r.data.popularity}`;const B=document.querySelector('[data-action="burnedcalories"]');B.textContent=`${r.data.burnedCalories} / ${r.data.time}`;const R=document.querySelector('[data-action="description"]');R.textContent=`${r.data.description}`;const K=Math.floor(r.data.rating),x=document.querySelectorAll(".rating-icon");for(let i=K;i<x.length;i++){const ie=x[i];x[i].setAttribute("href","/img/symbol-defs.svg#icon-star-passive")}const ce=document.querySelector(".js-second-btn"),q=document.querySelector(".js-backdrop-id"),J=document.querySelector(".js-id-modal-btn-close");q.classList.toggle("is-hidden"),J.addEventListener("click",()=>q.classList.toggle("is-hidden"));const Y=document.querySelector(".id-button-add-favorites"),E=[];for(let i=0;i<localStorage.length;i++)E.push(localStorage.key(i));Y.addEventListener("click",()=>{const i={name:r.data.name,bodyPart:r.data.bodyPart,calories:r.data.burnedCalories,target:r.data.target};E.includes(e)?alert("This exercise already is in a favourite"):localStorage.setItem(e,JSON.stringify(i))})}catch(a){alert(a.message)}}function se(e){for(const t of m.children)t.classList.remove("active");e.target.classList.add("active"),v=Number(e.target.dataset.action),$(S,v)}function ae(e){const t=document.querySelector(".js-exercises-second-countpage");console.log(t);for(const o of t.children)o.classList.remove("active");e.target.classList.add("active"),p=Number(e.target.dataset.action),console.log("currentPageSecond",p),N()}const A=document.querySelector(".js-footer-form");A.addEventListener("submit",ne);let w=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function ne(e){e.preventDefault();let t=e.target.elements.email.value.trim();if(console.log(w.test(t)),w.test(t)){if(t===""){alert("please, enter your email");return}const o={email:t};async function a(){try{const s=await l.post("subscription",o);alert(s.data.message),A.reset()}catch{alert("Subscription already exists")}}a()}}const H=document.querySelector(".js-favorite-list");document.querySelector(".quote-text");document.querySelector(".quote-author");M();U();function U(){const e=[];for(let o=0;o<localStorage.length;o++)localStorage.key(o)!=="quotation"&&localStorage.key(o)!==""&&e.push(localStorage.key(o));let t="";if(e.length>0)for(let o=0;o<e.length;o++){let a=JSON.parse(localStorage.getItem(e[o])),s=a.name,n=a.calories,c=a.bodyPart,u=a.target;t+=`
     <li class="second-item">
          <div class="second-position-one">
            <div class="second-flex">
              <p class="second-workout">WORKOUT</p>
              <div class="second-flex-one">
                <button type="button" class="js-favorite-btn" data-action='delete' data-id=${e[o]}>
                    <svg width="16" height="16" data-action='delete' data-id=${e[o]}>
                    <use href="${d}#icon-trash" data-action='delete' data-id=${e[o]}></use>
                    </svg>
                </button>
              </div>
            </div>
            <button type="button" class="js-second-btn" data-id=${e[o]}>
              Start
              <svg class="second-arrow-icon" width="14" height="14" data-id=${e[o]}>
                <use class="second-arrow-icon" href="${d}#icon-arrow" data-id=${e[o]}></use>
              </svg>
            </button>
          </div>
          <div class="second-position-two">
            <svg class="second-icon-man" width="24" height="24">
              <use href="${d}#icon-running-man"></use>
            </svg>
            <p class="second-title">${s}</p>
          </div>
          <div class="second-position-three">
            <div>
              <p class="second-text">Burned calories:</p>
              <p class="second-entrance">${n} / 3 min</p>
            </div>
            <div>
              <p class="second-text">Body part:</p>
              <p class="second-entrance">${c} </p>
            </div>
            <div>
              <p class="second-text">Target:</p>
              <p class="second-entrance">${u}</p>
            </div>
          </div>
        </li>`}else t=`<li class="exercises-item">
        <p class="message-undefined">
         It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </li>`;H.innerHTML=t}H.addEventListener("click",re);function re(e){console.dir(e.target.dataset.id),e.target.dataset.id&&(console.log(e.target.className),(e.target.className==="js-favorite-btn"||e.target.dataset.action==="delete")&&confirm("Are you sure that want to delete this exercise from a favourite?")&&(localStorage.removeItem(e.target.dataset.id),U()))}
//# sourceMappingURL=favorite-af1b0f9f.js.map
