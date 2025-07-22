import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="outlet vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
