import React from 'react';
import persona from './Persona.jpg'

export default function CvInfo () {

    return (
        <div className='cvInfo'>
            <div className='personalInfo'>
                <div style={{display:'flex',flexDirection:'column',gap:'25%'}}>
                    <span>Your Name</span>
                    <span>Phone Number</span>
                    <span>Email Adress</span>                        
                </div>
                <img src={persona} alt='persona' style={{width:'25%',borderRadius:'8px'}}></img>
            </div>
        </div>
    )
}

// cv-project/src/components/Persona.jpg
