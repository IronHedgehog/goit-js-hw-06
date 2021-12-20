// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//  В результате при перетаскивании ползунка будет меняться размер текста.


const inputFZ = document.querySelector('#font-size-control')

const spanText = document.querySelector('#text')

inputFZ.addEventListener('input',onRangeScroll)

function onRangeScroll () {
    spanText.style.fontSize = inputFZ.value + "px";
}
spanText.style.fontSize = inputFZ.value + "px";