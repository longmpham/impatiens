import React from "react"

import { MdAddShoppingCart, MdShare } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import "./Products.css"
import productData from "../../productData.js"

const ProductList = () => {

  const [products, setProducts] = React.useState(productData);
  // console.log(products)

  return (
    <>
      <h1 className="top-notification">Coming Soon...</h1>
      <div className="product-container">
      {products.map(product => {
        return (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.image} alt={product.alt}/>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <h3 className="product-price">${product.cost}</h3>
            <button className="product-button"><FaHeart /></button>
            <button className="product-button"><MdShare /></button>
            <button className="product-button"><MdAddShoppingCart /></button>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default ProductList