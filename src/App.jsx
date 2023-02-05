import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <div className="bg-default h-screen">
        <Navbar />
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
