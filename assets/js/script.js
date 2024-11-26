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
const contactForm = document.getElementById("contact");

// Add a submit event listener
contactForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Simulate a success prompt
  alert("Thank you for your message! We will get back to you soon.");

  // Optionally, clear the form fields
  contactForm.reset();
});
