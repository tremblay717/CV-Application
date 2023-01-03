export default function editEnd (event) {

    const indexofItem = (event.target.id).indexOf('_');
    const endId = (event.target.id).slice(indexofItem + 1, event.target.id.length);

    const endInput = document.createElement('input');
    endInput.id = 'endInput';
    endInput.type = 'date'
    endInput.setAttribute('style', 'width:120px; margin-left:10px');

    const endSpan = document.getElementById(`end_${endId}`);

    endInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && endInput.value !== '') {
            const date = new Date(endInput.value);
            const month = date.toLocaleString('default', { month: 'long' });
            endSpan.textContent= `Ending date: ${month.slice(0,3)} ${date.getFullYear()}`;
            endInput.remove();
        }
    })

    if (!document.getElementById('endInput')) {
        endSpan.appendChild(endInput);
    }
}