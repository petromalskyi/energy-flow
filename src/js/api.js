import axios from 'axios';
import { createMarkupExercises } from './markup';
import { createMarkupExercisesSecond } from './markup';
import { createMarkupExercisesId } from './markup';
import icons from '../img/symbol-defs.svg';

// export let choiceFilter = 'filter=Muscles';
// import { handleClick } from './home';

//import { choiceFilter } from './home';

// let currentPage = 1;
// let choiceFilter = 'filter=Muscles';

///////////////////////home.js
let response = '';
let choiceFilter = 'filter=Muscles';
let currentPage = 1;
let currentPageSecond = 1;
let amountPageSecond = 1;
let nameQuery = '';

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
const listEl = document.querySelector('.js-exercises-list');
// console.log('listEl', listEl);

let filter = 'muscles';
btnFiltersEl.addEventListener('click', onChangeFilter);

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
const amountPageSecondEl = document.querySelector(
  '.js-exercises-second-countpage',
);

getFilters();

/////////////////////////////////////////////////////////
async function getFilters(choiceFilter = 'filter=Muscles', currentPage = 1) {
  axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';
  let resource = 'filters';
  let params = {
    page: currentPage,
    limit: 8,
  };
  listEl.removeEventListener('click', onClickBtnSecond);
  listEl.addEventListener('click', onClickExercises);

  currentPageSecond = 1;
  amountPageSecond = 1;

  response = await axios.get(`${resource}?${choiceFilter}`, { params });
  try {
    let amountPage = response.data.totalPages;

    ////////////// Кількість сторінок
    amountPageEl.innerHTML = '';
    amountPageSecondEl.innerHTML = '';
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
  } catch (error) {
    alert(error.message);
  }
}

function onClickExercises(event) {
  event.preventDefault();
  nameQuery = event.target.dataset.name;
  exercisesTitleEl.textContent = `Exercises / `;
  let nameQueryFirstUpper = nameQuery[0].toUpperCase() + nameQuery.slice(1);
  exercisesTextEl.textContent = `${nameQueryFirstUpper}`;
  getExercises();
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
async function getExercises() {
  // axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';
  let resource = 'exercises';
  listEl.removeEventListener('click', onClickExercises);

  const query = `${resource}?${filter}=${nameQuery}&page=${currentPageSecond}&limit=8`;

  response = await axios.get(query);

  try {
    amountPageSecond = response.data.totalPages;
    console.log('amountPageSecond', amountPageSecond);
    amountPageEl.innerHTML = '';
    amountPageSecondEl.innerHTML = '';
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
      amountPageSecondEl.innerHTML = amountPageMarkup;
      amountPageSecondEl.addEventListener('click', onChangeActivePageSecond);
    }

    createMarkupExercisesSecond(response.data.results);

    listEl.addEventListener('click', onClickBtnSecond);
  } catch (error) {
    alert(error.message);
  }
}

function onClickBtnSecond(event) {
  const idExercise = event.target.dataset.id;
  if (!idExercise) {
    return;
  }

  console.log(idExercise);

  getExercisesID(idExercise);
}

////////////////////////////////////
///////////////////////////////////
////////////////////////////////////////

async function getExercisesID(idExercise) {
  let resource = 'exercises';
  const query = `${resource}/${idExercise}`;
  response = await axios.get(query);

  try {
    console.dir(response.data);

    const modalImgEl = document.querySelector('.id-modal-img');
    console.log(modalImgEl);
    modalImgEl.setAttribute('src', `${response.data.gifUrl}`);
    const modalTitleEl = document.querySelector('.id-modal-title');
    modalTitleEl.textContent = `${response.data.name}`;
    const modalRatingEl = document.querySelector('.rating-item');
    modalRatingEl.textContent = `${response.data.rating}`;
    const modalTargetEl = document.querySelector('[data-action="target"]');
    modalTargetEl.textContent = `${response.data.target}`;
    const modalWaistEl = document.querySelector('[data-action="waist"]');
    modalWaistEl.textContent = `${response.data.bodyPart}`;
    const modalEquipmentEl = document.querySelector(
      '[data-action="equipment"]',
    );
    modalEquipmentEl.textContent = `${response.data.equipment}`;
    const modalPopularEl = document.querySelector('[data-action="popular"]');
    modalPopularEl.textContent = `${response.data.popularity}`;
    const modalCaloriesEl = document.querySelector(
      '[data-action="burnedcalories"]',
    );
    modalCaloriesEl.textContent = `${response.data.burnedCalories} / ${response.data.time}`;
    const modalDescriptionEl = document.querySelector(
      '[data-action="description"]',
    );
    modalDescriptionEl.textContent = `${response.data.description}`;

    const countYellowStar = Math.floor(response.data.rating);
    console.log(countYellowStar);
    const starsEl = document.querySelectorAll('.rating-icon');
    console.log(starsEl);
    for (let i = 0; i < countYellowStar; i++) {
      const el = starsEl[i];
      starsEl[i].setAttribute('href', '/img/symbol-defs.svg#icon-star');
    }

    const buttonOpenModalIdEl = document.querySelector('.js-second-btn');
    const backdropIdEl = document.querySelector('.js-backdrop-id');
    const buttonCloseModalIdEl = document.querySelector(
      '.js-id-modal-btn-close',
    );

    // buttonOpenModalIdEl.addEventListener('click', () => {
    backdropIdEl.classList.toggle('is-hidden');
    // });

    buttonCloseModalIdEl.addEventListener('click', () =>
      backdropIdEl.classList.toggle('is-hidden'),
    );
  } catch (error) {
    alert(error.message);
  }
}

function onChangeActivePage(event) {
  for (const el of amountPageEl.children) {
    el.classList.remove('active');
  }

  event.target.classList.add('active');
  currentPage = Number(event.target.dataset.action);
  getFilters(choiceFilter, currentPage);
}

function onChangeActivePageSecond(event) {
  const amountPageSecondEl = document.querySelector(
    '.js-exercises-second-countpage',
  );
  console.log(amountPageSecondEl);

  for (const el of amountPageSecondEl.children) {
    el.classList.remove('active');
  }

  event.target.classList.add('active');
  currentPageSecond = Number(event.target.dataset.action);
  console.log('currentPageSecond', currentPageSecond);
  getExercises();
}
