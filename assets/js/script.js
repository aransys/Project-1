/*jshint browser: true, devel: true */
"use strict";

// Variable Initialization - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
// Query Selector - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// Scroll tracking variables
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

// Scroll Event - https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
//Cross-Browser Scroll Position - https://css-tricks.com/scroll-fix-content/
// Navbar scroll behavior
window.addEventListener("scroll", function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Input Event Handling - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// DOM Element Selection and Traversal - https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
// Character Counter Pattern - https://javascript.info/events-change-input
// Message character counter
const messageInput = document.querySelector("#message");
messageInput.addEventListener("input", function handleInput() {
  const count = messageInput.value.length;
  const counter = messageInput.nextElementSibling.nextElementSibling;
  counter.textContent = `${count}/500`;
});

// Mobile Menu Toggle Pattern - https://web.dev/building-a-sidenav-component/
// ARIA Implementation - https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
// Event Delegation Pattern - https://javascript.info/event-delegation
// classList API Usag - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// Mobile menu elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const header = document.querySelector(".header");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  const isExpanded = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isExpanded);
}

hamburger.addEventListener("click", toggleMenu);

// Mobile menu link handling
const menuLinks = document.querySelectorAll(".navbar-menu a");
menuLinks.forEach(function handleLink(link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Click Outside Pattern - https://javascript.info/event-delegation#handling-clicks-outside-element
// Element.contains() Method - https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
document.addEventListener("click", function handleOutsideClick(e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Scroll Event - https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
// Sticky Positioning - https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky_positioning
// Header scroll behavior
let lastScroll = 0;
window.addEventListener("scroll", function handleHeaderScroll() {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Video Element API - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
// DOMContentLoaded Event - https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
// Change Event - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
// Video toggle functionality
document.addEventListener("DOMContentLoaded", function initVideo() {
  const videoToggle = document.querySelector(".video-toggle-input");
  const video = document.getElementById("bgVideo");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");

  if (videoToggle && video && playIcon && pauseIcon) {
    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playIcon.style.display = "none";
          pauseIcon.style.display = "block";
          videoToggle.checked = true;
        })
        .catch((error) => {
          playIcon.style.display = "block";
          pauseIcon.style.display = "none";
          video.pause();
          videoToggle.checked = false;
        });
    }

    videoToggle.addEventListener("change", function handleVideoToggle() {
      if (videoToggle.checked) {
        video.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        video.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    });
  }
});
