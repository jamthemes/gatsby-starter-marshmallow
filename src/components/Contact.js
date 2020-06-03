import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

export default function Contact() {
  const {
    file: {
      childImageSharp: { fluid: contactImg },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="contactus" id="contact">
      <div className="container">
        <div className="row mb-5 pb-5">
          <Fade>
            <div
              className="col-sm-5"
              style={{ maxWidth: "300px", marginRight: "2em" }}
            >
              <Img fluid={contactImg} alt="contact" className="img-fluid" />
            </div>
          </Fade>
          <Fade>
            <div className="col-sm-7">
              <h3 className="font-weight-medium text-dark mt-5 mt-lg-0">
                We are here for you
              </h3>
              <h5 className="text-dark mb-5">
                Lorem ipsum dolor sit amet, consectetur pretium
              </h5>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name*"
                        aria-label="Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="mail"
                        placeholder="Email*"
                        aria-label="E-Mail address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="Message*"
                        rows={5}
                        defaultValue={""}
                        aria-label="Message"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button className="btn btn-secondary">SEND</button>
                  </div>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
