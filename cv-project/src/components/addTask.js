import editTask from './editTask';
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

    const newTaskInput = document.createElement('textarea');
    newTaskInput.id = 'newTaskInput'
    newTaskInput.setAttribute('style', 'width:300px;height:100px;');

    const editTaskSpan = document.createElement('span');
    editTaskSpan.id = `editTask_${newTaskId}`;
    editTaskSpan.setAttribute('style', 'font-size:10px;margin-left:10px;cursor:pointer;text-decoration:underline;');
    editTaskSpan.addEventListener('click', editTask);
    editTaskSpan.textContent = 'Edit';

    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && newTaskInput.value !== '') {
            newTask.textContent = `${newTaskInput.value}`;
            mainTaskLi.append(newTask);
            mainTaskLi.append(editTaskSpan);

            newTaskInput.remove();
        }
    })

    if (!document.getElementById('newTaskInput')){
        mainTaskLi.append(newTaskInput);
    }    
}

