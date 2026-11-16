document.addEventListener("DOMContentLoaded", () => {
    // 1. Get all images from all .foto sections
    const images = Array.from(document.querySelectorAll(".foto img"));

    // 2. Create the overlay once
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `
        <div class="overlay-content">
            <button class="close-btn">&times;</button>
            <button class="arrow-btn arrow-left">&#10094;</button>
            <img src="" alt="">
            <button class="arrow-btn arrow-right">&#10095;</button>
        </div>
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector("img");
    const closeBtn  = overlay.querySelector(".close-btn");
    const leftBtn   = overlay.querySelector(".arrow-left");
    const rightBtn  = overlay.querySelector(".arrow-right");

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;
        overlayImg.src = images[currentIndex].src;
    }

    // 3. Attach click events to every image across all .foto divs
    images.forEach((img, i) => {
        img.addEventListener("click", () => {
            showImage(i);
            overlay.classList.add("active");
        });
    });

    // 4. Overlay controls
    closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
    overlay.addEventListener("click", e => {
        if (e.target === overlay) overlay.classList.remove("active");
    });
    leftBtn.addEventListener("click", () => showImage(currentIndex - 1));
    rightBtn.addEventListener("click", () => showImage(currentIndex + 1));
});
