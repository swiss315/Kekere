import React from 'react'
import {ReactComponent as Logo} from "../../Assets/Icons/Logo.svg";
import {ReactComponent as ListIcon} from "../../Assets/Icons/listicon.svg";
import {ReactComponent as ArrowIcon} from "../../Assets/Icons/signuparrow.svg";
function Footer() {
    return (
        <div className='border-t border-custom'>
            <div className='lg:flex lg:justify-between py-5 lg:w-11/12 xl:w-10/12 mx-auto'>
                <div className='lg:w-1/2 xl:w-1/3 md:w-1/2 mb-6 lg:mb-0 mx-auto md:text-start text-center'>
                    <Logo style={{ width: '100%' }} />
                </div>
                <div className='lg:w-1/2 xl:w-1/3 md:w-1/2 mb-6 lg:mb-0 mx-auto md:text-start text-center'>
                    <h4 className='font-semibold mb-2.5'>Office Address</h4>
                    <p className='text-custom font-semibold text-sm'>
                        Head Office:
                    </p>
                    <p className='font-semibold text-sm'>
                        Lagos, Nigeria
                    </p>
                </div>
                <div className='lg:w-1/2 xl:w-1/3 md:w-1/2 mb-6 lg:mb-0 md:text-start mx-auto text-center'>
                    <h4 className='font-semibold mb-3.5'>Our Company</h4>
                    <ul style={{ lineHeight: "2"}} >
                        <li className='text-custom flex gap-4 items-center lg:justify-start justify-center'>
                            <span>
                                <ListIcon />
                            </span>
                            Property for Sale
                        </li>
                        <li className='text-custom flex gap-4 items-center lg:justify-start justify-center'>
                            <span>
                                <ListIcon />
                            </span>
                            About Us
                        </li>
                        <li className='text-custom flex gap-4 items-center lg:justify-start justify-center'>
                            <span>
                                <ListIcon />
                            </span>
                            Our Agents
                        </li>
                        <li className='text-custom flex gap-4 items-center lg:justify-start justify-center'>
                            <span>
                                <ListIcon />
                            </span>
                            Terms Of Use
                        </li>
                        <li className='text-custom flex gap-4 items-center lg:justify-start justify-center'>
                            <span>
                                <ListIcon />
                            </span>
                            Privacy Policy
                        </li>
                        <li className='text-custom lg:justify-start justify-center flex gap-4 items-center'>
                            <span>
                                <ListIcon />
                            </span>
                            Contact Us
                        </li>
                    </ul>
                </div>
                <form className='lg:w-1/2 xl:w-1/3 md:w-1/2 w-3/4 mx-auto md:text-start text-center'>
                    <h4 className='font-semibold mb-3.5'>Newsletter</h4>
                    <p className='pb-3'>Sign up to receive the latest articles</p>
                    <input type='text' placeholder='Enter your email address' className='w-full rounded-custom border p-4'/>
                    <button className='bg-custom-green my-3 flex items-center gap-4 justify-center py-3.5 w-full text-white font-semibold rounded-custom text-center'>
                        Sign Up
                        <span>
                            <ArrowIcon />
                        </span>
                    </button>
                    <div>
                        <input type='checkbox' className='rounded-custom'/>
                        <label className='text-custom text-sm pl-1.5'>I have read and agree to the terms & conditions</label>
                    </div>
                </form>

            </div>
            <div>
                <p className='text-center pt-14'>
                    Copyright © 2023 <span className='font-semibold '>kekere</span>
                </p>
            </div>
        </div>
    )
}

export default Footer