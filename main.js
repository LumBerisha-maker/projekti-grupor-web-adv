const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('signupModal');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');

const lettersRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;


openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

form.addEventListener('submit', function(event) {
  const value = passwordInput.value.trim();

  if (!lettersRegex.test(value)) {
    event.preventDefault();
    alert('Please use only letters and single spaces in your password.');
  } else {
    alert('Form submitted successfully!');
  }
});
