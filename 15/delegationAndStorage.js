// Select Elements
const list = document.querySelector('.todo'),
    form = document.querySelector('.add-item'),
    clearButton = document.querySelector('.clear'),
    checkAllButton = document.querySelector('.check-all'),
    uncheckAllButton = document.querySelector('.uncheck-all')
// Access local storage if possible
let items = JSON.parse(localStorage.getItem('items')) || []

form.addEventListener('submit', function(e) {
    // Prevent page reload
    e.preventDefault()
    // Get the input's value
    const name = this.querySelector('[name="item"]').value
    // Create a new item
    const newItem = {
        name,
        done: false
    }
    // Add the new item
    items.push(newItem)
    // Clear the form
    this.reset()
    // Update the UI
    updateList()
    // Save into local storage
    save()
})

// Delegate click event to the list elt
list.addEventListener('click', e => {
    if (!e.target.matches('input')) return
    items[e.target.dataset.index].done = e.target.checked
    save()
})

clearButton.addEventListener('click', e => {
    items = []
    updateList()
    save()
})

checkAllButton.addEventListener('click', all)
uncheckAllButton.addEventListener('click', all)

function all(e) {
    const checked = e.target.dataset.action ? true : false
    items.forEach(item => {
        item.done = checked
    })
    updateList()
    save()
}

function updateList() {
    // Add all the items to the list element
    list.innerHTML = items.map((item, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
                <label for="item${i}">${item.name}</label>
            </li>
        `
    }).join('')
}

function save() {
    localStorage.setItem('items', JSON.stringify(items))
}

updateList()

