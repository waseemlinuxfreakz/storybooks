import React from 'react';
import ProfileBox from './ProfileBox';

function AllStudies() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='toptile'>Your Studies</h2>
                <ProfileBox />
                <div className="studies_form ViewAllStudies">
                    <form action="#">
                        <div className="searchInput">
                            <input type="search" name='searchStudies' id='searchStudies' />
                            <button type='button' className='searchBtn'>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <h2 className='toptile'>Latest Studies</h2>
                <ProfileBox />
                <ProfileBox />
                <br />
                <div className="studiesBtn text-center">
                    <h2>
                        <a href="#" className='cd'>View all studies</a>
                    </h2>
                    <a href="#" className="fz20 cd">Click here if you have <br />a provate study code</a>
                </div>
            </div>
        </section>
    );
}

export default AllStudies;