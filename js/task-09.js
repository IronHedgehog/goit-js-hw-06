function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, 
// который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.

const body = document.querySelector('body')
console.log(body)
const button = document.querySelector('.change-color')
console.log(button)
const buttonText = document.querySelector('.color')
console.log(buttonText)

button.addEventListener('click', onButtonClick)

function onButtonClick(event) {
body.style.backgroundColor = getRandomHexColor()
// button.textContent = body.style.backgroundColor
buttonText.textContent = body.style.backgroundColor
}

// const spanText = document.querySelector('#text')

// inputFZ.addEventListener('input',onRangeScroll)

// function onRangeScroll () {
//     spanText.style.fontSize = inputFZ.value + "px";
// }