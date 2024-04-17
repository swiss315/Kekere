import React from 'react'
import Navbar from "./Navbar";
import {Route} from "react-router-dom";
import LandingPage from "../../Pages/landingPage";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import CoownRegister from "../../Pages/CoownRegister";
import Forgotpassword from "../../Pages/Forgetpassword";
import About from "../../Pages/About";

function Layout() {
    return (
        <div>
            <Navbar />
            <div>
                <Route index element={<LandingPage />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='register/co-own' element={<CoownRegister />} />
                <Route path='forgotpassword' element={<Forgotpassword />} />
                <Route path='about' element={<About />} />
            </div>
        </div>
    )
}
export default Layout