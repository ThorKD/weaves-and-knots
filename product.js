let quantity = 1;
const quantityLabel = document.querySelector('#quantity');
const bagCount = document.querySelector('#bag-count');
document.querySelector('#decrease').addEventListener('click', () => { if (quantity > 1) { quantity--; quantityLabel.textContent = quantity; } });
document.querySelector('#increase').addEventListener('click', () => { quantity++; quantityLabel.textContent = quantity; });
document.querySelectorAll('.choice').forEach((choice) => choice.addEventListener('click', () => { document.querySelectorAll('.choice').forEach((item) => item.classList.remove('active')); choice.classList.add('active'); }));
document.querySelector('.add-button').addEventListener('click', (event) => { const button = event.currentTarget; button.textContent = 'Added to bag ✓'; button.classList.add('added'); bagCount.textContent = quantity; });
