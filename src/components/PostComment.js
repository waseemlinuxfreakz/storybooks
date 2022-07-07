import React from 'react';

import ComentBox from './InnerComponents/CommentBox.js';
import PostyourComment from './InnerComponents/PostyourComment.js';

import ProfileBox from './ProfileBox';

function PostComment() {
    return ( 
        <section className="section_area">
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>  
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb10'>Recently active topics</h2>
                    <div className="white_comentBox">
                        <ComentBox/>
                    </div>
                    <br />
                    <br />
                    <PostyourComment/>
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

export default PostComment;