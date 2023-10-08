import React from "react";
import NavBar from "../home/NavBar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <NavBar></NavBar>
      <div>
        <h2 className="text-3xl my-10 text-center">Please login</h2>

        <form className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Don't have an account ? Please{" "}
          <Link to="/register"  className="text-blue-600 font-semibold" >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
