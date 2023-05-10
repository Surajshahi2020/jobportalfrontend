import React from "react";
import "./footer.css"
import logo from "../../images/logo.jpg"

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-row">
                <div className="col-md-3">
                    <div className="footer-title">
                        <h5>About Company</h5>
                    </div>
                    <ul className="footer-ul">
                        <li><a href="create-resume.html">Contact US</a></li>
                        <li><a href="create-resume.html">Terms and Condition</a></li>
                        <li><a href="create-resume.html">Privacy and Policy</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <div className="footer-title">
                        <h5>For Student</h5>
                    </div>
                    <ul className="footer-ul">
                        <li><a href="create-resume.html">Create Resume</a></li>
                        <li><a href="create-resume.html">Browse Category</a></li>
                        <li><a href="create-resume.html">Browse Jobs</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <div className="footer-title">
                        <h5>For Recruiter</h5>
                    </div>
                    <ul className="footer-ul">
                        <li><a href="create-resume.html">Post A Job</a></li>
                        <li><a href="create-resume.html">Browse Candidates</a></li>
                        <li><a href="create-resume.html">Employer Dashboard</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <div>
                        <div class="footer-title">
                            <h5>Social Links</h5>
                        </div>
                        <ul className="social">
                            <li><a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>  
                    <div className="developer-name">
                        <img src={logo} style={{width:130}} alt="Logo" />
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Footer;