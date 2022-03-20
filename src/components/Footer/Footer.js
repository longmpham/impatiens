import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { GiSpotedFlower } from 'react-icons/gi'
import { FaArrowCircleUp } from 'react-icons/fa'

import "./Footer.css"


const Navbar = () => {

  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <>
        <footer className="footer">
          <GiSpotedFlower color='yellow' size={70} className="footer-logo" />
          <h1 className="footer-title">Impatiens</h1>
          {/* <ul>
            <li className="footer-button"><Link to="/">Home</Link></li>
            <li className="footer-button"><Link to="/about">About</Link></li>
            <li className="footer-button"><Link to="/blog">Blog</Link></li>
            <li className="footer-button"><Link to="/products">Products</Link></li>
            <li className="footer-button"><Link to="/contact">Contact</Link></li>
          </ul> */}
          {showButton && (
            // <button onClick={scrollToTop} className="back-to-top"><FaArrowCircleUp size={30}>
                    // {/* &#8679; */}
            // </FaArrowCircleUp></button>
            <FaArrowCircleUp onClick={scrollToTop} className="back-to-top" size={30}>
            {/* &#8679; */}
          </FaArrowCircleUp>
          )}
        </footer>
    </>
  )
}

export default Navbar