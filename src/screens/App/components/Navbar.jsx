import React from "react";
import { Link } from "react-router-dom";

import routeConsts from "../../../shared/constants/routes";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          React Boilerplate
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={routeConsts.HOME.path}>
                {routeConsts.HOME.name}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={routeConsts.SHOP.path}>
              {routeConsts.SHOP.name}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={routeConsts.ABOUT.path}>
              {routeConsts.ABOUT.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
