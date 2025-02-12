import React from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import HoverPreview from "./components/HoverPreview";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Content />
      <Sidebar />
      <HoverPreview />
    </div>
  );
};

export default App;
