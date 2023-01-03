export default function editTask (event) {

    const indexofItem = (event.target.id).indexOf('_');
    const taskId = (event.target.id).slice(indexofItem + 1, event.target.id.length);

    const taskInput = document.createElement('div');
    taskInput.id = 'taskInput';
    taskInput.className = 'tasks';
    taskInput.contentEditable = true;
    taskInput.setAttribute('style','width:400px; margin-top:10px')
    const taskSpan = document.getElementById(`tasks_${taskId}`);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && taskInput.textContent !== '') {
            taskSpan.textContent = taskInput.textContent;
            taskInput.remove();
        }
    })

    if (!document.getElementById('taskInput')) {
        taskSpan.appendChild(taskInput);
    }
}