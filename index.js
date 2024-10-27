const passWordInput = document.querySelector('#input-password')

//iconos
const showPassword = document.querySelector('#show-password')
const hidePassword = document.querySelector('#hide-password')

//boton
const btnStatePassword = document.querySelector('.btn-hide-show')

btnStatePassword.addEventListener('click', () => {

    if(passWordInput.type === 'password' ){
        passWordInput.type = 'text'
        hidePassword.style.display = 'block'
        showPassword.style.display = 'none'
    }else{
        passWordInput.type = 'password'
        hidePassword.style.display = 'none'
        showPassword.style.display = 'block'
    }
})