import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const navbar = [
      <li key={1}>
        <Link className="lg:ml-1 btn btn-sm bg-white border-0 hover:bg-primary hover:text-white rounded text-primary font-bold">
          Home
        </Link>
      </li>,
      <li key={3}>
        <Link className="lg:ml-1 btn btn-sm bg-white border-0 hover:bg-primary hover:text-white rounded text-primary font-bold">
          Category
        </Link>
      </li>,
      <li key={2}>
        <Link className="lg:ml-1 btn btn-sm bg-white border-0 hover:bg-primary hover:text-white rounded text-primary font-bold">
          About
        </Link>
      </li>,
      <li key={4}>
        <Link className="lg:ml-1 btn btn-sm bg-white border-0 hover:bg-primary hover:text-white rounded text-primary font-bold">
          Blogs
        </Link>
      </li>,
      <li key={5}>
        <Link className="lg:ml-1 btn btn-sm bg-white border-0 hover:bg-primary hover:text-white rounded text-primary font-bold">
          <FaCartPlus></FaCartPlus>
        </Link>
      </li>,
      <li key={6}>
        <Link className="lg:ml-1 btn btn-sm bg-white border-0 hover:bg-primary hover:text-white rounded text-primary font-bold">
          <img
            className="w-7 h-7 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
        </Link>
      </li>,
    ];
    return (
      <div className="shadow-lg">
        <div className="navbar w-4/5 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navbar}
              </ul>
            </div>
            <Link className="btn btn-ghost hover:bg-slate-600 hover:text-white text-primary normal-case rounded  text-xl">Putatoe</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="btn-group">
              <input type="search" placeholder='Search Item' className="border-2 text-sm -pt-1 pb-1 focus:outline-none rounded-l-md px-2 bg-slate-100" />
              <button className="btn btn-sm btn-primary text-white rounded-r-md ">Search</button>
            </div>
          </div>
          <div className="navbar-end">
            <ul className='flex justify-end items-center'>{navbar}</ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
