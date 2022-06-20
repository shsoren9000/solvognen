gsap.registerPlugin(ScrollTrigger);

// hero animation 
gsap.fromTo(".hero-anim", {
    y: -100, 
    opacity: 0 
    },
    {
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.25 
});

// scroll down animation
gsap.to(".scroll", {
    y: 12, 
    ease: "power1.inOut", 
    repeat: -1, 
    yoyo: true 
});

// fade down 
const animFadeDown = 
gsap.utils.toArray(".anim");
animFadeDown.forEach(anim => {
    gsap.fromTo(anim, {
        y: -100,
        opacity: 0 
        }, 
        { 
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.25,
            scrollTrigger: {
                trigger: anim,
                start: "top bottom",
                end: "center center",
                scrub: 1,
                markers: false}}
    )
});

// gsap.fromTo(".anim", 
// { y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.25, scrollTrigger: { trigger: ".intro .betydning .details", end: "center center", scrub: 1, markers: true}});

// rotate spacer 
gsap.to(".spacer", {
    rotation: 360, 
    duration: 60, 
    repeat: -1, 
    ease: "none" 
});

// PIN AND ZOOM TIME LINE
const tl = gsap.timeline({
    scrollTrigger: { 
        trigger: ".zoom-image", 
        endTrigger: ".details-p-4", 
        end: "top 10%", 
        pin: true, 
        scrub: 1, 
        markers: false, 
        start: "bottom bottom", 
        pinSpace: false }
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
     yPercent: -150
 })
//  tl.to(".zoom-image", {
//     scale: 4
// })

// alternativ fundet animation 
animFadeDown.forEach(fundetAnim => {
    gsap.fromTo(fundetAnim, {
        y: -100, 
        opacity: 0 
        }, 
        { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.25, 
            scrollTrigger: { 
                trigger: fundetAnim, 
                start: "top bottom", 
                end: "center center", 
                scrub: 1, 
                markers: false}}
    )
});


// PROGRESSBAR (src: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator)
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}