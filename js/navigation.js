// Hamburger toggle
function toggleNavbar() {
    const navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}

// Removed flash effect on mobile links
// document.querySelectorAll('.navbar li a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth <= 900) {    
//             link.classList.remove('flash'); 
//             void link.offsetWidth;           
//             link.classList.add('flash');    
//         }
//     });
// });
