import React from 'react';

import ProfileBox from './ProfileBox';


function ViewProgress() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb10'>Your are participating in <br />  this study, thank you!</h2>
                    <h3 className='mb10'>Your schedule is as follows:</h3>
                </div>
                <div className="contentBox p15">
                    <div className="activityDate viewProgressActive">
                        <h2 className='mb0'>April 21st</h2>
                        <p>Take 2 x when?</p>
                        <div className="view_progress">
                            <p>Thank you, you have logged your activity for this day</p>
                            <a href="#" className='nextBtn'>View Progress</a>
                        </div>
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
                <div className="text-center">
                    <a href="#" className='nextBtn'>Next</a>
                </div>
            </div>
        </section>


    );
}

export default ViewProgress;