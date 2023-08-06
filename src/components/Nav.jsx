import React from 'react';
import './style/nav.css';
function Nav() {
    return (
        <>
            <nav className='Navbar'>
                <div className="Navbar-img">
                    <a href=''>
                        <img src="./assets/pause-logo.jpg" alt="logo" style={{ height: '50px' }} /></a>
                    <h3>PAUSE</h3>
                </div>
                <div className="Navbar-nav">
                    <li>Home</li>
                    <li>Band</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                    <li>Join Us</li>
                </div>
            </nav>
        </>
    );
}

export default Nav;
