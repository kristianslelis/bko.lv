// Hamburger toggle
function toggleNavbar() {
    const navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}

// Flash effect on mobile links
document.querySelectorAll('.navbar li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {    // mobile only
            link.classList.remove('flash'); // reset
            void link.offsetWidth;           // force reflow
            link.classList.add('flash');    // trigger animation
        }
    });
});
c