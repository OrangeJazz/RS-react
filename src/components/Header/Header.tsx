import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

interface ActiveOption {
  isActive: boolean;
}

const activity = ({ isActive }: ActiveOption) =>
  isActive ? "header__link active-link" : "header__link";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <NavLink to="/" className={activity} end>
          Home
        </NavLink>
        <NavLink to="/about" className={activity}>
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
