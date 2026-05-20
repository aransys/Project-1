/* Worcester Laundry — interactions
   Vanilla JS, no dependencies. Defer-loaded. */
(() => {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state ---------- */
  const header = $("#siteHeader");
  const onScrollHeader = () => header.classList.toggle("scrolled", window.scrollY > 30);
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle (persists) ---------- */
  const root = document.documentElement;
  const stored = localStorage.getItem("wl-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", stored || (systemDark ? "dark" : "light"));
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("wl-theme", next);
    });
  }

  /* ---------- Mobile menu ---------- */
  const hamburger  = $(".hamburger");
  const mobileMenu = $("#mobileMenu");
  const closeMenu = () => {
    hamburger?.classList.remove("is-open");
    hamburger?.setAttribute("aria-expanded", "false");
    mobileMenu?.classList.remove("open");
    mobileMenu?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  hamburger?.addEventListener("click", () => {
    const open = !mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    hamburger.classList.toggle("is-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$(".mobile-menu a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  /* ---------- Scroll-spy nav highlight ---------- */
  const sections = $$("main section[id]");
  const navLinks = $$(".navbar-menu a");
  if (sections.length && navLinks.length) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const id = "#" + en.target.id;
          navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(el => io.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("visible"));
  }

  /* ---------- Animated stats counter ---------- */
  const counters = $$(".stat .num");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.target || "0");
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const val = Math.round(target * easeOut(p));
      el.textContent = val.toLocaleString("en-GB") + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          animateCount(en.target);
          co.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(c => { c.textContent = (parseFloat(c.dataset.target||"0")).toLocaleString("en-GB") + (c.dataset.suffix||""); });
  }

  /* ---------- Price estimator ---------- */
  const pounds  = $("#estPounds");
  const items   = $("#estItems");
  const deliv   = $("#estDelivery");
  const oPounds = $("#estPoundsOut");
  const oItems  = $("#estItemsOut");
  const total   = $("#estTotal");
  const computeEstimate = () => {
    if (!pounds || !items || !total) return;
    const lbs = parseInt(pounds.value, 10);
    const it  = parseInt(items.value, 10);
    const washCost = lbs * 1.5;
    const dryCost  = it  * 5.0;
    let subtotal = washCost + dryCost;
    if (deliv?.checked && subtotal < 20) subtotal += 4;
    oPounds.value = `${lbs} lbs`;
    oItems.value  = `${it} item${it === 1 ? "" : "s"}`;
    total.textContent = "£" + subtotal.toFixed(2);
  };
  [pounds, items, deliv].forEach(el => el && el.addEventListener("input", computeEstimate));
  computeEstimate();

  /* ---------- Video pause/play ---------- */
  const video  = $("#bgVideo");
  const vToggle = $("#videoToggle");
  if (video && vToggle) {
    const playIcon  = vToggle.querySelector(".play-icon");
    const pauseIcon = vToggle.querySelector(".pause-icon");
    const setIcons = () => {
      const paused = video.paused;
      playIcon.style.display  = paused ? "block" : "none";
      pauseIcon.style.display = paused ? "none"  : "block";
      vToggle.setAttribute("aria-label", paused ? "Play background video" : "Pause background video");
    };
    vToggle.addEventListener("click", () => { video.paused ? video.play() : video.pause(); setIcons(); });
    video.addEventListener("play", setIcons);
    video.addEventListener("pause", setIcons);
    // Save bandwidth when tab hidden
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) video.pause(); else video.play().catch(()=>{});
    });
  }

  /* ---------- Scroll to top ---------- */
  const top = $("#scrollToTop");
  if (top) {
    const onScrollTop = () => top.classList.toggle("show", window.scrollY > 600);
    window.addEventListener("scroll", onScrollTop, { passive: true });
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Form: friendlier submit ---------- */
  const form = $(".contact-form");
  form?.addEventListener("submit", (e) => {
    const submit = form.querySelector(".contact-submit");
    if (submit) {
      submit.querySelector("span").textContent = "Sending…";
      submit.style.opacity = ".7";
    }
    // allows native navigation to thankyou.html
  });

  /* ---------- Smooth-scroll polyfill safety ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        }
      }
    });
  });
})();
