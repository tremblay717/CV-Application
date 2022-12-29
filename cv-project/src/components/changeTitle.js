export default function changeTitle(event) {

    const indexofItem = (event.target.id).indexOf('_');
    const companyId = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    const titleInput = document.createElement('input');
    titleInput.id = 'titleInput';
    titleInput.setAttribute('style', 'width:200px; margin-left:10px');

    const titleSpan = document.getElementById(`Title_${companyId}`);

    titleInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && titleInput.value !== '') {
            titleSpan.textContent = `Title: ${titleInput.value}`
            titleInput.remove();
        }
    })

    if (!document.getElementById('titleInput')) {
        titleSpan.appendChild(titleInput);
    }
}