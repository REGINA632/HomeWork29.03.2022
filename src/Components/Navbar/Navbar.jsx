import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/task1">Task1</NavLink>
          <NavLink to="/task2">Task2</NavLink>
          <NavLink to="/task3">Task3</NavLink>
          <NavLink to="/task4">Task4</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
