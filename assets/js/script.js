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

// Select the form and the button
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
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburgerMenu = document.querySelector(".hamburger-menu");
//   const navbarCenter = document.querySelector(".navbar-center");

//   hamburgerMenu.addEventListener("click", () => {
//     // Toggle active class on hamburger and navbar
//     hamburgerMenu.classList.toggle("active");
//     navbarCenter.classList.toggle("active");

//     // Accessibility: Toggle aria-expanded
//     const isExpanded = hamburgerMenu.classList.contains("active");
//     hamburgerMenu.setAttribute("aria-expanded", isExpanded);
//   });

//   // Close menu when a link is clicked
//   document.querySelectorAll(".navbar-links a").forEach((link) => {
//     link.addEventListener("click", () => {
//       hamburgerMenu.classList.remove("active");
//       navbarCenter.classList.remove("active");
//     });
//   });

//   // Close menu if clicked outside
//   document.addEventListener("click", (event) => {
//     const isClickInsideNav = navbarCenter.contains(event.target);
//     const isClickHamburger = hamburgerMenu.contains(event.target);

//     if (!isClickInsideNav && !isClickHamburger && navbarCenter.classList.contains("active")) {
//       hamburgerMenu.classList.remove("active");
//       navbarCenter.classList.remove("active");
//     }
//   });
// });
