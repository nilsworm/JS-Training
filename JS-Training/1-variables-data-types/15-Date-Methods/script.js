let x
let d = new Date()

x = d.toString()

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()

x = d.getMonth() + 1

x = d.getDate()

x = d.getDay()

x = d.getHours()

x = d.getMinutes()

x = d.getSeconds()

x = d.getMilliseconds()

x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`

x = Intl.DateTimeFormat('de-DE').format(d)

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d)

x = d.toLocaleDateString('default', {month: 'short'})

console.log(x)