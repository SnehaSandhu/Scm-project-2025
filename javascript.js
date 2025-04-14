// DOM Elements
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.getElementById("destination");
const bookButtons = document.querySelectorAll(".btn-primary");

// Navbar functions
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

navLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});

// Search Destination Functionality
searchBtn.addEventListener("click", () => {
  const destination = searchInput.value.trim();
  if (destination) {
    alert(`Searching tours for: ${destination}`);
  } else {
    alert("Please enter a destination!");
  }
});

// Book Button Functionality
bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for choosing us! Our agent will contact you shortly.");
  });
});

