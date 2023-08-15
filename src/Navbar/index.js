import React from "react";
import "./style.css";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
const Navbar = ({ isShown, setIsShown }) => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <CiMenuBurger className="menu" onClick={() => setIsShown(!isShown)} />
        <CiSearch />
      </div>
      <div>
        <CiSearch /> <CiSearch /> <CiSearch />
      </div>
    </div>
  );
};

export default Navbar;
