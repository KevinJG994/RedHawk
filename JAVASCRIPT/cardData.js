document.addEventListener("DOMContentLoaded", function () {
  const products = [
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
    {
      name: "Hawks",
      description: "Colección My Hero Academia",
      image: "../Images/Hawks.png",
      alt: "FunkoPop Hawks",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Eustass Kid",
      description: "Colección One Piece",
      image: "../Images/Kid.png",
      alt: "FunkoPop Kid",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Orochimaru",
      description: "Colección Naruto",
      image: "../Images/Orochimaru.webp",
      alt: "FunkoPop Orochimaru",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Shōto Todoroki",
      description: "Colección My Hero Academia",
      image: "../Images/Todoroki.png",
      alt: "FunkoPop Todoroki",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Trunks",
      description: "Colección Dragon Ball",
      image: "../Images/Trunks.webp",
      alt: "FunkoPop Trunks",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Aizawa Shōta",
      description: "Colección My Hero Academia",
      image: "../Images/Aizawa.jpg",
      alt: "FunkoPop Aizawa",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Onami",
      description: "Colección One Piece",
      image: "../Images/Onami.webp",
      alt: "FunkoPop Onami",
      price: "24.99€",
      buyLink: "#",
    },
    {
      name: "Jack Sparrow",
      description: "Colección Piratas del caribe",
      image: "../Images/Jack_sparrow.jpeg",
      alt: "FunkoPop Jack_sparrow",
      price: "24.99€",
      buyLink: "#",
    },
  ];

  function renderProducts(products, container) {
    products.forEach((product) => {
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

      container.appendChild(card);
    });
  }

  // Mostrar todos los productos
  const productsRow = document.getElementById("products-row");
  if (productsRow) {
    renderProducts(products, productsRow);
  }


  // Mostrar solo los 4 productos aleatorios
  const starProductsRow = document.getElementById("star-products-row");
  if (starProductsRow) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    const starProducts = shuffledProducts.slice(0, 4);
    renderProducts(starProducts, starProductsRow);
  }
});
