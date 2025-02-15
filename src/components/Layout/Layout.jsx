import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
