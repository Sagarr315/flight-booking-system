function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Welcome to Your Dashboard</h1>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Upcoming Flights</h5>
            <p>No flights booked yet.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Profile Info</h5>
            <p>View or edit your personal details.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Support</h5>
            <p>Contact our support team for help.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
