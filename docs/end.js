const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finaalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentSchore')

const highscores = JSON.parse(localStorage.getItem('highScore')) || []
const MAX_HIGH_SCORES = 5
finaalScore.innertext = mostRecentScore

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()


const score = {
    score: mostRecentScore,
    name: username.value
}
highscores.push(score)

highscores.sort((a,b) => {
    return b.score - a.score
})

highscores.splice(5)

localStorage.setItem('highscores', JSON.stringify(highscores))
window.location.assign('highscores.html')
}