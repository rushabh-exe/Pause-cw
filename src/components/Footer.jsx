import React from 'react'
import './style/footer.css'
function Footer() {
  return (
    <footer>
        <div className="parts">
         <a href=""> <img src="./assets/facebook.png"  alt="facebook" /></a>
         <a href=""> <img src="./assets/instagram.png"  alt="instagram" /></a>
         <a href=""> <img src="./assets/twitter.png"  alt="twitter" /></a>
         <a href=""> <img src="./assets/whatsapp.png"  alt="whatsapp" /></a>
        </div>

        <div className="parts">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Join us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Whatsapp Group</a></li>
          </ul>
        </div>

        <div className="parts">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, molestiae!
        </div>
    </footer>
  )
}

export default Footer