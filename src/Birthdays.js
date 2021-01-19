import { Avatar } from '@material-ui/core';
import React from 'react';
import './Birthdays.css';

function Birthdays({profileSrc,title}) {
    return (
        <div className='birthdays'>
            <Avatar className="birthdays__avatar" src={profileSrc} />
            <h5>{title}</h5> 
        </div>
    );
}

export default Birthdays;
