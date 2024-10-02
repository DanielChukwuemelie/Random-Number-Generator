// RANDOM NUMBER GENERATOR

// First link your HTML and CSS Ids to your JavaScript
const randGenBtn = document.getElementById("randGenBtn");
const randGenLabel = document.getElementById("randGenLabel");

// Now we are going to set their value ranges
const min = 5000;
const max = 10000;

// Now let us declare a variable
let myRandNum;

// Let us reference our constants while telling JavaScript what to do with it
randGenBtn.onclick = function(){
   myRandNum = Math.floor(Math.random() * max) + min;
   randGenLabel.textContent = myRandNum;
}
