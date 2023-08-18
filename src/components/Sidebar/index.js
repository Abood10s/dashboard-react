import React, { useEffect } from "react";
import SideBarItem from "../SidebarItem";
import { PATHS } from "../../routes";
import { Link, useLocation } from "react-router-dom";
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
        <div className="logo">
          <Link to={PATHS.OVERVIEW}>
            <svg
              fill="none"
              height="100%"
              viewBox="0 0 24 24"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.16"
                d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z"
                fill="#6366F1"
              ></path>
              <path
                d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z"
                fill="#6366F1"
              ></path>
            </svg>
          </Link>
          <div className="side-line"></div>
        </div>
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
