import React from 'react';

import ProfileBox from './ProfileBox';


function SelectPain() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="contentBox p15">
                    <h2 className='mb10'>Logging activity for <br />April the 20th.</h2>
                    <div className="whiteBox boRa text-center">
                        <h2 className=''>Did you take X or Y?</h2>
                        <div className="alignBtn">
                            <a href="#" className='nextBtn'>Yes</a>
                            <a href="#" className='whiteBtn'>No</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox p15">
                    <p>How is your pain feeling today on a
                        scale of 0 to 10, where 0 no pain and
                        10 is really bad pain?
                    </p>
                </div>
                <div className="whiteBox boRa selectRangeBox">
                    <p>Select right mark then click to submit.</p>
                    <div className="selectRange">
                        <input type="range" min="0" max="20" className='range-style' />
                    </div>
                </div>
                <br />
                <br />
                <div className="text-center">
                    <a href="#" className='nextBtn'>Submit</a>
                </div>
            </div>
        </section>
    );
}

export default SelectPain;