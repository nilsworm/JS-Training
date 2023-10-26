(function () {
    const user = 'Worm'
    console.log(user)
    const hello = () => console.log('Hello from IIFE')
    hello()
})()

(function (name) {
    console.log('Hello' + name)
})('Nils')

(function hello() {
    console.log('Hello')
})