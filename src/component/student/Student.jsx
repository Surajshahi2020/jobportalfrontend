import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/footer";
import "./student.css";
import SProfile from "./profile";

function Student() {
  return (
    <div className="student-container">
      <Navbar />
      <SProfile />

      <div className="student-footer">
        <Footer />
      </div>
    </div>
  );
}
export default Student;