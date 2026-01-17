import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const style = {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "green",
    fontWeight: "bold",
    fontSize: "25px",
  };
  return (
    <div>
      <nav style={style}>
        <NavLink to={"/"} style={linkStyle}>
          Home
        </NavLink>
        <NavLink to={"/about"} style={linkStyle}>
          About
        </NavLink>
        <NavLink to={"/services"} style={linkStyle}>
          Services
        </NavLink>
        <NavLink to={"/contact"} style={linkStyle}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
export default Navbar;
