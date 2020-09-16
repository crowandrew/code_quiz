// Defining variables for initial setup 
const leftAside = document.createElement("aside");
const main = document.createElement("main");
const rightAside = document.createElement("aside");
const numberQuestions = quizQuestions.length;
let allHighScores = [];
let timerCount = 0;
let currentQuestion = 0;
let score = 0;

// Creating the initial page and defining attributes
function init() {
  document.body.setAttribute("class", "container");
  leftAside.setAttribute("id", "highscore");
  leftAside.innerHTML = "View High Scores"
  rightAside.innerHTML = "Timer: <span></span>";
  rightAside.children[0].setAttribute("id", "timer");
  main.innerHTML = "<div><h1>Coding Quiz Challenge</h1></div><div><p>Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answers will penalize your score 1 point and reduce the timer by ten seconds.</p></div><div><button>Start Quiz</button></div>";
  main.setAttribute("class", "");
  main.children[2].children[0].setAttribute("id", "startBtn")
  document.body.appendChild(leftAside);
  document.body.appendChild(main);
  document.body.appendChild(rightAside);
  document.getElementById('timer').textContent = timerCount;
  score = 0;
  document.getElementById("startBtn").addEventListener("click", function () {
    main.innerHTML = "";
    timerCount = 60;
    startTimer();
    buildQuiz();
  });
}

// Calling the initial page
init()

// Building the quiz framework
function buildQuiz() {
  main.innerHTML = "<div><h1></h1></div><div><ul><li></li><li></li><li></li><li></li></ul></div><div><h2></h2></div>";
  main.setAttribute("class", "quiz");
  let quesArea = main.children[0].children[0];
  let ansArea = main.children[1].children[0];
  let fbArea = main.children[2].children[0];
  quesArea.setAttribute("id", "questionArea");
  ansArea.setAttribute("id", "answerArea");
  ansArea.children[0].setAttribute("id", "answerOne");
  ansArea.children[1].setAttribute("id", "answerTwo");
  ansArea.children[2].setAttribute("id", "answerThree");
  ansArea.children[3].setAttribute("id", "answerFour");
  fbArea.setAttribute("id", "feedbackArea");
  let qs = [...getQuerySelectors()];
  qs[1].innerHTML = "<button></button>";
  qs[2].innerHTML = "<button></button>";
  qs[3].innerHTML = "<button></button>";
  qs[4].innerHTML = "<button></button>";
  qs[1].children[0].setAttribute("id", "a");
  qs[2].children[0].setAttribute("id", "b");
  qs[3].children[0].setAttribute("id", "c");
  qs[4].children[0].setAttribute("id", "d");
  renderQuestions();
}

// Rendering the current question
function renderQuestions() {
  let qs = [...getQuerySelectors()];
  qs[0].textContent = quizQuestions[currentQuestion].question;
  qs[1].children[0].textContent = quizQuestions[currentQuestion].answers.a;
  qs[2].children[0].textContent = quizQuestions[currentQuestion].answers.b;
  qs[3].children[0].textContent = quizQuestions[currentQuestion].answers.c;
  qs[4].children[0].textContent = quizQuestions[currentQuestion].answers.d;
  nextQuestion();
}

// Checking if the answer is correct. Adding to score if right if wrong reducing score and time. Then loading next question
function nextQuestion() {
  let qs = [...getQuerySelectors()];
  qs[5].addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
      console.log(event.target.textContent);
      let userAnswer = event.target.id;
      let correctAnswer = quizQuestions[currentQuestion].correctAnswer;
      let answerCorrectly;
      if (userAnswer === correctAnswer) {
        score++
        answerCorrectly = true;
      } else {
        score--
        timerCount -= 10;
        document.getElementById('timer').textContent = timerCount;
        answerCorrectly = false;
      };
      currentQuestion++
      if (currentQuestion !== numberQuestions) {
        buildQuiz(currentQuestion);
      } else {
        gameOver();
      };
      if (answerCorrectly) {
        document.getElementById("feedbackArea").textContent = "Correct!"
        setTimeout(function () {
          document.getElementById("feedbackArea").textContent = "";
        }, 1500);
      } else {
        document.getElementById("feedbackArea").textContent = "Wrong!"
        setTimeout(function () {
          document.getElementById("feedbackArea").textContent = "";
        }, 1500);
      };
    };
  });
}

// Building the final screen before entering your score
function gameOver() {
  timerCount = 0;
  document.getElementById('timer').textContent = timerCount;
  document.getElementById("questionArea").textContent = "All Done!";
  let finalMain = main.children[1];
  let h2 = document.createElement("h2");
  let scoreForm = document.createElement("form");
  let initials = document.createElement("label");
  let inputInitials = document.createElement("input");
  let submit = document.createElement("input")
  finalMain.innerHTML = "";
  h2.textContent = "Your final score is " + score;
  initials.textContent = "Enter Initials"
  scoreForm.setAttribute("id", "finalForm");
  initials.setAttribute("for", "userIN");
  inputInitials.setAttribute("type", "text");
  inputInitials.setAttribute("id", "userIN");
  inputInitials.setAttribute("name", "initials");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute("id", "submitBtn");
  finalMain.appendChild(h2);
  finalMain.appendChild(scoreForm);
  scoreForm.appendChild(initials);
  scoreForm.appendChild(inputInitials);
  scoreForm.appendChild(submit);

  document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault();
    storeScore(inputInitials)
    highScore()
  });

}

// Building the high scores page
function highScore() {
  main.innerHTML = "<div><h1>High Scores</h1></div><div></div><div></div>";
  let goBack = document.createElement("button");
  let clearHighScores = document.createElement("button");
  clearHighScores.textContent = "Clear High Scores";
  goBack.textContent = "Go Back";
  goBack.setAttribute("id", "goBack");
  main.setAttribute("class", "highScore");
  clearHighScores.setAttribute("id", "clearHighScores");
  main.children[2].appendChild(goBack);
  main.children[2].appendChild(clearHighScores)
  renderHighScores();

  document.getElementById("goBack").addEventListener("click", function () {
    currentQuestion = 0;
    init();
  });

  document.getElementById("clearHighScores").addEventListener("click", function () {
    allHighScores = [];
    highScore();
  });

}

// Quiz timer function
function startTimer() {
  let timeInterval = setInterval(function () {
    document.getElementById('timer').textContent = timerCount;
    timerCount--;
    if (timerCount <= 0) {
      document.getElementById('timer').textContent = timerCount;
      gameOver();
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Setting spread selectors
function getQuerySelectors() {
  const question = document.getElementById("questionArea");
  const answers = document.getElementById("answerArea")
  const answerOne = document.getElementById("answerOne");
  const answerTwo = document.getElementById("answerTwo");
  const answerThree = document.getElementById("answerThree");
  const answerFour = document.getElementById("answerFour");
  return [question, answerOne, answerTwo, answerThree, answerFour, answers]
};

// Event listener for HighScore button
leftAside.addEventListener("click", function () {
  main.innerHTML = "";
  highScore();
})

// Storing high scores from gameOver 
function storeScore(inputInitials) {
  let initialText = inputInitials.value.trim();
  if (initialText === "") {
    return
  }
  let newHighScore = score + "   " + initialText;
  allHighScores.push(newHighScore);
}

// Render High Scores
function renderHighScores(){
  let highScoreList = document.createElement("ol");
  main.children[1].appendChild(highScoreList);
  let allHighScoresSort = allHighScores.sort();
  for (let i = 0; i < allHighScores.length; i++) {
    let highScore = allHighScoresSort[i];
    let li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);

    highScoreList.appendChild(li);

  }
}



