
//array of objects to hold the data for the questions and answers

var questions = [
  {
      question: "What football team was Odell Beckham Jr. playing against when he made his famous one handed touchdown catch?",
      choices: ["Packers", "Cowboys", "Giants", "Steelers"],
      correctAnswer: "Cowboys",
  },
  {
      question: "What college did Todd Gurley II go to?",
      choices: ["Texas A&M", "UNC", "Florida", "Georgia"],
      correctAnswer: "Georgia",
  },
  {
      question: "Who recently won the Mexico Golf Tournament?",
      choices: ["Dustin Johnson", "Phil Michelson", "Matt Kuchar", "Tiger Woods"],
      correctAnswer: "Dustin Johnson",
  },    
  {
      question: "Which Chicago Bears football player was known as the FRIDGE in the 80s?",
      choices: ["Walter Payton", "Jerry Rice", "Ronnie Lott", "William Perry"],
      correctAnswer: "William Perry",
  },    
  {
      question: "Who currently plays striker for Tottenham Hotspur soccer?",
      choices: ["Lionel Messi", "Paul Pogba", "Harry Kane", "David Beckham"],
      correctAnswer: "Harry Kane",
  },
  {
      question: "Who is the all-time three-point shooter for the Chicago Bulls?",
      choices: ["Michael Jordan", "Dennis Rodman", "Horace Grant", "Scottie Pippen"],
      correctAnswer: "Scottie Pippen",
  },    
  {
      question: "Who is the best pitcher of all time?",
      choices: ["Tom Glavin", "Nolan Ryan", "Clayton Kershaw", "Justin Verlander"],
      correctAnswer: "Nolan Ryan",
  }
];


window.onload = function() {
    $("#reset").on("click", reset);
    $("#start").on("click", startTimer);
  };


var time = 15;
var intervalId;
var timerCount = 0;
var total = (totalCorrect + totalWrong + totalUnanswered);
var clockRunning = false;


function displayQuestionsAgain(){

    index = 0
  
    $("#question").html(questions[index].question);
  
    $("#choices").empty()
    for (let i = 0; i < questions[index].choices.length; i++) {
        var newButton = $("<button>");
        newButton.text(questions[index].choices[i]);
        newButton.addClass("answer");
        $("#choices").append(newButton);
    }
  };


function reset() {
    time = 15;
    totalCorrect = 0;
    totalWrong = 0;
    totalUnanswered = 0;
    $("#timer").html("<p>Seconds left to answer " + time + "</p>");
    $("#total-correct").html(totalCorrect);
    $("#total-wrong").html(totalWrong);
    $("#total-unanswered").html(totalUnanswered);
    timerCount = 0;
    stop();
    $("#start").on("click", displayQuestionsAgain);

}


function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
clearInterval(intervalId);
}

function startTimer(){
    clearInterval(intervalId);
  
  $("#timer").html("<p>Seconds left to answer " + time + "</p>");
  intervalId = setInterval(decrement, 1000); 
}


function decrement() {
      time--;
      $("#timer").html("<p>Seconds left to answer " + time + "</p>");
      if(time === -1){
        stop();
        index++
        
        totalUnanswered++

        timerCount++
        
        $("#total-unanswered").html(totalUnanswered);
        time = 15;
        checkAnswer();
        startTimer();
        time = 16;
        displayNextQuestion();

        function countTo() {
            if (total === 7) {
                return false};
        }}
        countTo();

    };




var totalCorrect = 0
var totalWrong = 0
var totalUnanswered = 0

$("#total-correct").html(totalCorrect);
$("#total-wrong").html(totalWrong);
$("#total-unanswered").html(totalUnanswered);

var playerAnswer;
var totalTimesUp;
var rightAnswers = 0;


var index = 0

function displayNextQuestion(){
  
  $("#question").html(questions[index].question);

  $("#choices").empty()
  for (let i = 0; i < questions[index].choices.length; i++) {
      var newButton = $("<button>");
      newButton.text(questions[index].choices[i]);
      newButton.addClass("answer");
      $("#choices").append(newButton);
  }
}

function checkAnswer() {
$(document).on("click", ".answer", function(){
    var value = $(this).text()
    console.log(value);
    if (value === questions[index].correctAnswer){
        startTimer();
        alert("you are right!");
        totalCorrect++
        $("#total-correct").html(totalCorrect); 
        time = 16;
        index++;
        for (var i = 0; i < questions.length; i++);
        displayNextQuestion();
    } else {
        startTimer();
        alert("you are wrong!");
        totalWrong++;
        $("#total-wrong").html(totalWrong);    
        time = 16;
        index++;
        for (var i = 0; i < questions.length; i++);
        displayNextQuestion();
    }
    
})
}


startTimer();

checkAnswer();

displayNextQuestion();

endGame();

countTo();