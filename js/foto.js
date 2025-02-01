document.addEventListener("DOMContentLoaded", function () {
  const fotoContent = document.querySelectorAll(".foto"); // Target all elements with class 'foto'
  const body = document.body;

  fotoContent.forEach((section) => {
    const images = section.querySelectorAll("img"); // Get all images within each 'foto' section

    images.forEach((img) => {
      // Wrap each image in a container
      const container = document.createElement("div");
      container.classList.add("image-container");
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);

      // Add download button
      const btn = document.createElement("button");
      btn.classList.add("download-btn");
      btn.innerHTML = '<img src="atteli/download.svg">';
      container.appendChild(btn);

      // Download functionality
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const link = document.createElement("a");
        link.href = img.dataset.src;  // Use the src for download
        link.download = img.alt || "download";
        link.click();
      });

      // Expand image functionality
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.style.display = "flex";

        const expandedImg = document.createElement("img");
        expandedImg.src = img.getAttribute("data-src");  // Load high-quality image from data-src
        expandedImg.alt = img.alt;
        expandedImg.classList.add("expanded");

        // Create and add close button
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", () => {
          overlay.remove(); // Close the overlay
        });

        overlay.appendChild(closeBtn);
        overlay.appendChild(expandedImg);
        body.appendChild(overlay);
      });
    });
  });
});
