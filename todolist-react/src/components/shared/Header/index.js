import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Notepad_icon.svg/1200px-Notepad_icon.svg.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Online NotePad
        </Link>
        <div>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
