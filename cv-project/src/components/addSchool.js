import editSchool from "./editSchool";
import editStudy from "./editStudy";
import editGraduation from "./editGraduation";
import removeSchool from "./removeSchool";
import uuid from 'react-uuid';

export default function addSchool() {

    const education = document.querySelector('.education');

    const school_id = uuid();
    const schoolUl = document.createElement('ul');
    schoolUl.setAttribute('style', 'margin-top:3%; padding:0px');
    schoolUl.id = `School_${school_id}`;
    education.appendChild(schoolUl)

    const schoolNameLi = document.createElement('li');
    schoolNameLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    schoolUl.appendChild(schoolNameLi);

    const schoolNameSpan = document.createElement('span');
    schoolNameSpan.id = `schoolName_${school_id}`;
    schoolNameSpan.style.fontSize = '22px';
    schoolNameSpan.style.fontWeight = '550'
    schoolNameSpan.textContent = 'School Name';
    schoolNameLi.appendChild(schoolNameSpan);

    const editSchoolName = document.createElement('span');
    editSchoolName.id = `editSchoolName_${school_id}`;
    editSchoolName.setAttribute('style', 'font-size:10px;cursor:pointer;');
    editSchoolName.addEventListener('click', editSchool);
    editSchoolName.textContent = 'Edit';
    schoolNameLi.appendChild(editSchoolName);

    const removeSchoolName = document.createElement('span');
    removeSchoolName.id = `removeSchool_${school_id}`;
    removeSchoolName.setAttribute('style', 'font-size:10px;cursor:pointer;');
    removeSchoolName.addEventListener('click', removeSchool);
    removeSchoolName.textContent = 'Remove';
    schoolNameLi.appendChild(removeSchoolName);

    const studyLi = document.createElement('li');
    studyLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    schoolUl.appendChild(studyLi);

    const studySpan = document.createElement('span');
    studySpan.id = `study_${school_id}`;
    studySpan.style.fontSize = '20px';
    studySpan.style.fontWeight = '550'

    studySpan.textContent = 'Title of Study';
    studyLi.appendChild(studySpan);

    const editStudySpan = document.createElement('span');
    editStudySpan.id = `editStudy_${school_id}`;
    editStudySpan.setAttribute('style', 'font-size:10px;cursor:pointer;');
    editStudySpan.addEventListener('click', editStudy)
    editStudySpan.textContent = 'Edit';
    studyLi.appendChild(editStudySpan);

    const graduationLi = document.createElement('li');
    graduationLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    schoolUl.appendChild(graduationLi);

    const graduationSpan = document.createElement('span');
    graduationSpan.id = `graduation_${school_id}`;
    graduationSpan.style.fontWeight = '550'
    graduationSpan.style.fontSize = '20px';
    graduationSpan.textContent = 'Graduation Year';
    graduationLi.appendChild(graduationSpan);

    const editGraduationSpan = document.createElement('span');
    editGraduationSpan.id = `editGraduation_${school_id}`;
    editGraduationSpan.setAttribute('style', 'font-size:10px;cursor:pointer;');
    editGraduationSpan.addEventListener('click', editGraduation);
    editGraduationSpan.textContent = 'Edit';
    graduationLi.appendChild(editGraduationSpan);
}