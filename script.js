class QuizModel {
    constructor() {}
};

class QuizView {
    constructor() {}
};

class QuizController {
    constructor(model , view) {
        this.model = model;
        this.view = view;
    };
};

const quizApp = new QuizController(new QuizModel(), new QuizView());