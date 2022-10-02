import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import "./pageNotFound.css";

// let img = "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"

function PageNotFound() {
  return (
    <>
        <Topbar />
        <section className="page_404">
          <div className="container">
            <div className="row">	
            <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
              <img src = "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt='Nothing'/>
            </div>
            <div className="contant_box_404">
            <h3 className="h2">
            Looks like you're lost
            </h3>
            <p>the page you are looking for not available!</p>
          </div>
            </div>
            </div>
            </div>
          </div>
        </section>
    </>
  )
}



export default PageNotFound