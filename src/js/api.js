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
let currentPageSecond = 1;
let amountPageSecond = 1;
let arraySend = [];
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

let filter = 'muscles';
btnFiltersEl.addEventListener('click', onChangeFilter);
//  filter = 'muscles';
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

  currentPageSecond = 1;
  amountPageSecond = 1;

  let response = await axios.get(`${resource}?${choiceFilter}`, { params });
  try {
    // console.log(response.data);
    // console.log(response);
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

///////////////
//////////////////

const listEl = document.querySelector('.js-exercises-list');
console.log('listEl', listEl);

listEl.addEventListener('click', onClickExercises);

function onClickExercises(event) {
  event.preventDefault();
  // console.log(event.target);
  // console.log(event.target.dataset.filter);
  // console.log(event.target.dataset.name);
  nameQuery = event.target.dataset.name;
  console.log('nameQuery', nameQuery);
  exercisesTitleEl.textContent = `Exercises / `;
  let nameQueryFirstUpper = nameQuery[0].toUpperCase() + nameQuery.slice(1);
  exercisesTextEl.textContent = `${nameQueryFirstUpper}`;
  getExercises();
}

async function getExercises() {
  // axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';
  let resource = 'exercises';
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
  let responses = await axios.get(query);

  // const responses = await axios.get(resource, {
  //   params,
  // });

  //    exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10
  // responses = await axios.get('exercises?bodypart=neck&page=1&limit=10');
  try {
    // console.log(response.data);
    // console.dir(response);
    // console.dir(response.data);
    // console.dir(response.data.results);
    amountPageSecond = responses.data.totalPages;
    arraySend = responses.data.results;
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
    console.log('arraySend', arraySend);
    // createMarkupExercisesSecond(responses.data.results);
    createMarkupExercisesSecond(arraySend);
  } catch (error) {
    console.log(error);
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
