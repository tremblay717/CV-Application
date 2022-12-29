import React from 'react';
// import './index.css';

export class GenInfo extends React.Component {
    render() {
        return ( 
            <div className='topInfo'>
                <span className='info'>Personal Information</span>
                <ul>
                    <li>
                        <label>First Name</label>
                        <input style={{width:'45%'}}></input>
                    </li>
                    <li>
                        <label>Last Name</label>
                        <input style={{width:'45%'}}></input>
                    </li>
                    <li>
                        <label>Email Adress</label>
                        <input style={{width:'45%'}}></input>
                    </li>
                    <li>
                        <label type='number'>Phone Number</label>
                        <input style={{width:'45%'}}></input>
                    </li>
                </ul>
            </div>
        )
    }
}
