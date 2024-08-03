gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const upButton=document.querySelector("#up-button");
const deskSection=document.querySelector("#desk-hero-section");
 const myh1=document.querySelector(".myh1");
// smooth scroll
const bodyWraper=document.querySelector("#smooth-wraper");
const divContent=document.querySelector("#smooth-content")

ScrollSmoother.create({
    wraper:bodyWraper,
    content:divContent,
    smooth: 2,
    effects: true,
});

// scroll trigger for up button displaying
gsap.to(upButton,{
    scrollTrigger:{
        trigger:deskSection,
        start:"top top",
       scrub:true,
    },
    position:'fixed',
    onComplete:()=>{console.log('is triggered');}
})

ScrollTrigger.refresh();