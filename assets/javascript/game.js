var winCountEl = document.getElementById("win-count");
var lossCountEl = document.getElementById("loss-count");
var guessesRemainingEl = document.getElementById("guesses-remaining");
var guessTrackerEl = document.getElementById("guess-tracker");
var guessesRemaining = 9;
var winTrack = 0;
var lossTrack = 0;
var guessTracker = ""
var correctLetter = Math.floor(Math.random() * 26);

function displayWins() {
  winCountEl.textContent = winTrack;
}
function displayLosses() {
  lossCountEl.textContent = lossTrack
}
function displayGuessesRemaining() {
  guessesRemainingEl.textContent = guessesRemaining
}

displayWins();
displayLosses();
displayGuessesRemaining();

//Every time a key is pressed
document.onkeyup = function(event) {
  var keyInput = event.key;
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
    winTrack = winTrack + 1;
    displayWins();
    guessesRemaining = 9;
    guessTracker = "";
    correctLetter = Math.floor(Math.random() * 26)
  }
  //wrong guess
  else {
    guessesRemaining = guessesRemaining - 1;
    displayGuessesRemaining()
    guessTracker = guessTracker + keyInput + ", ";
    guessTrackerEl.textContent = guessTracker
  }

  //Game loss
  if (guessesRemaining === 0) {
    lossTrack = lossTrack + 1;
    displayLosses();
    guessesRemaining = 9;
    guessTracker = "";
    correctLetter = Math.floor(Math.random() * 26);
  }
};
