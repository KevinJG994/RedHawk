document.addEventListener("DOMContentLoaded", function () {
  // Navegación
  const homeLink = document.getElementById("index");
  homeLink.setAttribute("href", "../HTML/index.html");

  const logoLink = document.getElementById("logo");
  logoLink.setAttribute("href", "../HTML/index.html");

  const productsLink = document.getElementById("products");
  productsLink.setAttribute("href", "../HTML/products.html");

  const contactLink = document.getElementById("contact");
  contactLink.setAttribute("href", "../HTML/contact.html");

  const productsButton = document.getElementById("productsButton");
  productsButton.onclick = () => {
    window.location.href = "../HTML/products.html";
  };

  // Validar Form
  const formNewLetter = document.getElementById("form-newLetter");
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputCheck = document.getElementById("inputCheck");

  formNewLetter.onsubmit = (event) => {
    if (
      inputName.checkValidity() &&
      inputEmail.checkValidity() &&
      inputCheck.checkValidity()
      
    ) {
      alert("Gracias por suscribirte");
    } else {
      event.preventDefault();
    }
  };
});
