import React from 'react';
import { CvForm } from './cvForm';
import { CvInfo } from './cvInfo';
// import './index.css';

export class Cv extends React.Component {
    render() {
        return (
            <div className='cvSection'>
                <CvForm/>
                <CvInfo/>
            </div>
        )
    }
}
