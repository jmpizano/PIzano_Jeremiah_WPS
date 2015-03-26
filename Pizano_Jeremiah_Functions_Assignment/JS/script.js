/**
 * Created by JP on 3/25/15.
 */
// Name: Jeremiah Pizano
// Date: March 26, 2015
// Class: SDI
// Assignment: Functions

// variables

var lotteryChoice = prompt("Which lotto numbers would you like to see?\n\nPress 1 for the Florida State Lottery numbers.\nPress 2 for the Powerball Lottery numbers."); //This will ask the user which lotto numbers they want to see.


// functions
function lottoValidation(chooseALotto) { //This function will verify that the user entered a choice.
    while (chooseALotto === "") { //This loop will keep running if the user doesn't enter a choice.
        chooseALotto = prompt("Please press 1 for the Florida State Lottery or 2 for the Powerball Lottery."); //This prompt will display if nothing is entered into the box.
    }
    return chooseALotto; //This will return the choice that the user entered into the prompt.
}

function numberGen() { //function to render random numbers for both lotteries

    //Florida Numbers
    var floridaLottery = Math.round(Math.random() * (53 - 1) + 1); //florida lottery first number
    var floridaLotteryTwo = Math.round(Math.random() * (53 - 1) + 1); //florida lottery second number
    var floridaLotteryThree = Math.round(Math.random() * (53 - 1) + 1); //florida lottery third number
    var floridaLotteryFour = Math.round(Math.random() * (53 - 1) + 1); //florida lottery forth number
    var floridaLotteryFive = Math.round(Math.random() * (53 - 1) + 1); //florida lottery fifth number
    var floridaLotterySix = Math.round(Math.random() * (53 - 1) + 1); //florida lottery sixth number

    //Powerball Numbers
    var powerballLottery = Math.round(Math.random() * (59 - 1) + 1); //powerball first number
    var powerballLotteryTwo = Math.round(Math.random() * (59 - 1) + 1); //powerball second number
    var powerballLotteryThree = Math.round(Math.random() * (59 - 1) + 1); //powerball third number
    var powerballLotteryFour = Math.round(Math.random() * (59 - 1) + 1); //powerball fourth number
    var powerballLotteryFive = Math.round(Math.random() * (59 - 1) + 1); //powerball fifth number
    var powerballNumber = Math.round(Math.random() * (35 - 1) + 1); //actual powerball number


    if (lotteryChoice === "1") {
        console.log("The Florida State Lottery numbers are " + floridaLottery + "," + floridaLotteryTwo + "," + floridaLotteryThree + "," +  floridaLotteryFour + "," +  floridaLotteryFive + "," + floridaLotterySix );


    }else if(lotteryChoice === "2"){
            console.log("The Powerball Lottery numbers are " + powerballLottery + "," + powerballLotteryTwo  + ',' + powerballLotteryThree + "," + powerballLotteryFour + "," + powerballLotteryFive + ", and the Powerball number is " + powerballNumber);
    }else{
            prompt("We could not understand your entry. Please try again later."); //This will display if they didn't put in 1 or 2
    }

}


// main code
lotteryChoice = lottoValidation(lotteryChoice); //This is calling the function that verifies that the user entered a choice.
numberGen(); //this is calling my function for the lottery numbers

//The Florida State Lottery numbers are 2,40,4,5,21,47
//The Powerball Lottery numbers are 38,21,19,54,53, and the Powerball number is 21
//The Florida State Lottery numbers are 22,39,14,18,28,51
//The Powerball Lottery numbers are 34,37,17,12,3, and the Powerball number is 4