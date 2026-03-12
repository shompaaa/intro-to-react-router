import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='root-main'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;