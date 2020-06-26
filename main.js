// let, const                 

// Use let if reassign value
let ageL = 30
ageL = 31
console.log()

// Use const if value wont change
const ageC = 20
console.log()

// String, Numbers, Boolean, null, undefined
const name = 'John Doe'
const age = 21
const rating = 4.5
const isCool = true
const x = null
const y = undefined
let z;


// Concatenation old way
// console.log('My name is ' + name + ' and I am ' + age +' years' )

// Template String new way 
const hello = `My name is ${name} and I am ${age} years`
// console.log()

const s = 'Hello World'
// console.log(s.substring(0, 1))

// Arrays - Variables that hold a multiply values

// const numbers = new Array(1,2,3,4,5)
const fruits = ['apples', 'oranges', 'bananas']
fruits.push('mangos');
// push() throw in item last in array

fruits.unshift('strawberry');
// unshift() throw item first in array

console.log(fruits)