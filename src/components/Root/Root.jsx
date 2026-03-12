import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="root-main">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;


//Loading Related Statement:
/***
 * 1. use: usePromise > Suspense > promise > use(userPromise)
 * 2. [Less used so far: কম্পোনেন্ট রেডি হওয়ার পরে ডাটা লোড করতে চাইলে ] > useState + useEffect ( () => {}, [])
 * 3. Set Loader in the route definition: Load data before router component is rendered
 */
