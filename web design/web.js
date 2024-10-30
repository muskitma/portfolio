const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active")
});
loginBtn.addEventListener('click', () =>{
    container.classList.remove("active")
});
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');
    const passwordInputs = document.querySelectorAll('input[type="password"]');

    function checkPasswordLength(event) {
        const password = event.target.value;
        const errorMessage = event.target.nextElementSibling;

        if (password.length === 0) {
            // Clear the message if the field is empty
            errorMessage.textContent = "";
            event.target.classList.remove('error');
        } else if (password.length < 8) {
            // Show error message if password is too short
            errorMessage.textContent = "Password must be at least 8 characters long";
            errorMessage.style.color = "red";
            event.target.classList.add('error');
        } else {
            // Show success message if password is valid
            errorMessage.textContent = "Password is OK";
            errorMessage.style.color = "green";
            event.target.classList.remove('error');
        }
    }

    passwordInputs.forEach(input => {
        input.addEventListener('input', checkPasswordLength);
    });

    function validateForm(event) {
        const password = event.target.querySelector('input[type="password"]').value;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
        }
    }

    signUpForm.addEventListener('submit', validateForm);
    signInForm.addEventListener('submit', validateForm);
});


