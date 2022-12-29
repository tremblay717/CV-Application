import uuid from 'react-uuid';


export default function addTask (event) {

    const indexofItem = (event.target.id).indexOf('_');
    const taskID = (event.target.id).slice(indexofItem + 1,event.target.id.length);

    const mainTaskLi = document.getElementById(`tasks_${taskID}`)
    console.log(mainTaskLi);

    const newTaskId = uuid()
    const newTask = document.createElement('li');
    newTask.id = `task_${newTaskId}`;
    newTask.setAttribute('style','font-size:15px;margin-left:10px;');

    const newTaskInput = document.createElement('input');
    newTaskInput.id = 'newTaskInput'
    newTaskInput.setAttribute('style', 'width:300px;');

    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && newTaskInput.value !== '') {
            newTask.textContent = `- ${newTaskInput.value}`;
            mainTaskLi.append(newTask)
            newTaskInput.remove();
        }
    })

    if (!document.getElementById('newTaskInput')){
        mainTaskLi.append(newTaskInput)
    }    
}