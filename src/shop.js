gsap.registerPlugin(ScrollTrigger);

const upButton=document.querySelector("#up-button");
const deskSection=document.querySelector("#desk-hero-section");

gsap.to(upButton,{
    scrollTrigger:{
        trigger:deskSection,
        start:"top top",
       scrub:true,
    },
    display:'block'
})
