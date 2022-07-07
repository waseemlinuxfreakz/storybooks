import React from 'react';

import Eye from '../img/eye-regular.svg';

function VerificationPassword() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='text-center toptile'>Please enter verification</h2>
                <br />
                <br />
                <div className="formContainer existLogin">
                    <form action="#">
                        <div className="inputCol fz18">
                            If this email address existed on our
                            database then we would have sent it
                            a verification code
                        </div>
                        <br />
                        <div className="inputCol">
                            <input type="password" name='Verificationcode' id='Verificationcode' placeholder='Verification code' />
                            <img src={Eye} alt="Eye" className='inputIcon eye' />
                        </div>
                        <br />
                        <div className="formNext">
                            <button className='next_button'>Submit</button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <div className="loginHere">
                    <a href="#">No verification code, or not working?</a>
                    <br />
                    <br />
                    <a href="#">Please check your email, junk
                        folder or return to the previous
                        step to try sending again.</a>
                </div>
            </div>
        </section>
    );
}

export default VerificationPassword;