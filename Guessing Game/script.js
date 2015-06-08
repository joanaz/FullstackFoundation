var randomNumber, currentGuess, previousGuessDiff, count = 0;
var maxCount = 5;
var guesses = [];

generateRandomNumber();

function generateRandomNumber() {
	randomNumber = Math.floor(100 * Math.random() + 1);
}

function showHint() {
	document.getElementById("answer").innerHTML = "The number is " + randomNumber;
}

function validate() {
	currentGuess = parseFloat(document.getElementById('guess').value);
	if (Math.round(currentGuess) === currentGuess && currentGuess >= 1 && currentGuess <= 100) {
		return true;
	} 
	else {
		alert("You didn't enter a valid number. Try again.");
		return false;
	}
}

function repeatNumCheck() {
	for (var i = 0; i < guesses.length-1; i++) {
		if (currentGuess === guesses[i]) {
			alert("You've already guessed that number!");
			return true;
		}
	}
	guesses.push(currentGuess);
	document.getElementById("guess"+(count+1)).innerHTML = currentGuess;
	return false;
}

function enterKeyPress(e) {
	e = e || window.event;
	if (e.keyCode ==13) {
		submitted();
	}
}

function submitted() {
	var hotOrCold, hotterOrColder, highOrLow = "";
	var currentGuessDiff = 0; 
	if (count < maxCount && validate() && !repeatNumCheck(currentGuess)) {
		count++;
		if (currentGuess === randomNumber) {
			document.getElementById("answer").innerHTML = "YOU WIN!<br>Click 'Play Again' to play again.";
			document.body.style.background= "url('congratulations.jpg') center";
			document.getElementById("guess" + count + "Box").style.backgroundColor="red";
			count = maxCount;
		} 
		else if (maxCount === count) {
			document.getElementById("answer").innerHTML = "Sorry, you lose. The number was " + randomNumber + ".<br>Press 'Play Again' to play again.";
		}
		else {
			highOrLow = currentGuess > randomNumber ? "LOWER" : "HIGHER";
			currentGuessDiff = Math.abs(currentGuess-randomNumber);
			if (count === 1) {
				hotOrCold = currentGuessDiff < 10 ? "HOT (within 10 away)" : "COLD (more than 10 away)";
				document.getElementById("answer").innerHTML = "You are " + hotOrCold + ". Guess " + highOrLow + ".<br>" + (maxCount-count) + " tries left";
				document.getElementById("guess1Box").style.backgroundColor= currentGuessDiff < 10 ? "orange" : "yellowgreen";
			}
			else {
				hotterOrColder = currentGuessDiff < previousGuessDiff ? "HOTTER" : "COLDER";
				document.getElementById("answer").innerHTML = "You are " + hotterOrColder + ". Guess " + highOrLow + ".<br>" + (maxCount-count) + " tries left";
				document.getElementById("guess" + count + "Box").style.backgroundColor=currentGuessDiff < previousGuessDiff ? "red" : "green";
			}
			previousGuessDiff = currentGuessDiff;
		}
	}
}
