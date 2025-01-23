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
