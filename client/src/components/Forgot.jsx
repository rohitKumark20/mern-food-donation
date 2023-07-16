import React from 'react'

const Forgot = () => {
  return (
    <>
        <section className="recovery first-section">
            <div className="main-container">
                <div className="info">
                    <span>We will send you a link to recover password</span>
                </div>
                <div className="input-email">
                    <input type="email" placeholder='Your Email' required/>
                </div>

                <button className='nav-btn'>Get a recover link</button>
                <a href="/login" className='backLink'>Back to login</a>
            </div>
        </section>
    </>
  )
}

export default Forgot