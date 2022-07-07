import React from 'react';
import CreateProfileSteep1 from './InnerComponents/CreateProfileFormSteep1';

function CreateProfileAcc() {
    return (
        <section className='section_area'>
            <div className="container">
                <h2 className='text-center toptile'>Create Profile</h2>
                <div className="profileContentBox">
                    <p>
                        To take part in the studies, you’ll
                        need to be over 18 years of age.
                        If you create an account we can keep
                        you updated with new studies as
                        they are introduced to the app and
                        apply to be a practitioner.
                        <br /><br />
                        Please provide the following
                        information below to create an
                        account:
                    </p>
                </div>
                        <br />
                <div className="formContainer CreateProfileForm">
                    <form action="#" id='createPfofile'>
                        <CreateProfileSteep1/>
                        <div className="formNext">
                            <button className='next_button'>Next</button>
                        </div>
                    </form>
                </div>  
                <br />
                <br />
                <div className="loginHere text-center">
                    <a href="#">Existing user? Login here</a>
                </div>
                <br />
                <br />
                
            </div>
        </section>
    );
}

export default CreateProfileAcc;