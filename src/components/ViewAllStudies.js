import React from 'react';
import ProfileBox from './ProfileBox';


function ViewAllStudies() {
    return ( 
        <section className="section_area">
            <div className="container">
                <div className="contentBox">
                    <h2 className='toptile'>Your Studies</h2>
                    <ProfileBox/>
                </div>
                <br />
                <br />
                <div className="contentBox">
                    <h2 className='toptile'>Latest Studies</h2>
                    <ProfileBox/>
                </div>
                <br />
                <div className="contentBox">
                    <h2 className='toptile'>Studies</h2>
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
                </div>
                <br />
                <br />
                <br />
                <h2 className='text-center'>
                    <a href="#" className='cd'>View all studies</a>
                </h2>
                <div className="text-center"><a href="#" className="nextBtn">Back</a></div>
            </div>
        </section>
     );
}

export default ViewAllStudies;