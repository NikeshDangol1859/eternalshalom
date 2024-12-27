import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Godawari-11, Tahakhel, Lalitpur</p>
          <p><strong>Phone:</strong> (+977) 123-4567</p>
          <p><strong>Email:</strong> eternalshalom@gmail.com</p>

          <h2>Location</h2>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.81301087985045!2d85.32345371017097!3d27.592610497118486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb16f215b47271%3A0x20c1c389809021c0!2sEternal%20Shalom%20Secondary%20School!5e1!3m2!1sen!2snp!4v1735211358744!5m2!1sen!2snp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </div>
    
      
    </>
  )
}

export default Contact
