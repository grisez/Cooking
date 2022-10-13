const message =  "Votre message à bien été envoyé, je vous recontacte au plus vite, bonne journée.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
