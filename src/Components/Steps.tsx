import React, {useState} from "react";
import {ReactComponent as Vertical} from "../Assets/Icons/vertical.svg";
import {ReactComponent as HitwSignUp} from "../Assets/Icons/HitwSignup.svg";
import {ReactComponent as HitwBrowser} from "../Assets/Icons/HitwBrowser.svg";
import {ReactComponent as HitwChoose} from "../Assets/Icons/HitwChoose.svg";
import {ReactComponent as HitwMonitor} from "../Assets/Icons/HitwMonitor.svg";
import {ReactComponent as HitwDeal} from "../Assets/Icons/HitwDeal.svg";


function Steps() {
    const [image, setImage] = useState('SignUp')
    return (
        <div className='lg:flex lg:justify-center md:flex md:justify-center pb-14 md:pb-3 p-3'>
            <div className='md:w-full lg:w-10/12 p-3 text-center'>
                <p className='text-sm text-custom-green'>How It Works</p>
                <h1 className='text-2xl md:text-4xl font-bold pb-3'>Here's a step-by-step guide <br/> on how the process works</h1>
                <div className='flex gap-2.5'>
                    <div className='w-full md:w-1/2'>
                        <div className='flex steps' onMouseOver={() => setImage('SignUp')}>
                            <div className='block w-10 flex-shrink-0'>
                                <span className='block h-10 rounded-full mb-2 bg-custom-grey card-hover:bg-custom-darkgreen text-white font-semibold p-2'>
                                    1
                                </span>
                                <div className='flex justify-center '>
                                    <Vertical />
                                </div>
                            </div>
                            <div className='text-start pl-8'>
                                <h1 className='font-medium text-2xl text-custom'>Sign Up</h1>
                                <p className='text-sm text-custom'>Create a free kekere account to access global real estate investment opportunities.</p>
                            </div>
                        </div>

                        <div className='flex  mt-2 stepBrowser' onMouseOver={() => setImage('Browse')}>
                            <div className='block w-10 flex-shrink-0'>
                                <span className='block h-10 rounded-full mb-2 bg-custom-grey text-white font-semibold p-2'>
                                    2
                                </span>
                                <div className='flex justify-center '>
                                    <Vertical />
                                </div>
                            </div>
                            <div className='text-start  pl-6'>
                                <h1 className='font-medium text-2xl text-custom'>2. Browse Opportunities</h1>
                                <p className='text-sm text-custom'>Explore expert-curated properties with detailed information to help you decide.</p>
                            </div>
                        </div>
                        <div className='flex  mt-2 stepChoose' onMouseOver={() => setImage('Choose')}>
                            <div className='block w-10 flex-shrink-0'>
                                <span className='block h-10 rounded-full mb-2 bg-custom-grey text-white font-semibold p-2'>
                                    3
                                </span>
                                <div className='flex justify-center '>
                                    <Vertical />
                                </div>
                            </div>
                            <div className='text-start  pl-6'>
                                <h1 className='font-medium text-2xl text-custom'>3. Choose Investment</h1>
                                <p className='text-sm text-custom'>Select your desired property and invest as little as $50.</p>
                            </div>
                        </div>
                        <div className='flex  mt-2 stepMonitor' onMouseOver={() => setImage('Monitor')}>
                            <div className='block w-10 flex-shrink-0'>
                                <span className='block h-10 rounded-full mb-2 bg-custom-grey text-white font-semibold p-2'>
                                    4
                                </span>
                                <div className='flex justify-center '>
                                    <Vertical />
                                </div>
                            </div>
                            <div className='text-start  pl-6'>
                                <h1 className='font-medium text-2xl text-custom'>Buy Fractional Shares</h1>
                                <p className='text-sm text-custom'>Buy Fractional Shares</p>
                            </div>
                        </div>
                        <div className='flex  mt-2 stepDeal' onMouseOver={() => setImage('Deal')}>
                            <div className='block w-10 flex-shrink-0'>
                                <span className='block h-10 rounded-full mb-2 bg-custom-grey text-white font-semibold p-2'>
                                    5
                                </span>
                            </div>
                            <div className='text-start  pl-6 text-custom'>
                                <h1 className='font-medium text-2xl text-custom'>5. Monitor & Manage Portfolio</h1>
                                <p className='text-sm text-custom'>Buy Fractional Shares</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block  w-1/2  my-7'>
                        <div className='w-full xl:w-8/12 mx-auto h-full howItWork bg-custom-grey items-center flex justify-center'>

                            {
                                image === "SignUp" ?
                                    <HitwSignUp /> :
                                image === "Browse" ?
                                    <HitwBrowser /> :
                                image === "Choose" ?
                                    <HitwChoose /> :
                                image === "Monitor" ?
                                    <HitwMonitor /> :
                                image === "Deal" ?
                                    <HitwDeal /> :
                                    <HitwSignUp />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Steps