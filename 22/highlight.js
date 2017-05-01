const ul = document.querySelector('nav'),
    lis = [...ul.children],
    selector = document.createElement('div')

selector.classList.add('selector')

document.body.appendChild(selector)

lis.forEach(li => {
    li.onmouseover = moveSelector
})

function moveSelector(e) {
    const element = e.target
    if (element.nodeName === 'A') {
        selector.style.opacity = 1
        selector.style.left = element.offsetLeft + 'px'
        selector.style.top = element.offsetTop + 'px'
        selector.style.width = element.offsetWidth + 'px'
        selector.style.height = element.offsetHeight + 'px'
    }
}

window.addEventListener('resize', e => {
    selector.style.opacity = 0
})
