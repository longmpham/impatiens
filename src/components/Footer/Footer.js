import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { GiSpotedFlower } from 'react-icons/gi'

import "./Footer.css"


const Navbar = () => {
  return (
    <>
        <nav className="footer">
          <GiSpotedFlower color='yellow' size={70} className="footer-logo" />
          <h1 className="footer-title">Impatiens</h1>
          <ul>
            <li className="footer-button"><Link to="/">Home</Link></li>
            <li className="footer-button"><Link to="/about">About</Link></li>
            <li className="footer-button"><Link to="/blog">Blog</Link></li>
            <li className="footer-button"><Link to="/products">Products</Link></li>
            <li className="footer-button"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar