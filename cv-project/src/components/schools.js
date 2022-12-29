import React from 'react';
import changeSchoolName from './changeSchool';
import changeStudy from './changeStudy';
import changeGraduation from './changeGraduation';
import uuid from 'react-uuid';

export class Schools extends React.Component {
    
    render() {
     
        function firstSchool () {

            const school_id = uuid()
            
            const school = (
                <div>
                    <ul id={`School_${school_id}`}>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`schoolName_${school_id}`}>School Name</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editSchoolName_${school_id}`} onClick={changeSchoolName}>Edit</span>
                        </li>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`study_${school_id}`}>Title of Study</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editStudy_${school_id}`}_ onClick={changeStudy}>Edit</span>
                        </li>
                        <li style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                            <span style={{fontSize:'18px'}} id={`graduation_${school_id}`}>Graduation Year</span>
                            <span style={{fontSize:'15px', textDecoration:'underline',cursor:'pointer'}} id={`editGraduation_${school_id}`} onClick={changeGraduation}>Edit</span>
                        </li>
                    </ul> 
                </div>
            )

            return school
        }
        return  <div> {firstSchool()}</div>
    }
}
