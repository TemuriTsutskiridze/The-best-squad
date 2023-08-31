
const email = document.getElementById("email")
const password = document.getElementById("password")

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
function validate(event){
    let emailValidation = false;
    let passwordValidation = false;
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    event.preventDefault();
    if (!regEx.test(email.value)) {
        emailValidation = false;
        changeStyles(email, emailError, "block", "1px solid red")
        // email.style.border = "1px solid red";
        // emailError.style.display = "block"
        console.log("yo")
    }else{
        emailValidation = true;
        changeStyles(email, emailError, "none", "none")
        // email.style.border = "none";
        // emailError.style.display = "none";
    }
    if (password.value.length <8) {
        passwordValidation = false;
        changeStyles(password, passwordError,  "block", "1px solid red")
        // password.style.border = "1px solid red";
        // passwordError.style.display = "block"
        console.log("yaw");
    }else{
        passwordValidation = true;
        changeStyles(password, passwordError, "none", "none")
        // password.style.border = "none";
        // passwordError.style.display = "none";
    }
    if (emailValidation && passwordValidation) {
        window.location.assign("link-sharing.html")
    }
}
function changeStyles(input, error, displayStyle, borderStyle){
    input.style.border = borderStyle
    error.style.display = displayStyle
}
console.log(email);
console.log(password);