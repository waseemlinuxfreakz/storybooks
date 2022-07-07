import React from 'react';

import ComentBox from './InnerComponents/CommentBox.js';
import ComentReplay from './InnerComponents/CommentReplay.js';


import ProfileBox from './ProfileBox';

import Pencil from '../img/pencil-alt-solid.svg';

function DiscussiononReplay2() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>  
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb10'>Recently active topics</h2>
                    <ComentBox/>
                    <div className="coment_replayBox">
                        <ComentReplay/>
                        <ComentReplay/>
                    </div>
                    <br />
                    <div className="dualBtn">
                        <a href="#" className="black_button">
                            Post a topic
                            <span className='editPencil'><img src={Pencil} alt="Pencil" /></span>
                        </a>
                        <a href="#" className="black_button">Back to forum</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiscussiononReplay2;