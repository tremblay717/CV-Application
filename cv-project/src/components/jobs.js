import React from 'react';
import changeCompanyName from './changeCompanyName';
import changeTitle from './changeTitle';
import changeStart from './changeStart';
import changeEnd from './changeEnd';

import uuid from 'react-uuid';

export class Jobs extends React.Component {
    
    render() {
     
        function firstJob () {

            const job_id = uuid()
            
            const Company = (
                <div>
                    <ul id={`Company_${job_id}`}>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`companyName_${job_id}`}>Company Name</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editCompanyName_${job_id}`} onClick={changeCompanyName}>Edit</span>
                        </li>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`Title_${job_id}`}>Title of Job</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editTitle_${job_id}`} onClick={changeTitle}>Edit</span>
                        </li>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`Start_${job_id}`}>Starting Date</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editStart_${job_id}`} onClick={changeStart}>Edit</span>
                        </li>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`End_${job_id}`}>Finishing Date</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editEnd_${job_id}`} onClick={changeEnd}>Edit</span>
                        </li>
                    </ul> 
                </div>
            )

            return Company
        }
        return  <div> {firstJob()}</div>
    }
}
