import React from 'react';
import { CvInfo } from './cvInfo';
// import './index.css';

export class Cv extends React.Component {
    render() {
        return (
            <div className='cvSection'>
                <CvInfo/>
            </div>
        )
    }
}
