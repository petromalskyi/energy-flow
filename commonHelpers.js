import{i as E}from"./assets/favorite-ac6e12f9.js";import{a as u}from"./assets/vendor-1b0a9daf.js";const R=document.querySelector(".js-open-modal"),z=document.querySelector(".js-close-modal"),N=document.querySelector(".header-backdrop");R.addEventListener("click",k);z.addEventListener("click",k);function k(){N.classList.toggle("is-hidden")}const C=document.querySelector(".js-exercises-list");function Y(e){let t="";e.length>0?t=e.reduce((a,{name:s,filter:n,imgUrl:i})=>a+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${i}"
            alt="${s}"
            data-filter='${n}' 
            data-name='${s}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${n}' 
            data-name='${s}'>${n}</p>
                <p class="exercises-name" data-filter='${n}' 
            data-name='${s}'>${s}</p>
            </div>
            </a>
       </li>`,""):t=`<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`,C.innerHTML=t}function K(e){let t="";e.length>0?t=e.reduce((a,{rating:s,name:n,burnedCalories:i,bodyPart:c,target:v,_id:b})=>a+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${s}</p>
              <svg width="18" height="18">
                <use href="${E}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="js-second-btn" data-id=${b}>
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="${E}#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg class="second-icon-man" width="24" height="24">
            <use href="${E}#icon-running-man"></use>
          </svg>
          <p class="second-title">${n}</p>
        </div>

        <div class="second-position-three">
          <div>
            <p class="second-text">Burned calories:</p>
            <p class="second-entrance">${i} / 3 min</p>
          </div>
          <div>
            <p class="second-text">Body part:</p>
            <p class="second-entrance">${c}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${v}</p>
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
    </li>`,C.innerHTML=t}let o="",h="filter=Muscles",f=1,m=1,l=1,g="";const Q=document.querySelector(".js-exercises-list-btn"),W=document.querySelector('button[data-action="filter=Muscles"]'),J=document.querySelector('button[data-action="filter=Body parts"]'),G=document.querySelector('button[data-action="filter=Equipment"]'),w=document.querySelector(".js-exercises-title"),M=document.querySelector(".js-exercises-text"),y=document.querySelector(".js-exercises-list");let j="muscles";Q.addEventListener("click",V);function V(e){W.classList.remove("active"),J.classList.remove("active"),G.classList.remove("active"),e.target.classList.add("active"),h=e.target.dataset.action,j=e.target.dataset.filter,f=1,w.textContent="Exercises",M.textContent="",S(h,f)}const d=document.querySelector(".js-exercises-countpage"),p=document.querySelector(".js-exercises-second-countpage");S();async function S(e="filter=Muscles",t=1){u.defaults.baseURL="https://energyflow.b.goit.study/api/";let a="filters",s={page:t,limit:8};y.removeEventListener("click",H),y.addEventListener("click",P),m=1,l=1,o=await u.get(`${a}?${e}`,{params:s});try{let n=o.data.totalPages;if(d.innerHTML="",p.innerHTML="",n>1){let i="";for(let c=1;c<=n;c+=1)c===t?i+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:i+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;d.innerHTML=i,d.addEventListener("click",Z)}Y(o.data.results)}catch(n){alert(n.message)}}function P(e){e.preventDefault(),g=e.target.dataset.name,w.textContent="Exercises / ";let t=g[0].toUpperCase()+g.slice(1);M.textContent=`${t}`,T()}async function T(){let e="exercises";y.removeEventListener("click",P);const t=`${e}?${j}=${g}&page=${m}&limit=8`;o=await u.get(t);try{if(l=o.data.totalPages,console.log("amountPageSecond",l),d.innerHTML="",p.innerHTML="",l>1){let a="";for(let s=1;s<=l;s+=1)s===m?a+=`<button data-action=${s} class="js-exercises-countpage-btn active " type="button">${s}</button>`:a+=`
          <button data-action=${s} class="js-exercises-countpage-btn " type="button">${s}</button>
        `;p.innerHTML=a,p.addEventListener("click",_)}K(o.data.results),y.addEventListener("click",H)}catch(a){alert(a.message)}}function H(e){const t=e.target.dataset.id;t&&(console.log(t),X(t))}async function X(e){const a=`exercises/${e}`;o=await u.get(a);try{console.dir(o.data);const s=document.querySelector(".id-modal-img");console.log(s),s.setAttribute("src",`${o.data.gifUrl}`);const n=document.querySelector(".id-modal-title");n.textContent=`${o.data.name}`;const i=document.querySelector(".rating-item");i.textContent=`${o.data.rating}`;const c=document.querySelector('[data-action="target"]');c.textContent=`${o.data.target}`;const v=document.querySelector('[data-action="waist"]');v.textContent=`${o.data.bodyPart}`;const b=document.querySelector('[data-action="equipment"]');b.textContent=`${o.data.equipment}`;const U=document.querySelector('[data-action="popular"]');U.textContent=`${o.data.popularity}`;const A=document.querySelector('[data-action="burnedcalories"]');A.textContent=`${o.data.burnedCalories} / ${o.data.time}`;const F=document.querySelector('[data-action="description"]');F.textContent=`${o.data.description}`;const I=Math.floor(o.data.rating),x=document.querySelectorAll(".rating-icon");for(let r=I;r<x.length;r++){const se=x[r];x[r].setAttribute("href","/img/symbol-defs.svg#icon-star-passive")}const te=document.querySelector(".js-second-btn"),$=document.querySelector(".js-backdrop-id"),B=document.querySelector(".js-id-modal-btn-close");$.classList.toggle("is-hidden"),B.addEventListener("click",()=>$.classList.toggle("is-hidden"));const D=document.querySelector(".id-button-add-favorites"),q=[];for(let r=0;r<localStorage.length;r++)q.push(localStorage.key(r));D.addEventListener("click",()=>{const r={name:o.data.name,bodyPart:o.data.bodyPart,calories:o.data.burnedCalories,target:o.data.target};q.includes(e)?alert("This exercise already is in a favourite"):localStorage.setItem(e,JSON.stringify(r))})}catch(s){alert(s.message)}}function Z(e){for(const t of d.children)t.classList.remove("active");e.target.classList.add("active"),f=Number(e.target.dataset.action),S(h,f)}function _(e){const t=document.querySelector(".js-exercises-second-countpage");console.log(t);for(const a of t.children)a.classList.remove("active");e.target.classList.add("active"),m=Number(e.target.dataset.action),console.log("currentPageSecond",m),T()}const O=document.querySelector(".js-footer-form");O.addEventListener("submit",ee);let L=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function ee(e){e.preventDefault();let t=e.target.elements.email.value.trim();if(console.log(L.test(t)),L.test(t)){if(t===""){alert("please, enter your email");return}const a={email:t};async function s(){try{const n=await u.post("subscription",a);alert(n.data.message),O.reset()}catch{alert("Subscription already exists")}}s()}}
//# sourceMappingURL=commonHelpers.js.map
