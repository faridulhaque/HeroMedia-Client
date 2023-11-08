import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MessageDialog from "../modals/MessageDialog";

const NavbarLarge = ({ userEmail }) => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    if (userEmail) {
      navigate(link);
    } else {
      document.getElementById("entry_modal").showModal();
    }
  };
  return (
    <>
      <div className="navbar-center hidden lg:flex text-white ">
        <ul className="menu menu-horizontal px-1">
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
      <MessageDialog></MessageDialog>
    </>
  );
};

export default NavbarLarge;
