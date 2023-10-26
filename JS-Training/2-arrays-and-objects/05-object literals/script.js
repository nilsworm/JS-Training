let x 

const person = {
    names: 'Nils Worm',
    age: 30,
    isAdmin: true,
    address: 'Seilerweg 3',
    state: 'RU',
}

x = person.names
x = person['age']
x = person.address.state


person.names = 'John Dave'
person['isAdmin'] = false

person.greet = function () {
    console.log(`Hello my name is ${this.names}`)
}

person.greet();

x = person

console.log(x)