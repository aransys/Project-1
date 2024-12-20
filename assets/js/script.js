/*jshint browser: true, devel: true */
"use strict";

// Scroll tracking variables
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

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

// Message character counter
const messageInput = document.querySelector("#message");
messageInput.addEventListener("input", function handleInput() {
  const count = messageInput.value.length;
  const counter = messageInput.nextElementSibling.nextElementSibling;
  counter.textContent = `${count}/500`;
});

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

// Outside click handler
document.addEventListener("click", function handleOutsideClick(e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

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
  } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Video toggle functionality
document.addEventListener("DOMContentLoaded", function initVideo() {
  const videoToggle = document.querySelector(".video-toggle-input");
  const video = document.getElementById("bgVideo");
  const label = document.querySelector(".video-toggle-label");

  if (videoToggle && video && label) {
    video.play();
    label.textContent = "⏸";

    videoToggle.addEventListener("change", function handleVideoToggle() {
      if (videoToggle.checked) {
        video.pause();
        label.textContent = "▶";
      } else {
        video.play();
        label.textContent = "⏸";
      }
    });
  }
});
