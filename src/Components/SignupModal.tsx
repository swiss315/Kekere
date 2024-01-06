import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import signupImg from '../Assets/Images/signupImg.png'
import {ReactComponent as CancelIcon} from '../Assets/Icons/cancel.svg';
import {ReactComponent as UserIcon} from '../Assets/Icons/usernamicon.svg';
import {ReactComponent as GoogleIcon} from '../Assets/Icons/GoogleIcon.svg';
import {ReactComponent as FacebookIcon} from '../Assets/Icons/FacebookIcon.svg';
import {ReactComponent as EmailIcon} from '../Assets/Icons/Emailiconwhite.svg';
import {ReactComponent as PasswordIcon} from '../Assets/Icons/passwordicon.svg';

function SignupModal(props: any) {

    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.onHide}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full transform overflow-hidden max-w-[50%] rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <div className='flex'>
                                    <div className='w-5/12'>
                                        <img src={signupImg} alt='signup' className='w-full h-full object-cover' />
                                    </div>
                                    <form className='w-7/12 p-7'>
                                        <div className='flex justify-between'>
                                            <h3 className='font-semibold text-xl'>
                                                Register
                                            </h3>
                                            <CancelIcon onClick={props.onHide} className='cursor-pointer' />
                                        </div>
                                        <div className='py-4'>
                                            <label className='font-semibold text-sm'>
                                                Username
                                            </label>
                                            <div className="relative">
                                                <UserIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                                <input className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom" type="text" placeholder="Enter your username" />
                                            </div>
                                        </div>
                                        <div className='pb-4'>
                                            <label className='font-semibold text-sm'>
                                                Email
                                            </label>
                                            <div className="relative">
                                                <EmailIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                                <input className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom" type="text" placeholder="Enter your username" />
                                            </div>
                                        </div>
                                        <div className='pb-4'>
                                            <label className='font-semibold text-sm'>
                                                Password
                                            </label>
                                            <div className="relative">
                                                <PasswordIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                                <input className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom" type="password" placeholder="Enter your username" />
                                            </div>
                                        </div>
                                        <div className='pb-4'>
                                            <label className='font-semibold text-sm'>
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <PasswordIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                                <input className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom" type="password" placeholder="Enter your username" />
                                            </div>
                                        </div>
                                        <button className='w-full bg-custom-darkgreen text-white font-semibold rounded-custom py-2'>
                                            Sign Up
                                        </button>
                                        <div className='text-center py-3 text-sm'>
                                            <p>Already have an account? <span className='font-semibold text-custom-green'>Login</span></p>
                                        </div>
                                        <div className='flex gap-2 items-center text-sm'>
                                            <hr className='w-full'/>
                                            <p className='w-full text-custom'>or Register with</p>
                                            <hr className='w-full'/>
                                        </div>
                                        {/*Social Login*/}
                                        <div className='flex justify-between gap-4 pt-6'>
                                            <button type='button' className=' flex gap-3 items-center w-full border-custom font-semibold border py-3 px-7 rounded-custom'>
                                                <GoogleIcon /> Google
                                            </button>
                                            <button type='button' className='flex gap-3 items-center w-full border-custom font-semibold border py-3 px-7 rounded-custom'>
                                                <FacebookIcon /> Facebook
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default SignupModal