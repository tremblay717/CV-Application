export default function changeGraduation (event) {

    
    const indexofItem = (event.target.id).indexOf('_');
    const schoolNameId = (event.target.id).slice(indexofItem + 1,event.target.id.length);

    const graduationInput = document.createElement('input');
    graduationInput.type = 'date';
    graduationInput.id = 'graduationInput';
    graduationInput.setAttribute('style', 'width:200px; margin-left:10px');

    const graduationSpan = document.getElementById(`graduation_${schoolNameId}`);

    graduationInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && graduationInput.value !== '') {
            
           let date = new Date(graduationInput.value);
            const month = date.toLocaleString('default', { month: 'long' });
            graduationSpan.textContent = `Graduation : ${month.slice(0,3)} ${date.getFullYear()}`;
            graduationInput.remove();
        }
    })

    if (!document.getElementById('graduationInput')){
        graduationSpan.appendChild(graduationInput);
    }
}