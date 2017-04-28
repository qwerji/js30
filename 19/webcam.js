const video = document.createElement('video'),
    canvas = document.querySelector('canvas'),
    photoRoll = document.querySelector('.photos'),
    ctx = canvas.getContext('2d'),
    snapLabel = document.querySelector('.snap')
let effect = 'none'//, alpha = 1

document.querySelector('.effects').onchange = function() {
    effect = this.value
}

// document.querySelector('.alpha').onchange = function() {
//     alpha = parseFloat(this.value)
// }

function getVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(localMediaStream => {
        video.src = URL.createObjectURL(localMediaStream)
        video.play()
        requestAnimationFrame(draw)
    }).catch(e => { console.error(e.name); alert('Video access denied. ☹') })
}

function draw() {
    requestAnimationFrame(draw)
    const width = video.videoWidth,
        height = video.videoHeight
    canvas.width = width
    canvas.height = height
    ctx.drawImage(video, 0, 0, width, height)
    let pixels
    if (width !== 0 && height !== 0) {
        pixels = effects[effect](ctx.getImageData(0,0,width,height))
    }
    //ctx.globalAlpha = alpha // Not working?
    if (pixels) {
        ctx.putImageData(pixels, 0, 0)
    }
}

const effects = {
    red: pixels => {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i] = pixels.data[i] + 100      //R
            pixels.data[i + 1] = pixels.data[i + 1]   //G
            pixels.data[i + 2] = pixels.data[i + 2]  //B
            pixels.data[i + 3] = pixels.data[i + 3] //A
        }
        return pixels
    },
    green: pixels => {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i] = pixels.data[i]                //R
            pixels.data[i + 1] = pixels.data[i + 1] + 100 //G
            pixels.data[i + 2] = pixels.data[i + 2]      //B
            pixels.data[i + 3] = pixels.data[i + 3]     //A
        }
        return pixels
    },
    blue: pixels => {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i] = pixels.data[i]                 //R
            pixels.data[i + 1] = pixels.data[i + 1]        //G
            pixels.data[i + 2] = pixels.data[i + 2] + 100 //B
            pixels.data[i + 3] = pixels.data[i + 3]      //A
        }
        return pixels
    },
    rgbSplit: pixels => {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i - 150] = pixels.data[i]        //R
            pixels.data[i + 152] = pixels.data[i + 1]   //G
            pixels.data[i - 550] = pixels.data[i + 2]  //B
        }
        return pixels
    },
    none: pixels => pixels
}

canvas.onclick = () => {
    const data = canvas.toDataURL('image/jpeg'),
        link = document.createElement('a')

    link.href = data
    link.setAttribute('download', 'snap')
    link.innerHTML = `<img src="${data}">`
    photoRoll.insertBefore(link, photoRoll.firstChild)
}

function showLabel(e) {
    snapLabel.style.display = 'inline-block'
}
canvas.onmouseover = showLabel

function hideLabel(e) {
    snapLabel.style.display = 'none'
}
canvas.onmouseout = hideLabel

function moveLabel(e) {
    snapLabel.style.top = `${e.clientY + 15}px`
    snapLabel.style.left = `${e.clientX + 15}px`
}
canvas.onmousemove = moveLabel

getVideo()
