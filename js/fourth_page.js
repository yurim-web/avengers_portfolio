gsap.registerPlugin(ScrollTrigger);

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_4",
    scrub: 5,
    start: "top center",
    end: "bottom bottom",
  },
});

timeline4.to(".container_4", {
  x: -1000,
  duration: 8,
});

const timeline5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".backimg",
  },
});

timeline5.to(".img3", {
  duration: 1,
  y: 0,
  opacity: 0.2,
});

const timeline6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".backimg",

    pin: true,
    scrub: 1,
  },
});

timeline6.to(".img4", {
  duration: 1,
  x: 0,
  scale: 1,
  opacity: 1,
});

const timeline7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".backimg",
    scrub: 1,
  },
});

timeline7.to(
  ".img5",
  {
    duration: 1,
    y: 0,
    scale: 1,
    opacity: 1,
  },
  ">"
);

const timeline8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".backimg",
    scrub: 1,
  },
});

timeline8.to(
  ".img6",
  {
    duration: 1,
    x: 0,
    scale: 1,
    opacity: 1,
  },
  ">"
);
