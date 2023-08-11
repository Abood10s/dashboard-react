import React, { useState } from "react";
import "./style.css";
import { useFormik } from "formik";
import Product from "../Product";
import { formatFileSize, schema } from "../../utils";
import FormField from "./FormField";

const UploadForm = () => {
  const [products, setProducts] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      productImage: undefined,
      rating: undefined,
      price: undefined,
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setProducts([...products, values]);
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="upload-form">
        <FormField
          label="Product Name"
          id="name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
          placeholder="Enter product name"
        />
        <div className="form-group">
          <label htmlFor="category">Product Category:</label>
          <select
            name="category"
            id="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            className="input"
          >
            <option value="">Select Category</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Cameras">Cameras</option>
            <option value="Clothing">Clothing</option>
            <option value="Skincare">Skincare</option>
            <option value="Accessories">Accessories</option>
            <option value="Plants">Plants</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div style={{ color: "red" }}>{formik.errors.category}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image:</label>
          <input
            className="input"
            type="file"
            id="productImage"
            onChange={(event) => {
              formik.setFieldValue(
                "productImage",
                event.currentTarget.files[0]
              );
            }}
            onBlur={formik.handleBlur}
          />
          {formik.values.productImage && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                alignItems: "center",
                margin: "0.5rem auto",
              }}
            >
              <img
                src={URL.createObjectURL(formik.values.productImage)}
                alt="product"
                className="fade-in product-image"
              />
              <small style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                file size: {formatFileSize(formik.values.productImage.size)}
              </small>
              <button
                onClick={() => (formik.values.productImage = undefined)}
                className="delete-image"
              >
                Delete
              </button>
            </div>
          )}
          {formik.touched.productImage && formik.errors.productImage ? (
            <div style={{ color: "red" }}>{formik.errors.productImage}</div>
          ) : null}
        </div>
        <FormField
          label="Product Price"
          id="price"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.price}
          error={formik.touched.price && formik.errors.price}
          placeholder="Enter product price"
        />
        <FormField
          label="Product Rating"
          id="rating"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.rating}
          error={formik.touched.rating && formik.errors.rating}
          placeholder="insert rating"
        />
        <FormField
          label="Product Description"
          id="description"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.description}
          error={formik.touched.description && formik.errors.description}
          placeholder="What's your thoughts about the product"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {products?.map((product) => {
        return <Product data={product} key={product.name} />;
      })}
    </>
  );
};

export default UploadForm;
