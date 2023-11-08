import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarSmall = ({ userEmail }) => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    if (userEmail) {
      navigate(link);
    } else {
      document.getElementById("entry_modal").showModal();
    }
  };

  return (
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
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
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#7D283A]"
        >
          <li>
          <span onClick={()=>navigate("/")} className="hover:text-white">
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => handleNavigate("/media")}
              className="hover:text-white"
            >
              Media
            </span>
          </li>
          <li>
            <span
              onClick={() => handleNavigate("/about")}
              className="hover:text-white"
            >
              About
            </span>
          </li>
          <li>
            <span
              onClick={() => document.getElementById("msg_modal").showModal()}
              className="hover:text-white"
            >
              Message
            </span>
          </li>
        </ul>
      </div>
      <Link to="" className="btn btn-ghost normal-case text-xl text-white">
        Hero Media
      </Link>
    </div>
  );
};

export default NavbarSmall;
