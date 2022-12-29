export default function removeTask(event) {
    const indexofItem = (event.target.id).indexOf('_');
    const taskID = (event.target.id).slice(indexofItem + 1, event.target.id.length);
    document.getElementById(`task_${taskID}`).remove()
    document.getElementById(`editRemoveTask_${taskID}`).remove()

}