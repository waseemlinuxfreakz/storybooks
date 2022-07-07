import React from 'react';

import ComentMenu from '../../img/more.png';
import comment from '../../img/comment-regular.svg';
import heart from '../../img/heart-solid.svg';
import ProfilePic from '../../img/profile.jpg';

function ComentBox() {
    return ( 
        
        <div className="commentBox">
            <button className="comment_menu"><img src={ComentMenu} alt="Coment Menu" /></button>
            <img src={ProfilePic} alt="ProfilePic" className='postuser' />
            <div className="discu_user">
                <h4>Amy Barrow</h4>
                <div className="postDate">2 day ago</div>
                <p>Can I take more tablets than prescribed?</p>
                <div className="like_reply">
                    <a href='#' className="like_box">
                        <img src={heart} alt="Liked" className='LikeIcon' />
                        <span>Liked</span>
                    </a>
                    <a href='#' className="coment_box">
                        <img src={comment} alt="comment" className='CommentIcon' />
                        <span>reply</span>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default ComentBox;