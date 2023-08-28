import React from "react";
import proptype from "prop-types";

function web_nevbar(props) {

  // this code select theme color 
  let theme = {};
  switch(props.mode) {
    case 'dark':{
        theme = {backgroundColor: "#2B3035"};
        break ;}
    case 'light':{
        theme = {backgroundColor: "#F8F9FA"};
        break ;}
    case 'red':{
        theme = {backgroundColor: "#551010"};
        break ;}
    case 'yellow' :{
        theme = {backgroundColor: "#D1BC34"};
        break ;}
    case 'green' :{
        theme = {backgroundColor: "#016901"};
        break;}
    default:
      return 'arya';
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={theme} data-bs-theme={`${props.nevtext}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="...">
            {props.tittle}
          </a>
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
                <a className="nav-link active" aria-current="page" href="...">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="...">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="..."
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="...">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="...">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="...">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  aria-disabled="true"
                  href="..."
                >
                  {props.other}
                </a>
              </li>
            </ul>

            {/* this is simple search box 
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}


            {/* dark mode light mode control  */}            
            {
              props.mode ==="light"? "" : 
              <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={props.redtoggleMode}>Red </button>
                <button type="button" className="btn btn-warning" onClick={props.yellowtoggleMode}>Yellow</button>
                <button type="button" className="btn btn-success" onClick={props.greentoggleMode}>Green</button>
              </div>
            }
            
            <div className={`form-check form-switch text-${props.mode ==="light"? "dark" : "light"}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.darktoggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === "light"? "Dark Mode" : "Light Mode"}
              </label>
            </div>
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
