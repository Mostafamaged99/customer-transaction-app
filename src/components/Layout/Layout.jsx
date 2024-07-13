import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 p-0">
          <Navbar />
        </div>
        <div className="col-md-11">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
