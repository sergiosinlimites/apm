/**
 * FluxLine — Navegación, menú móvil, revelado al scroll y medidores OEE.
 */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");
  var navLinks = document.querySelectorAll(".nav__link");

  var SCROLL_THRESHOLD = 24;

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  }

  function toggleMenu() {
    if (!navToggle || !navMenu) return;
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", open ? "false" : "true");
    navMenu.classList.toggle("is-open", !open);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /** Revelado suave con IntersectionObserver */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /** Anillos OEE (SVG stroke-dasharray) */
  var R = 52;
  var C = 2 * Math.PI * R;
  var progressCircles = document.querySelectorAll(".oee-gauge__progress");

  function setGaugeDash(circle) {
    var pct = parseFloat(circle.getAttribute("data-pct"));
    if (isNaN(pct)) return;
    var len = (pct / 100) * C;
    circle.style.strokeDasharray = len + " " + C;
  }

  function animateGaugesWhenVisible() {
    if (!progressCircles.length) return;

    var gaugeSection = document.querySelector(".oee-gauges");
    if (!gaugeSection || !("IntersectionObserver" in window)) {
      progressCircles.forEach(function (c) {
        setGaugeDash(c);
      });
      return;
    }

    progressCircles.forEach(function (c) {
      c.style.strokeDasharray = "0 " + C;
    });

    var gaugeObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            progressCircles.forEach(function (c) {
              setGaugeDash(c);
            });
            gaugeObs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    gaugeObs.observe(gaugeSection);
  }

  animateGaugesWhenVisible();
})();
