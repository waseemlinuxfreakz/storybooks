import React from 'react';
import CreateNewPassForm from './InnerComponents/CreatenewpassForm';

function CreateNewPassword() {
    return (
        <section className='section_area'>
            <div className="container">
                <h2 className='text-center toptile'>Please create a new password</h2>
                <div className="profileContentBox">
                    <p className='fz18'>
                        The verification code was correct,
                        please enter a new password to
                        proceed:
                    </p>
                </div>
                <br />
                <div className="formContainer CreateProfileForm">
                    <form action="#" id='createPfofile'>
                        <CreateNewPassForm />
                    </form>
                </div>
                <br />
                <br />

            </div>
        </section>
    );
}

export default CreateNewPassword;