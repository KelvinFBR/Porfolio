// Estilos compilados de sass
import "./css/index.css";

// Estilos de reset
import "./css/reset.css";

// owl corusel
import "./js/owl.carousel";

// Importar componentes
import "./js/scrollReveal";
import { toggleNav } from "./js/navbar";

// Nav bar
const navBar = document.querySelector(".header__nav-bar-container");
const navMenu = document.querySelector(".nav-mobile");

navBar.addEventListener("click", () => {
  toggleNav(navBar, navMenu);
});
