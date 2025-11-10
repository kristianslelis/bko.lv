// Replace your JS with this simpler, robust version
document.addEventListener("DOMContentLoaded", function () {
  const slides = Array.from(document.querySelectorAll('.crossFade__image'));
  if (!slides.length) return;
  let current = 0;
  const intervalMs = 4500;
  const transitionOverlapMs = 180; // small overlap so next starts fading in slightly before old finishes

  // Show first slide instantly (no transition)
  slides[current].classList.add('no-transition', 'crossFade__image--active');
  // allow browser to paint with no-transition then re-enable transitions
  requestAnimationFrame(() => {
    slides[current].classList.remove('no-transition');
  });

  function showSlide(nextIndex) {
    if (nextIndex === current) return;
    const inSlide = slides[nextIndex];
    const outSlide = slides[current];

    // bring the next slide in
    inSlide.classList.add('crossFade__image--active');

    // after a tiny overlap, remove the old slide
    setTimeout(() => {
      outSlide.classList.remove('crossFade__image--active');
      current = nextIndex;
    }, transitionOverlapMs);
  }

  function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }

  const timer = setInterval(nextSlide, intervalMs);

  // optional: clean up if page unloads (not required but tidy)
  window.addEventListener('beforeunload', () => clearInterval(timer));
});
