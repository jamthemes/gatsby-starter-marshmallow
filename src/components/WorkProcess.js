import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Flip from "react-reveal/Flip"
import Fade from "react-reveal/Fade"

import tick from "../assets/images/tick.png"

export default function WorkProcess() {
  const {
    file: {
      childImageSharp: { fluid: illustration },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "idea.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="our-process" id="about">
      <div className="container">
        <div className="row">
          <Fade up>
            <div className="col-sm-6" data-aos="fade-up">
              <h5 className="text-dark">Our work process</h5>
              <h3 className="font-weight-medium text-dark">
                Find your place in a crowded market
              </h3>
              <h5 className="text-dark mb-3">
                Imagination can take you anywhere
              </h5>
              <p className="font-weight-medium mb-4">
                Lorem ipsum dolor sit amet, <br />
                pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur
              </p>
              <div className="d-flex justify-content-start mb-3">
                <img src={tick} alt="tick" className="mr-3 tick-icon" />
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, pretium pretium
                </p>
              </div>
              <div className="d-flex justify-content-start mb-3">
                <img src={tick} alt="tick" className="mr-3 tick-icon" />
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, pretium pretium
                </p>
              </div>
              <div className="d-flex justify-content-start">
                <img src={tick} alt="tick" className="mr-3 tick-icon" />
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, pretium pretium
                </p>
              </div>
            </div>
          </Fade>
          <Flip left>
            <div
              className="col-sm-6 text-right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <Img fluid={illustration} alt="idea" className="img-fluid" />
            </div>
          </Flip>
        </div>
      </div>
    </section>
  )
}
