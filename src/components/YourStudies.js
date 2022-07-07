import React from 'react';
import ProfileBox from './ProfileBox';


function YourStudies() {
    return ( 
        <section className="section_area">
            <div className="container">
                <h2 className="toptile">Your Studies</h2>
                <div className="studies_search_area">
                    <p className="fz20">you are currenty not taking part in a study, but search for one below.</p>
                    <div className="studies_form">
                        <form action="#">
                            <div className="searchInput">
                                <input type="search" name='searchStudies' id='searchStudies' />
                                <button type='button' className='searchBtn'>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="searchResult">
                        <h2>Latest Studies</h2>
                        <ProfileBox/>
                        <ProfileBox/>
                    </div>
                    <br />
                    <div className="studiesBtn text-center">
                        <h2 className="text-center">
                            <a href="#" className='cd'>View all studies</a>
                        </h2>
                        <a href="#" className='fz20 cd'>
                        Click here if you have <br />a provate study code
                        </a>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default YourStudies;