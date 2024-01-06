import React, {useState} from 'react'
import {ReactComponent as FeaturedIcon} from "../Assets/Icons/fearturedicon.svg";
import {ReactComponent as ForSaleIcon} from "../Assets/Icons/forsaleicon.svg";
import {ReactComponent as UnBookedmark} from "../Assets/Icons/unBookmark.svg";
import {ReactComponent as Location} from "../Assets/Icons/locationmap2.svg";
import {ReactComponent as Bath} from "../Assets/Icons/bath.svg";
import {ReactComponent as Bed} from "../Assets/Icons/bed.svg";
import {ReactComponent as Size} from "../Assets/Icons/size.svg";
import {ReactComponent as Add} from "../Assets/Icons/addIcon.svg";
import coown from '../Assets/Images/coown.png'
import profilePhoto from '../Assets/Icons/profilephoto.png'
// import flip from '../Assets/Images/flip.png'
// import land from '../Assets/Images/land.png'
function FeaturedProject() {
    const [bookmark, setBookMark] = useState(false)
    const data: any = [
        {
            for_sale: 0,
        },
        {
            for_sale: 1,
        },
        {
            for_sale: 1,
        },
        {
            for_sale: 1,
        },
        {
            for_sale: 1,
        },
        {
            for_sale: 0,
        },





    ]
    return (
        <div>
            <div>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-2'>
                        Featured properties
                    </h1>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
                    </p>
                    <div>
                        <div className="hidden md:flex pt-3 xl:gap-6 lg:gap-6 md:gap-3 justify-center">
                            <span className="group bg-white hover:text-green-300 featuredTab rounded-custom font-medium px-4 py-2.5 relative">
                                Houses
                            <div className="group-hover:opacity-100 toolTip w-max transition-opacity bg-white text-sm text-black px-4 py-2.5 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-2.5 opacity-0 m">
                                <div className="arrow-up"></div>
                                8 Property
                            </div>
                            </span>
                            <span className="group bg-white hover:text-green-300 featuredTab rounded-custom font-semibold px-4 py-2.5 relative">
                                Smart home
                            <div className="group-hover:opacity-100 toolTip w-max transition-opacity bg-white text-sm text-black px-4 py-2.5 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-2.5 opacity-0 m">
                                <div className="arrow-up"></div>
                                8 Property
                            </div>
                            </span>
                            <span className="group bg-white hover:text-green-300 featuredTab rounded-custom font-semibold px-4 py-2.5 relative">
                                Apartments
                            <div className="group-hover:opacity-100 toolTip w-max transition-opacity bg-white text-sm text-black px-4 py-2.5 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-2.5 opacity-0 m">
                                <div className="arrow-up"></div>
                                8 Property
                            </div>
                            </span>
                            <span className="group bg-white hover:text-green-300 featuredTab rounded-custom font-semibold px-4 py-2.5 relative">
                                Office
                            <div className="group-hover:opacity-100 toolTip w-max transition-opacity bg-white text-sm text-black px-4 py-2.5 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-2.5 opacity-0 m">
                                <div className="arrow-up"></div>
                                8 Property
                            </div>
                            </span>
                            <span className="group bg-white hover:text-green-300 featuredTab rounded-custom font-semibold px-4 py-2.5 relative">
                                Villa
                            <div className="group-hover:opacity-100 toolTip w-max transition-opacity bg-white text-sm text-black px-4 py-2.5 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-2.5 opacity-0 m">
                                <div className="arrow-up"></div>
                                8 Property
                            </div>
                            </span>
                            <span className="group bg-white hover:text-green-300 featuredTab rounded-custom font-semibold px-4 py-2.5 relative">
                                Bungalow
                            <div className="group-hover:opacity-100 toolTip w-max transition-opacity bg-white text-sm text-black px-4 py-2.5 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-2.5 opacity-0 m">
                                <div className="arrow-up"></div>
                                8 Property
                            </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='featuredProperty lg:w-10/12 mx-auto'>
                    {
                        data.map((data: any, index: number) => {
                            return (
                                <div key={index} className='p-4 projectCard w-fit rounded-custom'>
                                    <div className='relative'>
                                        <div>
                                            <img src={coown} alt='property' className='w-full' />
                                        </div>
                                        <div className='flex w-full top-0 justify-between absolute'>
                                            <div className='-ml-1 mt-3.5'>
                                                <FeaturedIcon />
                                                {
                                                    data.for_sale === 0 ? <div></div> : <ForSaleIcon />
                                                }
                                            </div>
                                            <div>
                                                <UnBookedmark  className={`${bookmark ? 'fill-custom' : ''}`} onClick={() => setBookMark(!bookmark)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold pt-5'>Gorgeous Apartment Building</h4>
                                        <p className='flex items-center text-xs'>
                                            <span><Location/> </span>58 Hullbrook Road, Billesley, B13 0LA
                                        </p>
                                        <h4 className='text-custom-green font-semibold pt-3.5'>₦17,000,500</h4>
                                        <div className='flex pb-3 justify-between'>
                                            <div className='flex items-center'>
                                <span>
                                    <Bed/>
                                </span>
                                                <span className='text-xs'>
                                    Beds :
                                </span>
                                                <span className='text-xs font-semibold'>
                                    4
                                </span>
                                            </div>
                                            <div className='flex items-center'>
                                <span>
                                    <Bath/>
                                </span>
                                                <span className='text-xs'>
                                    Bath :
                                </span>
                                                <span className='text-xs font-semibold'>
                                    4
                                </span>
                                            </div>
                                            <div className='flex items-center'>
                                <span>
                                    <Size/>
                                </span>
                                                <span className='text-xs'>
                                    Sqft :
                                </span>
                                                <span className='text-xs font-semibold'>
                                    1140
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center pt-3 justify-between border-t border-custom'>
                                        <div className='flex items-center gap-1'>
                                            <Add/>
                                            <span>Compare</span>
                                        </div>
                                        <div>
                                            <img src={profilePhoto} alt='Profile' />
                                        </div>
                                        <p>3 years ago</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default FeaturedProject