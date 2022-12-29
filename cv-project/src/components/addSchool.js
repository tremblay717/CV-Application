import changeSchoolName from './changeSchool';
import changeStudy from './changeStudy';
import changeGraduation from './changeGraduation';
import removeSchool from './removeSchool';
import uuid from 'react-uuid';


export default function addSchool() {

    const school_id = uuid();

    const schoolUl = document.createElement('ul');
    schoolUl.setAttribute('style', 'margin-top:3%');
    schoolUl.id = `School_${school_id}`;

    const schoolNameLi = document.createElement('li');
    schoolNameLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    schoolUl.appendChild(schoolNameLi);

    const schoolNameSpan = document.createElement('span');
    schoolNameSpan.id = `schoolName_${school_id}`;
    schoolNameSpan.style.fontSize = '21px';
    schoolNameSpan.textContent = 'School Name';
    schoolNameLi.appendChild(schoolNameSpan);

    const editSchoolName = document.createElement('span');
    editSchoolName.id = `editSchoolName_${school_id}`;
    editSchoolName.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editSchoolName.addEventListener('click', changeSchoolName);
    editSchoolName.textContent = 'Edit';
    schoolNameLi.appendChild(editSchoolName);

    const removeSchoolName = document.createElement('span');
    removeSchoolName.id = `removeSchool_${school_id}`;
    removeSchoolName.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    removeSchoolName.addEventListener('click', removeSchool);
    removeSchoolName.textContent = 'Remove';
    schoolNameLi.appendChild(removeSchoolName);

    const studyLi = document.createElement('li');
    studyLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    schoolUl.appendChild(studyLi);

    const studySpan = document.createElement('span');
    studySpan.id = `study_${school_id}`;
    studySpan.style.fontSize = '18px';
    studySpan.textContent = 'Title of Study';
    studyLi.appendChild(studySpan);

    const editStudy = document.createElement('span');
    editStudy.id = `editStudy_${school_id}`;
    editStudy.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editStudy.addEventListener('click', changeStudy)
    editStudy.textContent = 'Edit';
    studyLi.appendChild(editStudy);

    const graduationLi = document.createElement('li');
    graduationLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    schoolUl.appendChild(graduationLi);

    const graduationSpan = document.createElement('span');
    graduationSpan.id = `graduation_${school_id}`;
    graduationSpan.style.fontSize = '18px';
    graduationSpan.textContent = 'Graduation Year';
    graduationLi.appendChild(graduationSpan);

    const editGraduation = document.createElement('span');
    editGraduation.id = `editGraduation_${school_id}`;
    editGraduation.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editGraduation.addEventListener('click', changeGraduation);
    editGraduation.textContent = 'Edit';
    graduationLi.appendChild(editGraduation);

    return schoolUl
}