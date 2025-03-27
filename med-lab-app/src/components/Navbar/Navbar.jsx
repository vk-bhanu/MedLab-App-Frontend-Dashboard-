import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate  } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact-us");
    }
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NavLink className="nav-link" to="/" end>
          <img
            src="/logo2.png"
            alt="Logo"
            width="150"
            height="50"
            class="d-inline-block align-text-top"
          />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav mx-auto custom-spacing">
            <li class="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </li>
          </ul>

          <div className="d-flex ms-lg-auto">
          <button onClick={handleContactClick} className="btn custom-btnn">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
