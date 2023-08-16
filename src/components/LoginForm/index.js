import React from "react";

import FormField from "../UploadForm/FormField";
import { useFormik } from "formik";
import { loginSchema } from "../../utils";
import { RiInformationLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import "./style.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm({
        email: "",
        password: "",
      });
      navigate("/");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <div className="form-header">
        <h1>Login</h1>
        <p>
          Don't have an account? <span>Register</span>
        </p>
      </div>
      <FormField
        label="Email Address"
        id="email"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        placeholder="Enter Email Address"
      />
      <FormField
        label="Password"
        id="password"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password}
        placeholder="Enter Password"
      />
      <button type="submit" className="login-button">
        Sign in
      </button>
      <div className="form-info">
        <RiInformationLine className="info-i" />
        You can use demo@devias.io and password Password123!
      </div>
    </form>
  );
};

export default LoginForm;
