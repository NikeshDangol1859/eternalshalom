import React from 'react'
import Footer from '../Footer'
import ScrollUp from '../ScrollUp'

function Academic() {
  return (
    <>
    <div className="academic-container">
    <div className="academic-imgslider">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide3.jpg" className="d-block w-100" alt="..." />
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
    <div className="academic-contain">
  <h1 className="academic-title">Academic Programs</h1>
  <div className="academic-content">
    <section className="academic-section">
      <h2>Programs</h2>
      <p>
        Our school offers a comprehensive curriculum from Kindergarten to Grade
        10, focusing on a balanced approach to academics, sports, and the arts.
        With facilities like well-equipped science labs, a library, and
        dedicated spaces for music and art, our students enjoy an environment
        that encourages exploration and discovery.
      </p>
    </section>

    <section className="academic-section">
      <h2>Extracurricular Activities</h2>
      <p>
        Beyond academics, we encourage students to participate in various
        extracurricular activities, including sports, art, music, and other
        skill-building programs. These opportunities help our students develop
        teamwork, resilience, and self-confidence.
      </p>
    </section>

    <section className="academic-section">
      <h2>Student and Faculty</h2>
      <p>
        Our community is inclusive and close-knit, with 260 students supported
        by a dedicated team of teachers. Together, we strive to create an
        environment where every student feels valued and supported.
      </p>
    </section>

    <section className="academic-section">
      <h2>Achievements</h2>
      <p>
        Eternal Shalom English School is proud of its achievements in various
        academic, cultural, and athletic competitions. These accomplishments
        reflect the hard work and dedication of our students and faculty.
      </p>
    </section>

    <section className="academic-section">
      <h2>Admissions</h2>
      <p>
        We accept applications year-round, offering rolling admission for
        qualified students. We look forward to welcoming new students to our
        vibrant school community.
      </p>
    </section>
  
</div>


    </div>

    <ScrollUp/>

    <Footer/>
    </div>
      
    </>
  )
}

export default Academic
