var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function fristSectionAnim() {
    var tl = gsap.timeline();

    tl.from("nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    })

        .from(".bounding-element", {
            y: "100%",
            ease: "expo.inOut",
            duration: 2,
            stagger: 0.2,
            delay: -1
        })
        .from(".hero-footer", {
            y: "10",
            opacity: 0,
            ease: "expo.inOut",
            duration: 1.5,
            delay: -1,
            stagger: 0.2
        });
}

fristSectionAnim();

function cursorSize() {

    var Xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        Xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        cursorFollower(Xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#cursor").style.transform =
                `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);

    });
}

function cursorFollower(Xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursor").style.transform =
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(${Xscale}, ${yscale})`;
    });
}

cursorFollower();
cursorSize();


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

