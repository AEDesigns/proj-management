import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./signInLinks";
import SignOutLinks from "./signoutLinks";
import { connect } from "react-redux";

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
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
