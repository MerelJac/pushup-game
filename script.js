var amountOptions = [1,2,3,4,5,6,7,8,9,10];
var totalPushUps = 0;

console.log(amountOptions.length);

var playGame = function() {
    var userChoice = window.confirm("Wanting to do push-ups?")
    if (!userChoice) {
    return;
}

var index = Math.floor(Math.random() * amountOptions.length);
var amountGiven = amountOptions[index];
window.alert("Congrats on receiving" + " " + amountGiven + " " + "push-ups!");

totalPushUps = totalPushUps + amountGiven;
window.alert("Total Push-Ups: " + totalPushUps);

var playAgain = window.confirm("More Push-Ups?");

// ask to compute total number of pushups //

if (playAgain) {
    playGame()
}
}

playGame();