const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    // Toggle menu
    navLinks.classList.toggle("hidden");

    // Toggle icon
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});


// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("hidden");

//     if (icon.classList.contains("fa-bars")) {
//         icon.classList.replace("fa-bars", "fa-xmark");
//     } else {
//         icon.classList.replace("fa-xmark", "fa-bars");
//     }
// });