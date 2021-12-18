
const decrement = document.querySelector('[data-action = "decrement"]')
console.log(decrement)
const increment = document.querySelector('[data-action = "increment"]')
console.log(increment)
const idSpam = document.querySelector('#value')
console.log(idSpam)

let value = 0;

value = Number(idSpam.textContent);

increment.addEventListener('click', () => {
    idSpam.innerHTML = value += 1; 
})

decrement.addEventListener('click', () => {
    idSpam.innerHTML = value -= 1; 
})
