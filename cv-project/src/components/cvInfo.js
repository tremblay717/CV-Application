import React from 'react';
import image from './Persona.jpg'
// import './index.css';

export class CvInfo extends React.Component {
    render() {

        function persona() {
            return <img src={image} alt='persona' width={'25%'} />
        }
        
        return ( 
            <div className = 'cvInfo'>
                <div className='cvInfoTop'>
                    <span style={{fontSize:'45px'}}>Curriculum Vitae</span>
                    {persona()}
                </div>
            </div>         
        )
    }
}