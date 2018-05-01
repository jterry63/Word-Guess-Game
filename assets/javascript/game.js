
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

var jazzPlayers = ["Rubio", "Gobert", "Mitchell", "Favors", "Ingles"];
var newName = "";



var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;


function startGame() {


    newName = jazzPlayers[Math.floor(Math.random() * jazzPlayers.length)];
    splitWord = newName.split("");
    howMany = splitWord.length;


    underlines = [];

    for (var i = 0; i < howMany; i++) {
        underlines.push("_");

        console.log(newName);
        console.log(splitWord);
        console.log(howMany);
        console.log(underlines);

    }

}



startGame();





// pick up user's input to keyboard
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
}

