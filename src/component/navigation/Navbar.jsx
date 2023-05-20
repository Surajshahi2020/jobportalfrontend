import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import image from "../../images/image.jpg"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "../Register/Register";
import Login from "../login/login";
function Navbar() {
  const accessTokenType = JSON.parse(localStorage.getItem("accessToken") || "{}").type;
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
  console.log(11111111111111111111111111, accessTokenType);

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

                        {accessTokenType === "student" ? (
                          <li className="dropdown-menu-item">
                            <Link to="/Student">Profile</Link>
                          </li>
                        ) : (
                          <li className="dropdown-menu-item">
                            <Link to="/Recruiter">Profile</Link>
                          </li>
                        )}

                        <li className="dropdown-menu-item"><Link to="/change_password">Change Password</Link></li>
                        {accessTokenType === "student" && (
                          <li className="dropdown-menu-item"><Link to="/student_job_apply">Applied Job</Link></li>
                        )}

                        {accessTokenType === "recruiter" && (
                          <li className="dropdown-menu-item">
                            <Link to="/job_post">Job Post</Link>
                          </li>
                        )}

                        {accessTokenType === "recruiter" && (
                          <li className="dropdown-menu-item">
                            <Link to="/candidate_list">Candidates List</Link>
                          </li>
                        )}

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
