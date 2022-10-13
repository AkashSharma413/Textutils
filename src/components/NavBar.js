import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Link, useLocation  } from "react-router-dom";

const NavBar = (navProp) => {
  let location = useLocation();

  useEffect(() => {
  }, [location]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${navProp.mode} bg-${navProp.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {navProp.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname == "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname == "/about" ? "active" : ""}`} to="/about">
                {navProp.linkName}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              navProp.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={navProp.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

//Defining the PropTypes
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  linkName: PropTypes.string,
};

// Specifies the default values for props:
NavBar.defaultProps = {
  title: "Awesome Nav",
  linkName: "It is default link",
};

export default NavBar;
