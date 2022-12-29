import React from 'react';
// import './index.css';

export class HeadBar extends React.Component {
    render() {
        return ( 
            <div className='headBar'>
                <span className='headBarSpan'>CV Application</span>
                <span className='headBarSpan' id='headBarSpan'>Welcome @guest</span>
            </div>

        )
    }
}
