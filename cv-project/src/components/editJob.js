export default function editJob (event) {

    const indexofItem = (event.target.id).indexOf('_');
    const jobId = (event.target.id).slice(indexofItem + 1, event.target.id.length);

    const jobNameInput = document.createElement('input');
    jobNameInput.id = 'jobNameInput';
    jobNameInput.setAttribute('style', 'width:200px; margin-left:10px');

    const jobSpan = document.getElementById(`job_${jobId}`);

    jobNameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && jobNameInput.value !== '') {
            jobSpan.textContent = jobNameInput.value;
            jobNameInput.remove();
        }
    })

    if (!document.getElementById('companyNameInput')) {
        jobSpan.appendChild(jobNameInput);
    }
}