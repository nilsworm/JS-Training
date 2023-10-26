// Arrow Syntax 

const add = (a, b) => {
    return a + b
}

// Implicit return
const substract = (a, b) => a - b

// () can leave off
const double = a => a * 2

const createObj = () => ({
    name: 'Brad'
})

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (n) {
    console.log(n)
})

//in an arrow function

numbers.forEach(n => console.log(n))