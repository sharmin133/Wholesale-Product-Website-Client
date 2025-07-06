import React from 'react';
import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium ${
              isActive
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900'
                : 'text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400'
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium ${
              isActive
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900'
                : 'text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400'
            }`
          }
        >
          Categories
        </NavLink>
      </li>

  <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium ${
              isActive
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900'
                : 'text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400'
            }`
          }
        >
          About Us
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/addProduct"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900'
                    : 'text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400'
                }`
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allProduct"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900'
                    : 'text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400'
                }`
              }
            >
              All Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProduct"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900'
                    : 'text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400'
                }`
              }
            >
              My Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/carts" className="text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400">
              <FaCartShopping size={24} />
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        console.log('signout successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-900 dark:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-900 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="md:w-12 md:h-12 w-6 h-6"
              src="/Allimage/logo.png"
              alt="PrimeGo Logo"
            />
            <a className="btn btn-ghost text-xl font-bold text-gray-900 dark:text-gray-100">PrimeGo</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

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
                className="btn rounded-2xl px-4 py-2 bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 transition"
              >
                <span className="text-xl sm:text-lg">Log Out</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/register">
                <span className="md:text-2xl bg-pink-500 text-white rounded-2xl px-4 py-2 md:font-medium hover:bg-pink-600 transition cursor-pointer">
                  Sign Up
                </span>
              </Link>
              <Link to="/login">
                <span className="md:text-2xl bg-pink-500 text-white rounded-2xl px-4 py-2 md:font-medium hover:bg-pink-600 transition cursor-pointer">
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

