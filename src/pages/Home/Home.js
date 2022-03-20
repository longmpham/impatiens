import React from "react"

import {FaCanadianMapleLeaf, FaHandSparkles } from 'react-icons/fa'
import { GiSpotedFlower } from 'react-icons/gi'

import "./Home.css"

import customerCards from "./customerCards.js"

const Home = () => {


  const [customers, setCustomers] = React.useState(customerCards)
  // console.log(customerCard)


  return (
    <>
      <div className="home">
        <h1 className="top-notification">Coming Soon...</h1>
        <div className="home-landing-container">
          <div className="home-landing-title">
            <h2>Impatiens</h2>
            <h5>Impatient for nails? Go with Impatiens</h5>
          </div>
          <div className="home-landing-buttons">
            <button className="home-landing-button">Learn More</button>
            <button className="home-landing-button">Check the nails out!</button>
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
          <h2 className="home-customer-feedback-item home-section-title">Stop Being Impatient!</h2>
          {customers.map(customer => {
            return (
              <div className="home-customer-feedback-item" key={customer.id}>
                <h5>{customer.name}</h5>
                <p>{customer.quote}</p>
              </div>
            )
          })}
        </div>
        <div className="home-quick-nav-container">
          <h2 className="home-quick-nav-item home-section-title">Get Impatiens Now!</h2>
          <button className="home-quick-nav-item home-quick-nav-button">Current Products</button>
          <button className="home-quick-nav-item home-quick-nav-button">Subscribe For Future Releases</button>
        </div>
      </div>
    </>
  )
}

export default Home