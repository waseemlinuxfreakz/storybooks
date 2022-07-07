import React from 'react';

import ProfileBox from './ProfileBox';


function StartDate() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="startDateCont p15">
                    <h2 className='mb10'>Requirements</h2>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard.
                        text ever since the 1500s.</p>
                </div>
                <div className="startDateCont p15">
                    <h2 className="mb10">Your start date</h2>
                   <div className="dateSelect">
                        <input type="date" />
                   </div>
                </div>
                <br />
                <div className="nex_btn">
                    <a href="#" className='nextBtn'>Next</a>
                </div>
            </div>
        </section>


    );
}

export default StartDate;