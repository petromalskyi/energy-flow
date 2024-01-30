const formEl = document.querySelector('.js-footer-form');

formEl.addEventListener('submit', setEmail);

function setEmail(evt) {
  evt.preventDefault();
  let email = evt.target.elements.email.value.trim();

  if (email === '') {
    alert('please, enter your email');
    return;
  }

  //   const result = {
  //     email,
  //   };

  formEl.reset();
}
