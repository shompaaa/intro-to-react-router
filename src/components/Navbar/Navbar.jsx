import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      {
        //By using this way browser will load every time when the route changes
        /* <nav>
               <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a>
            </nav>  */
      }

      {/* Browser will not refresh */}

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
