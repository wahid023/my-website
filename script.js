const learnMoreButton = document.querySelector(".hero button");

learnMoreButton.addEventListener("click", function () {
    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });
});


const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector(".contact input[type='text']").value;
    const email = document.querySelector(".contact input[type='email']").value;
    const phone = document.querySelector(".contact input[type='tel']").value;
    const message = document.querySelector(".contact textarea").value;


    // Check empty fields

    if (name === "" || email === "" || phone === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }


    // Check email

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }
    // Check phone number

const phonePattern = /^[0-9]{11}$/;

if (!phonePattern.test(phone)) {

    alert("Please enter a valid 11 digit phone number.");

    return;
}


    // Success message

    document.querySelector(".success-message").style.display = "block";

    contactForm.reset();

});


const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});