
    // Text for typewriter effect
    const text = "Machine Manufacturer";

    // Delay between each character (in milliseconds)
    const delay = 150;

    // Get the element where the typewriter effect will be applied
    const typewriterHeading = document.getElementById("typewriter");

    // Initialize index to 0
    let charIndex = 0;

    // Function to display text with typewriter effect
    function typeWriter() {
      if (charIndex < text.length) {
        typewriterHeading.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, delay);
      }
    }

    // Start the typewriter effect when the page loads
    window.onload = function () {
      typeWriter();
    };
