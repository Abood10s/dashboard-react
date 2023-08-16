import React from "react";
import "./style.css";
const PrimaryBtn = ({ title, children, setShowModal }) => {
  return (
    <button
      className="primary-button"
      onClick={() => {
        title === "Cancel" ? setShowModal(false) : setShowModal(true);
      }}
    >
      {children}
      <span>{title}</span>
    </button>
  );
};

export default PrimaryBtn;
