// Cool Dev Tools!
// bentswanson.com

let question = 1

// 1 - Breakpoints
// In the console, right click an HTML Elt.
// > Break on...

// 2 - Interpolated console.log
console.log(question++ + '--------------------')
const name = 'Ben'
console.log('Hello my name is %s!', name)
// Or
console.log(`Hello my name is ${name}!`)

// 3 - Styled console.log
console.log(question++ + '--------------------')
console.log('%c 🐌', 'font-size: 50px; text-shadow: 1px 1px green;')

// 4 - Warning
console.log(question++ + '--------------------')
console.warn('%c 💩', 'font-size: 50px;')

// 5 - Error
console.log(question++ + '--------------------')
console.error('%c 🔥', 'font-size: 50px;')

// 6 - Info
console.log(question++ + '--------------------')
console.info('This is informative.') // Not working for me...

// 6 - Assert
console.log(question++ + '--------------------')
const bool = false
console.assert(bool,'Incorrect!')
console.assert(!bool,'Incorrect Again?')

// 7 - Clear
question++
// console.clear()
// Console was cleared

// 8 - Dir
console.log(question++ + '--------------------')
const pre = document.getElementsByTagName('pre')[0]
console.log(pre) // 👎
console.dir(pre) // 👍

// 9 - Group
console.log(question++ + '--------------------')
const beings = [{name:'Odie',race:'Puppy'},{name:'Frothgar',race:'Barbarian'}]
beings.forEach(being => {
    if (being.name === 'Frothgar') {
        console.groupCollapsed(being.name)
    } else {
        console.group(being.name)
    }
    console.log(`Meet ${being.name}`)
    console.log(`${being.name} is a ${being.race}`)
    console.groupEnd()
})

// 10 - Count
console.log(question++ + '--------------------')
console.count('Hey hey')
console.count('Hey hey')
console.count('Hey hey hey')
console.count('Hey hey')
console.count('Hey hey')
console.count('Hey hey')
console.count('Hey hey')
console.count('Hey hey hey')

// 11 - Time
console.log(question++ + '--------------------')
console.log('Fetching: "https://api.github.com/users/qwerji"')
console.time('Fetched in')
fetch('https://api.github.com/users/qwerji')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('Fetched in')
        console.log(data)

        // 12 - Table
        console.log(question++ + '--------------------')
        console.table(beings)
        
    })

