/**
 * FluxLine — Navegación, menú móvil, dropdown Módulos, revelado al scroll y medidores OEE.
 */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");
  var navDropdown = document.querySelector("[data-nav-dropdown]");
  var navDropdownBtn = document.getElementById("nav-modules-toggle");
  var mqMobileNav = window.matchMedia("(max-width: 880px)");

  var navLinks = document.querySelectorAll(
    ".nav__list > li > .nav__link, .nav__dropdown-menu .nav__link--sub"
  );

  var SCROLL_THRESHOLD = 24;

  function isMobileNavLayout() {
    return mqMobileNav.matches;
  }

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  function closeDropdown() {
    if (!navDropdown || !navDropdownBtn) return;
    navDropdown.classList.remove("nav__dropdown--open");
    navDropdownBtn.setAttribute("aria-expanded", "false");
  }

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    closeDropdown();
  }

  function toggleMenu() {
    if (!navToggle || !navMenu) return;
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", open ? "false" : "true");
    navMenu.classList.toggle("is-open", !open);
    closeDropdown();
  }

  function toggleDropdown(ev) {
    if (!navDropdown || !navDropdownBtn) return;
    ev.preventDefault();
    ev.stopPropagation();
    var willOpen = !navDropdown.classList.contains("nav__dropdown--open");
    navDropdown.classList.toggle("nav__dropdown--open", willOpen);
    navDropdownBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
  }

  if (navDropdownBtn && navDropdown) {
    navDropdownBtn.addEventListener("click", toggleDropdown);
  }

  document.addEventListener("click", function (ev) {
    if (!navDropdown) return;
    if (!navDropdown.contains(ev.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") {
      closeDropdown();
      closeMenu();
    }
  });

  window.addEventListener(
    "resize",
    function () {
      if (!isMobileNavLayout()) {
        closeDropdown();
      }
    },
    { passive: true }
  );

  function onMqMobileNavChange() {
    if (!mqMobileNav.matches) {
      closeDropdown();
    }
  }
  if (typeof mqMobileNav.addEventListener === "function") {
    mqMobileNav.addEventListener("change", onMqMobileNavChange);
  } else if (typeof mqMobileNav.addListener === "function") {
    mqMobileNav.addListener(onMqMobileNavChange);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
      closeDropdown();
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
