import React from 'react';

import EyeSlash from '../img/eye-slash-regular.svg';

function ResetPassword() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='text-center toptile'>Reset password</h2>
                <br />
                <br />
                <div className="formContainer existLogin">
                    <form action="#">
                        <div className="inputCol fz18">
                            Please enter your email address here
                            and we’ll send you a code that you
                            can use within 5 minutes to you
                            reset your password
                        </div>
                        <br />
                        <div className="inputCol">
                            <input type="email" name='reset-Email' id='reset-Email' placeholder='Email Address' />
                        </div>
                        <br />
                        <div className="formNext">
                            <button className='next_button'>Submit</button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <div className="loginHere text-center"><a href="#">Try and login again instead</a></div>
            </div>
        </section>
    );
}

export default ResetPassword;