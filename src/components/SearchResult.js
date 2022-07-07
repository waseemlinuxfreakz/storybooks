import React from 'react';
import ProfileBox from './ProfileBox';

function SearchResult() {
    return (
        <section className="section_area">
            <div className="container">
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
                <br />
                <br />
                <div className="searchResultBox">
                    <p className="fz22">Search results for ‘Weight’</p>
                    <br />
                    <ProfileBox/>
                </div>
                <br />
                <h2 className="text-center"><a href="#" className="cd">View all studies</a></h2>
            </div>
        </section>
    );
}

export default SearchResult;