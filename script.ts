// TypeScript file for smooth scrolling

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all sections
  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll("section");

  // Function to handle smooth scrolling to section
  function scrollToSection(this: HTMLAnchorElement, event: MouseEvent): void {
    event.preventDefault();

    const targetId: string = this.getAttribute("href")?.substring(1) || "";
    const targetSection: HTMLElement | null = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  // Select all navigation links
  const navLinks: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll("nav ul li a");

  // Add event listener to each navigation link
  navLinks.forEach((link: HTMLAnchorElement) => {
    link.addEventListener("click", scrollToSection);
  });
});

// Function to toggle the visibility of the skills section
const toggleButton = document.getElementById("toggle-skills");
const toggleSkillsVisibility = () => {
  const skillsSection = document.getElementById("skillshow");
  if (skillsSection) {
    if (skillsSection.style.display === "none") {
      // Set display to 'block' to show the list again
      toggleButton?.innerHTML === "Hide skills";
      skillsSection.style.display = "flex";
    } else {
      // Set display to 'none' to hide the list
      skillsSection.style.display = "none";
    }
  }
};

// Attach event listener to the button
if (toggleButton) {
  toggleButton.addEventListener("click", toggleSkillsVisibility);
}
