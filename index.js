var refreshMe = document.querySelector(".container h1");
var randomNumberOne = Math.floor((Math.random()*6)+1); 
var randomNumberTwo = Math.floor((Math.random()*6)+1); 

document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice"+randomNumberOne+".png");

document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice"+randomNumberTwo+".png");

if (randomNumberOne > randomNumberTwo){
    refreshMe.textContent = " 🚩 Player 1 Wins ";
} else if(randomNumberTwo > randomNumberOne) {
    refreshMe.innerHTML = "Player 2 Wins🚩 ";
} else {
    refreshMe.innerHTML = "Draw !!📢";
}