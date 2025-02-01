document.addEventListener("DOMContentLoaded", function() {
    // Define your colors
    var colors = ["#2E9967", "#5271A5", "#B35595"];
    
    // Get the selected menu item and apply random color to it
    var selectedMenuItem = document.querySelector('ul#menu li.selected a');
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    selectedMenuItem.style.backgroundColor = randomColor;

    // Function to check if the device is a computer
    function isComputer() {
      return window.innerWidth >= 1024; // Define the threshold for computer screens
    }

    if (isComputer()) {
      // Select all menu items
      var menuItems = document.querySelectorAll('ul#menu li a');

      // Add event listeners to each menu item for hover effect
      menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
          // Check if the parent li has the 'selected' class
          if (!item.parentElement.classList.contains('selected')) {
            // Randomly select a color
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            // Apply the random color as the background color
            item.style.backgroundColor = randomColor;
          }
        });

        item.addEventListener('mouseout', function() {
          // Check if the parent li has the 'selected' class
          if (!item.parentElement.classList.contains('selected')) {
            // Reset to the original background color when hover ends
            item.style.backgroundColor = "transparent";
          }
        });
      });
    }
  });