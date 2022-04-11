const questionContainer = document.getElementById('question-container')
const quizContainer = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const buttonElement = document.getElementById('answer-btn')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

function removeQuestions(){
  questionElement.remove();
  buttonElement.remove()
}

document.getElementById("start-btn").onclick = function () {
    quizContainer.remove();

    var element = document.getElementById("question-container");
    element.classList.remove("hide");
    showQuestions1()
};

function showQuestions1(){
  questionElement.textContent = 'Commonly Used data types DO NOT include?'
  btn1.textContent = 'Strings'
  btn2.textContent = 'booleans'
  btn3.textContent = 'alerts'
  btn4.textContent = 'numbers'

  btn1.addEventListener("click", myFunction);
    function myFunction(){
    alert('Correct')
    removeQuestions();
  }

  btn2.addEventListener("click", myFunction2);
    function myFunction2(){
    alert('Incorrect')
    removeQuestions()
  }

  btn3.addEventListener("click", myFunction3);
    function myFunction3(){
    alert('Incorrect')
    removeQuestions()
  }

  btn4.addEventListener("click", myFunction4);
    function myFunction4(){
    alert('Incorrect')
    removeQuestions()
  }
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