// script.js
window.addEventListener('scroll', function() {
    let items = document.querySelectorAll('.timeline-item');

    for (let i = 0; i < items.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = items[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            items[i].classList.add('active');
        } else {
            items[i].classList.remove('active');
        }
    }
});