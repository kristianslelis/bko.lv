// JavaScript to toggle the visibility of the attribution content and triangle direction
document.getElementById('attribution-toggle').addEventListener('click', function() {
    var content = document.getElementById('attribution-content');
    var icon = document.getElementById('toggle-icon');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('visible');
        icon.classList.remove('triangle-right');
        icon.classList.add('triangle-down');
    } else {
        content.classList.remove('visible');
        content.classList.add('hidden');
        icon.classList.remove('triangle-down');
        icon.classList.add('triangle-right');
    }
});
