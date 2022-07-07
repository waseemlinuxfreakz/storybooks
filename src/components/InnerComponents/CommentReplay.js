import React from 'react';

import ComentMenu from '../../img/more.png';
import ProfilePic from '../../img/profile.jpg';

function ComentReplay() {
    return ( 
        <div className="commentBox comentReplayBox">
            <button className="comment_menu"><img src={ComentMenu} alt="Coment Menu" /></button>
            <div className="comentReplay">
                <img src={ProfilePic} alt="ProfilePic" className='postuser' />
                <div className="discu_user">
                    <h4>Dawn Utrich</h4>
                    <div className="postDate">1 day ago</div>
                </div>
            </div>
            <p>I don’t think that’s a good idea, I suggest you see how the treatment goes first</p>
        </div>
     );
}

export default ComentReplay;