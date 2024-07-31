const hamburger = document.getElementById("hamburger_button");
const hamburger_items = document.getElementById("hamburger_items");
const hamburger_lines = document.getElementById("hamburger_lines");
const hamburger_close = document.getElementById("hamburger_close");
const myul=document.querySelector('.myul');
// const bell = document.getElementById("bell");
const search = document.getElementById("search");
// const notifications = document.getElementById("notifications");
// const notifications_count = document.getElementById("notifications_count");
const NAV_BAR = document.getElementById("nav_bar");
const lis=document.querySelectorAll('.liclass');
//Hamburger button click event handler to show or hide it:
let expanded=false;
let tween = gsap.to(myul,{
	height:'auto',duration:0.5,delay:-0.5	
})
let tween2=gsap.to(lis,{
	opacity:'100%',stagger:0.1
})
tween.pause();tween2.pause();
hamburger.addEventListener("click", () => {
	// hamburger_items.classList.toggle("hidden");
	hamburger_lines.classList.toggle("hidden");
	hamburger_close.classList.toggle("hidden");
	// notifications.classList.add("hidden");
	
	//gsap animations:
	if(!expanded){
		tween.play();
		tween2.play();
		expanded=true;
		console.log(tween2.progress);
	}
	else{		
		tween.reverse();
		tween2.reverse();				
		expanded=false;
		console.log(tween2.progress);
	}
});
// to show to hide notifications when clicking bell icon:
// bell.addEventListener("click", () => {
	// bell.setAttribute("fill", "#fff");
	// bell.classList.remove("bell_ring");
	// notifications.classList.toggle("hidden");
	// notifications_count.classList.add("hidden");
// });
//test
//dark_mode:
const body = document.getElementsByTagName("body")[0];
const moon = document.getElementById("moon");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	//get the system mode
	body.classList.add("dark");
} else {
	body.classList.remove("dark");
}
//toggle dark mode when clicking moon icon:
moon.addEventListener("click", () => {
	body.classList.toggle("dark");
});
