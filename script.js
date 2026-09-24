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
    themeBtn.innerHTML = "🌙 <span>Theme</span>";
} else {
    themeBtn.innerHTML = "☀️ <span>Theme</span>";
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
// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ================================
// PROJECT INFORMATION POPUP
// ================================

const projectModal = document.getElementById("projectModal");

const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalStatus = document.getElementById("modalStatus");


const projectData = {

    portfolio: {
        icon: "🌐",
        title: "Personal Portfolio",
        description:
            "This is my personal portfolio website where I can introduce myself, show my skills, services and projects. I built this website while learning modern web development.",
        tech: "HTML, CSS, JavaScript",
        status: "Currently Learning & Improving"
    },


    design: {
        icon: "💻",
        title: "Web Design Project",
        description:
            "A clean and responsive website design project focused on creating a modern, simple and user-friendly website interface.",
        tech: "HTML, CSS",
        status: "Learning Project"
    },


    javascript: {
        icon: "🚀",
        title: "JavaScript Project",
        description:
            "An interactive web project created to practice JavaScript. It focuses on making websites more dynamic and interactive.",
        tech: "HTML, CSS, JavaScript",
        status: "Coming Soon"
    }

};


function openProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }

    modalIcon.textContent = project.icon;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTech.textContent = project.tech;
    modalStatus.textContent = project.status;

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProject() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";
}


// Close popup when clicking outside

projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        closeProject();
    }

});


// Close popup with Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProject();
    }

});
// ================================
// PROJECT INFORMATION POPUP
// ================================

const projectModal = document.getElementById("projectModal");

const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalStatus = document.getElementById("modalStatus");


const projectData = {

    portfolio: {
        icon: "🌐",
        title: "Personal Portfolio",
        description:
            "This is my personal portfolio website where I can introduce myself, show my skills, services and projects. I built this website while learning modern web development.",
        tech: "HTML, CSS, JavaScript",
        status: "Currently Learning & Improving"
    },

    design: {
        icon: "💻",
        title: "Web Design Project",
        description:
            "A clean and responsive website design project focused on creating a modern, simple and user-friendly website interface.",
        tech: "HTML, CSS",
        status: "Learning Project"
    },

    javascript: {
        icon: "🚀",
        title: "JavaScript Project",
        description:
            "An interactive web project created to practice JavaScript. It focuses on making websites more dynamic and interactive.",
        tech: "HTML, CSS, JavaScript",
        status: "Coming Soon"
    }

};


function openProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }

    modalIcon.textContent = project.icon;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTech.textContent = project.tech;
    modalStatus.textContent = project.status;

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProject() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";
}


// Close popup when clicking outside

projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        closeProject();
    }

});


// Close popup with Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProject();
    }

});
