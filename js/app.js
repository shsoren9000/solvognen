gsap.registerPlugin(ScrollTrigger);

// hero animation 
gsap.fromTo(".hero-anim", { y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25})

// scroll down animation
// gsap.fromTo(".scroll",{opacity: 0}, { y: 20, opacity: 1, duration: 1, repeat: -1, });
gsap.to(".scroll", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});


// fade down 
const animFadeDown = 
gsap.utils.toArray(".anim");
animFadeDown.forEach(anim => {
    gsap.fromTo(anim, 
{ y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25, scrollTrigger: { trigger: anim, start: "top bottom", end: "center center", scrub: 1, markers: false}})
})



// gsap.fromTo(".anim", 
// { y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25, scrollTrigger: { trigger: ".intro .betydning .details", end: "center center", scrub: 1, markers: true}});


// rotate spacer 
gsap.to(".spacer", {rotation: 360, duration: 60, repeat: -1, ease: "none" });

// PIN AND ZOOM TIME LINE
const tl = gsap.timeline({
    scrollTrigger: { trigger: ".zoom-image", endTrigger: ".details-p-4", end: "top 40%", pin: true, scrub: 1, markers: false, start: "bottom bottom", pinSpace: false }
});

tl.to(".zoom-image", {
    scale: 1.5,
    xPercent: -10
})
tl.to(".zoom-image", { 
    scale: 4,
    xPercent: -120
 })
 tl.to(".zoom-image", {
     yPercent: -120
 })
//  tl.to(".zoom-image", {
//     scale: 4
// })

// alternativ fundet animation 
animFadeDown.forEach(fundetAnim => {
    gsap.fromTo(fundetAnim, 
{ y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25, scrollTrigger: { trigger: fundetAnim, start: "top bottom", end: "center center", scrub: 1, markers: false}})
})


// SCROLLBAR (src: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator)
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}




// gsap.fromTo(".fundet-anim", 
// { y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25, scrollTrigger: { trigger: ".fundet", end: "center center", scrub: 1, markers: true}});

// // PIN AND ZOOM 
// gsap.to("zoom-container", { 
//     scrollTrigger: { trigger: ".zoom-image", pin: true, markers: false, start: "bottom bottom", end:"+=3000" },
// });
// // den runde form
// gsap.to(".zoom-image", {
//     scrollTrigger: { trigger: ".details-p-2", scrub: 1, start: "bottom bottom", end: "top 50%", scrub: 1 },
//     scale: 1.5,
//     x: -200
// })


// // hjulene
// gsap.to(".zoom-image", { 
//     scrollTrigger: { trigger: ".details-p-4", scrub: 1, markers: true, start: "bottom bottom", },
//     scale: 4,
//     x: -500
//  })


// zoom image with code pen thing :( 
// gsap.to(".target", {
//   scrollTrigger: { trigger: ".details", start: "top top", markers: true, scrub: 1 },
//   opacity: 1,
// });

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
// gsap.to('.zoom-image', {
//     scrollTrigger: { trigger: '.zoom-image', start: 'center center', end: "bottom 10%", scrub: 1, pin: true },
//     scale: 4,
//     x: -500,
//   });
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
