export default function editPhone () {

    const phoneInput = document.createElement('input');
    phoneInput.id = 'phoneInput';
    phoneInput.type='number';

    phoneInput.setAttribute('style', 'width:200px; margin-left:10px');

    const phoneSpan = document.getElementById('phoneNumber');

    phoneInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && phoneInput.value.length === 10) {
            phoneSpan.textContent = `☎: ${phoneInput.value.slice(0,3)}-${phoneInput.value.slice(3,6)}-${phoneInput.value.slice(6,phoneInput.length)}`
            phoneInput.remove();
        }
    })

    if (!document.getElementById('phoneInput')) {
        phoneSpan.appendChild(phoneInput);
    }
}