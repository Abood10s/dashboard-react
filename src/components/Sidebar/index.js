import React, { useEffect } from "react";
import SideBarItem from "../SidebarItem";
import { PATHS } from "../../routes";
import { useLocation } from "react-router-dom";
import { AiFillSignal } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import { RiPriceTag3Fill } from "react-icons/ri";
import { RiSettings5Fill } from "react-icons/ri";

import "./style.css";

const SideBar = ({ isShown, setIsShown }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setIsShown(false);
  }, [pathname]);
  return (
    <>
      <div className={`sidebar ${isShown ? "slide-right" : ""}`}>
        <SideBarItem title={"Overview"} path={PATHS.OVERVIEW}>
          <AiFillSignal className="icon" />
        </SideBarItem>
        <SideBarItem title={"Account"} path={PATHS.ACCOUNT}>
          <RiUser3Fill className="icon" />
        </SideBarItem>
        <SideBarItem title={"Products"} path={PATHS.PRODUCTS}>
          <RiPriceTag3Fill className="icon" />
        </SideBarItem>
        <SideBarItem title={"Settings"} path={PATHS.SETTINGS}>
          <RiSettings5Fill className="icon" />
        </SideBarItem>
      </div>
      ;
      {isShown && (
        <div className="overlay" onClick={() => setIsShown(false)}></div>
      )}
    </>
  );
};

export default SideBar;
