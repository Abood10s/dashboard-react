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
      <h1 className="product-name">{name}</h1>
      <img
        src={URL.createObjectURL(productImage)}
        alt={name}
        className="product-image"
      />
      <h2 className="product-price">${price}</h2>
      <div className="product-rating">
        <span>Rating:</span>
        {stars}
      </div>
      <p className="product-category">{category}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default Product;
