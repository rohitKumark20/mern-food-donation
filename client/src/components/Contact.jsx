import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-main-container">
          <div className="contact-heading">
            <h1>Contact Us</h1>
          </div>

          <div className="contact-container">
            <div className="contact form">
              <form action='https://formspree.io/f/mnqkqeqw' method='POST'>
                <div className="formbox">
                  <div className="row50">
                    <div className="input-box">
                      <span>FirstName</span>
                      <input type="text" name= 'username' placeholder='John' required/>
                    </div>

                    <div className="input-box">
                      <span>LastName</span>
                      <input type="text" name='lastusername' placeholder='Doe' required/>
                    </div>
                  </div>

                  <div className="row50">
                    <div className="input-box">
                      <span>Email</span>
                      <input type="email" name='email' placeholder='Johndoe@example.com' required/>
                    </div>

                    <div className="input-box">
                      <span>Mobile</span>
                      <input type="text" name='phone' placeholder='+91 987 654 3456' required/>
                    </div>
                  </div>

                  <div className="row100">
                    <div className="input-box">
                      <span>Message</span>
                      <textarea name='message' placeholder='Write your message here...' required/>
                    </div>
                  </div>

                  <div className="row100">
                    <div className="input-box">
                      <input type="submit" value="Send"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact info">
              <h3>Contact Info</h3>
              <div className="info_box">
                <div>
                  <span><FontAwesomeIcon icon={faLocationDot} inverse/></span>
                  <p>BIT Mesra, Ranchi <br />Jharkhand</p>
                </div>

                <div>
                  <span><FontAwesomeIcon icon={faEnvelope} inverse/></span>
                  <a href="mailto:abc@example.com">abc@example.com</a>
                </div>

                <div>
                  <span><FontAwesomeIcon icon={faPhone} inverse/></span>
                  <a href="tel:+918786951234">+918786951234</a>
                </div>
              </div>
            </div>
            <div className="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14644.472880595164!2d85.4177297478897!3d23.420096262350857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1688150488443!5m2!1sen!2sin" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='unique'></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact