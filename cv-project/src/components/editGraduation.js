export default function editGraduation(event) {

    const indexofItem = (event.target.id).indexOf('_');
    const gradId = (event.target.id).slice(indexofItem + 1, event.target.id.length);

    const editGraduationInput = document.createElement('input');
    editGraduationInput.id = 'editGraduationInput';
    editGraduationInput.type = 'date'
    editGraduationInput.setAttribute('style', 'width:200px; margin-left:10px');

    const graduationSpan = document.getElementById(`graduation_${gradId}`);

    graduationSpan.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && editGraduationInput.value !== '') {
            const date = new Date(editGraduationInput.value);
            const month = date.toLocaleString('default', { month: 'long' });
            graduationSpan.textContent = `${month.slice(0,3)} ${date.getFullYear()}`;
            editGraduationInput.remove();
        }
    })

    if (!document.getElementById('schoolNameInput')) {
        graduationSpan.appendChild(editGraduationInput);
    }
}