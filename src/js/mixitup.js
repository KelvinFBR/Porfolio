import mixitup from "mixitup";

const containerEl = document.querySelector(".container");

console.log(containerEl);

const config = {
  animation: {
    animateResizeContainer: false,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    animateResizeTargets: true,
    clampHeight: false,
    clampWidth: false,
  },
  selectors: {
    target: ".mix",
  },
};

// Pass the configuration object to the mixitup factory function

var mixer = mixitup(containerEl, config);
