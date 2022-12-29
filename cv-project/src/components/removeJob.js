export default function removeJob(event) {
    const indexofItem = (event.target.id).indexOf('_');
    const companyID = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    const jobUl = document.getElementById(`Company_${companyID}`)
    jobUl.remove()
}