import React from "react";
import coown from '../Assets/Images/coown.png'
import flip from '../Assets/Images/flip.png'
import land from '../Assets/Images/land.png'

function PricingPlan() {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-2'>
                    Pricing Plan for every budget
                </h1>
                <p className='text-sm'>
                    Easily invest in rental home & off-plan real estate
                </p>
            </div>
            <div className=' md:flex lg:flex lg:justify-center gap-6 md:gap-5 lg:w-10/12 mx-auto py-10 w-10/12 md:w-11/12'>
                <div className='mx-auto group border-custom transition-colors border rounded-2xl lg:mx-0 md:mx-0 w-fit py-5 px-2 text-center hover:bg-custom-green mb-6 lg:mb-0 md:mb-0'>
                    <h1 className='font-bold pb-3 transition-colors group-hover:text-white'>
                        Co-own a house
                    </h1>
                    <div className='flex justify-center py-6'>
                        <img src={coown} alt='Co-own a house' className='lg:max-w-[75%] max-w-[50%] max-w-5 mx-auto ' />
                    </div>
                    <button type='button' className='rounded-custom border-0 bg-green-100 px-6 py-2.5 mb-4 lg:w-56 font-semibold group-hover:bg-white group-hover:text-green-300'> Get Started </button>
                </div>
                <div className='mx-auto group border-custom transition-colors border rounded-2xl lg:mx-0 md:mx-0 w-fit py-5 px-2 text-center hover:bg-custom-green mb-6 lg:mb-0 md:mb-0'>
                    <h1 className='font-bold pb-3 transition-colors group-hover:text-white'>
                        Co-buy a house and flip
                    </h1>
                    <div className='flex justify-center py-6'>
                        <img src={flip} alt='Co-buy a house and flip' className='lg:max-w-[75%] max-w-[50%] mx-auto' />
                    </div>
                    <button type='button' className='rounded-custom border-0 bg-green-100 px-6 py-2.5 mb-4 lg:w-56 font-semibold group-hover:bg-white group-hover:text-green-300'> Get Started </button>
                </div>
                <div className='mx-auto group border-custom transition-colors border rounded-2xl lg:mx-0 md:mx-0 w-fit py-5 px-2 text-center hover:bg-custom-green mb-6 lg:mb-0 md:mb-0'>
                    <h1 className='font-bold pb-3 transition-colors group-hover:text-white'>
                        Co-buy a Plot Land
                    </h1>
                    <div className='flex justify-center py-6'>
                        <img src={land} alt='Co-buy a Plot Land' className='lg:max-w-[75%] max-w-[50%] mx-auto' />
                    </div>
                    <button type='button' className='rounded-custom border-0 bg-green-100 px-6 py-2.5 mb-4 lg:w-56 font-semibold group-hover:bg-white group-hover:text-green-300'> Get Started </button>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan