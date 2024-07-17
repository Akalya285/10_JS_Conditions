var getGuesser = function () {
  var secret = Math.floor(Math.random() * 21) + 30; // Random number between 30 and 50

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Unlucky, try again.";
    }
  };
};

var guess = getGuesser();

// Testing the game
console.log(guess(35)); // Example of playing the game

/* Further Adventures
*
* 1) Run the program.
*
* 2) Play the game a few times on the console.
*    e.g. guess(2)
*
* 3) Change the code so the secret number is
*    between 30 and 50.
*
* 4) Test your changes.
*/

// Challenge: Create a function called 'between' that returns a random whole number between two numbers passed as arguments.

var between = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Testing the 'between' function
console.log(between(1, 5));     // Example: Generates a number between 1 and 5
console.log(between(100, 200)); // Example: Generates a number between 100 and 200
