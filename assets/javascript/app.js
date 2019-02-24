      
      //Array of Objects of different questions with objects of answers
    
      var questions = {
            qOne: {
                question: "astronomy question 1",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},
            
            qTwo: {
                question: "astronomy question 2",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},
                    
            qThree: {
                question: "astronomy question 3",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},

            qFour: {
                question: "astronomy question 4",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},
            
            qFive: {
                question: "astronomy question 5",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},
                    
            qSix: {
                question: "astronomy question 6",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},

            qSeven: {
                question: "astronomy question 7",
                answer: ["answer 1", "answer 2", "answer 3", "answer 4"]},

          };
    

          var playerAnswer;
          var correctAnswer;
          var totalCorrect;
          var totalWrong;
          var totalTimesUp;
          var number = 5;
          var intervalId;
          var rightAnswers = 0;


    //START THE GAME
      //button click initaties the game and the initial timeout (initiate timer is a function)
          //and hides the start button.

          function startGame() {

          $("#start").on("click", run);
          

          function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          
      
          //  The decrement function.
          function decrement() {
      
            //  Decrease number by one.
            number--;
          
      
            //  Show the number in the #timer tag.
            $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");

            //  Show the first question in the #questionText tag
            $("#questionText").text(questions.qOne.question);

            //Show first set of answers
            $("#answerOne").text(questions.qOne.answer[0]);
            $("#answerTwo").text(questions.qOne.answer[1]);
            $("#answerThree").text(questions.qOne.answer[2]);
            $("#answerFour").text(questions.qOne.answer[3]);
      
            $("#button1").on("click", correct1);

            function correct1() {
                alert("You guessed the correct answer!")
                rightAnswers++;
            }
      
            //  Once number hits zero...
            if (number === 0) {
      
              //  ...run the stop function.
              stop();
              runNextQuestion();
    
          function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
            number = 5;
        }
        //  Alert the user that time is up.

      }
    }
    }

          }

            var number = 5;

            function runNextQuestion() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrement, 1000);
                  
          
              //  The decrement function.
              function decrement() {
          
                //  Decrease number by one.
                number--;
              
                //  Show the number in the #timer tag.
                $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");
    
                //  Show the first question in the #questionText tag
                $("#questionText").text(questions.qTwo.question);
    
                //Show first set of answers
                $("#answerOne").text(questions.qTwo.answer[0]);
                $("#answerTwo").text(questions.qTwo.answer[1]);
                $("#answerThree").text(questions.qTwo.answer[2]);
                $("#answerFour").text(questions.qTwo.answer[3]);
          
                $("#button2").on("click", correct2);
                
                function correct2() {
                    alert("You guessed the correct answer!")
                    rightAnswers++;
                }

                //  Once number hits zero...
                if (number === 0) {
          
                  //  ...run the stop function.
                  stop();
                  runNextQuestionThree();
        
                  //  Alert the user that time is up.
    
                }
              
            
              function stop() {
    
                //  Clears our intervalId
                //  We just pass the name of the interval
                //  to the clearInterval function.
                clearInterval(intervalId);
                number = 5;
    
    
                }
            }
        }

        var number = 5;

        function runNextQuestionThree() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
              
      
          //  The decrement function.
          function decrement() {
      
            //  Decrease number by one.
            number--;
          
            //  Show the number in the #timer tag.
            $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");

            //  Show the first question in the #questionText tag
            $("#questionText").text(questions.qThree.question);

            //Show first set of answers
            $("#answerOne").text(questions.qThree.answer[0]);
            $("#answerTwo").text(questions.qThree.answer[1]);
            $("#answerThree").text(questions.qThree.answer[2]);
            $("#answerFour").text(questions.qThree.answer[3]);
      

            $("#button3").on("click", correct3);
                
            function correct3() {
                alert("You guessed the correct answer!")
                rightAnswers++;
            }
      
            //  Once number hits zero...
            if (number === 0) {
      
              //  ...run the stop function.
              stop();
              runNextQuestionFour();
    
              //  Alert the user that time is up.

            }
          
        
          function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
            number = 5;


            }
        }
    }


    var number = 5;

    function runNextQuestionFour() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          
  
      //  The decrement function.
      function decrement() {
  
        //  Decrease number by one.
        number--;
      
        //  Show the number in the #timer tag.
        $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");

        //  Show the first question in the #questionText tag
        $("#questionText").text(questions.qFour.question);

        //Show first set of answers
        $("#answerOne").text(questions.qFour.answer[0]);
        $("#answerTwo").text(questions.qFour.answer[1]);
        $("#answerThree").text(questions.qFour.answer[2]);
        $("#answerFour").text(questions.qFour.answer[3]);
  
        $("#button4").on("click", correct4);
                
        function correct4() {
            alert("You guessed the correct answer!")
            rightAnswers++;
        }


        //  Once number hits zero...
        if (number === 0) {
  
          //  ...run the stop function.
          stop();
          runNextQuestionFive();

          //  Alert the user that time is up.

        }
      
    
      function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        number = 5;


        }
    }
}

var number = 5;

function runNextQuestionFive() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;
  
    //  Show the number in the #timer tag.
    $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");

    //  Show the first question in the #questionText tag
    $("#questionText").text(questions.qFive.question);

    //Show first set of answers
    $("#answerOne").text(questions.qFive.answer[0]);
    $("#answerTwo").text(questions.qFive.answer[1]);
    $("#answerThree").text(questions.qFive.answer[2]);
    $("#answerFour").text(questions.qFive.answer[3]);

    $("#button1").on("click", correct1);
                
    function correct1() {
        alert("You guessed the correct answer!")
        rightAnswers++;
    }

    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();
      runNextQuestionSix();

      //  Alert the user that time is up.

    }
  

  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    number = 5;


    }
}
}

var number = 5;

function runNextQuestionSix() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;
  
    //  Show the number in the #timer tag.
    $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");

    //  Show the first question in the #questionText tag
    $("#questionText").text(questions.qSix.question);

    //Show first set of answers
    $("#answerOne").text(questions.qSix.answer[0]);
    $("#answerTwo").text(questions.qSix.answer[1]);
    $("#answerThree").text(questions.qSix.answer[2]);
    $("#answerFour").text(questions.qSix.answer[3]);


    $("#button2").on("click", correct2);
                
    function correct2() {
        alert("You guessed the correct answer!")
        rightAnswers++;
    }

    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();
      runNextQuestionSeven();

      //  Alert the user that time is up.

    }
  

  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    number = 5;


    }
}
}


var number = 5;

function runNextQuestionSeven() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;
  
    //  Show the number in the #timer tag.
    $(".timer").html("<h3>Time Left To Answer: " + number + "</h3>");

    //  Show the first question in the #questionText tag
    $("#questionText").text(questions.qSeven.question);

    //Show first set of answers
    $("#answerOne").text(questions.qSeven.answer[0]);
    $("#answerTwo").text(questions.qSeven.answer[1]);
    $("#answerThree").text(questions.qSeven.answer[2]);
    $("#answerFour").text(questions.qSeven.answer[3]);

    $("#button3").on("click", correct3);
                
    function correct3() {
        alert("You guessed the correct answer!")
        rightAnswers++;
    }

    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();
        showScore();
      //  Alert the user that time is up.

    }
  

  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    number = 5;

    }

    function showScore() {
        $(".score").html("<h1>You guessed correctly " + rightAnswers + " times!</h1>") 
    }

}
}
            startGame();
 





        //click event for the button to show qOne and Answers on the screen and 
        //(function)start time-out/show count-down on screen
      //(function)(with timer ticking here - if/else for if time runs out)
      //(function)click event for submitted answer from radio button
      //(function)evaluate submitted answer (if/else for answer right or wrong)
            //include ++ to increment correct or incorrect answers
      //(function)stop timer count-down
      //(function)show screen for answer and resulitng result of the answer submission
      //(function)time-out for answer screen
      //(function)back to question screen
      //RUN CONSEQUTIVE QUESTIONS
            //do for each question
            //initiate timer (function) again moving to qTwo
                //(function)start time-out/show count-down on screen
      //(function)(with timer ticking here - if/else for if time runs out)
      //(function)click event for submitted answer from radio button
      //(function)evaluate submitted answer (if/else for answer right or wrong)
      //(function)stop timer count-down
      //(function)show screen for answer and resulitng result of the answer submission
      //(function)time-out for answer screen
      //(function)back to question screen

          //after last question, show results screen
          //show calculation of correct answers
          //show calculation of incorrect answers
          //show calculation of time-outs (unanswered questions)


      //TIMER
        //timeout for each consequtive question
      //  Timeouts in JavaScript
      //  Set our window alert to run one second after the function's called.

  

      //Loop through array for each question/answer pair 
      //show each display of questions/answers (with timer ticking here - if/else for if time runs out)
      //evaluate submitted answer (if/else for answer right or wrong)
      //show screen for answer and resulitng result of the answer submission

      //if/else for answering the question right or not or if time runs out

          //QUESTIONS APPEARING/DISAPPEARING




        //ANSWERS APPEAR/DISAPPEAR

      //RESET THE GAME