import React, { useEffect } from "react";
import "./style.css";
const fadeInModal = { animation: "fadeModal 0.2s forwards" };
const HideMenu = { animation: "HideMenu 0.1s forwards" };
const PopUpMenu = ({ children, showMenu, setShowMenu, classStyle }) => {
  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <div
      className={`pop-menu-container ${
        classStyle !== "notification-menu" ? classStyle : "notification-menu"
      }`}
      style={showMenu ? fadeInModal : HideMenu}
    >
      {children}
    </div>
  );
};

export default PopUpMenu;
