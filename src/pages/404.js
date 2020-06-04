import React from "react"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <section id="notfound" className="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main-banner">
              <div className="d-sm-flex justify-content-between">
                <div>
                  <div className="banner-title">
                    <h3 className="font-weight-medium">Nothing here :/</h3>
                  </div>
                  <p className="mt-3">Let's go back and try again</p>
                  <Link to="/" className="btn btn-secondary mt-3">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
