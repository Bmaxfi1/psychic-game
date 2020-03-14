var winCountEl = document.getElementById("win-count");
var lossCountEl = document.getElementById("loss-count");
var guessesRemainingEl = document.getElementById("guesses-remaining");
var guessTrackerEl = document.getElementById("guess-tracker");
var endGameStatusEl = document.getElementById("end-game-status");
var pressAnyKeyToContinueEl = document.getElementById(
  "press-any-key-to-continue"
);
var guessesRemaining = 9;
var winTrack = 0;
var lossTrack = 0;
var guessTracker = "";
var correctLetter = Math.floor(Math.random() * 26);

function displayWins() {
  winCountEl.textContent = winTrack;
}
function displayLosses() {
  lossCountEl.textContent = lossTrack;
}
function displayGuessesRemaining() {
  guessesRemainingEl.textContent = guessesRemaining;
}

displayWins();
displayLosses();
displayGuessesRemaining();

//Every time a key is pressed
document.onkeyup = function(event) {
  endGameStatus = null;
  endGameStatusEl.textContent = endGameStatus;

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
  //duplicate letter stopper
  if (letterArray.includes(keyInput)) {
    //Game win
    if (keyInput === letterArray[correctLetter]) {
      console.log("win");
      winTrack = winTrack + 1;
      displayWins();
      guessesRemaining = 9;
      guessTracker = "";
      guessTrackerEl.textContent = guessTracker;
      endGameStatus =
        "How did you know it was " + letterArray[correctLetter] + "?!";
      endGameStatusEl.textContent = endGameStatus;
      correctLetter = Math.floor(Math.random() * 26);
    }
    //wrong guess
    else {
      guessesRemaining = guessesRemaining - 1;
      displayGuessesRemaining();
      guessTracker = guessTracker + keyInput + ", ";
      guessTrackerEl.textContent = guessTracker;
    }

    //Game loss
    if (guessesRemaining === 0) {
      lossTrack = lossTrack + 1;
      displayLosses();
      guessesRemaining = 9;
      guessTracker = "";
      guessTrackerEl.textContent = guessTracker;
      endGameStatus =
        "Should have guessed " + letterArray[correctLetter] + "...";
      endGameStatusEl.textContent = endGameStatus;
      correctLetter = Math.floor(Math.random() * 26);
    }
  }
};
