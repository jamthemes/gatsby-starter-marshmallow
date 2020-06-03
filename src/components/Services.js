import React from "react"
import Fade from "react-reveal/Fade"

import integratedMarketing from "../assets/images/integrated-marketing.svg"
import designDevelopment from "../assets/images/design-development.svg"
import digitalStrategy from "../assets/images/digital-strategy.svg"
import digitalMarketing from "../assets/images/digital-marketing.svg"
import growthStrategy from "../assets/images/growth-strategy.svg"
import savingStrategy from "../assets/images/saving-strategy.svg"

export default function Services() {
  return (
    <section className="our-services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h5 className="text-dark">Our Features</h5>
            <h3 className="font-weight-medium text-dark mb-5">
              Fast in every way that matters
            </h3>
          </div>
        </div>
        <Fade up>
          <div className="row">
            <div className="col-sm-4 text-center text-lg-left">
              <div className="services-box">
                <img src={integratedMarketing} alt="integrated-marketing" />
                <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                  Integrated Marketing
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-4 text-center text-lg-left">
              <div className="services-box">
                <img src={designDevelopment} alt="design-development" />
                <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                  Design &amp; Development
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-4 text-center text-lg-left">
              <div className="services-box">
                <img src={digitalStrategy} alt="digital-strategy" />
                <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                  Digital Strategy
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade up>
          <div className="row">
            <div className="col-sm-4 text-center text-lg-left">
              <div className="services-box pb-lg-0">
                <img src={digitalMarketing} alt="digital-marketing" />
                <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                  Digital Marketing
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-4 text-center text-lg-left">
              <div className="services-box pb-lg-0">
                <img src={growthStrategy} alt="growth-strategy" />
                <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                  Growth Strategy
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-4 text-center text-lg-left">
              <div className="services-box pb-0">
                <img src={savingStrategy} alt="saving-strategy" />
                <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                  Saving Strategy
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
