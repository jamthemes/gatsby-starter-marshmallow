import React from "react"
import Fade from "react-reveal/Fade"

import deloit from "../assets/images/client-logos/deloit.svg"
import erricson from "../assets/images/client-logos/erricson.svg"
import netflix from "../assets/images/client-logos/netflix.svg"
import instagram from "../assets/images/client-logos/instagram.svg"
import coinbase from "../assets/images/client-logos/coinbase.svg"

export default function ClientLogos() {
  return (
    <Fade>
      <section className="clients pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="d-sm-flex justify-content-between align-items-center">
                <img
                  src={deloit}
                  alt="deloit"
                  className="p-2 p-lg-0"
                  loading="lazy"
                />
                <img
                  src={erricson}
                  alt="erricson"
                  className="p-2 p-lg-0"
                  loading="lazy"
                />
                <img
                  src={netflix}
                  alt="netflix"
                  className="p-2 p-lg-0"
                  loading="lazy"
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className="p-2 p-lg-0"
                  loading="lazy"
                />
                <img
                  src={coinbase}
                  alt="coinbase"
                  className="p-2 p-lg-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
