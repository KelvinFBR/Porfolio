const arrowTop = document.querySelector(".arrow-top-container");

document.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 2) {
    arrowTop.classList.add("active");
  } else {
    arrowTop.classList.remove("active");
  }
});
