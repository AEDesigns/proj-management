import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./signInLinks";
import SignOutLinks from "./signoutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Management
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
