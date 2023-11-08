import React from "react";
import NavbarSmall from "./NavbarSmall";
import NavbarLarge from "./NavbarLarge";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ userEmail }) => {

  const navigate = useNavigate()

  const makeSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const location = useLocation()
  const {pathname} = location

  console.log(userEmail)

  return (
    <div className={`navbar ${pathname === "/" ? "bg-base-0" : "bg-black"} absolute z-10 top-0`}>
      <NavbarSmall userEmail={userEmail}></NavbarSmall>

      <NavbarLarge userEmail={userEmail}></NavbarLarge>

      <div className="navbar-end">
        {userEmail && <button onClick={makeSignOut} className="btn">Sign Out</button>}
      </div>
    </div>
  );
};

export default Navbar;
