import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { isLoggedInSelector } from "../redux/auth/selectors";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default RestrictedRoute;
