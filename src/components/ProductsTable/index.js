import React, { useContext, useState } from "react";
import star from "../../assets/star.png";
import "./style.css";
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import { ProductsContext } from "../../Context";
import Modal from "../Modal";
import UploadForm from "../UploadForm";
import { Toaster, toast } from "react-hot-toast";

const ProductsTable = ({ data }) => {
  const { deleteProduct } = useContext(ProductsContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
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
            <th>Actions</th>
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
                <td>
                  <div>
                    <RiEdit2Fill
                      className="icon"
                      onClick={() => {
                        setSelectedProduct(element);
                        setShowModal(true);
                      }}
                    />
                  </div>

                  <div
                    onClick={() => {
                      deleteProduct(id);
                      toast.success("Product Deleted Successfully");
                    }}
                  >
                    <RiDeleteBin2Fill className="icon" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <Toaster position="bottom-center" reverseOrder={false} />
      </table>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <UploadForm
            setShowModal={setShowModal}
            initialValues={selectedProduct}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default ProductsTable;
