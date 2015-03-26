/**
 * Created by JP on 3/25/15.
 */
// Name: Jeremiah Pizano
// Date: March 26, 2015
// Class: SDI
// Assignment: Functions

// variables

//var lotteryChoice = prompt("Which lotto numbers would you like to see?\n\nPress 1 for the Florida State lottery numbers.\nPress 2 for the Powerball lottery numbers."); //This will ask the user which lotto numbers they want to see.


// functions
function lottoValidation(chooseALotto) { //This function will verify that the user entered a choice.
    while (chooseALotto === "") { //This loop will keep running if the user doesn't enter a choice.
        chooseALotto = prompt("Please press 1 for the Florida State lottery or 2 for the Powerball lottery."); //This prompt will display if nothing is entered into the box.
    }
    return chooseALotto; //This will return the choice that the user entered into the prompt.
}

function numberGen() {
    var randomArray = [];
    var myRandomNumber = Math.round(Math.random() * (53 - 1) + 1);
    var floridaLottery = Math.round(Math.random() * (53 - 1) + 1);
    var powerballLottery = Math.round(Math.random() * (59 - 1) + 1);
    var powerballNumber = Math.round(Math.random() * (35 - 1) + 1);

    console.log(myRandomNumber);
    console.log(floridaLottery);
    console.log(powerballLottery);
    console.log(powerballNumber);
}



// main code
//lotteryChoice = lottoValidation(lotteryChoice); //This is calling the function that verifies that the user entered a choice.
//console.log("you chose. " + lotteryChoice);
numberGen();