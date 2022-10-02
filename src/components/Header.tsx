import React from "react";
import { NavLink } from "react-router-dom";

interface ActiveOption {
  isActive: boolean;
}
const setActive = ({ isActive }: ActiveOption) =>
  isActive ? "active-link" : "";
const Header = () => {
  return (
    <header>
      <NavLink to="/" className={setActive} end>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About
      </NavLink>
    </header>
  );
};
export { Header };
