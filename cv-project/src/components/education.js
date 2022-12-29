import React from 'react';
import { Schools } from './schools';
import addSchool from './addSchool';

export class Education extends React.Component {

        render() {  
            const newSchool = () => {
                document.getElementById('education').appendChild(addSchool())
            } 
            
            return ( 
                <div className='education' id='education'>
                    <div style={{display:'flex', alignItems:'baseline',justifyContent:'space-between'}}>
                        <span style={{fontSize:'30px', marginRight:'2px'}} id='firstNameSpan'>Education</span>
                        <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} onClick={newSchool}>Add School</span>
                    </div>
                    <Schools/>
                    <section id='educationSection'></section>
                </div>
            )
    }
}
