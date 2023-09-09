import React, { useState } from 'react';
import './style/nav.css';
import { Link } from "react-router-dom";


function Nav() {
    const [isMoved, setIsMoved] = useState(false);

    const handleMoveClick = () => {
        setIsMoved((prevIsMoved) => !prevIsMoved);
    };

    return (

        <>
            <nav className='navbar'>
                <div className="logo-name">
                    <a href='/'>
                        <Link to="/">
                            <img src="./assets/pause-logo.jpg" alt="logo" style={{ height: '50px' }} />
                        </Link>
                    </a>
                    <h3>PAUSE</h3>
                </div>
                <ul className='m-pages'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/band">Band</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/joiningpage">Join Us</Link></li>
                </ul>

                <div className='menu-btn' onClick={handleMoveClick}>
                    {isMoved ?
                        <div className='menu-opened'>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        :
                        <div className='menu-closed'>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    }
                </div>
            </nav>

            <div className="sidemenu" style={{
                transform: isMoved ? 'translateX(0px)' : 'translateX(300px)',
                transition: 'transform 0.3s ease',
            }}>
                <ul className='slide-pages'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/band">Band</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/joiningpage">Join Us</Link></li>
                </ul>
            </div>

        </>
    );
}

export default Nav;

