import React from "react"
import { useState } from 'react';
import { HeadBar } from "./components/Headbar"
import addSchool from "./components/addSchool"
import persona from './components/Persona.jpg'


export function App () {

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
    }

    const [schoolName, setSchoolName] = useState('School Name');
    const [studyTitle, setStudy] = useState('Title of Study');
    const [graduationDate, setGraduation] = useState('Graduation Year');

    const school = document.getElementById('school');
    const study = document.getElementById('study');
    const graduation = document.getElementById('graduation');

    function educationInfo(){

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
    }

    return (
      <div>
        <HeadBar/>
        <div className="cvSection">
          <div className='cvForm'>
              <form style={{marginTop:'40px'}}>
                  <span style={{marginLeft:'10%', fontWeight:'500'}}>Personal Information</span>
                  <ul>
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
                  <span style={{marginLeft:'10%', marginTop:'20px', fontWeight:'500'}}>Education</span>
                  <ul>
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
              </form>
          </div>
          <div className='cvInfo'>
            <div className='personalInfo'>
                <div style={{display:'flex',flexDirection:'column',gap:'25%'}}>
                    <span style={{fontWeight:'700', fontSize:'25px'}}>{fullName}</span>
                    <span style={{fontWeight:'500', fontSize:'20px'}}>{phoneNumber}</span>
                    <span style={{fontWeight:'500', fontSize:'20px'}}>{emailAdress}</span>
                </div>
                <img src={persona} alt='persona' style={{width:'25%',borderRadius:'8px'}}></img>
            </div>
            <div className="education">
                  <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
                    <span style={{fontWeight:'700', fontSize:'25px'}}>Education</span>
                    <span style={{fontWeight:'700', fontSize:'15px'}} onClick={addSchool}>Add School</span>
                  </div>
                  <span style={{fontWeight:'550', fontSize:'22px'}}>{schoolName}</span>
                  <span style={{fontWeight:'500', fontSize:'20px'}}>{studyTitle}</span>
                  <span style={{fontWeight:'500', fontSize:'20px'}}>{graduationDate}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
