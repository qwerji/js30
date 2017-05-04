const triggers = document.querySelectorAll('nav div.link'),
    selector = document.querySelector('.selector'),
    nav = document.querySelector('nav')

function handleEnter() {
    this.classList.add('hovered')
    setTimeout(() => {
        if (this.classList.contains('hovered')) {
            this.classList.add('active')
        }
    }, 150)
    selector.classList.add('show')

    const content = this.querySelector('.content').getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    selector.style.height = content.height + 'px'
    selector.style.width = content.width + 'px'
    selector.style.top = (content.top - navCoords.top - 14) + 'px'
    selector.style.left = (content.left - navCoords.left) + 'px'
}

function handleLeave() {
    this.classList.remove('hovered')
    setTimeout(() => {
        this.classList.remove('active')
        selector.classList.remove('hide')
    }, 150)
    selector.classList.remove('show')
}

handleEnter.bind(triggers[0])()
handleLeave.bind(triggers[0])()

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
