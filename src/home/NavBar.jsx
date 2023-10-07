import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const navLinks = <>
        <li className="text-base font-medium"> <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-amber-500 text-white" : ""
              }>Home</NavLink></li>
        <li className="text-base font-medium"> <NavLink to='/about' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-amber-500 text-white" : ""
              }>About</NavLink></li>
        <li className="text-base font-medium"> <NavLink to='/services' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-amber-500 text-white" : ""
              }>Services</NavLink></li>
        <li className="text-base font-medium"> <NavLink to='/gallery' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-amber-500 text-white" : ""
              }>Gallery</NavLink></li>
        <li className="text-base font-medium"> <NavLink to='/contact' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-amber-500 text-white" : ""
              }>Contact</NavLink></li>
    </>



    return (
        <div>
            <div className="navbar bg-base-100 py-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl font-bold">Events Planner</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'><button className="btn bg-amber-500 text-white ">Login</button></Link>
  </div>
</div>
        </div>
    );
};

export default NavBar;