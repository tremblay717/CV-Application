export default function removeSchool(event) {
    const indexofItem = (event.target.id).indexOf('_');
    const schoolId = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    const schoolUl = document.getElementById(`School_${schoolId}`)
    schoolUl.remove()
}