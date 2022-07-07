import React from 'react';

import ComentBox from './InnerComponents/CommentBox.js';
import PostYourTopic from './InnerComponents/PostYourTopic.js';

import ProfileBox from './ProfileBox';

function PostTopic() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb10'>Post a topic</h2>
                    <p>Please keep your topic relevant and
                        use respect the practitioner and
                        other users of the app.</p>
                    <PostYourTopic />
                    <br />
                    <div className="dualBtn">
                        <a href="#" className="nextBtn">Submit</a>
                        <a href="#" className="nextBtn">Back</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostTopic;