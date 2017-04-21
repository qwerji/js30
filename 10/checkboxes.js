// Get those sweet, sweet array methods
const checkboxes = [...document.querySelectorAll("input[type='checkbox']")]
let shifted = false, prevBox = null

function checkTheBoxes(e) {

    const curBox = e.srcElement

    // Shift key is down
    if (shifted && prevBox) {
        // Get indices of the last clicked box and the current one
        const curIdx = checkboxes.indexOf(curBox),
            prevIdx = checkboxes.indexOf(prevBox)

        // Set the inbetweens to checked
        if (curIdx >= prevIdx) {
            for (let i = prevIdx; i < curIdx+1; i++) {
                checkboxes[i].checked = true
            }
        } else {
            for (let i = curIdx; i < prevIdx+1; i++) {
                checkboxes[i].checked = true
            }
        }
    }

    // Sets up for the next box click
    prevBox = curBox
}

// Add event listeners
checkboxes.forEach(checkbox => {
    checkbox.onclick = checkTheBoxes
})

document.addEventListener('keydown', e => { 
    if (e.key === "Shift") {
        shifted = true
    }
})

document.addEventListener('keyup', e => {
    if (e.key === "Shift") {
        shifted = false
    }
})
