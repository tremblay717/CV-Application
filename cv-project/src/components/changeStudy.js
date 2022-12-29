export default function changeStudy (event) {
    const indexofItem = (event.target.id).indexOf('_');
    const schoolNameId = (event.target.id).slice(indexofItem + 1,event.target.id.length);

    const studyInput = document.createElement('input');
    studyInput.id = 'studyInput'
    studyInput.setAttribute('style', 'width:200px; margin-left:10px');

    const studySpan = document.getElementById(`study_${schoolNameId}`);

    studyInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && studyInput.value !== '') {
            studySpan.textContent = studyInput.value;
            studyInput.remove();
        }
    })

    if (!document.getElementById('studyInput')){
        studySpan.appendChild(studyInput)
    }
}