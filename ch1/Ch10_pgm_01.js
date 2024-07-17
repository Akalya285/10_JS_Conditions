var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done! You guessed the secret number.");
  } else if (userNumber > secret) {
    console.log("Too high! Try again.");
  } else {
    console.log("Too low! Try again.");
  }
};

// Further Adventures

/* 1) Click run.

   2) Call the guess function at the prompt.
      e.g. guess(2)

   3) Try a few different numbers as arguments.

   The program now provides feedback based on whether
   the guessed number matches the secret number or if
   it's too high or too low.

   4) Change the condition in parentheses to now
      check if the guess is greater than the secret.

      if (userNumber > secret)

   5) Change the message logged to "Too high!"

   6) Run and test the updated program.
*/

// Testing the updated program:
guess(5); // Output: Too low! Try again.
guess(10); // Output: Too high! Try again.
guess(8); // Output: Well done! You guessed the secret number.
