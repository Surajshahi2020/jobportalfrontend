import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./component/navigation/Navbar";
import Footer from "./component/footer/footer";
import IndexPage from "./pages/index";
import StudentPage from "./pages/student";
import StudentChangePasswordPage from "./pages/change_password";
import {Link} from "react-router-dom"

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
          <Route path="/change_password" element={<StudentChangePasswordPage />} />
          <Route path="*" element={<NotFound />} />
          </></Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
