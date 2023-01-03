export default function removeSchool(event) {
    const indexofItem = (event.target.id).indexOf('_');
    const SchoolId = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    document.getElementById(`School_${SchoolId}`).remove();
}