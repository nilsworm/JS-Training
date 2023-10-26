const firstName = 'John'
const lastName = 'Bradley'
const age = 30

const person = { 
    firstName,
    lastName,
    age,
}
// man kann die Variablen zu den Parametern anfügen firstName: firstName

console.log(person.age)


// Destructuring

const todo = {
    id: 1
    title: 'Take out trash'
}

const {id} = todo // das logt die id von der Variable todo in die Konsole: Output: 1

console.log(id, title)

const todoU = {
    id: 1
    title: 'Take out trash'
    user: {
        name: 'John'
    } 
}

const { id, title, user {name}} = todo  

console.log(user)

const{
    id: 1    // oder id: todoId logt 1
    title: 'Take out trash'
    user: {
        name: 'John'
    } 
} = todo

// Destructuring arrays

const numbers = [ 23, 67, 33, 49]

const [first, second, ...rest] = numbers

console.log(first, second, rest)  // rest logt die andern beiden Zahlen in diekonsole
