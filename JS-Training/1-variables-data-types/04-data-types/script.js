// string
const firstName ='Sara'

// number
const age = 30
const temp = 98,8

//boolean
const hasKids = true

//Null

const aptNumber = null

//undefined
let score;

//Symbol
const id = Symbol('id')

//BigInt

const n = 3098479438759084375904537n;

//Reference Types
const number = [1, 2, 3, 4, 5];

const person = {
    name: 'Nils'
}

function sayHello() {
    console.log('Hello')
}



const output = age

console.log(firstName, typeof firstName) 


//Values are stored on the stack
const name ='John'
const age = 30

//Reference values are stored on the heap
const person ={
    name = 'Brad'
    age = 40
}

let newName = name
newName = 'Jonathan'

let newPerson = person
newPerson.name = 'Bradley'

console.log(name, newName)
console.log(peson, newPerson)
