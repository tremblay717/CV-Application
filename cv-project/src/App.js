import React from "react"
import { useState } from 'react';
import { HeadBar } from "./components/Headbar"
import addSchool from "./components/addSchool"
import editSchool from "./components/editSchool";
import editStudy from "./components/editStudy";
import editGraduation from "./components/editGraduation";
import persona from './components/Persona.jpg'
import uuid from 'react-uuid'


export function App () {

    const id = uuid()
    const [fullName, setFullName] = useState('Your Name');
    const [phoneNumber, setPhoneNumber] = useState('Phone Number');
    const [emailAdress, setEmailAdress] = useState('Email Adress');

    const validator = require("email-validator");

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
        setEmailAdress(`Email : ${email.value}`)
      }
      else{
        setEmailAdress("Enter a valid email adress")  
      }

      if (firstName.value !== "" && surname.value !== "" && phone.value.length === 10 && validator.validate(email.value)){
        document.getElementById('personalInfoSpan').remove();      
        document.getElementById('personalInfoUl').remove();
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
    const [mainTasks, setTasks] = useState('-');
    const [startDate, setStart] = useState('Start Date')
    const [endDate, setEnd] = useState('End Date')

    function experienceInfo () {
     

      const company = document.getElementById('company');
      const job = document.getElementById('job');
      const tasks = document.getElementById('tasks');
      const start = document.getElementById('start');
      const end = document.getElementById('end')


      if(company.value !== ""){
        setCompanyName(company.value);
      }
      if(job.value !== ""){
        setJob(job.value);
      }
      if(tasks.value !== ""){
        setTasks(tasks.value);
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

      
      if (company.value !== "" && job.value !== "" && tasks.value){
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
                      <label>Email Adress</label>
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
                  <textarea id='tasks'></textarea>
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
              <img src={persona} alt='persona' style={{width:'15%',borderRadius:'8px'}}></img>
            </div>
            <div className="education">
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
                <span style={{fontWeight:'700', fontSize:'25px'}}>Education</span>
                <span style={{fontWeight:'700', fontSize:'15px'}} onClick={addSchool}>Add School</span>
              </div>
              <div id={`School_${id}`} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                <span style={{fontWeight:'550', fontSize:'22px'}} id={`schoolName_${id}`}>{schoolName}</span>
                <span style={{fontWeight:'500', fontSize:'10px'}} id={`editSchoolName_${id}`} onClick={editSchool}>Edit</span>
              </div>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                <span style={{fontWeight:'500', fontSize:'20px'}} id={`study_${id}`}>{studyTitle}</span>
                <span style={{fontWeight:'500', fontSize:'10px'}} id={`editStudy_${id}`} onClick={editStudy}>Edit</span>
              </div>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                <span style={{fontWeight:'500', fontSize:'20px'}} id={`graduation_${id}`}>{graduationDate}</span>
                <span style={{fontWeight:'500', fontSize:'10px'}} id={`editGraduation_${id}`} onClick={editGraduation}>Edit</span>
              </div>    
              </div>
            </div>
            <div className="experience">
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
                <span style={{fontWeight:'700', fontSize:'25px'}}>Experience</span>
                <span style={{fontWeight:'700', fontSize:'15px'}} onClick={addSchool}>Add Job</span>
              </div>
              <div id={`School_${id}`} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'550', fontSize:'22px'}} id={`schoolName_${id}`}>{companyName}</span>
                  <span style={{fontWeight:'500', fontSize:'10px'}} id={`editSchoolName_${id}`} onClick={editSchool}>Edit</span>
                </div>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'500', fontSize:'20px'}} id={`study_${id}`}>{jobTitle}</span>
                  <span style={{fontWeight:'500', fontSize:'10px'}} id={`editStudy_${id}`} onClick={editStudy}>Edit</span>
                </div>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <span style={{fontWeight:'500', fontSize:'20px'}} id={`graduation_${id}`}>Main Tasks</span>
                    <span style={{fontWeight:'500', fontSize:'15px',marginLeft:'10px'}} id={`tasks_${id}`}>{mainTasks}</span>
                  </div>
                  <span style={{fontWeight:'500', fontSize:'10px'}} id={`editGraduation_${id}`} onClick={editGraduation}>Edit</span>
                </div>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'500', fontSize:'20px'}} id={`study_${id}`}>{startDate}</span>
                  <span style={{fontWeight:'500', fontSize:'10px'}} id={`editStudy_${id}`} onClick={editStudy}>Edit</span>
                </div>
                <div style={{display:'flex', alignItems:'baseline', justifyContent:'flex-start', gap:'1%'}}>
                  <span style={{fontWeight:'500', fontSize:'20px'}} id={`study_${id}`}>{endDate}</span>
                  <span style={{fontWeight:'500', fontSize:'10px'}} id={`editStudy_${id}`} onClick={editStudy}>Edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
