import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./component/navigation/Navbar";
import Footer from "./component/footer/footer";
import IndexPage from "./pages/index";
import StudentPage from "./pages/student";
import RecruiterPage from "./pages/recruiter"
import StudentChangePasswordPage from "./pages/change_password";
import {Link} from "react-router-dom";
import StudentJobApplyPage from "./pages/student_job_apply";
import PostJobPage from "./pages/job_post";
function NotFound() {
  return (
    <div style={{minHeight:'85vh', padding: '5rem', display:"flex", alignItems:"center" , justifyContent:"center"}}>
      <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  );
}
function Dummy(){
  return (<div className="dummy"></div>)
}
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <>
          <Route path="/" element={<IndexPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/recruiter" element={<RecruiterPage />} />
          <Route path="/change_password" element={<StudentChangePasswordPage />} />
          <Route path="/student_job_apply" element={<StudentJobApplyPage />}></Route>
          <Route path="/job_post" element={<PostJobPage />}></Route>
          <Route path="*" element={<NotFound />} />
          </></Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
