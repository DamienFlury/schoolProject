import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Schlieren
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/*<a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>*/}
            <NavLink to="/home" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/foto"
              aria-expanded="false"
              data-target="#navbarNav"
              className="nav-link"
              exact
            >
              Fotos
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/video">
              Videos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
