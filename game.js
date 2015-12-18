//Create SecretNumber
var secretNumber = 4;

//Ask user for guess
var stringGuess = prompt("Guess a number.");
var guess = Number(stringGuess);

//Check if guess is right
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT");
}

else if(guess > secretNumber) {
  alert("Too high, guess again.");
}

else {
  alert("Too low, guess again.");
}
