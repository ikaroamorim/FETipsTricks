const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username não pode estar em branco!');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'E-mail não pode estar em branco!');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'O valor fornecido não é e-mail');
    }else{
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Senha não pode estar em branco!');
    } else if(passwordValue.length < 7){
        setErrorFor(password, 'Senha é muito curta')
    }else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, 'É necessário confirmar a senha')
    } else if( passwordValue !== passwordConfirmationValue){
        setErrorFor(passwordConfirmation, 'As senhas não coincidem')
    }else {
        setSuccessFor(passwordConfirmation);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}