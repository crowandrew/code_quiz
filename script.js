const leftAside = document.createElement("aside");
const main = document.createElement("main");
const rightAside = document.createElement("aside");
let timerCount = 0;

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

init()

function buildQuiz () {
  main.innerHTML = "<div><h1>Question</h1></div><div>Answers</div><div>Feedback</div>";
  main.setAttribute("class","quiz");
  main.children[0].setAttribute("id","questionArea");
  main.children[1].setAttribute("id","answerArea");
  main.children[2].setAttribute("id","feedbackArea");
  const question = document.getElementById("questionArea");
  const answers = document.getElementById("answerArea");
  const feedback = document.getElementById("feedbackArea");

} 

function highScore () {
  main.innerHTML = "<div><h1>HighScore</h1></div><div>Scores</div><div>Something</div>";
} 


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
  buildQuiz();
});
  // Event listener for HighScore button
leftAside.addEventListener("click", function(){
  main.innerHTML = "";
  highScore();
})




