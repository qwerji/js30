// Create a canvas
const canvas = document.createElement('CANVAS')
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Get the canvas' rendering context
const ctx = canvas.getContext('2d')

// Set the paintbrush style
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.globalCompositeOperation = 'xor'

// Background
ctx.fillStyle = '#535353'
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Variables
const prev = {
    x: canvas.width/2, y: canvas.height/2,
    hue: 0,
    size: 1,
    direction: true
}

// On drag...
function draw(e) {

    // Set color
    ctx.strokeStyle = `hsl(${prev.hue++},100%,50%)`

    // Brush size undulation
    if (prev.direction) {
        ctx.lineWidth = prev.size += 0.2
    } else {
        ctx.lineWidth = prev.size -= 0.2
    }
    if (prev.size >= 100 || prev.size <= 1) {
        prev.direction = !prev.direction
    }

    // Draw
    if (e.buttons > 0) { // Not sure if this is viable, but it seems to work!
        ctx.beginPath()
        ctx.moveTo(prev.x, prev.y)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
    }

    // Store current position
    prev.y = e.offsetY
    prev.x = e.offsetX
}

canvas.addEventListener('mousedown', draw)
canvas.addEventListener('mousemove', draw)

document.getElementById('glo').onchange = function() {
    ctx.globalCompositeOperation = this.value
}
