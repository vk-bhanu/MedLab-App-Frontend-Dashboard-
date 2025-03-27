import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="layout">
      <Sidebar/>
      <div className="content">
      <button onClick={handleLogout} className="btn btn-danger" style={{ position: "absolute", top: "10px", right: "10px" }}>
          Logout
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
