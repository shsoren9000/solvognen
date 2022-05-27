gsap.registerPlugin(ScrollTrigger);

// scroll down animation
gsap.fromTo(".scroll",{opacity: 0,}, {
    y: 20,
    opacity: 1,
    duration: 3,
    repeat: -1,
});

// hero animation 
gsap.to(".hero-anim", {
    scrollTrigger: { trigger: ".intro", start: "-110%", end: "80%", markers: true, scrub: 1, },
    y: -1000,
    duration: 3,
    stagger: 0.25,
    ease: "power1.out"
});

// intro animation 
gsap.to(".intro-anim", {
    scrollTrigger: { trigger: ".intro", start: "top center", markers: true, scrub: 1, },
    y: -500,
    duration: 3,
    stagger: 0.25,
    ease: "power1.out"
});

// betydning animation 
gsap.to(".betydning-anim", {
    scrollTrigger: { trigger: ".betydning", start: "top center", markers: true, scrub: 1, },
    y: -500,
    duration: 3,
    stagger: 0.25,
    ease: "power1.out"
});


// details animation 
gsap.to('.zoom-image', {
    scrollTrigger: { trigger: '.zoom-image', markers: true, start: 'bottom bottom', scrub: 1, pin: true },
    scale: 4,
    duration: 1,
    x: -500,
  });



// fundet animation 
gsap.to(".fundet-anim", {
    scrollTrigger: { trigger: ".fundet", start: "top center", markers: true, scrub: 1, },
    y: -500,
    duration: 3,
    stagger: 0.25,
    ease: "power1.out"
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
