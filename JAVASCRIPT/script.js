document.addEventListener("DOMContentLoaded", function () {
    // Navegación
    const homeLink = document.getElementById("index");
    homeLink.setAttribute("href", "../index.html");
  
    const logoLink = document.getElementById("logo");
    logoLink.setAttribute("href", "../index.html");
  
    const productsLink = document.getElementById("products");
    productsLink.setAttribute("href", "./HTML/products.html");
  
    const contactLink = document.getElementById("contact");
    contactLink.setAttribute("href", "./HTML/contact.html");
  

    // Botón de productos
    const productsButton = document.getElementById("productsButton");
    if (productsButton) {
      productsButton.onclick = () => {
        window.location.href = "./HTML/products.html";
      };
    }
  

    // Validar Form NewLetter
    const formNewLetter = document.getElementById("form-newLetter");
    if (formNewLetter) {
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
    }
  
    
    // Validar Form Contacto
    const formContact = document.getElementById("form-contact");
    if (formContact) {
      const contactName = document.getElementById("contactName");
      const contactEmail = document.getElementById("contactEmail");
      const contactCase = document.getElementById("contactCase");
      const contactText = document.getElementById("contactText");
      const contactCheck = document.getElementById("contactCheck");
  
      formContact.onsubmit = (event) => {
        if (
          contactName.checkValidity() &&
          contactEmail.checkValidity() &&
          contactCase.checkValidity() &&
          contactText.checkValidity() &&
          contactCheck.checkValidity()
        ) {
          alert("Gracias por contactar con nosotros.");
        } else {
          event.preventDefault();
        }
      };
    }
  });