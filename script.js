
document.addEventListener("DOMContentLoaded", () => {
  const nftData = [
    { name: "Golden Telegram", price: "1342 ⭐", img: "https://i.postimg.cc/QMF9PzXp/golden-telegram.png" },
    { name: "TON Rocket", price: "1175 ⭐", img: "https://i.postimg.cc/Bn9mXtnp/ton-rocket.png" },
    { name: "Birthday Cake", price: "960 ⭐", img: "https://i.postimg.cc/x1PYB9CS/birthday-cake.png" },
    { name: "TON Whale", price: "1538 ⭐", img: "https://i.postimg.cc/g2fgnPyq/ton-whale.png" }
  ];

  const grid = document.getElementById("gift-grid");
  nftData.forEach(nft => {
    const card = document.createElement("div");
    card.className = "nft-card";
    card.innerHTML = \`
      <img src="\${nft.img}" alt="\${nft.name}" />
      <h4>\${nft.name}</h4>
      <p>\${nft.price}</p>
    \`;
    grid.appendChild(card);
  });
});

function showTab(id) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
