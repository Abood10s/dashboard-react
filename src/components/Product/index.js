import React from "react";
import star from "../../assets/star.png";

import "./style.css";

const Product = ({ data }) => {
  const {
    name,
    price,
    description,
    productImage,
    rating,
    category,
    time,
    productDate,
  } = data;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={star} alt="ss" className="star-img" />);
  }
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={productImage} height="420" width="327" alt="Product " />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name}</h1>
          <h2>
            {productDate}at{time}
          </h2>
          <h4 className="categ">{category}</h4>
          <p>{description}</p>
          <div className="rating">{stars}</div>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{price}</span>$
          </p>
          <button type="button">View more</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
