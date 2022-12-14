import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const ICONS = [
    {
      icon: <FaFacebookSquare />,
      url: "https://www.facebook.com/mejrii.seyf",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/seyf-mejri-848a8416b/",
    },
    {
      icon: <FaGithubSquare />,
      url: "https://github.com/seyyf",
    },
  ];
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

            <div className="flex gap-4">
              {ICONS.map((data, key) => {
                return (
                  <a href={data.url} target="_blank" rel="noreferrer" key={key}>
                    <div className="text-color-white cursor-pointer text-[25px] hover:text-mainColor duration:200 ease-in">
                      {data.icon}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
