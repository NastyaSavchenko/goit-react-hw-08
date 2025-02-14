import { NavLink } from "react-router";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
