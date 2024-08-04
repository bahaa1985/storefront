gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

// smooth scroll
const bodyWraper=document.querySelector("#smooth-wraper");
const divContent=document.querySelector("#smooth-content")

ScrollSmoother.create({
    wraper:bodyWraper,
    content:divContent,
    smooth: 1.5,
    effects: true,
});

// scroll trigger for up button displaying
const upButton=document.querySelector("#up-button");
const deskSection=document.querySelector("#desk-hero-section");
gsap.to(upButton,{
    scrollTrigger:{
        trigger:deskSection,
        start:"top top",     
        // end:"bottom top",
        scrub:true,
    },
    // top:()=>{deskSection.clientTop * 80 / 100  + 'px'},
    position:'fixed',
    display:'block',
    onComplete:()=>{console.log('is triggered');}
})

//Brightness:
function brightnessGSAP(element){
    let tween=gsap.fromTo(element,{filter:"brightness(0.75)"},{
        filter: "brightness(1)",duration:0.5
    });
    return tween;
}

const categories=document.querySelectorAll(".category");

categories.forEach(category => {
    category.addEventListener("mouseover",()=>{
        brightnessGSAP(category).play();
    })

    category.addEventListener("mouseleave",()=>{
        brightnessGSAP(category).reverse();
    })
   
});