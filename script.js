const gifts = [
  {
    name: "Golden Star",
    price: "1342 ⭐",
    img: "https://i.ibb.co/7W4gMNd/gold-star-nft.png"
  },
  {
    name: "TON Rocket",
    price: "1120 TON",
    img: "https://i.ibb.co/Kyy9Kkz/ton-rocket.png"
  },
  {
    name: "Santa Telegram",
    price: "988 ⭐",
    img: "https://i.ibb.co/Nskz7XR/santa-nft.png"
  }
];

function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function renderGifts() {
  const container = document.querySelector('.gift-grid');
  container.innerHTML = "";
  gifts.forEach(gift => {
    const card = document.createElement('div');
    card.className = 'gift-card';
    card.innerHTML = `
      <img src="${gift.img}" alt="${gift.name}" />
      <h3>${gift.name}</h3>
      <p>${gift.price}</p>
    `;
    container.appendChild(card);
  });
}

window.onload = () => {
  renderGifts();
  showSection('gifts');
};
