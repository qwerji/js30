// ## Array Cardio Day 2
// bentswanson.com

// Answers are also in the console

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
]

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Pho is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
]

let question = 1

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const anyone19 = people.some(person => person.year <= (new Date()).getFullYear() - 19)
// true
console.log(question++ + '--------------------')
console.log({anyone19}) //Ooooh hotshot!

// Array.prototype.every() // is everyone 19 or older?
const everyone19 = people.every(person => person.year <= 1998)
// false
console.log(question++ + '--------------------')
console.log({everyone19})

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const found = comments.find(comment => comment.id === 823423)
// {text: "Super good", id: 823423}
console.log(question++ + '--------------------')
console.log(found)

// Array.prototype.findIndex()
// Find the comment with this ID
const foundIdx = comments.findIndex(comment => comment.id === 823423)
// 1
console.log(question++ + '--------------------')
console.log(foundIdx)

// delete the comment with the ID of 823423

// const removed = comments.splice(foundIdx, 1)
// { text: 'Super good', id: 823423 }

// Or..

const newComments = [
    ...comments.slice(0, foundIdx),
    ...comments.slice(foundIdx + 1)
]
// So fancy!

// { text: 'Love this!', id: 523423 },
// { text: 'You are the best', id: 2039842 },
// { text: 'Pho is my fav food ever', id: 123523 },
// { text: 'Nice Nice Nice!', id: 542328 }
console.log(question++ + '--------------------')
console.log(newComments)
