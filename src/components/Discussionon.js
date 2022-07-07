import React from 'react';

import ComentBox from './InnerComponents/CommentBox.js';

import ProfileBox from './ProfileBox';

import Pencil from '../img/pencil-alt-solid.svg';

function Discussionon() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>  
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb10'>About the discussions</h2>
                    <p>All users can read the forum, but only
                        participants can post and comment on
                        the forums</p>
                    <h2 className='mb10'>Recently active topics</h2>
                    <ComentBox/>
                    <br />
                    <ComentBox/>
                    <br />
                    <div className="dualBtn">
                        <a href="#" className="white_button">
                            Post a topic
                            <span className='editPencil'><img src={Pencil} alt="Pencil" /></span>
                        </a>
                        <a href="#" className="white_button">Back to study</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discussionon;