var swiper = new Swiper(".testimonials-slider", {
  effect: "coverflow",
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: -70,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  spaceBetween: 50,
  centeredSlides: false,
  slidesPerGroup: 3,
  slidesPerGroupSkip: 3,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
