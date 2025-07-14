const gifts = [
  { id: 1, name: 'Pepe Chill', category: 'pepe', price: 520 },
  { id: 2, name: 'Party Doge', category: 'memes', price: 440 },
  { id: 3, name: 'Rare Unicorn', category: 'rare', price: 610 }
];
let cart = [];

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function toggleCart() {
  showSection('cart');
}
function filterCategory(cat) {
  const grid = document.getElementById('gift-grid');
  grid.innerHTML = '';
  gifts.filter(g => cat === 'all' || g.category === cat).forEach(gift => {
    const div = document.createElement('div');
    div.className = 'gift-card';
    div.innerHTML = `<p>${gift.name}</p><p>⭐ ${gift.price}</p><button onclick="addToCart(${gift.id})">Добавить</button>`;
    grid.appendChild(div);
  });
}
function addToCart(id) {
  const gift = gifts.find(g => g.id === id);
  cart.push(gift);
  updateCartUI();
}
function updateCartUI() {
  document.getElementById('cart-count').textContent = cart.length;
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const p = document.createElement('p');
    p.textContent = `${item.name} — ⭐ ${item.price}`;
    container.appendChild(p);
  });
  document.getElementById('total-price').textContent = `${total} ⭐`;
}
document.addEventListener("DOMContentLoaded", () => {
  filterCategory('all');
