import axios from 'axios';
import { createMarkupExercises } from './markup';
import { createMarkupExercisesSecond } from './markup';
// export let choiceFilter = 'filter=Muscles';
// import { handleClick } from './home';

//import { choiceFilter } from './home';

// let currentPage = 1;
// let choiceFilter = 'filter=Muscles';

///////////////////////home.js
let choiceFilter = 'filter=Muscles';
let currentPage = 1;

const btnFiltersEl = document.querySelector('.js-exercises-list-btn');
const btnMusclesEl = document.querySelector(
  'button[data-action="filter=Muscles"]',
);
const btnBodyEl = document.querySelector(
  'button[data-action="filter=Body parts"]',
);
const btnEquipmentEl = document.querySelector(
  'button[data-action="filter=Equipment"]',
);
const exercisesTitleEl = document.querySelector('.js-exercises-title');
const exercisesTextEl = document.querySelector('.js-exercises-text');

btnFiltersEl.addEventListener('click', onChangeFilter);
let filter = 'muscles';
function onChangeFilter(event) {
  btnMusclesEl.classList.remove('active');
  btnBodyEl.classList.remove('active');
  btnEquipmentEl.classList.remove('active');

  event.target.classList.add('active');

  choiceFilter = event.target.dataset.action;
  filter = event.target.dataset.filter;
  currentPage = 1;
  exercisesTitleEl.textContent = 'Exercises';
  exercisesTextEl.textContent = '';
  // return choiceFilter, currentPage;
  getFilters(choiceFilter, currentPage);
}

//////////////////////

const amountPageEl = document.querySelector('.js-exercises-countpage');
//const listEl = document.querySelector('.js-exercises-list');

// function onChangeActivePage() {}

// console.log(choiceFilter);

////////////////////////////
// getFilters(choiceFilter, currentPage);
getFilters();

async function getFilters(choiceFilter = 'filter=Muscles', currentPage = 1) {
  axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';
  let resource = 'filters';
  let params = {
    page: currentPage,
    limit: 8,
  };

  let response = await axios.get(`${resource}?${choiceFilter}`, { params });
  try {
    // console.log(response.data);
    // console.log(response);
    let amountPage = response.data.totalPages;

    ////////////// Кількість сторінок
    if (amountPage > 1) {
      let amountPageMarkup = '';

      for (let i = 1; i <= amountPage; i += 1) {
        if (i === currentPage) {
          amountPageMarkup += `<button data-action=${i} class="js-exercises-countpage-btn active " type="button">${i}</button>`;
        } else {
          amountPageMarkup += `
          <button data-action=${i} class="js-exercises-countpage-btn " type="button">${i}</button>
        `;
        }
      }

      amountPageEl.innerHTML = amountPageMarkup;

      amountPageEl.addEventListener('click', onChangeActivePage);
    }

    createMarkupExercises(response.data.results);

    ///////////////
    //////////////////

    const listEl = document.querySelector('.js-exercises-list');
    console.log(listEl);
    listEl.addEventListener('click', onClickExercises);

    function onClickExercises(event) {
      event.preventDefault();
      console.log(event.target);
      console.log(event.target.dataset.filter);
      console.log(event.target.dataset.name);
      const nameQuery = event.target.dataset.name;
      exercisesTitleEl.textContent = `Exercises / `;
      let nameQueryFirstUpper = nameQuery[0].toUpperCase() + nameQuery.slice(1);
      exercisesTextEl.textContent = `${nameQueryFirstUpper}`;

      // https://energyflow.b.goit.study/api/exercises
      //?bodypart=back & muscles=lats & equipment=barbell
      //& keyword=pull & page=1 & limit=10
      // let responses = {};
      let currentPageSecond = 1;
      getExercises();

      async function getExercises() {
        // axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';
        resource = 'exercises';
        // params = {
        //   param: `${filter}=${nameQuery}`,
        //   page: 1,
        //   limit: 8,
        // };
        // console.log(choiceFilter);
        // console.log('resource=', resource);
        // console.log('params.param=', params.param);
        // console.log('params', params);
        console.log('filter=', filter);
        console.log('nameQuery', nameQuery);
        const query = `${resource}?${filter}=${nameQuery}&page=${currentPageSecond}&limit=8`;
        console.log('query', query);
        response = await axios.get(query);

        // const responses = await axios.get(resource, {
        //   params,
        // });

        //    exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10
        // responses = await axios.get('exercises?bodypart=neck&page=1&limit=10');
        try {
          // console.log(response.data);
          console.dir(response);
          console.dir(response.data);
          console.dir(response.data.results);
          let amountPageSecond = response.data.totalPages;
          console.log(amountPageSecond);
          if (amountPageSecond > 1) {
            let amountPageMarkup = '';

            for (let i = 1; i <= amountPageSecond; i += 1) {
              if (i === currentPageSecond) {
                amountPageMarkup += `<button data-action=${i} class="js-exercises-countpage-btn active " type="button">${i}</button>`;
              } else {
                amountPageMarkup += `
          <button data-action=${i} class="js-exercises-countpage-btn " type="button">${i}</button>
        `;
              }
            }

            amountPageEl.innerHTML = amountPageMarkup;

            amountPageEl.addEventListener('click', onChangeActivePageSecond);

            function onChangeActivePageSecond(event) {
              for (const el of amountPageEl.children) {
                el.classList.remove('active');
              }

              event.target.classList.add('active');
              currentPageSecond = Number(event.target.dataset.action);
              console.log(currentPageSecond);
              getExercises();
            }
          }

          //--------------------//
          // let array = response.data.results;

          createMarkupExercisesSecond(response.data.results);
          //         let markup = '';
          //         //     <a class="exercises-link"  href=""></a>
          //         if (array.length > 0) {
          //           markup = array.reduce(
          //             (html, { rating, name, burnedCalories, bodyPart, target }) =>
          //               html +
          //               `
          //       <li class="second-item">
          //       <div class="second-position-one">
          //         <div class="second-flex">
          //           <p class="second-workout">WORKOUT</p>
          //           <div class="second-flex-one">
          //             <p class="second-star">${rating}</p>
          //             <svg width="18" height="18">
          //               <use href="/img/symbol-defs.svg#icon-star"></use>
          //             </svg>
          //           </div>
          //         </div>
          //         <button type="button" class="second-btn">
          //           Start
          //           <svg class="second-arrow-icon" width="14" height="14">
          //             <use
          //               class="second-arrow-icon"
          //               href="/img/symbol-defs.svg#icon-arrow"
          //             ></use>
          //           </svg>
          //         </button>
          //       </div>
          //       <div class="second-position-two">
          //         <svg width="24" height="24">
          //           <use href="/img/symbol-defs.svg#icon-running-man"></use>
          //         </svg>
          //         <p class="second-title">${name}</p>
          //       </div>

          //       <div class="second-position-three">
          //         <div>
          //           <p class="second-text">Burned calories:</p>
          //           <p class="second-entrance">${burnedCalories} / 3 min</p>
          //         </div>
          //         <div>
          //           <p class="second-text">Body part:</p>
          //           <p class="second-entrance">${bodyPart}</p>
          //         </div>
          //         <div>
          //           <p class="second-text">Target:</p>
          //           <p class="second-entrance">${target}</p>
          //         </div>
          //       </div>
          //     </li>
          //  `,
          //             '',
          //           );
          //         } else {
          //           markup = `<li class="exercises-item">
          //     <p class="message-undefined">
          //       Unfortunately, no results were found.You may want to consider other
          //       search options to find the exercise you are looking for.Our range is
          //       wide and you have the opportunity to find more options that suit your
          //       needs.
          //     </p>
          //   </li>`;
          //         }

          //         //   listEl.insertAdjacentHTML('beforeend', markup);
          //         listEl.innerHTML = markup;

          //-------------------//
        } catch (error) {
          console.log(error);
        }

        //   getExercises();
        //   try {
        //     // console.log(response.data);
        //     console.dir(resp.data);
        //     //const amountPage = response.data.totalPages;
        //   } catch (error) {
        //     console.log(error);
        //   }
        // }

        ////////////////////////////
        ////////////////
      }
    }
  } catch (error) {
    alert(error.message);
  }
}

// getFilters();

function onChangeActivePage(event) {
  for (const el of amountPageEl.children) {
    el.classList.remove('active');
  }

  event.target.classList.add('active');
  currentPage = Number(event.target.dataset.action);
  getFilters(choiceFilter, currentPage);
}

// function createMarkupExercises(array) {
//   let markup = '';
//   if (array.length > 0) {
//     markup = array.reduce(
//       (html, { name, filter, imgUrl }) =>
//         html +
//         `
//       <li class="exercises-item">
//         <a class="exercises-link" href="">
//             <img
//             class="exercises-image"
//             src="${imgUrl}"
//             alt="${name}"
//             />
//             <div class="div-position">
//                 <p class="exercises-filter">${filter}</p>
//                 <p class="exercises-name">${name}</p>
//             </div>
//          </a>
//        </li>`,
//       '',
//     );
//   } else {
//     markup = `<li class="exercises-item">
//       <p class="message-undefined">
//         Unfortunately, no results were found.You may want to consider other
//         search options to find the exercise you are looking for.Our range is
//         wide and you have the opportunity to find more options that suit your
//         needs.
//       </p>
//     </li>`;
//   }

//   //   listEl.insertAdjacentHTML('beforeend', markup);
//   listEl.innerHTML = markup;
// }
