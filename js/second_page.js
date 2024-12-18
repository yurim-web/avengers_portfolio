gsap.registerPlugin(ScrollTrigger);

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_2",
    scrub: true,
    start: "top center",
    end: "bottom bottom",
  },
});

timeline2.to(".container_2", {
  duration: 2,
  opacity: 1,
});
