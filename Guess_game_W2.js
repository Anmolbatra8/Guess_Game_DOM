// 1)Selecting Essential DOM Elements : 

'use strict';
var guessElement = document.querySelector(".guess");
//selecting the input field for user's guesses
var guessValue = Number(guessElement.value);
//Value which the user will eneter in the input field

var msgElement = document.querySelector(".message");
var randomnumber = Math.trunc(Math.random() * 20) + 1;

//Check and Again button
var checkButtonElement = document.querySelector(".check");
var againButtonElement = document.querySelector(".again");

var score = document.querySelector(".score");
var highscore = document.querySelector(".highscore");
var displayqumark = document.querySelector(".number");

// 2)FUNCTIONS AND OTHER NEEDED values
let scoreValue = 20;
//initial value to be set when game starts
let highscoreValue = 0;

//To CHECK RANDOM WITH GUESS VALUE:

function check() {
console.log(randomnumber,typeof randomnumber);
   msgElement.textContent = "Larger";
   //When User Guess a Larger value than Generated:

   if(randomnumber < Number(guessElement.value)) {
    msgElement.textContent = "Go Small Buddy!"
    document.querySelector("body").style.backgroundColor = "red";
    scoreValue--;
    console.log("score reduced",scoreValue);
    score.textContent = scoreValue;
    displayqumark.textContent = ">";
   }
   //When User Guess is Smaller than the Number Generated: 

   else if (Number(guessElement.value)< randomnumber) {
    msgElement.textContent = "Go Large Buddy!"
    document.querySelector("body").style.backgroundColor = "#AA336A";
    scoreValue--;
    console.log("score reduced",scoreValue);
    score.textContent = scoreValue;
    displayqumark.textContent = "<";
   }
    
   // When User Guessed Correctly:
   else{ 
    msgElement.textContent = "You Did It !"
    document.querySelector("body").style.backgroundColor = "green";
    
    console.log("score: ",scoreValue);
    score.textContent = scoreValue;
    displayqumark.textContent = randomnumber;
    displayqumark.style.backgroundColor = "#FFD93D";
    displayqumark.style.width = "30rem";


    //Updating High Score (When user Has Won the Game)
    if(scoreValue > highscoreValue) {
        highscore.textContent = scoreValue; 
       }

   }
   }

  //When Click On "Again " Button , The game resets and New random Number is generated



   function reset() {
    //generate a new random Number
    randomnumber = Math.trunc(Math.random() * 20) + 1;
    displayqumark.textContent = "?";
    displayqumark.style.width = "15rem";
    msgElement.textContent  ="Start Guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    guessElement.value="";
    scoreValue = 20;
    score.textContent= scoreValue ;
   }


//3)EVENT LISTENERS

//check () when "Check Button" is Clicked
checkButtonElement.addEventListener("click",check);

//reset() when "Again button" is clicked
againButtonElement.addEventListener('click',reset);


//CRAFTED WITH GUIDANCE OF MENTORS AT GFG NOIDA (Mern-3 batch)
