import axios from 'axios';

// export let choiceFilter = 'filter=Muscles';
// import { handleClick } from './home';

//import { choiceFilter } from './home';

// let currentPage = 1;
// let choiceFilter = 'filter=Muscles';

///////////////////////home.js
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

//////////////////////

const amountPageEl = document.querySelector('.js-exercises-countpage');
const listEl = document.querySelector('.js-exercises-list');

// function onChangeActivePage() {}

// console.log(choiceFilter);

////////////////////////////
// getFilters(choiceFilter, currentPage);
getFilters();

async function getFilters(choiceFilter = 'filter=Muscles', currentPage = 1) {
  axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';
  const resource = 'filters';
  const params = {
    page: currentPage,
    limit: 8,
  };

  // let markup = '';

  const response = await axios.get(`${resource}?${choiceFilter}`, { params });

  try {
    // console.log(response.data);
    // console.log(response);
    const amountPage = response.data.totalPages;

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

    createMarkup(response.data.results);
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

function createMarkup(array) {
  let markup = '';
  if (array.length > 0) {
    markup = array.reduce(
      (html, { name, filter, imgUrl }) =>
        html +
        `
      <li class="exercises-item">
        <a class="exercises-link" href="">
            <img
            class="exercises-image"
            src="${imgUrl}"
            alt="${name}"
            />
            <div class="div-position">
                <p class="exercises-filter">${filter}</p>
                <p class="exercises-name">${name}</p>
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

// const fetchUsers = async () => {
//   const response = await axios.get(
//     '<https://jsonplaceholder.typicode.com/users>',
//   );
//   return response.data;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// doStuff();
