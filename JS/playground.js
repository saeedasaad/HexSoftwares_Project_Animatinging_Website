const scroller = document.querySelector(".video-wrapper");
const videos = document.querySelectorAll(".playgroung-container video");

// Faster horizontal scroll with mouse wheel
scroller.addEventListener("wheel", (e) => {
  e.preventDefault();
  scroller.scrollLeft += e.deltaY * 6; 
});

// Intersection Observer for fade-in + playback
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },
  { threshold: 0.10 } 
);

videos.forEach((video) => observer.observe(video));
