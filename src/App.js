import Axios from "axios";
import FileDownload from "js-file-download";
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Button from "./Components/Button";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";

function App() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "Mejri-Seyf-CV.pdf");
    });
  };
  return (
    <div className="container mx-auto">
      <Router>
        <div className="p-4">
          <nav>
            <div className="flex justify-between items-center">
              <h1 className="text-6xl text-color-white font-['Sensations_and_Qualities']">
                MS
              </h1>
              <div className="flex gap-12">
                <NavLink to="/" className="btn-menu" activeclassname="active">
                  About me
                </NavLink>
                <NavLink
                  to="/skills"
                  className="btn-menu"
                  activeclassname="active"
                >
                  Skills
                </NavLink>
                <NavLink
                  to="/experience"
                  className="btn-menu"
                  activeclassname="active"
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/contact"
                  className="btn-menu"
                  activeclassname="active-page"
                >
                  Contact
                </NavLink>
              </div>

              <div>
                <Button text="Download CV" onClick={(e) => download(e)} />
              </div>
            </div>
          </nav>
        </div>
        <div className="px-4">
          <Routes>
            <Route path="/" element={<AboutMe />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
          </Routes>
          <div className="flex justify-center items-end">
            <h3 className="text-color-white">@copyright Mejri seyf 2022</h3>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
