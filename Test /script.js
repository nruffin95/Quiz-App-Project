const questionContainer = document.getElementById('question-container')
const quizContainer = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const buttonElement = document.getElementById('answer-btn')


document.getElementById("start-btn").onclick = function () {
    quizContainer.remove();

    var element = document.getElementById("question-container");
    element.classList.remove("hide");
};


const questions = [
    {
      question: 'Commonly Used data types DO NOT include?',
      answers: [
        {text: 'Strings', wrong: false},
        {text: 'booleans', wrong: false},
        {text: 'alerts', correct: true},
        {text: 'numbers', wrong: false},
      ]
    },

    {
        question: 'Who is the best youtuber?',
        answers: [
          {text: 'Nick', correct: true},
          {text: 'Wilson', wrong: false},
          {text: 'Mark', wrong: false},
          {text: 'Will', wrong: false},
        ]
      },
    
      {
        question: 'Who has the best football teams?',
        answers: [
          {text: 'Chiefs', wrong: false},
          {text: 'Steelers', wrong: false},
          {text: 'Rams', correct: true},
          {text: 'Dolphins', wrong: false},
        ]
      },  
]