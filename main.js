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
//========================================================================//
const s = 'Hello World'
// console.log(s.substring(0, 1))


//========================================================================//
// Arrays - Variables that hold a multiply values

// const numbers = new Array(1,2,3,4,5)
const fruits = ['apples', 'oranges', 'bananas']
fruits.push('mangos');
// push() throw in item last in array

fruits.unshift('strawberry');
// unshift() throw item first in array

fruits.pop()
// pop() delete the last item
// console.log(Array.isArray(fruits))
// isArray() to check if array is true or false

// console.log(fruits.indexOf('oranges'))
// indexOf() to get the index of the item.
// console.log(fruits)

//========================================================================//
// Object literals = key values

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    //embedded object = object in antother object
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'

    }
}
// console.log(person.firstName, person.lastName)
// console.log(person.hobbies[1])
// console.log(person.address.city)
const  {firstName, lastName, address: {city}} = person
console.log(city)