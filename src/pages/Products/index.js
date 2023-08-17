import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context";
import { RiAddFill } from "react-icons/ri";
import Modal from "../../components/Modal";
import UploadForm from "../../components/UploadForm";
import Layout from "../../components/Layout/index";

import ProductsTable from "../../components/ProductsTable";
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
            <UploadForm setShowModal={setShowModal} />
          </Modal>
        ) : null}
        {products.length > 0 && <ProductsTable data={products} />}
        <div style={{ maxWidth: "90%", margin: "auto" }}>
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
      </div>
    </Layout>
  );
};

export default ProductsPage;
