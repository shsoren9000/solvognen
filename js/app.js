gsap.registerPlugin(ScrollTrigger);


gsap.to(".scroll", {
    y: 10,
    opacity: 0,
    duration: 3,
    repeat: -1,
    EASE <---!
});

// // TEST AF ANIMATION
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// gsap.to(".scroll", {
//     x: 400,
//     rotation: 360, 
//     duration: 3,
// });

// gsap.to(".text", {
//     scrollTrigger: {
//         trigger: ".text",
//         start: "top",
//         markers: true,
//         scrub: 1,
//     },
//     x: 400,
//     rotation: 360, 
//     duration: 3,
// });

// gsap.to(".text-2", {
//     scrollTrigger: {
//         trigger: ".text-2",
//         // start: "20px 80%",
//         markers: true,
//         scrub: 1,
//     },
//     x: 400,
//     rotation: 360, 
//     duration: 3,
// });

// gsap.to(".text-3", {
//     scrollTrigger: {
//         trigger: ".text-3",
//         start: "20px 80%",
//         markers: true,
//         scrub: 1,
//     },
//     x: 400,
//     rotation: 360, 
//     duration: 3,
// });

// gsap.fromTo(".text-4", { opacity: 0, duration: 10 }, { opacity: 1, duration: 10, }, )

// // gsap.to(".text-3", {
// //     scrollTrigger: ".text-3",
// //     x: 400, 
// //     rotation: 360,
// //     duration: 3,
// // });
