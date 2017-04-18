function Clock() {
    
    this.getTime = () => {
        const fullDate = new Date()
        const date = {
            seconds: fullDate.getSeconds()+1,
            minutes: fullDate.getMinutes()+1,
            hours: fullDate.getHours()+1
        }
        return date
    }

    this.secondHand = (() => {
        const secondHand = document.createElement('div')
        secondHand.classList.add('second')
        return secondHand
    })()

    this.minuteHand = (() => {
        const minuteHand = document.createElement('div')
        minuteHand.classList.add('minute')
        return minuteHand
    })()

    this.hourHand = (() => {
        const hourHand = document.createElement('div')
        hourHand.classList.add('hour')
        return hourHand
    })()

    this.face = (() => {
        const face = document.createElement('div')
        face.classList.add('face')
        document.body.appendChild(face)
        face.appendChild(this.minuteHand)
        face.appendChild(this.hourHand)
        face.appendChild(this.secondHand)
        return face
    })()

    this.tick = () => {
        const time = this.getTime()
        this.secondHand.style.transform = `rotate(${time.seconds/60*360}deg)`
        this.minuteHand.style.transform = `rotate(${time.minutes/60*360}deg)`
        this.hourHand.style.transform = `rotate(${time.hours/12*360}deg)`
    }
    this.tick()

    setInterval(this.tick, 1000)

}

const clock = new Clock()
console.log(clock)
