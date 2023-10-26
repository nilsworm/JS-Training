let x

const fruits = ['apples', 'pear', 'orange']
const berrries = ['strawberry', 'blueberry', 'rasberry']

// fruits.push(berrries)

// x = fruits[3][1]

const allFruits = [fruits, berrries]

x = allFruits[1][0]

x = fruits.concat(berrries)

// Spread operator (...)

x = [...fruits, ...berrries]

// Flatten arrays

const arr = [ 1, 2, [3, 4], 5, [6, 7], 8 ]

x = arr.flat()

// static methods on array Objects

x = Array.isArray(fruits)

x = Array.from('123456789')

const a = 1
const b = 2
const c = 3

x = Array.of(a, b, c)

console.log(x)