const container = document.querySelector('.dragbox'),
    h1 = document.querySelector('h1')
let mouseIsDown = false, targetSpeed = 0, easing = false

fetch('./colors.json').then(data => {
    data.json().then(parsed => {
        for (let i = 0; i < parsed.length-1; i+=2) {
            const image = document.createElement('div'),
                color = parsed[i].toLowerCase(),
                hex = parsed[i+1],
                pColor = document.createElement('p'),
                hColor = document.createElement('p'),
                pCopied = document.createElement('p')

            image.style.background = color

            pColor.textContent = color
            hColor.textContent = hex
            pCopied.textContent = 'Hex copied!'

            pColor.classList.add('no-select')
            hColor.classList.add('no-select')
            pCopied.classList.add('no-select')
            pCopied.classList.add('no-opacity')

            image.appendChild(pColor)
            image.appendChild(hColor)
            image.appendChild(pCopied)

            image.addEventListener('click', e => {
                [...container.children].forEach(child => {
                    child.style.animationName = ''
                    child.querySelector('p:nth-of-type(3)').classList.add('no-opacity')
                })
                image.style.animationName = 'copy'
                h1.style.color = hex
                pCopied.classList.remove('no-opacity')
                hColor.classList.remove('no-select')
                selectText(hColor)
                document.execCommand('copy')
                hColor.classList.add('no-select')
            })

            container.appendChild(image)
        }
    })
})

window.addEventListener('mousedown', () => {
    mouseIsDown = true
    targetSpeed = 0
    easing = false
})
window.addEventListener('mouseup', () => mouseIsDown = false)

container.addEventListener('mouseup', e => {
    easing = true
    window.requestAnimationFrame(ease)
})

container.addEventListener('mousemove', e => {
    if (!mouseIsDown || easing) return
    targetSpeed = -e.movementX*1.5
    window.scrollBy(targetSpeed,0)
})

function ease() {
    if (targetSpeed > 0.01 || targetSpeed < -0.01) {
        window.scrollBy(targetSpeed,0)
        targetSpeed *= 0.96
        window.requestAnimationFrame(ease)
    } else {
        targetSpeed = 0
    }
}

function selectText(element) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange()
        range.moveToElementText(element)
        range.select()
    } else if (window.getSelection) {
        const selection = window.getSelection(),
            range = document.createRange()
        range.selectNodeContents(element)
        selection.removeAllRanges()
        selection.addRange(range)
    }
}
