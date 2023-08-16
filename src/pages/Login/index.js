import React from "react";

import "./style.css";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="form-cont">
        <LoginForm />
      </div>
      <div className="login-image">
        <h3>
          Welcome To Your <p className="color-text">Dashboard</p>
        </h3>
        <img
          src="https://material-kit-react.devias.io/assets/auth-illustration.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginPage;
