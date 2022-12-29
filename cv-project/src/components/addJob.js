import changeCompanyName from './changeCompanyName';
import changeTitle from './changeTitle';
import changeStart from './changeStart';
import changeEnd from './changeEnd';
import removeJob from './removeJob';

import uuid from 'react-uuid';


export default function addJob () {

    const company_id = uuid();

    const companyUl = document.createElement('ul');
    companyUl.setAttribute('style', 'margin-top:3%');
    companyUl.id = `Company_${company_id}`;

    const companyNameLi = document.createElement('li');
    companyNameLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    companyUl.appendChild(companyNameLi);

    const companyNameSpan = document.createElement('span');
    companyNameSpan.id = `companyName_${company_id}`;
    companyNameSpan.style.fontSize = '21px';
    companyNameSpan.textContent = 'Company Name';
    companyNameLi.appendChild(companyNameSpan);

    const editCompanyName = document.createElement('span');
    editCompanyName.id = `editCompanyName_${company_id}`;
    editCompanyName.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editCompanyName.addEventListener('click', changeCompanyName);
    editCompanyName.textContent = 'Edit';
    companyNameLi.appendChild(editCompanyName);

    const removeCompany = document.createElement('span');
    removeCompany.id = `remove_${company_id}`;
    removeCompany.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    removeCompany.addEventListener('click', removeJob);
    removeCompany.textContent = 'Remove';
    companyNameLi.appendChild(removeCompany);

    const titleLi = document.createElement('li');
    titleLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    companyUl.appendChild(titleLi);

    const titleSpan = document.createElement('span');
    titleSpan.id = `Title_${company_id}`;
    titleSpan.style.fontSize = '18px';
    titleSpan.textContent = 'Job Title';
    titleLi.appendChild(titleSpan);

    const editTitle = document.createElement('span');
    editTitle.id = `editTitle_${company_id}`;
    editTitle.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editTitle.addEventListener('click', changeTitle)
    editTitle.textContent = 'Edit';
    titleLi.appendChild(editTitle);

    const startLi = document.createElement('li');
    startLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    companyUl.appendChild(startLi);

    const startSpan = document.createElement('span');
    startSpan.id = `Start_${company_id}`;
    startSpan.style.fontSize = '18px';
    startSpan.textContent = 'Starting Date';
    startLi.appendChild(startSpan);

    const editStart = document.createElement('span');
    editStart.id = `editStart_${company_id}`;
    editStart.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editStart.addEventListener('click', changeStart);
    editStart.textContent = 'Edit';
    startLi.appendChild(editStart);

    const endLi = document.createElement('li');
    endLi.setAttribute('style', 'display:flex;flex-direction:row; align-items:center;');
    companyUl.appendChild(endLi);

    const endSpan = document.createElement('span');
    endSpan.id = `End_${company_id}`;
    endSpan.style.fontSize = '18px';
    endSpan.textContent = 'Finishing Date';
    endLi.appendChild(endSpan);

    const editEnd = document.createElement('span');
    editEnd.id = `editEnd_${company_id}`;
    editEnd.setAttribute('style', 'font-size:15px;cursor:pointer;text-decoration:underline;');
    editEnd.addEventListener('click', changeEnd);
    editEnd.textContent = 'Edit';
    endLi.appendChild(editEnd);

    return companyUl
}