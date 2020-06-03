import React from "react"

import logo from "../assets/images/logo.svg"
import NavItems from "./NavItems"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <address>
                <p>143 castle road 517</p>
                <p className="mb-4">district, kiyev port south Canada</p>
                <div className="d-flex align-items-center">
                  <p className="mr-4 mb-0">+3 123 456 789</p>
                  <a href="mailto:info@yourmail.com" className="footer-link">
                    info@yourmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mr-4 mb-0">+1 222 345 342</p>
                  <a
                    href="mailto:marshmallow@yourmail.com"
                    className="footer-link"
                  >
                    marshmallow@yourmail.com
                  </a>
                </div>
              </address>
              <div className="social-icons">
                <h6 className="footer-title font-weight-bold">Social Share</h6>
                <div className="d-flex">
                  <a href="https://www.github.com">
                    <i className="mdi mdi-github" />
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="mdi mdi-facebook" />
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="mdi mdi-twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <h6 className="footer-title">Social Share</h6>
                  <ul className="list-footer">
                    <NavItems secondary />
                  </ul>
                </div>
                <div className="col-sm-4">
                  <h6 className="footer-title">Product</h6>
                  <ul className="list-footer">
                    <li>
                      <a href="/" className="footer-link">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        App Development
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <h6 className="footer-title">Company</h6>
                  <ul className="list-footer">
                    <li>
                      <a href="/" className="footer-link">
                        Partners
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Investors
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        Partners
                      </a>
                    </li>
                    <li>
                      <a href="/" className="footer-link">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" className="mr-3" />
              <p className="mb-0 text-small pt-1">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.jamthemes.io/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JamThemes
                </a>
                {" & "}
                <a
                  href="https://www.bootstrapdash.com/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BootstrapDash
                </a>
                . All rights reserved.
              </p>
            </div>
            <div>
              <div className="d-flex">
                <a href="/" className="text-small text-white mx-2 footer-link">
                  Privacy Policy{" "}
                </a>
                <a href="/" className="text-small text-white mx-2 footer-link">
                  Customer Support{" "}
                </a>
                <a href="/" className="text-small text-white mx-2 footer-link">
                  Careers{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
