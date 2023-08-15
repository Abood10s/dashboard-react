import React from "react";
import "./style.css";

const SideBar = ({ isShown, setIsShown }) => {
  return (
    <>
      <div className={`sidebar ${isShown ? "slide-right" : ""}`}></div>;
      {isShown && (
        <div className="overlay" onClick={() => setIsShown(false)}></div>
      )}
    </>
  );
};

export default SideBar;
