const month = `${(new Date()).getMonth()}`
let season = 'fall'
switch (month) {
    case '12':
    case '1':
    case '2':
        season = 'winter'
        break
    case '3':
    case '4':
    case '5':
        season = 'spring'
        break
    case '6':
    case '7':
    case '8':
        season = 'summer'
        break
    case '9':
    case '10':
    case '11':
        season = 'fall'
        break
}

document.querySelector('main div.upper').style.background = 
document.body.style.background = `url(./images/${season}.jpg) no-repeat center center fixed`

document.querySelector('.random').addEventListener('click', e => {
    location.href = `http://js30.bentswanson.com/${randomInt(1, 30)}`
})

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
