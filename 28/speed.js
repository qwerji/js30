const video = document.querySelector('video'),
    speedControl = document.querySelector('.speed'),
    slider = document.querySelector('.speed-value')

let mouseDown = false

function changeSpeed(e) {
    if (e.type === 'mousedown') {
        mouseDown = true
    }
    if (!mouseDown || !((e.target === speedControl) || e.target === slider)) {
        return
    }
    const max = 4, 
        min = 0.4, 
        dec = (e.pageY - this.offsetTop)/speedControl.clientHeight
    slider.style.height = dec*100 + '%'
    video.playbackRate = (dec * (max - min) + min).toFixed(1)
    slider.children[0].textContent = video.playbackRate + 'x'
    if (video.playbackRate < 1) {
        slider.children[0].classList.add('below')
    } else {
        slider.children[0].classList.remove('below')
    }
}

speedControl.addEventListener('mousedown', changeSpeed)
speedControl.addEventListener('mousemove', changeSpeed)
window.addEventListener('mouseup', e => mouseDown = false)
