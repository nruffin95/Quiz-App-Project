const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressbarfull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is 2 and 2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: '2'
    },
    {
        question: 'What is 1 and 1',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: '2'
    },
    {
        question: 'What is 3 and 3',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: '2'
    },
    {
        question: 'What is 4 and 4',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: '2'
    },
]