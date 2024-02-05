(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const n="/energy-flow/assets/symbol-defs-3a761a52.svg",c=document.querySelector(".js-favorite-list");l();function l(){const e=[];for(let t=0;t<localStorage.length;t++)localStorage.key(t)!=="quotation"&&localStorage.key(t)!==""&&e.push(localStorage.key(t));let a="";if(e.length>0)for(let t=0;t<e.length;t++){let r=JSON.parse(localStorage.getItem(e[t])),s=r.name,o=r.calories,i=r.bodyPart,d=r.target;a+=`
     <li class="second-item">
          <div class="second-position-one">
            <div class="second-flex">
              <p class="second-workout">WORKOUT</p>
              <div class="second-flex-one">
                <button type="button" class="js-favorite-btn" data-action='delete' data-id=${e[t]}>
                    <svg width="16" height="16" data-action='delete' data-id=${e[t]}>
                    <use href="${n}#icon-trash" data-action='delete' data-id=${e[t]}></use>
                    </svg>
                </button>
              </div>
            </div>
            <button type="button" class="js-second-btn" data-id=${e[t]}>
              Start
              <svg class="second-arrow-icon" width="14" height="14" data-id=${e[t]}>
                <use class="second-arrow-icon" href="${n}#icon-arrow" data-id=${e[t]}></use>
              </svg>
            </button>
          </div>
          <div class="second-position-two">
            <svg class="second-icon-man" width="24" height="24">
              <use href="${n}#icon-running-man"></use>
            </svg>
            <p class="second-title">${s}</p>
          </div>
          <div class="second-position-three">
            <div>
              <p class="second-text">Burned calories:</p>
              <p class="second-entrance">${o} / 3 min</p>
            </div>
            <div>
              <p class="second-text">Body part:</p>
              <p class="second-entrance">${i} </p>
            </div>
            <div>
              <p class="second-text">Target:</p>
              <p class="second-entrance">${d}</p>
            </div>
          </div>
        </li>`}else a=`<li class="exercises-item">
        <p class="message-undefined">
         It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>
      </li>`;c.innerHTML=a}c.addEventListener("click",u);function u(e){console.dir(e.target.dataset.id),e.target.dataset.id&&(console.log(e.target.className),(e.target.className==="js-favorite-btn"||e.target.dataset.action==="delete")&&confirm("Are you sure that want to delete this exercise from a favourite?")&&(localStorage.removeItem(e.target.dataset.id),l()))}export{n as i};
//# sourceMappingURL=favorite-947890e3.js.map
