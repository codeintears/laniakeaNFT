document.addEventListener("DOMContentLoaded", () => {
  const gifts = [
    { id: 1, name: 'Pepe Chill', category: 'pepe', price: 520, img: 'https://i.postimg.cc/QMF9PzXp/golden-telegram.png' },
    { id: 2, name: 'Party Doge', category: 'memes', price: 440, img: 'https://i.postimg.cc/Bn9mXtnp/ton-rocket.png' },
    { id: 3, name: 'Rare Unicorn', category: 'rare', price: 610, img: 'https://i.postimg.cc/x1PYB9CS/birthday-cake.png' },
    { id: 4, name: 'TON Whale', category: 'rare', price: 590, img: 'https://i.postimg.cc/g2fgnPyq/ton-whale.png' }
  ];

  let cart = [];

  const grid = document.getElementById('gift-grid');

  function renderGifts(category = 'all') {
    grid.innerHTML = '';
    gifts
      .filter(g => category === 'all' || g.category === category)
      .forEach(gift => {
        const div = document.createElement('div');
        div.className = 'gift-card';
        div.innerHTML = `
          <img src="${gift.img}" alt="${gift.name}" />
          <h4>${gift.name}</h4>
          <p>⭐ ${gift.price}</p>
          <button onclick="addToCart(${gift.id})">Add</button>
        `;
        grid.appendChild(div);
      });
  }

  window.addToCart = function (id) {
    const item = gifts.find(g => g.id === id);
    if (item) {
      cart.push(item);
      alert(`Added "${item.name}" to cart.`);
    }
  };

  window.showSection = function (id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  };

  window.showTab = function (id) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };

  window.filterCategory = function (category) {
    renderGifts(category);
  };

  renderGifts(); // initial render
});
