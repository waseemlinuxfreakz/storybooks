import React from 'react';

import ProfileBox from './ProfileBox';


function LogActivity() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="contentBox p15">
                    <h2 className=''>Your are participating in this study, thank you!</h2>
                    <h3 className='mb0'>April 20th</h3>
                    <p>Take 2 x when?</p>
                    <p>Thank you, you have logged your activity for this day</p>
                    <div className="nex_btn">
                        <a href="#" className='blackBtn'>Log Activity</a>
                    </div>
                </div>
                <br />
                <div className="contentBox p15">
                    <div className="activityDate">
                        <h2 className='mb0'>April 21st</h2>
                        <p>Take 2 x when?</p>
                    </div>
                    <div className="activityDate">
                        <h2 className='mb0'>April 22nd</h2>
                        <p>Take 2 x when?</p>
                    </div>
                    <div className="activityDate">
                        <h2 className='mb0'>April 23rd</h2>
                        <p>Take 2 x when?</p>
                    </div>
                </div>
                <br />
                <div className="dualBtn">
                    <a href="#" className='nextBtnSmall'>Notification Settings</a>
                    <a href="#" className='nextBtn'>Next</a>
                </div>
            </div>
        </section>


    );
}

export default LogActivity;