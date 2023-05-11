import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/navigation/Navbar";
import Content from "./component/content/content";
import Homepage from "./component/homepage/Homepage";
import Login from "./component/login/login";
import Category from "./component/content/category";
import Student from "./component/student/Student";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/student" element={<Student />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/content" element={<Content />} />
          <Route path="/category" element={<Category /> }/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
