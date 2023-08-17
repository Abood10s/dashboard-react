import React from "react";
import star from "../../assets/star.png";
import "./style.css";
const ProductsTable = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-header">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((element) => {
            const {
              id,
              name,
              category,
              description,
              productImage,
              price,
              rating,
            } = element;
            const stars = [];
            for (let i = 0; i < rating; i++) {
              stars.push(
                <img key={i} src={star} alt="ss" className="star-img" />
              );
            }
            return (
              <tr key={id}>
                <td style={{ textAlign: "center" }}>
                  <img src={productImage} alt={name} />
                </td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{description}</td>
                <td style={{ textAlign: "center" }}>{stars}</td>
                <td>{price}$</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
