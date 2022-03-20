import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { GiSpotedFlower, GiHamburgerMenu } from 'react-icons/gi'

import "./Navbar.css"


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
          <GiSpotedFlower color='yellow' size={70} className="navbar-logo" />
          <h1 className="navbar-title">Impatiens</h1>
          <ul>
            <li className="navbar-button"><Link to="/">Home</Link></li>
            <li className="navbar-button"><Link to="/about">About</Link></li>
            <li className="navbar-button"><Link to="/blog">Blog</Link></li>
            <li className="navbar-button"><Link to="/products">Products</Link></li>
            <li className="navbar-button"><Link to="/contact">Contact</Link></li>
            <li className="navbar-button navbar-button-options"><GiHamburgerMenu size={40}/></li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar