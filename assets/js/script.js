/*jshint browser: true, devel: true */
"use strict";

/**
 * Worcester Laundry Service - Main JavaScript
 * Optimized for performance and maintainability
 */

// ==========================================================================
// Utility Functions
// ==========================================================================

/**
 * Debounce function to limit how often a function can fire
 * Improves scroll performance
 */
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ==========================================================================
// Navigation and Scroll Handling
// ==========================================================================

// Cache DOM elements for better performance
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const menuLinks = document.querySelectorAll(".navbar-menu a");

// Scroll state
let lastScrollTop = 0;
let lastScroll = 0;

/**
 * Unified scroll handler - combines previous duplicate listeners
 * Handles both navbar visibility and header scroll behavior
 */
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const currentScroll = window.pageYOffset;

  // Handle navbar visibility on scroll
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  // Update last scroll position (prevent negative scrolling)
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // Handle header scroll classes
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
}

// Add debounced scroll listener
window.addEventListener("scroll", debounce(handleScroll, 10));

// ==========================================================================
// Mobile Menu
// ==========================================================================

/**
 * Toggle mobile menu
 */
function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  const isExpanded = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isExpanded);
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isExpanded ? "hidden" : "";
}

/**
 * Close mobile menu
 */
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

// Event listeners for mobile menu
if (hamburger && navMenu) {
  hamburger.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}

// ==========================================================================
// Video Controls
// ==========================================================================

/**
 * Initialize and handle video playback
 */
function initVideo() {
  const videoToggle = document.querySelector(".video-toggle-input");
  const video = document.getElementById("bgVideo");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");

  if (!videoToggle || !video || !playIcon || !pauseIcon) {
    return; // Exit if elements don't exist
  }

  // Ensure video is muted for autoplay
  video.muted = true;

  // Attempt to play video
  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Video played successfully
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        videoToggle.checked = true;
      })
      .catch((error) => {
        // Autoplay failed - show play button
        console.log("Autoplay prevented:", error);
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        video.pause();
        videoToggle.checked = false;
      });
  }

  // Handle video toggle
  videoToggle.addEventListener("change", function () {
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

// ==========================================================================
// Form Handling
// ==========================================================================

/**
 * Character counter for textarea (if needed in future)
 * Currently not used as the HTML doesn't have a counter element
 */
function initCharacterCounter() {
  const messageInput = document.querySelector("#message");
  if (!messageInput) return;

  // Create counter element if it doesn't exist
  let counter = messageInput.parentElement.querySelector(".char-counter");
  if (!counter) {
    counter = document.createElement("div");
    counter.className = "char-counter";
    counter.textContent = "0/500";
    messageInput.parentElement.appendChild(counter);
  }

  messageInput.addEventListener("input", function () {
    const count = messageInput.value.length;
    counter.textContent = `${count}/500`;
    
    // Add warning class if approaching limit
    if (count > 450) {
      counter.classList.add("warning");
    } else {
      counter.classList.remove("warning");
    }
  });
}

/**
 * Form validation and submission
 */
function initForms() {
  const contactForm = document.querySelector(".contact-form");
  const newsletterForm = document.querySelector(".newsletter-form");

  // Enhanced form validation
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const email = contactForm.querySelector("#email");
      const name = contactForm.querySelector("#name");
      const message = contactForm.querySelector("#message");
      
      // Basic validation (browser will handle required fields)
      if (email && !email.validity.valid) {
        e.preventDefault();
        email.focus();
        return;
      }
    });
  }

  // Newsletter form
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      const email = newsletterForm.querySelector('input[type="email"]');
      
      if (email && !email.validity.valid) {
        e.preventDefault();
        email.focus();
        return;
      }
    });
  }
}

// ==========================================================================
// Smooth Scroll Enhancement
// ==========================================================================

/**
 * Enhanced smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      
      // Skip if it's just "#" or empty
      if (href === "#" || href === "") return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 70; // Account for fixed header
        
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
}

// ==========================================================================
// Intersection Observer for Animations (Future Enhancement)
// ==========================================================================

/**
 * Lazy load animations when elements come into view
 * Improves initial page load performance
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe service cards
  document.querySelectorAll(".service").forEach(service => {
    observer.observe(service);
  });

  // Observe pricing items
  document.querySelectorAll(".pricing-item").forEach(item => {
    observer.observe(item);
  });
}

// ==========================================================================
// Scroll to Top Button
// ==========================================================================

/**
 * Show/hide scroll to top button and handle click
 */
function initScrollToTop() {
  const scrollButton = document.getElementById("scrollToTop");
  
  if (!scrollButton) return;

  // Show button when scrolled down 300px
  window.addEventListener("scroll", debounce(function () {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  }, 100));

  // Scroll to top when clicked
  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================================================
// Initialization
// ==========================================================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("Worcester Laundry Service initialized");
  
  initVideo();
  initForms();
  initSmoothScroll();
  initScrollToTop();
  
  // Optional: Enable scroll animations if you want them
  // initScrollAnimations();
  
  // Optional: Enable character counter if needed
  // initCharacterCounter();
});

// ==========================================================================
// Performance Monitoring (Development Only)
// ==========================================================================

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  window.addEventListener("load", function () {
    // Performance metrics
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page Load Time: ${pageLoadTime}ms`);
  });
}
