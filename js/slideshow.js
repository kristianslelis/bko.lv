let slideIndex = 0;
let images = []; // Array to hold preloaded images
const slideUrls = []; // Add URLs for all images
let imagesLoaded = 0;
const slides = document.getElementsByClassName("slides");
const slideshowContainer = document.querySelector('.slideshow-container');

// Hide slideshow initially
slideshowContainer.style.display = 'none';

// List all your image URLs here
const imageUrls = Array.from(slides).map(slide => slide.src); 

// Preload all images
function preloadImages() {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      imagesLoaded++;
      checkAllImagesLoaded(); // Check after each image is loaded
    };
    images.push(img); // Store the image
  });
}

// Check if all images have been loaded
function checkAllImagesLoaded() {
  if (imagesLoaded === imageUrls.length) {
    slideshowContainer.style.display = 'block'; // Show slideshow after images are loaded
    showSlides(); // Start slideshow after images are loaded
  }
}

// Function to show slides
function showSlides() {
  Array.from(slides).forEach(slide => {
    slide.classList.remove("active"); // Hide all slides
  });

  slides[slideIndex].classList.add("active"); // Show the current slide

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Reset to the first image if we reach the end
  }

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

preloadImages(); // Preload images