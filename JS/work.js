// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });


document.addEventListener("DOMContentLoaded", () => {
  const workItems = document.querySelectorAll(".work-item");

  workItems.forEach(item => {
    const media = item.querySelector(".work-media");
    const video = item.querySelector(".work-video");

    item.addEventListener("mouseenter", () => {
      media.classList.add("blur-bg");
      video.style.display = "block";
      video.play();
    });

    item.addEventListener("mouseleave", () => {
      media.classList.remove("blur-bg");
      video.style.display = "none";
      video.pause();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const listBtn = document.querySelector(".view-list");
  const gridBtn = document.querySelector(".view-grid");
  const workContent = document.querySelector(".work-content");
  const workSection = document.querySelector(".work-section");

  function showView(viewToShow, viewToHide, activeBtn, inactiveBtn, displayType) {
    viewToShow.classList.add("filtered");

    // Use correct display type
    viewToShow.style.display = displayType;
    viewToHide.style.display = "none";

    activeBtn.classList.add("active");
    inactiveBtn.classList.remove("active");

    setTimeout(() => {
      viewToShow.classList.remove("filtered");
    }, 300);
  }

  listBtn.addEventListener("click", () => {
    showView(workSection, workContent, listBtn, gridBtn, "block");
  });

  gridBtn.addEventListener("click", () => {
    showView(workContent, workSection, gridBtn, listBtn, "grid");
  });

  // Default view = grid
  showView(workContent, workSection, gridBtn, listBtn, "grid");
});