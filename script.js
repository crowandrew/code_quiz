const leftAside = document.createElement("aside");
const main = document.createElement("main");
const rightAside = document.createElement("aside");
let timerCount = 0;

// Initializes the Start of the Quiz
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

function buildQuiz () {
  cons =
  

}

// Timer for Quiz
function startTimer (){
    timerCount = 120;
      
    let timeInterval = setInterval(function(){
    document.getElementById('timer').textContent =  timerCount;
    timerCount--;

    if (timerCount === 0) {
      document.getElementById('timer').textContent =  timerCount;
      clearInterval(timeInterval);
    }

    },1000);
}

// Event Listeners
document.getElementById("startBtn").addEventListener("click",function() {
  main.innerHTML = "";
  buildQuiz();
  startTimer();
});

init()
