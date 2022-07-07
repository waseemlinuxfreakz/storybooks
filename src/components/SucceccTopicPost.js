import React from 'react';

import ProfileBox from './ProfileBox';

import TopicSuccess from './InnerComponents/topicSuccess.js';

function SuccessTopiPost() {
    return ( 
        <section className='section_area'>
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>  
                <ProfileBox/>
                <br />
                <TopicSuccess/>
                <br />
                <div className="text-center">
                    <a href="#" className="nextBtn">View</a>
                </div>
            </div>
        </section>
     );
}

export default SuccessTopiPost;