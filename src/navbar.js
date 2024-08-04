const hamburger = document.getElementById("hamburger_button");
const hamburger_items = document.getElementById("hamburger_items");
const hamburger_lines = document.getElementById("hamburger_lines");
const hamburger_close = document.getElementById("hamburger_close");
const myul=document.querySelector('.myul');
const search = document.getElementById("search");
const NAV_BAR = document.getElementById("nav_bar");



//toogling hamburger items smmothly using gsap
let tween = gsap.to(hamburger_items,{
	height:'auto',duration:0.5,ease:'none'	
}).paused(true);
let expanded=false;

//Hamburger button click event handler to show or hide it:
hamburger.addEventListener("click", () => {
	hamburger_lines.classList.toggle("hidden");
	hamburger_close.classList.toggle("hidden");
	
	//gsap animations:
	if(!expanded){
		tween.play();
		expanded=true;
	}
	else{		
		tween.reverse();				
		expanded=false;
	}
});

const body = document.getElementsByTagName("body")[0];

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	//get the system mode
	body.classList.add("dark");
} else {
	body.classList.remove("dark");
}
