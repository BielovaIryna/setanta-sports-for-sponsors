let ourSlider = new Swiper('.hero .js-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 4,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 1500,
  },
});
