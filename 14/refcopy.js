// Reference vs Copy

// Passing by copy or value
let myAge = 20
let yourAge = myAge
myAge = 23
console.log(myAge, yourAge) // 23 20
// yourAge is unaffected

// Passing by reference
const players = ['Jeff', 'Linda', 'Bharathi', 'Mandu']
const team = players
team[3] = 'Gary'
console.log(players) // ['Jeff', 'Linda', 'Bharathi', 'Gary']
console.log(team)    // ['Jeff', 'Linda', 'Bharathi', 'Gary']
console.log(players === team) // true
// Both variables point to the same array

// A way to create a copy of an array:
const playersCopy = players.slice()
console.log(playersCopy) // ['Jeff', 'Linda', 'Bharathi', 'Gary']
playersCopy[0] = 'Odie'
console.log(playersCopy) // ['Odie', 'Linda', 'Bharathi', 'Gary']
console.log(players)     // ['Jeff', 'Linda', 'Bharathi', 'Gary']

// Another way:
const playersCopy2 = [].concat(players)

// And another:
const playersCopy3 = [...players]

// And one more:
const playersCopy4 = Array.from(players)

// With objects...

const human = {
    name: 'Hayao',
    age: 77
}
const person = human
person.age = 76
console.log(human) // ...age: 76
// Passed by reference

// A way to make a copy:
const man = Object.assign({}, human/* Object to copy */, { age: 100 }/* Attributes to overwrite */)
console.log(man) // Copy
console.log(human) // Unaffected

// However wih objects, Object.assign only goes one level deep:
human.attributes = {
    hair: 'white',
    glasses: false
}
console.log(human) // {name: "Hayao", age: 76, attributes: {...}}

const humanCopy = Object.assign({}, human)
humanCopy.attributes.glasses = true
console.log(human) // { ... attributes: { ... glasses: true } } 😮
// human's attributes were changed as well!

// A way to copy: (poorman's deepClone)
const humanCopy2 = JSON.parse(JSON.stringify(human))
humanCopy2.attributes.glasses = false
console.log(human) // { ... attributes: { ... glasses: true } }
