var winCountEl = document.getElementById("win-count");
var lossCountEl = document.getElementById("loss-count");
var guessesRemainingEl = document.getElementById("guesses-remaining");
var guessTrackerEl = document.getElementById("guess-tracker");

document.onkeyup = function(event) {
  var guessesRemaining = 9;
  var keyInput = event.key;
  var correctLetter = Math.floor(Math.random() * 26);
  var letterArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  console.log(correctLetter);
  //Game win
  if (keyInput === letterArray[correctLetter]) {
    console.log("win");
    winCountEl++;
    guessesRemaining = 9;
    guessTrackerEl = "";
  }
  //wrong guess
  else {
    guessesRemaining--;
    guessTrackerEl + keyInput + ", ";
  }

  //Game loss
  if (guessesRemaining === 0) {
    lossCountEl++;
    guessesRemaining = 9;
    guessTrackerEl = "";
    correctLetter = Math.floor(Math.random() * 26);
  }
};
