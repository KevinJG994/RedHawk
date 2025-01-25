
const formContact = document.getElementById("form-contact");
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
}