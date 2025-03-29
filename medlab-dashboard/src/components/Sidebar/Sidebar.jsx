import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaMedkit, FaEdit } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className={`menu-heading ${isCollapsed ? "collapsed" : ""}`}>
          Menu
        </h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? "☰" : "✖"}
        </button>
      </div>
      <div className="sidebar-menu-container">
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaHome className="menu-icon" />
              {!isCollapsed && <span>Home</span>}
            </NavLink>
          </li>

          <li className="sidebar-menu-item">
            <NavLink
              to="/add-test"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaMedkit className="menu-icon" />
              {!isCollapsed && <span>Add Test</span>}
            </NavLink>
          </li>

          <li className="sidebar-menu-item">
            <NavLink
              to="/manage-tests"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaEdit className="menu-icon" />
              {!isCollapsed && <span>Manage Tests</span>}
            </NavLink>
          </li>

          {/* <li className="sidebar-menu-item">
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUser className="menu-icon" />
              {!isCollapsed && <span>Profile</span>}
            </NavLink>
          </li>

          <li className="sidebar-menu-item">
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaCog className="menu-icon" />
              {!isCollapsed && <span>Settings</span>}
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
