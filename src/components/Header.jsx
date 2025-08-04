import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">
        FlightBooker
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/book">
              Book Flight
            </Link>
          </li>
          
        </ul>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Flights"
          />
          <button className="btn btn-light" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
