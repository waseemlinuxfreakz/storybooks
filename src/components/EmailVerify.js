import React from 'react';

import checkIcon from '../img/check-solid.svg';

function EmailVerify() {
    return (
        <section className='section_area'>
            <div className="container">
                <h2 className='text-center toptile'>Please verify your email</h2>
                <br />
                <br />
                <div className="contentBox">
                    <p className='fz18'>
                        You have been sent an email, please
                        click this link to verify your account
                        so you can take part in studies, and
                        receive email notifications. <br /><br />
                        We will not mindlesslely spam you
                        with emails or market to you, we
                        would just like to share with you the
                        new studies that come to the app or
                        share some delightful success stories
                        and news, please advise which
                        emails you would like to receive, and
                    </p>
                </div>
                <br />
                <br />
                <br />
                <div className="formContainer emailVerify">
                    <form action="#">
                        <div className="checkAggree">
                            <input type="checkbox" name="newMail" id="newMail" />
                            <label for="newMail">
                                <span><img src={checkIcon} alt="checksolid" /></span>
                                New study emails
                            </label>
                        </div>
                        <br />
                        <div className="checkAggree">
                            <input type="checkbox" name="Experiment" id="Experiment" />
                            <label for="Experiment">
                                <span><img src={checkIcon} alt="checksolid" /></span>
                                Experiment news
                            </label>
                        </div>
                        <br />
                        <br />
                        <div className="formNext">
                            <button className='next_button'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default EmailVerify;