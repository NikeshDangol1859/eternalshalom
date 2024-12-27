import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="footer-content">
            <div className="footer-left">
                <img src="/building.png" alt="building" />

            </div>
            <div className="footer-mid">
                <h2>Find Us</h2>
                <div className="footer-links">
                    <Link><i className="fa-brands fa-facebook"></i> Facebook</Link>
                    <Link><i className="fa-brands fa-instagram"></i> Instagram</Link>
                    <Link><i className="fa-brands fa-facebook-messenger"></i> Messenger</Link>
                    <Link><i className="fa-solid fa-envelope"></i> Mail</Link>
                </div>



            </div>
            <div className="footer-right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.81301087985045!2d85.32345371017097!3d27.592610497118486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb16f215b47271%3A0x20c1c389809021c0!2sEternal%20Shalom%20Secondary%20School!5e1!3m2!1sen!2snp!4v1735211358744!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


            </div>

        </div>
    </div>
      
    </>
  )
}

export default Footer
