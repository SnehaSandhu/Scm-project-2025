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
function toggleNavbar(shouldOpen) {
  navbar.classList.toggle(ACTIVE_CLASS , shouldOpen);
  overlay.style.display = shouldOpen ? BLOCK_DISPLAY : NONE_DISPLAY;
}
function openNavbar(){
  toggleNavbar(true);
  document.body.style.overflow ="hidden";
}


function closeNavbar() {
  toggleNavbar(false);
  document.body.style.overflow ="";
}
function setupEventListeners(){
navOpenBtn.addEventListener("click", openNavbar);
navCloseBtn.addEventListener("click", closeNavbar);
overlay.addEventListener("click", closeNavbar);

  navLinks.forEach(link => {
    link.addEventListener("click", closeNavbar);
  });

  // Search functionality with input validation
  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  // Book buttons with event delegation potential
  bookButtons.forEach(button => {
    button.addEventListener("click", handleBooking);
  });
}
// Separate handler functions for better organization
function handleSearch() {
  const destination = searchInput.value.trim();
  
  if (!destination) {
    showAlert("Please enter a destination!");
    searchInput.focus();
    return;
  }
  
  showAlert(`Searching tours for: ${destination}`);
  
}

function handleBooking() {
  showAlert("Thank you for choosing us! Our agent will contact you shortly.");
  
}


function showAlert(message) {
  
  alert(message);
}


function init() {
  setupEventListeners();
}

// Start the application
init();


