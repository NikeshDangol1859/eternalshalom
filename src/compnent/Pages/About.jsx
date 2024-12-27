import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import ScrollUp from '../ScrollUp'

function About() {
  return (
    <>
    <div className="about-container">
    <div className="about-imgslider">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/building.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="building1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="building2.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>{/*About imgslider Div Close */}

  
  <div className="about-content">
    <div className="about-links">
      <h2>Quick Navigation</h2>
      <Link to="#introduction">Introduction</Link>
      <Link to="#features">Features</Link>
      <Link to="#mission">Mission</Link>
    </div>
    <div className="about-details">
      <div id="introduction">
        <h2>Introduction</h2>
        <p>
          Eternal Shalom English School is a private, Christian school located
          in Tahakhel, ward 11, Godawari, Lalitpur. Our name, inspired by the
          Hebrew word "shalom," reflects our commitment to fostering a peaceful,
          nurturing environment for our students. Since its founding in 2058
          BS, Eternal Shalom has been dedicated to providing an education that
          values both academic excellence and spiritual growth.
        </p>
      </div>
      <div id="features">
        <h2>Features</h2>
        <p>
          At Eternal Shalom, we prioritize small class sizes, personalized
          learning, and a strong focus on spiritual growth. Our facilities
          include modern classrooms, a library, science labs, and sports
          grounds.
        </p>
      </div>
      <div id="mission">
        <h2>Mission</h2>
        <p>
          Our mission is to empower students to grow academically, socially,
          and spiritually, ensuring they become responsible and compassionate
          global citizens.
        </p>
      </div>
    </div>
  </div> {/*About content Div Close */}
  <ScrollUp/>
    <Footer/>

    </div> {/*About Container Div Close */}

    
    
      
    </>
  )
}

export default About
