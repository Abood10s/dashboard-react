import React from "react";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { RiNotification2Fill } from "react-icons/ri";
import { RiParentFill } from "react-icons/ri";

import "./style.css";

const Navbar = ({ isShown, setIsShown }) => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <CiMenuBurger
          className="menu icon"
          onClick={() => setIsShown(!isShown)}
        />
        <CiSearch className="icon" />
      </div>
      <div className="right-icons">
        <RiParentFill className="icon" />{" "}
        <RiNotification2Fill className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
