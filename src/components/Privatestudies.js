import React from 'react';

function Privatestudies() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='toptile whiteBoxTitle' >Private studies <i className="far fa-eye-slash"></i></h2>
                <p className="fz20">
                    Private studies can be set up by
                    practitioners and only people that
                    have a unique invitation code can
                    take part. <br />
                    These are for early trials, or where
                    additional support is being provided
                    by that practitioner that is not
                    supported by that app yet, so the
                    app is just used for tracking.
                </p>
                <br />
                <p className="fz20">If you have a code please enter it
                    below:
                </p>
                <br />
                <div className="codeSubmit">
                    <form action="#">
                        <div className="inputCol enterCode">
                            <input type="text" placeholder='Enter code' />
                        </div>
                        <br />
                        <div className="text-center">
                        <button className='next_button'>Submit</button>
                        </div>
                    </form>
                </div>
                <br />
                <div className="text-center">
                    <a href="#" className='nextBtn'>Back to your studies</a>
                </div>
            </div>
        </section>
    );
}

export default Privatestudies;