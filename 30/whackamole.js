const moles = document.querySelectorAll('.mole'),
    holes = document.querySelectorAll('.hole'),
    scoreElt = document.querySelector('.score'),
    startButton = document.querySelector('.start'),
    gameoverElt = document.querySelector('.gameover'),
    html = document.all[0],
    hiScoreElt = document.querySelector('.hi-score')

let count = 0,
    score = 0,
    currentHole = null,
    timeout = null,
    gameTimeout = null,
    gameover = true

function reset() {
    count = 0
    score = 0
    scoreElt.textContent = score
    currentMole = null
    html.classList.add('mallet')
    startButton.textContent = 'Go!'
    gameoverElt.style.display = 'none'
    gameoverElt.style.animationName = ''
    gameTimeout = setTimeout(() => {
        const hiScore = getHiScore(), ratio = hiScore[0]/hiScore[1] || 0
        if (score/count > ratio) {
            setHiScore()
        }
        html.classList.remove('mallet')
        gameoverElt.style.display = 'block'
        gameoverElt.style.animationName = 'gameover'
        gameover = true
        clearTimeout(timeout)
        hideMole(currentHole)
        startButton.textContent = 'Reset'
    }, 20000)
    gameover = false
    gameLoop()
}

function gameLoop() {
    if (!gameover) {
        timeout = getTimeout(getRandomHole(),randomInt())
    }
}

function randomInt(min=250,max=1500) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomHole() {
    let hole = currentHole
    do {
        hole = holes[randomInt(0,holes.length-1)]
    } while (hole === currentHole)
    currentHole = hole
    return currentHole
}

function getTimeout(hole, time) {
    popMole(hole)
    return setTimeout(() => {
        hideMole(hole)
        gameLoop()
    },time)
}

function popMole(hole) {
    count++
    scoreElt.textContent = `${score}/${count}`
    hole.dataset.clickable = 'yes'
    hole.classList.add('up')
}

function hideMole(hole) {
    hole.classList.remove('up')
}

holes.forEach(hole => {
    hole.addEventListener('click', e => {
        if (e.srcElement.className === 'mole' && hole.dataset.clickable === 'yes') {
            hole.dataset.clickable = 'no'
            hideMole(hole)
            score++
            scoreElt.textContent = `${score}/${count}`
        }
    })
})

startButton.addEventListener('click', () => {
    if (gameover) {
        reset()
    }
})

function getHiScore() {
    const hiScore = JSON.parse(localStorage.getItem('hi-score')) || [0,0]
    hiScoreElt.textContent = `High Score: ${hiScore[0] || 0}/${hiScore[1] || 0}`
    return hiScore
}
getHiScore()

function setHiScore() {
    hiScoreElt.textContent = `High Score: ${score}/${count}`
    localStorage.setItem('hi-score', JSON.stringify([score,count]))
}
