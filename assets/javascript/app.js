var questions = [
  {
      question: "astronomy question 1",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correctAnswer: "answer 1",
  },
  {
      question: "astronomy 2",
      choices: ["dfasd", "sadf", "answesdfasr 3", "answeasdfadsr 4"]},
          
  {
      question: "astronomy question 3",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4"]},

  {
      question: "astronomy question 4",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4"]},
  
  {
      question: "astronomy question 5",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4"]},
          
  {
      question: "astronomy question 6",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4"]},

  {
      question: "astronomy question 7",
      choices: ["answer 1", "answer 2", "answer 3", "answer 4"]}
];


function startTimer(){
  var time = 5
  $('#timer').html(time)
  var questionTimer = setInterval(function(){
      time--
      $('#timer').html(time)
      if(time === 0){
          clearInterval(questionTimer)
          index ++
          console.log(index);
          
          totalUnanswered ++
          console.log('happens');
          
          $('#total-unanswered').html(totalUnanswered)
          
          time = 5
          displayNextQuestion()
          startTimer()
      }
  }, 1000)
}

startTimer()




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

displayNextQuestion()



$(document).on('click', '.answer', function(){
    var value = $(this).text()
    console.log(value);
    if (value === questions[index].correctAnswer){
        alert('you are right!')
        totalCorrect ++
        $('#total-correct').html(totalCorrect)
    } else {
        alert('you are wrong!')
        totalWrong ++
        $('#total-wrong').html(totalWrong)
    }
    index ++
    displayNextQuestion()
})


console.log(questions[index]);