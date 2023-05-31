import {
  faCompass,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./BottomNavigation.css";


const BottomNavigation: React.FC = () => {
  const navigate=useNavigate();
  const handleNavClick = (path: string) => {
    localStorage.setItem("path",path)
    navigate(`..${path}`) 
  };

  return (
    <>
      <nav className="wrapper">
        <div
          style={{zIndex:20}} 
          className={localStorage.getItem("path") === "/restaurant-map" ? "nav-link active" : "nav-link"}
          onClick={() => handleNavClick("/restaurant-map")}
        >
          <div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        <div
          className={
            localStorage.getItem("path") === "/matzipList" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/matzipList")}
        >
          <div>
            <FontAwesomeIcon icon={faCompass} />
          </div>
        </div>
        <div
          className={
            localStorage.getItem("path") === "/againList" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/againList")}
        >
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <div
          className={
            localStorage.getItem("path") === "/personalpage" ? "nav-link active" : "nav-link"
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
