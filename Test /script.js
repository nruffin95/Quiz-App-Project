const questionContainer = document.getElementById('question-container')
const quizContainer = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const buttonElement = document.getElementById('answer-btn')

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')




document.getElementById("start-btn").onclick = function () {
    quizContainer.remove();

    var element = document.getElementById("question-container");
    element.classList.remove("hide");
    startGame()
};


function startGame() {
    questionElement.innerText = 'Commonly Used data types DO NOT include?'
    button1.innerText = 'Strings'
    button2.innerText = 'boolean',
    button3.innerText = 'alerts',
    button4.innerText = 'numbers'

}







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