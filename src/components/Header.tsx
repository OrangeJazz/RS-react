import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
interface ActiveOption {
  isActive: boolean;
}
const setActive = ({ isActive }: ActiveOption) =>
  isActive ? "header__link active-link" : "header__link";
const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <NavLink to="/" className={setActive} end>
          Home
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
      </div>
    </header>
  );
};
export { Header };
