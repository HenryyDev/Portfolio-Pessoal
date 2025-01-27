const toggleButton = document.getElementById("toggle-theme");
const body = document.body;
const themeIcon = document.querySelector(".theme-icon");

// Alterna entre os modos claro e escuro
toggleButton.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "light") {
    body.removeAttribute("data-theme");
    themeIcon.src = "assets/sol.png";

    themeIcon.alt = "Dark Mode";
  } else {
    body.setAttribute("data-theme", "light");
    themeIcon.src = "assets/lua.png"; // Define a imagem para o modo escuro
    themeIcon.alt = "Light Mode";
  }
});

const typewriter = new Typewriter("#typewriter", {
  loop: true, // Faz o texto repetir
  delay: 75, // Velocidade de digitação
});

typewriter
  .typeString("Olá, eu sou o <strong>Henry</strong>")
  .pauseFor(1500) // Pausa antes de apagar
  .deleteAll() // Apaga o texto

  .start(); // Inicia o loop
