import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img className="footer-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Taylor_Swift_Fearless_Tour_03.jpg/243px-Taylor_Swift_Fearless_Tour_03.jpg" />
        {/* <h1 className="footer-title">Impatiens</h1> */}
        <ul className="footer-buttons">
          <li><Link className="footer-button" to="/">Home</Link></li>
          <li><Link className="footer-button" to="/about">About</Link></li>
          <li><Link className="footer-button" to="/blog">Blog</Link></li>
          <li><Link className="footer-button" to="/contact">Contact</Link></li>
        </ul>

      </footer>
    </> 
  )
}

export default Footer