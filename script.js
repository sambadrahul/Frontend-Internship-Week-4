
// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (targetId.length > 1) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to my Personal Portfolio Website!");
});


document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.getElementById("exploreBtn");

    exploreButton.addEventListener("click", function () {
        alert("Welcome! Thanks for exploring my portfolio.");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
        } else {
            alert("Thank you, " + name + "! Your message has been received.");
            contactForm.reset();
        }
    });
});
