import {
  faCompass,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import "./BottomNavigation.css";

const BottomNavigation: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("/test");
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setActiveNav(path);
    navigate(path); // Navigate to the clicked path
  };

  return (
    <>
      <nav className="wrapper">
        <div
          className={activeNav === "/test" ? "nav-link active" : "nav-link"}
          onClick={() => handleNavClick("/test")}
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
