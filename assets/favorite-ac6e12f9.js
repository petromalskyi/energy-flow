import{a as c}from"./vendor-1b0a9daf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const l=document.querySelector(".quote-text"),d=document.querySelector(".quote-author");async function u(){c.defaults.baseURL="https://energyflow.b.goit.study/api/quote";const e=new Date,r=e.getFullYear()+String(e.getMonth())+e.getDate();let t={};if(localStorage.getItem("quotation")&&(t=JSON.parse(localStorage.getItem("quotation"))),!localStorage.getItem("quotation")||r!==t.date){const s=await c.get();try{l.textContent=s.data.quote,d.textContent=s.data.author;const o={date:r,quote:s.data.quote,author:s.data.author};localStorage.setItem("quotation",JSON.stringify(o))}catch(o){alert(o.message)}}else l.textContent=t.quote,d.textContent=t.author}u();const i="/energy-flow/assets/symbol-defs-3a761a52.svg",g=document.querySelector(".js-favorite-list");document.querySelector(".quote-text");document.querySelector(".quote-author");u();f();function f(){const e=[];for(let t=0;t<localStorage.length;t++)localStorage.key(t)!=="quotation"&&localStorage.key(t)!==""&&e.push(localStorage.key(t));let r="";if(e.length>0)for(let t=0;t<e.length;t++){let s=JSON.parse(localStorage.getItem(e[t])),o=s.name,a=s.calories,n=s.bodyPart,p=s.target;r+=`
     <li class="second-item">
          <div class="second-position-one">
            <div class="second-flex">
              <p class="second-workout">WORKOUT</p>
              <div class="second-flex-one">
                <button type="button" class="js-favorite-btn" data-action='delete' data-id=${e[t]}>
                    <svg width="16" height="16" data-action='delete' data-id=${e[t]}>
                    <use href="${i}#icon-trash" data-action='delete' data-id=${e[t]}></use>
                    </svg>
                </button>
              </div>
            </div>
            <button type="button" class="js-second-btn" data-id=${e[t]}>
              Start
              <svg class="second-arrow-icon" width="14" height="14" data-id=${e[t]}>
                <use class="second-arrow-icon" href="${i}#icon-arrow" data-id=${e[t]}></use>
              </svg>
            </button>
          </div>
          <div class="second-position-two">
            <svg class="second-icon-man" width="24" height="24">
              <use href="${i}#icon-running-man"></use>
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
              <p class="second-entrance">${n} </p>
            </div>
            <div>
              <p class="second-text">Target:</p>
              <p class="second-entrance">${p}</p>
            </div>
          </div>
        </li>`}else r=`<li class="exercises-item">
        <p class="message-undefined">
         It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </li>`;g.innerHTML=r}g.addEventListener("click",h);function h(e){console.dir(e.target.dataset.id),e.target.dataset.id&&(console.log(e.target.className),(e.target.className==="js-favorite-btn"||e.target.dataset.action==="delete")&&confirm("Are you sure that want to delete this exercise from a favourite?")&&(localStorage.removeItem(e.target.dataset.id),f()))}export{i};
//# sourceMappingURL=favorite-ac6e12f9.js.map
