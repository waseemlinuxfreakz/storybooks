import React from 'react';
import CreateProfileSteepFinal from './InnerComponents/CreateProfileFormSteepfinal';

function CreateProfileAccFinal() {
    return (
        <section className='section_area'>
            <div className="container">
                <h2 className='text-center toptile'>Create Profile-Final Step</h2>
                <div className="profileContentBox">
                    <p className='fz18'>
                        Please create your email address and
                        create a secure pass word. <br /><br />
                        We will then email you a verification
                        link to confirm your account:
                    </p>
                </div>
                <br />
                <div className="formContainer CreateProfileForm">
                    <form action="#" id='createPfofile'>
                        <CreateProfileSteepFinal />
                        <div className="formNext">
                            <button className='next_button'>Next</button>
                        </div>
                    </form>
                </div>
                <br />
                <br />

            </div>
        </section>
    );
}

export default CreateProfileAccFinal;