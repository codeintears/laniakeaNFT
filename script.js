const gifts = [
  { id: 1, name: 'Pepe Chill', category: 'pepe', price: 520 },
  { id: 2, name: 'Party Doge', category: 'memes', price: 440 },
  { id: 3, name: 'Rare Unicorn', category: 'rare', price: 610 },
];

let cart = [];

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function filterCategory(cat) {
  const grid = document.getElementById('gift-grid');
  grid.innerHTML = '';
  gifts.filter(g => cat === 'all' || g.category === cat).forEach(gift => {
    const div = document.createElement('div');
    div.className = 'gift-card';
    div.innerHTML = `<p>${gift.name}</p><p>⭐ ${gift.price}</p><button onclick="addToCart(${gift.id})">Add</button>`;
    grid.appendChild(div);
  });
}
