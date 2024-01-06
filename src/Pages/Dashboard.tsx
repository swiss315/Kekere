import React, {useState} from "react";
import {ArrowCircleDown2, ArrowCircleLeft, ArrowCircleRight, ArrowCircleUp2, House2, User, Wallet} from "iconsax-react";
import {ReactComponent as CoOwned} from "../Assets/Icons/coOwn.svg";
import {ReactComponent as Development} from "../Assets/Icons/development.svg";
import {ReactComponent as OwnedLand} from "../Assets/Icons/ownland.svg";
import backgroundImage from "../Assets/Images/refertoearn.png";
import propertyImage from "../Assets/Images/propertyImage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";
import {Link} from "react-router-dom";
function Dashboard() {
    // custom background style for refer to earn
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius:'25px'
    };

    const Investment = [
        {
            id: 1,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 0,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 2,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 3,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 3,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 5,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 4,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 0,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 5,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 0,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 6,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 0,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 7,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 6,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 8,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 3,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 9,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 0,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },
        {
            id: 10,
            title: 'Co-owned House',
            totalPrice: '₦100,000,000',
            noOfSlotAvailable: 0,
            totalNumberOfSlot: 9,
            priceOfSlot: '₦20,000,000',
            annualEarning: '₦2,000,000'
        },

    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // variableWidth: true,
        afterChange: (index: any) => setCurrentSlide(index),
        nextArrow: <ArrowCircleRight size="35" color={currentSlide === 8 ? "#8E8E93" : "#286722" } variant="Bold" />,
        prevArrow: <ArrowCircleLeft size="35" color={currentSlide === 0 ? "#8E8E93" : "#286722" } variant="Bold" />
    };

    return (
        <div className='overflow-scroll'>
            {/* cards */}
            <div className='p-7 pb-0'>
                <div className='flex lg:w-11/12 mx-auto bg-white dashboardcard rounded mb-1.5'>
                    <div className='py-5 px-14 border-r border-custom w-full'>
                        <div className='flex justify-between items-center pb-2.5'>
                            <h1 className='font-semibold uppercase text-sm'>Portfolio value</h1>
                            <ArrowCircleUp2 size="18" color="#0AB39C"/>
                        </div>
                        <div className='flex justify-between items-center justify-c'>
                            <User size="40" color="#192A3E"/>
                            <h1 className='font-semibold uppercase text-sm'>₦17,000,000</h1>
                        </div>
                    </div>
                    <div className='py-5 px-14 border-r border-custom w-full'>
                        <div className='flex justify-between items-center pb-2.5'>
                            <h1 className='font-semibold uppercase text-sm'>Properties</h1>
                            <ArrowCircleDown2 size="18" color="#F06548"/>
                        </div>
                        <div className='flex justify-between items-center justify-c'>
                            <House2 size="40" color="#192A3E"/>
                            <h1 className='font-semibold uppercase text-sm'>10</h1>
                        </div>
                    </div>
                    <div className='py-5 px-14 border-r border-custom w-full'>
                        <div className='flex justify-between items-center pb-2.5'>
                            <h1 className='font-semibold uppercase text-sm'>Wallet</h1>
                            <ArrowCircleDown2 size="18" color="#F06548"/>
                        </div>
                        <div className='flex justify-between items-center justify-c'>
                            <Wallet size="40" color="#192A3E"/>
                            <h1 className='font-semibold uppercase text-sm'>₦200,000,000</h1>
                        </div>
                    </div>
                    <div className='py-5 px-14 border-r border-custom w-full'>
                        <div className='flex justify-between items-center pb-2.5'>
                            <h1 className='font-semibold uppercase text-sm'>Earning</h1>
                            <ArrowCircleDown2 size="18" color="#F06548"/>
                        </div>
                        <div className='flex justify-between items-center justify-c'>
                            <User size="32" color="#192A3E"/>
                            <h1 className='font-semibold uppercase text-sm'>₦3,200,000.00</h1>
                        </div>
                    </div>
                </div>
                <div className='flex lg:w-11/12 mx-auto'>
                    <div className='flex bg-white w-9/12 dashboardcard rounded mb-5'>
                        <div className='py-5 px-14 border-r border-custom w-full'>
                            <div className='flex justify-between items-center pb-2.5'>
                                <h1 className='font-semibold uppercase text-sm'>Co-owned houses</h1>
                                <ArrowCircleUp2 size="18" color="#0AB39C"/>
                            </div>
                            <div className='flex justify-between items-center justify-c'>
                                <CoOwned/>
                                <h1 className='font-semibold uppercase text-sm'>11</h1>
                            </div>
                        </div>
                        <div className='py-5 px-14 border-r border-custom w-full'>
                            <div className='flex justify-between items-center pb-2.5'>
                                <h1 className='font-semibold uppercase text-sm'>Co-owned off plan development</h1>
                                <ArrowCircleDown2 size="18" color="#0AB39C"/>
                            </div>
                            <div className='flex justify-between items-center justify-c'>
                                <Development color="#192A3E"/>
                                <h1 className='font-semibold uppercase text-sm'>2</h1>
                            </div>
                        </div>
                        <div className='py-5 px-14 border-r border-custom w-full'>
                            <div className='flex justify-between items-center pb-2.5'>
                                <h1 className='font-semibold uppercase text-sm'>C0-owned land</h1>
                                <ArrowCircleDown2 size="18" color="#0AB39C"/>
                            </div>
                            <div className='flex justify-between items-center justify-c'>
                                <OwnedLand color="#192A3E"/>
                                <h1 className='font-semibold uppercase text-sm'>2</h1>
                            </div>
                        </div>
                    </div>
                    <div className='py-3.5 px-2 w-3/12 bg-custom-white'>
                        <div className='py-3.5 px-7' style={containerStyle}>
                            <h1 className='font-bold text-white'>Refer & Earn</h1>
                            <p className='text-sm'>Get <span className='text-custom-green'>₦1000</span> cashback for
                                every referral</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* recent investment */}
            <div className='lg:w-11/12 mx-auto '>
                <h1 className='font-semibold'>My recent investment</h1>
                <div className='w-11/12 mx-auto mt-7'>
                    <Slider {...settings} >
                        { Investment.map((investment, index) => {
                            return (
                                <div key={index} className='rounded-3xl overflow-hidden w-fit bg-white border border-custom-grey'>
                                    <div className='relative'>
                                        <img src={propertyImage} alt='investment' className='w-full'/>
                                        <span
                                            className={`absolute uppercase bg-white top-2 font-semibold left-2 rounded-full text-xs py-1 px-2.5 ${investment.noOfSlotAvailable === 0 ? 'text-red-500' : 'text-green-600'}`}>
                                        {investment.noOfSlotAvailable === 0 ? 'Sold Out' : 'Active'}
                                        </span>
                                    </div>
                                    <div className='p-3'>
                                        <h1 className='py-2'>{investment.title}</h1>
                                        <p className='font-bold text-lg pb-2.5'>{investment.totalPrice}</p>
                                        <div className='flex justify-between text-xs pb-1'>
                                            <span>No Of Slot Available:</span>
                                            <span className={`font-semibold ${investment.noOfSlotAvailable === 0 ? 'text-red-500' : 'text-green-600'}`}>
                                                {investment.noOfSlotAvailable === 0 ? 'Sold Out' : `${investment.noOfSlotAvailable} Slot Available`}
                                            </span>
                                        </div>
                                        <div className='flex justify-between gap-1 pb-1.5'>
                                            {Array.from({length: investment.totalNumberOfSlot}).map((_, index) => (
                                                <hr className={`h-2 w-8 rounded-full ${index < (investment.totalNumberOfSlot - investment.noOfSlotAvailable) ? 'bg-custom-darkgreen' : 'bg-custom'}`}/>
                                            ))}
                                        </div>
                                        <div className='flex justify-between text-xs pb-2.5'>
                                            <span>Price Per Slot:</span>
                                            <span className={`font-semibold`}>{investment.priceOfSlot}</span>
                                        </div>
                                        <div className='flex justify-between text-xs pb-6'>
                                            <span>Annual Earnings:</span>
                                            <span className={`font-semibold`}>{investment.annualEarning}</span>
                                        </div>
                                        <div className='flex justify-end'>
                                            <Link to={`/property/${investment.id}`}
                                                className='bg-custom-midnightgreen px-7 py-1 rounded-full text-white text-sm'>
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Dashboard