// Name: Jeremiah Pizano
// Date: March 12, 2015
// Class: SDI
// Assignment: Expressions

// We will calculate how many chairs are available for the lecture in hall C.

// Variables
var totalChairs; // variable for the total amount of chairs.
var reservations; // variable for the amount of reserved seats.
var walkIns; // variable for the amount of people who bought tickets at the door.
var seatsLeft; // variable to calculate how many seats are left in the lecture hall.

// Prompts
totalChairs = Number(prompt("We are going to find out how many seats are left in lecture hall C.\nHow many chairs are in lecture hall C?")); // The user will insert how many chairs are in Hall C.
reservations = Number(prompt("How many people reserved seats for the lecture?")); // The user will insert how many people RSVP a seat.
walkIns = Number(prompt("How many people bought tickets at the door?")); // The user will insert how many people who bought tickets at the door.
seatsLeft = totalChairs - (reservations + walkIns); // This will calculate how many seats are left in the lecture hall.


// Outputs
console.log("Lecture hall C seats " + totalChairs + " people."); // will display the total amount of chairs.
console.log(reservations + " seat(s) were reserved for the lecture with Mr. Lewis."); // will display the amount of reservations.
console.log(walkIns + " ticket(s) were sold at the door."); // will display the amount of walk ins.
console.log("There are only " + seatsLeft + " seat(s) left in lecture hall C."); // will display how many seats are left in the lecture hall.




