function expandImage(src) {
    document.getElementById("fullImage").src = src.replace("thumbnail", "fullsize"); // Optional: replace with larger image path
    document.getElementById("imageModal").style.display = "block";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }