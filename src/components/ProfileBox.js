import React from 'react';

import ProfilePic from '../img/profile.jpg';

function ProfileBox() {
    return (

        <div className="profileBox">
            <img src={ProfilePic} alt="profileImg" className="profileImg" />
            <div className="profileCont">
                <h3 className="secTitleUnder">REDUCE JOINT PAIN</h3>
                <h4>BY MARK SURNAME</h4>
                <p>Reduce joint pain in less than 3
                    months, better than prescribed
                    painkillers</p>
            </div>
        </div>
    );
}

export default ProfileBox;