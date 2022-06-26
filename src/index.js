// Estilos compilados de sass
// import "./css/index.css";
import "./styles.css";

// owl corusel
import "./js/owl.carousel";

// arrow top
import "./js/arrow-top";

// Importar componentes
import "./js/scrollReveal";
import { toggleNav } from "./js/navbar";

// Nav bar
const navBar = document.querySelector(".header__nav-bar-container");
const navMenu = document.querySelector(".nav-mobile");

navBar.addEventListener("click", () => {
  toggleNav(navBar, navMenu);
});
