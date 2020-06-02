import React from "react"

import deloit from "../assets/images/deloit.svg"
import erricson from "../assets/images/erricson.svg"
import netflix from "../assets/images/netflix.svg"
import instagram from "../assets/images/instagram.svg"
import coinbase from "../assets/images/coinbase.svg"

export default function ClientLogos() {
  return (
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
  )
}
