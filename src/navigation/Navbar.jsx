import React from "react";
import "./navbar.css";
import logo from "../images/logo.jpg";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
      <ul>
        <li>
          <a href="https://sabaikojobs.com/">HOME</a>
        </li>
        <li>
          <a href="https://sabaikojobs.com/">SERVICE</a>
        </li>
        <li>
          <a href="https://sabaikojobs.com/">CONTACT US</a>
        </li>
        <li>
          <a href="https://sabaikojobs.com/">ABOUT US</a>
        </li>
        <li>
          <a href="https://sabaikojobs.com/login">LOGIN</a>
        </li>
        <li>
          <a href="https://sabaikojobs.com/signup">SIGNUP</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
