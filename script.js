const words = ["Developer", "Designer", "Teacher", "Learner"];
let wordIndex = 0;
let letterIndex = 0;
const typingSpeed = 100; // Speed of typing effect in milliseconds
const pauseDuration = 1000; // Duration to pause between words in milliseconds
const slideshowElement = document.getElementById("slideshow");

function typeWord() {
    const currentWord = words[wordIndex];
    if (letterIndex < currentWord.length) {
        slideshowElement.textContent += currentWord[letterIndex];
        letterIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(() => {
            eraseWord();
        }, pauseDuration);
    }
}

function eraseWord() {
    if (letterIndex > 0) {
        slideshowElement.textContent = slideshowElement.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseWord, typingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
    }
}

typeWord(); // Start typing the first word
