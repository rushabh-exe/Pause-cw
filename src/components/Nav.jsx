import React, { useState } from 'react';
import './style/nav.css';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="stiker">
            <nav className={`Navbar ${showMenu ? 'show-menu' : ''}`}>
                <div className="Navbar-img">
                    <a href=''>
                        <img src="./assets/pause-logo.jpg" alt="logo" style={{ height: '50px' }} />
                    </a>
                    <h3>PAUSE</h3>
                </div>
                <div className={`Navbar-nav ${showMenu ? 'show' : ''}`}>
                    <ul>
                        <li>Home</li>
                        <li>Band</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className={`menu-button ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
