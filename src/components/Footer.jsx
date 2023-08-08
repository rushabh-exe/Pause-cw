import React from 'react'
import './style/footer.css';

function Footer() {
  return (
    <>
            <footer className='footer'>
                <div className="footer-img">
                    <a href=''>
                        <img src="./assets/pause-logo.jpg" alt="logo" style={{ height: '8em' }} /></a>
                    <span>
                        <h3>PAUSE</h3><br />
                        <span>
                            <a href="#">About</a><br />
                            <a href="#">Constact us</a><br />
                            <a href="#">987654321</a><br />
                            <a href="#">Lab no 609</a>
                        </span>

                    </span>
                </div>
                <div className="footer-smh">
                    <li>Home</li>
                    <li>Band</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                    <li>Join Us</li>
                </div>
            </footer>
        </>
  )
}

export default Footer