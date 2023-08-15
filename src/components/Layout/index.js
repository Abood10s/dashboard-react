import React, { useState } from "react";
import SideBar from "../Sidebar";
import Navbar from "../Navbar";
import "./style.css";
const Layout = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="layout">
      <Navbar setIsShown={setIsShown} isShown={isShown} />
      <SideBar isShown={isShown} setIsShown={setIsShown} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
