document.addEventListener("DOMContentLoaded", () => {
    // Get all buttons that should open an image
    const buttons = Array.from(document.querySelectorAll(".btn-open"));

    // Create the overlay once
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `
        <div class="overlay-content">
            <button class="close-btn">&times;</button>
            <img src="" alt="">
        </div>
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector("img");
    const closeBtn  = overlay.querySelector(".close-btn");

    // Open overlay when button clicked
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const src = btn.getAttribute("data-src");
            overlayImg.src = src;
            overlay.classList.add("active");
        });
    });

    // Overlay controls
    closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
    overlay.addEventListener("click", e => {
        if (e.target === overlay) overlay.classList.remove("active");
    });
});
