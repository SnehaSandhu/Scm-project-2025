// DOM Elements
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.getElementById("destination");
const bookButtons = document.querySelectorAll(".btn-primary");
const newsletterForm = document.querySelector(".newsletter-form");
const newsletterInput = document.querySelector(".newsletter-input");
const floatingArrow = document.querySelector(".floating");
const packageBoxes = document.querySelectorAll(".package-box");

// Toggle Navbar (Mobile Menu)
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-nav-link]");

function openNavbar() {
  navbar.classList.add("active");
  overlay.style.display = "block";
}

function closeNavbar() {
  navbar.classList.remove("active");
  overlay.style.display = "none";
}

navOpenBtn.addEventListener("click", openNavbar);
navCloseBtn.addEventListener("click", closeNavbar);
overlay.addEventListener("click", closeNavbar);

// Close Navbar when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});

// Search Destination Functionality
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.getElementById("destination");

searchBtn.addEventListener("click", () => {
  const destination = searchInput.value.trim();
  if (destination) {
    alert(`Searching tours for: ${destination}`);
  } else {
    alert("Please enter a destination!");
  }
});

// Book Button Functionality
const bookButtons = document.querySelectorAll(".btn-primary");

bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for choosing us! Our agent will contact you shortly.");
  });
});

