gsap.registerPlugin(ScrollTrigger);

const timeline9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_6",
    scrub: true,
    makers: true,
    start: "top top",
    end: "bottom bottom",
  },
});

timeline9.to(".container_5", {
  x: 0,
  opacity: 1,
  duration: 1,
});
