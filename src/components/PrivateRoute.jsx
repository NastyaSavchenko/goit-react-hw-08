import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { isLoggedInSelector } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
