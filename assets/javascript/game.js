
// Instructions:
// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
// 3. Use key events to listen for the letters that your players will type.
// 4. Display the following on the page:
// 5. Press any key to get started!
// 6. Wins: (# of times user guessed the word correctly).
//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
// 7. Number of Guesses Remaining: (# of guesses remaining for the user).
// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

// Variables that will be needed for this game



var jazzPlayers = ["rubio", "gobert", "mitchell", "favors", "ingles"];
var newName = "";
var underlines = [];
var howMany = 0;
var lettersInWord = [];
var wrongLetters = [];


var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;



function startGame() {

    guessesLeft = 8;
    wrongLetters = [];
    underlines = [];


    newName = jazzPlayers[Math.floor(Math.random() * jazzPlayers.length)];
    lettersInWord = newName.split("");
    howMany = lettersInWord.length;
    console.log(document.getElementById("nameGuess"));




    for (var i = 0; i < howMany; i++) {
        underlines.push("_");
    }
    document.getElementById("nameGuess").innerHTML = underlines.join(" ");
    document.getElementById("numGuesses").innerHTML = "Guesses Remaining:  " + guessesLeft;
    document.getElementById("winCounter").innerHTML = "Wins:  " + winCount;
    document.getElementById("lossCounter").innerHTML = "Losses:  " + lossCount;
    document.getElementById("ifPlayerCorrect").innerHTML = ("GUESS THIS UTAH JAZZ PLAYER");


    console.log(newName);
    console.log(underlines);
}


function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i = 0; i < howMany; i++) {
        if (newName[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < howMany; i++) {
            if (newName[i] == letter) {
                underlines[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
    console.log(underlines);
}

function roundComplete() {
    console.log("Win count: " + winCount + " | Loss Count: " + lossCount + " | Guesses left: " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = "Guesses Remaining " + guessesLeft;
    document.getElementById("nameGuess").innerHTML = underlines.join(" ");
    document.getElementById("wrongGuesses").innerHTML = "Guessed: " + wrongLetters.join(" ");

    if (lettersInWord.toString() == underlines.toString()) {
        winCount++;



        document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
        document.getElementById("wrongGuesses").innerHTML = "Guessed: ";

        alert("YOU WIN!! It was " + newName);

        startGame();




    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost! It was " + newName);
        document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;
        document.getElementById("wrongGuesses").innerHTML = "Guessed: ";

        startGame();

    }
}




startGame();









// pick up user's input to keyboard
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userGuess);
    roundComplete();

    console.log(userGuess);
}

