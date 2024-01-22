import React from "react";
import coown from '../../Assets/Images/coown.png'
import {ReactComponent as RegisterIcon} from "../../Assets/Icons/Registericon.svg";
import {ReactComponent as PhoneIcon} from "../../Assets/Icons/phonewhiteicon.svg";


function Advert() {
    return (
        <div className='my-12'>
            <div className='flex-col md:flex-col lg:flex-row flex lg:w-10/12 xl:w-9/12 justify-center lg:gap-8 mx-auto gap-14 md:gap-14 md:w-11/12 w-11/12'>
                <div className='rounded-custom border-0 bg-green-100 lg:p-6 md:p-3 p-3  relative'>
                    <div className='flex gap-4 md:gap-4 items-center lg:gap-4 py-2'>
                        <img src={coown} alt='Buy a Property' className='max-w-[17%] rounded-custom'/>
                        <div>
                            <h1 className='text-sm md:text-xl lg:text-xl xl:text-2xl font-semibold'>Contact Seller</h1>
                            <p className='text-xs lg:text-xs xl:text-sm font-semibold md:py-2 lg:py-0'>Tell us your needs, we will give you thousands of suggestions for the dream home.</p>
                        </div>
                    </div>
                    <button className='text-xs md:text-md absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-between mx-auto self-center items-center h-fit bg-green-600 rounded-custom border-0 text-white py-2 px-4 md:py-3.5 md:px-5'>
                        <div className='flex justify-center px-1.5' >
                            <PhoneIcon className='' />
                        </div>
                        <div className='border-l border-gray-400 font-bold lg:text-xs px-1 md:px-3 flex flex-row'>Contact Seller</div>
                    </button>
                </div>
                <div className='rounded-custom border-0 bg-green-100 lg:p-6 md:p-3 p-3 relative'>
                    <div className='flex gap-4 md:gap-4 items-center lg:gap-4 py-2'>
                        <img src={coown} alt='Buy a Property' className='max-w-[17%] rounded-custom'/>
                        <div>
                            <h1 className='text-sm lg:text-xl xl:text-2xl font-semibold'>Buy a Property</h1>
                            <p className='text-xs lg:text-xs xl:text-sm font-semibold md:py-2 lg:py-0'>Tell us your needs, we will give you thousands of suggestions for the dream home.</p>
                        </div>
                    </div>
                    <button className='text-xs md:text-md absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-between mx-auto self-center items-center h-fit bg-green-600 rounded-custom border-0 text-white py-2 px-4 md:py-3.5 md:px-5'>
                        <div className='flex justify-center px-1.5' >
                            <RegisterIcon className='' />
                        </div>
                        <div className='border-l border-gray-400 font-bold lg:text-xs px-1 md:px-3 flex flex-row'>Sell Property</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Advert