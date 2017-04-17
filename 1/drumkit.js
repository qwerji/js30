
function Drumkit(drums) {

    this.element = document.createElement('div')
    this.element.id = 'drumkit'
    document.getElementsByTagName('main')[0].appendChild(this.element)

    for (var i = 0; i < drums.length; i++) {
        const drum = new Drum(drums[i])
        this[drum.key] = drum
        this.element.appendChild(drum.element)
    }

    window.addEventListener('keydown', (event => {
        const drum = this[event.key]
        if (drum) {
            drum.play()
            event.preventDefault()
        }
    }).bind(this))

    console.log('New Drumkit created:')
    console.log(this)
}

function Drum(init) {

    this.name = init.name
    this.sound = new Audio(init.filename)
    this.key = init.key

    this.play = () => {
        this.sound.pause()
        this.sound.currentTime = 0
        this.sound.play()
        this.animate()
    }

    this.element = document.createElement('div')
    this.element.classList.add('drum')
    this.element.id = this.name
    const nameElt = document.createElement('p')
    const keyElt = document.createElement('p')
    nameElt.innerHTML = this.name
    keyElt.innerHTML = this.key
    this.element.appendChild(nameElt)
    this.element.appendChild(keyElt)
    this.element.onclick = this.play

    this.animate = () => {
        this.element.classList.add('onhit')
        setTimeout(function() {
            this.classList.remove('onhit')
        }.bind(this.element), 20)
    }

}

const kit = new Drumkit([
    {name: 'kick', filename: 'sounds/kick.wav', key: ','},
    {name: 'snare', filename: 'sounds/snare.wav', key: '.'},
    {name: 'hihat', filename: 'sounds/hihat.wav', key: '/'},
])
