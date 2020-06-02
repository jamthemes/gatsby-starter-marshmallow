import React, { useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import Slider from "react-slick"

import logo from "../assets/images/logo.svg"
import group from "../assets/images/group.png"
import integratedMarketing from "../assets/images/integrated-marketing.svg"
import designDevelopment from "../assets/images/design-development.svg"
import digitalStrategy from "../assets/images/digital-strategy.svg"
import digitalMarketing from "../assets/images/digital-marketing.svg"
import growthStrategy from "../assets/images/growth-strategy.svg"
import savingStrategy from "../assets/images/saving-strategy.svg"
import tick from "../assets/images/tick.png"
import idea from "../assets/images/idea.png"
import slider1 from "../assets/images/carousel/slider1.jpg"
import slider2 from "../assets/images/carousel/slider2.jpg"
import slider3 from "../assets/images/carousel/slider3.jpg"
import slider4 from "../assets/images/carousel/slider4.jpg"
import slider5 from "../assets/images/carousel/slider5.jpg"
import satisfiedClient from "../assets/images/satisfied-client.svg"
import finishedProject from "../assets/images/finished-project.svg"
import teamMembers from "../assets/images/team-members.svg"
import ourBlogPosts from "../assets/images/our-blog-posts.svg"
import testimonial1 from "../assets/images/testimonial/testimonial1.jpg"
import testimonial2 from "../assets/images/testimonial/testimonial2.jpg"
import testimonial3 from "../assets/images/testimonial/testimonial3.jpg"
import testimonial4 from "../assets/images/testimonial/testimonial4.jpg"
import deloit from "../assets/images/deloit.svg"
import erricson from "../assets/images/erricson.svg"
import netflix from "../assets/images/netflix.svg"
import instagram from "../assets/images/instagram.svg"
import coinbase from "../assets/images/coinbase.svg"
import starter from "../assets/images/starter.svg"
import proffessional from "../assets/images/proffessional.svg"
import premium from "../assets/images/premium.svg"
import contact from "../assets/images/contact.jpg"

import AOS from "aos"
import "@mdi/font/css/materialdesignicons.css"
import "aos/dist/aos.css"

import "../assets/styles/style.scss"
import Menu from "../components/Menu"

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
        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Marshmallow Bootstrap Admin Dashboard Template</title>
          <link rel="shortcut icon" href="images/favicon.png" />
        </div>
      </Helmet>

      <div>
        <Menu />
        <div className="page-body-wrapper">
          <section id="home" className="home">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main-banner">
                    <div className="d-sm-flex justify-content-between">
                      <div data-aos="zoom-in-up">
                        <div className="banner-title">
                          <h3 className="font-weight-medium">
                            We Help Power Millions Of Businesses in 100+
                            Countries
                          </h3>
                        </div>
                        <p className="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                          <br />
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </p>
                        <a href="#" className="btn btn-secondary mt-3">
                          Learn more
                        </a>
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
          <section className="our-services" id="services">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h5 className="text-dark">We’re offering</h5>
                  <h3 className="font-weight-medium text-dark mb-5">
                    Creative Digital Agency
                  </h3>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-4 text-center text-lg-left">
                  <div
                    className="services-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <img
                      src={integratedMarketing}
                      alt="integrated-marketing"
                      data-aos="zoom-in"
                    />
                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                      Integrated Marketing
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem
                      ipsum
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 text-center text-lg-left">
                  <div
                    className="services-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <img
                      src={designDevelopment}
                      alt="design-development"
                      data-aos="zoom-in"
                    />
                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                      Design &amp; Development
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem
                      ipsum
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 text-center text-lg-left">
                  <div
                    className="services-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <img
                      src={digitalStrategy}
                      alt="digital-strategy"
                      data-aos="zoom-in"
                    />
                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                      Digital Strategy
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem
                      ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-4 text-center text-lg-left">
                  <div
                    className="services-box pb-lg-0"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <img
                      src={digitalMarketing}
                      alt="digital-marketing"
                      data-aos="zoom-in"
                    />
                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                      Digital Marketing
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem
                      ipsum
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 text-center text-lg-left">
                  <div
                    className="services-box pb-lg-0"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <img
                      src={growthStrategy}
                      alt="growth-strategy"
                      data-aos="zoom-in"
                    />
                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                      Growth Strategy
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem
                      ipsum
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 text-center text-lg-left">
                  <div
                    className="services-box pb-0"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <img
                      src={savingStrategy}
                      alt="saving-strategy"
                      data-aos="zoom-in"
                    />
                    <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                      Saving Strategy
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem
                      ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="our-process" id="about">
            <div className="container">
              <div className="row">
                <div className="col-sm-6" data-aos="fade-up">
                  <h5 className="text-dark">Our work process</h5>
                  <h3 className="font-weight-medium text-dark">
                    Discover New Idea With Us!
                  </h3>
                  <h5 className="text-dark mb-3">
                    Imagination will take us everywhere
                  </h5>
                  <p className="font-weight-medium mb-4">
                    Lorem ipsum dolor sit amet, <br />
                    pretium pretium tempor.Lorem ipsum dolor sit amet,
                    consectetur
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
                <div
                  className="col-sm-6 text-right"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={2000}
                >
                  <img src={idea} alt="idea" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
          <section className="our-projects" id="projects">
            <div className="container">
              <div className="row mb-5">
                <div className="col-sm-12">
                  <div className="d-sm-flex justify-content-between align-items-center mb-2">
                    <h3 className="font-weight-medium text-dark ">
                      Let's See Our Latest Project
                    </h3>
                    <div>
                      <a href="#" className="btn btn-outline-primary">
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5" data-aos="fade-up">
              {/** Make responsive work; apply theme from _owl-carousel.scss */}
              <Slider
                dots={false}
                slidesToShow={4}
                className="owl-carousel-projects owl-carousel owl-theme"
                responsive={[
                  {
                    breakpoint: 0,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 4,
                    },
                  },
                ]}
              >
                <div className="item">
                  <img src={slider1} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider2} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider3} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider4} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider5} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider1} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider2} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider3} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider4} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider5} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider1} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider2} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider3} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider4} alt="slider" />
                </div>
                <div className="item">
                  <img src={slider5} alt="slider" />
                </div>
              </Slider>
            </div>
            <div className="container">
              <div className="row pt-5 mt-5 pb-5 mb-5">
                <div className="col-sm-3">
                  <div
                    className="d-flex py-3 my-3 my-lg-0 justify-content-center"
                    data-aos="fade-down"
                  >
                    <img
                      src={satisfiedClient}
                      alt="satisfied-client"
                      className="mr-3"
                    />
                    <div>
                      <h4 className="font-weight-bold text-dark mb-0">
                        <span className="scVal">0</span>%
                      </h4>
                      <h5 className="text-dark mb-0">Satisfied clients</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    className="d-flex py-3 my-3 my-lg-0 justify-content-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={finishedProject}
                      alt="satisfied-client"
                      className="mr-3"
                    />
                    <div>
                      <h4 className="font-weight-bold text-dark mb-0">
                        <span className="fpVal">0</span>
                      </h4>
                      <h5 className="text-dark mb-0">Finished Project</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    className="d-flex py-3 my-3 my-lg-0 justify-content-center"
                    data-aos="fade-down"
                  >
                    <img
                      src={teamMembers}
                      alt="Team Members"
                      className="mr-3"
                    />
                    <div>
                      <h4 className="font-weight-bold text-dark mb-0">
                        <span className="tMVal">0</span>
                      </h4>
                      <h5 className="text-dark mb-0">Team Members</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    className="d-flex py-3 my-3 my-lg-0 justify-content-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={ourBlogPosts}
                      alt="Our Blog Posts"
                      className="mr-3"
                    />
                    <div>
                      <h4 className="font-weight-bold text-dark mb-0">
                        <span className="bPVal">0</span>
                      </h4>
                      <h5 className="text-dark mb-0">Our Blog Posts</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonial" id="testimonial">
            <div className="container">
              <div className="row  mt-md-0 mt-lg-4">
                <div className="col-sm-6 text-white" data-aos="fade-up">
                  <p className="font-weight-bold mb-3">Testimonials</p>
                  <h3 className="font-weight-medium">
                    Our customers are our <br />
                    biggest fans
                  </h3>
                </div>
                <div className="col-sm-6" data-aos="fade-up">
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
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur pretium
                          pretium tempor.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut pretium
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
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur pretium
                          pretium tempor.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut pretium
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
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur pretium
                          pretium tempor.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut pretium
                        </p>
                        <h6 className="testimonial-author">Sarah Philip</h6>
                        <p className="testimonial-destination">
                          Chief Accountant
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item-container">
                      <div className="testimonial-item">
                        <img
                          src={testimonial4}
                          alt="icon"
                          className="testimonial-icons"
                        />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur pretium
                          pretium tempor.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut pretium
                        </p>
                        <h6 className="testimonial-author">Mark Spenser</h6>
                        <p className="testimonial-destination">
                          Director,Dj market
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          <section
            className="clients pt-5 mt-5"
            data-aos="fade-up"
            data-aos-offset={-400}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <img
                      src={deloit}
                      alt="deloit"
                      className="p-2 p-lg-0"
                      data-aos="fade-down"
                      data-aos-offset={-400}
                    />
                    <img
                      src={erricson}
                      alt="erricson"
                      className="p-2 p-lg-0"
                      data-aos="fade-up"
                      data-aos-offset={-400}
                    />
                    <img
                      src={netflix}
                      alt="netflix"
                      className="p-2 p-lg-0"
                      data-aos="fade-down"
                      data-aos-offset={-400}
                    />
                    <img
                      src={instagram}
                      alt="instagram"
                      className="p-2 p-lg-0"
                      data-aos="fade-up"
                      data-aos-offset={-400}
                    />
                    <img
                      src={coinbase}
                      alt="coinbase"
                      className="p-2 p-lg-0"
                      data-aos="fade-down"
                      data-aos-offset={-400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pricing-list" id="plans">
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-offset={-500}>
                <div className="col-sm-12">
                  <div className="d-sm-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h3 className="font-weight-medium text-dark ">
                        Checkout Pricing Plan
                      </h3>
                      <h5 className="text-dark ">
                        Lorem ipsum dolor sit amet, consectetur pretium pretium
                        tempor. Lorem ipsum dolor{" "}
                      </h5>
                    </div>
                    <div className="mb-5 mb-lg-0 mt-3 mt-lg-0">
                      <div className="d-flex align-items-center">
                        <p className="mr-2 font-weight-medium monthly text-active check-box-label">
                          Monthly
                        </p>
                        <label className="toggle-switch toggle-switch">
                          <input
                            type="checkbox"
                            defaultChecked
                            id="toggle-switch"
                          />
                          <span className="toggle-slider round" />
                        </label>
                        <p className="ml-2 font-weight-medium yearly check-box-label">
                          Yearly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-offset={-300}>
                <div className="col-sm-4">
                  <div className="pricing-box">
                    <img src={starter} alt="starter" />
                    <h6 className="font-weight-medium title-text">
                      Starter Business
                    </h6>
                    <h1 className="text-amount mb-4 mt-2">$23</h1>
                    <ul className="pricing-list">
                      <li>Create a free website</li>
                      <li>Connect Domain</li>
                      <li>Business and ecommerce</li>
                      <li>Idea for smaller professional websites</li>
                      <li>Web space</li>
                    </ul>
                    <a href="#" className="btn btn-outline-primary">
                      Puchase Now
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pricing-box selected">
                    <img src={proffessional} alt="starter" />
                    <h6 className="font-weight-medium title-text">
                      Professional
                    </h6>
                    <h1 className="text-amount mb-4 mt-2">$45</h1>
                    <ul className="pricing-list">
                      <li>Create a free website</li>
                      <li>Connect Domain</li>
                      <li>Business and ecommerce</li>
                      <li>Idea for smaller professional websites</li>
                      <li>Web space</li>
                    </ul>
                    <a href="#" className="btn btn-primary">
                      Puchase Now
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pricing-box">
                    <img src={premium} alt="starter" />
                    <h6 className="font-weight-medium title-text">Premium</h6>
                    <h1 className="text-amount mb-4 mt-2">$87</h1>
                    <ul className="pricing-list">
                      <li>Create a free website</li>
                      <li>Connect Domain</li>
                      <li>Business and ecommerce</li>
                      <li>Idea for smaller professional websites</li>
                      <li>Web space</li>
                    </ul>
                    <a href="#" className="btn btn-outline-primary">
                      Puchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contactus" id="contact">
            <div className="container">
              <div className="row mb-5 pb-5">
                <div
                  className="col-sm-5"
                  data-aos="fade-up"
                  data-aos-offset={-500}
                >
                  <img src={contact} alt="contact" className="img-fluid" />
                </div>
                <div
                  className="col-sm-7"
                  data-aos="fade-up"
                  data-aos-offset={-500}
                >
                  <h3 className="font-weight-medium text-dark mt-5 mt-lg-0">
                    Got A Problem
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
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <a href="#" className="btn btn-secondary">
                          SEND
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
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
                      <a
                        href="mailto:info@yourmail.com"
                        className="footer-link"
                      >
                        info@yourmail.com
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mr-4 mb-0">+1 222 345 342</p>
                      <a
                        href="mailto:Marshmallow@yourmail.com"
                        className="footer-link"
                      >
                        Marshmallow@yourmail.com
                      </a>
                    </div>
                  </address>
                  <div className="social-icons">
                    <h6 className="footer-title font-weight-bold">
                      Social Share
                    </h6>
                    <div className="d-flex">
                      <a href="#">
                        <i className="mdi mdi-github-circle" />
                      </a>
                      <a href="#">
                        <i className="mdi mdi-facebook-box" />
                      </a>
                      <a href="#">
                        <i className="mdi mdi-twitter" />
                      </a>
                      <a href="#">
                        <i className="mdi mdi-dribbble" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="footer-title">Social Share</h6>
                      <ul className="list-footer">
                        <li>
                          <a href="#" className="footer-link">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <h6 className="footer-title">Product</h6>
                      <ul className="list-footer">
                        <li>
                          <a href="#" className="footer-link">
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Design
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <h6 className="footer-title">Company</h6>
                      <ul className="list-footer">
                        <li>
                          <a href="#" className="footer-link">
                            Partners
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Investors
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
                            Partners
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-link">
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
                    © 2019-2020{" "}
                    <a
                      href="https://www.bootstrapdash.com/"
                      className="text-white"
                      target="_blank"
                    >
                      BootstrapDash
                    </a>
                    . All rights reserved.
                  </p>
                </div>
                <div>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="text-small text-white mx-2 footer-link"
                    >
                      Privacy Policy{" "}
                    </a>
                    <a
                      href="#"
                      className="text-small text-white mx-2 footer-link"
                    >
                      Customer Support{" "}
                    </a>
                    <a
                      href="#"
                      className="text-small text-white mx-2 footer-link"
                    >
                      Careers{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
