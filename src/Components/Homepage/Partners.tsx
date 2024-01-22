import React from "react";
import {ReactComponent as PaddyCover} from "../../Assets/Icons/paddycover.svg";
import {ReactComponent as Vfd} from "../../Assets/Icons/vfd.svg";
import {ReactComponent as PropertyPro} from "../../Assets/Icons/property.svg";
import {ReactComponent as TechPartners} from "../../Assets/Icons/techpatners.svg";
import {ReactComponent as Anchoria} from "../../Assets/Icons/anchoria.svg";
import {ReactComponent as Dynasty} from "../../Assets/Icons/dynasty.svg";
import {ReactComponent as Herel} from "../../Assets/Icons/herel.svg";


function Partners() {
    return (
        <div className='lg:flex lg:justify-center md:flex md:justify-center p-3'>
            <div className='  md:w-full lg:w-10/12 p-3'>
                <h6 className='font-bold pb-5'>Trusted Partners</h6>
                <div className='flex gap-2 md:gap-5 lg:gap-6 justify-between '>
                    <PaddyCover />
                    <Vfd />
                    <PropertyPro />
                    <TechPartners />
                    <Anchoria />
                    <Dynasty />
                    <Herel />
                </div>
            </div>
        </div>
    )
}

export default Partners