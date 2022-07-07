import React from 'react';
import ProfileBox from './ProfileBox';

function AboutUser() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>  
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb10'>About Mark Surname</h2>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard.
                        text ever since the 1500s.</p>
                </div>
                <br />
                <br />
                <h2 className="mb10">Studies by Mark Surname</h2>
                <div className="whiteSQbox">
                    <h3 className='secTitleUnder'>Study 2 Name</h3>
                    <p>Eirmod tempor invidunt utlabore et dolore.</p>
                    <a href="#" className='nextBtn centerBtn'>View Study</a>
                </div>
                <br />
                <div className="whiteSQbox">
                    <h3 className='secTitleUnder'>Study 2 Name</h3>
                    <p>Eirmod tempor invidunt utlabore et dolore.</p>
                    <a href="#" className='nextBtn centerBtn'>View Study</a>
                </div>
            </div>
        </section>
    );
}

export default AboutUser;