var getGuesser = function () {
  var secret = 8;

  return function (userNumber) {
    if (userNumber === secret) {
      console.log("Well done!");
    } else {
      console.log("Unlucky, try again.");
    }
  };
};

var guess = getGuesser();

/* Further Adventures
*
* 1) Run the program.
* 
* The getGuesser and guess variables will be
* added to the global scope.
*
* 2) At the prompt, type 'getGuesser' and
*    press Enter.
*
* This will display the definition of the getGuesser function.
* In a real environment, you would see something like:
* getGuesser() {
*   var secret = 8;
*   return function(userNumber) {
*     if (userNumber === secret) {
*       console.log("Well done!");
*     } else {
*       console.log("Unlucky, try again.");
*     }
*   };
* }
*
* 3) At the prompt, type 'guess' and
*    press Enter.
*
* This will display the definition of the inner function returned by getGuesser().
* In a real environment, you would see something like:
* function(userNumber) {
*   if (userNumber === secret) {
*     console.log("Well done!");
*   } else {
*     console.log("Unlucky, try again.");
*   }
* }
*
* 4) At the prompt, type 'secret' and
*    press Enter.
*
* You will see that 'secret' is not defined because it is a local variable
* within the getGuesser function. It cannot be accessed directly from outside.
*
*/
