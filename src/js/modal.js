const buttonOpenModalEl = document.querySelector('.js-open-menu');
const backdropEl = document.querySelector('.header-backdrop');

buttonOpenModalEl.addEventListener('click', openModal);
backdropEl.addEventListener('click', openModal);

function openModal() {
  backdropEl.classList.toggle('is-hidden');
}
