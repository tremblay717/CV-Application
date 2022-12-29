export default function changeCompanyName(event) {

    const indexofItem = (event.target.id).indexOf('_');
    const companyId = (event.target.id).slice(indexofItem + 1,event.target.id.length);
    const companyNameInput = document.createElement('input');
    companyNameInput.id = 'companyNameInput';
    companyNameInput.setAttribute('style', 'width:200px; margin-left:10px');

    const companyNameSpan = document.getElementById(`companyName_${companyId}`);

    companyNameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && companyNameInput.value !== '') {
            companyNameSpan.textContent = companyNameInput.value;
            companyNameInput.remove();
        }
    })

    if (!document.getElementById('companyNameInput')) {
        companyNameSpan.appendChild(companyNameInput);
    }
}