import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  // Link style handler (desktop vs mobile)
  const linkStyle = (isActive, isMobile = false) =>
    `px-3 py-2 text-lg rounded-md font-medium ${
      isActive
        ? "text-emerald-600 bg-amber-400"
        : isMobile
        ? "text-emerald-700 hover:bg-amber-200 hover:text-emerald-800"
        : "text-white hover:text-emerald-200"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => linkStyle(isActive)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className={({ isActive }) => linkStyle(isActive)}>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className={({ isActive }) => linkStyle(isActive)}>
          About Us
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/addProduct" className={({ isActive }) => linkStyle(isActive)}>
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/allProduct" className={({ isActive }) => linkStyle(isActive)}>
              All Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/myProduct" className={({ isActive }) => linkStyle(isActive)}>
              My Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/carts" className="text-white hover:text-emerald-200">
              <FaCartShopping size={24} />
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const mobileLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => linkStyle(isActive, true)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className={({ isActive }) => linkStyle(isActive, true)}>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className={({ isActive }) => linkStyle(isActive, true)}>
          About Us
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/addProduct" className={({ isActive }) => linkStyle(isActive, true)}>
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/allProduct" className={({ isActive }) => linkStyle(isActive, true)}>
              All Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/myProduct" className={({ isActive }) => linkStyle(isActive, true)}>
              My Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/carts" className="text-emerald-700 hover:text-emerald-800">
              <FaCartShopping size={24} />
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOutUser()
      .then(() => console.log("Sign out successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="top-0 sticky w-full z-50  bg-amber-500 shadow-sm">
      <div className="navbar px-4 md:px-8">
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {mobileLinks}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="hidden md:block md:w-12 md:h-12" src="/Allimage/logo.png" alt="PrimeGo Logo" />
            <a className="btn btn-ghost text-2xl font-bold text-emerald-700">PrimeGo</a>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Auth buttons */}
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 p-2 items-center">
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img
                  className="md:w-12 md:h-12 w-8 h-8 rounded-full border-2 border-emerald-500"
                  src={user.photoURL}
                  alt="User avatar"
                />
              </div>
              <button
                onClick={handleSignOut}
                className="btn rounded-2xl px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800 transition"
              >
                <span className="text-xl sm:text-lg">Log Out</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/register">
                <span className="md:text-xl bg-emerald-700 text-white rounded-2xl px-4 py-2 md:font-medium hover:bg-emerald-800 transition cursor-pointer">
                  Sign Up
                </span>
              </Link>
              <Link to="/login">
                <span className="md:text-xl bg-emerald-700 text-white rounded-2xl px-4 py-2 md:font-medium hover:bg-emerald-800 transition cursor-pointer">
                  Log In
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
