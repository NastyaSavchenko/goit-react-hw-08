import { NavLink } from "react-router";

const AuthNav = () => {
  return (
    <nav>
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
