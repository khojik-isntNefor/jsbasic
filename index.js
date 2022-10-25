let int = +prompt('enter the numbers')

if (int % 2 === 0) {
    alert('четное')
} else {
    alert('нечетное')
}



let name = prompt('What is your name').toLowerCase().trim()
let age = prompt('How old are u?')

if (name[0] === 'a' && age >= 18) {
    alert(`We are glad to see you ${name} `)
} else {
    alert(`Sorry we dont know u ${name}`)
}