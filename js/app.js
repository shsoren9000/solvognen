gsap.registerPlugin(ScrollTrigger);


// hero animation 
gsap.fromTo(".hero-anim", { y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25})

// scroll down animation
gsap.fromTo(".scroll",{opacity: 0}, { y: 20, opacity: 1, duration: 1, repeat: -1});

// fade down 
gsap.fromTo(".anim-fade-down", 
{ y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25, scrollTrigger: { trigger: ".intro .betydning", end: "center center", scrub: 1, markers: true}})


// rotate spacer 
gsap.to(".spacer", {rotation: 360, duration: 60, repeat: -1, ease: "none" });

// zoom and pin 


// // hero animation img 
// gsap.to(".hero-anim-img", { scrollTrigger: { trigger: ".intro"}, scale: 4, pin: true, scrub: 1, })

// // hero animation 
// gsap.to(".hero-anim", {
//     scrollTrigger: { trigger: ".intro", start: "-110%", end: "80%", scrub: 1, },
//     y: -1000,
//     duration: 3,
//     stagger: 0.25,
//     ease: "power1.out"
// });

// // slide up animation 
// gsap.to(".anim-slide-up", {
//     scrollTrigger: { trigger: ".anim-slide-up", start: "top 30%", end: "bottom", markers: true, scrub: 1, },
//     y: -400,
//     duration: 3,
//     stagger: 0.25,
//     opacity: 0.5,
//     ease: "power1.out"
// });

// // betydning animation 
// gsap.to(".betydning-anim", {
//     scrollTrigger: { trigger: ".betydning", start: "top center", scrub: 1, },
//     y: -500,
//     duration: 3,
//     stagger: 0.25,
//     ease: "power1.out"
// });


// details animation 
gsap.to('.zoom-image', {
    scrollTrigger: { trigger: '.zoom-image', start: 'center center', end: "bottom 10%", scrub: 1, pin: true },
    scale: 4,
    x: -500,
  });
// gsap.to(".details", {
//     pin: true,

// });



// // fundet animation 
// gsap.to(".fundet-anim", {
//     scrollTrigger: { trigger: ".fundet", start: "top center", scrub: 1, },
//     y: -500,
//     duration: 3,
//     stagger: 0.25,
//     ease: "power1.out"
// });



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
