const toggleNav = (navBar, navMenu) => {
  navBar.classList.toggle("active");
  navMenu.classList.toggle("active");
  navMenu.firstElementChild.classList.toggle("active");
};

export { toggleNav };
