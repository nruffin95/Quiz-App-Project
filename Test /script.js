const questionContainer = document.getElementById('question-container')
const startButton = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const questionButtons = document.getElementById('answer-btn')


startButton.addEventListener('click', startGame)

  function startGame() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    showQuestion()
  }

function showQuestion(question){
  questionElement.innerText = questions.question
}

function selectAnswer(){

}


const questions = [
  {
    question: 'What is your favorite youtuber'
  
  }
]




// const questions = {question:"Who Is Your Favorite Youtuber", answers:"Nick"};
