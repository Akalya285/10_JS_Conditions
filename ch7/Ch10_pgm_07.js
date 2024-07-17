var getQuiz = function () {
  var score = 0,
      qIndex = 0,
      inPlay = true,
      questions,
      next,
      getQuestion,
      checkAnswer,
      submit,
      getHint;
    
  questions = [
    {
      question: "What is the highest mountain in the world?",
      answer: "Everest",
      hint: "It is located in the Himalayas."
    },
    {
      question: "What is the highest mountain in Scotland?",
      answer: "Ben Nevis",
      hint: "It is located near Fort William."
    }
    // Add more questions here as needed
  ];
  
  next = function () {
    qIndex = qIndex + 1;
    
    if (qIndex >= questions.length) {
      inPlay = false;
      console.log("You have finished the quiz.");
    }
  };
  
  getQuestion = function () {
    if (inPlay) {
      return questions[qIndex].question;
    } else {
      return "You have finished the quiz.";
    }
  };
  
  checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      console.log("Correct!");
      score = score + 1;
    } else {
      console.log("No, the answer is " + questions[qIndex].answer);
    }
  };
  
  getHint = function () {
    if (inPlay) {
      return questions[qIndex].hint;
    } else {
      return "No hints available. Quiz has ended.";
    }
  };
  
  submit = function (userAnswer) {
    var message = "You have finished the quiz.";
    
    if (inPlay) {
      checkAnswer(userAnswer);
      next();
      message = "Your score is " + score + " out of " + qIndex;
    }
      
    return message;
  };
  
  return {
    quizMe: getQuestion,
    submit: submit,
    helpMe: getHint  // Expose getHint as helpMe
  };
};

var quiz = getQuiz();

// Testing the quiz and hint functionality

console.log(quiz.quizMe()); // Display current question
console.log(quiz.helpMe()); // Display hint for current question
console.log(quiz.submit("Everest")); // Submitting answer
console.log(quiz.quizMe()); // Display next question
console.log(quiz.helpMe()); // Display hint for new question
