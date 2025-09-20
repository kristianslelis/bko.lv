let cardSwiper = new Swiper(".mySwiper1 .swiper-inner", {
  slidesPerView: "auto",   // default for smallest screens
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev"
  },
  pagination: {
    el: ".swiper1-pagination",
    clickable: true,
    dynamicBullets: true
  }
});
