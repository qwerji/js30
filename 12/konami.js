
// FIRST IMPLEMENTATION
// You cannot begin another sequence once you have started one...
/*
const code = [
    'ArrowUp',   'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b',         'a',
    'Enter'
]

console.group('Konami Code')
code.forEach(key => {
    console.log(`%c ${key}`, 'color: green;')
})
console.groupEnd('Konami Code')

let seq = 0

window.onkeydown = function(e) {
    if (code[seq] === e.key) {
        if (seq === 0) {
            console.group('Sequence')
        }
        console.log(`%c Sequence Advanced: ${code[seq]}`, 'color: green;')
        seq++
    } else {
        console.log('%c Sequence Cleared: 0', 'color: red;')
        console.groupEnd('Sequence')
        seq = 0
    }
    if (seq === code.length) {
        seq = 0
        console.log('%cKonami Code Confirmed!', 'font-size: 24px; color: green;')
        console.groupEnd('Sequence')
        const p = document.createElement('P')
        p.innerHTML = 'Konami Code Confirmed! ✅'
        document.body.appendChild(p)
    }
}
*/

// SECOND IMPLEMENTATION
// You can start sequences at any time.

const code = [
    'ArrowUp',   'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b',         'a',
    'Enter'
]

const temp = []

console.group('Konami Code')
code.forEach(key => {
    console.log(`%c ${key}`, 'color: green;')
})
console.groupEnd('Konami Code')

window.onkeydown = function(e) {
    temp.push(e.key)
    if (temp.length > code.length) {
        temp.splice(0,1)
    }
    console.clear()
    console.table({
        CurrentSequence: temp,
        KonamiCode: code
    })
    if (code.join('') == temp.join('')) {
        console.log('%cKonami Code Confirmed!', 'font-size: 24px; color: green;')
        console.groupEnd('Sequence')
        const p = document.createElement('P')
        p.innerHTML = 'Konami Code Confirmed! ✅'
        document.body.appendChild(p)
    }
}
