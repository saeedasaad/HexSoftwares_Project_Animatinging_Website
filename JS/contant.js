// Simple fade-in animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  form.style.opacity = 0;
  form.style.transform = "translateY(30px)";

  setTimeout(() => {
    form.style.transition = "all 0.6s ease";
    form.style.opacity = 1;
    form.style.transform = "translateY(0)";
  }, 200);
});

// Basic form submission handler
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});