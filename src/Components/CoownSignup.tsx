import React from "react";
import {ReactComponent as RegisterBg} from "../Assets/Images/registerbg.svg"
import {ReactComponent as UserIcon} from '../Assets/Icons/usernamicon.svg';
import {ReactComponent as EmailIcon} from '../Assets/Icons/Emailiconwhite.svg';
import {ReactComponent as PasswordIcon} from '../Assets/Icons/passwordicon.svg';
import {Link} from "react-router-dom";

function CoownSignup() {
    return(
        <div>
            <div className='relative overflow-hidden' style={{height: '92vh'}}>
                <div className='opacity-20 overflow-hidden'  >
                    <RegisterBg />
                </div>
                <div className='absolute top-10 flex flex-col items-center justify-center w-full'>
                    <div className='bg-white rounded-xl w-4/12 overflow-hidden' style={{boxShadow: '0px 2px 8px 2px #8C8C8C1A'}}>
                        <form className=' p-7 bg-white'>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold text-xl'>
                                    Register
                                </h3>
                            </div>
                            <div className='py-4'>
                                <label className='font-semibold text-sm'>
                                    Username
                                </label>
                                <div className="relative">
                                    <UserIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input
                                        className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                        type="text" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <label className='font-semibold text-sm'>
                                    Email
                                </label>
                                <div className="relative">
                                    <EmailIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input
                                        className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                        type="text" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='py-4'>
                                <label className='font-semibold text-sm'>
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <UserIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input
                                        className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                        type="text" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <label className='font-semibold text-sm'>
                                    BVN
                                </label>
                                <div className="relative">
                                    <EmailIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input
                                        className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                        type="text" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <label className='font-semibold text-sm'>
                                    Password
                                </label>
                                <div className="relative">
                                    <PasswordIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input
                                        className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                        type="password" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <label className='font-semibold text-sm'>
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <PasswordIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input
                                        className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                        type="password" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <button className='w-full bg-custom-darkgreen text-white font-semibold rounded-custom py-2'>
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className='text-center py-3 text-sm'>
                        <p>Got an account? <Link to='/login'
                            className='font-semibold text-custom-green'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoownSignup