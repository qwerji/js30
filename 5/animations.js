const gallery = document.getElementsByClassName('gallery')[0]

function clickColumn(e) {
    if (e.srcElement.tagName === 'P') {
        for (let i = 0; i < gallery.children.length; i++) {
            if (gallery.children[i] !== e.srcElement.parentElement) {
                gallery.children[i].classList.remove('selected')
            }
        }
        e.srcElement.parentElement.classList.toggle('selected')
    } else {
        for (let i = 0; i < gallery.children.length; i++) {
            if (gallery.children[i] !== e.srcElement) {
                gallery.children[i].classList.remove('selected')
            }
        }
        e.srcElement.classList.toggle('selected')
    }
    console.log(e.srcElement.parentElement)
}

for (let i = 0; i < gallery.children.length; i++) {
    const column = gallery.children[i]
    column.onclick = clickColumn
}
