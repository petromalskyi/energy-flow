//import { getFilters } from './api';
// export let choiceFilter = 'filter=Muscles';
//import { choiceFilter } from './api';
// console.log('home', choiceFilter);

let choiceFilter = 'filter=Muscles';

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

export function handleClick(event) {
  btnMusclesEl.classList.remove('active');
  btnBodyEl.classList.remove('active');
  btnEquipmentEl.classList.remove('active');

  event.target.classList.add('active');
  choiceFilter = event.target.dataset.action;

  currentPage = 1;
  // getFilters();
}
