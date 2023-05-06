import React from "react";
import Navbar from "../navigation/Navbar";
import Content from "../content/content";
import Login  from "../login/login";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Login />
    </div>
  );
}

export default App;