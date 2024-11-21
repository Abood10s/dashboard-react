import React from "react";

import FormField from "../UploadForm/FormField";
import { useFormik } from "formik";
import { loginSchema } from "../../utils";
import { RiInformationLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../routes";

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
        <div
          className="logo"
          style={{ maxWidth: "50px", marginBottom: "2rem" }}
        >
          <Link to={PATHS.OVERVIEW}>
            <svg
              fill="none"
              height="100%"
              viewBox="0 0 24 24"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.16"
                d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z"
                fill="#6366F1"
              ></path>
              <path
                d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z"
                fill="#6366F1"
              ></path>
            </svg>
          </Link>
        </div>
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
        <div>
          You can use{" "}
          <span style={{ color: "#6366F1" }}>mohammed@Abushaban</span> and
          password <span style={{ color: "#6366F1" }}>Password123!</span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
