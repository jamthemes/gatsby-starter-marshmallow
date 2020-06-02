import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import logoDark from "../assets/images/logo-dark.svg"

const NavItem = ({ children, ...aProps }) => (
  <li className="nav-item active">
    <a className="nav-link" {...aProps}>
      {children}
    </a>
  </li>
)

export default function Menu() {
  const [show, setShow] = useState(false)

  function toggleMenu() {
    setShow(!show)
  }

  function onNavigate(e) {
    e.preventDefault()
    const target = e.target.getAttribute("href")
    const elem = document.querySelector(target)
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      })
    }
    setShow(false)
  }

  return (
    <div className={show ? "sidebar-overlay" : ""}>
      <div id="mobile-menu-overlay" />
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
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
              <a className="close-menu" onClick={toggleMenu}>
                <i className="mdi mdi-close" />
              </a>
            </div>
            <ul className="navbar-nav ml-auto align-items-center">
              <NavItem href="#home" onClick={onNavigate}>
                Home
              </NavItem>

              <NavItem href="#services" onClick={onNavigate}>
                Services
              </NavItem>

              <NavItem href="#about" onClick={onNavigate}>
                About
              </NavItem>

              <NavItem href="#projects" onClick={onNavigate}>
                Projects
              </NavItem>

              <NavItem href="#testimonial" onClick={onNavigate}>
                Testimonial
              </NavItem>
              <NavItem href="#plans" onClick={onNavigate}>
                Plans
              </NavItem>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-success"
                  href="#contact"
                  onClick={onNavigate}
                >
                  174-394-9560
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
