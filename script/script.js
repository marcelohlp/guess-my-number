"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let finished = false;

const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const inputValue = document.querySelector(".guess");
const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", () => {
  const guess = Number(inputValue.value);

  if (!finished) {
    if (!guess) {
      message.textContent = "No number!";
    } else if (guess === secretNumber) {
      winTheGame();
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

const changeBackgroundColor = (color) => {
  body.style.backgroundColor = color;
};

const showSecretNumber = () => {
  number.textContent = secretNumber;
  number.style.width = "30rem";
};

const disableTheGame = () => {
  checkButton.disabled = true;
  inputValue.disabled = true;
};
