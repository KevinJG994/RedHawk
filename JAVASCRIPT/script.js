const homeLink = document.getElementById("index");
const productsLink = document.getElementById("products");
const contactLink = document.getElementById("contact");
const logoLink = document.getElementById("logo");

homeLink.addEventListener("click", (element) => {
  element.preventDefault();
  navigateTo("../HTML/index.html");
});

productsLink.addEventListener("click", (element) => {
  element.preventDefault();
  navigateTo("../HTML/products.html");
});

contactLink.addEventListener("click", (element) => {
  element.preventDefault();
  navigateTo("../HTML/contact.html");
});

logoLink.addEventListener("click", (element) => {
  element.preventDefault();
  navigateTo("../HTML/index.html");
});

function navigateTo(url) {
  window.location.href = url;
}

const starProducts = [
  {
    name: "Kamado Nezuko",
    description: "Colección Demon Slayer",
    image: "../Images/Nezuko.png",
    alt: "FunkoPop Nezuko",
    price: "24.99€",
    buyLink: "#",
  },
  {
    name: "Satoru Gojo",
    description: "Colección Jujutsu Kaisen",
    image: "../Images/Gojo.png",
    alt: "FunkoPop Gojo",
    price: "24.99€",
    buyLink: "#",
  },
  {
    name: "Sir Crocodile",
    description: "Colección One Piece",
    image: "../Images/Crocodile.png",
    alt: "FunkoPop Crocodile",
    price: "24.99€",
    buyLink: "#",
  },
  {
    name: "Pain",
    description: "Colección Naruto",
    image: "../Images/Pain.png",
    alt: "FunkoPop Pain",
    price: "24.99€",
    buyLink: "#",
  },
];

const productsRow = document.getElementById("products-row");

function renderProducts(starProducts) {
  starProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" class="card-img-top" alt="${product.alt}" />
      <div class="card-body">
        <h4 class="card-title">${product.name}</h4>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="price-container">
        <h5 class="precio">${product.price}</h5>
        <a href="${product.buyLink}" class="btn btn-danger">Comprar</a>
      </div>
    `;

    productsRow.appendChild(card);
  });
}

renderProducts(starProducts);
