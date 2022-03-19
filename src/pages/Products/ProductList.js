import React from "react"

import "./Products.css"

const ProductList = () => {
  return (
    <>
      <div className="product-card">
        <img className="product-image" src="" alt=""/>
        <h2 className="product-title">nail title</h2>
        <h5 className="product-description">nail description</h5>
        <h5 className="product-price">nail price</h5>
        <button>favourite</button>
        <button>share</button>
        <button>add to cart</button>
      </div>
    </>
  )
}

export default ProductList