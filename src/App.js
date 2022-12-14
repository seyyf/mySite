import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Navbar />
        <div className="px-4">
          <AnimatedRoutes />
          {/* <div className="flex justify-center items-end">
            <h3 className="text-color-white">@copyright Mejri seyf 2022</h3>
          </div> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
