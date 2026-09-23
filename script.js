// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});
// ================================
// DARK / LIGHT MODE
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }

});


// ================================
// CONTACT FORM
// ================================

const form = document.querySelector(".contact form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    successMessage.style.display = "block";

    form.reset();

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 4000);

});
// TYPING EFFECT

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Designer",
    "Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();
// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".profile, .services, .skills, .projects, .about, .contact"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("reveal", "show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
