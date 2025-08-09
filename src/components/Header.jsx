import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark px-4">
      <Link className="navbar-brand fw-bold text-dark" to="/">
        <i class="bi bi-airplane-fill mx-1"></i>
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

      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item text-black">
            <Link className="nav-link" to="/book">
              BookFlight
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Login/Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
