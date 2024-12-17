let lastScrollTop = 0; // Variable to track the last scroll position
const navbar = document.querySelector(".navbar"); // Select the navbar

// Listen to the scroll event
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-80px"; // Hide the navbar (adjust height if needed)
  } else {
    // Scrolling up
    navbar.style.top = "0"; // Show the navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});

// Getting the form and the button
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const button = this.querySelector(".contact-submit");
  button.classList.add("loading");

  // Simulate form submission
  setTimeout(() => {
    button.classList.remove("loading");
    // Add success message or redirect
  }, 2000);
});

document.querySelector("#message").addEventListener("input", function () {
  const count = this.value.length;
  this.nextElementSibling.nextElementSibling.textContent = `${count}/500`;
});

// Hamburger menu
// Getting the necessary elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const header = document.querySelector(".header");

// Toggle menu function
function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", hamburger.classList.contains("active"));
}

// Click event to hamburger
hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking on a link
document.querySelectorAll(".navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Hide menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Hide/show header on scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Video toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const videoToggle = document.querySelector(".video-toggle-input");
  const video = document.getElementById("bgVideo");
  const label = document.querySelector(".video-toggle-label");

  if (videoToggle && video && label) {
    // Set initial state
    video.play();
    label.textContent = "⏸";

    videoToggle.addEventListener("change", function () {
      if (this.checked) {
        video.pause();
        label.textContent = "▶";
      } else {
        video.play();
        label.textContent = "⏸";
      }
    });
  }
});
