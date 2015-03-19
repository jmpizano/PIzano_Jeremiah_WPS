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
