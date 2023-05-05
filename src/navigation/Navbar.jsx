import React from "react";
import "./navbar.css";
import logo from "../images/logo.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
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
              <a href="https://sabaikojobs.com/"><i className="fa fa-home"></i>HOME</a>
            </li>
            <li>
              <a href="https://sabaikojobs.com/"><i className="fa fa-gear"></i>SERVICE</a>
            </li>
            <li>
              <a href="https://sabaikojobs.com/"><i className="fa fa-address-book"></i>CONTACT US</a>
            </li>
            <li>
              <a href="https://sabaikojobs.com/"><i className="fa  fa-bullhorn"></i>ABOUT US</a>
            </li>
            <li>
              <a href="https://sabaikojobs.com/login">LOGIN</a>
            </li>
            <li>
              <a href="https://sabaikojobs.com/signup">SIGNUP</a>
            </li>
            </ul>
          </div>
       
       
 

        </div>
     
     </div>

    </div>
    
  );
}
export default Navbar;
