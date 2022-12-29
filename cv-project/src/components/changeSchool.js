export default function changeSchoolName(event) {
    console.log(event.target.id)
    const indexofItem = (event.target.id).indexOf('_');
    const schoolNameId = (event.target.id).slice(indexofItem + 1,event.target.id.length);
    const schoolNameInput = document.createElement('input');
    schoolNameInput.id = 'schoolNameInput';
    schoolNameInput.setAttribute('style', 'width:200px; margin-left:10px');

    const schoolNameSpan = document.getElementById(`schoolName_${schoolNameId}`);

    schoolNameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && schoolNameInput.value !== '') {
            schoolNameSpan.textContent = schoolNameInput.value;
            schoolNameInput.remove();
        }
    })

    if (!document.getElementById('schoolNameInput')) {
        schoolNameSpan.appendChild(schoolNameInput);
    }
}