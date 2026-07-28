// assets/js/navigation.js

/**
 * Mobile navigation toggle
 * Handles: open/close, aria-expanded sync, outside click, Escape key,
 * and auto-close when a nav link is clicked.
 */
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a nav link is selected
  nav.querySelectorAll(".main-nav__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on outside click
  document.addEventListener("click", (event) => {
    const isClickInside =
      nav.contains(event.target) || toggle.contains(event.target);
    if (!isClickInside) closeMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  // Reset state if window is resized past desktop breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) closeMenu();
  });
})();
