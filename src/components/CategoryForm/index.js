import React from "react";
import FormField from "../UploadForm/FormField";
import { useFormik } from "formik";
import { categorySchema } from "../../utils";

const CategoryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      subCategories: [],
      category: "",
    },
    validationSchema: categorySchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Form Submitted", values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField
        label="Category Name"
        id="name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name} // Properly displays error
        placeholder="Enter category name"
      />
      <div className="form-group">
        <label htmlFor="category">Sub Category:</label>
        <select
          name="category"
          id="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          className="input"
        >
          <option value="">Select Sub Category</option>
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
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
