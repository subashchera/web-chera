// Smooth Scroll for Navbar Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Greeting in Console
console.log("Hello! Thanks for visiting my portfolio. 🚀");

// Change Navbar Background on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth Slide-in Navbar on Page Load
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("slide-in");
});
