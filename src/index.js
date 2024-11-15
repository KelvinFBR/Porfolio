// Estilos compilados de sass
// import "./css/index.css";
import "./styles.css";

// owl corusel
import "./js/owl.carousel";

// arrow top
import "./js/arrow-top";

// Mixitup
import "./js/mixitup";

// Importar componentes
import "./js/scrollReveal";
import { toggleNav } from "./js/navbar";

// Nav bar
const navBar = document.querySelector(".header__nav-bar-container");
const navMenu = document.querySelector(".nav-mobile");
// copy year
const copyYear = document.querySelector(".copy_year");

navBar.addEventListener("click", () => {
  toggleNav(navBar, navMenu);
});


// get current year and add it to the copy year
const currentYear = new Date().getFullYear();
copyYear.innerHTML = currentYear;



