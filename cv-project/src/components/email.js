import React from 'react';
// import './index.css';

export class Email extends React.Component {
    render() {
        function changeEmail(){
            const emailSpan = document.getElementById('emailSpan');

            const emailInput = document.createElement('input');
            emailInput.id = 'emailInput'
            emailInput.setAttribute('style', 'width:200px; margin-left:10px');

            emailInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter' && emailInput.value !== '') {
                    document.getElementById('emailSpan').textContent = `✉: ${emailInput.value}`;
                    emailInput.remove();
                }
            })

            if (!document.getElementById('emailInput')){
                emailSpan.appendChild(emailInput)
            }
        }
        
        return (
                <div id='email'>
                    <span style={{fontSize:'18px', marginRight:'2px'}} id='emailSpan'>Email Adress</span>
                    <span style={{fontSize:'12px', textDecoration:'underline',cursor:'pointer'}} onClick={changeEmail}>Edit</span>
                </div>
        )
    }
}
