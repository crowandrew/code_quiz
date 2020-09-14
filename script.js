// class QuizModel {
//     constructor() {}
// };

// class QuizView {
//     constructor() {}
// };

// class QuizController {
//     constructor(model , view) {
//         this.model = model;
//         this.view = view;
//     };
// };

// const quizApp = new QuizController(new QuizModel(), new QuizView());

function QuizView(controller){
    this.controller = controller;
    this.heading =document.getElementById('heading');
}

function QuizModel(){
    this.heading = "HelloBy";
}

// void handleEvent(
//     in Event event
//   );

  function QuizController(model){
    var self = this;
    this.model = model;
  //EVENTLISTENER INTERFACE
    this.handleEvent = function(e){
      e.stopPropagation();
      switch(e.type){
        case "click":
          self.clickHandler(e.target);
          break;
        default:
          console.log(e.target);
      }
    }
  //GET MODEL HEADING
    this.getModelHeading = function(){
      return self.model.heading;
    }
  //CHANGE THE MODEL
    this.clickHandler = function(target){
      self.model.heading = 'World';
      target.innerText = self.getModelHeading();
    }
  }

  function View(controller){
    this.controller = controller;
    this.heading = document.getElementById("heading");
    this.heading.innerText = controller.getModelHeading();
    this.heading.addEventListener('click', controller);
}

function main(){
    var model = new QuizModel();
    var controller = new QuizController(model);
    var view = new QuizView(controller);
  }

  main()