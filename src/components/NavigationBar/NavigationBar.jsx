import React, { useEffect, useContext } from "react";
import { HabsContext } from "../../contexts/HabsContext";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const { systemData } = useContext(HabsContext);

  return (
    <div className="navigation-bar-wrapper">
      <nav
        style={{ padding: "0 50px" }}
        className="navbar navbar-dark bg-dark navbar-expand-lg nav-bar-db"
      >
        <a className="navbar-brand" href="/">
          Doctor Bootstrap
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Add an appointment
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
