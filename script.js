// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 23;
// console.log(document.querySelector(".number").textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);

function wrongAns() {
  if (score > 1) {
    score--;
  } else if (score <= 1 && score > 0) {
    score--;
    if (score === 0) {
      console.log("score 0");
      document.querySelector(".message").textContent = "😥 You Lost the Game.";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  document.querySelector(".score").textContent = score;
}

function update() {
  if (score > highscore) {
    highscore = score;
  }
  document.querySelector(".highscore").textContent = highscore;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no input
  if (!guess) {
    console.log("no input");
    document.querySelector(".message").textContent = "🛑 No Number";
  }

  //out of range
  else if (guess < 1 || guess > 20) {
    console.log("range error");
    document.querySelector(".message").textContent =
      "Please Enter a number within range.";
  }

  //correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "🎉Congrats! Correct Answer";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    update();
  }

  //guess is high
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈Too High!";
    wrongAns();
  }

  //guess is low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉Too low!";
    wrongAns();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
