import React, { useEffect } from "react";
import SideBarItem from "../SidebarItem";
import { PATHS } from "../../routes";
import { useLocation } from "react-router-dom";
import { AiFillSignal } from "react-icons/ai";
import { RiPriceTag3Fill, RiLoginBoxFill } from "react-icons/ri";
import { RiTwitterFill, RiInstagramFill, RiGithubFill } from "react-icons/ri";

import "./style.css";

const SideBar = ({ isShown, setIsShown }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setIsShown(false);
  }, [pathname]);
  return (
    <>
      <div className={`sidebar ${isShown ? "slide-right" : ""}`}>
        <div className="icon">Logo</div>
        <div className="side-links">
          <SideBarItem title={"Overview"} path={PATHS.OVERVIEW}>
            <AiFillSignal className="icon" />
          </SideBarItem>
          {/* <SideBarItem title={"Account"} path={PATHS.ACCOUNT}>
            <RiUser3Fill className="icon" />
          </SideBarItem> */}
          <SideBarItem title={"Products"} path={PATHS.PRODUCTS}>
            <RiPriceTag3Fill className="icon" />
          </SideBarItem>
          <SideBarItem title={"Login"} path={PATHS.LOGIN}>
            <RiLoginBoxFill className="icon" />
          </SideBarItem>
          {/* <SideBarItem title={"Settings"} path={PATHS.SETTINGS}>
            <RiSettings5Fill className="icon" />
          </SideBarItem> */}
        </div>
        <div className="social">
          <a href="https://twitter.com/AbdulrahmanPs20">
            {" "}
            <RiTwitterFill className="social-icon" />
          </a>
          <a href="https://www.instagram.com/aboodsaafeen/">
            {" "}
            <RiInstagramFill className="social-icon" />
          </a>
          <a href="https://github.com/Abood10s">
            <RiGithubFill className="social-icon" />
          </a>
        </div>
      </div>
      ;
      {isShown && (
        <div className="overlay" onClick={() => setIsShown(false)}></div>
      )}
    </>
  );
};

export default SideBar;
