let imageSwiper = new Swiper(".mySwiper .container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
    dynamicBullets: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});
