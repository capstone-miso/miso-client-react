import {
  faCompass,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./BottomNavigation.css";

const BottomNavigation: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const handleNavClick = (path: string) => {
    setActiveNav(path);
    window.location.href = path; // Navigate to the clicked path
  };

  return (
    <>
      <nav className="wrapper">
        <div
          style={{zIndex:20}} 
          className={activeNav === "/restaurant-map" ? "nav-link active" : "nav-link"}
          onClick={() => handleNavClick("/restaurant-map")}
        >
          <div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        <div
          className={
            activeNav === "/matzipList" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/matzipList")}
        >
          <div>
            <FontAwesomeIcon icon={faCompass} />
          </div>
        </div>
        <div
          className={
            activeNav === "/againList" ? "nav-link active" : "nav-link"
          }
          onClick={() => handleNavClick("/againList")}
        >
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <div
          className={
            activeNav === "/personalpage" ? "nav-link active" : "nav-link"
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
