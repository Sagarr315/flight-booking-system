import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <h2 className="text-center mb-4">Login</h2>
      <form className="auth-form">
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
            placeholder="Enter password"
          />
          <p className="m-1"><Link>Forget Password ?</Link></p>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <p className="m-1">
          Not registered?<Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
