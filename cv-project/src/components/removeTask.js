export default function removeTask(event) {
    const indexofItem = (event.target.id).indexOf('_');
    const taskRemoveId = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    document.getElementById(`taskDiv_${taskRemoveId}`).remove();
}