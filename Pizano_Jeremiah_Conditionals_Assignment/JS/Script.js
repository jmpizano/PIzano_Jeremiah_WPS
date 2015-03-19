/**
 * Created by JP on 3/18/15.
 */
// Name: Jeremiah Pizano
// Date: March 19, 2015
// Class: SDI
// Assignment: Conditionals

//We are going to find out how much life is left for a character that has taken damage.

//variables
var knight = confirm("Is your character a knight?"); //This will determine if the character is a knight.
var chosenOne = confirm("Do you possess the sword Excalibur?"); // prompt to see if they have the sacred sword excalibur.
var charLevel = Number(prompt("What level is your character? Enter a number.")); // this will determine what level the character is.
var damageTaken = Number(prompt("How much damage has your character taken? Enter a number.")); // This will determine how much damage the character has taken.


// if statements to find the character's starting health
if(charLevel >= 10){ //if statement to determine how much health the player has.
    charLevel = 100; //if the character level is above 10 they will start with 100 health
}else{
    charLevel = 50; //if the character level is below 10 they will start with 50 health
}


//if statements to display the player's health with or with out the bonus.
if(knight === true){ //if statement to determine if the player is a knight
    knight = charLevel + 50;
    console.log("Your starting health was " + (charLevel + 50) + "."); // if the player is a knight, they receive a 50 health bonus

}else{
    knight = charLevel;
    console.log("Your starting health was " + charLevel + "."); // this will make the var knight the overall health of the character
}


var healthTotal = knight - damageTaken; // This will calculate how much health is left
console.log("You have " + healthTotal + " health left."); // print out how much health is left


// if statement to tell the user if they are alive or dead
if(healthTotal > 5){ //if statement to determine if the player is alive or dead
    console.log("You are alive and well!"); // if their health is above 1 they are alive and well
}else if(healthTotal == 1){
    console.log("You are alive but need health immediately."); //if the player only has one health this message will display
}else{
    console.log("Sorry but you are dead."); // if the player's health is below 1 they are dead
}
