export default function editName () {

    const fullNameInput = document.createElement('input');
    fullNameInput.id = 'fullNameInput';
    fullNameInput.setAttribute('style', 'width:200px; margin-left:10px');

    const fullNameSpan = document.getElementById('fullName');

    fullNameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && fullNameInput.value !== '') {
            fullNameSpan.textContent = fullNameInput.value;
            fullNameInput.remove();
        }
    })

    if (!document.getElementById('fullNameInput')) {
        fullNameSpan.appendChild(fullNameInput);
    }




}