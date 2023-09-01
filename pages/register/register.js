const email = document.getElementById("email");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const passwordContainer = document.getElementById("parameterPassword");
const emailContainer = document.getElementById("parameterEmail");
const confirmContainer = document.getElementById("parameterConfirmPassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
function validate(event){
    let emailValidation = false;
    let passwordValidation = false; 
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    event.preventDefault();
    if (!regEx.test(email.value)) {
        emailValidation = false;
        changeStyles(emailContainer, emailError, "block", "1px solid red")
        // email.style.border = "1px solid red";
        // emailError.style.display = "block"
    }else{
        emailValidation = true;
        changeStyles(emailContainer, emailError, "none", "none")
        // email.style.border = "none";
        // emailError.style.display = "none";
    }
    if (password.value.length <8) {
        passwordValidation = false;
        changeStyles(passwordContainer, passwordError,  "block", "1px solid red")
        // password.style.border = "1px solid red";
        // passwordError.style.display = "block"
    }else {
        passwordValidation = true;
        changeStyles(passwordContainer, passwordError, "none", "none")
        // password.style.border = "none";
        // passwordError.style.display = "none";
    }
    if (password.value !== confirmPassword.value){
        changeStyles(confirmContainer, confirmPasswordError,  "block", "1px solid red")
        // confirmPassword.style.border = "1px solid red";
        // confirmPasswordError.style.display = "block"
    }else{
        changeStyles(confirmContainer, confirmPasswordError, "none", "none")
        // confirmPassword.style.border = "none";
        // confirmPasswordError.style.display = "none";
    }
    if (emailValidation && passwordValidation && password.value === confirmPassword.value) {
        window.location.assign("../../index.html")
    }
    console.log(password, confirmPassword)
}
function changeStyles(input, error, displayStyle, borderStyle){
    input.style.border = borderStyle
    error.style.display = displayStyle
}
console.log(email);
console.log(password);