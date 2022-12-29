import React from 'react';
// import './index.css';

export class Phone extends React.Component {
    render() {
        function changePhone(){
            const phoneSpan = document.getElementById('phoneSpan');

            const phoneInput = document.createElement('input');
            phoneInput.id = 'phoneInput'
            phoneInput.setAttribute('style', 'width:200px; margin-left:10px');

            phoneInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter' && phoneInput.value.length >= 8) {
                    document.getElementById('phoneSpan').textContent = `☎: ${phoneInput.value}`;
                    phoneInput.remove();
                }
            })

            if (!document.getElementById('phoneInput')){
                phoneSpan.appendChild(phoneInput)
            }
        }
        
        return (
                <div id='phone'>
                    <span style={{fontSize:'18px', marginRight:'2px'}} id='phoneSpan'>Phone Number</span>
                    <span style={{fontSize:'12px', textDecoration:'underline',cursor:'pointer'}} onClick={changePhone}>Edit</span>
                </div>
        )
    }
}
