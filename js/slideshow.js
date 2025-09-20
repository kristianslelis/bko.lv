document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.crossFade__image');
  let current = 0;

  // Show first slide instantly
  slides[current].style.opacity = 1;

  // Restore transition for all slides after the first frame
  requestAnimationFrame(() => {
    slides.forEach(slide => {
      slide.style.transition = "opacity 2s ease-in-out";
    });
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('crossFade__image--active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Start the slideshow after first frame
  setInterval(nextSlide, 4500);
});
