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

// function onChangeActivePage() {}

// console.log(choiceFilter);
const quoteTextEl = document.querySelector('.quote-text');
const quoteAuthorEl = document.querySelector('.quote-author');

async function getQuote() {
  axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/quote';

  const date = new Date();
  const currentDate =
    date.getFullYear() + String(date.getMonth()) + date.getDate();

  let objLocalStorage = {};
  if (localStorage.getItem('quotation')) {
    objLocalStorage = JSON.parse(localStorage.getItem('quotation'));
  }

  if (
    !localStorage.getItem('quotation') ||
    currentDate !== objLocalStorage.date
  ) {
    const response = await axios.get();
    try {
      quoteTextEl.textContent = response.data.quote;
      quoteAuthorEl.textContent = response.data.author;
      const settings = {
        date: currentDate,
        quote: response.data.quote,
        author: response.data.author,
      };
      localStorage.setItem('quotation', JSON.stringify(settings));
    } catch (error) {
      alert(error.message);
    }
  } else {
    quoteTextEl.textContent = objLocalStorage.quote;
    quoteAuthorEl.textContent = objLocalStorage.author;
  }
}

getQuote();

const listEl = document.querySelector('.js-exercises-list');

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

  let markup = '';
  const response = await axios.get(`${resource}?${choiceFilter}`, { params });

  try {
    // console.log(response.data);
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

      amountPageEl.addEventListener('click', onClick);
    }

    createMarkup(response.data.results);
  } catch (error) {
    alert(error.message);
  }
}

// getFilters();

function onClick(event) {
  for (const el of amountPageEl.children) {
    el.classList.remove('active');
  }

  event.target.classList.add('active');
  currentPage = Number(event.target.dataset.action);
  getFilters(choiceFilter, currentPage);
}

function createMarkup(array) {
  //   console.log(array);
  const markup = array.reduce(
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
