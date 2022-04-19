const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressbarfull')

const startingMinutes = 5;
let time = startingMinutes * 60;
const countDownEl = document.getElementById('countdown')
setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Who is the maker of the iPhone?',
        choice1: 'Apple',
        choice2: 'Microsoft',
        choice3: 'Zenith',
        choice4: 'IBM',
        answer: '1'
    },
    {
        question: 'Who is the greatest basketball player of all time?',
        choice1: 'Kobe Bryant',
        choice2: 'Lebron James',
        choice3: 'Michael Jordan',
        choice4: 'Chris Paul',
        answer: '3'
    },
    {
        question: 'Who has the most NBA Championships?',
        choice1: 'Celtics',
        choice2: 'Rockets',
        choice3: 'Bulls',
        choice4: 'Boston Celtics & Los Angeles Lakers',
        answer: '4'
    },
    {
        question: 'How Many Rings Does Tom Brady Have?',
        choice1: '2',
        choice2: '4',
        choice3: '7',
        choice4: '1',
        answer: '3'
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length ===0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()