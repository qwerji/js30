const container = document.querySelector('.shadow-container'),
    title = container.querySelector('h1'),
    off = 150

container.addEventListener('mousemove', function(e) {
    const width = container.offsetWidth, height = container.offsetHeight
    let x = e.offsetX, y = e.offsetY

    // If the hovered element is not the container,
    // add the offset of that element as well
    if (this !== e.target) {
        x += e.target.offsetLeft
        y += e.target.offsetTop
    }

    // The difference between the mouse's (x,y) and the element's (x,y) 
    // is scaled, inverted accordingly, and applied to the offset of the text shadow.
    const xOff = (x / width * off) - (off / 2)
    const yOff = (y / height * off) - (off / 2)
    
    title.style.textShadow = `
        ${xOff*-1}px ${yOff*-1}px 0px rgba(255,0,255,0.6),
        ${xOff}px ${yOff}px 0px rgba(0,255,0,0.6),
        ${xOff}px ${yOff*-1}px 0px rgba(0,0,255,0.6),
        ${xOff*-1}px ${yOff}px 0px rgba(255,255,0,0.6)
    `
})
