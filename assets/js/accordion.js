const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector(".accordion__icon i");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    // Close all other accordions
    accordions.forEach((otherAccordion) => {
      const otherContent = otherAccordion.querySelector(".accordion__content");
      const otherIcon = otherAccordion.querySelector(".accordion__icon i");

      if (otherAccordion !== accordion) {
        otherContent.style.height = "0px";
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });

    // Toggle the clicked accordion
    if (isOpen) {
      content.style.height = "0px";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      content.style.height = `${content.scrollHeight}px`;
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});
