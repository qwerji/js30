window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
// Live updates during speech
recognition.interimResults = true

let p = document.createElement('p'),
    container = document.createElement('div')
const transcript = document.querySelector('.transcript'),
    greeting = document.createElement('h2')
greeting.textContent = '🎙 Say hello!'
container.appendChild(p)
transcript.appendChild(container)
transcript.appendChild(greeting)

// This listener unbinds itself at the end of a sentance.
recognition.addEventListener('result', e => {
    let words = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join()

    p.textContent = words

    if (e.results[0].isFinal) {
        words = words.toLowerCase()
        if (words.includes('read back')) {
            p.textContent = p.textContent
                .replace('read back', '')
                .replace('Read back', '')
                .replace('Read Back', '')
            let msg = p.textContent
            if (p.textContent === '') {
                msg = 'Nothing to read back.'
            }
            window.speechSynthesis.speak(
                new SpeechSynthesisUtterance(msg)
            )
        }
        if (words.includes('snail')) {
            p.textContent = p.textContent
                .replace('snail', '🐌')
                .replace('Snail', '🐌')
        }
        if (words.includes('color')) {
            p.classList.add('rainbow')
        }
        if (p.textContent === '') {
            transcript.removeChild(container)
        } else {
            const timestamp = document.createElement('p')
            timestamp.textContent += (new Date()).toLocaleTimeString()
            container.appendChild(timestamp)
        }
        p = document.createElement('p')
        container = document.createElement('div')
        container.appendChild(p)
        transcript.insertBefore(container, transcript.firstChild)
    }
})

// So this listener is neccessary
recognition.addEventListener('end', recognition.start)
recognition.start()

console.log('Commands:')
console.log(['snail','color','read back'])
