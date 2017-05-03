// Event Capture, Propagation, Bubbling and Once
// bentswanson.com

const divs = document.querySelectorAll('div'),
    capture = document.querySelector('input[name="capture"]'),
    stopPropagation = document.querySelector('input[name="stop-propagation"]'),
    once = document.querySelector('input[name="once"]')

function logElement(e) {
    console.log(this)
    if (stopPropagation.checked) {
        e.stopPropagation() // Stops bubbling, doesn't remove listener
    }
}

function addEventListeners() {
    divs.forEach(div => div.addEventListener('click', logElement, {
        capture: capture.checked, // Triggers while bubbling down
        once: once.checked        // Runs once, then removes the listener
    }))
}

// Open the console, click addEventListeners(), and try clicking on each div
// Not only does it log the clicked element,
// but it logs it's parent elements as well!
// These events bubble up all the way to the body and the HTML tag

// Change the options around, and then click addEventListeners() to apply.
// You may have to refresh the page to reset
