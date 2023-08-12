import React from "react";
import "./style.css";
import star from "../../assets/star.png";
import { useContext } from "react";
import { ProductsContext } from "../../Context";
const Product = ({ data }) => {
  const { deleteProduct } = useContext(ProductsContext);

  const {
    id,
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
    stars.push(<img key={i} src={star} alt="ss" />);
  }
  return (
    <div className="product-container">
      <small>id: {id}</small>
      <h1 className="product-name">{name}</h1>
      <small>
        published: {productDate} at {time}
      </small>
      {productImage ? (
        <img src={productImage} alt={name} className="product-image" />
      ) : null}
      <h2 className="product-price">${price}</h2>
      <div className="product-rating">
        <span>Rating:</span>
        {stars}
      </div>
      <p className="product-category">{category}</p>
      <p className="product-description">{description}</p>
      <button className="delete-image" onClick={() => deleteProduct(id)}>
        Delete Product
      </button>
    </div>
  );
};

export default Product;
