import React, { useState } from "react";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { RiNotification2Fill } from "react-icons/ri";
import { RiParentFill } from "react-icons/ri";
import defaultAvatar from "../../assets/profile.png";
import PopUpMenu from "../PopupMenu";

import "./style.css";

const Navbar = ({ isShown, setIsShown }) => {
  const [showMenu, setShowMenu] = useState(false);
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
        <div className="avatar" onClick={() => setShowMenu(!showMenu)}>
          <img src={defaultAvatar} alt="profile" />
        </div>
        <PopUpMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          classStyle="account-menu"
        >
          <h4>Account</h4>
          <small>Abood maher</small>
          <div className="line"></div>
          <button className="sign-out">Signout</button>
        </PopUpMenu>
      </div>
    </div>
  );
};

export default Navbar;
