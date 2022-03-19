import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

import "./Navbar.css"


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
          <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Taylor_Swift_Fearless_Tour_03.jpg/243px-Taylor_Swift_Fearless_Tour_03.jpg" />
          <h1 className="navbar-title">Impatiens</h1>
          <Link className="navbar-button" to="/">Home</Link>
          <Link className="navbar-button" to="/about">About</Link>
          <Link className="navbar-button" to="/blog">Blog</Link>
          <Link className="navbar-button" to="/contact">Contact</Link>
        </nav>
    </>
  )
}

export default Navbar