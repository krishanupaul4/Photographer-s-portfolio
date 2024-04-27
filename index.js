//script for hero section slide

document.querySelector(".arrows").addEventListener("click",funone);
var images=['./photos/hero_p1.jpg','./photos/hero_p2.jpg','./photos/hero_p4.jpg','./photos/hero_p5.jpg','./photos/hero_p6.jpg']
var currentIndex=0;
function funone(){
  document.querySelector(".hero-sec").style.backgroundImage="url('"+images[currentIndex]+"')";
  currentIndex=(currentIndex+1) % images.length;
}

setInterval(funone,5000);


//script for slider 1 (section that is below testamonials)
let scrollbox=document.querySelector(".w");

let back=document.querySelector(".back-btn");
let front=document.querySelector(".front-btn");

scrollbox.addEventListener("wheel",(evt)=>{
  evt.preventDefault();
  scrollbox.scrollLeft +=evt.deltaY;
});

back.addEventListener("click",()=>{
  scrollbox.style.scrollBehavior="smooth";
  scrollbox.scrollLeft += 300;
});

front.addEventListener("click",()=>{
  scrollbox.style.scrollBehavior="smooth";
  scrollbox.scrollLeft -= 300;
});

//script for last slider above footer
let scrollbox2=document.querySelector(".x");

let back2=document.querySelector(".back2-btn");
let front2=document.querySelector(".front2-btn");

scrollbox2.addEventListener("wheel",(evt)=>{
  evt.preventDefault();
  scrollbox2.scrollLeft +=evt.deltaY;
});

back2.addEventListener("click",()=>{
  scrollbox2.style.scrollBehavior="smooth";
  scrollbox2.scrollLeft += 300;
});

front2.addEventListener("click",()=>{
  scrollbox2.style.scrollBehavior="smooth";
  scrollbox2.scrollLeft -= 300;
});

//script for scroll reveal effect
const sreveal={
  distance: "50px",
  origin: "buttom",
  duration: 1000,
};

ScrollReveal().reveal(".z1",{
  ...sreveal,
});
ScrollReveal().reveal(".z2",{
  ...sreveal,
  delay:1200,
  interval:1200
});
ScrollReveal().reveal(".z3",{
  ...sreveal,
  delay:1600
});
