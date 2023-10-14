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
  const MENU = [
    {
      to: "/",
      activeclassname: "active",
      title: "about me",
    },
    {
      to: "/skills",
      activeclassname: "active",
      title: "skills",
    },
    {
      to: "/experience",
      activeclassname: "active",
      title: "experience",
    },
    {
      to: "/contact",
      activeclassname: "active-page",
      title: "contact",
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
            <div className="flex gap-6">
              {MENU.map((menu, idx) => {
                return (
                  <NavLink
                    key={idx}
                    to={menu.to}
                    className="btn-menu"
                    activeclassname={menu.activeclassname}
                  >
                    {menu.title.charAt(0).toUpperCase() + menu.title.slice(1)}
                  </NavLink>
                );
              })}
            </div>

            <div className="flex gap-4">
              {ICONS.map((icon, index) => {
                return (
                  <a
                    href={icon.url}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <div className="text-color-white cursor-pointer text-[25px] hover:text-mainColor duration:200 ease-in">
                      {icon.icon}
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
