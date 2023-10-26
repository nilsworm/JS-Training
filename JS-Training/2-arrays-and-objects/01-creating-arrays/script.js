let x

// Array literal
const numbers = [12, 45, 33, 39]

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange')

x = numbers[0]

x = numbers[0] + numbers[3]

x = `My favourite fruit is ${fruits[2]}`

console.log(x)



// Methods

let y

const arr = [34, 56, 3, 875]

//arr.push(100)

// arr.pop()

// arr.unshift(99)

// arr.shift()

// arr.reverse()

y = arr.includes(26)

y = arr.indexOf(15)

y = arr.slice(1, 3)

// y = arr.splice(1, 3)

// y = arr.splice(3, 1)

x = arr.splice(1, 3).reverse().toString().charAt(0)

console.log(y, arr)