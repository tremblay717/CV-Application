export default function editStudy(event) {

    const indexofItem = (event.target.id).indexOf('_');
    const schoolNameId = (event.target.id).slice(indexofItem + 1, event.target.id.length);

    const editStudyInput = document.createElement('input');
    editStudyInput.id = 'schoolNameInput';
    editStudyInput.setAttribute('style', 'width:200px; margin-left:10px');

    const studySpan = document.getElementById(`study_${schoolNameId}`);

    editStudyInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && editStudyInput.value !== '') {
            studySpan.textContent = editStudyInput.value;
            editStudyInput.remove();
        }
    })

    if (!document.getElementById('schoolNameInput')) {
        studySpan.appendChild(editStudyInput);
    }
}