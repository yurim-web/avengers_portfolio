const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_3",
    scrub: true,
    start: "top center",
    end: "center center",
  },
});

timeline3.to(".text", {
  duration: 3,
  y: 0,
  opacity: 1,
  stagger: 1,
});
