import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="nav-container sticky">
        <div className="nav-main">
        <div className="nav-logos">
            <img src="/logo.png" alt="logo" />
            <Link to={"/"}> <h1>Eternal Shalom Secondary School</h1></Link>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/academic">Academic</Link>
            <Link to="/gallary">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </div>

        </div>
        
    </div>
  
    

    

      
    </>
  )
}

export default Nav
