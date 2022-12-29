import React from 'react';
// import './index.css';

export class Name extends React.Component {
    render() {

        function changeName(){
            const firstName = document.getElementById('firstName');

            const firstNameInput = document.createElement('input');
            firstNameInput.id = 'firstNameInput'
            firstNameInput.setAttribute('style', 'width:200px; margin-left:10px');

            firstNameInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter' || firstNameInput.value !== '') {
                    document.getElementById('firstNameSpan').textContent = firstNameInput.value;
                    document.getElementById('headBarSpan').textContent = `Welcome ${firstNameInput.value}`
                    firstNameInput.remove();
                }
            })

            if (!document.getElementById('firstNameInput')){
                firstName.appendChild(firstNameInput)
            }
        }
        
        return (
                <div id='firstName'>
                    <span style={{fontSize:'25px', marginRight:'2px'}} id='firstNameSpan'>First and last name</span>
                    <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} onClick={changeName}>Edit</span>
                </div>
        )
    }
}
