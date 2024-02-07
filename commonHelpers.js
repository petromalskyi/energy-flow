/* empty css                      */import{a as i}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const Y=document.querySelector(".js-open-modal"),z=document.querySelector(".js-close-modal"),J=document.querySelector(".header-backdrop");Y.addEventListener("click",k);z.addEventListener("click",k);function k(){J.classList.toggle("is-hidden")}const w=document.querySelector(".quote-text"),C=document.querySelector(".quote-author");async function K(){i.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const t=new Date,e=t.getFullYear()+String(t.getMonth())+t.getDate();let s={};if(localStorage.getItem("quotation")&&(s=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||e!==s.date){const n=await i.get();try{w.textContent=n.data.quote,C.textContent=n.data.author;const o={date:e,quote:n.data.quote,author:n.data.author};localStorage.setItem("quotation",JSON.stringify(o))}catch(o){alert(o.message)}}else w.textContent=s.quote,C.textContent=s.author}K();const S="/energy-flow/assets/symbol-defs-3a761a52.svg",P=document.querySelector(".js-exercises-list");function Q(t){let e="";t.length>0?e=t.reduce((s,{name:n,filter:o,imgUrl:a})=>s+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${a}"
            alt="${n}"
            data-filter='${o}' 
            data-name='${n}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${o}' 
            data-name='${n}'>${o}</p>
                <p class="exercises-name" data-filter='${o}' 
            data-name='${n}'>${n}</p>
            </div>
            </a>
       </li>`,""):e=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,P.innerHTML=e}function W(t){let e="";t.length>0?e=t.reduce((s,{rating:n,name:o,burnedCalories:a,bodyPart:l,target:v,_id:x})=>s+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${n}</p>
              <svg width="18" height="18">
                <use href="${S}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="js-second-btn" data-id=${x}>
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="${S}#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg class="second-icon-man" width="24" height="24">
            <use href="${S}#icon-running-man"></use>
          </svg>
          <p class="second-title">${o}</p>
        </div>

        <div class="second-position-three">
          <div>
            <p class="second-text">Burned calories:</p>
            <p class="second-entrance">${a} / 3 min</p>
          </div>
          <div>
            <p class="second-text">Body part:</p>
            <p class="second-entrance">${l}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${v}</p>
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
    </li>`,P.innerHTML=e}let r="",b="filter=Muscles",g=1,m=1,p=1,f="";const G=document.querySelector(".js-exercises-list-btn"),V=document.querySelector('button[data-action="filter=Muscles"]'),X=document.querySelector('button[data-action="filter=Body parts"]'),Z=document.querySelector('button[data-action="filter=Equipment"]'),j=document.querySelector(".js-exercises-title"),T=document.querySelector(".js-exercises-text"),h=document.querySelector(".js-exercises-list");let O="muscles";G.addEventListener("click",_);function _(t){V.classList.remove("active"),X.classList.remove("active"),Z.classList.remove("active"),t.target.classList.add("active"),b=t.target.dataset.action,O=t.target.dataset.filter,g=1,j.textContent="Exercises",T.textContent="",q(b,g)}const u=document.querySelector(".js-exercises-countpage"),y=document.querySelector(".js-exercises-second-countpage");let d="";q(b,g);async function q(t="filter=Muscles",e=1){i.defaults.baseURL="https://energyflow.b.goit.study/api/";let s="filters";h.removeEventListener("click",A),h.addEventListener("click",I),m=1,p=1,d=`${s}?${t}&page=${e}&limit=8`,r=await i.get(d);try{let n=r.data.totalPages;if(u.innerHTML="",y.innerHTML="",n>1){let o="";for(let a=1;a<=n;a+=1)a===e?o+=`<button data-action=${a} class="js-exercises-countpage-btn active " type="button">${a}</button>`:o+=`
          <button data-action=${a} class="js-exercises-countpage-btn " type="button">${a}</button>
        `,u.innerHTML=o,u.addEventListener("click",te)}Q(r.data.results)}catch(n){alert(n.message)}}function I(t){t.preventDefault(),f=t.target.dataset.name,j.textContent="Exercises / ";let e=f[0].toUpperCase()+f.slice(1);T.textContent=`${e}`,U()}async function U(){i.defaults.baseURL="https://energyflow.b.goit.study/api/";let t="exercises";h.removeEventListener("click",I),d=`${t}?${O}=${f}&page=${m}&limit=8`,r=await i.get(d);try{if(p=r.data.totalPages,u.innerHTML="",y.innerHTML="",p>1){let e="";for(let s=1;s<=p;s+=1)s===m?e+=`<button data-action=${s} class="js-exercises-countpage-btn active " type="button">${s}</button>`:e+=`
          <button data-action=${s} class="js-exercises-countpage-btn " type="button">${s}</button>
        `;y.innerHTML=e,y.addEventListener("click",oe)}W(r.data.results),h.addEventListener("click",A)}catch(e){alert(e.message)}}function A(t){const e=t.target.dataset.id;e&&ee(e)}async function ee(t){i.defaults.baseURL="https://energyflow.b.goit.study/api/",d=`exercises/${t}`,r=await i.get(d);try{document.querySelector(".id-modal-img").setAttribute("src",`${r.data.gifUrl}`);const n=document.querySelector(".id-modal-title");n.textContent=`${r.data.name}`;const o=document.querySelector(".rating-item");o.textContent=`${r.data.rating}`;const a=document.querySelector('[data-action="target"]');a.textContent=`${r.data.target}`;const l=document.querySelector('[data-action="waist"]');l.textContent=`${r.data.bodyPart}`;const v=document.querySelector('[data-action="equipment"]');v.textContent=`${r.data.equipment}`;const x=document.querySelector('[data-action="popular"]');x.textContent=`${r.data.popularity}`;const H=document.querySelector('[data-action="burnedcalories"]');H.textContent=`${r.data.burnedCalories} / ${r.data.time}`;const N=document.querySelector('[data-action="description"]');N.textContent=`${r.data.description}`;const D=Math.floor(r.data.rating),E=document.querySelectorAll(".rating-icon");for(let c=D;c<E.length;c++){const ne=E[c];E[c].setAttribute("href","/img/symbol-defs.svg#icon-star-passive")}const ae=document.querySelector(".js-second-btn"),$=document.querySelector(".js-backdrop-id"),R=document.querySelector(".js-id-modal-btn-close");$.classList.toggle("is-hidden"),R.addEventListener("click",()=>$.classList.toggle("is-hidden"));const B=document.querySelector(".id-button-add-favorites"),L=[];for(let c=0;c<localStorage.length;c++)L.push(localStorage.key(c));B.addEventListener("click",()=>{const c={name:r.data.name,bodyPart:r.data.bodyPart,calories:r.data.burnedCalories,target:r.data.target};L.includes(t)?alert("This exercise already is in a favourite"):(localStorage.setItem(t,JSON.stringify(c)),alert("Exercise is successfully added to the favourite"))})}catch(s){alert(s.message)}}function te(t){for(const e of u.children)e.classList.remove("active");t.target.classList.add("active"),g=Number(t.target.dataset.action),q(b,g)}function oe(t){const e=document.querySelector(".js-exercises-second-countpage");console.log(e);for(const s of e.children)s.classList.remove("active");t.target.classList.add("active"),m=Number(t.target.dataset.action),console.log("currentPageSecond",m),U()}const F=document.querySelector(".js-footer-form");F.addEventListener("submit",se);let M=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function se(t){t.preventDefault();let e=t.target.elements.email.value.trim();if(console.log(M.test(e)),M.test(e)){if(e===""){alert("please, enter your email");return}const s={email:e};async function n(){try{const o=await i.post("subscription",s);alert(o.data.message),F.reset()}catch{alert("Subscription already exists")}}n()}}
//# sourceMappingURL=commonHelpers.js.map
