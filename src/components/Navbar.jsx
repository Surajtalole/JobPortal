import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 shadow-md bg-white">
      <nav className="flex justify-between items-center p-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>JobPortal</span>
        </a>
        {/* nav item for large device */}
        <ul className="hidden md:flex gap-12">
          {navItem.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "active text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-600 transition-colors duration-300"
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* signup and login btn */}
        {/* for large screen */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:flex">
          <NavLink
            to="/login"
            className="py-2 px-5 border border-blue-600 rounded hover:bg-blue-600 hover:text-blue transition-colors duration-300"
          >
            Log In
          </NavLink>
          <NavLink
            to="/sign-up"
            className="py-2 px-5 border border-blue-600 rounded bg-blue text-white  hover:text-blue transition-colors duration-300"
          >
            Sign Up
          </NavLink>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary" />
            ) : (
              <FaBarsStaggered className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navitems for mobile */}
      <div
        className={`fixed inset-0 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-black bg-opacity-80 backdrop-blur-sm`}
      >
        <div className="absolute top-0 right-0 p-6">
          <button onClick={handleMenuToggler}>
            <FaXmark className="w-6 h-6 text-white" />
          </button>
        </div>
        <ul className="flex flex-col items-start justify-center h-[45%] space-y-6 pl-6">
          {navItem.map(({ path, title }) => (
            <li key={path} className="text-lg text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "hover:text-blue-400")}
                onClick={handleMenuToggler}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className="py-2 text-white hover:text-blue-400 transition-colors"
              onClick={handleMenuToggler}
            >
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-up"
              className="py-2 text-white hover:text-blue-400 transition-colors"
              onClick={handleMenuToggler}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
