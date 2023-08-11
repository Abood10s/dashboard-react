import React from "react";
import "./style.css";
import star from "../../assets/star.png";
const Product = ({ data }) => {
  const { name, price, description, productImage, rating, category } = data;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={star} alt="ss" />);
  }
  return (
    <div className="product-container">
      <h1 className="product-name">product name: {name}</h1>
      <img
        src={URL.createObjectURL(productImage)}
        alt={name}
        className="product-image"
      />
      <h1>product price: {price}</h1>

      <h3>Product rating: {stars}</h3>
      <h1>product category: {category}</h1>
      <h1>product description: {description}</h1>
    </div>
  );
};

export default Product;
