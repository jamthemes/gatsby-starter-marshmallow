import React from "react"

export const NavItem = ({ children, ...aProps }) => {
  return (
    <li className="nav-item active">
      <a
        className="nav-link"
        href="#none"
        {...aProps}
        onClick={e => {
          e.preventDefault()
          const target = e.target.getAttribute("href")
          const elem = document.querySelector(target)
          if (elem) {
            elem.scrollIntoView({
              behavior: "smooth",
            })
          }
          if (aProps.onClick) {
            aProps.onClick()
          }
        }}
      >
        {children}
      </a>
    </li>
  )
}

/**
 * All menu items
 */
export default function NavItems({ onNavigate = () => {}, secondary }) {
  return (
    <>
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

      <NavItem
        className={secondary ? "nav-link" : "nav-link btn btn-success"}
        href="#contact"
        onClick={onNavigate}
      >
        Contact
      </NavItem>
    </>
  )
}
