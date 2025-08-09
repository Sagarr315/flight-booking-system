import {Link} from "react-router-dom"; 

function Signup() {
  return (
    <div className="auth-container ">
      <h2 className="text-center mb-4">Sign Up</h2>
      <form className="auth-form">
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
          />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select className="form-control">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
          />
        </div>

        <div className="mb-3">
          <label>Contact Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter contact number"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
