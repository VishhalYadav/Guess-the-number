"use strict";
let randomNum = Math.trunc(Math.random() * 50 + 1);
const dislayNum = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const displayMessage = document.querySelector(".message");
const btnAgain = document.querySelector(".again");

document.querySelector(".number").textContent = randomNum;
let score = 20;
let highScore = 0;

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    if (!guess) {
      document.querySelector(".message").textContent = "Lol! Enter a number";
    } else if (guess === randomNum) {
      document.querySelector(".message").textContent = "You Won the game!";
      document.querySelector(".number").textContent = guess;
      document.querySelector("body").classList.add("win");
      if (score > highScore) {
        highScore = score;
        console.log(highScore);
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess > randomNum) {
      document.querySelector(".message").textContent = "Too High..try again!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < randomNum) {
      document.querySelector(".message").textContent = "Too Low..try again!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "Ooops!You Loose.";
  }
});

btnAgain.addEventListener("click", function () {
  randomNum = Math.trunc(Math.random() * 50 + 1);
  document.querySelector("body").classList.remove("win");
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
