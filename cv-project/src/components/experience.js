import React from 'react';
import { Jobs } from './jobs';
// import './index.css';

export class Experience extends React.Component {
    render() {

        return ( 
            <div className='experience' id='experience'>
            <div style={{display:'flex', alignItems:'baseline',justifyContent:'space-between'}}>
                <span style={{fontSize:'30px', marginRight:'2px'}} id='firstNameSpan'>Experience</span>
                <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}}>Add Job</span>
            </div>
            <Jobs/>
            <section id='educationSection'></section>
        </div>
        )
    }
}
