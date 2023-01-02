import React from "react"
import { useState } from 'react';
import { HeadBar } from "./components/Headbar"
import persona from './components/Persona.jpg'

export function App () {

    const [fullName, setFullName] = useState('Your Name')

    function getFullName() {

      const firstName = document.getElementById('firstName');
      const surname = document.getElementById('surname');
      
      if(firstName.value !== "" && surname.value !== ""){
        setFullName(`${firstName.value} ${surname.value}`);
      }
    }

    const [phoneNumber, setPhoneNumber] = useState('Phone Number');

    return (
      <div>
        <HeadBar/>
        <div className="cvSection">
          <div className='cvForm'>
              <form>
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
                          <input></input>
                      </li>
                      <li>
                          <label>Email Adress</label>
                          <input></input>
                      </li>
                      <button type="button" style={{cursor:'pointer'}} onClick={getFullName}>Add Personal Info</button>
                  </ul>
              </form>
          </div>
          <div className='cvInfo'>
            <div className='personalInfo'>
                <div style={{display:'flex',flexDirection:'column',gap:'25%'}}>
                    <span>{fullName}</span>
                    <span>Phone Number</span>
                    <span>Email Adress</span>                        
                </div>
                <img src={persona} alt='persona' style={{width:'25%',borderRadius:'8px'}}></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
