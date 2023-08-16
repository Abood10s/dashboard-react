import React from "react";
import "./style.css";

const fadeInModal = { animation: "fadeModal 0.2s forwards" };
const fadeOutModal = { animation: "fadeOutModal 0.2s forwards" };

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <div
      className="modal-container"
      style={showModal ? fadeInModal : fadeOutModal}
    >
      {children}
      <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
    </div>
  );
};

export default Modal;
