import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import "./navbar.css"

const Navbar = () => {
  return (
    <AppBar colors="primary" position="static" style={{ minHeight: "64px" }}>
      <Toolbar>
        <div className="navbar-header">
          <h2 className="brand">Open Flights</h2>
          <h3 className="subheader">Openly honest airline reviews.</h3>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
