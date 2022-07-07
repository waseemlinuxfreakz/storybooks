import React from 'react';
import ProfileBox from './ProfileBox';
import GraphChart from '../img/graph-chart.png';

function Participating() {
    return ( 
        <section className="section_area">
            <div className="container">
                <ProfileBox />
                <div className="contentBox">
                    <h2 className='mb30'>Your are participating in this study, thank you!</h2>
                    <h3 className='mb10'>Your progress is as follows:</h3>
                </div>
                <div className="graphChart">
                    <img src={GraphChart} alt="GraphChart" />
                </div>
                <br />
                <div className="text-center">
                    <a href="#" className='nextBtn'>View Schedule</a>
                </div>
            </div>
        </section>
     );
}

export default Participating;