import ScrollReveal from "scrollreveal";

// configuracion general
ScrollReveal({});

// ScrollReveal Header
ScrollReveal().reveal(".header__nav", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

ScrollReveal().reveal(".header__bg-img", {
  duration: 2000,
  delay: 300,
});

ScrollReveal().reveal(".header__description-text", {
  duration: 3000,
  delay: 600,
  origin: "top",
  distance: "200px",
});

ScrollReveal().reveal(".header__btn-container", {
  duration: 3000,
  delay: 600,
  origin: "bottom",
  distance: "200px",
});

ScrollReveal().reveal(".header__icon--container", {
  duration: 3000,
  delay: 1500,
  origin: "top",
  distance: "50px",
});

// ScrollReveal Aboout-Me
ScrollReveal().reveal(".about-me__title", {
  reset: true,
  duration: 2000,
  origin: "right",
  distance: "80px",
});

ScrollReveal().reveal(".about-me__bar", {
  reset: true,
  duration: 2000,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".about-me__photo-container", {
  reset: true,
  duration: 2000,
  delay: 200,
  origin: "left",
  distance: "100px",
});
ScrollReveal().reveal(".main__about-me-description", {
  reset: true,
  duration: 2000,
  delay: 400,
  origin: "right",
  distance: "100px",
});
ScrollReveal().reveal(".bg-circles-container", {
  reset: true,
  duration: 2000,
  delay: 800,
  origin: "left",
  distance: "100px",
});
