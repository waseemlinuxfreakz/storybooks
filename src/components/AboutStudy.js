import React from 'react';

import ProfileBox from './ProfileBox';
import ProfilePic from '../img/profile.jpg';

function AboutStudy() {
    return (
        <section className="aboutStudy_container">
            <div className="container">
                <ProfileBox/>
                <h2 className="title_underline">About The Study</h2>
                <div className="whiteBox ml-15 mr-15">
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard. <br /><br />
                        text ever since the 1500s, when an
                        unknown printer took a galley of type
                        and scrambled it to make a type</p>
                </div>
                <br />
                <br />
                <h2 className="title_underline">About Mark Surname</h2>
                <div className="whiteBox ml-15 mr-15">
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard.
                        text ever since the 1500s.</p>
                </div>
                <div className="studyBottom">
                    <h3 className="secTitleUnder">REDUCE JOINT PAIN</h3>
                    <a href="#" className='nextBtn'>Take Part</a>
                    <a href="#" className='nextBtn'>View Forum</a>
                </div>
            </div>
        </section>
    );
}

export default AboutStudy;