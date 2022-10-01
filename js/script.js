// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navBar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const logoWhite = document.querySelector(".logo--white");
const navLink = document.querySelectorAll(".nav-link");
// const socialIcons = document.querySelector(".social-icons");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    header.classList.toggle("active");
    navBar.classList.toggle("active");
    logo.classList.toggle("active");
    logoWhite.classList.toggle("active");
    // socialIcons.classList.toggle("active");
})

navLink.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    header.classList.remove("active");
    navBar.classList.toggle("active");
    logo.classList.toggle("active");
    logoWhite.classList.toggle("active");
    // socialIcons.classList.toggle("active");
}))