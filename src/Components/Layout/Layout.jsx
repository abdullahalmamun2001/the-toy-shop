import React from 'react';
import { Outlet } from "react-router-dom";
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;