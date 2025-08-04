function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
      <div className="container text-center">
        <h5 className="fw-bold">FlightBooker</h5>
        <p className="small">Your travel partner for free booking.</p>
        <p className="small mb-0">
          © {new Date().getFullYear()} FlightBooker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
