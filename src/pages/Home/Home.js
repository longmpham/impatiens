import React from "react"

import {FaCanadianMapleLeaf, FaHandSparkles } from 'react-icons/fa'
import { GiSpotedFlower } from 'react-icons/gi'

import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-landing-container">
          <div className="home-landing-container-title">
            <h2>Impatiens Coming Soon</h2>
            <h4>Impatient for nails? Go with Impatiens</h4>
          </div>
          <div className="home-landing-button">
            <button>About</button>
            <button>Check the nails out!</button>
          </div>
        </div>
        <div className="home-quick-info-container">
          <div className="home-quick-info-item">
            <h3>Hand Made</h3>
            <FaHandSparkles color='blue' size={70}/>
          </div>
          <div className="home-quick-info-item">
            <h3>Custom Designed</h3>
            <GiSpotedFlower color='yellow' size={70}/>
          </div>
          <div className="home-quick-info-item">
            <h3>Canadian</h3>
            <FaCanadianMapleLeaf color='red' size={70}/>
          </div>
        </div>
        <div className="home-customer-feedback-container">
          <h2 className="home-section-title">Still not impatient enough?</h2>
          <div className="home-customer-feedback-item">Customer Card
            <h5>Some Name</h5>
            <p>some cool quote</p>
          </div>
        </div>
        <div className="home-quick-nav-container">
          <h2 className="home-section-title">Get Impatiens Now!</h2>
          <div className="home-quick-nav-item">
            <button className="home-quick-nav-button">Current Products</button>
            <button className="home-quick-nav-button">Future Releases</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home