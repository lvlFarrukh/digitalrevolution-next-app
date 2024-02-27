let link = document.querySelector(".link");
let pink = document.querySelector(".color");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, {
  width: "calc(100% + 1.3em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.4,
});
hoverTL.to(pink, {
  width: "2em",
  left: "calc(100% - 1.45em)",
  ease: "Elastic.easeOut(0.4)",
  duration: 0.6,
});

link.addEventListener("mouseenter", () => {
  hoverTL.play();
});

link.addEventListener("mouseleave", () => {
  hoverTL.reverse();
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("header-active");
  } else {
    // remove the background property so it comes transparent again (defined in your css)
    header.classList.remove("header-active");
  }
});