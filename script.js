
const gifts = [
  { name: "Plush Pepe", price: "1342 ⭐", img: "https://i.ibb.co/4fPlushPepe.png" },
  { name: "Loot Bags", price: "1210 ⭐", img: "https://i.ibb.co/lootbags.png" },
  { name: "Vintage Cigars", price: "980 ⭐", img: "https://i.ibb.co/vintagecigars.png" },
  { name: "Lol Pops", price: "860 ⭐", img: "https://i.ibb.co/lolpops.png" },
  { name: "Toy Bear", price: "720 ⭐", img: "https://i.ibb.co/toybear.png" },
  { name: "Snoop Cigar", price: "645 ⭐", img: "https://i.ibb.co/SnoopCigar.png" },
  { name: "Snoop Premium", price: "1950 ⭐", img: "https://i.ibb.co/SnoopPremium.png" }
];

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderGifts() {
  const grid = document.getElementById('gift-grid');
  gifts.forEach(gift => {
    const card = document.createElement('div');
    card.className = 'gift-card';
    card.innerHTML = \`
      <img src="\${gift.img}" alt="\${gift.name}" />
      <h3>\${gift.name}</h3>
      <p>\${gift.price}</p>
      <button>Buy</button>
    \`;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderGifts);
