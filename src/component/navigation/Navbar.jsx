import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "../Register/Register";
import Login from "../login/login";
function Navbar() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const handleLoginClick = () => {
    setLoginVisible(!loginVisible);
    setSignupVisible("");
  };

  const handleSignupClick = () => {
    setSignupVisible(!signupVisible);
    setLoginVisible("");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <div className="main-header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-md-9">
            <ul>
              <li>
                <a href="https://sabaikojobs.com/">
                  <i className="fa fa-home"></i>HOME
                </a>
              </li>
              <li>
                <a href="https://sabaikojobs.com/">
                  <i className="fa fa-gear"></i>SERVICE
                </a>
              </li>
              <li>
                <a href="https://sabaikojobs.com/">
                  <i className="fa fa-address-book"></i>CONTACT US
                </a>
              </li>
              <li>
                <a href="https://sabaikojobs.com/">
                  <i className="fa  fa-bullhorn"></i>ABOUT US
                </a>
              </li>
              { !localStorage.getItem("accessToken") && (<><li  className="register-dropdown">
                <button className="dropbtn" onClick={handleLoginClick}>
                  LOGIN
                </button>
                {loginVisible && (
                  <div className="dropdown-content">
                    <Login />
                  </div>
                )}
              </li>
              <li className="register-dropdown">
                <button className="dropbtn" onClick={handleSignupClick}>
                  SIGNUP
                </button>
                {signupVisible && (
                  <div className="dropdown-content">
                    <Register />
                  </div>
                )}
              </li> </>)} 
              { localStorage.getItem("accessToken") && (<><li className="Logout">
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </li></>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
