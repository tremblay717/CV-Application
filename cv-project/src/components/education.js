import React from 'react';
// import './index.css';

export class Education extends React.Component {
    render() {
        return ( 
            <div className='topInfo'>
                <span className='info'>Education</span>
                <ul>
                    <li>
                        <label>School Name</label>
                        <input style={{width:'40%'}}></input>
                    </li>
                    <li>
                        <label>Title of Study</label>
                        <input style={{width:'40%'}}></input>
                    </li>
                    <li>
                        <label>Graduation  Date</label>
                        <input style={{width:'40%'}}></input>
                    </li>
                </ul>
            </div>
        )
    }
}
