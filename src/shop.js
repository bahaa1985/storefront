gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

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
    position:'fixed',
    display:'block',
    onComplete:()=>{console.log('is triggered');}
})

// Brightness function
function createBrightnessTween(element,brightness) {
    return gsap.to(element, {
        filter: `brightness(${brightness})`,
        duration: 0.5,
        paused: true // Create tween in paused state
    });
}

const categories = document.querySelectorAll(".category");
//brightness gsap effect for catregories section:
categories.forEach(category => {
    // Create and store tween for each category
    const tween = createBrightnessTween(category,1);

    category.addEventListener("mouseover", () => {
        tween.play();
    });

    category.addEventListener("mouseleave", () => {
        tween.reverse();
    });
});


const collections=document.querySelectorAll(".collection");
//brightness gsap effect for collections section:
collections.forEach(collection => {
    
    const tween = createBrightnessTween(collection,1.1);

    collection.addEventListener("mouseover", () => {
        tween.play();
    });

    collection.addEventListener("mouseleave", () => {
        tween.reverse();
    });
});

// smooth scroll
const bodyWraper=document.querySelector("#smooth-wraper");
const divContent=document.querySelector("#smooth-content")

ScrollSmoother.create({
    wraper:bodyWraper,
    content:divContent,
    smooth: 1.5,
    effects: true,
});