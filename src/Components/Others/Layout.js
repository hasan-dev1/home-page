import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer';
import Navbar from '../SharedPage/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;