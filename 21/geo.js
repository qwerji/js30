const speedometer = document.querySelector('.speed'),
    compass = document.querySelector('.compass')

let rot = 0

navigator.geolocation.watchPosition(data => {
    speedometer.textContent = `${toMPH(data.coords.speed)}mph`
    rotate(compass, data.coords.heading-45)
})

function toMPH(kmph) {
    return parseInt(kmph*1.609344)
}

function rotate(element, nR) {
    let aR;
    rot = rot || 0
    aR = rot % 360
    if ( aR < 0 ) aR += 360
    if ( aR < 180 && (nR > (aR + 180)) ) rot -= 360
    if ( aR >= 180 && (nR <= (aR - 180)) ) rot += 360
    rot += (nR - aR)
    element.style.transform = ("rotate( " + rot + "deg )")
}

document.querySelector('.compassStyle').onchange = function(e) {
    compass.src = this.value
}
