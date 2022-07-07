import React from 'react';

function AccountdetailsCong() {
    return (
        <section className='section_area'>
            <div className="container">
                <h2 className='text-center toptile'>Congratulations!</h2>
                <div className="contentBox">
                    <h3 className='fwn'>Hello, <br />
                        first name, last name,
                        here you can manage your
                        account.</h3>
                </div>
                <br />
                <br />
                <div className="accountDetailsBox">
                    <a href='#' className="account_detailbox">
                        <div className="account_left_icon"><i className="fas fa-user-cog"></i></div>
                        <div className="account_content">
                            <h2>Account details</h2>
                            <p>Manage your name and email address</p>
                        </div>
                        <div className="account_froword"><i className="fas fa-chevron-right"></i></div>
                    </a>
                    <br />
                    <a href='#' className="account_detailbox">
                        <div className="account_left_icon"><i className="far fa-address-card"></i></div>
                        <div className="account_content">
                            <h2>Personal details</h2>
                            <p>Personal details you have entered during studies</p>
                        </div>
                        <div className="account_froword"><i className="fas fa-chevron-right"></i></div>
                    </a>
                    <br />
                    <a href='#' className="account_detailbox">
                        <div className="account_left_icon"><i className="fas fa-envelope"></i></div>
                        <div className="account_content">
                            <h2>Communication settings</h2>
                            <p>Manage the emails you receive from us</p>
                        </div>
                        <div className="account_froword"><i className="fas fa-chevron-right"></i></div>
                    </a>
                    <br />
                    <a href='#' className="account_detailbox">
                        <div className="account_left_icon"><i className="fas fa-file-alt"></i></div>
                        <div className="account_content">
                            <h2>Terms of use</h2>
                            <p>Manage the emails you receive from us</p>
                        </div>
                        <div className="account_froword"><i className="fas fa-chevron-right"></i></div>
                    </a>
                    <br />
                </div>
                <br />
                <br />
                <div className="text-center loginHere">
                    <a href="#">Click here if you are a Practitioner</a>
                </div>
                <br />
                <br />
                <div className="text-center">
                    <a href="#" className='nextBtn'>Logout</a>
                </div>
            </div>
        </section>
    );
}

export default AccountdetailsCong;