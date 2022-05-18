gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// gsap.to(".text", {
//     x: 400,
//     rotation: 360, 
//     duration: 3,
// });

gsap.to(".text-2", {
    scrollTrigger: {
        trigger: ".text-2",
        start: "20px 80%",
        markers: true,
        scrub: 1,
    },
    x: 400,
    rotation: 360, 
    duration: 3,
});

// gsap.to(".text-3", {
//     scrollTrigger: ".text-3",
//     x: 400, 
//     rotation: 360,
//     duration: 3,
// });
