const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

function checkInput() {

    const usernameValue  = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(usernameValue === ""){
        setErrorFor(username,"Username cannot be blank");
    }
    else {
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email,"email cannot be blank");
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,"email not a valid ");
    }
    else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    small.innerHTML = message;
}

function setSuccessFor(input){
    const formGroup = input.parentElement;
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}

function isEmail(email){
    // regular expression
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}