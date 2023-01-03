export default function editEmail () {

    const emailInput = document.createElement('input');
    emailInput.id = 'emailInput';
    emailInput.setAttribute('style', 'width:200px; margin-left:10px');

    const emailSpan = document.getElementById('emailAddress');

    const validator = require("email-validator");


    emailInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && validator.validate(emailInput.value)) {
            emailSpan.textContent = `Email: ${emailInput.value}`;
            emailInput.remove();
        } else {
            emailInput.placeholder = 'Enter a valid email';
        }
    })

    if (!document.getElementById('emailInput')) {
        emailSpan.appendChild(emailInput);
    }
}