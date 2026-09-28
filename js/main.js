// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const header = document.querySelector(".site-header");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: progressive enhancement.
// Works as a plain POST to web3forms even without JS.
// With JS, submits via fetch and shows an inline confirmation instead of navigating away.
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        formNote.hidden = false;
      } else {
        // Fall back to a normal form submit if the endpoint rejects the fetch.
        form.submit();
      }
    } catch (err) {
      form.submit();
    }
  });
}

// Theme toggle: follows the device by default; a click overrides and is remembered.
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}
