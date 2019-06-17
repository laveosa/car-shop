import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navigations.scss";

class Navigation extends Component {
  render() {
    return (
      <div id="NavigationComponent">
        <div className="navigation-container bg-dark">
          <ul className="nav d-flex justify-content-end">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                <span className="text-light">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link">
                <span className="text-light">Add</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/edit" className="nav-link">
                <span className="text-light">Edit</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
