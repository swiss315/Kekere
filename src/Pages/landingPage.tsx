import React from 'react'
import Navbar from "../Components/Layout/Navbar";
import Partners from "../Components/Homepage/Partners";
import PricingPlan from "../Components/Homepage/PricingPlan";
import Benefit from "../Components/Homepage/Benefit";
import Contact from "../Components/Homepage/Contact";
import Advert from "../Components/Homepage/Advert";
import Footer from "../Components/Layout/Footer";
import FeaturedProject from "../Components/Homepage/FeaturedProject";
import Homepage from "../Components/Homepage/Homepage";
import Steps from "../Components/Homepage/Steps";
import Customer from "../Components/Homepage/Customer";

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Homepage />
            <Partners />
            <Steps />
            <PricingPlan />
            <FeaturedProject />
            <Benefit />
            <Contact />
            <Customer />
            <Advert />
            <Footer />
        </div>
    )
}
export default LandingPage