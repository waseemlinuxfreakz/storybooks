import React from 'react';

function AccountLogoutBox() {
    return (
        <section className='section_area'>
            <div className="container">
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
                <div className="logutPopup">
                    <p>Are you sure, <br />you want to logout?</p>
                    <div className="louOutBtn">
                        <a href="#" className='logCancel'>Cancel</a>
                        <a href="#" className='logOut'>Logout</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AccountLogoutBox;