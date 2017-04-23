const slideImages = [...document.getElementsByClassName('slide-in')]
let canCheck = true, timer

window.onscroll = function() {
    if (!canCheck) { return }
    canCheck = false
    timer = setTimeout(function() {
        canCheck = true
        clearTimeout(timer)
    }, 200)
    slideImages.forEach(img => {
        if (shouldSlide(img)) {
            img.classList.add('entered')
        } else {
            img.classList.remove('entered')
        }
    })
}

function shouldSlide(elt) {
    const inThresh = (window.scrollY + window.innerHeight) - elt.height / 2,
        outThresh = elt.offsetTop + elt.height;
    if ((inThresh > elt.offsetTop) && (window.scrollY < outThresh)) {
        return true
    }
    return false
}

window.onscroll()
