//Default Parameters

function registerUser(user = 'Bot') {
    return user + ' is registered'
}

console.log(registerUser())  //returns: Bot is registered

//Rest Parameters

function sum(...numbers) {
    let total = 0  // start point of the loop

     for (const num of numbers) {  // for each number of numbers we call it num 
        total += num
    }

    return total
}

console.log(sum(1, 2, 3, 4, 5))

// Objects as params

function loginUser(user) {
    return `The user with the name ${user.name} has the ID of ${user.id}`
}

const user = {   //Declare youser for id and name for the output
    id: 1,
    name: 'Nils',
}

console.log(loginUser(user))  // logs the id and name from the const after the function in the console
console.log(loginUser({        // you can create from the argument user in the functon an id and a name
    id: 2,
    name: 'Worm',
})
)

//Arrays as params

function getRandom(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    return Math.floor(Math.random() * arr.length)
}

console.log(getRandom())

//The way in the course

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length) //Create a variable that has the legnth of the array and the math.random in it

    const item = arr[randomIndex]  //create a new variable that uses the argument and the array in the randomIndex as the array

    console.log(item)
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])






