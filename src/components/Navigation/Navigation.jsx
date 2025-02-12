import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
