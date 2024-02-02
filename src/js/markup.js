const listEl = document.querySelector('.js-exercises-list');

export function createMarkupExercises(array) {
  let markup = '';
  //     <a class="exercises-link"  href=""></a>
  if (array.length > 0) {
    markup = array.reduce(
      (html, { name, filter, imgUrl }) =>
        html +
        `
      <li class="exercises-item">
      <a class="exercises-link"  href="">
            <img
            class="exercises-image"
            src="${imgUrl}"
            alt="${name}"
            data-filter='${filter}' 
            data-name='${name}'
            />
            <div class="div-position">
                <p class="exercises-filter" data-filter='${filter}' 
            data-name='${name}'>${filter}</p>
                <p class="exercises-name" data-filter='${filter}' 
            data-name='${name}'>${name}</p>
            </div>
            </a>
       </li>`,
      '',
    );
  } else {
    markup = `<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`;
  }

  //   listEl.insertAdjacentHTML('beforeend', markup);
  listEl.innerHTML = markup;
}

export function createMarkupExercisesSecond(array) {
  let markup = '';
  //     <a class="exercises-link"  href=""></a>
  if (array.length > 0) {
    markup = array.reduce(
      (html, { rating, name, burnedCalories, bodyPart, target }) =>
        html +
        `
        <li class="second-item">
        <div class="second-position-one">
          <div class="second-flex">
            <p class="second-workout">WORKOUT</p>
            <div class="second-flex-one">
              <p class="second-star">${rating}</p>
              <svg width="18" height="18">
                <use href="/img/symbol-defs.svg#icon-star"></use>
              </svg>
            </div>
          </div>
          <button type="button" class="second-btn">
            Start
            <svg class="second-arrow-icon" width="14" height="14">
              <use
                class="second-arrow-icon"
                href="/img/symbol-defs.svg#icon-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="second-position-two">
          <svg width="24" height="24">
            <use href="/img/symbol-defs.svg#icon-running-man"></use>
          </svg>
          <p class="second-title">${name}</p>
        </div>

        <div class="second-position-three">
          <div>
            <p class="second-text">Burned calories:</p>
            <p class="second-entrance">${burnedCalories} / 3 min</p>
          </div>
          <div>
            <p class="second-text">Body part:</p>
            <p class="second-entrance">${bodyPart}</p>
          </div>
          <div>
            <p class="second-text">Target:</p>
            <p class="second-entrance">${target}</p>
          </div>
        </div>
      </li>
   `,
      '',
    );
  } else {
    markup = `<li class="exercises-item">
      <p class="message-undefined">
        Unfortunately, no results were found.You may want to consider other
        search options to find the exercise you are looking for.Our range is
        wide and you have the opportunity to find more options that suit your
        needs.
      </p>
    </li>`;
  }

  //   listEl.insertAdjacentHTML('beforeend', markup);
  listEl.innerHTML = markup;
}
