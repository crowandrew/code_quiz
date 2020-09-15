// Defining variables for intial setup 
const leftAside = document.createElement("aside");
const main = document.createElement("main");
const rightAside = document.createElement("aside");
let timerCount = 0;
let currentQuestion = 0;

// Creating the initial page and defining attributes
function init() {
  document.body.setAttribute("class","container");
  leftAside.setAttribute("id", "highscore");
  leftAside.innerHTML = "View High Score"
  rightAside.innerHTML = "Timer: <span></span>";
  rightAside.children[0].setAttribute("id","timer");
  main.innerHTML = "<div><h1>Coding Quiz Challenge</h1></div><div><p>Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answers will penalize your score 1 point and reduce the timer by ten seconds.</p></div><div><button>Start Quiz</button></div>";
  main.children[2].children[0].setAttribute("id","startBtn")
  document.body.appendChild(leftAside);
  document.body.appendChild(main);
  document.body.appendChild(rightAside);
  document.getElementById('timer').textContent =  timerCount;
}

// Calling the initial page
init()

// Building the quiz
function buildQuiz (questionNumber) {
  main.innerHTML = "<div><h1></h1></div><div><ul><li></li><li></li><li></li><li></li></ul></div><div></div>";
  main.setAttribute("class","quiz");
  main.children[0].children[0].setAttribute("id","questionArea");
  main.children[1].children[0].setAttribute("id","answerArea");
  main.children[1].children[0].children[0].setAttribute("id","answerOne");
  main.children[1].children[0].children[1].setAttribute("id","answerTwo");
  main.children[1].children[0].children[2].setAttribute("id","answerThree");
  main.children[1].children[0].children[3].setAttribute("id","answerFour");
  main.children[2].setAttribute("id","feedbackArea");
  const question = document.getElementById("questionArea");
  const answers = document.getElementById("answerArea")
  const answerOne = document.getElementById("answerOne");
  const answerTwo = document.getElementById("answerTwo");
  const answerThree = document.getElementById("answerThree");
  const answerFour = document.getElementById("answerFour");
  const feedback = document.getElementById("feedbackArea");
    
  question.textContent = quizQuestions[questionNumber].question;
  answerOne.innerHTML = "<button></button>"
  answerTwo.innerHTML = "<button></button>"
  answerThree.innerHTML = "<button></button>"
  answerFour.innerHTML = "<button></button>"
  answerOne.children[0].textContent = quizQuestions[questionNumber].answers.a;
  answerTwo.children[0].textContent = quizQuestions[questionNumber].answers.b;
  answerThree.children[0].textContent = quizQuestions[questionNumber].answers.c;
  answerFour.children[0].textContent = quizQuestions[questionNumber].answers.d;
  
  // Event listener for quiz answers
  answers.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
      console.log("This is A Button Click");
    }
  });
}


// Logging score for answer and giving feedback
function logAnswer () {
  currentQuestion ++
  buildQuiz(currentQuestion)
}


// Building the high scores page
function highScore () {
  main.innerHTML = "<div><h1>HighScore</h1></div><div>Scores</div><div>Something</div>";
} 

// Quiz timer function
function startTimer () {
    timerCount = 120;
    var timeInterval = setInterval(function(){
    document.getElementById('timer').textContent =  timerCount;
    timerCount--;
    if (timerCount === 0) {
      document.getElementById('timer').textContent =  timerCount;
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







