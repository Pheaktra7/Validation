const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

username.addEventListener('keyup',function(){
    const usernameValue  = username.value.trim();
    if(usernameValue === ""){
        setErrorFor(username,"Username cannot be blank");
    }
    else {
        setSuccessFor(username);
    }
});


email.addEventListener('keyup',function(){
    const emailValue = email.value.trim();
    if(emailValue === ""){
        setErrorFor(email,"email cannot be blank");
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,"email not a valid ");
    }
    else {
        setSuccessFor(email);
    }
});


password.addEventListener('keyup',function(){
    const passwordValue = password.value.trim();
    if(passwordValue === ""){
        setErrorFor(password,"Password cannot be blank");
    }
    else if(passwordValue.length < 8){
        setErrorFor(password,"Password cannot small than 8 character");
    }
    else {
        setSuccessFor(password);
    }

});


confirmPassword.addEventListener('keyup',function(){
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(confirmPasswordValue === ""){
        setErrorFor(confirmPassword,"Confirm Password cannot be blank");
    }
    else if(passwordValue !== confirmPasswordValue){
        setErrorFor(confirmPassword,"Confirm Password should be like Password");
    }
    else {
        setSuccessFor(confirmPassword);
    }
});

function checkInput() {

    const usernameValue  = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // check condition for username

    if(usernameValue === ""){
        setErrorFor(username,"Username cannot be blank");
    }
    else {
        setSuccessFor(username);
    }

    // check condition for email

    if(emailValue === ""){
        setErrorFor(email,"email cannot be blank");
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,"email not a valid ");
    }
    else {
        setSuccessFor(email);
    }

    //check condition for password

    if(passwordValue === ""){
        setErrorFor(password,"Password cannot be blank");
    }
    else if(passwordValue.length < 8){
        setErrorFor(password,"Password cannot small than 8 character");
    }
    else {
        setSuccessFor(password);
    }

    //check condition for confirm password 

    if(confirmPasswordValue === ""){
        setErrorFor(confirmPassword,"Confirm Password cannot be blank");
    }
    else if(passwordValue !== confirmPasswordValue){
        setErrorFor(confirmPassword,"Confirm Password should be like Password");
    }
    else {
        setSuccessFor(confirmPassword);
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