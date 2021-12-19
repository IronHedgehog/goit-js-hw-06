// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
//   <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

const formEl = document.querySelector('.login-form')
const emailEl = document.querySelector('[type="email"]')
const passwordEl = document.querySelector('[type="password"]')
const buttonEl = document.querySelector('[type="submit"]')


formEl.addEventListener('submit',onSubmit,)

// function onSubmit (event){
//     event.preventDefault();
    
//     if(emailEl.value === '' || passwordEl.value === ''){
//         return alert('все поля должны быть заполнены!')
//     }
//     const formData = new FormData(event.currentTarget)
//     console.log(formData)
//     formData.forEach((emailEl,passwordEl) => {
//       console.log(emailEl)
//       console.log(passwordEl)
//     })
//     event.currentTarget.reset();
// }

function onSubmit (event){
    event.preventDefault();
    const {
elements: { email, password }
  } = event.currentTarget;
    if(email.value === '' || password.value === ''){
        return alert('все поля должны быть заполнены!')
    }
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    formData.forEach((email,password) => {
      console.log(email)
      console.log(password)
    })
    event.currentTarget.reset();
}