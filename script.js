// Defining variables for intial setup 
const leftAside = document.createElement("aside");
const main = document.createElement("main");
const rightAside = document.createElement("aside");
const numberQuestions = quizQuestions.length;
let allHighScores = ["AC - 8","AC - 6","TJ - 9"];
let timerCount = 0;
let currentQuestion = 0;
let score = 0;

// Creating the initial page and defining attributes
function init() {
  document.body.setAttribute("class","container");
  leftAside.setAttribute("id", "highscore");
  leftAside.innerHTML = "View High Score"
  rightAside.innerHTML = "Timer: <span></span>";
  rightAside.children[0].setAttribute("id","timer");
  main.innerHTML = "<div><h1>Coding Quiz Challenge</h1></div><div><p>Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answers will penalize your score 1 point and reduce the timer by ten seconds.</p></div><div><button>Start Quiz</button></div>";
  main.setAttribute("class","");
  main.children[2].children[0].setAttribute("id","startBtn")
  document.body.appendChild(leftAside);
  document.body.appendChild(main);
  document.body.appendChild(rightAside);
  document.getElementById('timer').textContent =  timerCount;
  score = 0;
  document.getElementById("startBtn").addEventListener("click", function() {
    main.innerHTML = "";
    startTimer();
    buildQuiz(currentQuestion);
  });
}

// Calling the initial page
init()

// Building the quiz
function buildQuiz (questionNumber) {
  main.innerHTML = "<div><h1></h1></div><div><ul><li></li><li></li><li></li><li></li></ul></div><div><h2></h2></div>";
  main.setAttribute("class","quiz");
  main.children[0].children[0].setAttribute("id","questionArea");
  main.children[1].children[0].setAttribute("id","answerArea");
  main.children[1].children[0].children[0].setAttribute("id","answerOne");
  main.children[1].children[0].children[1].setAttribute("id","answerTwo");
  main.children[1].children[0].children[2].setAttribute("id","answerThree");
  main.children[1].children[0].children[3].setAttribute("id","answerFour");
  main.children[2].children[0].setAttribute("id","feedbackArea");
  const question = document.getElementById("questionArea");
  const answers = document.getElementById("answerArea")
  const answerOne = document.getElementById("answerOne");
  const answerTwo = document.getElementById("answerTwo");
  const answerThree = document.getElementById("answerThree");
  const answerFour = document.getElementById("answerFour");
      
  question.textContent = quizQuestions[questionNumber].question;
  answerOne.innerHTML = "<button></button>"
  answerTwo.innerHTML = "<button></button>"
  answerThree.innerHTML = "<button></button>"
  answerFour.innerHTML = "<button></button>"
  answerOne.children[0].textContent = quizQuestions[questionNumber].answers.a;
  answerOne.children[0].setAttribute("id","a")
  answerTwo.children[0].textContent = quizQuestions[questionNumber].answers.b;
  answerTwo.children[0].setAttribute("id","b")
  answerThree.children[0].textContent = quizQuestions[questionNumber].answers.c;
  answerThree.children[0].setAttribute("id","c")
  answerFour.children[0].textContent = quizQuestions[questionNumber].answers.d;
  answerFour.children[0].setAttribute("id","d")
  

  // Event listener for quiz answers
  answers.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
      let userAnswer = event.target.id;
      let correctAnswer = quizQuestions[questionNumber].correctAnswer;
      let answerCorrectly;
      if (userAnswer === correctAnswer) {
        score ++
        answerCorrectly = true;
      } else{
        score --
        timerCount = timerCount - 10;
        document.getElementById('timer').textContent =  timerCount;
        answerCorrectly = false
      }
      nextQuestion(answerCorrectly);
    }
  });
}


// Moving to next question and giving feedback on last question
function nextQuestion (answerCorrect) {
  currentQuestion ++
  if (currentQuestion !== numberQuestions){
    buildQuiz(currentQuestion)
  } else {
    gameOver();
  }
  if (answerCorrect) {
    document.getElementById("feedbackArea").textContent = "Correct!"
    setTimeout(function(){document.getElementById("feedbackArea").textContent = "";
  },1500);
  } else {
    document.getElementById("feedbackArea").textContent = "Wrong!"
    setTimeout(function(){document.getElementById("feedbackArea").textContent = "";
  },1500);
  }
  
}





// Building the high scores page
function highScore () {
  main.innerHTML = "<div><h1>HighScore</h1></div><div></div><div></div>";
  let highScoreList = document.createElement("ol");
  main.children[1].appendChild(highScoreList);
  for (let i = 0; i < allHighScores.length; i++) {
    let highScore = allHighScores[i];
    let li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);

  highScoreList.appendChild(li);
    
  }
  let goBack = document.createElement("button");
  goBack.textContent = "Go Back";
  goBack.setAttribute("id","goBack");
  let clearHighScores = document.createElement("button");
  clearHighScores.textContent = "Clear High Scores";
  clearHighScores.setAttribute("id","clearHighScores");
  main.children[2].appendChild(goBack);
  main.children[2].appendChild(clearHighScores);

  document.getElementById("goBack").addEventListener("click", function() {
    currentQuestion = 0;
    init();
  });

  document.getElementById("clearHighScores").addEventListener("click", function() {
    allHighScores = [];
    highScore();
  });
  
} 

function gameOver () {
  timerCount = 0;
  document.getElementById('timer').textContent =  timerCount;
  document.getElementById("questionArea").textContent = "All Done!";
  let finalMain = main.children[1];
  finalMain.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.textContent = "Your final score is " + score;
  let scoreForm = document.createElement("form");
  scoreForm.setAttribute("id","finalForm");
  let intials = document.createElement("label");
  intials.setAttribute("for","userIN");
  intials.textContent = "Enter Initials"
  let inputIntials = document.createElement("input");
  inputIntials.setAttribute("type","text");
  inputIntials.setAttribute("id","userIN");
  inputIntials.setAttribute("name","initials");
  let submit = document.createElement("input")
  submit.setAttribute("type","submit");
  submit.setAttribute("value","Submit");
  submit.setAttribute("id","submitBtn");
  finalMain.appendChild(h2);
  finalMain.appendChild(scoreForm);
  scoreForm.appendChild(intials);
  scoreForm.appendChild(inputIntials);
  scoreForm.appendChild(submit);

  document.getElementById("submitBtn").addEventListener("click",function(event){
    event.preventDefault();
    let initialText = inputIntials.value.trim();
    if (initialText === ""){
      return
    }
    let newHighScore = initialText + " - " + score;
    allHighScores.push(newHighScore);
    highScore()
  })

}


// Quiz timer function
function startTimer () {
    timerCount = 60;
    var timeInterval = setInterval(function(){
    document.getElementById('timer').textContent =  timerCount;
    timerCount--;
    if (timerCount <= 0) {
      document.getElementById('timer').textContent =  timerCount;
      gameOver();
      clearInterval(timeInterval);
    }
    },1000);
}

// Event Listeners
  // Event listener for quiz start button
document.getElementById("startBtn").addEventListener("click", function() {
  main.innerHTML = "";
  startTimer();
  buildQuiz(currentQuestion);
});
  // Event listener for HighScore button
leftAside.addEventListener("click", function(){
  main.innerHTML = "";
  highScore();
})







