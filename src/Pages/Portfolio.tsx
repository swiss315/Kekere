import React from 'react'
import {Gps, Home, Location, SearchNormal1, UsdCoin} from "iconsax-react";
import propertyImage from "../Assets/Images/propertyImage.png";
import {Link} from "react-router-dom";

function Portfolio() {
    // const [enabled, setEnabled] = useState(false)
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
    return (
        <div className='py-9'>
            <div className='rounded-3xl bg-white w-11/12 mx-auto py-4 lg:px-16 px-8 '>
                <div className='flex lg:justify-evenly xl:justify-between flex-wrap gap-x-2 lg:gap-x-0 gap-y-3.5'>
                    <div className='flex gap-2.5'>
                        <div className='flex items-center border-custom-green border rounded-full px-2.5 py-2'>
                            <Location size="18" color="#286722"/>
                            <input type='text' placeholder='Lagos Nigeria'
                                   className='focus-visible:outline-0 border-0 px-2 text-xs text-custom'/>
                            <Gps size="18" color="#D9D9D9"/>
                        </div>
                        <div className='flex items-center border-custom-green border rounded-full px-2.5 py-2'>
                            <Home size="18" color="#286722"/>
                            <select className='focus-visible:outline-0 border-0 text-xs px-2 text-custom'>
                                <option defaultValue=''>
                                    Property type
                                </option>
                            </select>
                        </div>
                        <div className='flex items-center border-custom-green border rounded-full px-2.5 py-2'>
                            <UsdCoin size="18" color="#286722"/>
                            <select className='focus-visible:outline-0 border-0 text-xs px-2 text-custom'>
                                <option defaultValue=''>
                                    Property type
                                </option>
                            </select>
                        </div>
                        <div className='flex gap-2 items-center bg-black border-custom-green border rounded-full px-6 py-2'>
                            <SearchNormal1 size="18" color="#ffffff"/>
                            <p className='text-white text-xs md:text-sm'>Search</p>
                        </div>
                    </div>
                    {/*<div className='flex gap-2 items-center'>*/}
                    {/*    <label className="flex items-center cursor-pointer">*/}
                    {/*        <div className="mr-3 text-xs md:text-sm font-semibold">Map View</div>*/}
                    {/*        <div className="relative">*/}
                    {/*            <input*/}
                    {/*                type="checkbox"*/}
                    {/*                id="toggle"*/}
                    {/*                className="hidden"*/}
                    {/*                checked={enabled}*/}
                    {/*                onChange={() => setEnabled(!enabled)}*/}
                    {/*            />*/}
                    {/*            <div className={`toggle__line w-12 h-6 rounded-full shadow-inner ${*/}
                    {/*                enabled ? 'bg-custom-midnightgreen' : 'bg-gray-400 '*/}
                    {/*            }`}></div>*/}
                    {/*            <div*/}
                    {/*                className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 ${*/}
                    {/*                    enabled ? 'right-0' : 'left-0'*/}
                    {/*                }`}*/}
                    {/*            ></div>*/}
                    {/*        </div>*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    <div>
                        <button
                            className='bg-custom-midnightgreen text-xs md:text-sm font-semibold rounded-custom py-2 px-6 text-white'>
                            Make an Investment
                        </button>
                    </div>
                </div>
                <div className='py-4'>
                    <h1 className='font-semibold text-xl'>
                        Search result in Lagos, Nigeria
                    </h1>
                    <p className='text-sm'>
                        4 properties
                    </p>
                </div>
                <div className='gap-7 w-fit justify-center mx-auto mt-7 flex flex-wrap'>
                    { Investment.map((investment, index) => {
                        return (
                            <div key={index} className='rounded-3xl overflow-hidden w-[285px] sm:w-[200px] md:w-[285px] bg-white border border-custom-grey'>
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
                </div>
            </div>
        </div>
    )
}

export default Portfolio