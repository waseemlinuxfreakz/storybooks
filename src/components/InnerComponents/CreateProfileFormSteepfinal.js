import React from 'react';

import Eye from '../../img/eye-regular.svg';
import EyeSlash from '../../img/eye-slash-regular.svg';
import checkIcon from '../../img/check-solid.svg';

function CreateProfileSteepFinal() {
    return (
        <div className="formSteep1">
            <div className="inputCol">
                <input type="email" name='profile-Email' id='profile-Email' placeholder='Email Address' />
            </div>
            <div className="inputCol">
                <input type="password" name='FirstPass' id='FirstPass' placeholder='Password' />
                <img src={Eye} alt="Eye" className='inputIcon eye' />
            </div>
            <p className='inputCol'>Create a password, make sure
                it’s secure and contains: <br />
                - At least 8 characters<br />
                - At least 1 lowercase, 1<br />
                UPPERCASE, a number 0-9<br />
                and a special character</p>
            <div className="inputCol">
                <input type="password" name='RepeatPass' id='RepeatPass' placeholder='Password repeat' />
                <img src={EyeSlash} alt="Eye" className='inputIcon eye' />
            </div>
            <br />
            <div className="checkAggree w90">
                <input type="checkbox" name="over18" id="over18" />
                <label for="over18">
                    <span><img src={checkIcon} alt="checksolid" /></span>
                    I am over 18 and agrees to the terms and conditions of use.
                </label>
            </div>
        </div>
    );
}

export default CreateProfileSteepFinal;