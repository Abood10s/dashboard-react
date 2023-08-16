import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context";
import { RiAddFill } from "react-icons/ri";
import Modal from "../../components/Modal";
import UploadForm from "../../components/UploadForm";
import Product from "../../components/Product";
import Layout from "../../components/Layout/index";

import "./style.css";

const ProductsPage = () => {
  const { products, deleteAllProducts } = useContext(ProductsContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <div className="all-products">
        <div className="products-cont">
          <h2>Products</h2>
          <button className="primary-button" onClick={() => setShowModal(true)}>
            <RiAddFill /> Add
          </button>
        </div>
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <UploadForm />
          </Modal>
        ) : null}
        <div className="products">
          {products?.map((product) => {
            return <Product data={product} key={product.id} />;
          })}
        </div>
        {products.length > 1 && (
          <button
            onClick={() => deleteAllProducts()}
            className="delete-image"
            style={{ margin: "1.5rem 0" }}
          >
            Delete All products
          </button>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
