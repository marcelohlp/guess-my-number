"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 10;
let gameHighscore = 0;
let finished = false;

const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const inputValue = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");

checkButton.addEventListener("click", () => {
  const guess = Number(inputValue.value);

  if (!finished) {
    if (!guess) {
      message.textContent = "No number!";
    } else if (guess < 1 || guess > 20) {
      message.textContent = "Only numbers from 1 to 20!";
      inputValue.value = "";
    } else if (guess === secretNumber) {
      winTheGame();
      defineHighScore();
    } else if (guess !== secretNumber) {
      if (gameScore > 1) {
        message.textContent = guess > secretNumber ? "Too high!" : "Too low!";
        decreaseTheScore();
      } else {
        loseTheGame();
      }
    }
  }
});

const winTheGame = () => {
  finished = true;
  message.textContent = "Correct number!";
  changeBackgroundColor("#60b347");
  showSecretNumber();
  disableTheGame();
};

const loseTheGame = () => {
  finished = true;
  message.textContent = "You lost the game!";
  changeBackgroundColor("#b34747");
  showSecretNumber();
  disableTheGame();
  score.textContent = 0;
};

const decreaseTheScore = () => {
  gameScore--;
  score.textContent = gameScore;
};

const defineHighScore = () => {
  if (gameScore > gameHighscore) {
    gameHighscore = gameScore;
    highscore.textContent = gameHighscore;
  }
};

const changeBackgroundColor = (color) => {
  body.style.backgroundColor = color;
};

const showSecretNumber = () => {
  number.textContent = secretNumber;
  number.style.width = "30rem";
};

const hideSecretNumber = () => {
  number.textContent = "?";
  number.style.width = "15rem";
};

const enableTheGame = () => {
  checkButton.disabled = false;
  inputValue.disabled = false;
};

const disableTheGame = () => {
  checkButton.disabled = true;
  inputValue.disabled = true;
};

againButton.addEventListener("click", () => {
  hideSecretNumber();
  changeBackgroundColor("#222");
  enableTheGame();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameScore = 10;
  finished = false;
  message.textContent = "Start guessing...";
  score.textContent = gameScore;
  inputValue.value = "";
});
