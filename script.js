// Cheat Fairy Minecraft
// script.js

document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector(".download-btn");

if(button){

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

}

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";
card.style.boxShadow="0 0 25px #9b4dff";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";
card.style.boxShadow="none";

});

});

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

});
