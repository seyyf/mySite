import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutMe />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
    </div>
  );
}

export default AnimatedRoutes;
