import React from 'react';

import BackLeft from '../img/left-arrow.png';
import MoreBtn from '../img/more.png';

function TopNavigation() {
    return ( 
        <div className="navigation_container">
            <div className="container">
                <div className="topnavigateContainer">
                    <button className="leftArrow">
                        <img src={BackLeft} alt="Left Arrow" />
                    </button>
                    <div className="moreBtn">
                        <img src={MoreBtn} alt="More" className="more_btn" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default TopNavigation;