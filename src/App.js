import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/navigation/Navbar";
import Signup from "./component/signup/Signup";
import Content from "./component/content/content";
import Homepage from "./component/homepage/Homepage";
import Login from "./component/login/login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/content" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
