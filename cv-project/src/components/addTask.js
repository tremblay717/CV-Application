
import editTask from "./editTask"
import removeTask from "./removeTask"
import uuid from 'react-uuid'

export default function addTask (event) {

    const taskID = uuid();

    const indexofItem = (event.target.id).indexOf('_');
    const taskListId = (event.target.id).slice(indexofItem + 1, event.target.id.length);


    const taskList = document.getElementById(`taskList_${taskListId}`);

    console.log(taskList);

    
    const newTaskDiv = document.createElement('div');
    newTaskDiv.id = `taskDiv_${taskID}`;
    newTaskDiv.setAttribute('style', 'display:flex; flex-direction:column; gap:5px');
    taskList.appendChild(newTaskDiv);

    const newTaskSpan = document.createElement('span');
    newTaskSpan.setAttribute('style','font-weight:500;font-size:15px;margin-left:10px;');
    newTaskSpan.textContent = 'Task';
    newTaskSpan.id = `tasks_${taskID}`
    newTaskDiv.appendChild(newTaskSpan);

    const newTaskEdit = document.createElement('span');
    newTaskEdit.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    newTaskEdit.textContent = 'Edit';
    newTaskEdit.id = `editTask_${taskID}`;
    newTaskEdit.addEventListener('click', editTask);
    newTaskDiv.appendChild(newTaskEdit);

    const newTaskRemove = document.createElement('span');
    newTaskRemove.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    newTaskRemove.textContent = 'Remove';
    newTaskRemove.id = `removeTask_${taskID}`;
    newTaskRemove.addEventListener('click', removeTask);
    newTaskDiv.appendChild(newTaskRemove);
}