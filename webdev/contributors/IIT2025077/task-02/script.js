const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});