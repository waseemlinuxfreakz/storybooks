import React from 'react';

// import HomeIcon from '../img/home.png';
// import SearchIcon from '../img/search.png';
// import userIcon from '../img/user.png';

function FooterNavigation() {
    return ( 
        <footer className="FooterNavigation">
            <div className="container">
                <div className="footeNavigateCont">
                    <div className="homeMenu">
                        <a href="#"><i className="fas fa-home"></i></a>
                    </div>
                    <div className="search_icon">
                        <button className="searchTriger">
                        <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="UserIcon">
                        <a href="#"><i className="far fa-user-circle"></i></a>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default FooterNavigation;