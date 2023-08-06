import React from 'react';
import './style/nav.css';
function Nav() {
    return (
        <>
            <nav>
                <div className="club-name">
                    <img src="./assets/pause-logo.jpg" alt="logo" style={{ height: '50px' }} />
                    <h3>PAUSE</h3>
                </div>
                <div className="pages">
                    <span>Home</span>
                    <span>Band</span>
                    <span>Gallery</span>
                    <span>Contact Us</span>
                    <span>Join Us</span>
                </div>
            </nav>
        </>
    );
}

export default Nav;
