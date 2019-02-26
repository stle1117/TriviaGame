var questions = [
  {
      question: "What football team was Odell Beckham Jr. playing against when he made his famous one handed touchdown catch?",
      choices: ["Packers", "Cowboys", "Giants", "Steelers"],
      correctAnswer: "Cowboys",
  },
  {
      question: "What college did Todd Girley II go to?",
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


function startTimer(){
  var time = 15
  $('#timer').html("<p>Seconds left to answer " + time + "</p>")
  var questionTimer = setInterval(function(){
      time--
      $('#timer').html("<p>Seconds left to answer " + time + "</p>")
      if(time === 0){
          clearInterval(questionTimer)
          index ++
          
          totalUnanswered ++
          
          $('#total-unanswered').html(totalUnanswered)
          
          time = 15
          displayNextQuestion()
          startTimer()
      }
  }, 1000)
}

startTimer();



var totalCorrect = 0
var totalWrong = 0
var totalUnanswered = 0

$('#total-correct').html(totalCorrect)
$('#total-wrong').html(totalWrong)
$('#total-unanswered').html(totalUnanswered)

var playerAnswer;
var correctAnswer;

var totalTimesUp;
var number = 5;
var intervalId;
var rightAnswers = 0;


var index = 0

function displayNextQuestion(){
  
  $('#question').html(questions[index].question)

  $('#choices').empty()
  for (let i = 0; i < questions[index].choices.length; i++) {
      var newButton = $('<button>')
      newButton.text(questions[index].choices[i])
      newButton.addClass('answer')
      $('#choices').append(newButton)
  }
}

displayNextQuestion();


$(document).on('click', '.answer', function(){
    var value = $(this).text()
    console.log(value);
    if (value === questions[index].correctAnswer){
        alert('you are right!')
        totalCorrect ++
        $('#total-correct').html(totalCorrect)
        startTimer();
    } else {
        alert('you are wrong!')
        totalWrong ++
        $('#total-wrong').html(totalWrong)
        startTimer();
    }
    index ++
})
