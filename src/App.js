import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home"
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css"
import ProductList from "./pages/Products/ProductList";


function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
