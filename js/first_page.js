gsap.registerPlugin(TextPlugin);

const timeline = gsap.timeline();

timeline.to(".img1", {
  duration: 1.5,
  y: 0,
  x: 0,
  opacity: 1,
  ease: "power3.out",
  repeat: -1,
});

gsap.to(".main_title", {
  text: "UNIVERSE",
  duration: 3,
  yoyo: true,
  repeat: -1,
  repeatDuration: 2,
});
