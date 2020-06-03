import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

export default function Testimonials() {
  const {
    allFile: { nodes: testimonialImages },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/testimonial/*./" } }) {
        nodes {
          childImageSharp {
            fixed(width: 100) {
              src
            }
          }
        }
      }
    }
  `)

  const [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
  ] = testimonialImages
    .filter(img => img.childImageSharp)
    .map(img => img.childImageSharp.fixed.src)

  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="row  mt-md-0 mt-lg-4">
          <Fade up>
            <div className="col-sm-6 text-white">
              <p className="font-weight-bold mb-3">Testimonials</p>
              <h3 className="font-weight-medium">
                Our customers are our <br />
                biggest fans
              </h3>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <Slider
                dots
                dotsClass="flipster-custom-nav"
                slidesToShow={1}
                arrows={false}
                infinite
                autoplay
              >
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial1}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Mark Spenser</h6>
                    <p className="testimonial-destination">Accounts</p>
                  </div>
                </div>
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial2}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Tua Manuera</h6>
                    <p className="testimonial-destination">
                      Director,Dj market
                    </p>
                  </div>
                </div>
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial3}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Sarah Philip</h6>
                    <p className="testimonial-destination">Chief Accountant</p>
                  </div>
                </div>
                <div className="testimonial-item-container">
                  <div className="testimonial-item">
                    <img
                      src={testimonial4}
                      alt="icon"
                      className="testimonial-icons"
                      loading="lazy"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur pretium pretium
                      tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Ut pretium
                    </p>
                    <h6 className="testimonial-author">Mark Spenser</h6>
                    <p className="testimonial-destination">
                      Director,Dj market
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
