import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations.js";
import { isRefreshingSelector } from "./redux/auth/selectors.js";
import Layout from "./components/Layout/Layout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";

const Home = lazy(() => import("./pages/HomePage.jsx"));
const Registration = lazy(() => import("./pages/RegistrationPage.jsx"));
const Login = lazy(() => import("./pages/LoginPage.jsx"));
const Contacts = lazy(() => import("./pages/ContactsPage.jsx"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingSelector);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/register"
        element={
          <RestrictedRoute>
            <Registration />
          </RestrictedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
