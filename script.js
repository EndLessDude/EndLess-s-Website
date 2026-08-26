const links = document.querySelectorAll("nav a, .home-buttons a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Remove active styling from all navbar buttons
        links.forEach(link => {
            link.classList.remove("active");
        });

        // Show the selected section
        const section = document.querySelector(this.getAttribute("href"));
        section.classList.add("active");

        // Add active styling to the clicked navbar button
        this.classList.add("active");
    });
});

// Show Home when the website first loads
document.querySelector("#home").classList.add("active");
document.querySelector('nav a[href="#home"]').classList.add("active");