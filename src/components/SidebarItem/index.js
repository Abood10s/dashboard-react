import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const SideBarItem = ({ title, path, children }) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => ({
        color: isActive ? "#6366F1" : "",
        background: isActive ? "#252E3E" : "",
        fontWeight: isActive ? "bold" : "",
      })}
      className="sidebar-item"
    >
      {children}
      {title}
    </NavLink>
  );
};

export default SideBarItem;
