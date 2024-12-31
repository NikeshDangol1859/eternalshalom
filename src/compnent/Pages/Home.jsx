import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="home-container">
    <div className="home-background">
            <img src="/building.png" alt="" />
        </div>
        <div className="home-color fedIn"></div>
        <div className="home-header">
            <div className="home-text">
            <h1>Empowering Bright Minds for a Brighter Future</h1>
            <p>Join our family of dedicated learners and experience education that inspires, nurtures, and prepares you for success.</p>

            </div>
            <div className="home-buttons">
            <Link className='apply'>Apply Now</Link>
            <Link className='learn' to={'/about#about'}>Learn More</Link>
            </div>


        </div>
        <div className="home-image">
            <img src="/building.png" alt="" />
        </div>
        
    </div>
    
      
    </>
  )
}

export default Home
