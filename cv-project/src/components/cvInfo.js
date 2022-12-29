import React from 'react';
import image from './Persona.jpg'
import { Name } from './Name';
import { Email } from './email';
import { Phone } from './phone';
import { Education } from './education';
// import './index.css';

export class CvInfo extends React.Component {
    render() {
        function persona() {
            return <img src={image} alt='persona' width={'15%'} />
        }
     
        return ( 
            <div className = 'cvInfo'>
                <div className='cvInfoTop'>
                    <div className='intro'>
                        <span style={{fontSize:'45px'}}>Curriculum Vitae</span>
                        <Name/>
                        <div className='emailPhone'>
                            <Email/>
                            <Phone/>
                        </div>
                    </div>
                    {persona()}
                </div>
                <Education/>
            </div>         
        )
    }
}