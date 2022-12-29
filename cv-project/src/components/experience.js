import React from 'react';
import { Jobs } from './jobs';
import addJob from './addJob';
// import './index.css';

export class Experience extends React.Component {

    render() {

        const newJob = () => {
            document.getElementById('experience').appendChild(addJob())
        } 
        
        return ( 
            <div className='experience' id='experience'>
                <div style={{display:'flex', alignItems:'baseline',justifyContent:'space-between'}}>
                    <span style={{fontSize:'30px', marginRight:'2px'}} id='firstNameSpan'>Experience</span>
                    <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer', marginRight:'2px'}} onClick={newJob}>Add Job</span>
                </div>
                <Jobs/>
            </div>
        )
    }
}
