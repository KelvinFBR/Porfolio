// owl corusel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

$(".skills-slider__container").owlCarousel({
  loop: true,
  autoWidth: true,
  margin: 40,
  center: true,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 4,
    },

    1000: {
      items: 9,
    },
  },
});
