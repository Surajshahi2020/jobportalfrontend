import React from "react";
import Navbar from "../navigation/Navbar";

import Content from "../content/content";
import Category from "../content/category";
import Footer from "../footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Category />
      <Footer />
      
    </div>
  );
}
export default App;