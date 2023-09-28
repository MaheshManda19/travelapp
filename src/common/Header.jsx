import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <>
        <p className="head-grp" onClick={() => navigate("/")}>
          Home
        </p>

        <p className="head-grp" onClick={() => navigate("/about")}>
          About
        </p>

        <p className="head-grp" onClick={() => navigate("/Help")}>
          Help
        </p>
      </>
    </div>
  );
};

export default Header;
