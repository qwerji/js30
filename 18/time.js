// Total time from array of strings
// bentswanson.com

const times = ['1:28', '11:35', '2:01', '0:30', '2:00', '3:59', '0:07', '7:24']

const total = times.reduce((acc, time, idx, arr) => {
    // Get the mins and secs in Integer form
    const [mins, secs] = time.split(':').map(parseFloat)
    // Add them to the accumulator
    acc.mins += mins
    acc.secs += secs
    // Get the seconds' remainder
    while (acc.secs !== acc.secs % 60) {
        acc.secs -= 60
        acc.mins++
    }
    // Formats the return (Not totally necessary, but practical)
    if (idx >= arr.length - 1) {
        if (acc.secs < 10) {
            acc.secs = '0' + acc.secs
        }
        return `${acc.mins}:${acc.secs}`
    }
    return acc
},{ mins: 0, secs: 0 })
console.log(total)
