
const text = "Machine Manufacturer";
const typewriterHeading = document.getElementById("typewriter");

let charIndex = 0;
const delay = 50;

function typeWriter() {
    if (charIndex < text.length) {
        typewriterHeading.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, delay);
    }
}

// Use DOMContentLoaded instead of window.load
document.addEventListener('DOMContentLoaded', () => {
    typewriterHeading.textContent = '';
    typeWriter(); // Start typing immediately after DOM is ready
});
