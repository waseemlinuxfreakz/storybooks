import React from 'react';

import EyeSlash from '../img/eye-slash-regular.svg';

function Existinguserlogin() {
    return ( 
        <section className="section_area">
            <div className="container">
                <h2 className='text-center toptile'>Please verify your email</h2>
                <br />
                <br />
                <div className="formContainer existLogin">
                    <form action="#">
                        <div className="inputCol fz18">
                            Please enter your email and password to login:
                        </div>
                        <br />
                        <div className="inputCol">
                            <input type="email" name='login-Email' id='login-Email' placeholder='Email Address' />
                        </div>
                        <div className="inputCol">
                            <input type="password" name='loginPass' id='loginPass' placeholder='Password' />
                            <img src={EyeSlash} alt="Eye" className='inputIcon eye' />
                        </div>
                        <br />
                        <div className="formNext">
                            <button className='next_button'>Submit</button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <div className="loginHere text-center"><a href="#">Forgotten password?</a></div>
            </div>
        </section>
     );
}

export default Existinguserlogin;