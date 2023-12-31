import React, { useContext } from "react";
import NavBar from "../home/NavBar";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";
import swal from 'sweetalert';


const Register = () => {
    const {createUser} = useAuth()
    const navigate = useNavigate()

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // console.log(email,name,password,photo)

        // validation
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/.test(password)){
            swal("Oops!", "Plz type Minimum six characters, at least one capital letter and one special charecter", "error");
        }

        else{
            // create user
        createUser(email,password)
        .then(result => {
            navigate('/')
            // console.log(result.user)
        })
        .catch(error => console.log(error))
        swal("Wow","Successfully Registered", "success");
        }

        
    }


  return (
    <div>
      <div>
        <NavBar></NavBar>
        <div>
          <h2 className="text-3xl my-5 text-center">Please Register</h2>

          <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/3 px-5 mx-auto">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
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
              <button className="btn bg-amber-500 text-white" type="submit">Register</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account ? Please{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold" 
            >
            Login
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center"> <SocialLogin></SocialLogin></div>
    </div>
  );
};

export default Register;
