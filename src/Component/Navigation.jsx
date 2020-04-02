import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Schlieren
          </a>
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
                <NavLink to="/home" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/foto"
                    aria-expanded="false"
                    data-target="#navbarNav"
                    exact
                  >
                    Fotos
                  </NavLink>
                </a>
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
  }
}

export default Navigation;
