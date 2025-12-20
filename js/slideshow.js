document.addEventListener("DOMContentLoaded", function () {
  const slides = Array.from(document.querySelectorAll('.crossFade__image'));
  if (!slides.length) return;
  let current = 0;
  const intervalMs = 4500;
  const transitionOverlapMs = 180;

  // Show first slide instantly
  slides[current].classList.add('no-transition', 'crossFade__image--active');
  requestAnimationFrame(() => {
    slides[current].classList.remove('no-transition');
  });

  function showSlide(nextIndex) {
    if (nextIndex === current) return;
    const inSlide = slides[nextIndex];
    const outSlide = slides[current];

    inSlide.classList.add('crossFade__image--active');

    setTimeout(() => {
      outSlide.classList.remove('crossFade__image--active');
      current = nextIndex;
    }, transitionOverlapMs);
  }

  function nextSlide() {
    if (slides.length === 1) return; // only one slide, nothing to do
    let next;
    do {
      next = Math.floor(Math.random() * slides.length);
    } while (next === current); // avoid repeating the same slide
    showSlide(next);
  }

  const timer = setInterval(nextSlide, intervalMs);

  window.addEventListener('beforeunload', () => clearInterval(timer));
});
