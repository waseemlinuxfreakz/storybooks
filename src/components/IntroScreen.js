import React from 'react';

import IntroScreenLogo from '../img/introScreen.png';

function IntroScreen() {
    return ( 
        <section className="introScreenContainer">
            <div className="container">
                <div className="introScreenConent">
                    <img src={IntroScreenLogo} alt="Intro Screen" />
                </div>
            </div>
        </section>
     );
}

export default IntroScreen;