let masterList, tempList
const searchbar = document.getElementsByClassName('searchlistbar')[0],
    listElt = document.getElementsByClassName('searchlistlist')[0]

function getData(cb) {
    const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            cb(JSON.parse(xhr.responseText))
        }
    }
    xhr.open("GET", url, true)
    xhr.send()
}

getData(data => {
    masterList = data
    for (let i = 0; i < masterList.length; i++) {
        listElt.appendChild(newListItem(masterList[i]))
    }
})

function filter(e) {
    const term = e.srcElement.value.toLowerCase()
    clearChildren(listElt)
    for (let i = 0; i < masterList.length; i++) {
        const item = masterList[i]
        if (item.city.toLowerCase().includes(term) ||
            item.state.toLowerCase().includes(term)) {
            const newItem = newListItem(item, term)
            listElt.appendChild(newItem)
        }
    }
}
searchbar.onkeyup = filter

function clearChildren(node) {
    while (node.hasChildNodes()) node.removeChild(node.lastChild)
}

function newListItem(item, term) {
    const li = document.createElement('LI'),
        leftLabel = document.createElement('P'),
        rightLabel = document.createElement('P');
    rightLabel.innerHTML = 'pop: ' + Number(item.population).toLocaleString()
    leftLabel.innerHTML = `${item.city}, ${item.state}`
    if (term) {
        const idx = leftLabel.innerHTML.toLowerCase().indexOf(term)
        if (idx !== -1) {
            const first = leftLabel.innerHTML.slice(0, idx),
                middle = leftLabel.innerHTML.slice(idx, idx + term.length),
                last = leftLabel.innerHTML.slice(idx + term.length, leftLabel.innerHTML.length)
            leftLabel.innerHTML = first + '<span>' + middle + '</span>' + last
        }
    }
    li.appendChild(leftLabel)
    li.appendChild(rightLabel)
    return li
}
