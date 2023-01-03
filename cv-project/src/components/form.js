import React from 'react';

export default function CvForm () {


    return (
        <div className='cvForm'>
            <form>
                <ul>
                    <li>
                        <label>First Name</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Surname</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Phone number</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Email Adress</label>
                        <input></input>
                    </li>
                    <button>Add Personal Info</button>
                </ul>
            </form>
        </div>
    )
}
