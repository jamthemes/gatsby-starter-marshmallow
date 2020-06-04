import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import logoDark from "../assets/images/logo-dark.svg"
import NavItems from "./NavItems"

export default function Menu() {
  const [show, setShow] = useState(false)

  function toggleMenu() {
    setShow(!show)
  }

  function onNavigate() {
    setShow(false)
  }

  return (
    <div className={show ? "sidebar-overlay" : ""}>
      <div id="mobile-menu-overlay" />
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Marshmallow" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="mdi mdi-menu"> </i>
            </span>
          </button>
          <div className={`collapse navbar-collapse${show ? " show" : ""}`}>
            <div className="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
              <img src={logoDark} className="logo-mobile-menu" alt="logo" />
              <button className="close-menu" onClick={toggleMenu}>
                <i className="mdi mdi-close" />
              </button>
            </div>
            <ul className="navbar-nav ml-auto align-items-center">
              <NavItems onNavigate={onNavigate} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
