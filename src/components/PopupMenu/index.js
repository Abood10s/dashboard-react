import React, { useEffect } from "react";
import "./style.css";
const fadeInModal = { animation: "fadeModal 0.2s forwards" };
const HideMenu = { animation: "HideMenu 0.1s forwards" };
const PopUpMenu = ({ children, showMenu, setShowMenu }) => {
  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <div
      className="pop-menu-container"
      style={showMenu ? fadeInModal : HideMenu}
    >
      {children}
      <div className="line"></div>
      <button className="sign-out">Signout</button>
    </div>
  );
};

export default PopUpMenu;
