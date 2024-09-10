// TypeScript file for smooth scrolling
// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Select all sections
    var sections = document.querySelectorAll("section");
    // Function to handle smooth scrolling to section
    function scrollToSection(event) {
        var _a;
        event.preventDefault();
        var targetId = ((_a = this.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.substring(1)) || "";
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }
    // Select all navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
    // Add event listener to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener("click", scrollToSection);
    });
});
// Function to toggle the visibility of the skills section
var toggleButton = document.getElementById("toggle-skills");
var toggleSkillsVisibility = function () {
    var skillsSection = document.getElementById("skillshow");
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            // Set display to 'block' to show the list again
            (toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.innerHTML) === "Hide skills";
            skillsSection.style.display = "flex";
        }
        else {
            // Set display to 'none' to hide the list
            skillsSection.style.display = "none";
        }
    }
};
// Attach event listener to the button
if (toggleButton) {
    toggleButton.addEventListener("click", toggleSkillsVisibility);
}
