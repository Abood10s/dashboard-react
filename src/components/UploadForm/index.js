import React from "react";
import "./style.css";
import { useFormik } from "formik";
import Product from "../Product";
import { formatFileSize, schema, toBase64 } from "../../utils";
import FormField from "./FormField";
import { useContext } from "react";
import { ProductsContext } from "../../Context";

const UploadForm = () => {
  const date = new Date();
  const { products, addProduct, deleteAllProducts } =
    useContext(ProductsContext);

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
    onSubmit: async (values, { resetForm }) => {
      const imageBase64 = await toBase64(values.productImage);
      addProduct({
        ...values,
        time: date.toLocaleTimeString(),
        productDate: date.toLocaleDateString("en-gb"),
        id: Math.floor(Math.random() * 1000),
        productImage: imageBase64,
      });
      resetForm({
        name: "",
        category: "",
        description: "",
        productImage: undefined,
        rating: undefined,
        price: undefined,
      });
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
            <small style={{ color: "red", fontWeight: "bold" }}>
              {formik.errors.category}
            </small>
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
            <small style={{ color: "red", fontWeight: "bold" }}>
              {formik.errors.productImage}
            </small>
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
        return <Product data={product} key={product.id} />;
      })}
      {products.length > 1 && (
        <button
          onClick={() => deleteAllProducts()}
          className="delete-image"
          style={{ margin: "1.5rem " }}
        >
          Delete All products
        </button>
      )}
    </>
  );
};

export default UploadForm;
