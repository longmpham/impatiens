import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GiSpotedFlower, GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const handleSidebar = () => {
    setSidebar((prevSidebar) => !prevSidebar);
    console.log(sidebar);
  };

  return (
    <>
      <nav className="navbar">
        <GiSpotedFlower color="yellow" size={70} className="navbar-logo" />
        <h1 className="navbar-title">Impatiens</h1>
        <ul className="navbar-right">
          <li className="navbar-button">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-button">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-button">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navbar-button">
            <Link to="/products">Products</Link>
          </li>
          <li className="navbar-button">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="navbar-sidebar-button" onClick={handleSidebar}>
          <GiHamburgerMenu size={40} />
        </button>
        {sidebar && (
          <ul onClick={handleSidebar} className="navbar-sidebar">
            <li className="navbar-sidebar-link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-sidebar-link">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-sidebar-link">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="navbar-sidebar-link">
              <Link to="/products">Products</Link>
            </li>
            <li className="navbar-sidebar-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
