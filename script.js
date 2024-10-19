// Toggle extra info in About Me section

const toggleInfoBtn = document.getElementById('toggleInfoBtn');
const extraInfo = document.getElementById('extraInfo');
toggleInfoBtn.addEventListener('click', () => {
    extraInfo.classList.toggle('hidden');
    toggleInfoBtn.textContent = extraInfo.classList.contains('hidden') ? 'More Info' : 'Less Info';
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formStatus.textContent = 'Thanks for reaching out!';
        formStatus.classList.remove('hidden');
        formStatus.classList.add('text-yellow-400');
    } else {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.classList.remove('hidden');
        formStatus.classList.add('text-red-500');
    }
});