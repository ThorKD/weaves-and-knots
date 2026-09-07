document.querySelectorAll('.heart').forEach((button) => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('saved');
    button.textContent = saved ? '♥' : '♡';
  });
});

const form = document.querySelector('#newsletter-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'You’re on the list — welcome to the loom.';
  form.reset();
});
