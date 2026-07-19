// ==========================
// RANDOM STARS
// ==========================


const starContainer = document.querySelector(".stars");


const starImages = [

"star_small_01.svg",
"star_small_02.svg",
"star_small_03.svg",
"star_small_04.svg",

"star_medium_01.svg",
"star_medium_02.svg",
"star_medium_03.svg"

];



function createStars(){


for(let i=0;i<80;i++){


let star=document.createElement("img");


star.src =
"icons/stars/" +
starImages[
Math.floor(Math.random()*starImages.length)
];


star.className="star-decoration";



let size =
Math.random()*20+8;


star.style.width=size+"px";
star.style.height=size+"px";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";



star.style.animationDelay=
Math.random()*5+"s";



starContainer.appendChild(star);


}


}


createStars();





// ==========================
// SHOOTING STAR
// ==========================



function createShootingStar(){


let star=document.createElement("div");


star.className="shooting-star";


star.style.left=
Math.random()*70+"%";


star.style.top=
Math.random()*40+"%";


document.body.appendChild(star);



setTimeout(()=>{

star.remove();

},2000);


}



setInterval(()=>{


if(Math.random()<0.35){

createShootingStar();

}


},5000);







// ==========================
// CAT CONSTELLATION
// ==========================



function spawnCat(){


let cat=document.querySelector(".cat-event");


cat.style.left=
Math.random()*70+"%";


cat.style.top=
Math.random()*50+"%";


cat.classList.remove("show");


void cat.offsetWidth;


cat.classList.add("show");


}



setInterval(()=>{


if(Math.random()<0.08){

spawnCat();

}


},30000);