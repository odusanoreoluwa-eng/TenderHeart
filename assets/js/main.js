// assets/js/main.js

/**
 * Hero search form
 * No backend search yet — redirects to the services page with the
 * query preserved so it can be wired to real filtering later.
 */
// (function () {
//   const heroSearch = document.querySelector(".hero__search");
//   if (!heroSearch) return;

//   heroSearch.addEventListener("submit", (event) => {
//     const input = heroSearch.querySelector(".hero__search-input");
//     if (!input || input.value.trim() === "") {
//       event.preventDefault();
//       input.focus();
//     }
//     // else: allow native GET submit to services.html?q=...
//   });
// })();

// assets/js/main.js — append this block

/**
 * Scroll-triggered float-in animation
 * Observes any element with [data-animate="float-in"], adds .is-visible
 * once it enters the viewport, then stops observing it (animates once,
 * not every time the user scrolls past it).
 */
(function () {
  const animatedEls = document.querySelectorAll('[data-animate="float-in"]');
  if (!animatedEls.length) return;

  // Skip entirely for reduced-motion users — CSS already shows content
  // immediately, so there's no need to spend cycles observing.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  // Graceful fallback for browsers without IntersectionObserver support
  if (!("IntersectionObserver" in window)) {
    animatedEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  animatedEls.forEach((el) => observer.observe(el));
})();

// assets/js/main.js — append this block

/**
 * FAQ accordion — "one open at a time" enhancement
 * Core open/close already works natively via <details>/<summary> with
 * zero JS (progressive enhancement baseline). This just closes any
 * other open item when a new one is opened, which native <details>
 * doesn't do on its own without the (less-supported) `name` attribute
 * approach — handled manually here for broader compatibility.
 */
(function () {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
