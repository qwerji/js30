const unsortedListElt = document.querySelector('ul.unsorted'),
    sortedListElt = document.querySelector('ul.sorted'),
    children = [...unsortedListElt.children],
    articles = ['the', 'a', 'an']

children.sort((a, b) => {
    return sanitize(a.innerHTML) > sanitize(b.innerHTML) ? 1 : -1
})

children.forEach(li => {
    const newLi = document.createElement('li')
    newLi.innerHTML = li.innerHTML
    sortedListElt.appendChild(newLi)
})

function sanitize(text) {
    text = text.toLowerCase()
    if (articles.includes(text)) {
        return text
    }
    let newText = '',
        articleExists = false
    for (let i = 0; i < text.length; i++) {
        newText += text[i]
        if (!articleExists) {
            if (articles.includes(newText)) {
                articleExists = true
                newText = ''
                i += 1
            }
        }
    }
    return newText
}
