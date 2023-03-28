import React from 'react'

import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter__container">

      <h1 className="section__title">Subscribe To Our Newsletter</h1>

      <section className="section newsletter" id="contact">
        <div className="container">
          <div className="newsletter__content">
            <input type="email" placeholder="Enter your email address" className="newsletter__email" />
            <a className="newsletter__link" href="#">subscribe</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Newsletter