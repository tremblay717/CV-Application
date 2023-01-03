export default function removeJob(event) {
    const indexofItem = (event.target.id).indexOf('_');
    const jobRemoveId = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    document.getElementById(`Job_${jobRemoveId}`).remove();
}