import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center m-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Book Your Dream Flight Today</h1>
          <p className="lead">Hassle-free booking, low fares & quick service</p>
          <Link to="/book" className="btn btn-warning btn-lg mt-3">
            Book Now
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 my-2 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose FlightBooker?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-airplane-fill display-4 text-primary"></i>
              <h5 className="mt-3">Fast Booking</h5>
              <p>
                Book flights in just a few clicks with our smooth interface.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-shield-lock-fill display-4 text-primary"></i>
              <h5 className="mt-3">Secure Payment</h5>
              <p>100% safe transactions with trusted gateways.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-clock-history display-4 text-primary"></i>
              <h5 className="mt-3">24/7 Support</h5>
              <p>We’re here to help, anytime you need us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Flights */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Popular Flight Routes</h2>
          <div className="row g-4">
            {[
              { from: "Mumbai", to: "Delhi" },
              { from: "Bangalore", to: "Hyderabad" },
              { from: "Chennai", to: "Kolkata" },
            ].map((route, i) => (
              <div className="col-md-4" key={i}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      {route.from} → {route.to}
                    </h5>
                    <p className="card-text">Starting from ₹2,999</p>
                    <Link to="/book" className="btn btn-outline-primary btn-sm">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
