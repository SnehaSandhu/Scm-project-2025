const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector(".navbar");

navOpenBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
});

const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  cursorCircle.style.top = `${e.clientY}px`;
  cursorCircle.style.left = `${e.clientX}px`;
});

const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navbar.classList.remove("nav-active"); 
    }
  });
});

const bookButtons = document.querySelectorAll(".btn-primary");

bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thanks for booking! 🌍 Our team will contact you shortly.");
  });
});

