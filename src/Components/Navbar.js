import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
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

            <div>{/* <Button text="Download CV" /> */}</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
