import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import image from "../../images/image.jpg"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "../Register/Register";
import Login from "../login/login";
function Navbar() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

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
    window.location.href = "/";

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
              {!localStorage.getItem("accessToken") && (<><li className="register-dropdown">
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

              {localStorage.getItem("accessToken") && (
                <>
                  <li className="student-profile" onClick={handleDropdownToggle}>
                    <img src={image} alt="student-logo" />
                    {showDropdown && (
                        <ul className="dropdown-menu">
                        <li className="dropdown-menu-item"><a href="https://preview.themeforest.net/item/jobes-job-portal-html-template/full_screen_preview/43974301?_ga=2.78735261.860034729.1683561914-196358546.1674547707">Profile</a></li>
                        <li className="dropdown-menu-item"><a href="https://preview.themeforest.net/item/jobes-job-portal-html-template/full_screen_preview/43974301?_ga=2.78735261.860034729.1683561914-196358546.1674547707">Resume</a></li>
                        <li className="dropdown-menu-item"><a href="https://preview.themeforest.net/item/jobes-job-portal-html-template/full_screen_preview/43974301?_ga=2.78735261.860034729.1683561914-196358546.1674547707">Bookmark Job</a></li>
                        <li className="dropdown-menu-item" onClick={handleLogout}><button className="logout" onClick={handleLogout}>Logout</button>
                        </li> 
                    </ul>
                    )}
                  </li>
                </>
              )}


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
