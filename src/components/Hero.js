import React from "react"

import group from "../assets/images/group.webp"

export default function Hero() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main-banner">
              <div className="d-sm-flex justify-content-between">
                <div>
                  <div className="banner-title">
                    <h3 className="font-weight-medium">
                      A beatiful Gatsby.js Landing Page template
                    </h3>
                  </div>
                  <p className="mt-3">
                    This is the perfect starting point for a website presenting
                    your awesome project or startup!
                    <br />
                    Gatsby is a free and open source framework based on React
                    that helps developers build blazing fast websites and apps
                  </p>
                  <button className="btn btn-secondary mt-3">Learn more</button>
                </div>
                <div className="mt-5 mt-lg-0">
                  <img src={group} alt="marsmello" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
