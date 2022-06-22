// Estilos compilados de sass
import "./css/index.css";

// Estilos de reset
import "./css/reset.css";

// Importar componentes
import { toggleNav } from "./js/navbar";

const navBar = document.querySelector(".header__nav-bar-container");
const navMenu = document.querySelector(".nav-mobile");

navBar.addEventListener("click", () => {
  toggleNav(navBar, navMenu);
});
