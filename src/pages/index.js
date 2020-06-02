import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import AOS from "aos"
import "@mdi/font/css/materialdesignicons.css"
import "aos/dist/aos.css"

import "../assets/styles/style.scss"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WorkProcess from "../components/WorkProcess"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import ClientLogos from "../components/ClientLogos"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// TODOs:
// - Create Components
// - CMS: Tina, Netlify, ...

export default function Index() {
  useEffect(() => {
    ;(async () => {
      if (typeof window !== undefined) {
        AOS.init({
          offset: 0,
          duration: 800,
          easing: "ease-in-quad",
          delay: 100,
        })
      }
    })()
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en" />
        <body data-spy="scroll" data-target=".navbar" data-offset="50" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Marshmallow - GatsbyJS Landing Page</title>
        <link rel="shortcut icon" href="images/favicon.png" />
      </Helmet>

      <div>
        <Menu />
        <div className="page-body-wrapper">
          <Hero />
          <Services />
          <WorkProcess />
          <Projects />
          <Testimonials />
          <ClientLogos />
          <Pricing />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}
