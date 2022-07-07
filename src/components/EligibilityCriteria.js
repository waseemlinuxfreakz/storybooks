import React from 'react';

import ProfileBox from './ProfileBox';

import checksolid from '../img/check-solid.svg';
import triangle from '../img/arrow-down.png'

function EligibilityCriteria() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="whiteBox ml-15 mr-15">
                    <h2 className='mb10'>Eligibility Criteria</h2>
                    <p>Age - from x to y condition??</p>
                </div>
                <br />
                <h3 className='mb0'>Some details needed about you.</h3>
                <br />
                <br />
                <div className="whiteBox ml-15 mr-15">
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard.
                        text ever since the 1500s.</p>
                </div>
                <div className="selectyear p15">
                    <h2 className='mb10'>Your year of birth.</h2>
                    <form action="" id='birthYearSelect'>
                        <div className="selectPink">
                            <select name="birthYear" id="birthYear" className='selectOpt'>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                            </select>
                            <label htmlFor=""><img src={triangle} alt="triangle" /></label>
                        </div>
                        <br />
                        <div className="checkAggree">
                            <input type="checkbox" name='overYear' id='overYear' />
                            <label htmlFor="overYear">
                                <span><img src={checksolid} alt="checksolid" /></span>
                                I am over 18 and agrees to the terms and conditions of use.
                            </label>
                        </div>
                    </form>
                </div>
                <br />
                <div className="nex_btn">
                    <a href="#" className='nextBtn'>Next</a>
                </div>
            </div>
        </section>


    );
}

export default EligibilityCriteria;