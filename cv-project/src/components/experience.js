import React from 'react';
// import './index.css';

export class Experience extends React.Component {
    render() {
        return ( 
            <div className='experience'>
                <span className='info'>Relevant Experience</span>
                <ul>
                    <li>
                        <label>Company Name</label>
                        <input style={{width:'40%'}}></input>
                    </li>
                    <li>
                        <label>Position Title</label>
                        <input style={{width:'40%'}}></input>
                    </li>
                    <li>
                        <label>Main Tasks</label>
                        <textarea style={{width:'65%', height:'70px', padding:'2%'}}></textarea>
                    </li>
                    <li>
                        <label>Starting Date</label>
                        <input style={{width:'20%'}}></input>
                    </li>
                    <li>
                        <label>Ending Date</label>
                        <input style={{width:'20%'}}></input>
                    </li>
                </ul>
            </div>
        )
    }
}
