window.addEventListener('mousemove', mousemove)

function mousemove(e) {
    const x = e.clientX, 
        y = e.clientY, 
        width = window.innerWidth, 
        height = window.innerHeight;
        
    document.documentElement.style.setProperty('--bar', `hue-rotate(${y/height*360}deg)`)
    document.documentElement.style.setProperty('--foo', `hue-rotate(${x/width*360}deg)`)
}
