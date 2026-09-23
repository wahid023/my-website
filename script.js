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
