import { getFilters } from './api';

//import { choiceFilter } from './api';
// console.log('home', choiceFilter);

//export let choiceFilter = 'filter=Muscles';

let choiceFilter = 'filter=Muscles';
let currentPage = 1;

const btnFiltersEl = document.querySelector('.exercises-list-btn');
const btnMusclesEl = document.querySelector(
  'button[data-action="filter=Muscles"]',
);
const btnBodyEl = document.querySelector(
  'button[data-action="filter=Body parts"]',
);
const btnEquipmentEl = document.querySelector(
  'button[data-action="filter=Equipment"]',
);

btnFiltersEl.addEventListener('click', handleClick);

function handleClick(event) {
  btnMusclesEl.classList.remove('active');
  btnBodyEl.classList.remove('active');
  btnEquipmentEl.classList.remove('active');

  event.target.classList.add('active');

  choiceFilter = event.target.dataset.action;

  currentPage = 1;
  // return choiceFilter, currentPage;
  getFilters(choiceFilter, currentPage);
}
