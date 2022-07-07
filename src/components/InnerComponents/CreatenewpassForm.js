import React from 'react';

import Eye from '../../img/eye-regular.svg';
import EyeSlash from '../../img/eye-slash-regular.svg';

function CreateNewPassForm() {
    return (
        <div className="formSteep1">
            <div className="inputCol">
                <input type="email" name='profile-Email' id='profile-Email' placeholder='Email Address' />
            </div>
            <div className="inputCol">
                <input type="password" name='CreateFirstPass' id='CreateFirstPass' placeholder='Password' />
                <img src={Eye} alt="Eye" className='inputIcon eye' />
            </div>
            <p className='inputCol'>Create a password, make sure
                it’s secure and contains: <br />
                - At least 8 characters<br />
                - At least 1 lowercase, 1<br />
                UPPERCASE, a number 0-9<br />
                and a special character</p>
            <div className="inputCol">
                <input type="password" name='CreateRepeatPass' id='CreateRepeatPass' placeholder='Password repeat' />
                <img src={EyeSlash} alt="Eye" className='inputIcon eye' />
            </div>
            <br />
            <div className="formNext">
                <button className='next_button'>Submit</button>
            </div>
        </div>
    );
}

export default CreateNewPassForm;