document.querySelector('.menu-item').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const isClickInside = menu.contains(event.target);

    if (!isClickInside) {
        document.querySelector('.dropdown').style.display = 'none';
    }
});