import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  navigate("/login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8080/api/users/register?",
        formData,
        {
          params: {
            isAdmin: false,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Login successful");
      navigate("/login");
    } catch (error) {
      toast.error("Sign Up Failed");
    }
  };

  return (
    <div className="auth-container ">
      <ToastContainer />
      <h2 className="text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
          >
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
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Contact Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter contact number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
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
