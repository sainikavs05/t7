/* =====================================
   MOBILE NAVIGATION MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }

});


/* =====================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
===================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


/* =====================================
   SMOOTH SCROLLING
===================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =====================================
   SCROLL ANIMATIONS
===================================== */

const animatedElements =
    document.querySelectorAll(".animate");

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* =====================================
   CONTACT FORM VALIDATION
===================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    /* Clear previous errors */

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    formMessage.textContent = "";

    let valid = true;


    /* Name validation */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    }

    else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    /* Message validation */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    }


    /* Final result */

    if (valid) {

        formMessage.textContent =
            "Message submitted successfully!";

        contactForm.reset();

    }

});