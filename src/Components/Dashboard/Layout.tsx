import React from 'react';
import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Footer from "./Footer";
import Portfolio from "../../Pages/Portfolio";
import Viewproperty from "../../Pages/Viewproperty";
import Listing from "../../Pages/Listing";
import Wallet from "../../Pages/Wallet";

function Layout() {
    return (
        <div className='relative h-screen flex flex-col'>
            <Navbar />
            <div className='bg-custom-white flex-grow overflow-y-auto'>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/property/:id' element={<Viewproperty />} />
                    <Route path='/listing' element={<Listing />} />
                    <Route path='/wallet' element={<Wallet />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Layout