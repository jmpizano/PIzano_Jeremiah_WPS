/**
 * Created by JP on 3/25/15.
 */
// Name: Jeremiah Pizano
// Date: March 26, 2015
// Class: SDI
// Assignment: Functions

// variables

var lotteryChoice = prompt("Which lotto numbers would you like to see?\n\nPress 1 for the Florida State lottery numbers.\nPress 2 for the Powerball lottery numbers."); //This will ask the user which lotto numbers they want to see.
var number;

// functions
function lottoValidation(chooseALotto) { //This function will verify that the user entered a choice.
    while (chooseALotto === "") { //This loop will keep running if the user doesn't enter a choice.
        chooseALotto = prompt("Please press 1 for the Florida State lottery or 2 for the Powerball lottery."); //This prompt will display if nothing is entered into the box.
    }
    return chooseALotto; //This will return the choice that the user entered into the prompt.
}

function numberGen() { // 

    //Florida Numbers
    var floridaLottery = Math.round(Math.random() * (53 - 1) + 1);
    var floridaLotteryTwo = Math.round(Math.random() * (53 - 1) + 1);
    var floridaLotteryThree = Math.round(Math.random() * (53 - 1) + 1);
    var floridaLotteryFour = Math.round(Math.random() * (53 - 1) + 1);
    var floridaLotteryFive = Math.round(Math.random() * (53 - 1) + 1);
    var floridaLotterySix = Math.round(Math.random() * (53 - 1) + 1);

    //Powerball Numbers
    var powerballLottery = Math.round(Math.random() * (59 - 1) + 1);
    var powerballLotteryTwo = Math.round(Math.random() * (59 - 1) + 1);
    var powerballLotteryThree = Math.round(Math.random() * (59 - 1) + 1);
    var powerballLotteryFour = Math.round(Math.random() * (59 - 1) + 1);
    var powerballLotteryFive = Math.round(Math.random() * (59 - 1) + 1);
    var powerballNumber = Math.round(Math.random() * (35 - 1) + 1);


    if (lotteryChoice === "1") {
        console.log(floridaLottery + "," + floridaLotteryTwo + "," + floridaLotteryThree + "," +  floridaLotteryFour + "," +  floridaLotteryFive + "," + floridaLotterySix );


    }else if(lotteryChoice === "2"){
            console.log(powerballLottery + "," + powerballLotteryTwo  + ',' + powerballLotteryThree + "," + powerballLotteryFour + "," + powerballLotteryFive + ",\nAnd the Powerball number is " + powerballNumber);
    }else{
            prompt("We could not understand your entry. Please try again later.");
    }

}




// main code
lotteryChoice = lottoValidation(lotteryChoice); //This is calling the function that verifies that the user entered a choice.
numberGen();

