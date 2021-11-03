const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = documnet.getElementById('password2');

form.addEventListener(submit, (e) => {
    e.preventdefault();
    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(usernameValue, 'Username cannot be blank')
    } else {
        setSuccessFor(usernameValue);
    }
   
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

     // add error message inside small tag
     small.inner = message;

     formControl.className = 'form-control error';
}

function setSuccessFor(input) {

}