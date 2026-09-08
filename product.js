document.title = document.title.replace('Weaves & Knots', 'Tanisha Weaves & Knots');
document.querySelectorAll('.wordmark').forEach((mark) => { mark.innerHTML = 'Tanisha Weaves <i>&</i> Knots'; mark.style.fontSize = window.innerWidth < 760 ? '15px' : '20px'; });

let quantity = 1;
const quantityLabel = document.querySelector('#quantity');
const bagCount = document.querySelector('#bag-count');
document.querySelector('#decrease').addEventListener('click', () => { if (quantity > 1) { quantity--; quantityLabel.textContent = quantity; } });
document.querySelector('#increase').addEventListener('click', () => { quantity++; quantityLabel.textContent = quantity; });
document.querySelectorAll('.choice').forEach((choice) => choice.addEventListener('click', () => { document.querySelectorAll('.choice').forEach((item) => item.classList.remove('active')); choice.classList.add('active'); }));
document.querySelector('.add-button').addEventListener('click', (event) => { const button = event.currentTarget; button.textContent = 'Added to bag ✓'; button.classList.add('added'); bagCount.textContent = quantity; });
