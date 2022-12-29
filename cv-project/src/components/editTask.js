export default function editTask (event){

    const indexofItem = (event.target.id).indexOf('_');
    const editTaskID = (event.target.id).slice(indexofItem + 1,event.target.id.length);
    const currentTask = document.getElementById(`task_${editTaskID}`)

    const editTaskInput = document.createElement('textarea')
    editTaskInput.id = 'editTaskInput'
    editTaskInput.setAttribute('style', 'width:300px;height:100px;');
    editTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && editTaskInput.value !== '') {
            currentTask.textContent = `${editTaskInput.value}`;
            editTaskInput.remove();
        }
    });

    if (!document.getElementById('editTaskInput')){
        currentTask.append(editTaskInput);
    }   
}