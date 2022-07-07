import React from 'react';

import ProfileBox from './ProfileBox';


function Confirmation() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="contentBox p15">
                    <h3 className='secTitleUnder'>Confirmation</h3>
                    <p>Your participation in the study will
                        commence on the 20th April 2022. <br /><br />
                        You will need to have bought the
                        following:<br /><br />
                        XXXX<br /><br />
                        You will need to take X of Y - Z times a day
                        for W days, and receive app notification
                        reminders to administer and these and
                        report your progress.<br /><br />
                        Each day we will need you to log that you
                        have taken the required dose on that day
                        and record how you are feeling in the app
                        as we us this to track your progression.</p>
                        <br /><br />
                        <p>Click below to see your schedule</p>
                </div>
                <br />
                <div className="nex_btn">
                    <a href="#" className='nextBtn'>View Schedule</a>
                </div>
            </div>
        </section>


    );
}

export default Confirmation;