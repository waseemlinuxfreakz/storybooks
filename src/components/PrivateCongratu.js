import React from 'react';
import ProfileBox from './ProfileBox';


function PrivateCongratu() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='toptile whiteBoxTitle' >Private studies <i className="far fa-eye-slash"></i></h2>
                <p className="fz20">Congratulations, you now have private access to the following study</p>
                <br />
                <ProfileBox/>
                <div className="text-center">
                    <a href="#" className='nextBtn'>Back to your studies</a>
                </div>
            </div>
        </section>
    );
}

export default PrivateCongratu;