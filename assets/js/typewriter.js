// Text for typewriter effect
const text = "Machine Manufacturer";

// Get the element where the typewriter effect will be applied
const typewriterHeading = document.getElementById("typewriter");

// Initialize index to 0
let charIndex = 0;
let lastTime = 0;
const delay = 50; // Reduced delay for faster typing

// Function to display text with typewriter effect
function typeWriter(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const elapsed = timestamp - lastTime;

    if (elapsed >= delay) {
        if (charIndex < text.length) {
            typewriterHeading.textContent += text.charAt(charIndex);
            charIndex++;
            lastTime = timestamp;
        }
    }

    if (charIndex < text.length) {
        requestAnimationFrame(typeWriter);
    }
}

// Start the typewriter effect when the page loads
window.addEventListener('load', () => {
    // Preload the text content
    typewriterHeading.textContent = '';
    requestAnimationFrame(typeWriter);
});
