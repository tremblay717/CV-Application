import React from 'react';
import { GenInfo } from './genInfo';
import { Education } from './education';
import { Experience } from './experience';
// import './index.css';

export class CvForm extends React.Component {
    render() {
        return ( 
            <div className='cvForm'>
                <GenInfo/>
                <Education/>
                <Experience/>
            </div>
        )
    }
}
