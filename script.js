
// This file can be used for any global JavaScript functions
// you might want to add later. For now, it's empty as per
// the original structure, with JS being page-specific.

document.addEventListener("DOMContentLoaded", () => {
    // Example: Set current year in footer if not handled by page-specific JS
    // This is a fallback or could be the primary way if you centralize JS.
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan && !yearSpan.textContent) { // Check if already set
        yearSpan.textContent = new Date().getFullYear();
    }

    // Example: Smooth scroll for anchor links (if you add any)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});