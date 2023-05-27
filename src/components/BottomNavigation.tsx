import {
  faCompass,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SelectedPath } from "../Atoms";
import { useNavigate } from "react-router-dom";
import "./BottomNavigation.css";

// const SelectedPath = atom<string>({
//   key: 'SelectedPath',
//   default: "/restaurant-map"
// });

const BottomNavigation: React.FC = () => {
  let [selectedPath,setSelectedPath]=useRecoilState<string>(SelectedPath);
  const navigate=useNavigate();
  const handleNavClick = (path: string) => {
    setSelectedPath(path)
    navigate(`..${path}`) 
  };

  return (
    <>
      <nav className="wrapper">
        <div
          style={{zIndex:20}} 
          className={selectedPath === "/restaurant-map" ? "nav-link active" : "nav-link"}
          onClick={() => handleNavClick("/restaurant-map")}
        >
          <div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        <div
          className={
            selectedPath === "/matzipList" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/matzipList")}
        >
          <div>
            <FontAwesomeIcon icon={faCompass} />
          </div>
        </div>
        <div
          className={
            selectedPath === "/againList" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/againList")}
        >
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <div
          className={
            selectedPath === "/personalpage" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/personalpage")}
        >
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default BottomNavigation;
