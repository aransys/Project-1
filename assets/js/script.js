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
