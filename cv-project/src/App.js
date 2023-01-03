import React, {useState} from "react"
import { HeadBar } from "./components/Headbar"
import addSchool from "./components/addSchool"
import editSchool from "./components/editSchool"
import editStudy from "./components/editStudy"
import editGraduation from "./components/editGraduation"
import editCompany from "./components/editCompany"
import editJob from "./components/editJob"
import editTask from "./components/editTask"
import editStart from "./components/editStart"
import editEnd from "./components/editEnd"
import removeTask from "./components/removeTask"
import addJob from "./components/addJob"
import removeJob from "./components/removeJob"
import persona from './components/Persona.jpg'
import uuid from 'react-uuid'

export function App () {

    const id = uuid();
    const validator = require("email-validator");

    const [fullName, setFullName] = useState('Your Name');
    const [phoneNumber, setPhoneNumber] = useState('Phone Number');
    const [emailAdress, setEmailAdress] = useState('Email Address');

    function personalInfo() {

      const firstName = document.getElementById('firstName');
      const surname = document.getElementById('surname');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      
      if(firstName.value !== "" && surname.value !== ""){
        setFullName(`${firstName.value} ${surname.value}`);
      }

      if(phone.value.length === 10){
        setPhoneNumber(`☎: ${phone.value.slice(0,3)}-${phone.value.slice(3,6)}-${phone.value.slice(6,phoneNumber.length)}`);
      }

      if(validator.validate(email.value)){
        setEmailAdress(`Email : ${email.value}`);
      }
      else{
        setEmailAdress("Enter a valid email address")  
      }

      if (firstName.value !== "" && surname.value !== "" && phone.value.length === 10 && validator.validate(email.value)){
        document.getElementById('personalInfoSpan').remove();      
        document.getElementById('personalInfoUl').remove();
      }
      if (!document.getElementById('educationInfoSpan') && !document.getElementById('jobInfoSpan') && !document.getElementById('personalInfoSpan')){
        document.querySelector('.cvForm').remove();
        document.querySelector('.cvInfo').setAttribute('style','width:100%');
      }
    }

    const [schoolName, setSchoolName] = useState('School Name');
    const [studyTitle, setStudy] = useState('Title of Study');
    const [graduationDate, setGraduation] = useState('Graduation Year');

    function educationInfo(){

      const school = document.getElementById('school');
      const study = document.getElementById('study');
      const graduation = document.getElementById('graduation');

      if(school.value !== ""){
        setSchoolName(school.value);
      }
      if(study.value !== ""){
        setStudy(study.value);
      }

      if(graduation.value !== ""){
        const date = new Date(graduation.value);
        const month = date.toLocaleString('default', { month: 'long' });
        setGraduation(`${month.slice(0,3)} ${date.getFullYear()}`);
      }
      
      if (school.value !== "" && study.value !== "" && graduation.value){
        document.getElementById('educationInfoSpan').remove();      
        document.getElementById('educationUl').remove();
      }

      if (!document.getElementById('educationInfoSpan') && !document.getElementById('jobInfoSpan') && !document.getElementById('personalInfoSpan')){
        document.querySelector('.cvForm').remove();
        document.querySelector('.cvInfo').setAttribute('style','width:100%');
      }
    }

    const [companyName, setCompanyName] = useState('Company Name');
    const [jobTitle, setJob] = useState('Job Title');
    const [task1, setTask1] = useState('Task 1');
    const [task2, setTask2] = useState('Task 2');
    const [task3, setTask3] = useState('Task 3');
    const [startDate, setStart] = useState('Starting Date');
    const [endDate, setEnd] = useState('Ending Date');
    
    const task1ID = uuid();
    const task2ID = uuid();
    const task3ID = uuid();

    function experienceInfo () {
     
      const company = document.getElementById('company');
      const job = document.getElementById('job');
      const taskOne = document.querySelector('.taskOne');
      const taskTwo = document.querySelector('.taskTwo');
      const taskThree = document.querySelector('.taskThree');

      const start = document.getElementById('start');
      const end = document.getElementById('end');

      if(company.value !== ""){
        setCompanyName(company.value);
      }
      if(job.value !== ""){
        setJob(job.value);
      }
      if(taskOne.textContent !== ""){
        setTask1(taskOne.textContent);
      }

      if(taskTwo.textContent !== ""){
        setTask2(taskTwo.textContent);
      }

      if(taskThree.textContent !== ""){
        setTask3(taskThree.textContent);
      }

      if (start.value !== "") {
        const date = new Date(start.value);
        const month = date.toLocaleString('default', { month: 'long' });
        setStart(`Starting date: ${month.slice(0,3)} ${date.getFullYear()}`);
      }

      if (end.value !== "") {
        const date = new Date(end.value);
        const month = date.toLocaleString('default', { month: 'long' });
        setEnd(`Ending date: ${month.slice(0,3)} ${date.getFullYear()}`);
      }
      
      if (company.value !== "" && job.value !== "" && task1.textContent !== "" && task2.textContent !== "" && task3.textContent !== "" ){
        document.getElementById('jobInfoSpan').remove();      
        document.getElementById('experienceUl').remove();
      }

      if (!document.getElementById('educationInfoSpan') && !document.getElementById('jobInfoSpan') && !document.getElementById('personalInfoSpan')){
        document.querySelector('.cvForm').remove();
        document.querySelector('.cvInfo').setAttribute('style','width:100%');
      }
    }

    return (
      <div>
        <HeadBar/>
        <div className="cvSection">
          <div className='cvForm'>
            <form style={{marginTop:'40px'}}>
              <span id='personalInfoSpan' style={{marginLeft:'10%', fontWeight:'500'}}>Personal Information</span>
              <ul id='personalInfoUl'>
                  <li>
                      <label>First Name</label>
                      <input id='firstName'></input>
                  </li>
                  <li>
                      <label>Surname</label>
                      <input id='surname'></input>
                  </li>
                  <li>
                      <label>Phone number</label>
                      <input type='number' id='phone'></input>
                  </li>
                  <li>
                      <label>Email Address</label>
                      <input id='email'></input>
                  </li>
                  <button type="button" style={{cursor:'pointer'}} onClick={personalInfo}>Add Personal Info</button>
              </ul>
              <span id='educationInfoSpan' style={{marginLeft:'10%', marginTop:'40px', fontWeight:'500'}}>Education</span>
              <ul id='educationUl'>
                <li>
                  <label>School Name</label>
                  <input id='school'></input>
                </li>
                <li>
                  <label>Title of Study</label>
                  <input id='study'></input>
                </li>
                <li>
                  <label>Graduation</label>
                  <input type='date' id='graduation'></input>
                </li>
                <button type="button" style={{cursor:'pointer'}} onClick={educationInfo}>Add Education Info</button>
              </ul>
              <span id='jobInfoSpan' style={{marginLeft:'10%', marginTop:'20px', fontWeight:'500'}}>Experience</span>
              <ul id='experienceUl'>
                <li>
                  <label>Company Name</label>
                  <input id='company'></input>
                </li>
                <li>
                  <label>Job Title</label>
                  <input id='job'></input>
                </li>
                <li>
                  <label>Main Tasks</label>
                  <div style={{display:'flex', flexDirection:'column',gap:'20px'}}>
                    <div className='taskOne' id={`tasks_${uuid()}`} contentEditable></div>
                    <div className='taskTwo' id={`tasks_${uuid()}`} contentEditable></div>
                    <div className='taskThree' id={`tasks_${uuid()}`} contentEditable></div>
                  </div>
                </li>
                <li>
                  <label>Start Date</label>
                  <input type='date' id='start'></input>
                </li>
                <li>
                  <label>End Date</label>
                  <input type='date' id='end'></input>
                </li>
                <button type="button" style={{cursor:'pointer'}} onClick={experienceInfo}>Add Job Info</button>
              </ul>
            </form>
          </div>
          <div className='cvInfo'>
            <div className='personalInfo'>
              <div style={{display:'flex',flexDirection:'column',gap:'25%'}}>
                <span style={{fontWeight:'700', fontSize:'25px'}}>{fullName}</span>
                <span style={{fontWeight:'500', fontSize:'20px'}}>{phoneNumber}</span>
                <span style={{fontWeight:'500', fontSize:'20px'}}>{emailAdress}</span>
              </div>
              <img src={persona} alt='persona' style={{width:'15%',borderRadius:'8px', minWidth:'87px'}}></img>
            </div>
            <div className="education">
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
                <span style={{fontWeight:'700', fontSize:'25px'}}>Education</span>
                <span style={{fontWeight:'700', fontSize:'15px', cursor:'not-allowed'}} onClick={addSchool}>Add School</span>
              </div>
              <div id={`School_${id}`} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                <span style={{fontWeight:'550', fontSize:'22px'}} id={`schoolName_${id}`}>{schoolName}</span>
                <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editSchoolName_${id}`} onClick={editSchool}>Edit</span>
              </div>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                <span style={{fontWeight:'500', fontSize:'20px'}} id={`study_${id}`}>{studyTitle}</span>
                <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editStudy_${id}`} onClick={editStudy}>Edit</span>
              </div>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                <span style={{fontWeight:'500', fontSize:'20px'}} id={`graduation_${id}`}>{graduationDate}</span>
                <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editGraduation_${id}`} onClick={editGraduation}>Edit</span>
              </div>    
              </div>
            </div>
            <div className="experience" style={{display:'flex', flexDirection:'column', gap:'30px'}}>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
                <span style={{fontWeight:'700', fontSize:'25px'}}>Experience</span>
                <span style={{fontWeight:'700', fontSize:'15px', cursor:'not-allowed'}} onClick={addJob}>Add Job</span>
              </div>
              <div className='jobSection' id={`Job_${id}`} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <div className='companyTitle' style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'550', fontSize:'22px'}} id={`companyName_${id}`}>{companyName}</span>
                  <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editCompanyName_${id}`} onClick={editCompany}>Edit</span>
                  <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`removeCompanyName_${id}`} onClick={removeJob}>Remove</span>
                </div>
                <div className='jobTitle' style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'500', fontSize:'20px'}} id={`job_${id}`}>{jobTitle}</span>
                  <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editJob_${id}`} onClick={editJob}>Edit</span>
                </div>
                <div className="taskSection" style={{display:'flex',flexDirection:'column'}}>
                    <span style={{fontWeight:'500', fontSize:'20px', marginBottom:'10px'}} id={`graduation_${id}`}>Main Tasks</span>
                    <div style={{display:'flex', flexDirection:'column',gap:'20px', marginBottom:'10px'}}>
                      <div style={{display:'flex', flexDirection: 'column' , alignItems:'baseline', width:'100%', gap:'5px'}} id={`taskDiv_${task1ID}`}>
                        <span style={{fontWeight:'500', fontSize:'15px',marginLeft:'10px'}} id={`tasks_${task1ID}`}>{task1}</span>
                        <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editTask_${task1ID}`} onClick={editTask}>Edit</span>
                        <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`removeTask_${task1ID}`} onClick={removeTask}>Remove</span>
                    </div>
                    <div style={{display:'flex', flexDirection: 'column' , alignItems:'baseline', width:'100%', gap:'5px'}} id={`taskDiv_${task2ID}`}>
                      <span style={{fontWeight:'500', fontSize:'15px',marginLeft:'10px',width:'100%'}} id={`tasks_${task2ID}`}>{task2}</span>
                      <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editTask_${task2ID}`} onClick={editTask}>Edit</span>
                      <span style={{fontWeight:'500', fontSize:'10px', marginLeft:'5px',cursor:'not-allowed'}} id={`removeTask_${task2ID}`} onClick={removeTask}>Remove</span>
                    </div>
                    <div style={{display:'flex', flexDirection: 'column' , alignItems:'baseline', width:'100%', gap:'5px'}} id={`taskDiv_${task3ID}`}>
                      <span style={{fontWeight:'500', fontSize:'15px', marginLeft:'10px'}} id={`tasks_${task3ID}`}>{task3}</span>
                      <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editTask_${task3ID}`} onClick={editTask}>Edit</span>
                      <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`removeTask_${task3ID}`} onClick={removeTask}>Remove</span>
                    </div>
                </div>
              </div>          
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'500', fontSize:'15px',cursor:'not-allowed'}} id={`start_${id}`}>{startDate}</span>
                  <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editStart_${id}`} onClick={editStart}>Edit</span>
                </div>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'500', fontSize:'15px',cursor:'not-allowed'}} id={`end_${id}`}>{endDate}</span>
                  <span style={{fontWeight:'500', fontSize:'10px',cursor:'not-allowed'}} id={`editEnd_${id}`} onClick={editEnd}>Edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}