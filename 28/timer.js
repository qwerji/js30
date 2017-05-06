const timeDisplay = document.querySelector('.display h1'),
    controls = [...document.querySelector('.controls').children],
    beBackAt = document.querySelector('.display p'),
    sound = new Audio('./timesup.wav')

let interval = null, 
    targetTime = 0

function setDisplay(totalSeconds) {
    totalSeconds = Math.round(totalSeconds)
    const secs = totalSeconds % 60, 
        mins = Math.floor(totalSeconds/60)%60, 
        hrs = Math.floor((totalSeconds/60)/60)

    timeDisplay.textContent = 
        (hrs  > 0 ? `${hrs}h `  : '') + 
        (mins > 0 ? `${mins}m ` : '') + 
        (secs > 0 ? `${secs}s`  : '')
}

function tick() {
    const totalSeconds = (targetTime - Date.now())/1000
    setDisplay(totalSeconds)
    if (totalSeconds <= 0) {
        clearInterval(interval)
        timeDisplay.textContent = "Time's Up!"
        sound.play()
    }
}

function setTimer(e) {
    const seconds = parseInt(e.srcElement.dataset.secs) || parseInt(e.srcElement.value)*60,
        now = Date.now()

    setDisplay(seconds)
    targetTime = now + (seconds * 1000)
    const end = new Date(targetTime), 
        hours = end.getHours()
        mins = end.getMinutes()

    beBackAt.textContent = 
        `Be back at ${hours > 12 ? hours - 12 : hours}:${(mins < 10 ? '0' : '') + mins}`

    clearInterval(interval)
    interval = setInterval(tick, 1000)
}

function customTime(e) {
    setTimer(e)
    e.srcElement.value = ''
}

controls.forEach(control => {
    if (control.nodeName === 'P') {
        control.addEventListener('click', setTimer)
    } else {
        control.addEventListener('change', customTime)
    }
})
