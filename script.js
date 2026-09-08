document.title = 'Tanisha Weaves & Knots — Handloom, held close';
document.querySelectorAll('.wordmark').forEach((mark) => { mark.innerHTML = 'Tanisha Weaves <i>&</i> Knots'; mark.style.fontSize = window.innerWidth < 760 ? '15px' : '20px'; });

let bagCount = 0;
const bagCountElement = document.querySelector('#bag-count');
const cartDrawer = document.querySelector('#cart-drawer');
const cartBackdrop = document.querySelector('#cart-backdrop');
const cartItems = document.querySelector('#cart-items');
const wishlistList = document.querySelector('#wishlist-list');
const savedProducts = new Set();
const openCart = () => { cartDrawer.classList.add('open'); cartBackdrop.classList.add('open'); };
const closeCart = () => { cartDrawer.classList.remove('open'); cartBackdrop.classList.remove('open'); };
document.querySelector('#bag-button').addEventListener('click', openCart);
document.querySelector('#cart-close').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);
const renderWishlist = () => { wishlistList.innerHTML = savedProducts.size ? [...savedProducts].map((product) => `<div class="wishlist-item"><span>${product}</span><button data-remove="${product}" aria-label="Remove ${product}">×</button></div>`).join('') : '<p class="empty-note">Tap a heart to save a piece for later.</p>'; wishlistList.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { savedProducts.delete(button.dataset.remove); document.querySelector(`.heart[data-product="${button.dataset.remove}"]`).classList.remove('saved'); document.querySelector(`.heart[data-product="${button.dataset.remove}"]`).textContent = '♡'; renderWishlist(); })); };
document.querySelectorAll('.heart').forEach((button) => { button.addEventListener('click', () => { const product = button.dataset.product; const saved = button.classList.toggle('saved'); button.textContent = saved ? '♥' : '♡'; saved ? savedProducts.add(product) : savedProducts.delete(product); renderWishlist(); openCart(); }); });
document.querySelectorAll('.add-to-bag').forEach((button) => { button.addEventListener('click', () => { if (button.classList.contains('added')) return; bagCount += 1; bagCountElement.textContent = bagCount; button.classList.add('added'); button.textContent = 'Added to bag ✓'; cartItems.innerHTML = `<p><strong>${button.dataset.product}</strong><br/><span class="empty-note">Added to your bag</span></p>`; openCart(); }); });

const form = document.querySelector('#newsletter-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'You’re on the list — welcome to the loom.';
  form.reset();
});
