import editCompany from "./editCompany"
import editJob from "./editJob"
import editTask from "./editTask"
import editStart from "./editStart"
import editEnd from "./editEnd"
import removeTask from "./removeTask"
import removeJob from "./removeJob"
import uuid from 'react-uuid';

export default function addJob () {

    const jobId = uuid();

    const jobDiv = document.createElement('div');
    jobDiv.className = 'jobSection';
    jobDiv.setAttribute('style','display:flex; flex-direction:column; gap:20px');
    jobDiv.id = `Job_${jobId}`;

    document.querySelector('.experience').appendChild(jobDiv);

    const companyTitle = document.createElement('div');
    companyTitle.className = 'companyTitle';
    companyTitle.setAttribute('style','display:flex; flex-direction:row; align-items:baseline; justify-content:flex-start; gap:1%');
    jobDiv.appendChild(companyTitle);

    const companySpan = document.createElement('span');
    companySpan.textContent = 'Company Name';
    companySpan.className = 'companyTitle';
    companySpan.id = `companyName_${jobId}`;
    companySpan.setAttribute('style','font-weight:550; font-size:22px');
    companyTitle.appendChild(companySpan);

    const editCompanySpan = document.createElement('span');
    editCompanySpan.textContent = 'Edit';
    editCompanySpan.className = 'editCompanySpan';
    editCompanySpan.id = `editCompanyName_${jobId}`;
    editCompanySpan.setAttribute('style','font-weight:500; font-size:10px');
    editCompanySpan.addEventListener('click', editCompany);
    companyTitle.appendChild(editCompanySpan);

    const removeCompanySpan = document.createElement('span');
    removeCompanySpan.textContent = 'Remove';
    removeCompanySpan.className = 'removeCompanySpan';
    removeCompanySpan.id = `removeCompanyName_${jobId}`
    removeCompanySpan.setAttribute('style','font-weight:500; font-size:10px');
    removeCompanySpan.addEventListener('click', removeJob);
    companyTitle.appendChild(removeCompanySpan);

    const jobTitle = document.createElement('div');
    jobTitle.className = 'jobTitle';
    jobTitle.setAttribute('style','display:flex; flex-direction:row; align-items:baseline; justify-content:flex-start; gap:1%');
    jobDiv.appendChild(jobTitle);


    const titleSpan = document.createElement('span');
    titleSpan.textContent = 'Job Title';
    titleSpan.className = 'editCompanySpan';
    titleSpan.id = `job_${jobId}`;
    titleSpan.setAttribute('style','font-weight:500; font-size:20px');
    titleSpan.addEventListener('click', editCompany);
    jobTitle.appendChild(titleSpan);

    const editTitleSpan = document.createElement('span');
    editTitleSpan.textContent = 'Edit';
    editTitleSpan.className = 'editCompanySpan';
    editTitleSpan.id = `editJob_${jobId}`;
    editTitleSpan.setAttribute('style','font-weight:500; font-size:10px');
    editTitleSpan.addEventListener('click', editJob);
    jobTitle.appendChild(editTitleSpan);

    const taskSection = document.createElement('div');
    taskSection.className = 'taskSection';
    taskSection.setAttribute('style','display:flex; flex-direction:column; align-items:baseline; justify-content:flex-start; gap:1%');
    jobDiv.appendChild(taskSection);

    const taskHeader = document.createElement('div');
    taskHeader.setAttribute('style','display:flex;align-items:baseline; justify-content:space-between;width:100%')
    taskSection.appendChild(taskHeader);

    const mainTaskSpan = document.createElement('span');
    mainTaskSpan.textContent = 'Main Tasks';
    mainTaskSpan.setAttribute('style','font-weight:500; font-size:20px; margin-bottom:10px');
    taskHeader.appendChild(mainTaskSpan);

    const addTaskSpan = document.createElement('span');
    addTaskSpan.textContent = 'Add Task';
    addTaskSpan.setAttribute('style','font-weight:700; font-size:12px;')
    taskHeader.appendChild(addTaskSpan);

    const taskList = document.createElement('div');
    taskList.setAttribute('style','display:flex;flex-direction:column; gap:20px;margin-bottom:10px;')
    taskSection.appendChild(taskList);
    
    const newTask1ID = uuid();

    const taskOneDiv = document.createElement('div');
    taskOneDiv.id = `taskDiv_${newTask1ID}`;
    taskOneDiv.setAttribute('style', 'display:flex; flex-direction:column; gap:5px');
    taskList.appendChild(taskOneDiv);

    const taskOneSpan = document.createElement('span');
    taskOneSpan.setAttribute('style','font-weight:500;font-size:15px;margin-left:10px;');
    taskOneSpan.textContent = 'Task';
    taskOneSpan.id = `tasks_${newTask1ID}`
    taskOneDiv.appendChild(taskOneSpan);

    const editTaskOne = document.createElement('span');
    editTaskOne.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    editTaskOne.textContent = 'Edit';
    editTaskOne.id = `editTask_${newTask1ID}`;
    editTaskOne.addEventListener('click', editTask);
    taskOneDiv.appendChild(editTaskOne);

    const removeTaskOne = document.createElement('span');
    removeTaskOne.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    removeTaskOne.textContent = 'Remove';
    removeTaskOne.id = `removeTask_${newTask1ID}`;
    removeTaskOne.addEventListener('click', removeTask);
    taskOneDiv.appendChild(removeTaskOne);

    const newTask2ID = uuid();
    
    const taskTwoDiv = document.createElement('div');
    taskTwoDiv.id = `taskDiv_${newTask2ID}`;
    taskTwoDiv.setAttribute('style', 'display:flex; flex-direction:column; gap:5px');
    taskList.appendChild(taskTwoDiv);

    const taskTwoSpan = document.createElement('span');
    taskTwoSpan.setAttribute('style','font-weight:500;font-size:15px;margin-left:10px;');
    taskTwoSpan.textContent = 'Task';
    taskTwoSpan.id = `tasks_${newTask2ID}`;
    taskTwoDiv.appendChild(taskTwoSpan);

    const editTaskTwo = document.createElement('span');
    editTaskTwo.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    editTaskTwo.textContent = 'Edit';
    editTaskTwo.id = `editTask_${newTask2ID}`;
    editTaskTwo.addEventListener('click', editTask);
    taskTwoDiv.appendChild(editTaskTwo);

    const removeTaskTwo = document.createElement('span');
    removeTaskTwo.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    removeTaskTwo.textContent = 'Remove';
    removeTaskTwo.id = `removeTask_${newTask2ID}`;
    removeTaskTwo.addEventListener('click', removeTask);
    taskTwoDiv.appendChild(removeTaskTwo);


    const newTask3ID = uuid();
    
    const taskThreeDiv = document.createElement('div');
    taskThreeDiv.id = `taskDiv_${newTask3ID}`;
    taskThreeDiv.setAttribute('style', 'display:flex; flex-direction:column; gap:5px');
    taskList.appendChild(taskThreeDiv);

    const taskThreeSpan = document.createElement('span');
    taskThreeSpan.setAttribute('style','font-weight:500;font-size:15px;margin-left:10px;');
    taskThreeSpan.textContent = 'Task';
    taskThreeSpan.id = `tasks_${newTask3ID}`;
    taskThreeDiv.appendChild(taskThreeSpan);

    const editTaskThree = document.createElement('span');
    editTaskThree.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    editTaskThree.textContent = 'Edit';
    editTaskThree.id = `editTask_${newTask3ID}`;
    editTaskThree.addEventListener('click', editTask);
    taskThreeDiv.appendChild(editTaskThree);

    const removeTaskThree = document.createElement('span');
    removeTaskThree.setAttribute('style','font-weight:500;font-size:10px;margin-left:10px;');
    removeTaskThree.textContent = 'Remove';
    removeTaskThree.id = `removeTask_${newTask3ID}`;
    removeTaskThree.addEventListener('click', removeTask);
    taskThreeDiv.appendChild(removeTaskThree);

    const startDiv = document.createElement('div');
    startDiv.setAttribute('style','display:flex;align-items:baseline;justify-content:flex-start;gap:1%;');
    jobDiv.appendChild(startDiv);

    const startSpan = document.createElement('span');
    startSpan.textContent = 'Starting Date';
    startSpan.setAttribute('style','font-weight:500;font-size:15px');
    startSpan.id = `start_${jobId}`;
    startDiv.appendChild(startSpan);

    const startEdit = document.createElement('span');
    startEdit.textContent = 'Edit';
    startEdit.setAttribute('style','font-weight:500;font-size:10px');
    startEdit.id = `editStart_${jobId}`;
    startEdit.addEventListener('click',editStart);
    startDiv.appendChild(startEdit);

    const endDiv = document.createElement('div');
    endDiv.setAttribute('style','display:flex;align-items:baseline;justify-content:flex-start;gap:1%;');
    jobDiv.appendChild(endDiv);

    const endSpan = document.createElement('span');
    endSpan.textContent = 'Ending Date';
    endSpan.setAttribute('style','font-weight:500;font-size:15px');
    endSpan.id = `end_${jobId}`;
    endDiv.appendChild(endSpan);

    const endEdit = document.createElement('span');
    endEdit.textContent = 'Edit';
    endEdit.setAttribute('style','font-weight:500;font-size:10px');
    endEdit.id = `editEnd_${jobId}`;
    endEdit.addEventListener('click',editEnd);
    endDiv.appendChild(endEdit);
}