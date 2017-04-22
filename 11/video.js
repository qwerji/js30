(() => {

    // Get the video element
    const playerElt = document.querySelector('.player')
    const parent = playerElt.parentElement
    playerElt.ontimeupdate = function() {
        scrubber.style.width = `${(this.currentTime/this.duration)*100}%`
    }
    console.dir(playerElt)
    
    // Initialize the new DOM elements
    const container = document.createElement('DIV')
    container.classList.add('player-container')

    const controlsContainer = document.createElement('DIV')
    controlsContainer.classList.add('controls-container')

    const playButton = document.createElement('IMG')
    playButton.classList.add('play')
    if (playerElt.autoplay) {
        playButton.src = './images/pause-button.svg'
    } else {
        playButton.src = './images/play-button.svg'
    }

    function playPause() {
        if (playerElt.paused) {
            playButton.src = './images/pause-button.svg'
            playerElt.play()
        } else {
            playButton.src = './images/play-button.svg'
            playerElt.pause()
        }
    }
    playButton.onclick = playerElt.onclick = playPause

    const scrubberContainer = document.createElement('DIV')
    scrubberContainer.classList.add('scrubber-container')
    const scrubber = document.createElement('DIV')
    scrubberContainer.appendChild(scrubber)

    function scrub(e) {
        // Don't scrub if mouse is not down
        if (!e.buttons) return
        const rect = scrubberContainer.getBoundingClientRect(),
            x = e.pageX - rect.left,
            percent = x/rect.width;
        playerElt.currentTime = percent*playerElt.duration;
    }
    scrubberContainer.onmousedown = scrubberContainer.onmousemove = scrub

    const speedContainer = document.createElement('DIV')
    speedContainer.classList.add('speed-container')
    const speed = document.createElement('DIV')
    speed.classList.add('speed')
    speedContainer.appendChild(speed)
    function changeSpeed(e) {
        if (!e.buttons) return
        const rect = speedContainer.getBoundingClientRect(),
            x = e.pageX - rect.left,
            percent = Math.ceil((x/rect.width)*100);
        speed.style.width = `${percent}%`
        playerElt.playbackRate = percent*.01;
    }
    speedContainer.onmousedown = speedContainer.onmousemove = changeSpeed
    
    const volumeContainer = document.createElement('DIV')
    volumeContainer.classList.add('volume-container')
    const volume = document.createElement('DIV')
    volume.classList.add('volume')
    volumeContainer.appendChild(volume)
    function changeVolume(e) {
        if (!e.buttons) return
        const rect = volumeContainer.getBoundingClientRect(),
            x = e.pageX - rect.left,
            percent = Math.ceil((x/rect.width)*100);
        volume.style.width = `${percent}%`
        playerElt.volume = percent*.01;
    }
    volumeContainer.onmousedown = volumeContainer.onmousemove = changeVolume
    
    const jumpForward = document.createElement('IMG')
    jumpForward.src = './images/jump-forward.svg'
    jumpForward.classList.add('jump-forward')
    jumpForward.onclick = function() {
        playerElt.currentTime += 10
    }

    const jumpBackward = document.createElement('IMG')
    jumpBackward.src = './images/jump-backward.svg'
    jumpBackward.classList.add('jump-backward')
    jumpBackward.onclick = function() {
        playerElt.currentTime -= 10
    }

    // Add the new elements back into the original parent
    controlsContainer.appendChild(scrubberContainer)
    controlsContainer.appendChild(playButton)
    controlsContainer.appendChild(jumpForward)
    controlsContainer.appendChild(jumpBackward)
    controlsContainer.appendChild(speedContainer)
    controlsContainer.appendChild(volumeContainer)
    container.appendChild(playerElt)
    container.appendChild(controlsContainer)
    parent.appendChild(container)

    if (playerElt.autoplay) {
        playerElt.play()
    }

})()
