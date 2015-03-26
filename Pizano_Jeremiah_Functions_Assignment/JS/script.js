/**
 * Created by JP on 3/25/15.
 */
// Name: Jeremiah Pizano
// Date: March 26, 2015
// Class: SDI
// Assignment: Functions

// variables

var lotteryChoice = prompt("Which lotto numbers would you like to see?\n\nPress 1 for the Florida State lottery numbers.\nPress 2 for the Powerball lottery numbers."); //This will ask the user which lotto numbers they want to see.


// functions
function lottoValidation(chooseALotto) {
    while (chooseALotto === "") {
        chooseALotto = prompt("Please press 1 for the Florida State lottery or 2 for the Powerball lottery.");
    }
    return chooseALotto;
}




// main code
lotteryChoice = lottoValidation(lotteryChoice);
console.log("you chose. " + lotteryChoice);