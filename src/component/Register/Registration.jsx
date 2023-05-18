import React from "react";
import Navbar from "../navigation/Navbar";

import Content from "../content/content";
import Register from "./Register"

function Registration() {
  return (
    <div>
      <Navbar />
      <Content />
      <Register />
    </div>
  );
}

export default Registration;