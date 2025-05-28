const formEl = document.querySelector('.js-form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

 
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }


  const userData = { email, password };
  console.log(userData);

 
  e.target.reset();
});