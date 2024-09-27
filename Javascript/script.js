// Mobile Navbar

// Show navbar
const showNav = function(ham, nav, wrapper) {
    const hamBtn = document.querySelector(ham);
    const navUL = document.querySelector(nav);
    const navWrapper = document.querySelector('.nav-links-wrapper');

    hamBtn.addEventListener("click", () => {
        navUL.classList.toggle("show-nav");
        navWrapper.classList.toggle("nav-links-wrapper-extended");
    });

    navWrapper.addEventListener('click', () => {
        navUL.classList.toggle("show-nav");
        navWrapper.classList.toggle("nav-links-wrapper-extended");
    });
};

showNav('.hamburger-btn', '.nav-list')
    // Mobile Navbar

// Scroll Shadow
const header = document.querySelector("header");

const scrollShadow = () => {
    if (this.scrollY > 30) {
        header.classList.add("show-shadow");
    } else {
        header.classList.remove("show-shadow");
    }
};

window.addEventListener("scroll", scrollShadow);
// Scroll Shadow

// Scroll Active
let sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 50;
        sectionId = currentSection.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".header-nav-bar a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            document
                .querySelector(".header-nav-bar a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}
// Scroll Active

// Work Slider
let currentSlide = 0;
const workSets = document.querySelectorAll(".work-set");
const lines = document.querySelectorAll(".line");

const slider = (n) => {
    workSets.forEach((slide) => {
        slide.style.display = "none";
        lines.forEach((line) => {
            line.classList.remove("active");
        });
    });
    workSets[n].style.display = "flex";
    lines[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", slider(currentSlide));

const prev = () => {
    currentSlide <= 0 ? (currentSlide = workSets.length - 1) : currentSlide--;
    slider(currentSlide);
};

const next = () => {
    currentSlide >= workSets.length - 1 ? (currentSlide = 0) : currentSlide++;
    slider(currentSlide);
};

document.querySelector(".prev").addEventListener("click", prev);
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev-mobile").addEventListener("click", prev);
document.querySelector(".next-mobile").addEventListener("click", next);

lines.forEach((lines, i) => {
    lines.addEventListener("click", () => {
        console.log(currentSlide);
        slider(i);
        currentSlide = i;
    });
});
// Work Slider

// GreenSock Animation Platform
const body = document.querySelector("body");

gsap.registerPlugin(ScrollTrigger);

if ("ontouchstart" in body) {
    gsap.from(".rayyan-img", { opacity: 0, duration: 2, delay: 0.4, x: 80 });
    gsap.from(".contact-form-container", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        scrollTrigger: ".contact-form-container",
        y: 25,
    });
    gsap.from(".title", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        scrollTrigger: ".title",
        y: 25,
    });
    gsap.from(".paragraph", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        scrollTrigger: ".paragraph",
        y: 25,
    });
    gsap.from(".about-paragraph", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        scrollTrigger: ".about-paragraph",
        y: 25,
    });
    gsap.from("hr", {
        opacity: 0,
        duration: 2,
        delay: 0.7,
        scrollTrigger: "hr",
        y: 25,
    });
    gsap.from(".heading", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        scrollTrigger: ".heading",
        y: 25,
    });
    gsap.from(".technologies", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        scrollTrigger: ".technologies",
        y: 25,
    });
    gsap.from(".works-slider-container", {
        opacity: 0,
        duration: 2,
        delay: 0.5,
        scrollTrigger: ".works-slider-container",
        y: 25,
    });
    gsap.from(".work", {
        opacity: 0,
        duration: 2,
        delay: 1.2,
        scrollTrigger: ".work",
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".header-title, .hamburger-btn", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        y: -25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".header-nav-item", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".footer-nav-item, .social-link", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: ".footer-nav-item, .social-link",
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".copyright, .credits, .news-letter, .footer-title", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: ".copyright, .credits, .news-letter, .footer-title",
        y: 25,
    });
} else {
    gsap.from(".rayyan-img", { opacity: 0, duration: 2, delay: 0.4, x: 80 });
    gsap.from(".contact-form-container", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        scrollTrigger: ".contact-form-container",
        x: 80,
    });
    gsap.from(".title", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        scrollTrigger: ".title",
        y: 25,
    });
    gsap.from(".paragraph", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        scrollTrigger: ".paragraph",
        x: -80,
    });
    gsap.from(".about-paragraph", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        scrollTrigger: ".about-paragraph",
        x: -80,
    });
    gsap.from("hr", {
        opacity: 0,
        duration: 2,
        delay: 0.7,
        scrollTrigger: "hr",
        y: 25,
    });
    gsap.from(".heading", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        scrollTrigger: ".heading",
        x: -80,
    });
    gsap.from(".technologies", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        scrollTrigger: ".technologies",
        x: 80,
    });
    gsap.from(".works-slider-container", {
        opacity: 0,
        duration: 2,
        delay: 0.5,
        scrollTrigger: ".works-slider-container",
        x: -25,
    });
    gsap.from(".work", {
        opacity: 0,
        duration: 2,
        delay: 1.2,
        scrollTrigger: ".work",
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".header-title, .hamburger-btn", {
        opacity: 0,
        duration: 2,
        delay: 0.4,
        x: -25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".header-nav-item", {
        opacity: 0,
        duration: 2,
        delay: 0.6,
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".footer-nav-item, .social-link", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: ".footer-nav-item, .social-link",
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
    });
    gsap.from(".copyright, .credits, .news-letter, .footer-title", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: ".copyright, .credits, .news-letter, .footer-title",
        y: 25,
    });
}
// GreenSock Animation Platform
