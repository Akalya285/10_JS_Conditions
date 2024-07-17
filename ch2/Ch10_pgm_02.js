var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done! You guessed the secret number.");
  } else {
    console.log("Unlucky, try again.");
  }
};

// Further Adventures

/* 1) Run the program and try a few guesses at the prompt.
   e.g. guess(2)
   
   The program currently logs "Well done!" only when
   the guessed number matches the secret number (8).
   Otherwise, it logs "Unlucky, try again."
   
   2) Change the condition in parentheses to check
      if the guess is not equal to the secret.
   
      if (userNumber !== secret)
   
   3) Run and test the updated program.
*/

// Testing the updated program:
guess(5); // Output: Unlucky, try again.
guess(10); // Output: Unlucky, try again.
guess(8); // Output: Well done! You guessed the secret number.
guess(2); // Output: Unlucky, try again.

/* 4) Change the messages to fit the new condition.
   
   Update the messages in the guess function:
   - Change "Well done!" to "Well done! You guessed the secret number."
   - Change "Unlucky, try again." to "Sorry, that's not the number. Try again."
*/

// Updated guess function:
var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done! You guessed the secret number.");
  } else {
    console.log("Sorry, that's not the number. Try again.");
  }
};

// Testing the updated program:
guess(5); // Output: Sorry, that's not the number. Try again.
guess(10); // Output: Sorry, that's not the number. Try again.
guess(8); // Output: Well done! You guessed the secret number.
guess(2); // Output: Sorry, that's not the number. Try again.
