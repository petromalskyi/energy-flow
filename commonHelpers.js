import{i as h}from"./assets/favorite-947890e3.js";import{a as l}from"./assets/vendor-1b0a9daf.js";const Y=document.querySelector(".js-open-modal"),z=document.querySelector(".js-close-modal"),J=document.querySelector(".header-backdrop");Y.addEventListener("click",w);z.addEventListener("click",w);function w(){J.classList.toggle("is-hidden")}const L=document.querySelector(".quote-text"),k=document.querySelector(".quote-author");async function Q(){l.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const e=new Date,t=e.getFullYear()+String(e.getMonth())+e.getDate();let a={};if(localStorage.getItem("quotation")&&(a=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||t!==a.date){const o=await l.get();try{L.textContent=o.data.quote,k.textContent=o.data.author;const n={date:t,quote:o.data.quote,author:o.data.author};localStorage.setItem("quotation",JSON.stringify(n))}catch(n){alert(n.message)}}else L.textContent=a.quote,k.textContent=a.author}Q();const M=document.querySelector(".js-exercises-list");function K(e){let t="";e.length>0?t=e.reduce((a,{name:o,filter:n,imgUrl:i})=>a+`
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${i}"
            alt="${o}"
            data-filter='${n}' 
            data-name='${o}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${n}' 
            data-name='${o}'>${n}</p>
                <p class="exercises-name" data-filter='${n}' 
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
    </li>`,M.innerHTML=t}function W(e){let t="";e.length>0?t=e.reduce((a,{rating:o,name:n,burnedCalories:i,bodyPart:c,target:x,_id:b})=>a+`
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${o}</p>
              <svg width="18" height="18">
                <use href="${h}#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="js-second-btn" data-id=${b}>
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="${h}#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg class="second-icon-man" width="24" height="24">
            <use href="${h}#icon-running-man"></use>
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
            <p class="second-entrance">${x}</p>
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
    </li>`,M.innerHTML=t}let s="",S="filter=Muscles",f=1,g=1,d=1,m="";const G=document.querySelector(".js-exercises-list-btn"),V=document.querySelector('button[data-action="filter=Muscles"]'),X=document.querySelector('button[data-action="filter=Body parts"]'),Z=document.querySelector('button[data-action="filter=Equipment"]'),j=document.querySelector(".js-exercises-title"),P=document.querySelector(".js-exercises-text"),y=document.querySelector(".js-exercises-list");let T="muscles";G.addEventListener("click",_);function _(e){V.classList.remove("active"),X.classList.remove("active"),Z.classList.remove("active"),e.target.classList.add("active"),S=e.target.dataset.action,T=e.target.dataset.filter,f=1,j.textContent="Exercises",P.textContent="",E(S,f)}const u=document.querySelector(".js-exercises-countpage"),p=document.querySelector(".js-exercises-second-countpage");E();async function E(e="filter=Muscles",t=1){l.defaults.baseURL="https://energyflow.b.goit.study/api/";let a="filters",o={page:t,limit:8};y.removeEventListener("click",H),y.addEventListener("click",I),g=1,d=1,s=await l.get(`${a}?${e}`,{params:o});try{let n=s.data.totalPages;if(u.innerHTML="",p.innerHTML="",n>1){let i="";for(let c=1;c<=n;c+=1)c===t?i+=`<button data-action=${c} class="js-exercises-countpage-btn active " type="button">${c}</button>`:i+=`
          <button data-action=${c} class="js-exercises-countpage-btn " type="button">${c}</button>
        `;u.innerHTML=i,u.addEventListener("click",te)}K(s.data.results)}catch(n){alert(n.message)}}function I(e){e.preventDefault(),m=e.target.dataset.name,j.textContent="Exercises / ";let t=m[0].toUpperCase()+m.slice(1);P.textContent=`${t}`,O()}async function O(){let e="exercises";y.removeEventListener("click",I);const t=`${e}?${T}=${m}&page=${g}&limit=8`;s=await l.get(t);try{if(d=s.data.totalPages,console.log("amountPageSecond",d),u.innerHTML="",p.innerHTML="",d>1){let a="";for(let o=1;o<=d;o+=1)o===g?a+=`<button data-action=${o} class="js-exercises-countpage-btn active " type="button">${o}</button>`:a+=`
          <button data-action=${o} class="js-exercises-countpage-btn " type="button">${o}</button>
        `;p.innerHTML=a,p.addEventListener("click",oe)}W(s.data.results),y.addEventListener("click",H)}catch(a){alert(a.message)}}function H(e){const t=e.target.dataset.id;t&&(console.log(t),ee(t))}async function ee(e){const a=`exercises/${e}`;s=await l.get(a);try{console.dir(s.data);const o=document.querySelector(".id-modal-img");console.log(o),o.setAttribute("src",`${s.data.gifUrl}`);const n=document.querySelector(".id-modal-title");n.textContent=`${s.data.name}`;const i=document.querySelector(".rating-item");i.textContent=`${s.data.rating}`;const c=document.querySelector('[data-action="target"]');c.textContent=`${s.data.target}`;const x=document.querySelector('[data-action="waist"]');x.textContent=`${s.data.bodyPart}`;const b=document.querySelector('[data-action="equipment"]');b.textContent=`${s.data.equipment}`;const A=document.querySelector('[data-action="popular"]');A.textContent=`${s.data.popularity}`;const D=document.querySelector('[data-action="burnedcalories"]');D.textContent=`${s.data.burnedCalories} / ${s.data.time}`;const F=document.querySelector('[data-action="description"]');F.textContent=`${s.data.description}`;const B=Math.floor(s.data.rating),v=document.querySelectorAll(".rating-icon");for(let r=B;r<v.length;r++){const ne=v[r];v[r].setAttribute("href","/img/symbol-defs.svg#icon-star-passive")}const ae=document.querySelector(".js-second-btn"),q=document.querySelector(".js-backdrop-id"),N=document.querySelector(".js-id-modal-btn-close");q.classList.toggle("is-hidden"),N.addEventListener("click",()=>q.classList.toggle("is-hidden"));const R=document.querySelector(".id-button-add-favorites"),$=[];for(let r=0;r<localStorage.length;r++)$.push(localStorage.key(r));R.addEventListener("click",()=>{const r={name:s.data.name,bodyPart:s.data.bodyPart,calories:s.data.burnedCalories,target:s.data.target};$.includes(e)?alert("This exercise already is in a favourite"):localStorage.setItem(e,JSON.stringify(r))})}catch(o){alert(o.message)}}function te(e){for(const t of u.children)t.classList.remove("active");e.target.classList.add("active"),f=Number(e.target.dataset.action),E(S,f)}function oe(e){const t=document.querySelector(".js-exercises-second-countpage");console.log(t);for(const a of t.children)a.classList.remove("active");e.target.classList.add("active"),g=Number(e.target.dataset.action),console.log("currentPageSecond",g),O()}const U=document.querySelector(".js-footer-form");U.addEventListener("submit",se);let C=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");function se(e){e.preventDefault();let t=e.target.elements.email.value.trim();if(console.log(C.test(t)),C.test(t)){if(t===""){alert("please, enter your email");return}const a={email:t};async function o(){try{const n=await l.post("subscription",a);alert(n.data.message),U.reset()}catch{alert("Subscription already exists")}}o()}}
//# sourceMappingURL=commonHelpers.js.map
