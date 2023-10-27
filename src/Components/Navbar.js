import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className="sm:flex sm:justify-between sm:items-center">
            <h1 className="text-6xl text-color-white font-['Sensations_and_Qualities'] flex justify-between items-center">
              MS
              <button
                className="!text-2xl"
                onClick={() => setShowMenu(!showMenu)}
              >
                <FiMenu className="block sm:hidden" />
              </button>
            </h1>
            <div
              className={`${
                showMenu ? "opacity-100" : "opacity-0"
              } grid sm:z-auto sm:static absolute sm:opacity-100 bg-color-white sm:bg-color-transparent w-full left-0 sm:w-auto sm:flex gap-6 p-5 duration-500 ease-in-out`}
            >
              <>
                {MENU.map((menu, idx) => {
                  return (
                    <NavLink
                      key={idx}
                      to={menu.to}
                      className="btn-menu"
                      activeclassname={menu.activeclassname}
                    >
                      {menu.title}
                    </NavLink>
                  );
                })}
              </>

              <div className="flex gap-4">
                {ICONS.map((icon, index) => {
                  return (
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <div className="sm:text-color-white text-darkColor cursor-pointer text-[25px] hover:text-mainColor duration:200 ease-in">
                        {icon.icon}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
