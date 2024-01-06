import React from 'react'
import Navbar from "../Components/Layout/Navbar";
import Partners from "../Components/Partners";
import PricingPlan from "../Components/PricingPlan";
import Benefit from "../Components/Benefit";
import Contact from "../Components/Contact";
import Advert from "../Components/Advert";
import Footer from "../Components/Layout/Footer";
import FeaturedProject from "../Components/FeaturedProject";
import Homepage from "../Components/Homepage";
import Steps from "../Components/Steps";

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
            <Advert />
            <Footer />
        </div>
    )
}
export default LandingPage