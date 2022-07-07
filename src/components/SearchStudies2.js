import React from 'react';
import ProfileBox from './ProfileBox';
import triangle from '../img/arrow-down.png'

function SearchStudies2() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='toptile'>Search</h2>
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
                <br />
                <div className="searchResultBox searchResultBox2">
                    <h2 className='toptile'>All Studies</h2>
                    <div className="selectPink">
                        <select className="selectOpt" name="StudiesSelect" id="StudiesSelect">
                            <option>Latest</option>
                            <option>Studies</option>
                        </select>
                        <label htmlFor=""><img src={triangle} alt="triangle" /></label>
                    </div>
                    <br />
                    <ProfileBox/>
                    <ProfileBox/>
                </div>
                <br />
                <div className="text-center"><a href="#" className="nextBtn">Back</a></div>
            </div>
        </section>
    );
}

export default SearchStudies2;