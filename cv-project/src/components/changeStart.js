export default function changeStart (event) {
    const indexofItem = (event.target.id).indexOf('_');
    
    const companyId = (event.target.id).slice(indexofItem + 1,event.target.id.length);
    
    const startInput = document.createElement('input');
    startInput.id = 'startInput';
    startInput.type = 'date';
    startInput.setAttribute('style', 'width:125px; margin-left:10px');

    const startSpan = document.getElementById(`Start_${companyId}`);
    startInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && startInput.value !== '') {
            const date = new Date(startInput.value);
            const month = date.toLocaleString('default', { month: 'long' });
            startSpan.textContent = `Start : ${month.slice(0,3)} ${date.getFullYear()}`;
            startInput.remove();
        }
    })

    if (!document.getElementById('startInput')){
        startSpan.appendChild(startInput);
    }
}