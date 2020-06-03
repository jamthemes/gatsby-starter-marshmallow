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
                <div data-aos="zoom-in-up">
                  <div className="banner-title">
                    <h3 className="font-weight-medium">
                      We Help Power Millions Of Businesses in 100+ Countries
                    </h3>
                  </div>
                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <br />
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                  <button className="btn btn-secondary mt-3">Learn more</button>
                </div>
                <div className="mt-5 mt-lg-0">
                  <img
                    src={group}
                    alt="marsmello"
                    className="img-fluid"
                    data-aos="zoom-in-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
