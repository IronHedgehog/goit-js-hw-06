// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// колько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur',onInputBlur)

function onInputBlur (event){

if(event.currentTarget.value.length === Number(inputEl.dataset.length)){
   return inputEl.classList.add("valid")
}

inputEl.classList.add("invalid")
}