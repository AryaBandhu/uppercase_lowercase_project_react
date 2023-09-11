import React from "react";
import proptype from "prop-types";
import { Link } from "react-router-dom";

function web_nevbar(props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg" data-theme="light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/themes">
                  Themes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

web_nevbar.prototype = {
  tittle: proptype.string,
};

export default web_nevbar;
