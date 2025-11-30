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


document.querySelectorAll(".element").forEach(function (element) {

  var rotate = 0;
  var diffrot = 0;

  element.addEventListener("mouseleave", function (dets) {

    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  element.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - element.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

const wrapper = document.querySelector('.logos-wrapper');
const logos = wrapper.innerHTML;

// Duplicate logos for seamless loop
wrapper.innerHTML += logos;

const logosWidth = wrapper.scrollWidth / 2;

gsap.to(wrapper, {
  x: `-${logosWidth}px`,
  duration: 20,
  ease: "linear",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % logosWidth)
  }
});

function updateFooterTime() {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Karachi'
  };
  const now = new Date();
  const formattedTime = now.toLocaleTimeString('en-US', options);
  document.getElementById('footer-time').textContent = formattedTime + " PKT";
}

updateFooterTime();
setInterval(updateFooterTime, 1000); 