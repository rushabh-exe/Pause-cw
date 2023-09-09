import React from 'react'
import './style/home.css';
import './style/band.css';
function Band() {
  return (
    <div className='card-container'>
      <div className="card">
        <div className="card-image"></div>
        <div>
          <div className="category">Rock</div>
          <div className="heading">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
            <div className="author">
              By <span className="name">test</span> 4 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Band