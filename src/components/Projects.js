import React from "react"
import Slider from "react-slick"

import slider1 from "../assets/images/carousel/slider1.jpg"
import slider2 from "../assets/images/carousel/slider2.jpg"
import slider3 from "../assets/images/carousel/slider3.jpg"
import slider4 from "../assets/images/carousel/slider4.jpg"
import slider5 from "../assets/images/carousel/slider5.jpg"
import satisfiedClient from "../assets/images/satisfied-client.svg"
import finishedProject from "../assets/images/finished-project.svg"
import teamMembers from "../assets/images/team-members.svg"
import ourBlogPosts from "../assets/images/our-blog-posts.svg"

export default function Projects() {
  return (
    <section className="our-projects" id="projects">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-12">
            <div className="d-sm-flex justify-content-between align-items-center mb-2">
              <h3 className="font-weight-medium text-dark ">
                Let's See Our Latest Project
              </h3>
              <div>
                <a href="/" className="btn btn-outline-primary">
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5" data-aos="fade-up">
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
              <img src={teamMembers} alt="Team Members" className="mr-3" />
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
              <img src={ourBlogPosts} alt="Our Blog Posts" className="mr-3" />
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
  )
}
