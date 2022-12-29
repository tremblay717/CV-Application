import editTask from './editTask';
import removeTask from './removeTask'
import uuid from 'react-uuid';

export default function addTask(event) {

    const indexofItem = (event.target.id).indexOf('_');
    const taskID = (event.target.id).slice(indexofItem + 1, event.target.id.length);

    const mainTaskLi = document.getElementById(`tasks_${taskID}`)

    const newTaskId = uuid();

    const newTask = document.createElement('li');
    newTask.id = `task_${newTaskId}`;
    newTask.setAttribute('style', 'font-size:15px;margin-left:10px;  text-align: justify;text-justify: inter-word;');

    const newTaskInput = document.createElement('textarea');
    newTaskInput.id = 'newTaskInput'
    newTaskInput.setAttribute('style', 'width:300px;height:100px;');

    const editRemoveTask = document.createElement('div');
    editRemoveTask.id = `editRemoveTask_${newTaskId}`
    editRemoveTask.setAttribute('style', 'display:flex')

    const editTaskSpan = document.createElement('span');
    editTaskSpan.id = `editTask_${newTaskId}`;
    editTaskSpan.setAttribute('style', 'font-size:10px;margin-left:10px;cursor:pointer;text-decoration:underline;');
    editTaskSpan.addEventListener('click', editTask);
    editTaskSpan.textContent = 'Edit';
    editRemoveTask.appendChild(editTaskSpan);

    const removeTaskSpan = document.createElement('span');
    removeTaskSpan.id = `removeTask_${newTaskId}`;
    removeTaskSpan.setAttribute('style', 'font-size:10px;margin-left:10px;cursor:pointer;text-decoration:underline;');
    removeTaskSpan.addEventListener('click', removeTask);
    removeTaskSpan.textContent = 'Remove';
    editRemoveTask.appendChild(removeTaskSpan);

    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && newTaskInput.value !== '') {
            newTask.textContent = `${newTaskInput.value}`;
            mainTaskLi.append(newTask);
            mainTaskLi.append(editRemoveTask);

            newTaskInput.remove();
        }
    });

    if (!document.getElementById('newTaskInput')) {
        mainTaskLi.append(newTaskInput);
    }
}