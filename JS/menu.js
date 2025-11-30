const navMenu = document.querySelector(".nav-menu");
const menuToggle = document.querySelector("#menu");
const items = document.querySelectorAll(".nav-bounding-element");

let isOpen = false;

gsap.set(items, { y: "-100%" });

menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  isOpen ? closeMenu() : openMenu();
});

function openMenu() {
  navMenu.style.display = "flex";
  menuToggle.style.display = "none";  

  gsap.to(items, {
    y: "0%",
    duration: 1,
    ease: "expo.out",
    stagger: 0.15
  });

  isOpen = true;
}

function closeMenu() {
  gsap.to(items, {
    y: "-100%",
    duration: 0.8,
    ease: "expo.in",
    stagger: 0.1,
    onComplete: () => {
      navMenu.style.display = "none";
      menuToggle.style.display = "inline-block";  
    }
  });

  isOpen = false;
}